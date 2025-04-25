import Image from "next/image";
import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Left Section - Checkout Form */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-blue-400">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <p className="text-sm mb-2">Cart Type</p>
          <div className="flex gap-4 mb-6">
            <Image
              width={200}
              height={200}
              src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
              alt="Paypal"
              className="w-16 h-auto"
            />
            <Image
               width={200}
               height={200}
              src="https://img.icons8.com/color/48/000000/amex.png"
              alt="American Express"
              className="w-16 h-auto"
            />
            <Image
               width={200}
               height={200}
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
              className="w-16 h-auto"
            />
            <Image
               width={200}
               height={200}
              src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              alt="Mastercard"
              className="w-16 h-auto"
            />
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Name on Card
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter name on Card"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Card Number
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter Card Number"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Expiration Date (MM/YY)
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Enter Expiration Date"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">CVC</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Enter CVC"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="saveInfo"
                className="accent-blue-500"
              />
              <label htmlFor="saveInfo" className="text-sm">
                Save my information for faster checkout
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md transition-all"
            >
              Confirm Payment
            </button>
          </form>
        </div>

        {/* Right Section - Summary */}
        <div className="w-full md:w-80 bg-blue-50 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>
          <div className="space-y-4 mb-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-4">
                <Image
                   width={200}
                   height={200}
                  src="https://via.placeholder.com/60"
                  alt="item"
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="text-sm">
                  <p className="font-medium">
                    adipiscing elit, sed do eiusmod tempor
                  </p>
                  <p className="text-gray-500">Lorem ipsum dollar...</p>
                  <p className="font-semibold mt-1">$24.69</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$51.38</span>
            </div>
            <div className="flex justify-between">
              <span>Coupon Discount</span>
              <span>0%</span>
            </div>
            <div className="flex justify-between">
              <span>TAX</span>
              <span>5</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>$56.38</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
