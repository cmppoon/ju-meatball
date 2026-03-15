import { MarqueeBanner } from "@/components/marquee-banner";
import { ProductSlider } from "@/components/product-slider";
import { ScrollLink } from "@/components/scrollToLinkBtn";
import Services from "@/components/services";
import WhyChooseUs from "@/components/whyChooseUs";
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
      <section className="bg-black-theme relative flex min-h-screen flex-col overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="ลูกชิ้นรสโอชา - ความอร่อยที่คุณไว้วางใจ"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-8 md:py-20 lg:px-8">
          <div className="grid w-full items-center gap-8 md:gap-12 lg:mt-8 lg:grid-cols-2">
            {/* Left - Text */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <span className="text-dark-yellow-theme text-xs font-bold tracking-[0.3em] uppercase md:text-sm">
                  Since 1978
                </span>
              </div>

              <h1 className="mb-4 text-white md:mb-6">
                <span className="block text-5xl leading-none font-extrabold tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
                  ลูกชิ้น
                </span>
                <span className="text-maroon-theme block text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
                  รสโอชา
                </span>
              </h1>

              <p className="mx-auto mb-6 max-w-md text-lg leading-relaxed text-white/70 md:mb-6 md:text-xl lg:mx-0">
                ลูกชิ้นคุณภาพพรีเมียม สูตรดั้งเดิมกว่า 45 ปี
                รสชาติที่คุณไว้วางใจ
              </p>

              <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row md:pt-4 lg:justify-start">
                <ScrollLink
                  target="services"
                  className="group bg-maroon-theme hover:bg-maroon-theme/80 relative inline-flex w-full items-center justify-center px-8 py-4 transition-all active:scale-95 sm:w-auto"
                >
                  <span className="text-base font-bold tracking-wide text-white md:text-lg">
                    ดูบริการของเรา
                  </span>
                </ScrollLink>

                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center border-2 border-white bg-transparent px-8 py-4 transition-all hover:bg-white active:scale-95 sm:w-auto"
                >
                  <span className="flex items-center text-base font-bold tracking-wide text-white transition-colors group-hover:text-black md:text-lg">
                    ติดต่อเรา
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right - Logo */}
            <div className="hidden tems-center justify-center lg:order-last lg:flex">
              <div className="relative">
                <div className="bg-maroon-theme/20 absolute -inset-8 rounded-full blur-3xl" />
                <Image
                  src="/images/logo.png"
                  alt="ลูกชิ้นรสโอชา โลโก้"
                  width={450}
                  height={450}
                  className="relative z-10 h-auto w-64 drop-shadow-2xl md:w-80 lg:w-112.5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="bg-maroon-theme relative z-20 mt-auto w-full">
          <div className="mx-auto max-w-7xl px-4 py-4 md:py-4 lg:px-8">
            <div className="grid grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-extrabold tracking-tight text-white md:text-4xl">
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

      <section className="relative overflow-hidden bg-gray-50 px-18 py-18 lg:py-24">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-linear-to-bl from-[#D4A853]/5 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left - Image Grid */}
            <div className="relative">
              <div className="bg-dark-yellow-theme absolute -top-6 -left-6 z-0 h-32 w-32" />
              <div className="border-maroon-theme/10 absolute -right-6 -bottom-6 z-0 h-48 w-48 border-4" />

              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-4/5 overflow-hidden shadow-lg">
                    <Image
                      src="/images/product-1.jpg"
                      alt="Premium Meatballs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-maroon-theme relative flex aspect-square flex-col items-center justify-center overflow-hidden shadow-lg">
                    <p className="text-5xl font-extrabold text-white">45+</p>
                    <p className="mt-2 text-sm tracking-widest text-white/80 uppercase">
                      Years
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-black-theme relative flex aspect-square items-center justify-center overflow-hidden p-8 shadow-lg">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      width={150}
                      height={150}
                      className="opacity-90"
                    />
                  </div>
                  <div className="relative aspect-4/5 overflow-hidden shadow-lg">
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
                <span className="text-dark-maroon-theme text-sm font-bold tracking-[0.3em] uppercase lg:text-lg">
                  เกี่ยวกับเรา
                </span>
              </div>

              <h2 className="text-black-theme text-5xl leading-tight font-extrabold lg:text-6xl">
                ตำนานความอร่อย
                <br />
                <span className="text-maroon-theme">ที่สืบทอดมา</span>
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
                    className="border-dark-yellow-theme hover:border-maroon-theme border-l-4 pl-4 transition-colors"
                  >
                    <h3 className="text-black-theme text-lg font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="group bg-black-theme group hover:border-maroon-theme inline-flex items-center justify-center border-2 border-transparent px-8 py-4 transition-all hover:bg-white active:scale-95"
                >
                  <span className="group-hover:text-maroon-theme flex items-center text-lg font-bold tracking-wide text-white">
                    อ่านเพิ่มเติม
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Products Section */}
      <ProductSlider />

      {/* Benefits Section */}
      <WhyChooseUs />

      {/* CTA Section - Bold */}
      <section className="bg-maroon-theme relative overflow-hidden py-32">
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
              className="group hover:bg-black-theme inline-flex items-center justify-center bg-white px-10 py-5 transition-all active:scale-95"
            >
              <span className="text-maroon-theme flex items-center text-lg font-bold tracking-wide transition-colors group-hover:text-white">
                ติดต่อเรา
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/products"
              className="group inline-flex items-center justify-center border-2 border-white bg-transparent px-10 py-5 transition-all hover:bg-white active:scale-95"
            >
              <span className="group-hover:text-maroon-theme text-lg font-bold tracking-wide text-white transition-colors">
                ดูสินค้าทั้งหมด
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
