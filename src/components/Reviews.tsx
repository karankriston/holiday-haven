import { reviews } from "@/data/categories";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section id="reviews" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            What Our <span className="text-gradient-primary">Travelers Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Real experiences from happy travelers who explored India with us
          </p>
          
          {/* Mobile Navigation - Top */}
          <div className="flex md:hidden justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className={`w-10 h-10 rounded-full bg-background shadow-md border-2 border-primary/20 hover:border-primary ${
                canScrollLeft ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`w-10 h-10 rounded-full bg-background shadow-md border-2 border-primary/20 hover:border-primary ${
                canScrollRight ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </Button>
          </div>
        </div>

        {/* Reviews Carousel with External Controls */}
        <div className="flex items-center gap-4">
          {/* Left Arrow - Outside */}
          <Button
            variant="outline"
            size="icon"
            className={`hidden md:flex shrink-0 w-12 h-12 rounded-full bg-background shadow-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all ${
              canScrollLeft ? "opacity-100" : "opacity-30 pointer-events-none"
            }`}
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>

          {/* Scrollable Reviews */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex gap-4 md:gap-5 overflow-x-auto scroll-smooth flex-1 pb-4 snap-x snap-mandatory px-4 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-card rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border flex-shrink-0 w-[calc(100vw-3rem)] max-w-[320px] md:w-[350px] md:max-w-none snap-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-golden text-golden" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-card-foreground mb-6 leading-relaxed text-sm md:text-base min-h-[72px]">
                  "{review.comment}"
                </p>

                {/* Trip badge */}
                <div className="mb-5">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium">
                    {review.trip}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow - Outside */}
          <Button
            variant="outline"
            size="icon"
            className={`hidden md:flex shrink-0 w-12 h-12 rounded-full bg-background shadow-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all ${
              canScrollRight ? "opacity-100" : "opacity-30 pointer-events-none"
            }`}
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>


        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-60">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">4.9/5</div>
            <div className="text-sm text-muted-foreground">Google Rating</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">Reviews</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
