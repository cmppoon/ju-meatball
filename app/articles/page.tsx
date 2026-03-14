import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "บทความ - ลูกชิ้นรสโอชา | Articles",
  description: "อ่านบทความเกี่ยวกับลูกชิ้น สูตรอาหาร และเคล็ดลับการทำอาหารจากลูกชิ้นรสโอชา",
}

const articles = [
  {
    id: 1,
    slug: "history-of-thai-meatballs",
    title: "ประวัติความเป็นมาของลูกชิ้นไทย",
    titleEn: "The History of Thai Meatballs",
    excerpt: "ลูกชิ้นเป็นอาหารที่มีประวัติยาวนานในประเทศไทย เริ่มต้นจากการนำเข้ามาโดยชาวจีนและได้รับการพัฒนาจนกลายเป็นอาหารยอดนิยมของคนไทย",
    image: "/images/product-1.jpg",
    date: "15 มกราคม 2024",
    category: "ความรู้",
  },
  {
    id: 2,
    slug: "how-to-choose-quality-meatballs",
    title: "วิธีเลือกซื้อลูกชิ้นคุณภาพดี",
    titleEn: "How to Choose Quality Meatballs",
    excerpt: "เคล็ดลับการเลือกซื้อลูกชิ้นที่มีคุณภาพ สังเกตจากสี กลิ่น ความยืดหยุ่น และส่วนผสมที่ปลอดภัยต่อสุขภาพ",
    image: "/images/product-2.jpg",
    date: "28 ธันวาคม 2023",
    category: "เคล็ดลับ",
  },
  {
    id: 3,
    slug: "meatball-recipes-for-family",
    title: "5 เมนูลูกชิ้นทำง่ายสำหรับครอบครัว",
    titleEn: "5 Easy Meatball Recipes for Family",
    excerpt: "รวม 5 สูตรอาหารจากลูกชิ้นที่ทำได้ง่าย อร่อย และเหมาะสำหรับทุกคนในครอบครัว ตั้งแต่ต้มยำไปจนถึงผัดพริกแกง",
    image: "/images/product-3.jpg",
    date: "10 ธันวาคม 2023",
    category: "สูตรอาหาร",
  },
  {
    id: 4,
    slug: "health-benefits-of-meatballs",
    title: "คุณค่าทางโภชนาการของลูกชิ้น",
    titleEn: "Health Benefits of Meatballs",
    excerpt: "ลูกชิ้นเป็นแหล่งโปรตีนที่ดี มีไขมันต่ำ และสามารถเป็นส่วนหนึ่งของอาหารเพื่อสุขภาพได้หากเลือกอย่างถูกวิธี",
    image: "/images/product-4.jpg",
    date: "5 พฤศจิกายน 2023",
    category: "สุขภาพ",
  },
  {
    id: 5,
    slug: "street-food-meatball-culture",
    title: "วัฒนธรรมลูกชิ้นปิ้งริมทาง",
    titleEn: "Thai Street Food Meatball Culture",
    excerpt: "สำรวจวัฒนธรรมการกินลูกชิ้นปิ้งริมทางของคนไทย ตั้งแต่รถเข็นหน้าโรงเรียนไปจนถึงตลาดนัดยามเย็น",
    image: "/images/hero.jpg",
    date: "20 ตุลาคม 2023",
    category: "วัฒนธรรม",
  },
  {
    id: 6,
    slug: "meatball-storage-tips",
    title: "วิธีเก็บรักษาลูกชิ้นให้สดใหม่",
    titleEn: "Meatball Storage Tips",
    excerpt: "เรียนรู้วิธีการเก็บรักษาลูกชิ้นอย่างถูกวิธี ทั้งการแช่เย็นและแช่แข็ง เพื่อคงความสดและรสชาติที่ดี",
    image: "/images/about-factory.jpg",
    date: "8 ตุลาคม 2023",
    category: "เคล็ดลับ",
  },
]

const categories = ["ทั้งหมด", "ความรู้", "เคล็ดลับ", "สูตรอาหาร", "สุขภาพ", "วัฒนธรรม"]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-[#8B1538] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">บทความ</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            อ่านบทความเกี่ยวกับลูกชิ้น สูตรอาหาร เคล็ดลับการทำอาหาร และความรู้ที่น่าสนใจ
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-[#8B1538] text-white"
                    : "bg-muted text-muted-foreground hover:bg-[#8B1538]/10 hover:text-[#8B1538]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <Link href={`/articles/${article.slug}`}>
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#8B1538] text-white text-xs font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                    <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#8B1538] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-1">{article.titleEn}</p>
                    <p className="text-muted-foreground mt-3 line-clamp-3">{article.excerpt}</p>
                    <div className="mt-4 flex items-center text-[#8B1538] font-medium">
                      <span>อ่านต่อ</span>
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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

      {/* Newsletter Section */}
      <section className="py-16 bg-[#8B1538]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            รับข่าวสารและบทความใหม่
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            สมัครรับข่าวสารเพื่อไม่พลาดบทความใหม่ สูตรอาหาร และโปรโมชั่นพิเศษจากเรา
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="กรอกอีเมลของคุณ"
              className="flex-1 px-5 py-3 rounded-full text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-black/80 transition-colors"
            >
              สมัครรับข่าวสาร
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
