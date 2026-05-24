import WhyChooseUs from "@/components/whyChooseUs";
import { HeroSection } from "@/components/hero-section";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import oemData from "@/data/oem.json";

export const metadata = {
  title: "OEM - บริการผลิตสินค้าภายใต้แบรนด์ของคุณ | ลูกชิ้นรสโอชา",
  description:
    "บริการ OEM ผลิตลูกชิ้นและผลิตภัณฑ์แปรรูปเนื้อสัตว์ภายใต้แบรนด์ของคุณ ด้วยมาตรฐานการผลิตระดับสากล",
};

export default function OEMPage() {
  const { description, services, process, cta } = oemData;

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="บริการ ODM& OEM"
        subtitle="วิจัย พัฒนาสูตรและผลิตสินค้าภายใต้แบรนด์ของคุณ ด้วยประสบการณ์กว่า 45 ปี"
        imageSrc="/images/hero.webp"
        imageAlt="บริการ OEM ลูกชิ้นรสโอชา"
        className="bg-maroon-theme"
      />

      <WhyChooseUs />

      {/* Services List */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-black-theme mb-2 text-4xl font-extrabold">
                บริการของเรา
              </h2>
              <p className="mt-4 text-gray-600">{description}</p>
              <ul className="mt-8 space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle className="text-maroon-theme mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-none">
              <Image
                src="/images/about-factory.jpg"
                alt="โรงงานผลิตลูกชิ้น"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-black-theme mb-2 text-center text-4xl font-extrabold">
            ขั้นตอนการทำงาน
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="bg-maroon-theme mx-auto flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-maroon-theme relative z-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-2 text-4xl font-extrabold text-white lg:text-5xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {cta.body}
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex h-12 items-center justify-center border-2 border-white bg-transparent px-10 py-5 transition-all hover:bg-white active:scale-95"
          >
            <span className="group-hover:text-maroon-theme text-lg font-bold tracking-wide text-white transition-colors">
              ติดต่อเรา
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
