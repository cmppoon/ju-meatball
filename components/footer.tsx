import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

const navigation = {
  main: [
    { name: "หน้าหลัก", href: "/" },
    { name: "สินค้า", href: "/products" },
    { name: "เกี่ยวกับเรา", href: "/about" },
    { name: "บทความ", href: "/articles" },
    { name: "ติดต่อเรา", href: "/contact" },
  ],
  products: [
    { name: "ลูกชิ้นหมู", href: "/products" },
    { name: "ลูกชิ้นเนื้อ", href: "/products" },
    { name: "ลูกชิ้นปลา", href: "/products" },
    { name: "ลูกชิ้นไก่", href: "/products" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#8B1A1A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="ลูกชิ้นรสโอชา"
                width={60}
                height={60}
                className="h-14 w-14 rounded-full bg-white p-1"
              />
              <div>
                <p className="text-lg font-bold">ลูกชิ้นรสโอชา</p>
                <p className="text-xs text-white/70">Since 1978</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              ลูกชิ้นคุณภาพพรีเมียม สูตรดั้งเดิมกว่า 45 ปี
              รสชาติอร่อยที่คุณไว้วางใจ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold mb-4">สินค้าของเรา</h3>
            <ul className="space-y-2">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">02-XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">info@lukchinocha.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  123 ถนนราชดำเนิน แขวงบางกอกน้อย เขตบางกอกน้อย กรุงเทพฯ 10700
                </span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} ลูกชิ้นรสโอชา. สงวนลิขสิทธิ์.
          </p>
        </div>
      </div>
    </footer>
  )
}
