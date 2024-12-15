/* eslint-disable @next/next/no-img-element */
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButtons";
import { carAtom } from "@/jotai/carAtom";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useAtomValue } from "jotai";
import React, { useCallback } from "react";

const CarHighlights = () => {
  const car = useAtomValue(carAtom);
  const slides = (car?.images || []).map((image) => image.path);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);
  return (
    <div className="container-md-mx grid gap-4 md:grid-cols-4">
      <h3 className="font-[family-name:var(--font-harkshock)] text-4xl font-bold">
        Carousel
      </h3>
      <div className="relative col-span-3 overflow-hidden rounded">
        <div className="embla__button">
          <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((slide, index) => (
              <img
                src={`${window.location.origin}/${slide}`}
                alt=""
                key={index}
                className="mx-1 h-64 w-full rounded object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarHighlights;