'use client'

import { useState } from "react";
import { Product } from "@/data/products";
import Image from "next/image";

const ProductImage = ({ product }: { product: Product }) => {
    const [error, setError] = useState(false);
  
    if (error) {
      return (
        <div className="h-64 w-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Image not available</span>
        </div>
      );
    }
  
    return (
      <div className="relative h-64 w-full">
        <Image 
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          onError={() => setError(true)}
        />
      </div>
    )
};

export default ProductImage
