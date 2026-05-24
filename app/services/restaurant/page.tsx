import Image from "next/image";
import { Award, CircleDollarSign, Phone, TrendingUp, Truck, type LucideIcon } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import restaurantData from "@/data/restaurant.json";
import contactData from "@/data/contact.json";

export const metadata = {
  title: "ร้านอาหาร - ราคาพิเศษสำหรับผู้ประกอบการ | ลูกชิ้นรสโอชา",
  description:
    "ราคาส่งพิเศษสำหรับร้านอาหารและผู้ประกอบการ พร้อมจัดส่งฟรีถึงหน้าร้าน",
};

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Truck,
  CircleDollarSign,
  Award,
};

const phoneDetail = contactData.info[0].details[0];
const phoneLink = "link" in phoneDetail ? phoneDetail.link : "";
const phoneText = phoneDetail.text;

export default function RestaurantPage() {
  const { pricing, grill } = restaurantData;

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="บริการร้านอาหาร"
        subtitle="ราคาพิเศษสำหรับผู้ประกอบการ พร้อมจัดส่งฟรีถึงหน้าร้าน"
        imageSrc="/images/hero.webp"
        imageAlt="บริการร้านอาหาร ลูกชิ้นรสโอชา"
        className="bg-maroon-theme"
      />

      {/* Pricing Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-4/3 overflow-hidden shadow-2xl">
              <Image
                src="/images/product-1.jpg"
                alt="ราคาพิเศษสำหรับร้านอาหาร"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-dark-maroon-theme mb-4 block text-sm font-bold tracking-[0.3em] uppercase lg:text-lg">
                {pricing.subheading}
              </span>
              <h2 className="text-black-theme mt-2 text-5xl font-extrabold leading-tight">
                {pricing.heading}
              </h2>
              <div className="bg-dark-yellow-theme mt-6 h-1 w-16" />
              <p className="mt-6 text-xl leading-relaxed text-gray-600">{pricing.body}</p>
              <a
                href={phoneLink}
                className="mt-10 inline-flex items-center gap-3 bg-maroon-theme px-8 py-4 transition-all hover:bg-[#7A1717] active:scale-95"
              >
                <Phone className="h-5 w-5 text-white" />
                <span className="text-lg font-bold tracking-wide text-white">
                  โทร: {phoneText}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grill Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-16 text-center">
            <span className="text-dark-maroon-theme mb-4 block text-sm font-bold tracking-[0.3em] uppercase lg:text-lg">
              เพิ่มรายได้ให้ร้านคุณ
            </span>
            <h2 className="text-black-theme mt-2 text-5xl font-extrabold leading-tight lg:text-6xl">
              {grill.heading}{" "}
              <span className="text-maroon-theme">{grill.headingBrand}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-gray-600">
              {grill.body}
            </p>
          </div>

          {/* Image + Features grid */}
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[400px] overflow-hidden shadow-lg">
              <Image
                src="/images/product-1.jpg"
                alt="ลูกชิ้นปิ้ง by ลูกชิ้นรสโอชา"
                fill
                className="object-cover"
              />
            </div>

            {/* Feature cards 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {grill.features.map((feature) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div
                    key={feature.title}
                    className="group border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-maroon-theme hover:bg-maroon-theme"
                  >
                    <Icon className="h-8 w-8 text-maroon-theme transition-colors duration-300 group-hover:text-white" />
                    <h3 className="mt-4 text-lg font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href={phoneLink}
              className="group inline-flex items-center gap-3 bg-maroon-theme px-10 py-4 transition-all hover:bg-[#7A1717] active:scale-95"
            >
              <Phone className="h-5 w-5 text-white" />
              <span className="text-lg font-bold tracking-wide text-white">
                สนใจสั่งซื้อลูกชิ้นปิ้ง โทร: {phoneText}
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
