const Footer = () => {
    return(
        <div>
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">BrandName</h3>
                            <p className="text-gray-400">Premium products and content for your lifestyle.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="/home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                                <li><a href="/shop" className="text-gray-400 hover:text-white transition duration-300">Store</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Media</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQs</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Shipping</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Returns</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                            <p className="text-gray-400 mb-4">Subscribe to get updates on new products and offers.</p>
                            <div className="flex">
                                <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800" />
                                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;