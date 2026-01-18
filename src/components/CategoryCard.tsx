import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
  index: number;
  categoryImages: Record<string, string>;
}

const CategoryCard = ({ category, index, categoryImages }: CategoryCardProps) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="group card-travel block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={categoryImages[category.id]}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        {/* Icon badge */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
          {category.icon}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {category.description}
        </p>
        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-2 transition-all">
          <span>Explore Tours</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
