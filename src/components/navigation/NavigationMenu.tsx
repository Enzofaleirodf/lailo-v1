
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
} from "lucide-react";
import { variants } from "./sidebarAnimations";

interface NavigationMenuProps {
  isCollapsed: boolean;
}

export function NavigationMenu({ isCollapsed }: NavigationMenuProps) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex grow flex-col gap-4">
        <ScrollArea className="grow p-2">
          <div className={cn("flex w-full flex-col gap-1")}>
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
            <Separator className="w-full" />
            <Link
              to="/veiculos"
              className={cn(
                "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("veiculos") && "bg-muted text-blue-600",
              )}
            >
              <Layout className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <p className="ml-2 text-sm font-medium">Veículos</p>
                )}
              </motion.li>
            </Link>
            <Link
              to="/imoveis"
              className={cn(
                "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("imoveis") && "bg-muted text-blue-600",
              )}
            >
              <UserCircle className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <p className="ml-2 text-sm font-medium">Imóveis</p>
                )}
              </motion.li>
            </Link>
            <Link
              to="/buscador"
              className={cn(
                "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("buscador") && "bg-muted text-blue-600",
              )}
            >
              <UserSearch className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <p className="ml-2 text-sm font-medium">Buscador</p>
                )}
              </motion.li>
            </Link>
            <Separator className="w-full" />
            <Link
              to="/library/knowledge"
              className={cn(
                "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("library") && "bg-muted text-blue-600",
              )}
            >
              <GraduationCap className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <p className="ml-2 text-sm font-medium">Knowledge Base</p>
                )}
              </motion.li>
            </Link>
            <Link
              to="/feedback"
              className={cn(
                "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("feedback") && "bg-muted text-blue-600",
              )}
            >
              <MessageSquareText className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <p className="ml-2 text-sm font-medium">Feedback</p>
                )}
              </motion.li>
            </Link>
            <Link
              to="/review"
              className={cn(
                "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                pathname?.includes("review") && "bg-muted text-blue-600",
              )}
            >
              <FileClock className="h-4 w-4" />
              <motion.li variants={variants}>
                {!isCollapsed && (
                  <p className="ml-2 text-sm font-medium">Document Review</p>
                )}
              </motion.li>
            </Link>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
