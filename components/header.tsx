"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

// Note: Ensure your Button import path is correct for your project
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "หน้าหลัก", href: "/" },
  { name: "สินค้า", href: "/products" },
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "บทความ", href: "/articles" },
  { name: "ติดต่อเรา", href: "/contact" },
];

const services = [
  {
    name: "OEM",
    href: "/services/oem",
    description: "บริการผลิตสินค้าภายใต้แบรนด์ของคุณ",
  },
  {
    name: "ตัวแทนจำหน่าย",
    href: "/services/distributor",
    description: "ร่วมเป็นตัวแทนจำหน่ายกับเรา",
  },
  {
    name: "แฟรนไชส์",
    href: "/services/franchise",
    description: "โอกาสธุรกิจแฟรนไชส์ลูกชิ้น",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-[#0A0A0A] shadow-xl" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="ลูกชิ้นรสโอชา"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full bg-white p-1 transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <p className="text-xl font-extrabold tracking-tight text-white">
              ลูกชิ้นรสโอชา
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          {navigation.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-5 py-2 text-sm font-bold tracking-wider text-white/80 uppercase transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 px-5 py-2 text-sm font-bold tracking-wider text-white/80 uppercase transition-colors hover:text-white"
            >
              บริการ
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-4 w-80 overflow-hidden bg-white shadow-2xl">
                <div className="bg-[#8B1A1A] px-6 py-4">
                  <p className="text-sm font-bold tracking-wider text-white uppercase">
                    บริการของเรา
                  </p>
                </div>
                <div className="divide-y divide-gray-100">
                  {services.map((service, index) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="group flex items-center gap-4 px-6 py-4 transition-all hover:bg-gray-50"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div className="flex h-10 w-10 items-center justify-center bg-[#0A0A0A] text-sm font-bold text-white transition-colors group-hover:bg-[#8B1A1A]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <p className="font-bold text-[#0A0A0A] transition-colors group-hover:text-[#8B1A1A]">
                          {service.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {service.description}
                        </p>
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
              className="px-5 py-2 text-sm font-bold tracking-wider text-white/80 uppercase transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          {/* Changed Button to use Link directly like we did in the hero section for consistency */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#8B1A1A] px-6 py-3 font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#A52020] active:scale-95"
          >
            สั่งซื้อ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="p-2 text-white lg:hidden"
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
        <div className="border-t border-white/10 bg-[#0A0A0A] pb-4 shadow-xl lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block border-b border-white/10 py-3 text-base font-bold tracking-wider text-white/80 uppercase transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div className="border-b border-white/10">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between py-3 text-base font-bold tracking-wider text-white/80 uppercase transition-colors hover:text-white"
              >
                บริการ
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="space-y-2 pb-4">
                  {services.map((service, index) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center gap-3 py-2 text-white/60 transition-colors hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="font-bold text-[#8B1A1A]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
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
                className="block border-b border-white/10 py-3 text-base font-bold tracking-wider text-white/80 uppercase transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center bg-[#8B1A1A] py-4 font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#A52020] active:scale-95"
              >
                สั่งซื้อเลย
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
