import { reviews } from "@/data/categories";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
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
