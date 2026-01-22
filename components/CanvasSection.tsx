import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, FileVideo, Smartphone } from 'lucide-react';

const CanvasSection: React.FC = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
    };
    
    const item = {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1 }
    };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-green-500 text-black font-black text-xl flex items-center justify-center shadow-lg shadow-green-500/20">3</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Phase 3: Spotify Canvas</h2>
      </div>

      {/* Tech Specs Grid */}
      <motion.div variants={item} className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-2xl border border-green-900/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <FileVideo className="w-32 h-32 text-green-400" />
        </div>
        <h3 className="font-bold text-lg text-green-300 mb-6 relative z-10">제작 규격 가이드 (Spec)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {[
                { k: "비율", v: "9:16 (세로)" },
                { k: "길이", v: "3 ~ 8초" },
                { k: "포맷", v: "MP4 / JPG" },
                { k: "해상도", v: "최소 720p" }
            ].map((spec, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-sm p-4 rounded-xl text-center border border-slate-700/50 hover:border-green-500/50 transition-colors">
                    <p className="text-xs text-slate-500 mb-1">{spec.k}</p>
                    <p className="text-sm font-bold text-green-400">{spec.v}</p>
                </div>
            ))}
        </div>
      </motion.div>

      {/* Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={item} className="bg-slate-800 p-6 rounded-2xl shadow-lg border-l-4 border-green-500 h-full">
            <h3 className="font-bold text-xl text-green-300 mb-3">Step 1. 소스 준비</h3>
            <p className="text-slate-400 text-sm mb-4">직접 제작이 어렵다면?</p>
            <div className="bg-slate-900 p-4 rounded-xl text-sm leading-relaxed border border-slate-700">
                <strong className="text-white block mb-2">DistroKid Canvas Generator</strong>
                Goodies → Enhance your music 메뉴에서 수천 개의 무료 고품질 3D 루프 영상을 다운로드할 수 있습니다.
            </div>
        </motion.div>

        <motion.div variants={item} className="bg-slate-800 p-6 rounded-2xl shadow-lg border-l-4 border-green-500 h-full">
            <h3 className="font-bold text-xl text-green-300 mb-3">Step 2. 업로드</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-slate-500" />
                    <span>S4A 모바일 앱 접속</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1 h-4 bg-slate-700 mx-2"></div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="bg-slate-700 text-xs px-2 py-1 rounded">Click</span>
                    <span>곡 선택 → 'Create Canvas'</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1 h-4 bg-slate-700 mx-2"></div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="bg-green-600 text-black font-bold text-xs px-2 py-1 rounded">Post</span>
                    <span>영상 선택 후 게시</span>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Pro Tip */}
      <motion.div variants={item} className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 p-6 rounded-2xl flex items-center gap-5">
        <div className="bg-green-500/20 p-3 rounded-full animate-pulse">
            <Rocket className="w-6 h-6 text-green-400" />
        </div>
        <div>
            <p className="text-sm font-bold text-green-400 mb-1">PRO TIP</p>
            <p className="text-xs md:text-sm text-slate-300 italic">
                "Canvas를 등록하면 청취자가 인스타그램 스토리에 곡을 공유할 때, 앨범 커버 대신 이 배경 영상이 함께 공유되어 클릭률이 평균 145% 증가합니다."
            </p>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default CanvasSection;
