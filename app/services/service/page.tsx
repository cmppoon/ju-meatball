import { Phone } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import contactData from "@/data/contact.json";

export const metadata = {
  title: "บริการของเรา | ลูกชิ้นรสโอชา",
  description: "ร้านลูกชิ้นปิ้งรสโอชา และบริการจัดเลี้ยง ออกบูธ งานอีเว้นต์ต่างๆ ครบวงจร",
};

const phoneDetail = contactData.info[0].details[0];
const phoneLink = "link" in phoneDetail ? phoneDetail.link : "";
const phoneText = phoneDetail.text;

export default function FoodServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Food Service"
        imageSrc="/images/hero.webp"
        imageAlt="บริการของลูกชิ้นรสโอชา"
        className="bg-maroon-theme"
      />

      {/* ร้านลูกชิ้นปิ้ง Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-dark-maroon-theme mb-4 block text-sm font-bold tracking-[0.3em] uppercase lg:text-lg">
              บริการของเรา
            </span>
            <h2 className="text-black-theme mt-2 text-5xl font-extrabold leading-tight lg:text-6xl">
              ร้านลูกชิ้นปิ้ง<span className="text-maroon-theme">รสโอชา</span>
            </h2>
          </div>

          {/* Placeholder space */}
          <div className="flex min-h-[300px] items-center justify-center border-2 border-dashed border-gray-200 bg-gray-50">
            <p className="text-gray-400">Coming Soon</p>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-dark-maroon-theme mb-4 block text-sm font-bold tracking-[0.3em] uppercase lg:text-lg">
              บริการของเรา
            </span>
            <h2 className="text-black-theme mt-2 text-5xl font-extrabold leading-tight lg:text-6xl">
              Catering
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-600">
              บริการจัดเลี้ยง ออกบูธ งานอีเว้นต์ต่างๆ ครบวงจร
            </p>
          </div>

          <div className="mt-12 text-center">
            <a
              href={phoneLink}
              className="inline-flex items-center gap-3 bg-maroon-theme px-10 py-4 transition-all hover:bg-[#7A1717] active:scale-95"
            >
              <Phone className="h-5 w-5 text-white" />
              <span className="text-lg font-bold tracking-wide text-white">
                สอบถามบริการ โทร: {phoneText}
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
