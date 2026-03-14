"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              บริการ
              <ChevronDown
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-lg bg-white shadow-xl ring-1 ring-black/5">
                <div className="p-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block rounded-md px-3 py-2 transition-colors hover:bg-[#8B1A1A]/10"
                      onClick={() => setServicesOpen(false)}
                    >
                      <p className="text-sm font-medium text-[#8B1A1A]">
                        {service.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {service.description}
                      </p>
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
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild className="bg-white text-[#8B1A1A] hover:bg-white/90">
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
          <div className="px-4 py-4 space-y-1">
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-white/90 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between text-base font-medium text-white/90 hover:text-white py-2"
              >
                บริการ
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 space-y-1 border-l border-white/20 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block py-2 text-sm text-white/80 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
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
  );
}
