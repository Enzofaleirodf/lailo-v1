
import { motion } from "framer-motion";
import { ChevronsUpDown, LogOut, Settings, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserAccountDropdownProps {
  isCollapsed: boolean;
  variants: any;
}

export function UserAccountDropdown({ isCollapsed, variants }: UserAccountDropdownProps) {
  return (
    <div className="flex flex-col p-2 mt-auto">
      <Link
        to="/settings/integrations"
        className="flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary"
      >
        <Settings className="h-4 w-4 shrink-0" />
        <motion.li variants={variants}>
          {!isCollapsed && (
            <p className="ml-2 text-sm font-medium">Settings</p>
          )}
        </motion.li>
      </Link>
      
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="w-full">
          <div className="flex h-8 w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary">
            <Avatar className="size-4">
              <AvatarFallback>
                A
              </AvatarFallback>
            </Avatar>
            <motion.li
              variants={variants}
              className="flex w-full items-center gap-2"
            >
              {!isCollapsed && (
                <>
                  <p className="text-sm font-medium">Account</p>
                  <ChevronsUpDown className="ml-auto h-4 w-4 text-muted-foreground/50" />
                </>
              )}
            </motion.li>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={5}>
          <div className="flex flex-row items-center gap-2 p-2">
            <Avatar className="size-6">
              <AvatarFallback>
                AL
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium">
                {`Andrew Luo`}
              </span>
              <span className="line-clamp-1 text-xs text-muted-foreground">
                {`andrew@usehindsight.com`}
              </span>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            asChild
            className="flex items-center gap-2"
          >
            <Link to="/settings/profile">
              <UserCircle className="h-4 w-4" /> Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
