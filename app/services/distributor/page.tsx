import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Gift,
  Headphones,
  TrendingUp,
  Truck,
  type LucideIcon,
} from "lucide-react";

import { HeroSection } from "@/components/hero-section";
import distributorData from "@/data/distributor.json";

export const metadata = {
  title: "ตัวแทนจำหน่าย - ร่วมเป็นพาร์ทเนอร์กับเรา | ลูกชิ้นรสโอชา",
  description:
    "เปิดรับสมัครตัวแทนจำหน่ายลูกชิ้นรสโอชา พร้อมการสนับสนุนด้านการตลาดและผลตอบแทนที่คุ้มค่า",
};

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Truck,
  Gift,
  Headphones,
};

export default function DistributorPage() {
  const { benefits, requirements, requirementsDescription, cta } = distributorData;

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="ร่วมเป็นตัวแทนจำหน่าย"
        subtitle="โอกาสทางธุรกิจที่ดี กับแบรนด์ลูกชิ้นคุณภาพที่คนไทยไว้วางใจมากว่า 45 ปี"
        imageSrc="/images/hero.webp"
        imageAlt="ตัวแทนจำหน่ายลูกชิ้นรสโอชา"
        className="bg-maroon-theme"
      />

      {/* Benefits Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            สิทธิประโยชน์ตัวแทนจำหน่าย
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maroon-theme/10">
                    <Icon className="h-7 w-7 text-maroon-theme" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Requirements Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/product-1.jpg"
                alt="สินค้าลูกชิ้นรสโอชา"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                ผู้สนใจสมัคร
              </h2>
              <p className="mt-4 text-gray-600">{requirementsDescription}</p>
              <ul className="mt-8 space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-maroon-theme" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-maroon-theme py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">{cta.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">{cta.body}</p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-maroon-theme hover:bg-white/90"
          >
            <Link href="/contact">สมัครเป็นตัวแทน</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
