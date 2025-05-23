'use client';
import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import Image from 'next/image';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filteredProducts = activeCategory 
        ? products.filter(product => product.category === activeCategory)
        : products;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            
            {/* Shop Hero Section */}
            <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-6">Our Store</h1>
                    <p className="text-xl mb-6 max-w-2xl mx-auto">Discover our premium products and exclusive merchandise</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <button 
                            onClick={() => setActiveCategory(null)}
                            className={`px-6 py-2 rounded-full ${!activeCategory ? 'bg-white text-indigo-600' : 'bg-transparent border border-white text-white'} font-medium transition duration-300`}
                        >
                            All Items
                        </button>
                        <button 
                            onClick={() => setActiveCategory('clothing')}
                            className={`px-6 py-2 rounded-full ${activeCategory === 'clothing' ? 'bg-white text-indigo-600' : 'bg-transparent border border-white text-white'} font-medium transition duration-300`}
                        >
                            Clothing
                        </button>
                        <button 
                            onClick={() => setActiveCategory('accessories')}
                            className={`px-6 py-2 rounded-full ${activeCategory === 'accessories' ? 'bg-white text-indigo-600' : 'bg-transparent border border-white text-white'} font-medium transition duration-300`}
                        >
                            Accessories
                        </button>
                        <button 
                            onClick={() => setActiveCategory('merchandise')}
                            className={`px-6 py-2 rounded-full ${activeCategory === 'merchandise' ? 'bg-white text-indigo-600' : 'bg-transparent border border-white text-white'} font-medium transition duration-300`}
                        >
                            Merchandise
                        </button>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {activeCategory ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}` : 'All Products'} 
                            <span className="text-gray-500 ml-2 text-lg">({filteredProducts.length})</span>
                        </h2>
                        <div className="flex items-center">
                            <span className="text-gray-600 mr-2">Sort by:</span>
                            <select className="bg-white border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option>Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No products found in this category.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                                    <div className="bg-gray-200 h-64 flex items-center justify-center">
                                        <div className="relative h-64 w-full">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                placeholder="blur"
                                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlZWVlIi8+PHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1zaXplPSIxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSI+UHJvZHVjdCBJbWFnZTwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSI+ezpwcm9kdWN0Lm5hbWV9PC90ZXh0Pjwvc3ZnPg=="
                                            />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                            <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                                        </div>
                                        <p className="text-gray-600 mt-2">{product.description}</p>
                                        <div className="mt-4 flex justify-between items-center">
                                            <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition duration-300">
                                                View Details
                                            </button>
                                            <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition duration-300">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="mt-12 flex justify-center">
                        <nav className="flex items-center space-x-2">
                            <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                                Previous
                            </button>
                            <button className="px-3 py-1 rounded bg-indigo-600 text-white">
                                1
                            </button>
                            <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
                                2
                            </button>
                            <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
                                3
                            </button>
                            <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
                                Next
                            </button>
                        </nav>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Shop;