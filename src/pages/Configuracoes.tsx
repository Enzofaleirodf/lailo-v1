
import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { Settings, User, CreditCard, Bell, FileText } from "lucide-react";
import { BasePageLayout } from "../components/layout/BasePageLayout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Configuracoes = () => {
  const location = useLocation();
  const currentTab = location.pathname.split('/').pop() || 'perfil';

  const tabs = [
    {
      value: 'perfil',
      label: 'Perfil',
      icon: User,
      path: '/configuracoes/perfil'
    },
    {
      value: 'assinatura',
      label: 'Assinatura',
      icon: CreditCard,
      path: '/configuracoes/assinatura'
    },
    {
      value: 'alertas',
      label: 'Alertas',
      icon: Bell,
      path: '/configuracoes/alertas'
    },
    {
      value: 'laudos',
      label: 'Laudos',
      icon: FileText,
      path: '/configuracoes/laudos'
    }
  ];

  // Redirecionar /configuracoes para /configuracoes/perfil
  if (location.pathname === '/configuracoes') {
    return <Navigate to="/configuracoes/perfil" replace />;
  }

  return (
    <BasePageLayout containerClass="p-0">
      <div className="w-full max-w-[1440px] mx-auto px-0 md:px-6 py-4 md:py-8">
        <div className="flex items-center gap-3 mb-6 md:mb-8 px-4 md:px-0">
          <Settings className="w-6 md:w-8 h-6 md:h-8 text-blue-600" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Configurações da Conta</h1>
        </div>

        {/* Desktop - Tabs horizontais */}
        <div className="hidden md:block">
          <Tabs value={currentTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} asChild>
                  <Link to={tab.path} className="flex items-center gap-2">
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </Link>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Mobile - Menu dropdown/colapsável */}
        <div className="block md:hidden mb-4 px-4">
          <div className="grid grid-cols-2 gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab.value}
                variant={currentTab === tab.value ? "default" : "outline"}
                size="sm"
                asChild
                className="justify-start"
              >
                <Link to={tab.path} className="flex items-center gap-2">
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Conteúdo das subpáginas */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 md:p-6 mx-3 md:mx-0">
          <Outlet />
        </div>
      </div>
    </BasePageLayout>
  );
};

export default Configuracoes;
