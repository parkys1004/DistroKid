import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Info } from 'lucide-react';

const SpotifyAuthSection: React.FC = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
    };
    
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-green-500 text-black font-black text-xl flex items-center justify-center shadow-lg shadow-green-500/20">2</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Phase 2: Spotify for Artists 인증</h2>
        </div>

        <motion.div variants={item} className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-2xl flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
                <p className="text-blue-400 font-bold text-lg mb-2">왜 인증을 받아야 하나요?</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                    공식 아티스트 마크(파란 체크) 획득, 프로필 사진 변경, 아티스트 바이오 작성, 'Artist Pick' 설정(내 추천곡 상단 고정), 그리고 상세 청취자 데이터 분석 대시보드 접근 권한이 생깁니다.
                </p>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
            <motion.div variants={item} className="bg-slate-800 p-6 rounded-2xl shadow-xl border-t border-slate-700">
                <h3 className="font-bold text-xl text-green-400 mb-4">Step 1. DistroKid 연동 도구 사용</h3>
                <p className="text-slate-400 text-sm mb-6">가장 쉽고 빠른 '인스턴트 인증' 방식입니다.</p>
                
                <div className="space-y-4">
                    {[
                        "상단 Goodies 메뉴 → Special Access → Spotify for Artists 클릭",
                        "아티스트를 선택하고 'Connect' 버튼 클릭",
                        "개인 Spotify 계정 로그인 후 권한 허용 (약 5분 소요)"
                    ].map((step, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-slate-900 rounded-xl border border-slate-800">
                            <span className="w-6 h-6 rounded-full bg-green-900/50 text-green-400 text-xs flex items-center justify-center mr-3 border border-green-500/30">
                                {idx + 1}
                            </span>
                            <span className="text-sm text-slate-200">{step}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div variants={item} className="bg-slate-800 p-6 rounded-2xl shadow-xl border-t border-slate-700">
                <h3 className="font-bold text-xl text-green-400 mb-4">Step 2. 프로필 커스터마이징</h3>
                <p className="text-slate-400 text-sm mb-6">인증 직후 해야 할 필수 브랜딩 작업입니다.</p>
                <ul className="space-y-4">
                    {[
                        { label: "Header Image", val: "2660x1140px 이상의 고화질 사진 등록" },
                        { label: "Artist Bio", val: "1500자 이내 소개글 (영문/국문 혼용 추천)" },
                        { label: "Social Links", val: "인스타그램, 유튜브 채널 연결 (Gallery 탭 활용)" }
                    ].map((todo, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-300">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span><strong className="text-white">{todo.label}:</strong> {todo.val}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    </motion.div>
  );
};

export default SpotifyAuthSection;
