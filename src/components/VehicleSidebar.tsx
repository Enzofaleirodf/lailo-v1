
import { Car, Home, Search, Filter, MapPin, Calendar } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
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
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  { title: "Buscador", url: "/buscador", icon: Search },
  { title: "Veículos", url: "/veiculos", icon: Car },
  { title: "Imóveis", url: "/imoveis", icon: Home },
];

const filterOptions = [
  { label: "Extrajudicial", count: 8 },
  { label: "Judicial", count: 5 },
  { label: "1ª Praça", count: 3 },
  { label: "2ª Praça", count: 7 },
  { label: "3ª Praça", count: 2 },
];

const locations = [
  { label: "Brasília - DF", count: 12 },
  { label: "São Paulo - SP", count: 8 },
  { label: "Rio de Janeiro - RJ", count: 5 },
  { label: "Goiânia - GO", count: 3 },
];

export function VehicleSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-blue-100 text-blue-800 font-medium" : "hover:bg-gray-100";

  return (
    <Sidebar className="w-[512px]" collapsible="none">
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
          <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Search */}
        <SidebarGroup>
          <SidebarGroupLabel>Buscar</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              <Input placeholder="Buscar veículos..." className="w-full" />
              <Button className="w-full" variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Tipo de Leilão */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <Filter className="h-4 w-4 mr-2" />
            Tipo de Leilão
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {filterOptions.map((option) => (
                <div key={option.label} className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">{option.label}</span>
                  </label>
                  <Badge variant="secondary" className="text-xs">
                    {option.count}
                  </Badge>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Localização */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <MapPin className="h-4 w-4 mr-2" />
            Localização
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {locations.map((location) => (
                <div key={location.label} className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">{location.label}</span>
                  </label>
                  <Badge variant="secondary" className="text-xs">
                    {location.count}
                  </Badge>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Faixa de Preço */}
        <SidebarGroup>
          <SidebarGroupLabel>Faixa de Preço</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Mín" type="number" />
                <Input placeholder="Máx" type="number" />
              </div>
              <Button variant="outline" className="w-full">
                Aplicar
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Data do Leilão */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <Calendar className="h-4 w-4 mr-2" />
            Data do Leilão
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              <Input type="date" className="w-full" />
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Hoje
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Esta semana
                </Button>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
