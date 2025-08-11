import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "./button";

interface FloatingFilterButtonProps {
  onClick: () => void;
}

export default function FloatingFilterButton({ onClick }: FloatingFilterButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="lg:hidden fixed bottom-24 right-6 w-12 h-12 rounded bg-white hover:bg-gray-50 text-[#040405] z-50 p-4"
      size="icon"
      style={{
        boxShadow: '0 10px 15px -1px rgba(0, 0, 0, 0.20), 0 4px 6px -2px rgba(0, 0, 0, 0.11)'
      }}
    >
      <SlidersHorizontal className="w-4 h-4" style={{ opacity: 0.8 }} />
    </Button>
  );
}
