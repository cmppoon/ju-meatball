import type { Metadata } from "next";
import { Award, Users, Heart, Clock } from "lucide-react";

import Image from "next/image";
import { HeroSection } from "@/components/hero-section";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา - ลูกชิ้นรสโอชา | About Us",
  description:
    "เรียนรู้เรื่องราวของลูกชิ้นรสโอชา ผู้ผลิตลูกชิ้นคุณภาพตั้งแต่ปี 1978 ด้วยสูตรดั้งเดิมและวัตถุดิบคัดสรร",
};

const milestones = [
  {
    year: "1978",
    title: "จุดเริ่มต้น",
    description:
      "ก่อตั้งกิจการลูกชิ้นเล็กๆ ในตลาดท้องถิ่น ด้วยสูตรลับจากรุ่นสู่รุ่น",
  },
  {
    year: "1990",
    title: "ขยายกิจการ",
    description: "เปิดโรงงานผลิตแห่งแรก พร้อมมาตรฐานการผลิตที่ทันสมัย",
  },
  {
    year: "2005",
    title: "รับรองมาตรฐาน",
    description: "ได้รับการรับรองมาตรฐาน อย. และ GMP จากกรมอาหารและยา",
  },
  {
    year: "2015",
    title: "ขยายตลาด",
    description:
      "เริ่มจำหน่ายสินค้าทั่วประเทศ ผ่านห้างสรรพสินค้าและซูเปอร์มาร์เก็ตชั้นนำ",
  },
  {
    year: "ปัจจุบัน",
    title: "ก้าวสู่อนาคต",
    description:
      "พัฒนาผลิตภัณฑ์ใหม่อย่างต่อเนื่อง พร้อมรักษาคุณภาพและรสชาติดั้งเดิม",
  },
];

const values = [
  {
    icon: Award,
    title: "คุณภาพ",
    description: "เราคัดสรรวัตถุดิบคุณภาพสูงและควบคุมทุกขั้นตอนการผลิต",
  },
  {
    icon: Heart,
    title: "ใส่ใจ",
    description: "ทุกชิ้นทำด้วยความใส่ใจ เหมือนทำให้คนในครอบครัว",
  },
  {
    icon: Users,
    title: "ครอบครัว",
    description: "เราดูแลพนักงานเหมือนครอบครัว สร้างความสุขในการทำงาน",
  },
  {
    icon: Clock,
    title: "ประสบการณ์",
    description: "กว่า 45 ปีแห่งความเชี่ยวชาญในการผลิตลูกชิ้นคุณภาพ",
  },
];

const stats = [
  { number: "45+", label: "ปีแห่งประสบการณ์" },
  { number: "50+", label: "พนักงาน" },
  { number: "1M+", label: "ลูกค้าที่ไว้วางใจ" },
  { number: "20+", label: "ผลิตภัณฑ์" },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection
        title="เกี่ยวกับเรา"
        subtitle="ลูกชิ้นรสโอชา - ตำนานความอร่อยตั้งแต่ปี 1978"
        imageSrc="/images/hero.jpg"
        imageAlt="ลูกชิ้นรสโอชา"
      />

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold tracking-wider text-[#8B1538] uppercase">
                เรื่องราวของเรา
              </span>
              <h2 className="text-foreground mt-2 mb-6 text-3xl font-bold md:text-4xl">
                จากครัวเล็กๆ สู่ความอร่อยระดับประเทศ
              </h2>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  ลูกชิ้นรสโอชา เริ่มต้นจากความรักในการทำอาหารของคุณยายในปี 1978
                  ด้วยสูตรลับที่สืบทอดมาจากรุ่นสู่รุ่น
                  ลูกชิ้นของเราจึงมีรสชาติที่เป็นเอกลักษณ์ หอม อร่อย และเด้งกรุบ
                  ไม่เหมือนใคร
                </p>
                <p>
                  วันนี้ เราได้พัฒนาจากร้านเล็กๆ ในตลาด
                  กลายเป็นโรงงานผลิตที่ทันสมัย พร้อมมาตรฐานการผลิตระดับสากล
                  แต่สิ่งที่ไม่เคยเปลี่ยนคือ ความใส่ใจในทุกขั้นตอนการผลิต
                  และการคัดสรรวัตถุดิบคุณภาพดีที่สุด
                </p>
                <p>
                  เราภูมิใจที่ได้เป็นส่วนหนึ่งของโต๊ะอาหารครอบครัวไทยมานานกว่า
                  45 ปี และจะยังคงมุ่งมั่นสร้างสรรค์ความอร่อยต่อไปในอนาคต
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/about-tradition.jpg"
                  alt="ประเพณีการทำลูกชิ้น"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-[#8B1538] p-6 text-white shadow-xl">
                <p className="text-4xl font-bold">45+</p>
                <p className="text-sm">ปีแห่งความอร่อย</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#8B1538] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <p className="mb-2 text-4xl font-bold md:text-5xl">
                  {stat.number}
                </p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold tracking-wider text-[#8B1538] uppercase">
              คุณค่าของเรา
            </span>
            <h2 className="text-foreground mt-2 text-3xl font-bold md:text-4xl">
              สิ่งที่เรายึดมั่น
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#8B1538]/10">
                  <value.icon className="h-8 w-8 text-[#8B1538]" />
                </div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/about-factory.jpg"
                  alt="โรงงานผลิตลูกชิ้นรสโอชา"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold tracking-wider text-[#8B1538] uppercase">
                โรงงานของเรา
              </span>
              <h2 className="text-foreground mt-2 mb-6 text-3xl font-bold md:text-4xl">
                มาตรฐานการผลิตระดับสากล
              </h2>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  โรงงานผลิตของเราได้รับการรับรองมาตรฐาน GMP และ HACCP
                  มั่นใจได้ในความสะอาดและปลอดภัยในทุกขั้นตอนการผลิต
                </p>
                <p>
                  เราใช้เครื่องจักรที่ทันสมัย
                  ควบคู่กับการควบคุมคุณภาพโดยผู้เชี่ยวชาญ
                  เพื่อให้ได้ลูกชิ้นที่มีคุณภาพสม่ำเสมอในทุกชิ้น
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-background flex items-center gap-2 rounded-full px-4 py-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">GMP Certified</span>
                </div>
                <div className="bg-background flex items-center gap-2 rounded-full px-4 py-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">HACCP Certified</span>
                </div>
                <div className="bg-background flex items-center gap-2 rounded-full px-4 py-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">อย. Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold tracking-wider text-[#8B1538] uppercase">
              เส้นทางของเรา
            </span>
            <h2 className="text-foreground mt-2 text-3xl font-bold md:text-4xl">
              ประวัติและพัฒนาการ
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            {milestones.map((milestone, index) => (
              <div key={index} className="mb-8 flex gap-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#8B1538] text-sm font-bold text-white">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-[#8B1538]/20" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-foreground mb-2 text-xl font-bold">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#8B1538] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            พร้อมลิ้มรสความอร่อย?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/90">
            ติดต่อเราวันนี้เพื่อสั่งซื้อลูกชิ้นคุณภาพ หรือสอบถามข้อมูลเพิ่มเติม
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#8B1538] transition-colors hover:bg-white/90"
          >
            ติดต่อเรา
          </a>
        </div>
      </section>
    </div>
  );
}
