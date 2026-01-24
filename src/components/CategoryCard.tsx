import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
  index: number;
  categoryImages: Record<string, string>;
}

const getCTAText = (categoryId: string): string => {
  switch (categoryId) {
    case "ooty-cabs-pick-up-drop":
      return "Book Now";
    case "ooty-toy-train-ride":
      return "Ride Now";
    case "hotels":
      return "Book Now";
    default:
      return "Explore Tours";
  }
};

const CategoryCard = ({ category, index, categoryImages }: CategoryCardProps) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="group card-travel block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-52 sm:h-56 md:h-60 lg:h-72 overflow-hidden">
        <img
          src={categoryImages[category.id]}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        {/* Icon badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl sm:text-2xl">
          {category.icon}
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-5 lg:p-6">
        <h3 className="text-lg sm:text-lg md:text-lg lg:text-xl font-serif font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {category.name}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-sm md:text-sm mb-3 sm:mb-4 line-clamp-2 h-[2.75rem] sm:h-[2.5rem]">
          {category.description}
        </p>
        <div className="flex items-center text-primary font-medium text-sm sm:text-sm group-hover:gap-3 gap-2 transition-all">
          <span>{getCTAText(category.id)}</span>
          <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
