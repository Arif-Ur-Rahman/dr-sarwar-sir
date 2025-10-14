// components/Connect.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full bg-black py-10 sm:px-6 lg:px-8 backdrop-blur-[35px]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-[90px] font-bold leading-[100%] text-[#EDE5DB] mb-6 font-roboto">
            LET&apos;S CONNECT
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-4 border-2 border-[#332A0D] bg-[#212025]"
            >
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[41px] bg-[#4C4C4C3B] rounded-[18px] px-4 py-3 text-[white] placeholder-[#8B8989] focus:outline-none focus:border-[#ffffff] transition-colors duration-300"
                  placeholder="Name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[41px] bg-[#4C4C4C3B] rounded-[18px] px-4 py-3 text-[white] placeholder-[#8B8989] focus:outline-none transition-colors duration-300"
                  placeholder="Email"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-[41px] bg-[#4C4C4C3B] rounded-[18px] px-4 py-3 text-[white] placeholder-[#8B8989] focus:outline-none transition-colors duration-300"
                  placeholder="Phone"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#4C4C4C3B] rounded-[7px] px-4 py-3 text-white placeholder-[#8B8989] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Please type your message..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-b from-[#F94A5B] to-[#6A4FFF] text-white font-normal text-[10.8px] py-3 px-6 rounded-2xl hover:opacity-90 transition-opacity duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Information Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[30.7px] font-bold text-[#DAD4CD] mb-8 font-roboto text-center">
              Contact us
              <div className="w-65 h-1 bg-[#D9D9D9B2] mx-auto mt-2"></div>
            </h2>

            {/* Description */}
            <div className="mb-8">
              <p className="text-[#8F8D8D] text-[15.9px] font-normal leading-relaxed font-inter">
                Are you looking for a dedicated Full Stack Developer to bring
                your vision to life? I specialize in delivering end-to-end
                solutions, from robust back-end architecture to engaging user
                interfaces. Let&apos;s discuss how I can leverage my expertise
                to help you build your next great application.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src="/icons/email.png" // Path to your email icon
                    alt="Email"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  <h3 className="text-[#B9B5B1] font-bold text-[11.7px]">
                    CONTACT@COMPANY.COM
                  </h3>
                </div>
                <Image
                  src="/icons/base.png" // Path to your "Email address" image
                  alt="Email address"
                  width={260} // Adjust based on your image size
                  height={6}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src="/icons/phone.png" // Path to your email icon
                    alt="Email"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  <h3 className="text-[#ADA9A6] font-normal text-[11.7px]">
                    (123)456-789
                  </h3>
                </div>
                <Image
                  src="/icons/base.png" // Path to your "Email address" image
                  alt="Email address"
                  width={260} // Adjust based on your image size
                  height={6}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src="/icons/location.png" // Path to your email icon
                    alt="Email"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  <h3 className="text-[#ADA9A5] font-bold text-[11.6px] leading-[18.35px] tracking-normal">
                    794 MCALLISTER ST, ROAD-1256, <br />
                    SAN FRANCISGO,84102
                  </h3>
                </div>
                </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
