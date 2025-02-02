const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Integrate your existing tools and data sources",
  },
  {
    number: "02",
    title: "Automate",
    description: "Set up automated workflows and campaigns",
  },
  {
    number: "03",
    title: "Nurture",
    description: "Engage leads with personalized content",
  },
  {
    number: "04",
    title: "Convert",
    description: "Turn prospects into happy customers",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-secondary text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;