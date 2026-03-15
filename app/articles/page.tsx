import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";

export const metadata: Metadata = {
  title: "บทความ - ลูกชิ้นรสโอชา | Articles",
  description:
    "อ่านบทความเกี่ยวกับลูกชิ้น สูตรอาหาร และเคล็ดลับการทำอาหารจากลูกชิ้นรสโอชา",
};

const articles = [
  {
    id: 1,
    slug: "history-of-thai-meatballs",
    title: "ประวัติความเป็นมาของลูกชิ้นไทย",
    titleEn: "The History of Thai Meatballs",
    excerpt:
      "ลูกชิ้นเป็นอาหารที่มีประวัติยาวนานในประเทศไทย เริ่มต้นจากการนำเข้ามาโดยชาวจีนและได้รับการพัฒนาจนกลายเป็นอาหารยอดนิยมของคนไทย",
    image: "/images/product-1.jpg",
    date: "15 มกราคม 2024",
    category: "ความรู้",
  },
  {
    id: 2,
    slug: "how-to-choose-quality-meatballs",
    title: "วิธีเลือกซื้อลูกชิ้นคุณภาพดี",
    titleEn: "How to Choose Quality Meatballs",
    excerpt:
      "เคล็ดลับการเลือกซื้อลูกชิ้นที่มีคุณภาพ สังเกตจากสี กลิ่น ความยืดหยุ่น และส่วนผสมที่ปลอดภัยต่อสุขภาพ",
    image: "/images/product-2.jpg",
    date: "28 ธันวาคม 2023",
    category: "เคล็ดลับ",
  },
  {
    id: 3,
    slug: "meatball-recipes-for-family",
    title: "5 เมนูลูกชิ้นทำง่ายสำหรับครอบครัว",
    titleEn: "5 Easy Meatball Recipes for Family",
    excerpt:
      "รวม 5 สูตรอาหารจากลูกชิ้นที่ทำได้ง่าย อร่อย และเหมาะสำหรับทุกคนในครอบครัว ตั้งแต่ต้มยำไปจนถึงผัดพริกแกง",
    image: "/images/product-3.jpg",
    date: "10 ธันวาคม 2023",
    category: "สูตรอาหาร",
  },
  {
    id: 4,
    slug: "health-benefits-of-meatballs",
    title: "คุณค่าทางโภชนาการของลูกชิ้น",
    titleEn: "Health Benefits of Meatballs",
    excerpt:
      "ลูกชิ้นเป็นแหล่งโปรตีนที่ดี มีไขมันต่ำ และสามารถเป็นส่วนหนึ่งของอาหารเพื่อสุขภาพได้หากเลือกอย่างถูกวิธี",
    image: "/images/product-4.jpg",
    date: "5 พฤศจิกายน 2023",
    category: "สุขภาพ",
  },
  {
    id: 5,
    slug: "street-food-meatball-culture",
    title: "วัฒนธรรมลูกชิ้นปิ้งริมทาง",
    titleEn: "Thai Street Food Meatball Culture",
    excerpt:
      "สำรวจวัฒนธรรมการกินลูกชิ้นปิ้งริมทางของคนไทย ตั้งแต่รถเข็นหน้าโรงเรียนไปจนถึงตลาดนัดยามเย็น",
    image: "/images/hero.jpg",
    date: "20 ตุลาคม 2023",
    category: "วัฒนธรรม",
  },
  {
    id: 6,
    slug: "meatball-storage-tips",
    title: "วิธีเก็บรักษาลูกชิ้นให้สดใหม่",
    titleEn: "Meatball Storage Tips",
    excerpt:
      "เรียนรู้วิธีการเก็บรักษาลูกชิ้นอย่างถูกวิธี ทั้งการแช่เย็นและแช่แข็ง เพื่อคงความสดและรสชาติที่ดี",
    image: "/images/about-factory.jpg",
    date: "8 ตุลาคม 2023",
    category: "เคล็ดลับ",
  },
];

export default function ArticlesPage() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection
        title="บทความ"
        subtitle="อ่านบทความเกี่ยวกับลูกชิ้น สูตรอาหาร และเคล็ดลับการทำอาหารจากลูกชิ้นรสโอชา"
        imageSrc="/images/hero.jpg"
        imageAlt="บทความลูกชิ้นรสโอชา"
        className="bg-maroon-theme"
      />

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-card group overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl"
              >
                <Link href={`/articles/${article.slug}`}>
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-maroon-theme px-3 py-1 text-xs font-medium text-white">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-2 text-sm">
                      {article.date}
                    </p>
                    <h2 className="text-foreground mb-2 text-xl font-bold transition-colors group-hover:text-[#8B1538]">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mb-1 text-sm">
                      {article.titleEn}
                    </p>
                    <p className="text-muted-foreground mt-3 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center font-medium text-[#8B1538]">
                      <span>อ่านต่อ</span>
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
