import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import articlesData from "@/data/articles.json";

export const metadata: Metadata = {
  title: "บทความ - ลูกชิ้นรสโอชา | Articles",
  description:
    "อ่านบทความเกี่ยวกับลูกชิ้น สูตรอาหาร และเคล็ดลับการทำอาหารจากลูกชิ้นรสโอชา",
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="บทความ"
        subtitle="อ่านบทความเกี่ยวกับลูกชิ้น สูตรอาหาร และเคล็ดลับการทำอาหารจากลูกชิ้นรสโอชา"
        imageSrc="/images/hero.webp"
        imageAlt="บทความลูกชิ้นรสโอชา"
        className="bg-black-theme"
      />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articlesData.map((article) => (
              <article key={article.id} className="h-full">
                <Link
                  href={`/articles/${article.slug}`}
                  className="group flex h-full flex-col border-2 border-gray-200 bg-white transition-all duration-300 hover:border-maroon-theme"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden border-b-2 border-gray-200 transition-colors duration-300 group-hover:border-maroon-theme group-hover:border-b-gray-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="bg-maroon-theme px-4 py-2 text-xs font-bold tracking-wider text-white uppercase">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    <p className="mb-4 text-sm font-bold text-gray-500">
                      {article.date}
                    </p>
                    <h2 className="mb-2 text-2xl font-extrabold text-black-theme transition-colors group-hover:text-maroon-theme">
                      {article.title}
                    </h2>
                    <p className="mb-4 text-xs font-bold tracking-wider text-gray-400 uppercase">
                      {article.titleEn}
                    </p>
                    <p className="mb-8 flex-1 text-base leading-relaxed text-gray-600 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="mt-auto flex items-center font-bold tracking-wide text-black-theme transition-colors group-hover:text-maroon-theme">
                      <span>อ่านต่อ</span>
                      <svg
                        className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
