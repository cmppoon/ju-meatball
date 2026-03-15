import { MarqueeBanner } from "@/components/marquee-banner";
import { ProductSlider } from "@/components/product-slider";
import { ArrowRight, Award, Clock, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
];

const stats = [
  { number: "45+", label: "ปีแห่งประสบการณ์" },
  { number: "50+", label: "พนักงานมืออาชีพ" },
  { number: "1M+", label: "ลูกค้าทั่วประเทศ" },
  { number: "20+", label: "ผลิตภัณฑ์คุณภาพ" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#0A0A0A]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Premium Thai Meatballs"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-12 md:py-20 lg:px-8">
          <div className="grid w-full items-center gap-8 md:gap-12 lg:grid-cols-2">
            {/* Left - Text */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <span className="text-xs font-bold tracking-[0.3em] text-[#D4A853] uppercase md:text-sm">
                  Since 1978
                </span>
              </div>

              <h1 className="mb-4 text-white md:mb-6">
                <span className="block text-5xl leading-none font-extrabold tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
                  ลูกชิ้น
                </span>
                <span className="block text-5xl leading-none font-extrabold tracking-tight text-[#8B1A1A] sm:text-6xl md:text-8xl lg:text-9xl">
                  รสโอชา
                </span>
              </h1>

              <p className="mx-auto mb-6 max-w-md text-lg leading-relaxed text-white/70 md:mb-8 md:text-xl lg:mx-0">
                ลูกชิ้นคุณภาพพรีเมียม สูตรดั้งเดิมกว่า 45 ปี
                รสชาติที่คุณไว้วางใจ
              </p>

              <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row md:pt-4 lg:justify-start">
                <Link
                  href="/products"
                  className="group relative inline-flex w-full items-center justify-center bg-[#8B1A1A] px-8 py-4 transition-all hover:bg-[#A52020] active:scale-95 sm:w-auto"
                >
                  <span className="flex items-center text-base font-bold tracking-wide text-white md:text-lg">
                    ดูสินค้า
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center border-2 border-white bg-transparent px-8 py-4 transition-all hover:bg-white active:scale-95 sm:w-auto"
                >
                  <span className="text-base font-bold tracking-wide text-white transition-colors group-hover:text-black md:text-lg">
                    ติดต่อเรา
                  </span>
                </Link>
              </div>
            </div>

            {/* Right - Logo/Mascot */}
            <div className="hidden items-center justify-center lg:flex">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-[#8B1A1A]/20 blur-3xl" />
                <Image
                  src="/images/logo.png"
                  alt="ลูกชิ้นรสโอชา Mascot"
                  width={450}
                  height={450}
                  className="relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="relative z-20 mt-auto w-full bg-[#8B1A1A]">
          <div className="mx-auto max-w-7xl px-4 py-6 md:py-8 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-xs tracking-wider text-white/80 uppercase md:mt-2 md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MarqueeBanner />

      {/* About Section - Updated with Warm Gray and Yellow Accents */}
      {/* Changed bg-white to bg-[#FAFAFA] for a slightly softer, premium look */}
      <section className="relative overflow-hidden bg-[#FAFAFA] py-24 lg:py-32">
        {/* Subtle background decoration */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-gradient-to-bl from-[#D4A853]/5 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left - Image Grid */}
            <div className="relative">
              {/* Added: Yellow offset geometric square for visual pop */}
              <div className="absolute -top-6 -left-6 z-0 h-32 w-32 bg-[#D4A853]" />
              <div className="absolute -right-6 -bottom-6 z-0 h-48 w-48 border-4 border-[#8B1A1A]/10" />

              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] overflow-hidden shadow-lg">
                    <Image
                      src="/images/product-1.jpg"
                      alt="Premium Meatballs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative flex aspect-square flex-col items-center justify-center overflow-hidden bg-[#8B1A1A] shadow-lg">
                    <p className="text-5xl font-extrabold text-white">45+</p>
                    <p className="mt-2 text-sm tracking-widest text-white/80 uppercase">
                      Years
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#0A0A0A] p-8 shadow-lg">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      width={150}
                      height={150}
                      className="opacity-90"
                    />
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden shadow-lg">
                    <Image
                      src="/images/about-tradition.jpg"
                      alt="Traditional Recipe"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-bold tracking-[0.3em] text-[#8B1A1A] uppercase">
                  เกี่ยวกับเรา
                </span>
              </div>

              <h2 className="text-5xl leading-tight font-extrabold text-[#0A0A0A] lg:text-6xl">
                ตำนานความอร่อย
                <br />
                <span className="text-[#8B1A1A]">ที่สืบทอดมา</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                ลูกชิ้นรสโอชา ก่อตั้งขึ้นในปี พ.ศ. 2521
                ด้วยความมุ่งมั่นในการสร้างสรรค์ ลูกชิ้นคุณภาพสูงสุด
                เราใช้สูตรลับดั้งเดิมที่สืบทอดมาจากรุ่นสู่รุ่น
                ผสมผสานกับเทคโนโลยีการผลิตที่ทันสมัย
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {features.slice(0, 2).map((feature, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-[#D4A853] pl-4 transition-colors hover:border-[#8B1A1A]"
                  >
                    <h3 className="text-lg font-bold text-[#0A0A0A]">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                {/* Fixed: Replaced Button asChild with solid Link */}
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center bg-[#0A0A0A] px-8 py-4 transition-all hover:bg-[#8B1A1A] active:scale-95"
                >
                  <span className="flex items-center text-lg font-bold tracking-wide text-white">
                    อ่านเพิ่มเติม
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductSlider />

      {/* Features Section - Bold Cards */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-bold tracking-[0.3em] text-[#D4A853] uppercase">
              ทำไมต้องเลือกเรา
            </span>
            <h2 className="mt-4 text-5xl leading-tight font-extrabold text-white lg:text-6xl">
              มาตรฐานที่<span className="text-[#8B1A1A]">แตกต่าง</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group border-2 border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-[#8B1A1A] hover:bg-[#8B1A1A]"
              >
                <div className="mb-4 text-7xl leading-none font-extrabold text-white/20 transition-colors group-hover:text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-white/60 transition-colors group-hover:text-white/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold */}
      <section className="relative overflow-hidden bg-[#8B1A1A] py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="stripe-pattern absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="mb-6 text-5xl leading-tight font-extrabold text-white lg:text-7xl">
            พร้อมสัมผัสความอร่อย?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/80">
            ติดต่อเราวันนี้เพื่อสั่งซื้อลูกชิ้นคุณภาพพรีเมียม
            หรือสอบถามข้อมูลเพิ่มเติมเกี่ยวกับบริการของเรา
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-white px-10 py-5 transition-all hover:bg-[#0A0A0A] active:scale-95"
            >
              <span className="flex items-center text-lg font-bold tracking-wide text-[#8B1A1A] transition-colors group-hover:text-white">
                ติดต่อเรา
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/products"
              className="group inline-flex items-center justify-center border-2 border-white bg-transparent px-10 py-5 transition-all hover:bg-white active:scale-95"
            >
              <span className="text-lg font-bold tracking-wide text-white transition-colors group-hover:text-[#8B1A1A]">
                ดูสินค้าทั้งหมด
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
