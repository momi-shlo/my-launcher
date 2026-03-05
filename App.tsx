import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Battery, Wifi, Signal, Search, Mic, Folder, Music, Settings, Camera, Image as ImageIcon } from 'lucide-react';

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
      <div className="flex justify-between items-center px-6 py-2 bg-white/5 backdrop-blur-md">
        <span className="text-sm font-bold">{time.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}</span>
        <div className="flex gap-2"><Signal size={16} /><Wifi size={16} /><Battery size={16} /></div>
      </div>

      <div className="mt-20 text-center">
        <h1 className="text-7xl font-light">{time.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', hour12: false })}</h1>
        <p className="text-zinc-400 mt-2">{time.toLocaleDateString('he-IL', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
      </div>

      <div className="grid grid-cols-4 gap-6 px-8 mt-16">
        {APPS.map(app => (
          <div key={app.id} className="flex flex-col items-center gap-2">
            <div className={`${app.color} p-4 rounded-3xl shadow-lg`}><app.icon size={28} /></div>
            <span className="text-[11px] text-zinc-400">{app.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
