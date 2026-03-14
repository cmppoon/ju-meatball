"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "ลูกชิ้นหมู",
    image: "/images/product-1.jpg",
    description: "ลูกชิ้นหมูแท้ 100% เนื้อแน่น กรอบนอกนุ่มใน",
  },
  {
    id: 2,
    name: "ลูกชิ้นเนื้อ",
    image: "/images/product-2.jpg",
    description: "ลูกชิ้นเนื้อวัวคัดพิเศษ รสชาติเข้มข้น",
  },
  {
    id: 3,
    name: "ลูกชิ้นปลา",
    image: "/images/product-3.jpg",
    description: "ลูกชิ้นปลาสดใหม่ เนื้อเด้งกรุบกรอบ",
  },
  {
    id: 4,
    name: "ลูกชิ้นไก่",
    image: "/images/product-4.jpg",
    description: "ลูกชิ้นไก่เนื้อดี ไขมันต่ำ ดีต่อสุขภาพ",
  },
]

export function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  return (
    <section className="py-16 bg-[#FFF5F5]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#8B1A1A] mb-4">
            สินค้าของเรา
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ลูกชิ้นคุณภาพพรีเมียม ผลิตจากวัตถุดิบชั้นดี
            ด้วยสูตรลับที่สืบทอดมากว่า 45 ปี
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-80">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-[#8B1A1A] mb-4">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {product.description}
                        </p>
                        <Button
                          asChild
                          className="bg-[#8B1A1A] hover:bg-[#6B1414] text-white w-fit"
                        >
                          <a href="/products">ดูรายละเอียด</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-[#8B1A1A]" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-[#8B1A1A]" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[#8B1A1A]"
                    : "w-2 bg-[#8B1A1A]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
