
import { Bell, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const ConfiguracoesAlertas = () => {
  const alertas = [
    {
      id: 1,
      nome: "Imóveis em São Paulo",
      tipo: "Imóveis",
      filtros: "São Paulo, Comercial, R$ 100k - R$ 500k",
      ativo: true
    },
    {
      id: 2,
      nome: "Carros Honda",
      tipo: "Veículos",
      filtros: "Honda, 2018-2023, São Paulo",
      ativo: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Alertas</h2>
          <p className="text-gray-600">Receba notificações sobre leilões do seu interesse</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Novo Alerta
        </Button>
      </div>

      {/* Preferências de Notificação */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Preferências de Notificação
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-600">Receber alertas por email</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push</p>
              <p className="text-sm text-gray-600">Notificações no navegador</p>
            </div>
            <Switch />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Frequência</p>
              <p className="text-sm text-gray-600">Máximo de 1 email por dia</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Lista de Alertas */}
      <Card>
        <CardHeader>
          <CardTitle>Meus Alertas</CardTitle>
        </CardHeader>
        <CardContent>
          {alertas.length === 0 ? (
            <div className="text-center py-8">
              <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Nenhum alerta criado</p>
              <Button className="mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Criar Primeiro Alerta
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {alertas.map((alerta) => (
                <div key={alerta.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{alerta.nome}</h3>
                      <Badge variant={alerta.ativo ? "default" : "secondary"}>
                        {alerta.ativo ? "Ativo" : "Pausado"}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{alerta.tipo}</p>
                    <p className="text-xs text-gray-500">{alerta.filtros}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked={alerta.ativo} />
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfiguracoesAlertas;
