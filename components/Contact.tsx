import React from 'react';
import { MapPin, Phone, Clock, Instagram, Youtube, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-950 pt-24 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-blue-500 uppercase tracking-widest text-xs font-bold mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-blue-500 mr-3"></span>
              Контакты
            </h2>
            <h3 className="text-4xl font-bold mb-8 text-white">
              Начать <span className="text-slate-500">Проект</span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-lg text-blue-500 group-hover:border-blue-500 transition-colors shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Адрес</h4>
                  <p className="text-slate-400 leading-relaxed">ул. Большая Дмитровка, 12,<br />Москва, Россия</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                 <div className="w-12 h-12 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-lg text-blue-500 group-hover:border-blue-500 transition-colors shadow-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Время работы</h4>
                  <p className="text-slate-400 leading-relaxed">Пн - Пт: 10:00 - 22:00<br />Сб - Вс: 11:00 - 20:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                 <div className="w-12 h-12 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-lg text-blue-500 group-hover:border-blue-500 transition-colors shadow-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                   <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Связь</h4>
                  <p className="text-slate-400 text-lg hover:text-blue-400 transition-colors cursor-pointer font-medium">+7 (999) 123-45-67</p>
                  <p className="text-slate-500 hover:text-white transition-colors cursor-pointer text-sm">hello@podcast360.ru</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-12">
              <a href="#" className="w-12 h-12 border border-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:border-transparent hover:text-white text-slate-500 transition-all rounded-lg shadow-md">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 border border-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:border-transparent hover:text-white text-slate-500 transition-all rounded-lg shadow-md">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-12 h-12 border border-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:border-transparent hover:text-white text-slate-500 transition-all rounded-lg shadow-md">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-800/50 p-8 lg:p-10 rounded-lg shadow-2xl relative overflow-hidden">
             {/* Gradient glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <h4 className="text-2xl font-bold mb-6 text-white relative z-10">Бронирование</h4>
            <form className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Имя</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white p-3.5 outline-none transition-all rounded-sm placeholder:text-slate-700" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Телефон</label>
                  <input type="tel" className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white p-3.5 outline-none transition-all rounded-sm placeholder:text-slate-700" placeholder="+7 (___) ...-.." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Формат</label>
                <div className="relative">
                  <select className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white p-3.5 outline-none transition-all rounded-sm appearance-none cursor-pointer">
                    <option>Видео-подкаст</option>
                    <option>Интервью</option>
                    <option>Стрим / Вебинар</option>
                    <option>Аренда оборудования</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">▼</div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Детали</label>
                <textarea className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white p-3.5 outline-none transition-all rounded-sm h-32 placeholder:text-slate-700 resize-none" placeholder="Даты, оборудование, пожелания..."></textarea>
              </div>

              <button type="button" className="w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-bold uppercase tracking-widest text-xs py-4 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] rounded-sm mt-2 border-t border-blue-400/20">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; 2024 Podcast 360 Studio.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 uppercase tracking-wider">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;