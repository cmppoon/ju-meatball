"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

// Note: Ensure your Button import path is correct for your project
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "หน้าหลัก", href: "/" },
  { name: "สินค้า", href: "/products" },
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "บทความ", href: "/articles" },
  { name: "ติดต่อเรา", href: "/contact" },
]

const services = [
  { name: "OEM", href: "/services/oem", description: "บริการผลิตสินค้าภายใต้แบรนด์ของคุณ" },
  { name: "ตัวแทนจำหน่าย", href: "/services/distributor", description: "ร่วมเป็นตัวแทนจำหน่ายกับเรา" },
  { name: "แฟรนไชส์", href: "/services/franchise", description: "โอกาสธุรกิจแฟรนไชส์ลูกชิ้น" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A] shadow-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-4 group">
          <Image
            src="/images/logo.png"
            alt="ลูกชิ้นรสโอชา"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full bg-white p-1 transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <p className="text-xl font-extrabold text-white tracking-tight">ลูกชิ้นรสโอชา</p>
            <p className="text-xs text-white/60 uppercase tracking-[0.2em]">Since 1978</p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          {navigation.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-5 py-2 text-sm font-bold text-white/80 uppercase tracking-wider transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 px-5 py-2 text-sm font-bold text-white/80 uppercase tracking-wider transition-colors hover:text-white"
            >
              บริการ
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {servicesOpen && (
              <div className="absolute left-0 top-full mt-4 w-80 bg-white shadow-2xl overflow-hidden">
                <div className="bg-[#8B1A1A] px-6 py-4">
                  <p className="text-white font-bold uppercase tracking-wider text-sm">บริการของเรา</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {services.map((service, index) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center gap-4 px-6 py-4 transition-all hover:bg-gray-50 group"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-[#0A0A0A] text-white font-bold text-sm group-hover:bg-[#8B1A1A] transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <p className="font-bold text-[#0A0A0A] group-hover:text-[#8B1A1A] transition-colors">{service.name}</p>
                        <p className="text-xs text-gray-500">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {navigation.slice(2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-5 py-2 text-sm font-bold text-white/80 uppercase tracking-wider transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          {/* Changed Button to use Link directly like we did in the hero section for consistency */}
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#A52020] text-white font-bold uppercase tracking-wider px-6 py-3 transition-colors active:scale-95"
          >
            สั่งซื้อ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden text-white p-2"
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
        <div className="lg:hidden bg-[#0A0A0A] border-t border-white/10 shadow-xl pb-4">
          <div className="px-4 py-4 space-y-1">
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-bold text-white/80 uppercase tracking-wider py-3 border-b border-white/10 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Dropdown */}
            <div className="border-b border-white/10">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between text-base font-bold text-white/80 uppercase tracking-wider py-3 hover:text-white transition-colors"
              >
                บริการ
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pb-4 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center gap-3 py-2 text-white/60 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-[#8B1A1A] font-bold">{String(index + 1).padStart(2, '0')}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {navigation.slice(2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-bold text-white/80 uppercase tracking-wider py-3 border-b border-white/10 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6">
              <Link 
                href="/contact"
                className="flex w-full items-center justify-center bg-[#8B1A1A] hover:bg-[#A52020] text-white font-bold uppercase tracking-wider py-4 transition-colors active:scale-95"
              >
                สั่งซื้อเลย
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}