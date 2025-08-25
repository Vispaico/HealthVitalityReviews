import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
            {product.price}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
        </div>
        
        <p className="text-gray-600 mb-4">{product.snippet}</p>
        
        <div className="bg-blue-50 p-3 rounded-lg">
          <span className="text-sm font-semibold text-blue-800">✓ {product.benefit}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700"
          onClick={() => window.location.href = `/${product.id}`}
        >
          Read My Full Review
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;