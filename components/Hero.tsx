import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <img 
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
          alt="Studio Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80"></div>
        {/* Mesh grid effect */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-900/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] animate-fade-in-down">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs md:text-sm tracking-widest uppercase text-blue-200 font-medium">Профессиональная Студия</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
          СОЗДАВАЙТЕ <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-lg">КОНТЕНТ</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 animate-pulse">БУДУЩЕГО</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light border-l-2 border-blue-900/50 pl-6">
          Полный цикл видеопродакшена. 
          <span className="text-white font-medium"> Cinema-свет</span>, топовый звук и <span className="text-white font-medium">3 уникальных зала</span> для ваших идей.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a 
            href="#contact" 
            className="group relative px-8 py-4 bg-blue-600 overflow-hidden rounded-sm transition-all hover:scale-105 duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
            {/* Metallic shine effect on button */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-white/10 pointer-events-none"></div>
            
            <span className="relative z-10 flex items-center text-white font-bold uppercase tracking-widest text-sm">
              Забронировать
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <button className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-700 bg-slate-900/50 group-hover:border-blue-500 group-hover:bg-blue-900/20 transition-all duration-300 shadow-lg backdrop-blur-sm">
              <Play className="w-4 h-4 fill-current ml-1" />
            </div>
            <span className="uppercase tracking-widest text-sm font-semibold border-b border-transparent group-hover:border-blue-500 transition-all pb-0.5">Смотреть шоурил</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;