"use client";

export default function LogosMarquee() {
  const specializations = [
    "LIVE MUSIC",
    "EVENT PHOTOGRAPHY",
    "PERSONAL PORTRAITS",
    "FAMILY PORTRAITS",
    "PERSONAL PHOTOS",
  ];

  // Create the text with separators using non-breaking spaces
  const separator = "\u00A0\u00A0\u00A0\u00A0•\u00A0\u00A0\u00A0\u00A0";
  const marqueeText = specializations.join(separator);

  return (
    <div className="w-full overflow-hidden bg-[#1d1c1c] py-6 border-y border-[#bfbab0]/20">
      <div className="text-center text-[#bfbab0] text-sm tracking-widest mb-4">SPECIALIZES IN</div>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-logos-marquee pl-4">
          <span className="text-[#bfbab0] font-bold text-sm md:text-xl tracking-wide whitespace-nowrap">
            {marqueeText}{separator}
          </span>
          <span className="text-[#bfbab0] font-bold text-sm md:text-xl tracking-wide whitespace-nowrap">
            {marqueeText}{separator}
          </span>
          <span className="text-[#bfbab0] font-bold text-sm md:text-xl tracking-wide whitespace-nowrap">
            {marqueeText}{separator}
          </span>
          <span className="text-[#bfbab0] font-bold text-sm md:text-xl tracking-wide whitespace-nowrap">
            {marqueeText}{separator}
          </span>
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
          animation: logos-marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
}
