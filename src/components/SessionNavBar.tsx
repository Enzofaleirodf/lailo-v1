
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
  variants,
  transitionProps,
  staggerVariants
} from "./navigation/sidebarAnimations";

export function SessionNavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  return (
    <motion.div
      className={cn(
        "sidebar z-40 min-h-screen shrink-0 border-r",
      )}
      initial={isCollapsed ? "closed" : "open"}
      animate={isCollapsed ? "closed" : "open"}
      variants={sidebarVariants}
      transition={transitionProps}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <motion.div
        className={`relative z-40 flex text-muted-foreground min-h-screen shrink-0 flex-col bg-white dark:bg-black transition-all`}
        variants={contentVariants}
      >
        <motion.ul variants={staggerVariants} className="flex min-h-screen flex-col">
          <div className="flex grow flex-col items-center">
            <OrganizationDropdown isCollapsed={isCollapsed} variants={variants} />
            <NavigationMenu isCollapsed={isCollapsed} variants={variants} />
            <UserAccountDropdown isCollapsed={isCollapsed} variants={variants} />
          </div>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
