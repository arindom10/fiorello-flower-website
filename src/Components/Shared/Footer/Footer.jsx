import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Customer Service Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 ml-24">Customer Service</h2>

          <div className="grid items-center justify-center">
            <Link className="mb-2 hover:text-gray-400">Contact Us</Link>
            <Link className="mb-2 hover:text-gray-400">FAQs</Link>
            <Link className="mb-2 hover:text-gray-400">
              Shipping Information
            </Link>
            <Link className="mb-2 hover:text-gray-400">
              Returns & Exchanges
            </Link>
            <Link className="mb-2 hover:text-gray-400">Track Order</Link>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 ml-28">Company</h2>
          <div className="grid items-center justify-center">
            <Link className="mb-2 hover:text-gray-400 ">About Us</Link>
            <Link className="mb-2 hover:text-gray-400">Careers</Link>
            <Link className="mb-2 hover:text-gray-400">Press</Link>
            <Link className="mb-2 hover:text-gray-400">Terms of Service</Link>
            <Link className="mb-2 hover:text-gray-400">Privacy Policy</Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 ml-36">Social Media</h2>
          <div className="grid items-center justify-center">
            <Link className="mb-2 hover:text-gray-400">Facebook</Link>
            <Link className="mb-2 hover:text-gray-400">Twitter</Link>
            <Link className="mb-2 hover:text-gray-400">Instagram</Link>
            <Link className="mb-2 hover:text-gray-400">LinkedIn</Link>
            <Link className="mb-2 hover:text-gray-400">YouTube</Link>
          </div>
        </div>

        {/* Archive Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 ml-36">Archive</h2>
          <div className="grid items-center justify-center">
            <Link className="mb-2 hover:text-gray-400">2024</Link>
            <Link className="mb-2 hover:text-gray-400">2023</Link>
            <Link className="mb-2 hover:text-gray-400">2022</Link>
            <Link className="mb-2 hover:text-gray-400">2021</Link>
            <Link className="mb-2 hover:text-gray-400">2020</Link>
            <Link className="mb-2 hover:text-gray-400">2019</Link>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <span>@AllCopyRights2024 By Circle INC</span>
      </div>
    </footer>
  );
};

export default Footer;
