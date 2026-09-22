import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const linkGroups = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

const Footer = () => {
  return (
    <footer className="border-t border-base-200">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <a href="/" className="flex items-center gap-2">
            <span className="brand-gradient-bg flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
              DS
            </span>
            <span className="text-lg font-bold">
              Dev <span className="brand-gradient-text">Stack</span>
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-base-content/60">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-4 flex gap-4 text-lg text-base-content/60">
            <a href="#" aria-label="GitHub" className="hover:text-primary">
              <FaGithub />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {linkGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-semibold uppercase text-base-content/50">
              {group.title}
            </h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-base-content/70">
              {group.links.map((link) => (
                <li key={link} className="cursor-pointer hover:text-primary">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-base-200 py-5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-sm text-base-content/50 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;