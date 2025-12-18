"use client";

export default function LogosMarquee() {
  const specializations = [
    "LIVE MUSIC",
    "EVENT PHOTOGRAPHY",
    "PERSONAL PORTRAITS",
    "FAMILY PORTRAITS",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#1d1c1c] py-6 border-y border-[#bfbab0]/20">
      <div className="text-center text-[#bfbab0] text-sm tracking-widest mb-4">SPECIALIZES IN</div>
      <div className="flex whitespace-nowrap animate-logos-marquee">
        <div className="flex items-center gap-24">
          {specializations.map((specialization, index) => (
            <div
              key={`spec-1-${index}`}
              className="text-[#bfbab0] font-bold text-xl tracking-wide px-6 py-3 border border-[#bfbab0]/30 rounded"
            >
              {specialization}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-24 pl-24">
          {specializations.map((specialization, index) => (
            <div
              key={`spec-2-${index}`}
              className="text-[#bfbab0] font-bold text-xl tracking-wide px-6 py-3 border border-[#bfbab0]/30 rounded"
            >
              {specialization}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes logos-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-logos-marquee {
          animation: logos-marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
