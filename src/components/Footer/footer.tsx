import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D1E3F] text-white py-10 px-4 text-center">
      <div className="flex flex-col items-center gap-6">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="border border-cyan-400 rounded-md px-2 py-1 text-white font-bold">
              TOTC
            </div>
            <div className="text-left leading-tight text-sm">
              <div>Virtual Class</div>
              <div>for Zoom</div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <p className="text-gray-300 mb-4">Subscribe to get our Newsletter</p>
          <form className="flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-full px-4 py-2 w-64 outline-none bg-[#1D1E3F] border border-gray-400 text-sm text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="rounded-full bg-cyan-400 text-white px-6 py-2 font-medium shadow-lg hover:bg-cyan-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="text-sm text-gray-400 flex flex-wrap justify-center gap-4 mt-6">
          <a href="#">Careers</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms & Conditions</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-2">
          © 2021 Class Technologies Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
