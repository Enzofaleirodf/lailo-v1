
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronsUpDown,
  UserCog,
  Blocks,
  Plus,
} from "lucide-react";
import { variants } from "./sidebarAnimations";

interface OrganizationDropdownProps {
  isCollapsed: boolean;
}

export function OrganizationDropdown({ isCollapsed }: OrganizationDropdownProps) {
  return (
    <div className="flex h-[54px] w-full shrink-0 border-b p-2">
      <div className="mt-[1.5px] flex w-full">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="w-full" asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex w-fit items-center gap-2 px-2"
            >
              <Avatar className="rounded size-4">
                <AvatarFallback>O</AvatarFallback>
              </Avatar>
              <motion.li
                variants={variants}
                className="flex w-fit items-center gap-2"
              >
                {!isCollapsed && (
                  <>
                    <p className="text-sm font-medium">{"Organization"}</p>
                    <ChevronsUpDown className="h-4 w-4 text-muted-foreground/50" />
                  </>
                )}
              </motion.li>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem
              asChild
              className="flex items-center gap-2"
            >
              <Link to="/settings/members">
                <UserCog className="h-4 w-4" /> Manage members
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className="flex items-center gap-2"
            >
              <Link to="/settings/integrations">
                <Blocks className="h-4 w-4" /> Integrations
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                to="/select-org"
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Create or join an organization
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
