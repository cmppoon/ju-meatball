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
      <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden flex flex-col">
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
        <div className="relative z-10 flex-1 flex items-center mx-auto max-w-7xl px-4 lg:px-8 w-full py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            {/* Left - Text */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <span className="text-[#D4A853] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                  Since 1978
                </span>
              </div>

              <h1 className="text-white mb-4 md:mb-6">
                <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight">
                  ลูกชิ้น
                </span>
                <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight text-[#8B1A1A]">
                  รสโอชา
                </span>
              </h1>

              <p className="text-white/70 text-lg md:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed mb-6 md:mb-8">
                ลูกชิ้นคุณภาพพรีเมียม สูตรดั้งเดิมกว่า 45 ปี
                รสชาติที่คุณไว้วางใจ
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center bg-[#8B1A1A] px-8 py-4 transition-all hover:bg-[#A52020] active:scale-95"
                >
                  <span className="text-white text-base md:text-lg font-bold tracking-wide flex items-center">
                    ดูสินค้า
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex w-full sm:w-auto items-center justify-center border-2 border-white bg-transparent px-8 py-4 transition-all hover:bg-white active:scale-95"
                >
                  <span className="text-white group-hover:text-black text-base md:text-lg font-bold tracking-wide transition-colors">
                    ติดต่อเรา
                  </span>
                </Link>
              </div>
            </div>

            {/* Right - Logo/Mascot */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-[#8B1A1A]/20 rounded-full blur-3xl" />
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
        <div className="relative z-20 bg-[#8B1A1A] w-full mt-auto">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                    {stat.number}
                  </p>
                  <p className="text-white/80 mt-1 md:mt-2 text-xs md:text-sm uppercase tracking-wider">
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
      <section className="relative py-24 lg:py-32 bg-[#FAFAFA] overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#D4A853]/5 to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Grid */}
            <div className="relative">
              {/* Added: Yellow offset geometric square for visual pop */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#D4A853] z-0" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-[#8B1A1A]/10 z-0" />

              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] relative overflow-hidden shadow-lg">
                    <Image
                      src="/images/product-1.jpg"
                      alt="Premium Meatballs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative overflow-hidden bg-[#8B1A1A] flex flex-col items-center justify-center shadow-lg">
                    <p className="text-white text-5xl font-extrabold">45+</p>
                    <p className="text-white/80 text-sm uppercase tracking-widest mt-2">
                      Years
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square relative overflow-hidden bg-[#0A0A0A] flex items-center justify-center p-8 shadow-lg">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      width={150}
                      height={150}
                      className="opacity-90"
                    />
                  </div>
                  <div className="aspect-[4/5] relative overflow-hidden shadow-lg">
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
                <span className="text-[#8B1A1A] text-sm font-bold tracking-[0.3em] uppercase">
                  เกี่ยวกับเรา
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-extrabold text-[#0A0A0A] leading-tight">
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
                    <h3 className="font-bold text-[#0A0A0A] text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
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
                  <span className="text-white text-lg font-bold tracking-wide flex items-center">
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
      <section className="py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A853] text-sm font-bold tracking-[0.3em] uppercase">
              ทำไมต้องเลือกเรา
            </span>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white mt-4 leading-tight">
              มาตรฐานที่<span className="text-[#8B1A1A]">แตกต่าง</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 border-2 border-white/10 p-8 hover:bg-[#8B1A1A] hover:border-[#8B1A1A] transition-all duration-500"
              >
                <div className="text-7xl font-extrabold text-white/20 group-hover:text-white/40 mb-4 leading-none transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold */}
      <section className="relative py-32 bg-[#8B1A1A] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 stripe-pattern" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            พร้อมสัมผัสความอร่อย?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            ติดต่อเราวันนี้เพื่อสั่งซื้อลูกชิ้นคุณภาพพรีเมียม
            หรือสอบถามข้อมูลเพิ่มเติมเกี่ยวกับบริการของเรา
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-white px-10 py-5 transition-all hover:bg-[#0A0A0A] active:scale-95"
            >
              <span className="text-[#8B1A1A] group-hover:text-white text-lg font-bold tracking-wide flex items-center transition-colors">
                ติดต่อเรา
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/products"
              className="group inline-flex items-center justify-center border-2 border-white bg-transparent px-10 py-5 transition-all hover:bg-white active:scale-95"
            >
              <span className="text-white group-hover:text-[#8B1A1A] text-lg font-bold tracking-wide transition-colors">
                ดูสินค้าทั้งหมด
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
