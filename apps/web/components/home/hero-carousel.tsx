
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/home-data";
import { cn } from "@/lib/utils";
import { Button } from "@workspace/ui/components/button";

const AUTO_SLIDE_DELAY = 5000;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length);
  }, []);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  }, []);

  const goToPreviousSlide = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1,
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(goToNextSlide, AUTO_SLIDE_DELAY);
    return () => window.clearInterval(interval);
  }, [goToNextSlide, isPaused]);

  function handleTouchStart(event: React.TouchEvent<HTMLElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLElement>) {
    if (touchStartX.current === null) return;
    const deltaX = touchStartX.current - (event.changedTouches[0]?.clientX ?? 0);
    touchStartX.current = null;

    if (Math.abs(deltaX) < 40) return;
    if (deltaX > 0) {
      goToNextSlide();
      return;
    }
    goToPreviousSlide();
  }

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-slate-900"
      aria-label="Featured municipal updates"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-Width Slider Container */}
      <div className="relative h-[380px] w-full sm:h-[480px] md:h-[540px] lg:h-[580px]">
        {heroSlides.map((slide, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={slide.title}
              className={cn(
                "absolute inset-0 h-full w-full transition-opacity duration-300 ease-out",
                isActive
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              )}
              aria-hidden={!isActive}
            >
              {/* Full Banner Background Image - Optimized for Speed */}
              {slide.image && (
                <Image
                src={slide.image}
                alt={slide.title}
                fill
                unoptimized={true}
                sizes="100vw"
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
                className="object-cover object-center"
                />
              )}

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />

              {/* Content Overlay */}
              <div className="civic-container relative z-10 flex h-full flex-col justify-end pb-20 pt-12 md:justify-center md:pb-16">
                <div className="max-w-2xl text-white">
                  <div className="mb-3 inline-flex items-center rounded bg-amber-600/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-sm">
                    {slide.eyebrow}
                  </div>

                  <h1 className="text-2xl font-extrabold tracking-tight drop-shadow-md sm:text-4xl md:text-5xl lg:text-4xl">
                    {slide.title}
                  </h1>

                  <p className="mt-3 line-clamp-3 max-w-xl text-sm text-slate-200 drop-shadow sm:text-base md:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {slide.buttons.map((button) => (
                      <Button
                        asChild
                        key={button.label}
                        size="default"
                        variant={button.variant}
                        className={cn(
                          button.variant === "default" &&
                            "bg-amber-600 hover:bg-amber-700 text-white border-none",
                          button.variant === "outline" &&
                            "bg-white/10 hover:bg-white/20 text-white border-white/50 backdrop-blur-sm"
                        )}
                      >
                        <Link href={button.href}>{button.label}</Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Caption Bar */}
              <div className="absolute bottom-0 inset-x-0 z-20 bg-amber-800/90 py-2.5 text-center text-sm font-semibold text-white shadow-md backdrop-blur-md">
                <span className="tracking-wide uppercase">{slide.eyebrow}</span> - {slide.title}
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={goToPreviousSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 p-2.5 text-white shadow-lg transition hover:bg-amber-600 sm:left-5"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={goToNextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 p-2.5 text-white shadow-lg transition hover:bg-amber-600 sm:right-5"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                activeIndex === index
                  ? "w-8 bg-amber-500"
                  : "w-2.5 bg-white/60 hover:bg-white"
              )}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
