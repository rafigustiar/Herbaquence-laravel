import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { products, packages } from "@/data/products";
import { useCart } from "@/components/CartProvider";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem } = useCart();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handlePackageAddToCart = (packageItem: (typeof packages)[0]) => {
    // Add the first product for package demo
    const product = products[0];
    const defaultSize = product.sizes[0];
    for (let i = 0; i < packageItem.bottles; i++) {
      addItem(product, defaultSize.size, defaultSize.price);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Elevate your lifestyle with our{" "}
              <span className="text-primary">
                refreshing, health-conscious drinks
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our premium collection of infused waters crafted with
              natural ingredients for a healthier you.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-20 h-12 text-lg border-gray-300 focus:border-primary"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90">
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.slice(0, 3).map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-[32rem] mb-4 flex items-center justify-center bg-gray-50 rounded-lg p-12">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-center">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Offer Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              The Fresh Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Pack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save more when you buy in bulk. Perfect for families, offices, or
              stocking up your favorite flavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              const savings = pkg.originalPrice - pkg.price;
              const discountPercentage = Math.round(
                (savings / pkg.originalPrice) * 100,
              );

              return (
                <Card
                  key={pkg.id}
                  className="border-2 hover:border-primary transition-colors"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-600">
                        {pkg.bottles} bottle{pkg.bottles > 1 ? "s" : ""}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-primary">
                        {formatPrice(pkg.price)}
                      </div>
                      {savings > 0 && (
                        <div className="space-y-1">
                          <div className="text-lg text-gray-500 line-through">
                            {formatPrice(pkg.originalPrice)}
                          </div>
                          <Badge className="bg-red-500 hover:bg-red-500">
                            Save {discountPercentage}%
                          </Badge>
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={() => handlePackageAddToCart(pkg)}
                      className="w-full bg-primary hover:bg-primary/90"
                      size="lg"
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover all our refreshing flavors, each crafted with care using
              the finest natural ingredients.
            </p>
          </div>

          {searchQuery && (
            <div className="mb-8">
              <p className="text-gray-600">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""} found for "
                {searchQuery}"
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found matching "{searchQuery}"
              </p>
              <Button
                onClick={() => setSearchQuery("")}
                variant="outline"
                className="mt-4"
              >
                Clear search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Hydration?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of customers who have made the switch to healthier,
            more refreshing drinks.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Shop Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
