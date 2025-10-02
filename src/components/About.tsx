import { Globe, MapPin, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hey, I'm Nick! A PM with a Software Engineering background, constantly learning about
                this little game I'd like to call life.
              </p>
              <p>
                Aside from my professional life, I have a variety of passions in my personal life,
                including (but not limited to) traveling, music, the Toronto Maple Leafs, and Marvel!
              </p>
              <p>
                Every day, I'm always learning something new about myself and this world that we live in,
                so here's to the many journeys that my life still has to offer...
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <Globe className="mx-auto mb-2 text-slate-700" size={24} />
                <p className="text-2xl font-bold text-gray-900">13</p>
                <p className="text-sm text-gray-600">Countries Visited</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <Zap className="mx-auto mb-2 text-slate-700" size={24} />
                <p className="text-2xl font-bold text-gray-900">{(() => {
                  const birthday = new Date(2002, 2, 28);
                  const today = new Date();
                  let age = today.getFullYear() - birthday.getFullYear();
                  const monthDiff = today.getMonth() - birthday.getMonth();
                  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
                    age--;
                  }
                  return age;
                })()}</p>
                <p className="text-sm text-gray-600">EXP Level</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <MapPin className="mx-auto mb-2 text-slate-700" size={24} />
                <p className="text-2xl font-bold text-gray-900">🇨🇦🇯🇵🇵🇭</p>
                <p className="text-sm text-gray-600">Heritage</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/C9244C5B-E5F6-4516-80B5-8EC35DE7A33A_1_105_c.jpeg"
                  alt="Nicholas Fabugais-Inaba"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-900 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
