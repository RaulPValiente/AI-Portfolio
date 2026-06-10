import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon } from "../UI/Icons";

const Footer = () => {
  return (
    <footer
      className="py-12 px-6 md:px-12 lg:px-24 border-t border-bg-border"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-sm font-mono text-text-muted tracking-widest uppercase">
          Contact
        </h2>
        <div className="flex items-center justify-center gap-6">
        <a
          href="https://github.com/RaulPValiente/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-text-primary transition-colors duration-200 p-2"
          aria-label="Visit GitHub profile"
        >
          <GithubIcon className="w-5 h-5" />
        </a>

        <a
          href="https://linkedin.com/in/raulperezvaliente"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-text-primary transition-colors duration-200 p-2"
          aria-label="Visit LinkedIn profile"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>

        <a
          href="https://instagram.com/raulpvaliente"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-text-primary transition-colors duration-200 p-2"
          aria-label="Visit Instagram profile"
        >
          <InstagramIcon className="w-5 h-5" />
        </a>

        <a
          href="mailto:raulperezvaliente95@gmail.com"
          className="text-text-muted hover:text-text-primary transition-colors duration-200 p-2"
          aria-label="Send email"
        >
          <MailIcon className="w-5 h-5" />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
