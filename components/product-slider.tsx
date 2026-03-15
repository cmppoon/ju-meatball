"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "ลูกชิ้นหมู",
    image: "/images/product-1.jpg",
    description:
      "ลูกชิ้นหมูแท้ 100% เนื้อแน่น กรอบนอกนุ่มใน รสชาติกลมกล่อมถูกใจทุกคน",
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
];

export function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-bold tracking-[0.3em] text-[#8B1A1A] uppercase">
              สินค้าของเรา
            </span>
            <h2 className="mt-4 text-5xl leading-tight font-extrabold text-[#0A0A0A] lg:text-6xl">
              ลูกชิ้น<span className="text-[#8B1A1A]">คุณภาพ</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={goToPrevious}
              className="flex h-14 w-14 items-center justify-center border-2 border-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="flex h-14 w-14 items-center justify-center border-2 border-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-white"
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
              <div key={product.id} className="w-full flex-shrink-0">
                <div className="grid gap-0 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100 lg:aspect-auto lg:h-[600px]">
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
                  <div className="flex flex-col justify-center bg-[#0A0A0A] p-12 lg:p-16">
                    <div className="mb-4 text-sm font-bold tracking-[0.3em] text-[#8B1A1A] uppercase">
                      Product {product.number}
                    </div>
                    <h3 className="mb-6 text-4xl font-extrabold text-white lg:text-5xl">
                      {product.name}
                    </h3>
                    <p className="mb-10 text-lg leading-relaxed text-white/60">
                      {product.description}
                    </p>
                    <Button
                      asChild
                      className="w-fit rounded-none bg-[#8B1A1A] px-8 py-6 text-lg font-bold text-white hover:bg-[#A52020]"
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
              className="h-1 flex-1 overflow-hidden bg-gray-200"
            >
              <div
                className={`h-full bg-[#8B1A1A] transition-all duration-500 ${
                  index === currentIndex ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-bold tracking-wider text-[#0A0A0A] uppercase transition-colors hover:text-[#8B1A1A]"
          >
            ดูสินค้าทั้งหมด
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
