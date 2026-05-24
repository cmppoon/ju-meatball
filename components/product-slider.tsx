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
} from "@/components/ui/carousel";
import productsData from "@/data/products.json";

export function ProductSlider() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-dark-maroon-theme text-sm font-bold tracking-[0.3em] uppercase lg:text-lg">
                สินค้าของเรา
              </span>
              <h2 className="text-black-theme mt-3 text-5xl leading-tight font-extrabold lg:text-6xl">
                ลูกชิ้น<span className="text-maroon-theme">คุณภาพ</span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <CarouselPrevious className="static h-14 w-14 translate-x-0 translate-y-0 rounded-none border-2 border-black bg-transparent text-black transition-colors hover:border-[#8B1A1A] hover:bg-maroon-theme hover:text-white" />
              <CarouselNext className="static h-14 w-14 translate-x-0 translate-y-0 rounded-none border-2 border-black bg-transparent text-black transition-colors hover:border-[#8B1A1A] hover:bg-maroon-theme hover:text-white" />
            </div>
          </div>

          <CarouselContent className="-ml-4">
            {productsData.items.filter((p) => p.showInSlider).map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative w-full overflow-hidden bg-gray-100">
                  <Image
                    src={product.sliderImage}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />

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
