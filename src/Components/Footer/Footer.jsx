import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-300 text-gray-700 pt-10 pb-6 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & Description */}
                <div>
                    <h2 className="text-2xl font-bold text-green-700">FlowerLand</h2>
                    <p className="mt-2 text-sm">
                        Discover the beauty of nature with our hand-picked flowers for every occasion. Fresh, vibrant & delivered with love.
                    </p>
                    <div className="flex gap-3 mt-4 text-green-700">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaPinterestP /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Bouquets</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Customer Service</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Shipping & Delivery</a></li>
                        <li><a href="#">Returns & Refunds</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
                    <p className="text-sm mb-3">Subscribe to get updates on new arrivals & special offers.</p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="px-3 py-2 rounded border border-gray-300 w-full"
                        />
                        <button className="bg-green-600 text-white px-4 py-2 rounded">Subscribe</button>
                    </form>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} FlowerLand. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
