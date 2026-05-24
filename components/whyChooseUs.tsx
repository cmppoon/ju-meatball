import { DoorOpen, Factory, Layers, Star, type LucideIcon } from "lucide-react";
import reasonsData from "@/data/why-choose-us.json";

const iconMap: Record<string, LucideIcon> = { DoorOpen, Factory, Layers, Star };

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-dark-maroon-theme text-sm font-bold tracking-[0.3em] uppercase lg:text-lg">
            ความมั่นใจ
          </span>
          <h2 className="mt-4 text-5xl leading-tight font-extrabold text-black-theme lg:text-6xl">
            ทำไมต้อง<span className="text-maroon-theme">เลือกเรา</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasonsData.map((reason) => {
            const Icon = iconMap[reason.icon];
            return (
              <div
                key={reason.title}
                className="group border-2 border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:border-maroon-theme hover:bg-maroon-theme"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center">
                  <Icon className="h-10 w-10 text-maroon-theme transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-3 text-2xl font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-white">
                  {reason.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
