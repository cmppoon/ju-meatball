"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react"

const navigation = {
  main: [
    { name: "หน้าหลัก", href: "/" },
    { name: "สินค้า", href: "/products" },
    { name: "เกี่ยวกับเรา", href: "/about" },
    { name: "บทความ", href: "/articles" },
    { name: "ติดต่อเรา", href: "/contact" },
  ],
  services: [
    { name: "OEM", href: "/services/oem" },
    { name: "ตัวแทนจำหน่าย", href: "/services/distributor" },
    { name: "แฟรนไชส์", href: "/services/franchise" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Top bar */}
      <div className="bg-[#8B1A1A] py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xl font-bold uppercase tracking-wider">
              พร้อมสั่งซื้อ?
            </p>
            <Link 
              href="/contact"
              className="bg-white text-[#8B1A1A] font-bold uppercase tracking-wider px-8 py-3 hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              ติดต่อเราเลย
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="ลูกชิ้นรสโอชา"
                width={70}
                height={70}
                className="h-16 w-16 rounded-full bg-white p-1"
              />
              <div>
                <p className="text-2xl font-extrabold">ลูกชิ้นรสโอชา</p>
                <p className="text-sm text-white/50 uppercase tracking-[0.2em]">Since 1978</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">
              ลูกชิ้นคุณภาพพรีเมียม สูตรดั้งเดิมกว่า 45 ปี
              รสชาติอร่อยที่ครอบครัวไทยไว้วางใจ
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-12 h-12 border-2 border-white/20 flex items-center justify-center hover:bg-[#8B1A1A] hover:border-[#8B1A1A] transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 border-2 border-white/20 flex items-center justify-center hover:bg-[#8B1A1A] hover:border-[#8B1A1A] transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 border-2 border-white/20 flex items-center justify-center hover:bg-[#06C755] hover:border-[#06C755] transition-all"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B1A1A] mb-6">
              ลิงก์ด่วน
            </h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B1A1A] mb-6">
              บริการ
            </h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B1A1A] mb-6">
              ติดต่อเรา
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#8B1A1A] flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-white/80">02-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#8B1A1A] flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-white/80">info@lukchinocha.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#8B1A1A] flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-white/80">123 ถนนราชดำเนิน กรุงเทพฯ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-12" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} ลูกชิ้นรสโอชา. สงวนลิขสิทธิ์ทั้งหมด.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 border-2 border-white/20 flex items-center justify-center hover:bg-[#8B1A1A] hover:border-[#8B1A1A] transition-all"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
