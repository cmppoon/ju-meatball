import Image from "next/image"
import type { Metadata } from "next"
import { Award, Users, Heart, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา - ลูกชิ้นรสโอชา | About Us",
  description: "เรียนรู้เรื่องราวของลูกชิ้นรสโอชา ผู้ผลิตลูกชิ้นคุณภาพตั้งแต่ปี 1978 ด้วยสูตรดั้งเดิมและวัตถุดิบคัดสรร",
}

const milestones = [
  {
    year: "1978",
    title: "จุดเริ่มต้น",
    description: "ก่อตั้งกิจการลูกชิ้นเล็กๆ ในตลาดท้องถิ่น ด้วยสูตรลับจากรุ่นสู่รุ่น",
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
    description: "เริ่มจำหน่ายสินค้าทั่วประเทศ ผ่านห้างสรรพสินค้าและซูเปอร์มาร์เก็ตชั้นนำ",
  },
  {
    year: "ปัจจุบัน",
    title: "ก้าวสู่อนาคต",
    description: "พัฒนาผลิตภัณฑ์ใหม่อย่างต่อเนื่อง พร้อมรักษาคุณภาพและรสชาติดั้งเดิม",
  },
]

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
]

const stats = [
  { number: "45+", label: "ปีแห่งประสบการณ์" },
  { number: "50+", label: "พนักงาน" },
  { number: "1M+", label: "ลูกค้าที่ไว้วางใจ" },
  { number: "20+", label: "ผลิตภัณฑ์" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="ลูกชิ้นรสโอชา"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">เกี่ยวกับเรา</h1>
          <p className="text-xl md:text-2xl text-white/90">
            ลูกชิ้นรสโอชา - ตำนานความอร่อยตั้งแต่ปี 1978
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#8B1538] font-semibold text-sm uppercase tracking-wider">
                เรื่องราวของเรา
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                จากครัวเล็กๆ สู่ความอร่อยระดับประเทศ
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ลูกชิ้นรสโอชา เริ่มต้นจากความรักในการทำอาหารของคุณยายในปี 1978 
                  ด้วยสูตรลับที่สืบทอดมาจากรุ่นสู่รุ่น ลูกชิ้นของเราจึงมีรสชาติที่เป็นเอกลักษณ์ 
                  หอม อร่อย และเด้งกรุบ ไม่เหมือนใคร
                </p>
                <p>
                  วันนี้ เราได้พัฒนาจากร้านเล็กๆ ในตลาด กลายเป็นโรงงานผลิตที่ทันสมัย 
                  พร้อมมาตรฐานการผลิตระดับสากล แต่สิ่งที่ไม่เคยเปลี่ยนคือ 
                  ความใส่ใจในทุกขั้นตอนการผลิต และการคัดสรรวัตถุดิบคุณภาพดีที่สุด
                </p>
                <p>
                  เราภูมิใจที่ได้เป็นส่วนหนึ่งของโต๊ะอาหารครอบครัวไทยมานานกว่า 45 ปี 
                  และจะยังคงมุ่งมั่นสร้างสรรค์ความอร่อยต่อไปในอนาคต
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-tradition.jpg"
                  alt="ประเพณีการทำลูกชิ้น"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#8B1538] text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">45+</p>
                <p className="text-sm">ปีแห่งความอร่อย</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#8B1538]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#8B1538] font-semibold text-sm uppercase tracking-wider">
              คุณค่าของเรา
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              สิ่งที่เรายึดมั่น
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-[#8B1538]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#8B1538]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-factory.jpg"
                  alt="โรงงานผลิตลูกชิ้นรสโอชา"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#8B1538] font-semibold text-sm uppercase tracking-wider">
                โรงงานของเรา
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                มาตรฐานการผลิตระดับสากล
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  โรงงานผลิตของเราได้รับการรับรองมาตรฐาน GMP และ HACCP 
                  มั่นใจได้ในความสะอาดและปลอดภัยในทุกขั้นตอนการผลิต
                </p>
                <p>
                  เราใช้เครื่องจักรที่ทันสมัย ควบคู่กับการควบคุมคุณภาพโดยผู้เชี่ยวชาญ 
                  เพื่อให้ได้ลูกชิ้นที่มีคุณภาพสม่ำเสมอในทุกชิ้น
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium">GMP Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium">HACCP Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
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
          <div className="text-center mb-12">
            <span className="text-[#8B1538] font-semibold text-sm uppercase tracking-wider">
              เส้นทางของเรา
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              ประวัติและพัฒนาการ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#8B1538] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-[#8B1538]/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B1538]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            พร้อมลิ้มรสความอร่อย?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            ติดต่อเราวันนี้เพื่อสั่งซื้อลูกชิ้นคุณภาพ หรือสอบถามข้อมูลเพิ่มเติม
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#8B1538] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            ติดต่อเรา
          </a>
        </div>
      </section>
    </div>
  )
}
