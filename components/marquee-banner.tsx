const messages = [
  "PREMIUM QUALITY",
  "ลูกชิ้นคุณภาพ",
  "SINCE 1978",
  "สูตรดั้งเดิม 45 ปี",
  "AUTHENTIC TASTE",
  "รสชาติแท้ดั้งเดิม",
  "TRUSTED BRAND",
  "แบรนด์ที่ไว้วางใจ",
];

const repeatedMessages = [...messages, ...messages, ...messages, ...messages];

export function MarqueeBanner() {
  return (
    <div className="overflow-hidden border-y-4 border-[#8B1A1A] bg-[#0A0A0A] py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeatedMessages.map((message, index) => (
          <span key={index} className="mx-8 flex items-center gap-3">
            <span className="text-2xl text-[#D4A853]">&#x2022;</span>
            <span className="text-lg font-extrabold tracking-[0.2em] text-white uppercase">
              {message}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
