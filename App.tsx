import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, CloudUpload, Video, CheckCircle, Ban, Info, ChevronRight, Rocket, UserCheck } from 'lucide-react';
import { TabId } from './types';

// Tab Components
import DistroKidSection from './components/DistroKidSection';
import SpotifyAuthSection from './components/SpotifyAuthSection';
import CanvasSection from './components/CanvasSection';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('distrokid');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const tabs = [
    { id: 'distrokid', label: 'DistroKid 등록', icon: <CloudUpload className="w-5 h-5" /> },
    { id: 'spotify-auth', label: 'Spotify 인증', icon: <UserCheck className="w-5 h-5" /> },
    { id: 'canvas', label: 'Canvas 영상', icon: <Video className="w-5 h-5" /> },
  ] as const;

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-green-500 selection:text-black">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 bg-black/80 backdrop-blur-lg border-b border-green-900/30 py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
          className="inline-block"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(74,222,128,0.3)] flex items-center justify-center gap-4">
            <Music className="w-10 h-10 md:w-12 md:h-12 text-green-400" />
            Musician Success Guide
          </h1>
        </motion.div>
        <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide">
          가입부터 수익화까지, 독립 뮤지션을 위한 <span className="text-green-400 font-bold">A-Z 실전 튜토리얼</span>
        </p>
      </motion.header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800 shadow-2xl">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-around items-stretch">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative group flex-1 py-5 px-2 flex flex-col items-center justify-center gap-2 transition-colors duration-300 ${
                  activeTab === tab.id ? 'text-green-400' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <div className={`p-2 rounded-xl transition-all duration-300 ${activeTab === tab.id ? 'bg-green-400/10 scale-110' : 'group-hover:bg-slate-800'}`}>
                   {tab.icon}
                </div>
                <span className="text-sm font-bold tracking-wider">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-green-400 shadow-[0_0_10px_#4ade80]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto p-6 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activeTab === 'distrokid' && <DistroKidSection />}
            {activeTab === 'spotify-auth' && <SpotifyAuthSection />}
            {activeTab === 'canvas' && <CanvasSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full z-40 bg-black/80 backdrop-blur-xl border-t border-slate-800 py-4">
        <div className="flex justify-center items-center gap-8 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-2">
            <CheckCircle className="w-3 h-3 text-green-500" /> 
            2026 최신 가이드
          </span>
          <span className="flex items-center gap-2">
            <UserCheck className="w-3 h-3 text-blue-500" />
            Technical Writer: Tutorial Master
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
