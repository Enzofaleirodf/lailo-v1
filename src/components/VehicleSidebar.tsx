import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
export function VehicleSidebar() {
  const {
    state
  } = useSidebar();
  return <Sidebar className="w-[512px]" collapsible="none">
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
          
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        {/* Área para filtros - vazia por enquanto */}
      </SidebarContent>
    </Sidebar>;
}