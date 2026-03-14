import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, GraduationCap, MapPin, Store, Utensils } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

export const metadata = {
  title: "แฟรนไชส์ - โอกาสธุรกิจลูกชิ้นรสโอชา | ลูกชิ้นรสโอชา",
  description: "เปิดรับสมัครแฟรนไชส์ลูกชิ้นรสโอชา ธุรกิจที่มั่นคง ลงทุนต่ำ คืนทุนเร็ว พร้อมการสนับสนุนอย่างเต็มรูปแบบ",
}

const benefits = [
  {
    icon: Store,
    title: "แบรนด์ที่แข็งแกร่ง",
    description: "แบรนด์ที่คนไทยรู้จักและไว้วางใจมากว่า 45 ปี",
  },
  {
    icon: GraduationCap,
    title: "อบรมครบครัน",
    description: "อบรมทุกขั้นตอนการดำเนินงานและการทำอาหาร",
  },
  {
    icon: Utensils,
    title: "สูตรลับเฉพาะ",
    description: "สูตรลูกชิ้นรสโอชาที่ไม่เหมือนใคร",
  },
  {
    icon: MapPin,
    title: "เลือกทำเลได้",
    description: "ให้คำปรึกษาในการเลือกทำเลที่เหมาะสม",
  },
]

const packages = [
  {
    name: "แพ็คเกจเล็ก",
    price: "99,000",
    description: "เหมาะสำหรับตลาดนัด หรือหน้าร้านขนาดเล็ก",
    includes: [
      "รถเข็นพร้อมอุปกรณ์ครบชุด",
      "วัตถุดิบเริ่มต้น",
      "ป้ายและสื่อการตลาด",
      "อบรม 3 วัน",
      "คู่มือการดำเนินงาน",
    ],
  },
  {
    name: "แพ็คเกจกลาง",
    price: "199,000",
    description: "เหมาะสำหรับร้านในห้างหรือคอมมูนิตี้มอลล์",
    includes: [
      "เคาน์เตอร์และอุปกรณ์ครบชุด",
      "วัตถุดิบเริ่มต้น",
      "ป้ายและสื่อการตลาด",
      "ออกแบบร้านฟรี",
      "อบรม 5 วัน",
      "คู่มือการดำเนินงาน",
      "ทีมซัพพอร์ตตลอดอายุสัญญา",
    ],
  },
  {
    name: "แพ็คเกจใหญ่",
    price: "399,000",
    description: "เหมาะสำหรับร้านอาหาร หรือสาขาขนาดใหญ่",
    includes: [
      "ตกแต่งร้านครบชุด",
      "อุปกรณ์ทำอาหารทั้งหมด",
      "วัตถุดิบเริ่มต้น",
      "ป้ายและสื่อการตลาด",
      "ออกแบบร้านฟรี",
      "อบรม 7 วัน",
      "คู่มือการดำเนินงาน",
      "ทีมซัพพอร์ตตลอดอายุสัญญา",
      "สนับสนุนการตลาดออนไลน์",
    ],
  },
]

const steps = [
  { step: 1, title: "ติดต่อสอบถาม", desc: "โทรหาเราหรือกรอกแบบฟอร์มเพื่อรับข้อมูล" },
  { step: 2, title: "นัดพบปรึกษา", desc: "พูดคุยรายละเอียดและตอบคำถามทุกข้อสงสัย" },
  { step: 3, title: "เลือกแพ็คเกจ", desc: "เลือกแพ็คเกจที่เหมาะกับคุณและชำระค่าใช้จ่าย" },
  { step: 4, title: "อบรมและเปิดร้าน", desc: "เข้าอบรมและเริ่มต้นธุรกิจของคุณ" },
]

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="แฟรนไชส์ลูกชิ้นรสโอชา"
        subtitle="โอกาสธุรกิจที่มั่นคง ลงทุนต่ำ คืนทุนเร็ว กับแบรนด์ที่คนไทยไว้วางใจมากว่า 45 ปี"
        imageSrc="/images/hero.jpg"
        imageAlt="แฟรนไชส์ลูกชิ้นรสโอชา"
        className="bg-[#8B1A1A]"
      />

      {/* Benefits Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            ทำไมต้องแฟรนไชส์ลูกชิ้นรสโอชา
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8B1A1A]/10">
                  <benefit.icon className="h-7 w-7 text-[#8B1A1A]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            แพ็คเกจแฟรนไชส์
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border-2 bg-white p-8 ${
                  index === 1 ? "border-[#8B1A1A] lg:scale-105" : "border-gray-200"
                }`}
              >
                {index === 1 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#8B1A1A] px-4 py-1 text-xs font-medium text-white">
                    ยอดนิยม
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-[#8B1A1A]">
                    {pkg.price}
                  </span>
                  <span className="text-gray-500"> บาท</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{pkg.description}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 w-full ${
                    index === 1
                      ? "bg-[#8B1A1A] text-white hover:bg-[#7A1717]"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <Link href="/contact">สนใจแพ็คเกจนี้</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            ขั้นตอนการสมัครแฟรนไชส์
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#8B1A1A] text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            เสียงจากผู้ประกอบการ
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "คุณสมชาย",
                location: "กรุงเทพฯ",
                quote: "เปิดร้านมา 2 ปี คืนทุนภายใน 8 เดือน ทีมงานซัพพอร์ตดีมาก",
              },
              {
                name: "คุณสมหญิง",
                location: "เชียงใหม่",
                quote: "ไม่มีประสบการณ์ทำอาหารมาก่อน แต่อบรมครบจบพร้อมเปิดร้านได้เลย",
              },
              {
                name: "คุณวิชัย",
                location: "ภูเก็ต",
                quote: "แบรนด์แข็งแกร่ง ลูกค้าเยอะตั้งแต่วันแรกที่เปิด",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <p className="text-gray-600">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#8B1A1A] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            พร้อมเริ่มต้นธุรกิจแฟรนไชส์?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            ติดต่อเราวันนี้เพื่อรับข้อมูลเพิ่มเติมและเริ่มต้นเส้นทางธุรกิจของคุณ
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-[#8B1A1A] hover:bg-white/90"
          >
            <Link href="/contact">ติดต่อสมัครแฟรนไชส์</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
