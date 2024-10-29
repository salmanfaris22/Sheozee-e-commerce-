import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-2">ShoeShop</h2>
          <p className="text-gray-600">Your one-stop shop for the best footwear.</p>
        </div>
        <div className="flex flex-col md:flex-row mb-6 md:mb-0">
          <div className="md:mr-8">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-700">Home</a></li>
              <li><a href="/products" className="hover:text-gray-700">Products</a></li>
              <li><a href="/about" className="hover:text-gray-700">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-700">Contact</a></li>
            </ul>
          </div>
          <div className="md:mr-8">
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/returns" className="hover:text-gray-700">Returns & Exchanges</a></li>
              <li><a href="/shipping" className="hover:text-gray-700">Shipping Info</a></li>
              <li><a href="/faq" className="hover:text-gray-700">FAQ</a></li>
              <li><a href="/support" className="hover:text-gray-700">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" aria-label="Facebook" className="text-gray-600 hover:text-black">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="text-gray-600 hover:text-black">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="text-gray-600 hover:text-black">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-600 hover:text-black">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="bg-gray-200 py-4 text-center text-gray-600 mt-2">
        <p>&copy; 2024 ShoeShop. All rights reserved with Salman.</p>
      </div>
    </footer>
  );
};

export default Footer;
