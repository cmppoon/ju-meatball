import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Gift, Headphones, TrendingUp, Truck } from "lucide-react";
import { HeroSection } from "@/components/hero-section";

export const metadata = {
  title: "ตัวแทนจำหน่าย - ร่วมเป็นพาร์ทเนอร์กับเรา | ลูกชิ้นรสโอชา",
  description:
    "เปิดรับสมัครตัวแทนจำหน่ายลูกชิ้นรสโอชา พร้อมการสนับสนุนด้านการตลาดและผลตอบแทนที่คุ้มค่า",
};

const benefits = [
  {
    icon: TrendingUp,
    title: "กำไรดี",
    description: "มาร์จิ้นกำไรสูง พร้อมส่วนลดพิเศษสำหรับตัวแทน",
  },
  {
    icon: Truck,
    title: "จัดส่งฟรี",
    description: "จัดส่งฟรีทั่วประเทศ เมื่อสั่งซื้อขั้นต่ำตามกำหนด",
  },
  {
    icon: Gift,
    title: "สื่อการตลาด",
    description: "รับสื่อประชาสัมพันธ์และป้ายโฆษณาฟรี",
  },
  {
    icon: Headphones,
    title: "ทีมซัพพอร์ต",
    description: "ทีมงานพร้อมให้คำปรึกษาและช่วยเหลือตลอดเวลา",
  },
];

const requirements = [
  "มีหน้าร้านหรือช่องทางจำหน่ายที่ชัดเจน",
  "มีตู้แช่หรืออุปกรณ์เก็บรักษาสินค้าแช่เย็น",
  "มีความมุ่งมั่นในการทำธุรกิจร่วมกัน",
  "สามารถสั่งซื้อสินค้าขั้นต่ำตามที่กำหนด",
  "พร้อมปฏิบัติตามนโยบายและมาตรฐานของบริษัท",
];

const levels = [
  {
    name: "ตัวแทนระดับทอง",
    minOrder: "50,000 บาท/เดือน",
    discount: "ส่วนลด 15%",
    benefits: ["สื่อการตลาดฟรี", "จัดส่งฟรี", "โบนัสประจำปี"],
  },
  {
    name: "ตัวแทนระดับเงิน",
    minOrder: "30,000 บาท/เดือน",
    discount: "ส่วนลด 12%",
    benefits: ["สื่อการตลาดฟรี", "จัดส่งฟรี"],
  },
  {
    name: "ตัวแทนระดับทั่วไป",
    minOrder: "10,000 บาท/เดือน",
    discount: "ส่วนลด 10%",
    benefits: ["สื่อการตลาดฟรี"],
  },
];

export default function DistributorPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="ร่วมเป็นตัวแทนจำหน่าย"
        subtitle="โอกาสทางธุรกิจที่ดี กับแบรนด์ลูกชิ้นคุณภาพที่คนไทยไว้วางใจมากว่า 45 ปี"
        imageSrc="/images/hero.jpg"
        imageAlt="ตัวแทนจำหน่ายลูกชิ้นรสโอชา"
        className="bg-maroon-theme"
      />

      {/* Benefits Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            สิทธิประโยชน์ตัวแทนจำหน่าย
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maroon-theme/10">
                  <benefit.icon className="h-7 w-7 text-maroon-theme" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            ระดับตัวแทนจำหน่าย
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {levels.map((level, index) => (
              <div
                key={level.name}
                className={`relative rounded-2xl border-2 bg-white p-8 ${
                  index === 0 ? "border-[#8B1A1A]" : "border-gray-200"
                }`}
              >
                {index === 0 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-maroon-theme px-4 py-1 text-xs font-medium text-white">
                    แนะนำ
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900">
                  {level.name}
                </h3>
                <p className="mt-2 text-2xl font-bold text-maroon-theme">
                  {level.discount}
                </p>
                <p className="text-sm text-gray-500">
                  ยอดสั่งซื้อขั้นต่ำ {level.minOrder}
                </p>
                <ul className="mt-6 space-y-3">
                  {level.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/product-1.jpg"
                alt="สินค้าลูกชิ้นรสโอชา"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                คุณสมบัติผู้สมัคร
              </h2>
              <p className="mt-4 text-gray-600">
                เรากำลังมองหาพาร์ทเนอร์ที่มีความมุ่งมั่นในการเติบโตไปด้วยกัน
              </p>
              <ul className="mt-8 space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-maroon-theme" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-maroon-theme py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            สนใจเป็นตัวแทนจำหน่าย?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            ติดต่อเราวันนี้เพื่อรับรายละเอียดเพิ่มเติมและเริ่มต้นธุรกิจร่วมกัน
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-maroon-theme hover:bg-white/90"
          >
            <Link href="/contact">สมัครเป็นตัวแทน</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
