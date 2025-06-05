
import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { Settings, User, CreditCard, Bell, FileText, ChevronRight, ArrowLeft } from "lucide-react";
import { BasePageLayout } from "../components/layout/BasePageLayout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Configuracoes = () => {
  const location = useLocation();
  const currentTab = location.pathname.split('/').pop() || 'perfil';
  const isMainConfigPage = location.pathname === '/configuracoes';

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

  // Encontrar a seção atual
  const currentSection = tabs.find(tab => tab.value === currentTab);

  return (
    <BasePageLayout containerClass="p-0">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header Desktop */}
        <div className="hidden md:block px-6 py-6 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            <Settings className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
              <p className="text-sm text-gray-600">Gerencie sua conta e preferências</p>
            </div>
          </div>
        </div>

        {/* Header Mobile - apenas para subpáginas */}
        <div className="block md:hidden">
          {!isMainConfigPage && (
            <div className="px-4 py-3 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-3">
                <Link to="/configuracoes" className="p-1 -ml-1">
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div className="flex items-center gap-2">
                  {currentSection?.icon && <currentSection.icon className="w-5 h-5 text-blue-600" />}
                  <h1 className="text-lg font-bold text-gray-900">{currentSection?.label}</h1>
                </div>
              </div>
            </div>
          )}
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

        {/* Mobile - Lista vertical de navegação APENAS na página principal */}
        {isMainConfigPage && (
          <div className="block md:hidden">
            {/* Header principal mobile */}
            <div className="px-4 py-4 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-blue-600" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Configurações</h1>
                  <p className="text-sm text-gray-600">Gerencie sua conta e preferências</p>
                </div>
              </div>
            </div>

            {/* Lista de navegação */}
            <div className="bg-white">
              {tabs.map((tab) => (
                <Link
                  key={tab.value}
                  to={tab.path}
                  className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <tab.icon className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">{tab.label}</p>
                      <p className="text-xs text-gray-500">{tab.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Conteúdo das subpáginas */}
        {!isMainConfigPage && (
          <div className="bg-gray-50 min-h-screen md:min-h-0">
            <div className="p-4 md:p-6">
              <Outlet />
            </div>
          </div>
        )}
      </div>
    </BasePageLayout>
  );
};

export default Configuracoes;
