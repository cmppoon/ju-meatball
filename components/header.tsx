"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "หน้าหลัก", href: "/" },
  { name: "สินค้า", href: "/products" },
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "บทความ", href: "/articles" },
  { name: "ติดต่อเรา", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#8B1A1A] shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="ลูกชิ้นรสโอชา"
            width={60}
            height={60}
            className="h-14 w-14 rounded-full bg-white p-1"
          />
          <div className="hidden sm:block">
            <p className="text-lg font-bold text-white">ลูกชิ้นรสโอชา</p>
            <p className="text-xs text-white/80">Since 1978</p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-white text-[#8B1A1A] hover:bg-white/90"
          >
            <Link href="/contact">สั่งซื้อเลย</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#8B1A1A] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-white/90 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-white text-[#8B1A1A] hover:bg-white/90 mt-4"
            >
              <Link href="/contact">สั่งซื้อเลย</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
