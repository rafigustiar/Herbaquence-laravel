import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { useCart } from "@/components/CartProvider";

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showAddToCart = true,
}) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[0];
    addItem(product, defaultSize.size, defaultSize.price);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const defaultSizePrice = product.sizes[0];
  const discountPercentage = Math.round(
    ((defaultSizePrice.originalPrice - defaultSizePrice.price) /
      defaultSizePrice.originalPrice) *
      100,
  );

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 border-gray-100">
        <CardContent className="p-4">
          {/* Product Image */}
          <div className="relative mb-6 rounded-lg bg-gray-50 h-[40rem] flex items-center justify-center p-16">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            {discountPercentage > 0 && (
              <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-500">
                -{discountPercentage}%
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-700">
                {product.rating}
              </span>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="font-bold text-primary">
                {formatPrice(defaultSizePrice.price)}
              </span>
              {defaultSizePrice.originalPrice > defaultSizePrice.price && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(defaultSizePrice.originalPrice)}
                </span>
              )}
            </div>

            {/* Sizes */}
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((sizePrice) => (
                <Badge
                  key={sizePrice.size}
                  variant="outline"
                  className="text-xs"
                >
                  {sizePrice.size}
                </Badge>
              ))}
            </div>

            {/* Add to Cart Button */}
            {showAddToCart && (
              <Button
                onClick={handleAddToCart}
                className="w-full mt-3 bg-primary hover:bg-primary/90"
                size="sm"
              >
                Add to Cart
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
