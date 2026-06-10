import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, ArrowDownIcon } from "../UI/Icons";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 relative"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent-green/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-accent-green" />
              <p className="text-accent-green text-sm tracking-widest uppercase font-mono">
                Full Stack Developer
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
              <span className="block text-text-primary">RAÚL</span>
              <span className="block text-text-muted mt-2">PÉREZ VALIENTE</span>
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <p className="text-text-secondary text-sm font-mono">Software Developer at the Spanish General State Administration (AGE)</p>
            </div>
          </div>

          <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed border-l-2 border-bg-border pl-6">
            I&apos;m Raúl, a full-stack developer experienced in building scalable systems and modern applications, leveraging artificial intelligence and cutting-edge technologies across the stack
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:raulperezvaliente95@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-green text-bg-primary rounded-lg hover:brightness-110 transition-all duration-200 text-sm font-semibold"
              aria-label="Send email to Raúl"
            >
              <MailIcon className="w-4 h-4" />
              Contact
            </a>

            <a
              href="https://github.com/raulperezvaliente"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-bg-border text-text-primary rounded-lg hover:border-accent-green/40 hover:text-accent-green transition-all duration-200 text-sm font-medium"
              aria-label="Visit GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/raulperezvaliente"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-bg-border text-text-primary rounded-lg hover:border-accent-green/40 hover:text-accent-green transition-all duration-200 text-sm font-medium"
              aria-label="Visit LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>

            <a
              href="/assets/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-bg-border text-text-primary rounded-lg hover:border-accent-green/40 hover:text-accent-green transition-all duration-200 text-sm font-medium"
              aria-label="Download CV"
            >
              <DownloadIcon className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

      </div>

      <button
        onClick={() => scrollToSection("techstack")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-green transition-colors duration-200 animate-bounce z-20"
        aria-label="Scroll to tech stack section"
      >
        <ArrowDownIcon className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
