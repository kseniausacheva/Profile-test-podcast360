import React from 'react';
import { Room } from '../types';
import { ArrowUpRight } from 'lucide-react';

const rooms: Room[] = [
  {
    id: '1',
    title: 'Talk Show',
    description: 'Классическая студия для интервью и бесед за круглым столом.',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
    features: ['4 микрофона Shure', '3 камеры 4K', 'ТВ 65"'],
  },
  {
    id: '2',
    title: 'Cyber Neon',
    description: 'Креативное пространство с RGB подсветкой для YouTube.',
    imageUrl: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80&w=800',
    features: ['RGB Aputure', 'Неоновый фон', 'Игровая зона'],
  },
  {
    id: '3',
    title: 'Business Expert',
    description: 'Строгий минимализм для бизнес-подкастов.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    features: ['Акустика', 'Строгий фон', 'Телесуфлер'],
  },
];

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
             <h2 className="text-blue-500 uppercase tracking-widest text-xs font-bold mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-blue-500 mr-3"></span>
              Локации
             </h2>
             <h3 className="text-4xl md:text-5xl font-bold text-white">Выберите <span className="text-slate-500">Стиль</span></h3>
          </div>
          <p className="text-slate-400 max-w-md mt-6 md:mt-0 text-right md:text-left text-sm leading-relaxed">
            Три зала, три атмосферы. От строгого минимализма до неонового киберпанка. 
            Все залы изолированы и оборудованы климат-контролем.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="group relative bg-slate-900 rounded-sm overflow-hidden border border-slate-800 transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:border-blue-500/50">
              
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={room.imageUrl} 
                  alt={room.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale-[80%] group-hover:grayscale-0"
                />
                {/* Metallic sheen on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"></div>
              </div>
              
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-slate-800/50 to-transparent opacity-50"></div>
                
                <h4 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{room.title}</h4>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2 h-10">{room.description}</p>
                
                <div className="space-y-3 mb-8 border-t border-slate-800 pt-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-slate-400 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 shadow-[0_0_8px_#2563eb]"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a href="#contact" className="w-full block text-center py-3 border border-slate-700 text-xs font-bold uppercase tracking-widest text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                  Забронировать
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;