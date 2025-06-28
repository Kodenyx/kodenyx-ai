export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_audit_week1_responses: {
        Row: {
          additional_thoughts: string | null
          audit_goal: string | null
          chase_down_tasks: string[] | null
          client_assignment: string | null
          client_notes_storage: string | null
          confidence_needs: string | null
          created_at: string
          delivery_tools: string[] | null
          id: string
          inefficient_tasks: string[] | null
          manual_onboarding: string | null
          needed_data: string | null
          new_client_rejection: string | null
          onboarding_process: string | null
          other_delivery_tool: string | null
          sales_ops_tools: string | null
          scaling_issues: string | null
          time_consuming_work: string | null
          top_workflows: string | null
          tracking_progress: string | null
          underused_tools: string | null
          update_gathering: string | null
          updated_at: string
          would_break_first: string | null
        }
        Insert: {
          additional_thoughts?: string | null
          audit_goal?: string | null
          chase_down_tasks?: string[] | null
          client_assignment?: string | null
          client_notes_storage?: string | null
          confidence_needs?: string | null
          created_at?: string
          delivery_tools?: string[] | null
          id?: string
          inefficient_tasks?: string[] | null
          manual_onboarding?: string | null
          needed_data?: string | null
          new_client_rejection?: string | null
          onboarding_process?: string | null
          other_delivery_tool?: string | null
          sales_ops_tools?: string | null
          scaling_issues?: string | null
          time_consuming_work?: string | null
          top_workflows?: string | null
          tracking_progress?: string | null
          underused_tools?: string | null
          update_gathering?: string | null
          updated_at?: string
          would_break_first?: string | null
        }
        Update: {
          additional_thoughts?: string | null
          audit_goal?: string | null
          chase_down_tasks?: string[] | null
          client_assignment?: string | null
          client_notes_storage?: string | null
          confidence_needs?: string | null
          created_at?: string
          delivery_tools?: string[] | null
          id?: string
          inefficient_tasks?: string[] | null
          manual_onboarding?: string | null
          needed_data?: string | null
          new_client_rejection?: string | null
          onboarding_process?: string | null
          other_delivery_tool?: string | null
          sales_ops_tools?: string | null
          scaling_issues?: string | null
          time_consuming_work?: string | null
          top_workflows?: string | null
          tracking_progress?: string | null
          underused_tools?: string | null
          update_gathering?: string | null
          updated_at?: string
          would_break_first?: string | null
        }
        Relationships: []
      }
      ai_score_results: {
        Row: {
          ai_comfort_label: string | null
          automation_priority_label: string | null
          business_type_label: string | null
          cost_of_inaction: number | null
          created_at: string
          current_use_label: string | null
          email: string | null
          full_name: string | null
          hourly_value_label: string | null
          id: string
          lead_handling_label: string | null
          linkedin: string | null
          manual_areas_labels: string[] | null
          manual_hours_label: string | null
          readiness_score: number | null
          repetitive_tasks_label: string | null
          score: number
          sop_approach_label: string | null
          team_size_label: string | null
          time_owner_label: string | null
        }
        Insert: {
          ai_comfort_label?: string | null
          automation_priority_label?: string | null
          business_type_label?: string | null
          cost_of_inaction?: number | null
          created_at?: string
          current_use_label?: string | null
          email?: string | null
          full_name?: string | null
          hourly_value_label?: string | null
          id?: string
          lead_handling_label?: string | null
          linkedin?: string | null
          manual_areas_labels?: string[] | null
          manual_hours_label?: string | null
          readiness_score?: number | null
          repetitive_tasks_label?: string | null
          score: number
          sop_approach_label?: string | null
          team_size_label?: string | null
          time_owner_label?: string | null
        }
        Update: {
          ai_comfort_label?: string | null
          automation_priority_label?: string | null
          business_type_label?: string | null
          cost_of_inaction?: number | null
          created_at?: string
          current_use_label?: string | null
          email?: string | null
          full_name?: string | null
          hourly_value_label?: string | null
          id?: string
          lead_handling_label?: string | null
          linkedin?: string | null
          manual_areas_labels?: string[] | null
          manual_hours_label?: string | null
          readiness_score?: number | null
          repetitive_tasks_label?: string | null
          score?: number
          sop_approach_label?: string | null
          team_size_label?: string | null
          time_owner_label?: string | null
        }
        Relationships: []
      }
      podcast_guest_responses: {
        Row: {
          avoid_topics: string | null
          bottleneck_breakthrough: string
          business_description: string
          company_name: string
          created_at: string
          email: string
          full_name: string
          headshot_url: string | null
          id: string
          linkedin_profile: string
          scaling_system: string
          short_bio: string | null
          social_media_links: string | null
          title_role: string
          updated_at: string
          website: string
          workflows_to_share: string | null
        }
        Insert: {
          avoid_topics?: string | null
          bottleneck_breakthrough: string
          business_description: string
          company_name: string
          created_at?: string
          email: string
          full_name: string
          headshot_url?: string | null
          id?: string
          linkedin_profile: string
          scaling_system: string
          short_bio?: string | null
          social_media_links?: string | null
          title_role: string
          updated_at?: string
          website: string
          workflows_to_share?: string | null
        }
        Update: {
          avoid_topics?: string | null
          bottleneck_breakthrough?: string
          business_description?: string
          company_name?: string
          created_at?: string
          email?: string
          full_name?: string
          headshot_url?: string | null
          id?: string
          linkedin_profile?: string
          scaling_system?: string
          short_bio?: string | null
          social_media_links?: string | null
          title_role?: string
          updated_at?: string
          website?: string
          workflows_to_share?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
