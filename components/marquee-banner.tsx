const messages = [
  "PREMIUM QUALITY",
  "ลูกชิ้นคุณภาพ",
  "SINCE 1978",
  "สูตรดั้งเดิม 45 ปี",
  "AUTHENTIC TASTE",
  "รสชาติแท้ดั้งเดิม",
  "TRUSTED BRAND",
  "แบรนด์ที่ไว้วางใจ",
]

const repeatedMessages = [...messages, ...messages, ...messages, ...messages]

export function MarqueeBanner() {
  return (
    <div className="bg-[#0A0A0A] py-4 overflow-hidden border-y-4 border-[#8B1A1A]">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeatedMessages.map((message, index) => (
          <span key={index} className="flex items-center gap-8 mx-8">
            <span className="text-white font-extrabold text-lg uppercase tracking-[0.2em]">
              {message}
            </span>
            <span className="text-[#8B1A1A] text-2xl">&#x2022;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
