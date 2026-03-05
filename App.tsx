import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Battery, Wifi, Signal, Folder, Music, Settings, Camera, Image as ImageIcon } from 'lucide-react';

const APPS = [
  { id: 'files', name: 'קבצים', icon: Folder, color: 'bg-amber-500' },
  { id: 'music', name: 'מוזיקה', icon: Music, color: 'bg-orange-500' },
  { id: 'photos', name: 'תמונות', icon: ImageIcon, color: 'bg-blue-400' },
  { id: 'camera', name: 'מצלמה', icon: Camera, color: 'bg-zinc-700' },
  { id: 'settings', name: 'הגדרות', icon: Settings, color: 'bg-zinc-500' },
];

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white overflow-hidden font-sans" dir="rtl">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 py-2 bg-white/5 backdrop-blur-md">
        <span className="text-sm font-bold">
          {time.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}
        </span>
        <div className="flex gap-2">
          <Signal size={16} />
          <Wifi size={16} />
          <Battery size={16} />
        </div>
      </div>

      {/* Clock Area */}
      <div className="mt-20 text-center">
        <h1 className="text-7xl font-light tracking-tighter">
          {time.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', hour12: false })}
        </h1>
        <p className="text-zinc-400 mt-2 text-lg">
          {time.toLocaleDateString('he-IL', { weekday: 'long', day: 'numeric', month: 'long' })}
        </p>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-4 gap-6 px-8 mt-16">
        {APPS.map(app => (
          <motion.div 
            key={app.id} 
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center gap-2"
          >
            <div className={`${app.color} p-4 rounded-[2rem] shadow-lg`}>
              <app.icon size={28} />
            </div>
            <span className="text-[11px] text-zinc-400 font-medium">{app.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Bottom Navigation (Visual Only) */}
      <div className="absolute bottom-6 w-full flex justify-center gap-12 opacity-30">
        <div className="w-3 h-3 border-2 border-white rounded-sm rotate-45"></div>
        <div className="w-3 h-3 border-2 border-white rounded-full"></div>
        <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
      </div>
    </div>
  );
}
