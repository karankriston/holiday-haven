import { reviews } from "@/data/categories";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            What Our <span className="text-gradient-primary">Travelers Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from happy travelers who explored India with us
          </p>
        </div>

        {/* Mobile: Single Card with External Navigation */}
        {isMobile ? (
          <div className="flex flex-col items-center gap-6">
            {/* Review Card */}
            <div className="bg-card rounded-2xl p-6 shadow-xl border border-border w-full max-w-sm mx-auto">
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-golden text-golden" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-card-foreground mb-6 leading-relaxed text-base min-h-[80px]">
                "{currentReview.comment}"
              </p>

              {/* Trip badge */}
              <div className="mb-5">
                <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  {currentReview.trip}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-border">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {currentReview.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground text-lg">{currentReview.name}</h4>
                  <p className="text-muted-foreground">{currentReview.location}</p>
                </div>
              </div>
            </div>

            {/* External Navigation Buttons */}
            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-background shadow-md border-2 border-primary/20 hover:border-primary hover:bg-primary/5"
                onClick={prevReview}
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </Button>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-primary w-6" 
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-background shadow-md border-2 border-primary/20 hover:border-primary hover:bg-primary/5"
                onClick={nextReview}
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </Button>
            </div>
          </div>
        ) : (
          /* Desktop: Multi-card Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
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
                <p className="text-card-foreground mb-6 leading-relaxed">
                  "{review.comment}"
                </p>

                {/* Trip badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium">
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
        )}

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
