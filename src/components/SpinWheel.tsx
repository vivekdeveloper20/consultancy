import React, { useState, useRef } from 'react';

const rewards = [
  { icon: '🎧', label: 'Earphones' },
  { icon: '🎒', label: 'College Backpack' },
  { icon: '💰', label: 'Cashback on Loan' },
  { icon: '🎁', label: 'Amazon Gift Card' },
  { icon: '👕', label: 'Hoodie' },
  { icon: '📚', label: 'Study Kit' },
  { icon: '🎓', label: 'Counselling Voucher' },
  { icon: '🏆', label: 'Bonus Spin' },
];

const WHEEL_COLORS = [
  'bg-sky-400', 'bg-yellow-300', 'bg-blue-300', 'bg-yellow-400',
  'bg-sky-300', 'bg-yellow-200', 'bg-blue-200', 'bg-yellow-200',
];

function getRandomRewardIdx(prevIdx: number | null) {
  let idx = Math.floor(Math.random() * rewards.length);
  // No repeat reward
  if (prevIdx !== null && idx === prevIdx) idx = (idx + 1) % rewards.length;
  return idx;
}

function formatTimer(ms: number) {
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${h > 0 ? h + 'h ' : ''}${m > 0 ? m + 'm ' : ''}${sec}s`;
}

const SpinWheel: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [cooldownEnd, setCooldownEnd] = useState<number | null>(null);
  const [rewardIdx, setRewardIdx] = useState<number | null>(null);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [showReferralForm, setShowReferralForm] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const spinRef = useRef<HTMLDivElement>(null);

  // Cooldown logic
  const now = Date.now();
  const onCooldown = cooldownEnd && cooldownEnd > now;
  const cooldownMs = cooldownEnd ? cooldownEnd - now : 0;

  // Spin logic
  const handleSpin = () => {
    if (isSpinning || onCooldown) return;
    setIsSpinning(true);
    // Animate spin (CSS rotation)
    const idx = getRandomRewardIdx(rewardIdx);
    const deg = 360 * 5 + (360 / rewards.length) * idx + Math.random() * 10;
    if (spinRef.current) {
      spinRef.current.style.transition = 'transform 3s cubic-bezier(.17,.67,.83,.67)';
      spinRef.current.style.transform = `rotate(${deg}deg)`;
    }
    setTimeout(() => {
      setRewardIdx(idx);
      setIsSpinning(false);
      setShowRewardModal(true);
      setConfetti(true);
      setCooldownEnd(Date.now() + 2 * 24 * 60 * 60 * 1000); // 2 days
      setTimeout(() => setConfetti(false), 2500);
    }, 3100);
  };

  // Reset wheel on modal close
  const handleCloseReward = () => {
    setShowRewardModal(false);
    if (spinRef.current) {
      spinRef.current.style.transition = 'none';
      spinRef.current.style.transform = 'rotate(0deg)';
    }
  };

  // --- UI ---
  return (
    <div className="w-full flex flex-col items-center py-8 px-2">
      {/* Platform Name & Tagline */}
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-sky-700 font-sans tracking-tight">Spin the Wheel – Student's Choice Rewards</h2>
        <div className="text-yellow-500 font-semibold text-sm md:text-base">Helping You Fund Your Dreams – With Surprises!</div>
      </div>
      {/* Wheel */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Confetti */}
        {confetti && (
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Simple confetti dots */}
            {[...Array(30)].map((_, i) => (
              <span key={i} className="absolute rounded-full bg-yellow-300 opacity-80 animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${6 + Math.random() * 8}px`,
                  height: `${6 + Math.random() * 8}px`,
                  animationDelay: `${Math.random()}s`,
                }}
              />
            ))}
          </div>
        )}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-sky-200 bg-white shadow-xl flex items-center justify-center relative overflow-hidden">
          <div ref={spinRef} className="absolute inset-0 transition-transform duration-1000 will-change-transform">
            {/* Wheel Slices */}
            {rewards.map((reward, i) => {
              const angle = (360 / rewards.length) * i;
              return (
                <div
                  key={reward.label}
                  className={`absolute left-1/2 top-1/2 origin-bottom ${WHEEL_COLORS[i % WHEEL_COLORS.length]} text-sky-900 font-bold flex flex-col items-center justify-end`}
                  style={{
                    width: '50%',
                    height: '50%',
                    transform: `rotate(${angle}deg) translate(-50%, -100%) skewY(-40deg)`,
                  }}
                >
                  <span className="text-2xl md:text-3xl mb-1">{reward.icon}</span>
                  <span className="text-xs md:text-sm text-center font-semibold mb-2 px-1 whitespace-nowrap" style={{ transform: 'skewY(40deg)' }}>{reward.label}</span>
                </div>
              );
            })}
          </div>
          {/* Wheel Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              className={`bg-yellow-400 hover:bg-yellow-300 text-sky-900 font-extrabold rounded-full shadow-lg px-8 py-4 text-lg md:text-2xl border-4 border-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 animate-pulse ${isSpinning || onCooldown ? 'opacity-60 cursor-not-allowed' : ''}`}
              onClick={handleSpin}
              disabled={isSpinning || onCooldown}
            >
              {onCooldown ? (
                <span>Next Spin in: {formatTimer(cooldownMs)}</span>
              ) : (
                <span>SPIN NOW</span>
              )}
            </button>
          </div>
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <svg width="32" height="32" viewBox="0 0 32 32"><polygon points="16,0 24,16 8,16" fill="#facc15" stroke="#eab308" strokeWidth="2" /></svg>
          </div>
        </div>
        {/* Trust Message */}
        <div className="mt-4 text-sky-700 text-sm md:text-base font-medium text-center">
          Spin now and win rewards after your education loan disbursement!
        </div>
      </div>
      {/* Reward Modal */}
      {showRewardModal && rewardIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xs text-center relative animate-fadeIn">
            <button className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700 text-xl font-bold focus:outline-none" onClick={handleCloseReward}>&times;</button>
            <div className="text-xl font-extrabold text-sky-700 mb-2 flex flex-col items-center">
              <span className="inline-flex items-center gap-2">
                <span role="img" aria-label="wheel">🎡</span> Spin the Wheel, Get the Reward
              </span>
            </div>
            <div className="text-4xl mb-2">{rewards[rewardIdx].icon}</div>
            <div className="text-lg font-bold mb-1 text-sky-800">You won: <span className="text-yellow-500">{rewards[rewardIdx].label}</span></div>
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg px-6 py-2 mb-3 mt-2 transition" onClick={() => { setShowRewardModal(false); setShowClaimForm(true); }}>Claim</button>
            <div className="text-left mt-4">
              <div className="font-semibold text-sky-700 mb-2 flex items-center gap-2"><span role="img" aria-label="info">ℹ️</span> Terms and Conditions:</div>
              <ul className="text-xs text-neutral-700 space-y-2">
                <li className="flex items-start gap-2"><span role="img" aria-label="step">✅</span> <span>Reward Claim After Loan Disbursement: <br className="md:hidden"/>You'll receive your reward only after your education loan is successfully disbursed through Students Choice.</span></li>
                <li className="flex items-start gap-2"><span role="img" aria-label="step">🎁</span> <span>Single Reward Per Loan Disbursement: <br className="md:hidden"/>Only one reward can be claimed per loan disbursement, even if you spin multiple times.</span></li>
                <li className="flex items-start gap-2"><span role="img" aria-label="step">⏳</span> <span>Spin Cooldown Period: <br className="md:hidden"/>You can spin the wheel again after 2 days.</span></li>
                <li className="flex items-start gap-2"><span role="img" aria-label="step">🔄</span> <span>Unique Reward System: <br className="md:hidden"/>You cannot win the same reward twice. If you land on a previous reward, you'll get a fresh spin!</span></li>
                <li className="flex items-start gap-2"><span role="img" aria-label="step">🤝</span> <span>Referral Bonus: <br className="md:hidden"/>Refer a friend and get an extra spin after their loan is disbursed.</span></li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Claim Form Modal */}
      {showClaimForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center relative animate-fadeIn">
            <button className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700 text-xl font-bold focus:outline-none" onClick={() => setShowClaimForm(false)}>&times;</button>
            <div className="text-lg font-bold mb-2">Claim Your Reward</div>
            <form className="flex flex-col gap-2 text-left" onSubmit={e => { e.preventDefault(); setShowClaimForm(false); alert('✅ Your reward will be processed after successful loan disbursement!'); }}>
              <input required className="rounded px-3 py-2 border text-sm" placeholder="Full Name" />
              <input required className="rounded px-3 py-2 border text-sm" placeholder="Mobile Number" />
              <input required className="rounded px-3 py-2 border text-sm" placeholder="Email Address" type="email" />
              <input required className="rounded px-3 py-2 border text-sm" placeholder="Loan Application ID" />
              <input required className="rounded px-3 py-2 border text-sm" placeholder="College Name / Destination Country" />
              <button className="bg-yellow-400 hover:bg-yellow-300 text-sky-900 font-bold rounded-lg px-6 py-2 mt-2 transition" type="submit">Submit & Lock My Reward</button>
            </form>
          </div>
        </div>
      )}
      {/* Referral Section */}
      <div className="mt-8 w-full max-w-md flex flex-col items-center">
        <div className="bg-sky-100 rounded-xl p-4 flex flex-col items-center w-full">
          <div className="text-lg font-bold text-sky-700 mb-1">📣 Refer a friend and earn an extra spin after their loan is approved!</div>
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg px-5 py-2 mt-2 transition" onClick={() => setShowReferralForm(true)}>Refer Now</button>
        </div>
      </div>
      {/* Referral Form Modal */}
      {showReferralForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center relative animate-fadeIn">
            <button className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700 text-xl font-bold focus:outline-none" onClick={() => setShowReferralForm(false)}>&times;</button>
            <div className="text-lg font-bold mb-2">Refer a Friend</div>
            <form className="flex flex-col gap-2 text-left" onSubmit={e => { e.preventDefault(); setShowReferralForm(false); alert('🎯 Referral sent! You will get an extra spin after their loan is approved.'); }}>
              <input required className="rounded px-3 py-2 border text-sm" placeholder="Your Name & App ID" />
              <input required className="rounded px-3 py-2 border text-sm" placeholder="Friend's Name" />
              <input required className="rounded px-3 py-2 border text-sm" placeholder="Friend's Email / Mobile" />
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg px-6 py-2 mt-2 transition" type="submit">Send Referral 🎯</button>
            </form>
          </div>
        </div>
      )}
      {/* CTA Footer */}
      <div className="mt-10 w-full max-w-2xl flex flex-col md:flex-row gap-4 justify-center items-stretch">
        <div className="flex-1 bg-yellow-100 rounded-xl p-5 flex flex-col items-center text-center">
          <div className="text-2xl">🎓</div>
          <div className="font-bold text-sky-800 mb-1">Unlock Scholarships</div>
          <div className="text-sm text-sky-700 mb-2">Merit-based, need-based, country-wise</div>
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg px-5 py-2 transition">Explore All Scholarships</button>
        </div>
        <div className="flex-1 bg-sky-100 rounded-xl p-5 flex flex-col items-center text-center">
          <div className="text-2xl">💰</div>
          <div className="font-bold text-sky-800 mb-1">Best Education Loan Offers</div>
          <div className="text-sm text-sky-700 mb-2">Upto ₹1.5 Cr | Approval in 48 hrs | Save ₹8–10L</div>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-sky-900 font-bold rounded-lg px-5 py-2 transition">Check Eligibility</button>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes confetti {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(80px) scale(0.7) rotate(30deg); }
        }
        .animate-confetti { animation: confetti 2.2s linear forwards; }
        .animate-fadeIn { animation: fadeIn 0.4s; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default SpinWheel; 