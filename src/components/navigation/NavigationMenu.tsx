
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { mainNavigationItems, secondaryNavigationItems, tertiaryNavigationItems } from "./navigationConfig";

interface NavigationMenuProps {
  isCollapsed: boolean;
  variants: any;
}

export function NavigationMenu({ isCollapsed, variants }: NavigationMenuProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const renderNavigationItems = (items: typeof mainNavigationItems) => (
    items.map((item) => (
      <Link
        key={item.to}
        to={item.to}
        className={cn(
          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes(item.pathMatch) && "bg-muted text-blue-600",
        )}
      >
        <item.icon className="h-4 w-4" />
        <motion.li variants={variants}>
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <p className="ml-2 text-sm font-medium">{item.label}</p>
            </div>
          )}
        </motion.li>
      </Link>
    ))
  );

  return (
    <div className="flex-1 flex flex-col p-2">
      <ScrollArea className="flex-1">
        <div className={cn("flex w-full flex-col gap-1")}>
          {renderNavigationItems(mainNavigationItems)}
          <Separator className="w-full" />
          {renderNavigationItems(secondaryNavigationItems)}
          <Separator className="w-full" />
          {renderNavigationItems(tertiaryNavigationItems)}
        </div>
      </ScrollArea>
    </div>
  );
}
