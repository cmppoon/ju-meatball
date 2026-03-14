import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "สินค้า - ลูกชิ้นรสโอชา",
  description: "ลูกชิ้นคุณภาพพรีเมียม ลูกชิ้นหมู ลูกชิ้นเนื้อ ลูกชิ้นปลา ลูกชิ้นไก่ สูตรดั้งเดิมกว่า 45 ปี",
}

const products = [
  {
    id: 1,
    name: "ลูกชิ้นหมู",
    image: "/images/product-1.jpg",
    description: "ลูกชิ้นหมูแท้ 100% เนื้อแน่น กรอบนอกนุ่มใน รสชาติกลมกล่อม เหมาะสำหรับปิ้งย่าง ต้ม หรือทอด",
    features: ["เนื้อหมูแท้ 100%", "ไม่ใส่สารกันบูด", "ผ่านมาตรฐาน อย."],
  },
  {
    id: 2,
    name: "ลูกชิ้นเนื้อ",
    image: "/images/product-2.jpg",
    description: "ลูกชิ้นเนื้อวัวคัดพิเศษ รสชาติเข้มข้น เนื้อแน่นเด้ง เหมาะสำหรับก๋วยเตี๋ยว หรือหมูกระทะ",
    features: ["เนื้อวัวคัดพิเศษ", "รสชาติเข้มข้น", "ผ่านมาตรฐาน อย."],
  },
  {
    id: 3,
    name: "ลูกชิ้นปลา",
    image: "/images/product-3.jpg",
    description: "ลูกชิ้นปลาสดใหม่ เนื้อเด้งกรุบกรอบ รสชาติหวานธรรมชาติ เหมาะสำหรับต้มยำ หรือทอด",
    features: ["ปลาสดใหม่ทุกวัน", "ไขมันต่ำ", "ผ่านมาตรฐาน อย."],
  },
  {
    id: 4,
    name: "ลูกชิ้นไก่",
    image: "/images/product-4.jpg",
    description: "ลูกชิ้นไก่เนื้อดี ไขมันต่ำ ดีต่อสุขภาพ รสชาติอ่อนหวาน เหมาะสำหรับทุกเมนู",
    features: ["ไก่สดคุณภาพ", "ไขมันต่ำ", "ผ่านมาตรฐาน อย."],
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#8B1A1A] py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">สินค้าของเรา</h1>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            ลูกชิ้นคุณภาพพรีเมียม ผลิตจากวัตถุดิบชั้นดี
            ด้วยสูตรลับที่สืบทอดมากว่า 45 ปี
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#FFF5F5]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#8B1A1A] mb-3">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8B1A1A]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-[#8B1A1A] hover:bg-[#6B1414] text-white"
                  >
                    <Link href="/contact">สั่งซื้อเลย</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#8B1A1A] mb-4">
            ต้องการสั่งซื้อจำนวนมาก?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            เรามีบริการขายส่งสำหรับร้านอาหาร ร้านก๋วยเตี๋ยว และผู้ประกอบการ
            พร้อมส่วนลดพิเศษ
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#8B1A1A] hover:bg-[#6B1414] text-white"
          >
            <Link href="/contact">ติดต่อฝ่ายขาย</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
