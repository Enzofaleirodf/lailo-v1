
import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { Settings, User, CreditCard, Bell, FileText, ChevronRight } from "lucide-react";
import { BasePageLayout } from "../components/layout/BasePageLayout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      path: '/configuracoes/perfil',
      description: 'Informações pessoais e conta'
    },
    {
      value: 'assinatura',
      label: 'Assinatura',
      icon: CreditCard,
      path: '/configuracoes/assinatura',
      description: 'Plano e pagamento'
    },
    {
      value: 'alertas',
      label: 'Alertas',
      icon: Bell,
      path: '/configuracoes/alertas',
      description: 'Notificações e preferências'
    },
    {
      value: 'laudos',
      label: 'Laudos',
      icon: FileText,
      path: '/configuracoes/laudos',
      description: 'Pareceres jurídicos'
    }
  ];

  // Redirecionar /configuracoes para /configuracoes/perfil
  if (location.pathname === '/configuracoes') {
    return <Navigate to="/configuracoes/perfil" replace />;
  }

  return (
    <BasePageLayout containerClass="p-0">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="px-4 md:px-6 py-4 md:py-6 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            <Settings className="w-6 md:w-8 h-6 md:h-8 text-blue-600" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Configurações</h1>
              <p className="text-sm text-gray-600 hidden sm:block">Gerencie sua conta e preferências</p>
            </div>
          </div>
        </div>

        {/* Desktop - Tabs horizontais */}
        <div className="hidden md:block px-6 py-4 bg-gray-50 border-b border-gray-100">
          <Tabs value={currentTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
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

        {/* Mobile - Lista vertical de navegação */}
        <div className="block md:hidden">
          <div className="bg-white">
            {tabs.map((tab) => {
              const isActive = currentTab === tab.value;
              return (
                <Link
                  key={tab.value}
                  to={tab.path}
                  className={`flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    isActive ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <tab.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
                    <div>
                      <p className={`font-medium ${isActive ? 'text-blue-900' : 'text-gray-900'}`}>
                        {tab.label}
                      </p>
                      <p className="text-xs text-gray-500">{tab.description}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Conteúdo das subpáginas */}
        <div className="bg-gray-50 min-h-screen md:min-h-0">
          <div className="p-4 md:p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </BasePageLayout>
  );
};

export default Configuracoes;
