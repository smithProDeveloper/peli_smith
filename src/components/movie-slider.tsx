import useEmblaCarousel from 'embla-carousel-react';
import type { Movie } from '../models/peli-smith-model';
import MovieCard from './movie-card';
import { useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Props {
    items: Movie[];
}

export default function MovieSlider({ items }: Props) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <div className="relative w-full mt-2 mb-10">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {items.map((item, index) => (
                        <div
                            className="flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_20%] pr-4"
                            key={index}
                        >
                            <MovieCard item={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Botones navegación */}
            <button
                onClick={scrollPrev}
                className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white
                    p-2 z-10 h-full rounded-r-xl items-center justify-center"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={scrollNext}
                className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white
                    p-2 z-10 h-full rounded-l-xl items-center justify-center"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}
