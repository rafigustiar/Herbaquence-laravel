import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { products } from "@/data/products";
import { useCart } from "@/components/CartProvider";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();

  const product = products.find((p) => p.id === parseInt(id || ""));
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentOriginalPrice, setCurrentOriginalPrice] = useState(0);

  useEffect(() => {
    if (product?.sizes[0]?.size) {
      setSelectedSize(product.sizes[0].size);
      setCurrentPrice(product.sizes[0].price);
      setCurrentOriginalPrice(product.sizes[0].originalPrice);
    }
  }, [product]);

  useEffect(() => {
    if (product?.sizes && selectedSize) {
      const sizePrice = product.sizes.find((s) => s.size === selectedSize);
      if (sizePrice) {
        setCurrentPrice(sizePrice.price);
        setCurrentOriginalPrice(sizePrice.originalPrice);
      }
    }
  }, [selectedSize, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product not found
          </h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const discountPercentage = Math.round(
    ((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100,
  );
  const otherProducts = products.filter((p) => p.id !== product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, currentPrice);
    }
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative bg-gray-50 rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {discountPercentage > 0 && (
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-500 text-white">
                  -{discountPercentage}% OFF
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">
                  {product.rating}
                </span>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(currentPrice)}
                </span>
                {currentOriginalPrice > currentPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(currentOriginalPrice)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <Label className="text-base font-semibold text-gray-900">
                Choose Size
              </Label>
              <RadioGroup
                value={selectedSize}
                onValueChange={(value) => {
                  setSelectedSize(value);
                  // Immediately update price when size changes
                  const newSizePrice = product.sizes.find(
                    (s) => s.size === value,
                  );
                  if (newSizePrice) {
                    setCurrentPrice(newSizePrice.price);
                    setCurrentOriginalPrice(newSizePrice.originalPrice);
                  }
                }}
                className="flex flex-wrap gap-3"
              >
                {product.sizes.map((sizePrice) => (
                  <div
                    key={sizePrice.size}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value={sizePrice.size}
                      id={sizePrice.size}
                    />
                    <Label
                      htmlFor={sizePrice.size}
                      className="cursor-pointer border rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50"
                    >
                      {sizePrice.size} - {formatPrice(sizePrice.price)}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <Label className="text-base font-semibold text-gray-900">
                Quantity
              </Label>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-12 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                Add {quantity} to Cart - {formatPrice(currentPrice * quantity)}
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg">
                  Add to Wishlist
                </Button>
                <Button variant="outline" size="lg">
                  Share Product
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <Card className="border-green-100 bg-green-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Why Choose Herbaquence?
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ 100% Natural ingredients</li>
                  <li>✓ No artificial preservatives</li>
                  <li>✓ Rich in antioxidants</li>
                  <li>✓ Sustainably sourced</li>
                  <li>✓ Free shipping on orders over Rp 50,000</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {otherProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
