
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "OEM",
    href: "/services/oem",
    desc: "รับจ้างผลิตลูกชิ้นสูตรเฉพาะสำหรับแบรนด์ของคุณ",
  },
  {
    name: "ตัวแทนจำหน่าย",
    href: "/services/distributor",
    desc: "ร่วมเป็นส่วนหนึ่งของเครือข่ายความอร่อยทั่วประเทศ",
  },
  {
    name: "แฟรนไชส์",
    href: "/services/franchise",
    desc: "เริ่มต้นธุรกิจง่ายๆ ด้วยระบบแฟรนไชส์มาตรฐาน",
  },
  {
    name: "ร้านอาหาร",
    href: "/contact",
    desc: "ราคาส่งพิเศษสำหรับร้านอาหารและผู้ประกอบการ",
  },
];

export default function Services() {
  return (
    <section className="bg-light-yellow-theme/15 py-16" id="services">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center lg:text-left">
          <span className="text-dark-maroon-theme text-sm font-bold tracking-[0.3em] uppercase lg:text-lg">
            บริการของเรา
          </span>
          <h2 className="text-black-theme mt-4 text-5xl leading-tight font-extrabold lg:text-6xl">
            โซลูชันสำหรับ<span className="text-maroon-theme">ธุรกิจคุณ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group hover:border-maroon-theme hover:bg-maroon-theme flex flex-col border-2 border-gray-200 bg-white p-8 transition-all duration-300"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center">
                <span className="text-maroon-theme text-2xl font-black transition-colors duration-300 group-hover:text-white">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-black-theme mb-4 text-2xl font-extrabold transition-colors duration-300 group-hover:text-white">
                {service.name}
              </h3>

              <p className="mb-8 text-gray-600 transition-colors duration-300 group-hover:text-white/80">
                {service.desc}
              </p>

              <div className="text-maroon-theme mt-auto flex items-center font-bold tracking-wider transition-colors duration-300 group-hover:text-white">
                รายละเอียดเพิ่มเติม
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
