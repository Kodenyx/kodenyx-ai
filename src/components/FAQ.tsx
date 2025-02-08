
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can you help me attract my ideal customers?",
    answer: "We laser-focus on one thing: getting your dream clients to find you. We use smart social media strategies to target exactly who you want, create content that speaks their language, and build automated systems to keep them engaged until they're ready to buy. No guesswork, just results.",
  },
  {
    question: "What's included in your marketing automation services?",
    answer: "You get a complete done-for-you system. We create killer email sequences, nurture your leads with valuable content, and keep them moving down the pipeline until they convert. It's like having a 24/7 sales team that never takes a break. You focus on scaling; we'll handle the follow-up.",
  },
  {
    question: "How long will it take to see results?",
    answer: 'Here\'s the truth: this isn\'t a "get-rich-quick" scheme. You\'ll start seeing traction in the first 30 days—more engagement, more interest. But real, sustainable growth happens over 90 days when the system is fine-tuned and humming. We\'re in it for the long game because that\'s where the real wins are.',
  },
  {
    question: "How much does this service cost?",
    answer: "Think of it this way: what's it costing you to NOT have a system that attracts and converts leads? We offer custom pricing based on your goals, but rest assured—it's an investment that pays for itself. Every dollar you spend here is designed to bring you $5 back.",
  },
  {
    question: "Do you customize strategies for my industry?",
    answer: "100%. A cookie-cutter approach is useless. We dive deep into your business, learn your market, and build a strategy that speaks directly to your audience. Whether you're selling SaaS, services, or shoes, we make it work for YOU. This isn't a one-size-fits-all solution—it's a custom-built growth engine.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#F8F7FF] rounded-lg border-none"
              >
                <AccordionTrigger className="px-6 py-4 text-xl font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
