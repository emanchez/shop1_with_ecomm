'use client';
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import ProductImage from "@/components/ProductImage";

const Home = () => {
    const [realData, setRealData] = useState(products)
    const featuredProducts = realData.filter(product => product.featured);
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const res = await fetch('/api/mongo-get'); // Fixed path
                
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                
                const data = await res.json();
                setRealData(data);
            } catch (error) {
                console.error('Failed to fetch product data', error);
                // Fallback to local products if API fails
                setRealData(products);
            }
        };
        
        fetchProductData();
    }, []); 


    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-6">Welcome to BrandName</h1>
                    <p className="text-xl mb-12 max-w-2xl mx-auto">Discover our premium products and exclusive content designed just for you.</p>
                    <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                        Shop Now
                    </button>
                </div>
            </section>
            
            {/* Featured Products */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                                <div className="bg-gray-200 h-64 flex items-center justify-center">
                                    <ProductImage product={product} />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-gray-600 mt-2">{product.description}</p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                                        <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition duration-300">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Call to Action */}
            <section className="bg-indigo-700 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to elevate your experience?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Join our community and get access to exclusive content and offers.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                            Sign Up Now
                        </button>
                        <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-indigo-700 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default Home;