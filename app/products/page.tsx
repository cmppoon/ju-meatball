import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

export const metadata: Metadata = {
  title: "สินค้า - ลูกชิ้นรสโอชา",
  description:
    "ลูกชิ้นคุณภาพพรีเมียม ลูกชิ้นหมู ลูกชิ้นเนื้อ ลูกชิ้นปลา ลูกชิ้นไก่ สูตรดั้งเดิมกว่า 45 ปี",
};

const products = [
  {
    id: 1,
    name: "ลูกชิ้นหมู",
    image: "/images/product-1.jpg",
    description:
      "ลูกชิ้นหมูแท้ 100% เนื้อแน่น กรอบนอกนุ่มใน รสชาติกลมกล่อม เหมาะสำหรับปิ้งย่าง ต้ม หรือทอด",
    features: ["เนื้อหมูแท้ 100%", "ไม่ใส่สารกันบูด", "ผ่านมาตรฐาน อย."],
  },
  {
    id: 2,
    name: "ลูกชิ้นเนื้อ",
    image: "/images/product-2.jpg",
    description:
      "ลูกชิ้นเนื้อวัวคัดพิเศษ รสชาติเข้มข้น เนื้อแน่นเด้ง เหมาะสำหรับก๋วยเตี๋ยว หรือหมูกระทะ",
    features: ["เนื้อวัวคัดพิเศษ", "รสชาติเข้มข้น", "ผ่านมาตรฐาน อย."],
  },
  {
    id: 3,
    name: "ลูกชิ้นปลา",
    image: "/images/product-3.jpg",
    description:
      "ลูกชิ้นปลาสดใหม่ เนื้อเด้งกรุบกรอบ รสชาติหวานธรรมชาติ เหมาะสำหรับต้มยำ หรือทอด",
    features: ["ปลาสดใหม่ทุกวัน", "ไขมันต่ำ", "ผ่านมาตรฐาน อย."],
  },
  {
    id: 4,
    name: "ลูกชิ้นไก่",
    image: "/images/product-4.jpg",
    description:
      "ลูกชิ้นไก่เนื้อดี ไขมันต่ำ ดีต่อสุขภาพ รสชาติอ่อนหวาน เหมาะสำหรับทุกเมนู",
    features: ["ไก่สดคุณภาพ", "ไขมันต่ำ", "ผ่านมาตรฐาน อย."],
  },
];

export default function ProductsPage() {
  return (
    <>
      <HeroSection
        title="สินค้าของเรา"
        subtitle="ลูกชิ้นคุณภาพพรีเมียม ผลิตจากวัตถุดิบชั้นดี ด้วยสูตรลับที่สืบทอดมากว่า 45 ปี"
        imageSrc="/images/hero.jpg"
        imageAlt="ลูกชิ้นคุณภาพ"
        className="bg-black-theme"
      />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group hover:border-maroon-theme flex flex-col border-2 border-gray-200 bg-white transition-all duration-300"
              >
                <div className="group-hover:border-maroon-theme relative aspect-square overflow-hidden border-b-2 border-gray-200 transition-colors duration-300 group-hover:border-b-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <h2 className="text-black-theme mb-3 text-2xl font-extrabold">
                    {product.name}
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    {product.description}
                  </p>

                  <ul className="mb-8 flex-1 space-y-3">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm font-bold tracking-wide text-gray-800"
                      >
                        <span className="bg-maroon-theme mt-1.5 h-2 w-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="bg-maroon-theme hover:bg-maroon-theme/80 inline-flex items-center gap-2 px-6 py-3 font-bold tracking-wider text-white uppercase transition-colors active:scale-95 justify-center"
                  >
                    <span>สั่งซื้อเลย</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <span className="text-dark-maroon-theme mb-4 block text-sm font-bold tracking-[0.3em] uppercase lg:text-lg">
            สำหรับผู้ประกอบการ
          </span>
          <h2 className="text-black-theme mb-8 text-4xl leading-tight font-extrabold lg:text-6xl">
            ต้องการสั่งซื้อ<span className="text-maroon-theme">จำนวนมาก?</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl">
            เรามีบริการขายส่งสำหรับร้านอาหาร ร้านก๋วยเตี๋ยว และผู้ประกอบการ
            พร้อมส่วนลดพิเศษและระบบจัดส่งควบคุมอุณหภูมิทั่วประเทศ
          </p>
          <Link
            href="/contact"
            className="bg-maroon-theme hover:bg-maroon-theme/80 inline-flex items-center justify-center rounded-none px-12 py-6 text-xl font-bold tracking-wide text-white transition-all active:scale-95"
          >
            ติดต่อฝ่ายขาย
          </Link>
        </div>
      </section>
    </>
  );
}
