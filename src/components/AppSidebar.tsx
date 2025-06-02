
import { Car, Home, Building2, Heart, User, Shield, LogIn, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useFavoritesStore } from "@/stores/favoritesStore";

export function AppSidebar() {
  const location = useLocation();
  const { isAuthenticated, user, logout, isAdmin } = useAuth();
  const { favorites } = useFavoritesStore();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const mainItems = [
    {
      title: "Início",
      url: "/",
      icon: Home,
    },
    {
      title: "Veículos",
      url: "/buscador/veiculos",
      icon: Car,
    },
    {
      title: "Imóveis",
      url: "/buscador/imoveis",
      icon: Home,
    },
    {
      title: "Leiloeiros",
      url: "/leiloeiros",
      icon: Building2,
    },
  ];

  const favoriteItems = [
    {
      title: "Favoritos Veículos",
      url: "/favoritos/veiculos",
      icon: Heart,
      badge: favorites.filter(f => f.itemType === 'vehicle').length,
    },
    {
      title: "Favoritos Imóveis", 
      url: "/favoritos/imoveis",
      icon: Heart,
      badge: favorites.filter(f => f.itemType === 'property').length,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="font-bold text-lg group-data-[collapsible=icon]:hidden">
            Leilões
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={isActive(item.url)}
                  >
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {isAuthenticated && (
          <SidebarGroup>
            <SidebarGroupLabel>Favoritos</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {favoriteItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      isActive={isActive(item.url)}
                    >
                      <Link to={item.url} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </div>
                        {item.badge > 0 && (
                          <span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[1.25rem] text-center">
                            {item.badge > 9 ? '9+' : item.badge}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    asChild
                    isActive={isActive("/perfil")}
                  >
                    <Link to="/perfil">
                      <User className="h-4 w-4" />
                      <span>Perfil</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {isAdmin && isAdmin() && (
          <SidebarGroup>
            <SidebarGroupLabel>Administração</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    asChild
                    isActive={isActive("/admin")}
                  >
                    <Link to="/admin">
                      <Shield className="h-4 w-4" />
                      <span>Admin</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter>
        {isAuthenticated ? (
          <Button
            variant="ghost"
            onClick={logout}
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span className="group-data-[collapsible=icon]:hidden">Sair</span>
          </Button>
        ) : (
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link to="/auth/login">
              <LogIn className="h-4 w-4 mr-2" />
              <span className="group-data-[collapsible=icon]:hidden">Entrar</span>
            </Link>
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
