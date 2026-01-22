import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Ban, DollarSign, Globe, Upload, FileAudio, AlertTriangle, ChevronDown, MousePointerClick } from 'lucide-react';

const DistroKidSection: React.FC = () => {
  // Animation variants
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

  // Accordion state for detailed steps
  const [openStep, setOpenStep] = useState<number | null>(0);

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  const steps = [
    {
      title: "Step 1. 회원가입 및 요금제 선택 (Plan)",
      icon: <DollarSign className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-300">
            가입 후 'Upgrade' 버튼을 눌러 요금제를 선택합니다. 초보자에게 가장 추천하는 플랜은 <strong>'Musician Plus'</strong> 입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 opacity-50">
              <span className="text-xs text-slate-500 block">Musician (가장 저렴)</span>
              <strong className="text-slate-400 line-through">발매일 지정 불가</strong>
            </div>
            <div className="bg-green-900/30 p-3 rounded-lg border border-green-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-500 text-black text-[10px] px-2 py-0.5 font-bold">추천</div>
              <span className="text-xs text-green-400 block">Musician Plus</span>
              <strong className="text-white">발매일 지정 가능 (홍보 필수)</strong>
            </div>
          </div>
          <div className="text-xs text-slate-400 bg-slate-800 p-3 rounded">
            💡 <strong>Why?</strong> 발매일을 최소 3~4주 뒤로 설정('Custom Release Date')해야 Spotify 편집자에게 곡을 피칭(Pitching)할 수 있고, 발매 전 홍보가 가능합니다.
          </div>
        </div>
      )
    },
    {
      title: "Step 2. 정산 및 세금 정보 (Bank & Tax)",
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-300">
            수익을 받기 위해 가장 중요한 단계입니다. 이 과정을 건너뛰면 수익의 30%가 미국 세금으로 공제될 수 있습니다.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
                <span className="bg-slate-700 text-white text-[10px] px-1.5 rounded mt-0.5">1</span>
                <span>우측 상단 프로필 아이콘 <ChevronRight className="w-3 h-3 inline" /> <strong>Payout Method</strong> 클릭</span>
            </li>
            <li className="flex items-start gap-2">
                <span className="bg-slate-700 text-white text-[10px] px-1.5 rounded mt-0.5">2</span>
                <span><strong>PayPal</strong> 선택 (가장 수수료가 적고 간편함)</span>
            </li>
            <li className="flex items-start gap-2">
                <span className="bg-slate-700 text-white text-[10px] px-1.5 rounded mt-0.5">3</span>
                <span><strong>Tax Profile</strong> 작성 (핵심!)</span>
            </li>
          </ul>
          <div className="bg-blue-500/10 border border-blue-500/30 p-3 rounded text-xs space-y-1">
             <p className="font-bold text-blue-300">📝 Tax Form 작성 팁 (비거주자)</p>
             <p>• Are you a US person? → <strong>No</strong></p>
             <p>• Country of Citizenship → <strong>Korea, Republic of (South)</strong></p>
             <p>• Treaty Benefits(조세 조약) 항목이 나오면 <strong>Yes</strong>를 선택하고 한국 주민등록번호 등을 입력하여 원천징수 세율을 낮추세요.</p>
          </div>
        </div>
      )
    },
    {
      title: "Step 3. 업로드 폼 작성: 기본 정보",
      icon: <Upload className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
           <p className="text-sm text-slate-300">상단 메뉴 <strong>'Upload'</strong>를 클릭하여 시작합니다.</p>
           
           <div className="space-y-3">
               <div className="border-l-2 border-slate-600 pl-3">
                   <h5 className="text-xs text-green-400 font-bold uppercase mb-1">Services (스토어 선택)</h5>
                   <p className="text-xs text-slate-400">Spotify, Apple Music, YouTube Music, Instagram & Facebook 등 <strong>체크박스 모두 선택</strong>하세요. (Snapchat은 베타라 제외해도 됨)</p>
               </div>
               <div className="border-l-2 border-slate-600 pl-3">
                   <h5 className="text-xs text-green-400 font-bold uppercase mb-1">Number of Songs</h5>
                   <p className="text-xs text-slate-400">싱글이면 1곡, EP나 앨범이면 곡 수만큼 선택.</p>
               </div>
               <div className="border-l-2 border-slate-600 pl-3">
                   <h5 className="text-xs text-green-400 font-bold uppercase mb-1">Release Date (매우 중요!)</h5>
                   <p className="text-xs text-slate-400 mb-1">오늘 날짜가 아닌 <strong>3~4주 뒤의 금요일</strong>로 설정하세요.</p>
                   <p className="text-[10px] text-slate-500">Release time: 12:00 AM (자정) / Time synchronization: Listener's time zone 추천</p>
               </div>
           </div>
        </div>
      )
    },
    {
      title: "Step 4. 트랙 정보 및 파일 업로드",
      icon: <FileAudio className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
            <div className="grid gap-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                    <h5 className="flex items-center text-sm font-bold text-white mb-2"><Ban className="w-4 h-4 text-red-500 mr-2"/> 앨범 커버 주의사항</h5>
                    <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                        <li>3000 x 3000 픽셀 JPG 추천</li>
                        <li>흐릿하거나 픽셀이 깨지면 안 됨</li>
                        <li>SNS 아이디, 가격표, 브랜드 로고 금지</li>
                        <li>텍스트는 아티스트명과 앨범명만 허용</li>
                    </ul>
                </div>
                
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Song Title</span>
                        <span className="text-slate-500">피처링 표기 금지 (별도 칸 있음)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Audio File</span>
                        <span className="text-slate-500">WAV (24bit, 44.1kHz 이상 권장)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Explicit Lyric</span>
                        <span className="text-slate-500">욕설이 있다면 Yes 체크 (19금 딱지)</span>
                    </div>
                </div>
            </div>
        </div>
      )
    },
    {
      title: "Step 5. 부가 서비스 및 최종 완료 (Extras)",
      icon: <MousePointerClick className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
            <p className="text-sm text-slate-300">
                마지막 하단에 유료 옵션들이 많습니다. 초보자라면 <strong>대부분 체크 해제</strong>하여 비용을 아끼세요.
            </p>
            
            <div className="space-y-2 text-xs">
                <div className="flex gap-2">
                    <div className="min-w-[4px] bg-yellow-500 rounded-full"></div>
                    <div>
                        <strong className="text-white">YouTube Content ID (+$4.95/yr + 20%)</strong>
                        <p className="text-slate-400 mt-0.5">유튜브에 내 노래가 쓰일 때 수익을 추적합니다. <span className="text-yellow-400">필수는 아니지만</span> 추후 방송/BGM 사용이 예상되면 체크하세요.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="min-w-[4px] bg-slate-600 rounded-full"></div>
                    <div>
                        <strong className="text-white">Store Maximizer / Social Phone</strong>
                        <p className="text-slate-400 mt-0.5">초기 단계에서는 비용 대비 효과가 적으므로 체크 해제 추천.</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-green-500/10 p-3 rounded border border-green-500/30">
                <p className="text-xs text-green-300 font-bold mb-1">✨ Finish!</p>
                <p className="text-xs text-slate-300">
                    맨 아래 필수 동의 항목(4~5개)을 모두 체크하고 <strong>'Done'</strong> 버튼을 누르면 업로드가 완료됩니다!
                </p>
            </div>
        </div>
      )
    }
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      
      {/* Intro Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-green-500 text-black font-black text-xl flex items-center justify-center shadow-lg shadow-green-500/20">1</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Phase 1: 가입 및 음원 유통</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-800/40 border border-slate-700 p-5 rounded-2xl backdrop-blur-sm">
            <p className="text-xs text-green-400 font-bold uppercase tracking-widest mb-3">Checklist</p>
            <ul className="space-y-2">
              {['24bit/44.1kHz WAV 또는 FLAC', '3000x3000px 커버 (RGB, JPG)', '해외 결제 가능 카드 (VISA/Master)'].map((txt, idx) => (
                <li key={idx} className="flex items-center text-sm text-slate-300">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {txt}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700 p-5 rounded-2xl backdrop-blur-sm flex flex-col justify-center">
            <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-2">Goal</p>
            <p className="text-slate-300 italic font-medium leading-relaxed">
              "전 세계 150개 스토어에 내 음악을 가장 빠르고 저렴하게 발매하고 수익 100% 확보하기"
            </p>
          </motion.div>
        </div>
      </div>

      {/* Accordion Steps */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            variants={item}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openStep === index ? 'bg-slate-800 border-green-500/50 shadow-lg shadow-green-900/10' : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'}`}
          >
            <button 
              onClick={() => toggleStep(index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${openStep === index ? 'bg-green-500 text-black' : 'bg-slate-700 text-slate-400'}`}>
                  {step.icon}
                </div>
                <span className={`font-bold text-lg ${openStep === index ? 'text-white' : 'text-slate-400'}`}>
                  {step.title}
                </span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openStep === index ? 'rotate-180 text-green-500' : 'text-slate-500'}`} />
            </button>
            
            <AnimatePresence>
              {openStep === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-6 pt-0 border-t border-slate-700/50 mt-2">
                    <div className="pt-4">
                        {step.content}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div variants={item} className="mt-8 bg-red-500/10 border border-red-500/30 p-5 rounded-2xl relative overflow-hidden flex gap-4">
        <Ban className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
        <div>
            <h4 className="text-red-400 font-bold mb-1 text-sm">마지막 체크포인트</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
                커버 아트에 인스타그램 아이디(@ID), 이메일 주소, 'Coming Soon' 문구, 혹은 저작권이 불분명한 이미지를 포함하지 마세요. 스토어 규정 위반으로 100% 배포 거절됩니다.
            </p>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default DistroKidSection;
