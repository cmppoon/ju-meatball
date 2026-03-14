import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Factory, Shield, Truck, Users } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

export const metadata = {
  title: "OEM - บริการผลิตสินค้าภายใต้แบรนด์ของคุณ | ลูกชิ้นรสโอชา",
  description: "บริการ OEM ผลิตลูกชิ้นและผลิตภัณฑ์แปรรูปเนื้อสัตว์ภายใต้แบรนด์ของคุณ ด้วยมาตรฐานการผลิตระดับสากล",
}

const benefits = [
  {
    icon: Factory,
    title: "โรงงานได้มาตรฐาน",
    description: "โรงงานผลิตได้รับการรับรองมาตรฐาน GMP, HACCP และ อย.",
  },
  {
    icon: Users,
    title: "ทีมงานมืออาชีพ",
    description: "ทีม R&D พร้อมพัฒนาสูตรตามความต้องการของคุณ",
  },
  {
    icon: Shield,
    title: "คุณภาพเชื่อถือได้",
    description: "ควบคุมคุณภาพทุกขั้นตอนการผลิต",
  },
  {
    icon: Truck,
    title: "จัดส่งทั่วประเทศ",
    description: "ระบบขนส่งควบคุมอุณหภูมิ ส่งถึงมือคุณอย่างปลอดภัย",
  },
]

const services = [
  "ผลิตลูกชิ้นหมู ลูกชิ้นเนื้อ ลูกชิ้นไก่ ลูกชิ้นปลา",
  "ผลิตไส้กรอก หมูยอ และผลิตภัณฑ์แปรรูป",
  "พัฒนาสูตรใหม่ตามความต้องการ",
  "ออกแบบบรรจุภัณฑ์",
  "ผลิตตาม MOQ ที่ยืดหยุ่น",
  "บริการ Private Label",
]

export default function OEMPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="บริการ OEM"
        subtitle="ผลิตลูกชิ้นและผลิตภัณฑ์แปรรูปเนื้อสัตว์คุณภาพสูง ภายใต้แบรนด์ของคุณ ด้วยประสบการณ์กว่า 45 ปี"
        imageSrc="/images/hero.jpg"
        imageAlt="บริการ OEM ลูกชิ้นรสโอชา"
        className="bg-[#8B1A1A]"
      />

      {/* Benefits Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            ทำไมต้องเลือกเรา
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

      {/* Services List */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                บริการของเรา
              </h2>
              <p className="mt-4 text-gray-600">
                เราพร้อมให้บริการผลิตสินค้าภายใต้แบรนด์ของคุณอย่างครบวงจร
                ตั้งแต่การพัฒนาสูตรจนถึงการจัดส่ง
              </p>
              <ul className="mt-8 space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#8B1A1A]" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-factory.jpg"
                alt="โรงงานผลิตลูกชิ้น"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            ขั้นตอนการทำงาน
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 1, title: "ปรึกษาความต้องการ", desc: "พูดคุยเพื่อเข้าใจความต้องการของคุณ" },
              { step: 2, title: "พัฒนาสูตร", desc: "ทีม R&D พัฒนาสูตรตามที่คุณต้องการ" },
              { step: 3, title: "ตัวอย่างและปรับปรุง", desc: "ทดลองชิมและปรับปรุงจนพอใจ" },
              { step: 4, title: "ผลิตและจัดส่ง", desc: "ผลิตตามออเดอร์และจัดส่งตรงเวลา" },
            ].map((item) => (
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

      {/* CTA Section */}
      <section className="bg-[#8B1A1A] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            พร้อมเริ่มต้นธุรกิจกับเรา?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            ติดต่อเราวันนี้เพื่อปรึกษาและรับใบเสนอราคา
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-[#8B1A1A] hover:bg-white/90"
          >
            <Link href="/contact">ติดต่อเรา</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
