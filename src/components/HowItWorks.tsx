
const HowItWorks = () => {
  const steps = [
    {
      step: "1. Audit",
      description: "We map your tools, workflows, and hidden friction points"
    },
    {
      step: "2. Score", 
      description: "We prioritize by ROI and effort — no fluff, no guesswork"
    },
    {
      step: "3. Build",
      description: "We deploy AI-powered workflows that eliminate your biggest time drains"
    },
    {
      step: "4. Scale",
      description: "You get leverage — not complexity — and a business that runs without you"
    }
  ];

  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Here's How We Build the Right System — Fast
            </h2>
          </div>
          
          <div className="space-y-8">
            {steps.map((item, index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6 bg-secondary/50">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-32">
                    <span className="text-primary font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-lg">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
