
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Home,
  Heart,
  Gavel,
  User,
  Shield,
  Calendar,
  LayoutDashboard,
  FileClock,
  MessagesSquare,
} from "lucide-react";
import { variants } from "./sidebarAnimations";
import { useAuth } from "@/hooks/useAuth";

interface NavigationMenuProps {
  isCollapsed: boolean;
}

export function NavigationMenu({ isCollapsed }: NavigationMenuProps) {
  const location = useLocation();
  const pathname = location.pathname;
  const { isAuthenticated, isAdmin } = useAuth();

  const mainNavItems = [
    { to: "/buscador/veiculos", icon: Car, label: "Veículos", pattern: "veiculos" },
    { to: "/buscador/imoveis", icon: Home, label: "Imóveis", pattern: "imoveis" },
    { to: "/leiloeiros", icon: Gavel, label: "Leiloeiros", pattern: "leiloeiros" },
    { to: "/agenda", icon: Calendar, label: "Agenda", pattern: "agenda" },
  ];

  const favoriteNavItems = [
    { to: "/favoritos/veiculos", icon: Heart, label: "Favoritos Veículos", pattern: "favoritos/veiculos" },
    { to: "/favoritos/imoveis", icon: Heart, label: "Favoritos Imóveis", pattern: "favoritos/imoveis" },
    { to: "/perfil", icon: User, label: "Perfil", pattern: "perfil" },
  ];

  const legacyNavItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard", pattern: "dashboard" },
    { to: "/reports", icon: FileClock, label: "Reports", pattern: "reports" },
    { to: "/chat", icon: MessagesSquare, label: "Chat", pattern: "chat", badge: "BETA" },
  ];

  const renderNavItem = (item: any) => (
    <Link
      key={item.to}
      to={item.to}
      className={cn(
        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
        pathname?.includes(item.pattern) && "bg-muted text-blue-600",
      )}
    >
      <item.icon className="h-4 w-4" />
      <motion.li variants={variants}>
        {!isCollapsed && (
          <div className="ml-2 flex items-center gap-2">
            <p className="text-sm font-medium">{item.label}</p>
            {item.badge && (
              <Badge
                className="flex h-fit w-fit items-center gap-1.5 rounded border-none bg-blue-50 px-1.5 text-blue-600 dark:bg-blue-700 dark:text-blue-300"
                variant="outline"
              >
                {item.badge}
              </Badge>
            )}
          </div>
        )}
      </motion.li>
    </Link>
  );

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex grow flex-col gap-4">
        <ScrollArea className="grow p-2">
          <div className={cn("flex w-full flex-col gap-1")}>
            {/* Navegação Principal */}
            {mainNavItems.map(renderNavItem)}

            {/* Seção Favoritos (apenas para usuários logados) */}
            {isAuthenticated && (
              <>
                <Separator className="w-full" />
                {favoriteNavItems.map(renderNavItem)}
              </>
            )}

            {/* Seção Admin (apenas para admins) */}
            {isAdmin() && (
              <>
                <Separator className="w-full" />
                <Link
                  to="/admin"
                  className={cn(
                    "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                    pathname?.includes("admin") && "bg-muted text-blue-600",
                  )}
                >
                  <Shield className="h-4 w-4" />
                  <motion.li variants={variants}>
                    {!isCollapsed && (
                      <p className="ml-2 text-sm font-medium">Admin</p>
                    )}
                  </motion.li>
                </Link>
              </>
            )}

            {/* Navegação Legacy */}
            <Separator className="w-full" />
            {legacyNavItems.map(renderNavItem)}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
