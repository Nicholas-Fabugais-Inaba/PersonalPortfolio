import { Linkedin, Instagram, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/nicholas-fabugais-inaba/',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/nicholas.fi',
      color: 'hover:bg-pink-600',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:nfabugaisinaba@gmail.com',
      color: 'hover:bg-green-600',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
          I'd love to hear from you! Whether you want to chat about travel, share recommendations,
          or just say hello, feel free to reach out.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${link.color} hover:scale-110`}
                aria-label={link.name}
              >
                <Icon className="text-white" size={28} />
              </a>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} All rights reserved. Built with passion for travel and exploration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
