import React from "react";

interface HeroCardProps {
  img: string;
  title: string;
  description: string;
  href: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ img, title, description, href }) => {
  return (
    <a href={href} className="block group no-underline">
      <div className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-6 h-full">
        <img
          src={img}
          alt={title}
          className="h-16 w-16 mb-4 object-contain"
        />
        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-sm text-gray-600 flex-grow">{description}</p>
        <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
          Learn more →
        </span>
      </div>
    </a>
  );
};

export default HeroCard;
