import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "ติดต่อเรา - ลูกชิ้นรสโอชา | Contact Us",
  description: "ติดต่อลูกชิ้นรสโอชา สั่งซื้อสินค้า หรือสอบถามข้อมูลเพิ่มเติม โทร 012-345-6789",
}

const contactInfo = [
  {
    icon: Phone,
    title: "โทรศัพท์",
    details: ["012-345-6789", "098-765-4321"],
    link: "tel:+66123456789",
  },
  {
    icon: Mail,
    title: "อีเมล",
    details: ["info@lukchinsodocsha.com", "order@lukchinsodocsha.com"],
    link: "mailto:info@lukchinsodocsha.com",
  },
  {
    icon: MapPin,
    title: "ที่อยู่",
    details: ["123 ถนนสุขุมวิท แขวงคลองตัน", "เขตคลองเตย กรุงเทพฯ 10110"],
    link: "https://maps.google.com/?q=13.7321,100.5673",
  },
  {
    icon: Clock,
    title: "เวลาทำการ",
    details: ["จันทร์ - เสาร์: 08:00 - 18:00", "อาทิตย์: 09:00 - 15:00"],
    link: null,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-[#8B1538] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ติดต่อเรา</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            สนใจสั่งซื้อสินค้าหรือมีคำถาม? ติดต่อเราได้ทุกช่องทาง เรายินดีให้บริการ
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-[#8B1538]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-[#8B1538]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) =>
                    info.link ? (
                      <a
                        key={idx}
                        href={info.link}
                        className="block text-muted-foreground hover:text-[#8B1538] transition-colors"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                ส่งข้อความถึงเรา
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      ชื่อ-นามสกุล
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[#8B1538] transition-all"
                      placeholder="กรอกชื่อของคุณ"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      เบอร์โทรศัพท์
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[#8B1538] transition-all"
                      placeholder="0XX-XXX-XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[#8B1538] transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    หัวข้อ
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[#8B1538] transition-all"
                  >
                    <option value="">เลือกหัวข้อ</option>
                    <option value="order">สั่งซื้อสินค้า</option>
                    <option value="wholesale">สั่งซื้อจำนวนมาก / ขายส่ง</option>
                    <option value="feedback">ข้อเสนอแนะ</option>
                    <option value="complaint">ร้องเรียน</option>
                    <option value="other">อื่นๆ</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    ข้อความ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[#8B1538] transition-all resize-none"
                    placeholder="รายละเอียดที่ต้องการติดต่อ..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#8B1538] text-white py-4 rounded-lg font-semibold hover:bg-[#6d1029] transition-colors"
                >
                  ส่งข้อความ
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-foreground mb-6">แผนที่</h2>
              <div className="flex-1 min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7614973574407!2d100.56!3d13.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzQ4LjAiTiAxMDDCsDMzJzM2LjAiRQ!5e0!3m2!1sen!2sth!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ลูกชิ้นรสโอชา - แผนที่"
                />
              </div>
              <div className="mt-6 bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-foreground mb-2">ที่อยู่สำหรับนำทาง</h3>
                <p className="text-muted-foreground">
                  123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพมหานคร 10110
                </p>
                <a
                  href="https://maps.google.com/?q=13.7321,100.5673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[#8B1538] font-medium hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  เปิดใน Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ติดตามเราบนโซเชียลมีเดีย
          </h2>
          <p className="text-muted-foreground mb-8">
            ติดตามข่าวสาร โปรโมชั่น และเมนูใหม่ๆ ได้ทุกช่องทาง
          </p>
          <div className="flex justify-center gap-6">
            {/* Facebook */}
            <a
              href="https://facebook.com/lukchinsodocsha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Line */}
            <a
              href="https://line.me/ti/p/@lukchinsodocsha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#06C755] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              aria-label="Line"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/lukchinsodocsha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com/@lukchinsodocsha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              aria-label="YouTube"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              คำถามที่พบบ่อย
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "สั่งซื้อขั้นต่ำกี่ชิ้น?",
                answer:
                  "ลูกค้าทั่วไปไม่มีขั้นต่ำในการสั่งซื้อ สำหรับลูกค้าขายส่งสามารถติดต่อเพื่อสอบถามราคาพิเศษได้",
              },
              {
                question: "จัดส่งอย่างไร?",
                answer:
                  "เราจัดส่งด้วยรถห้องเย็นทั่วประเทศ รับประกันความสดใหม่ของสินค้า จัดส่งภายใน 1-3 วันทำการ",
              },
              {
                question: "สินค้าเก็บได้นานแค่ไหน?",
                answer:
                  "ลูกชิ้นสดเก็บได้ 5-7 วันในตู้เย็น หรือ 3-6 เดือนในช่องแช่แข็ง ควรเก็บในถุงสุญญากาศเพื่อรักษาคุณภาพ",
              },
              {
                question: "มีบริการส่งฟรีหรือไม่?",
                answer:
                  "ส่งฟรีในเขตกรุงเทพฯ และปริมณฑล สำหรับยอดสั่งซื้อ 500 บาทขึ้นไป ต่างจังหวัดคิดค่าจัดส่งตามระยะทาง",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow">
                <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
