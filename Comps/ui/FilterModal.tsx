import React from "react";
import { X } from "lucide-react";
import { Button } from "./button";
import Sidebar from "../Sidebar";
import VehicleSidebar from "../VehicleSidebar";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Array<{ name: string; count: number; active: boolean }>;
  type?: "property" | "vehicle";
}

export default function FilterModal({ isOpen, onClose, categories, type = "property" }: FilterModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="lg:hidden fixed inset-0 z-[9999] bg-black bg-opacity-50" onClick={onClose} />

      {/* Modal Content */}
      <div className="lg:hidden fixed inset-0 z-[10000] bg-white flex flex-col">
        {/* Header do modal */}
        <div className="flex items-center justify-between p-4 border-b border-[#04040514] flex-shrink-0">
          <h2 className="text-lg font-semibold font-montserrat text-[#040405]">Filtros</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="w-8 h-8 p-0"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Conteúdo do modal - usa o Sidebar apropriado */}
        <div className="flex-1 overflow-hidden">
          {type === "vehicle" ? (
            <VehicleSidebar
              categories={categories}
              isMobile={true}
              onApplyFilters={onClose}
            />
          ) : (
            <Sidebar
              categories={categories}
              isMobile={true}
              onApplyFilters={onClose}
            />
          )}
        </div>
      </div>
    </>
  );
}
