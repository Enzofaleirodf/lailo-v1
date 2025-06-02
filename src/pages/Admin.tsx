
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Users, Car, Home, Activity, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SessionNavBar } from "../components/SessionNavBar";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { useFavoritesStore } from "../stores/favoritesStore";
import { useAuthStore } from "../stores/authStore";

const Admin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { favorites } = useFavoritesStore();
  const { user } = useAuthStore();

  // Mock data para demonstração
  const stats = [
    {
      title: "Usuários Ativos",
      value: "1,234",
      icon: Users,
      color: "text-blue-500",
      change: "+12%"
    },
    {
      title: "Veículos Cadastrados",
      value: "856",
      icon: Car,
      color: "text-green-500",
      change: "+8%"
    },
    {
      title: "Imóveis Cadastrados",
      value: "423",
      icon: Home,
      color: "text-purple-500",
      change: "+15%"
    },
    {
      title: "Leilões Ativos",
      value: "67",
      icon: Activity,
      color: "text-orange-500",
      change: "+3%"
    }
  ];

  const recentUsers = [
    { id: 1, name: "João Silva", email: "joao@email.com", joinDate: "2024-01-15" },
    { id: 2, name: "Maria Santos", email: "maria@email.com", joinDate: "2024-01-14" },
    { id: 3, name: "Pedro Costa", email: "pedro@email.com", joinDate: "2024-01-13" },
    { id: 4, name: "Ana Lima", email: "ana@email.com", joinDate: "2024-01-12" },
  ];

  const recentAuctions = [
    { id: 1, title: "Honda Civic 2024", type: "Veículo", status: "Ativo", endDate: "2024-01-20" },
    { id: 2, title: "Casa Térrea - Brasília", type: "Imóvel", status: "Ativo", endDate: "2024-01-22" },
    { id: 3, title: "Toyota Corolla 2023", type: "Veículo", status: "Finalizado", endDate: "2024-01-18" },
    { id: 4, title: "Apartamento - São Paulo", type: "Imóvel", status: "Ativo", endDate: "2024-01-25" },
  ];

  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      <main className="flex h-screen grow flex-col overflow-auto ml-12">
        <div className="bg-white px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Link>
                </Button>
                <div className="flex items-center gap-2">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Logado como: {user?.name || 'Administrador'}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className="text-xs text-green-600">{stat.change}</p>
                        </div>
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="users">Usuários</TabsTrigger>
                <TabsTrigger value="auctions">Leilões</TabsTrigger>
                <TabsTrigger value="settings">Configurações</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Users */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Usuários Recentes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {recentUsers.map((user) => (
                          <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                            <span className="text-xs text-gray-400">{user.joinDate}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Auctions */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="w-5 h-5" />
                        Leilões Recentes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {recentAuctions.map((auction) => (
                          <div key={auction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">{auction.title}</p>
                              <p className="text-sm text-gray-500">{auction.type}</p>
                            </div>
                            <div className="text-right">
                              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                auction.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {auction.status}
                              </span>
                              <p className="text-xs text-gray-400 mt-1">{auction.endDate}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <CardTitle>Gerenciar Usuários</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Funcionalidade de gerenciamento de usuários</p>
                      <p className="text-sm text-gray-400">Será implementada com a integração do Supabase</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="auctions">
                <Card>
                  <CardHeader>
                    <CardTitle>Gerenciar Leilões</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Activity className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Funcionalidade de gerenciamento de leilões</p>
                      <p className="text-sm text-gray-400">Será implementada com a integração do Supabase</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Configurações do Sistema
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-medium text-blue-900">Sistema de Notificações</h3>
                        <p className="text-sm text-blue-700">Configurações para emails e notificações push</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h3 className="font-medium text-green-900">Backup de Dados</h3>
                        <p className="text-sm text-green-700">Configurações de backup automático</p>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <h3 className="font-medium text-yellow-900">Logs do Sistema</h3>
                        <p className="text-sm text-yellow-700">Monitoramento e logs de atividades</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
