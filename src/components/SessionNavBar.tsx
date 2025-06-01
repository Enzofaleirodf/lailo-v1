
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { OrganizationDropdown } from "./navigation/OrganizationDropdown";
import { NavigationMenu } from "./navigation/NavigationMenu";
import { UserAccountDropdown } from "./navigation/UserAccountDropdown";
import {
  sidebarVariants,
  contentVariants,
  staggerVariants,
  transitionProps
} from "./navigation/sidebarAnimations";

export function SessionNavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  return (
    <motion.div
      className={cn(
        "sidebar fixed left-0 z-40 h-full shrink-0 border-r",
      )}
      initial={isCollapsed ? "closed" : "open"}
      animate={isCollapsed ? "closed" : "open"}
      variants={sidebarVariants}
      transition={transitionProps}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <motion.div
        className={`relative z-40 flex text-muted-foreground h-full shrink-0 flex-col bg-white dark:bg-black transition-all`}
        variants={contentVariants}
      >
        <motion.ul variants={staggerVariants} className="flex h-full flex-col">
          <div className="flex grow flex-col items-center">
            <OrganizationDropdown isCollapsed={isCollapsed} />
            <NavigationMenu isCollapsed={isCollapsed} />
            <UserAccountDropdown isCollapsed={isCollapsed} />
          </div>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
