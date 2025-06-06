
import { useState, useCallback } from "react";
import { useAuth } from "./useAuth";
import { useIsMobile } from "./use-mobile";
import { useFavoritesStore } from "../stores/favoritesStore";
import { showSuccess } from "../components/ui/NotificationToast";

interface PendingFavoriteAction {
  itemId: string;
  itemType: 'property' | 'vehicle';
  title: string;
  price: string;
  image?: string;
}

export const useFavoriteAuth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<PendingFavoriteAction | null>(null);
  const { isAuthenticated } = useAuth();
  const isMobile = useIsMobile();
  const { addFavorite } = useFavoritesStore();

  const handleFavoriteClick = useCallback((item: PendingFavoriteAction) => {
    if (isAuthenticated) {
      // Usuário logado - executar ação diretamente
      const favoriteItem = {
        itemId: item.itemId,
        itemType: item.itemType,
        type: item.itemType,
        title: item.title,
        image: item.image || '',
        price: parseFloat(item.price.replace(/[^\d,]/g, '').replace(',', '.')),
        location: '',
        endDate: new Date().toISOString(),
        href: '#'
      };
      addFavorite(favoriteItem);
      showSuccess("Adicionado aos favoritos", item.title);
      return;
    }

    // Usuário não logado
    setPendingAction(item);
    
    if (isMobile) {
      // Mobile: redirecionar para login
      const redirectData = encodeURIComponent(JSON.stringify({
        action: 'favorite',
        item: item,
        returnUrl: window.location.pathname
      }));
      window.location.href = `/auth/login?redirectBackTo=${redirectData}`;
    } else {
      // Desktop: abrir modal
      setIsModalOpen(true);
    }
  }, [isAuthenticated, isMobile, addFavorite]);

  const handleLogin = useCallback(() => {
    if (pendingAction) {
      const redirectData = encodeURIComponent(JSON.stringify({
        action: 'favorite',
        item: pendingAction,
        returnUrl: window.location.pathname
      }));
      window.location.href = `/auth/login?redirectBackTo=${redirectData}`;
    } else {
      window.location.href = '/auth/login';
    }
  }, [pendingAction]);

  const handleSignUp = useCallback(() => {
    if (pendingAction) {
      const redirectData = encodeURIComponent(JSON.stringify({
        action: 'favorite',
        item: pendingAction,
        returnUrl: window.location.pathname
      }));
      window.location.href = `/auth/sign-up?redirectBackTo=${redirectData}`;
    } else {
      window.location.href = '/auth/sign-up';
    }
  }, [pendingAction]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setPendingAction(null);
  }, []);

  // Executar ação pendente após login
  const executePendingAction = useCallback(() => {
    if (pendingAction && isAuthenticated) {
      const favoriteItem = {
        itemId: pendingAction.itemId,
        itemType: pendingAction.itemType,
        type: pendingAction.itemType,
        title: pendingAction.title,
        image: pendingAction.image || '',
        price: parseFloat(pendingAction.price.replace(/[^\d,]/g, '').replace(',', '.')),
        location: '',
        endDate: new Date().toISOString(),
        href: '#'
      };
      addFavorite(favoriteItem);
      showSuccess("Adicionado aos favoritos", pendingAction.title);
      setPendingAction(null);
    }
  }, [pendingAction, isAuthenticated, addFavorite]);

  return {
    isModalOpen,
    handleFavoriteClick,
    handleLogin,
    handleSignUp,
    closeModal,
    executePendingAction
  };
};
