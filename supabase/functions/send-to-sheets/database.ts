
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.1";
import { 
  getBusinessTypeLabel, 
  getTeamSizeLabel,
  getCurrentUseLabel, 
  getRepetitiveTasksLabel,
  getManualAreasLabels,
  getLeadHandlingLabel,
  getSopApproachLabel,
  getAIComfortLabel,
  getAutomationPriorityLabel,
  getManualHoursLabel,
  getTimeOwnerLabel,
  getHourlyValueLabel
} from "./mappers.ts";

// Create a Supabase client
export function createSupabaseClient() {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );
}

// Store score data in the database
export async function storeScoreData(score: number, formData: any, costOfInaction: number) {
  console.log("Preparing data for insertion into ai_score_results");
  
  // Create database client
  const supabaseAdmin = createSupabaseClient();
  
  // Prepare the data for insertion
  const insertData = {
    score,
    readiness_score: score,
    cost_of_inaction: costOfInaction,
    full_name: formData.fullName,
    email: formData.email,
    linkedin: formData.linkedin,
    business_type_label: getBusinessTypeLabel(formData.businessType),
    team_size_label: getTeamSizeLabel(formData.teamSize),
    current_use_label: getCurrentUseLabel(formData.currentUse),
    repetitive_tasks_label: getRepetitiveTasksLabel(formData.repetitiveTasks),
    manual_areas_labels: getManualAreasLabels(formData.manualAreas),
    lead_handling_label: getLeadHandlingLabel(formData.leadHandling),
    sop_approach_label: getSopApproachLabel(formData.sopApproach),
    ai_comfort_label: getAIComfortLabel(formData.aiComfort),
    automation_priority_label: getAutomationPriorityLabel(formData.automationPriority),
    manual_hours_label: getManualHoursLabel(formData.manualHours),
    time_owner_label: getTimeOwnerLabel(formData.timeOwner),
    hourly_value_label: getHourlyValueLabel(formData.hourlyValue)
  };

  console.log("Inserting data into ai_score_results:", insertData);

  // Insert the data into the database
  const { data, error } = await supabaseAdmin
    .from('ai_score_results')
    .insert(insertData)
    .select();

  if (error) {
    console.error("Database error:", error);
    throw new Error(`Database error: ${error.message}`);
  }

  console.log("Successfully stored score results in database:", data);
  return data;
}
