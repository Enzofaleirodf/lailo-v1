
import { CreditCard, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ConfiguracoesAssinatura = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Assinatura</h2>
        <p className="text-gray-600">Gerencie seu plano e método de pagamento</p>
      </div>

      {/* Plano Atual */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Plano Atual
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Plano Gratuito</h3>
              <p className="text-gray-600">Acesso básico aos leilões</p>
            </div>
            <Badge variant="secondary">Ativo</Badge>
          </div>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-sm">Busca de leilões</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-sm">Favoritos (até 10 itens)</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-600" />
              <span className="text-sm">Alertas personalizados</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-600" />
              <span className="text-sm">Laudos jurídicos</span>
            </div>
          </div>

          <Button className="w-full">
            Fazer Upgrade para Premium
          </Button>
        </CardContent>
      </Card>

      {/* Método de Pagamento */}
      <Card>
        <CardHeader>
          <CardTitle>Método de Pagamento</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">Nenhum método de pagamento cadastrado</p>
          <Button variant="outline">
            Adicionar Cartão
          </Button>
        </CardContent>
      </Card>

      {/* Histórico de Pagamentos */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Pagamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Nenhum pagamento realizado</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfiguracoesAssinatura;
