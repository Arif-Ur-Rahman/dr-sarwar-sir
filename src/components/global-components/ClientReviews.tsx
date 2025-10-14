// components/ClientReviewsSection.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

const ClientReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      ratingIcon: "/icons/quoticon.svg",
      stars: "★★★★★",
      quote:
        "DeshIT-BD brings the kind of speed and adaptability every startup dreams of. They understand how to balance rapid execution with long-term scalability, which is rare in a tech partner. From idea to implementation, their team has been reliable, resourceful, and deeply committed to our success. DeshIT-BD isn't just a development team—they're an extension of our startup.",
      author: "Woody Klemetson",
      position: "Founder and CEO at AskElephant",
      profileImage: "/profiles/Woody.png",
    },
    {
      ratingIcon: "/icons/quoticon.svg",
      stars: "★★★★★",
      quote:
        "Working with DeshIT-BD has been transformative for our organization. Their team doesn't just deliver technology—they understand our vision and help bring it to life with precision and care. What sets them apart is their dedication, professionalism, and ability to translate complex ideas into solutions that truly make a difference. DeshIT-BD is a partner you can trust to elevate your projects from concept to success.",
      author: "Stacy Duty",
      position: "Founder at The WeightPay Group",
      profileImage: "/profiles/Stacy.png",
    },
    {
      ratingIcon: "/icons/quoticon.svg",
      stars: "★★★★★",
      quote:
        "Collaborating with DeshIT-BD has been an inspiring experience. Their team combines technical excellence with a creative approach that brings ideas to life in ways I didn't imagine possible. They are more than developers—they are true partners who listen, innovate, and deliver with precision. For anyone seeking a team that can turn vision into reality, DeshIT-BD is unmatched.",
      author: "Lauren Messemer",
      position: "Founder & Lead Developer at Mesmerize Software Studio",
      profileImage: "/profiles/Lauren.png",
    },
    {
      ratingIcon: "/icons/quoticon.svg",
      stars: "★★★★★",
      quote:
        "The technical expertise and attention to detail demonstrated by DeshIT-BD is exceptional. They delivered our project ahead of schedule while maintaining the highest quality standards. Their communication was clear, and they provided valuable insights that improved our product significantly.",
      author: "Michael Chen",
      position: "CTO at TechInnovate Solutions",
      profileImage: "/profiles/Woody.png", // Placeholder - replace with actual image
    },
    {
      ratingIcon: "/icons/quoticon.svg",
      stars: "★★★★★",
      quote:
        "DeshIT-BD transformed our legacy system into a modern, scalable platform with minimal downtime. Their team handled the migration seamlessly. The results have been outstanding - faster performance, better user experience, and reduced maintenance costs.",
      author: "Sarah Johnson",
      position: "Product Director at Global Finance Corp",
      profileImage: "/profiles/Stacy.png", // Placeholder - replace with actual image
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % reviews.length;
      visibleReviews.push(reviews[index]);
    }
    return visibleReviews;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section className="w-full py-20 sm:px-6 lg:px-8 backdrop-blur-[35px]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 gap-3">
          <div className="flex items-center gap-4">
            <Image
              src="/icons/Frame.png"
              alt="Icon"
              width={46}
              height={46}
              className="object-contain"
            />
            <h1 className="text-[28px] font-semibold text-white font-roboto">
              Client Reviews
            </h1>
          </div>
        </div>

        {/* Reviews Grid - 3 cards as shown in image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#4C4C4C3B] rounded-3xl p-8 border-[0.8px] border-[#FFFFFF2B] hover:border-[#B94A5B] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Rating and Stars - Left Aligned */}
              <div className="mb-6">
                {/* Rating Icon */}
                <div className="mb-2">
                  <Image
                    src={review.ratingIcon}
                    alt="Rating"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                {/* Stars */}
                <div className="text-red-500 text-[22px] font-bold tracking-widest">
                  {review.stars}
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6 flex-grow">
                <p className="text-[#FFFFFFCC] font-arial text-[13px] font-normal leading-[22.75px] tracking-normal">
                  {review.quote}
                </p>
              </div>

              {/* Author with Profile Image - Always at bottom */}
              <div className="flex items-center gap-4 pt-6 mt-auto">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={review.profileImage}
                    alt={review.author}
                    width={44}
                    height={44}
                    className="rounded-full object-cover border-2 border-[#B94A5B]"
                  />
                </div>

                {/* Author Info */}
                <div className="text-left">
                  <p className="text-white font-semibold text-lg mb-1">
                    {review.author}
                  </p>
                  <p className="text-gray-400 text-sm">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex flex-col items-center gap-6">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gradient-to-b from-[#F94A5B] to-[#6A4FFF] flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
            >
              <Image
                src="/icons/leftarrow.svg" // Path to your left arrow icon
                alt="Previous"
                width={16}
                height={16}
                className="object-contain"
              />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gradient-to-b from-[#F94A5B] to-[#6A4FFF] flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
            >
              <Image
                src="/icons/rightarrow.svg" // Path to your right arrow icon
                alt="Next"
                width={16}
                height={16}
                className="object-contain"
              />
            </button>
          </div>

          {/* Circular Dots Indicator - Below Navigation Buttons */}
          <div className="flex items-center gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-8 h-2 bg-gradient-to-r from-[#B94A5B] to-[#6A4FFF]"
                    : "w-2 h-2 bg-gray-500 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;