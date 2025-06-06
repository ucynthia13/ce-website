import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { services } from "./serviceData";

const ServiceCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = container.offsetWidth * 0.7;
    let scrollPos = 0;

    const scroll = () => {
      if (!container) return;

      scrollPos += scrollStep;

      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
        container.scrollLeft = 0;
      }

      container.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    };

    const interval = setInterval(scroll, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full px-4 sm:px-6">
      <div
        ref={scrollRef}
        className="hide-scrollbar flex w-full max-w-7xl gap-6 overflow-x-auto pb-6 lg:mx-auto"
        style={{
          scrollBehavior: "smooth",
          touchAction: "pan-y",
          whiteSpace: "nowrap",
        }}
      >
        {[...services].map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="shadow-m flex min-w-[280px] shrink-0 snap-start flex-col justify-between rounded-xl bg-gradient-to-b from-neutral-100 via-white to-neutral-100 px-6 py-6 text-white shadow-sm sm:min-w-[320px] lg:min-w-[320px]"
            >
              <div>
                <div className="mt-6 mb-10 flex items-center justify-center gap-2">
                  <Icon className="h-5 w-5 text-black stroke-2" />
                  <h3 className="font-semibold text-black">{service.title}</h3>
                </div>
                <ul className="space-y-6 text-sm text-black/90">
                  {service.items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex items-center gap-4">
                        <Icon className="h-5 w-5 stroke-2" />
                        <span>{item.desc}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-24">
                <button className="flex cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                  Explore More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
