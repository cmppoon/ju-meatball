"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react";
import siteData from "@/data/site.json";
import servicesData from "@/data/services.json";
import contactData from "@/data/contact.json";

const socialHrefs: Record<string, string> = Object.fromEntries(
  contactData.social.map((s) => [s.platform, s.href])
);

export function Footer() {
  return (
    <footer className="bg-black-theme text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 pb-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt={siteData.brand.name}
                width={70}
                height={70}
                className="h-16 w-16 rounded-full bg-white p-1"
              />
              <div>
                <p className="text-2xl font-extrabold">{siteData.brand.name}</p>
              </div>
            </div>
            <p className="leading-relaxed text-white/60">
              {siteData.brand.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={socialHrefs.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-maroon-theme hover:bg-maroon-theme flex h-12 w-12 items-center justify-center border-2 border-white/20 transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialHrefs.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-maroon-theme hover:bg-maroon-theme flex h-12 w-12 items-center justify-center border-2 border-white/20 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialHrefs.line}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center border-2 border-white/20 transition-all hover:border-[#06C755] hover:bg-[#06C755]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold tracking-[0.2em] text-white uppercase">
              ลิงก์ด่วน
            </h3>
            <ul className="space-y-4">
              {siteData.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold tracking-[0.2em] text-white uppercase">
              บริการ
            </h3>
            <ul className="space-y-4">
              {servicesData.cards.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="mb-6 text-sm font-bold tracking-[0.2em] text-white uppercase">
              ติดต่อเรา
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="bg-maroon-theme mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1">
                  {contactData.info[0].details.map((d, i) =>
                    'link' in d ? (
                      <a key={i} href={d.link} className="text-white/80 hover:text-white transition-colors">{d.text}</a>
                    ) : (
                      <span key={i} className="text-white/80">{d.text}</span>
                    )
                  )}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-maroon-theme mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1">
                  {contactData.info[1].details.map((d, i) =>
                    'link' in d ? (
                      <a key={i} href={d.link} className="text-white/80 hover:text-white transition-colors">{d.text}</a>
                    ) : (
                      <span key={i} className="text-white/80">{d.text}</span>
                    )
                  )}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-maroon-theme mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-white/80">{contactData.addressFull}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 mb-4 h-px bg-white/10" />
        <div className="relative flex w-full items-center justify-center gap-4">
          <div className="hidden w-12 sm:block"></div>

          <p className="flex-1 text-center text-sm text-white/40">
            © {new Date().getFullYear()} {siteData.brand.copyright}
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:border-maroon-theme hover:bg-maroon-theme hidden h-12 w-12 shrink-0 items-center justify-center border-2 border-white/20 transition-all sm:relative sm:right-auto sm:flex"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
