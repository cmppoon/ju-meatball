"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Update this path to match your structure

const products = [
  {
    id: 1,
    name: "ลูกชิ้นหมู",
    image: "/images/product-1.jpg",
  },
  {
    id: 2,
    name: "ลูกชิ้นเนื้อ",
    image: "/images/product-2.jpg",
  },
  {
    id: 3,
    name: "ลูกชิ้นปลา",
    image: "/images/product-3.jpg",
  },
  {
    id: 4,
    name: "ลูกชิ้นไก่",
    image: "/images/product-4.jpg",
  },
];

export function ProductSlider() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* We wrap everything in the Carousel so the buttons in the header can control it */}
        <Carousel
          opts={{
            align: "start",
            loop: true, // Allows infinite scrolling
          }}
          plugins={[
            Autoplay({
              delay: 4000, // Slides every 4 seconds
              stopOnInteraction: true, // Pauses if the user interacts with it
            }),
          ]}
          className="w-full"
        >
          {/* Header */}
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-dark-maroon-theme text-sm font-bold tracking-[0.3em] uppercase lg:text-lg">
                สินค้าของเรา
              </span>
              <h2 className="text-black-theme mt-4 text-5xl leading-tight font-extrabold lg:mt-8 lg:text-6xl">
                ลูกชิ้น<span className="text-maroon-theme">คุณภาพ</span>
              </h2>
            </div>

            {/* Navigation Buttons (Overriding absolute positioning to sit in the header) */}
            <div className="flex items-center gap-4">
              <CarouselPrevious className="static h-14 w-14 translate-x-0 translate-y-0 rounded-none border-2 border-black bg-transparent text-black transition-colors hover:border-[#8B1A1A] hover:bg-maroon-theme hover:text-white" />
              <CarouselNext className="static h-14 w-14 translate-x-0 translate-y-0 rounded-none border-2 border-black bg-transparent text-black transition-colors hover:border-[#8B1A1A] hover:bg-maroon-theme hover:text-white" />
            </div>
          </div>

          {/* Slider Content */}
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                {/* Card Container */}
                <div className="group relative aspect-square w-full overflow-hidden bg-gray-100 lg:aspect-[4/5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />

                  {/* Product Name */}
                  <div className="absolute right-0 bottom-0 left-0 flex items-center justify-center p-8">
                    <h3 className="text-3xl font-extrabold tracking-wide text-white drop-shadow-lg lg:text-4xl">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="text-black-theme inline-flex items-center gap-2 font-bold tracking-wider uppercase transition-colors hover:text-maroon-theme"
          >
            ดูสินค้าทั้งหมด
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
