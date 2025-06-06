
import React from "react";
import { cardTokens } from "../../styles/card-tokens";

interface BaseItemHeaderProps {
  title: string;
  location: string;
  href?: string;
  className?: string;
}

export const BaseItemHeader = ({
  title,
  location,
  href,
  className = ""
}: BaseItemHeaderProps) => {
  return (
    <div className={className}>
      <h3 className={`${cardTokens.text.title} text-gray-900 leading-tight font-urbanist mb-1 truncate`}>
        {title}
      </h3>
      <div className="flex items-center gap-2 text-gray-500 mt-1">
        <span className={`${cardTokens.text.body} truncate`}>{location}</span>
      </div>
    </div>
  );
};
