
import {
  Blocks,
  FileClock,
  GraduationCap,
  Layout,
  LayoutDashboard,
  MessageSquareText,
  MessagesSquare,
  Settings,
  UserCircle,
  UserCog,
  UserSearch,
} from "lucide-react";

export const mainNavigationItems = [
  {
    to: "/buscador",
    icon: LayoutDashboard,
    label: "Buscador",
    pathMatch: "buscador"
  },
  {
    to: "/veiculos",
    icon: FileClock,
    label: "Veículos",
    pathMatch: "veiculos"
  },
  {
    to: "/imoveis",
    icon: MessagesSquare,
    label: "Imóveis",
    pathMatch: "imoveis"
  }
];

export const secondaryNavigationItems = [
  {
    to: "/deals",
    icon: Layout,
    label: "Deals",
    pathMatch: "deals"
  },
  {
    to: "/accounts",
    icon: UserCircle,
    label: "Accounts",
    pathMatch: "accounts"
  },
  {
    to: "/competitors",
    icon: UserSearch,
    label: "Competitors",
    pathMatch: "competitors"
  }
];

export const tertiaryNavigationItems = [
  {
    to: "/library/knowledge",
    icon: GraduationCap,
    label: "Knowledge Base",
    pathMatch: "library"
  },
  {
    to: "/feedback",
    icon: MessageSquareText,
    label: "Feedback",
    pathMatch: "feedback"
  },
  {
    to: "/review",
    icon: FileClock,
    label: "Document Review",
    pathMatch: "review"
  }
];

export const organizationDropdownItems = [
  {
    to: "/settings/members",
    icon: UserCog,
    label: "Manage members"
  },
  {
    to: "/settings/integrations",
    icon: Blocks,
    label: "Integrations"
  }
];
