"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "ลูกชิ้นหมู",
    image: "/images/product-1.jpg",
    description: "ลูกชิ้นหมูแท้ 100% เนื้อแน่น กรอบนอกนุ่มใน รสชาติกลมกล่อมถูกใจทุกคน",
    number: "01",
  },
  {
    id: 2,
    name: "ลูกชิ้นเนื้อ",
    image: "/images/product-2.jpg",
    description: "ลูกชิ้นเนื้อวัวคัดพิเศษ รสชาติเข้มข้น หอมกลิ่นเนื้อแท้ๆ",
    number: "02",
  },
  {
    id: 3,
    name: "ลูกชิ้นปลา",
    image: "/images/product-3.jpg",
    description: "ลูกชิ้นปลาสดใหม่ เนื้อเด้งกรุบกรอบ ไขมันต่ำ",
    number: "03",
  },
  {
    id: 4,
    name: "ลูกชิ้นไก่",
    image: "/images/product-4.jpg",
    description: "ลูกชิ้นไก่เนื้อดี ไขมันต่ำ ดีต่อสุขภาพ เหมาะสำหรับทุกวัย",
    number: "04",
  },
]

export function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-[#8B1A1A] text-sm font-bold tracking-[0.3em] uppercase">
              สินค้าของเรา
            </span>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-[#0A0A0A] mt-4 leading-tight">
              ลูกชิ้น<span className="text-[#8B1A1A]">คุณภาพ</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={goToPrevious}
              className="w-14 h-14 border-2 border-[#0A0A0A] flex items-center justify-center hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="w-14 h-14 border-2 border-[#0A0A0A] flex items-center justify-center hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full flex-shrink-0"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {/* Number overlay */}
                    <div className="absolute bottom-8 left-8">
                      <span className="text-9xl font-extrabold text-white/20">
                        {product.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-[#0A0A0A] p-12 lg:p-16 flex flex-col justify-center">
                    <div className="text-[#8B1A1A] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                      Product {product.number}
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                      {product.name}
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed mb-10">
                      {product.description}
                    </p>
                    <Button
                      asChild
                      className="bg-[#8B1A1A] hover:bg-[#A52020] text-white w-fit px-8 py-6 text-lg font-bold rounded-none"
                    >
                      <Link href="/contact" className="flex items-center gap-2">
                        สั่งซื้อ
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 flex gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="flex-1 h-1 bg-gray-200 overflow-hidden"
            >
              <div 
                className={`h-full bg-[#8B1A1A] transition-all duration-500 ${
                  index === currentIndex ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-[#0A0A0A] font-bold uppercase tracking-wider hover:text-[#8B1A1A] transition-colors"
          >
            ดูสินค้าทั้งหมด
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
