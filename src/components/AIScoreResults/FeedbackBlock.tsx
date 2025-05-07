
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FeedbackBlock: React.FC = () => {
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    try {
      // Here you would typically send this data to your backend
      // For now, we'll just log it and show a success message
      console.log("Feedback submitted:", { rating, comment });
      
      // In a production environment, you'd send this data to your backend
      // const response = await fetch('your-api-endpoint', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ rating, comment })
      // });
      
      setSubmitted(true);
      toast({
        title: "Thanks for your feedback!",
        description: "Every point helps us improve this experience for other founders like you.",
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast({
        title: "Something went wrong",
        description: "We couldn't save your feedback. Please try again.",
        variant: "destructive"
      });
    }
  };

  if (submitted) {
    return (
      <div className="mb-10 bg-slate-50 p-6 rounded-lg text-center">
        <ThumbsUp className="mx-auto h-10 w-10 text-primary mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thanks for your feedback!</h3>
        <p className="text-gray-600">
          Every point helps us improve this experience for other founders like you.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-10 bg-slate-50 p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Did you find this score valuable?</h3>
      <p className="text-lg mb-6">
        On a scale of 1 to 10, how helpful was this in understanding where you stand and what to do next?
      </p>
      
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Not helpful</span>
          <span>Extremely valuable</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-lg font-medium w-6 text-center">1</span>
          <Slider
            value={[rating]}
            min={1}
            max={10}
            step={1}
            onValueChange={(value) => setRating(value[0])}
            className="flex-1"
          />
          <span className="text-lg font-medium w-6 text-center">10</span>
        </div>
        <div className="text-center mt-2">
          <span className="text-lg font-bold text-primary">Your rating: {rating}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="comment" className="block text-lg font-medium mb-2">
          Anything you'd like to share about your experience? (Optional)
        </label>
        <Textarea
          id="comment"
          placeholder="Your thoughts here..."
          className="w-full"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      
      <Button 
        onClick={handleSubmit}
        className="w-full md:w-auto"
      >
        Submit Feedback
      </Button>
    </div>
  );
};

export default FeedbackBlock;
