
import React from "react";
import { Heart, X } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface FavoriteAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  onSignUp: () => void;
}

export const FavoriteAuthModal: React.FC<FavoriteAuthModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  onSignUp
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex justify-center mb-4">
            <Heart className="w-12 h-12 text-blue-600" />
          </div>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Salve seus favoritos
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            Para guardar leilões na sua lista, entre ou crie uma conta gratuita.
          </p>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-6">
          <Button onClick={onLogin} className="w-full">
            Entrar
          </Button>
          <Button onClick={onSignUp} variant="outline" className="w-full">
            Criar conta
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
