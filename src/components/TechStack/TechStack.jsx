import skills from "../../data/skills";

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-24 px-6 md:px-12 lg:px-24"
      aria-labelledby="techstack-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2
            id="techstack-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Tech Stack
          </h2>
          <p className="text-text-secondary text-lg">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="text-sm font-mono text-text-muted tracking-widest uppercase">
                {category.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center p-5 bg-bg-card border border-bg-border rounded-xl hover:bg-bg-cardHover hover:border-accent-green/30 transition-all duration-200 cursor-default"
                    title={skill.name}
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className="w-10 h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-bg-border flex items-center justify-center text-xs font-mono text-text-muted">
                        {skill.name.slice(0, 2)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
