
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  FileClock,
  MessagesSquare,
  Layout,
  UserCircle,
  UserSearch,
  GraduationCap,
  MessageSquareText,
  Car,
  Home,
  Heart,
  Gavel,
  User,
  Shield,
} from "lucide-react";
import { variants } from "./sidebarAnimations";
import { useAuth } from "../../hooks/useAuth";

interface NavigationMenuProps {
  isCollapsed: boolean;
}

export function NavigationMenu({ isCollapsed }: NavigationMenuProps) {
  const location = useLocation();
  const pathname = location.pathname;
  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex grow flex-col gap-4">
        <ScrollArea className="grow p-2">
          <div className={cn("flex w-full flex-col gap-1")}>
            {/* Navegação Principal */}
            <Link
              to="/buscador/veiculos"
              className={cn(
                "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("veiculos") && "bg-muted text-blue-600",
              )}
            >
              <Car className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <p className="ml-2 text-sm font-medium">Veículos</p>
                )}
              </motion.li>
            </Link>

            <Link
              to="/buscador/imoveis"
              className={cn(
                "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("imoveis") && "bg-muted text-blue-600",
              )}
            >
              <Home className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <p className="ml-2 text-sm font-medium">Imóveis</p>
                )}
              </motion.li>
            </Link>

            <Link
              to="/leiloeiros"
              className={cn(
                "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("leiloeiros") && "bg-muted text-blue-600",
              )}
            >
              <Gavel className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <p className="ml-2 text-sm font-medium">Leiloeiros</p>
                )}
              </motion.li>
            </Link>

            {/* Seção Favoritos (apenas para usuários logados) */}
            {isAuthenticated && (
              <>
                <Separator className="w-full" />
                <Link
                  to="/favoritos/veiculos"
                  className={cn(
                    "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                    pathname?.includes("favoritos/veiculos") && "bg-muted text-blue-600",
                  )}
                >
                  <Heart className="h-4 w-4" />
                  <motion.li variants={variants}>
                    {!isCollapsed && (
                      <p className="ml-2 text-sm font-medium">Favoritos Veículos</p>
                    )}
                  </motion.li>
                </Link>

                <Link
                  to="/favoritos/imoveis"
                  className={cn(
                    "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                    pathname?.includes("favoritos/imoveis") && "bg-muted text-blue-600",
                  )}
                >
                  <Heart className="h-4 w-4" />
                  <motion.li variants={variants}>
                    {!isCollapsed && (
                      <p className="ml-2 text-sm font-medium">Favoritos Imóveis</p>
                    )}
                  </motion.li>
                </Link>

                <Link
                  to="/perfil"
                  className={cn(
                    "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                    pathname?.includes("perfil") && "bg-muted text-blue-600",
                  )}
                >
                  <User className="h-4 w-4" />
                  <motion.li variants={variants}>
                    {!isCollapsed && (
                      <p className="ml-2 text-sm font-medium">Perfil</p>
                    )}
                  </motion.li>
                </Link>
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

            {/* Manter navegação antiga para compatibilidade */}
            <Separator className="w-full" />
            <Link
              to="/dashboard"
              className={cn(
                "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("dashboard") &&
                  "bg-muted text-blue-600",
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <p className="ml-2 text-sm font-medium">Dashboard</p>
                )}
              </motion.li>
            </Link>
            <Link
              to="/reports"
              className={cn(
                "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("reports") &&
                  "bg-muted text-blue-600",
              )}
            >
              <FileClock className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <div className="flex items-center gap-2">
                    <p className="ml-2 text-sm font-medium">Reports</p>
                  </div>
                )}
              </motion.li>
            </Link>
            <Link
              to="/chat"
              className={cn(
                "flex h-8 flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("chat") && "bg-muted text-blue-600",
              )}
            >
              <MessagesSquare className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <div className="ml-2 flex items-center gap-2">
                    <p className="text-sm font-medium">Chat</p>
                    <Badge
                      className={cn(
                        "flex h-fit w-fit items-center gap-1.5 rounded border-none bg-blue-50 px-1.5 text-blue-600 dark:bg-blue-700 dark:text-blue-300",
                      )}
                      variant="outline"
                    >
                      BETA
                    </Badge>
                  </div>
                )}
              </motion.li>
            </Link>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
