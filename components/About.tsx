import React from 'react';
import { Camera, Mic2, MonitorPlay } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Grid with Metallic Borders */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-800 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800" 
                alt="Studio Process" 
                className="relative w-full h-64 md:h-80 object-cover rounded-lg transform translate-y-8 z-10 border border-slate-800 bg-slate-900"
              />
            </div>
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-slate-800 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                alt="Studio Equipment" 
                className="relative w-full h-64 md:h-80 object-cover rounded-lg z-10 border border-slate-800 bg-slate-900"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-blue-500 uppercase tracking-widest text-xs font-bold mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-blue-500 mr-3"></span>
              О Компании
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Технологии <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">вашего успеха.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 font-light">
              Podcast 360 — это слияние премиального сервиса и передовых технологий. 
              Мы создали пространство в стиле <span className="text-blue-400">High-Tech</span>, где каждый кадр выглядит как кино.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-900 pt-8">
              <div className="flex flex-col space-y-3 group cursor-default">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-blue-500 transition-colors shadow-lg">
                  <Camera className="text-blue-500 w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-white">4K</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Blackmagic</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3 group cursor-default">
                 <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-blue-500 transition-colors shadow-lg">
                  <Mic2 className="text-blue-500 w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-white">Hi-End</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Shure SM7B</span>
                </div>
              </div>

              <div className="flex flex-col space-y-3 group cursor-default">
                 <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-blue-500 transition-colors shadow-lg">
                  <MonitorPlay className="text-blue-500 w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-white">Stream</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">vMix Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;