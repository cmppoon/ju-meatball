import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductSlider } from "@/components/product-slider"
import { Award, Clock, Heart, Users } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "สูตรดั้งเดิม 45 ปี",
    description: "สูตรลับที่สืบทอดมาจากรุ่นสู่รุ่น",
  },
  {
    icon: Heart,
    title: "วัตถุดิบพรีเมียม",
    description: "คัดสรรเนื้อสัตว์คุณภาพสูงทุกชิ้น",
  },
  {
    icon: Award,
    title: "มาตรฐาน อย.",
    description: "ผ่านการรับรองคุณภาพจาก อย.",
  },
  {
    icon: Users,
    title: "ลูกค้าไว้วางใจ",
    description: "ให้บริการลูกค้ามากกว่า 10,000 ราย",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="ลูกชิ้นรสโอชา"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="h-20 w-20 rounded-full bg-white p-1"
              />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  ลูกชิ้นรสโอชา
                </h1>
                <p className="text-lg text-white/80">Since 1978</p>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              ลูกชิ้นคุณภาพพรีเมียม สูตรดั้งเดิมกว่า 45 ปี
              รสชาติอร่อยที่ครอบครัวไทยไว้วางใจ
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#8B1A1A] hover:bg-[#6B1414] text-white"
              >
                <Link href="/products">ดูสินค้าทั้งหมด</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white bg-white/10 hover:bg-white hover:text-[#8B1A1A]"
              >
                <Link href="/contact">ติดต่อสั่งซื้อ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Summary Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8B1A1A] mb-4">
              ทำไมต้องเลือกเรา?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ลูกชิ้นรสโอชา ผลิตด้วยความใส่ใจในทุกขั้นตอน
              จากรุ่นสู่รุ่นเพื่อความอร่อยที่คุณวางใจได้
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-[#FFF5F5] hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#8B1A1A] text-white mb-4">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-[#8B1A1A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16 bg-[#8B1A1A]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-tradition.jpg"
                alt="Traditional meatball making"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">
                เรื่องราวของเรา
              </h2>
              <p className="text-white/90 leading-relaxed mb-6">
                ลูกชิ้นรสโอชา ก่อตั้งขึ้นในปี พ.ศ. 2521 โดยคุณปู่ของเรา
                ด้วยความมุ่งมั่นที่จะส่งมอบลูกชิ้นคุณภาพดีที่สุดให้กับครอบครัวไทย
                ตลอด 45 ปีที่ผ่านมา
                เราได้พัฒนาสูตรและกระบวนการผลิตอย่างต่อเนื่อง
                โดยยังคงรักษารสชาติดั้งเดิมที่คุณคุ้นเคย
              </p>
              <Button
                asChild
                className="bg-white text-[#8B1A1A] hover:bg-white/90"
              >
                <Link href="/about">อ่านเพิ่มเติม</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Slider */}
      <ProductSlider />

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#8B1A1A] mb-4">
            พร้อมสั่งซื้อแล้วหรือยัง?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            ติดต่อเราวันนี้เพื่อรับข้อเสนอพิเศษสำหรับลูกค้าใหม่
            เรายินดีให้บริการทั้งลูกค้ารายย่อยและลูกค้าขายส่ง
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#8B1A1A] hover:bg-[#6B1414] text-white"
          >
            <Link href="/contact">ติดต่อเราเลย</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
