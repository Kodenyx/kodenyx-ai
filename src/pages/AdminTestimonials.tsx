
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SimpleNavbar from "@/components/SimpleNavbar";
import AdminTestimonialCard from "@/components/AdminTestimonialCard";
import { Loader2, Search, Filter } from "lucide-react";
import { Testimonial } from "@/hooks/useTestimonials";

const AdminTestimonials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>();
  const [activeTab, setActiveTab] = useState("pending");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch all testimonials (both approved and pending)
  const { data: allTestimonials, isLoading } = useQuery({
    queryKey: ['admin-testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching testimonials:', error);
        throw error;
      }

      return data as Testimonial[];
    },
  });

  // Mutation for updating testimonial approval status
  const updateApprovalMutation = useMutation({
    mutationFn: async ({ id, isApproved }: { id: string; isApproved: boolean }) => {
      const { error } = await supabase
        .from('testimonials')
        .update({ is_approved: isApproved })
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-testimonials'] });
      toast({
        title: "Success",
        description: "Testimonial status updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update testimonial status",
        variant: "destructive"
      });
    },
  });

  // Mutation for deleting testimonials
  const deleteTestimonialMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-testimonials'] });
      toast({
        title: "Success",
        description: "Testimonial deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete testimonial",
        variant: "destructive"
      });
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <SimpleNavbar />
        <div className="container mx-auto px-4 py-24">
          <div className="flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-2">Loading testimonials...</span>
          </div>
        </div>
      </div>
    );
  }

  const categories = [
    { value: undefined, label: "All Categories" },
    { value: "business-coaching", label: "Business Coaching" },
    { value: "ai-youth-program", label: "AI for Youth" },
    { value: "ai-automation-services", label: "AI/Automation Services" }
  ];

  // Filter testimonials based on search and category
  const filteredTestimonials = allTestimonials?.filter(testimonial => {
    const matchesSearch = !searchTerm || 
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.testimonial.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.company?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !categoryFilter || testimonial.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  }) || [];

  const pendingTestimonials = filteredTestimonials.filter(t => !t.is_approved);
  const approvedTestimonials = filteredTestimonials.filter(t => t.is_approved);

  const handleApprove = (id: string) => {
    updateApprovalMutation.mutate({ id, isApproved: true });
  };

  const handleReject = (id: string) => {
    updateApprovalMutation.mutate({ id, isApproved: false });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this testimonial? This action cannot be undone.')) {
      deleteTestimonialMutation.mutate(id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Testimonial Management</h1>
            <p className="text-muted-foreground">
              Review, approve, and manage testimonials submitted by your clients.
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search testimonials..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full sm:w-64">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value || 'all'} value={category.value || 'all'}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary">{pendingTestimonials.length}</div>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-600">{approvedTestimonials.length}</div>
                <p className="text-sm text-muted-foreground">Approved</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{allTestimonials?.length || 0}</div>
                <p className="text-sm text-muted-foreground">Total</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pending">
                Pending Approval ({pendingTestimonials.length})
              </TabsTrigger>
              <TabsTrigger value="approved">
                Approved ({approvedTestimonials.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pending" className="space-y-4">
              {pendingTestimonials.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">No pending testimonials</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {pendingTestimonials.map((testimonial) => (
                    <AdminTestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      onApprove={() => handleApprove(testimonial.id)}
                      onReject={() => handleReject(testimonial.id)}
                      onDelete={() => handleDelete(testimonial.id)}
                      isLoading={updateApprovalMutation.isPending || deleteTestimonialMutation.isPending}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="approved" className="space-y-4">
              {approvedTestimonials.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">No approved testimonials</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {approvedTestimonials.map((testimonial) => (
                    <AdminTestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      onApprove={() => handleApprove(testimonial.id)}
                      onReject={() => handleReject(testimonial.id)}
                      onDelete={() => handleDelete(testimonial.id)}
                      isLoading={updateApprovalMutation.isPending || deleteTestimonialMutation.isPending}
                      isApproved={true}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminTestimonials;
