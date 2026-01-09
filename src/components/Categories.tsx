import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";

interface CategoriesProps {
  categoryImages: Record<string, string>;
}

const Categories = ({ categoryImages }: CategoriesProps) => {
  return (
    <section id="categories" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Popular Destinations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Explore by <span className="text-gradient-primary">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of travel experiences, each crafted to give you the perfect vacation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} categoryImages={categoryImages} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
