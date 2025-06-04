
import { Shield, Users, Database, Settings, BarChart3, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BasePageLayout } from "../components/layout/BasePageLayout";
import { useAuth } from "../hooks/useAuth";

const Admin = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin()) {
    return (
      <BasePageLayout containerClass="p-0">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Acesso Negado</h1>
              <p className="text-gray-600">Você não tem permissão para acessar esta área.</p>
            </div>
          </div>
        </div>
      </BasePageLayout>
    );
  }

  const stats = [
    { title: "Total de Usuários", value: "1,234", icon: Users, color: "text-blue-600" },
    { title: "Leilões Ativos", value: "456", icon: BarChart3, color: "text-green-600" },
    { title: "Bancos de Dados", value: "3", icon: Database, color: "text-purple-600" },
    { title: "Relatórios", value: "89", icon: FileText, color: "text-orange-600" }
  ];

  const quickActions = [
    { title: "Gerenciar Usuários", description: "Visualizar e editar usuários do sistema", icon: Users },
    { title: "Monitorar Leilões", description: "Acompanhar leilões ativos e estatísticas", icon: BarChart3 },
    { title: "Configurações", description: "Ajustar configurações do sistema", icon: Settings },
    { title: "Relatórios", description: "Gerar relatórios e análises", icon: FileText }
  ];

  return (
    <BasePageLayout containerClass="p-0">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
          </div>
          <p className="text-gray-600">Gerencie o sistema e monitore as atividades</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <action.icon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Status do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API Status</span>
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Cache</span>
                  <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Atividades Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="text-gray-500">10:30</span>
                  <span className="ml-2">Novo usuário registrado</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">09:15</span>
                  <span className="ml-2">Leilão atualizado</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">08:45</span>
                  <span className="ml-2">Backup realizado</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </BasePageLayout>
  );
};

export default Admin;
