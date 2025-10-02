import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/94648800-D304-4D0E-B7A5-D682A29630E1.JPG')" }}></div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Nicholas Fabugais-Inaba
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-delay">
          Product Manager | World Explorer | Lifelong Learner
        </p>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-all animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
