
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Users, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SessionNavBar } from "../components/SessionNavBar";

const Admin = () => {
  const adminCards = [
    {
      title: "Usuários",
      description: "Gerenciar usuários do sistema",
      icon: Users,
      value: "1,234",
      color: "text-blue-600"
    },
    {
      title: "Leilões Ativos",
      description: "Leilões em andamento",
      icon: BarChart3,
      value: "45",
      color: "text-green-600"
    },
    {
      title: "Configurações",
      description: "Configurações do sistema",
      icon: Settings,
      value: "-",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      <main className="flex h-screen grow flex-col overflow-auto ml-12">
        <div className="bg-white px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Link>
                </Button>
                <div className="flex items-center gap-2">
                  <Shield className="w-8 h-8 text-red-600" />
                  <h1 className="text-3xl font-bold text-gray-900">Painel Admin</h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminCards.map((card, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{card.title}</span>
                      <card.icon className={`w-6 h-6 ${card.color}`} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold mb-2">{card.value}</p>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Ações Administrativas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline">Gerenciar Usuários</Button>
                  <Button variant="outline">Moderar Leilões</Button>
                  <Button variant="outline">Ver Relatórios</Button>
                  <Button variant="outline">Configurações</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
