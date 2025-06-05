
import { CreditCard, Crown, Star, Plus, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SettingsCard } from "../../components/settings/SettingsCard";
import { SettingsListItem } from "../../components/settings/SettingsListItem";
import { FeatureList } from "../../components/settings/FeatureList";

const ConfiguracoesAssinatura = () => {
  const currentPlan = {
    name: "Plano Gratuito",
    status: "Ativo",
    features: [
      { name: "Busca de leilões", included: true },
      { name: "Favoritos (até 10 itens)", included: true },
      { name: "Alertas personalizados", included: false },
      { name: "Laudos jurídicos", included: false },
      { name: "Suporte prioritário", included: false }
    ]
  };

  const premiumFeatures = [
    { name: "Favoritos ilimitados", included: true },
    { name: "Alertas personalizados", included: true },
    { name: "Laudos jurídicos com desconto", included: true },
    { name: "Suporte prioritário", included: true },
    { name: "Relatórios avançados", included: true }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Plano Atual */}
      <SettingsCard
        title="Plano Atual"
        description="Detalhes da sua assinatura"
        icon={Crown}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{currentPlan.name}</h3>
              <p className="text-sm text-gray-600">Acesso básico aos leilões</p>
            </div>
            <Badge variant="secondary">{currentPlan.status}</Badge>
          </div>
          
          <FeatureList features={currentPlan.features} />
          
          <Button className="w-full">
            <Crown className="w-4 h-4 mr-2" />
            Fazer Upgrade para Premium
          </Button>
        </div>
      </SettingsCard>

      {/* Premium Upgrade Card */}
      <SettingsCard
        title="Plano Premium"
        description="Desbloqueie todo o potencial da plataforma"
        icon={Star}
        className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">R$ 29,90</span>
            <span className="text-sm text-gray-600">/mês</span>
          </div>
          
          <FeatureList features={premiumFeatures} />
          
          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <Crown className="w-4 h-4 mr-2" />
            Assinar Premium
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            Cancele a qualquer momento • Sem taxas de cancelamento
          </p>
        </div>
      </SettingsCard>

      {/* Método de Pagamento */}
      <SettingsCard title="Pagamento" description="Gerencie seus métodos de pagamento" icon={CreditCard}>
        <SettingsListItem
          icon={Plus}
          title="Adicionar Método de Pagamento"
          description="Cartão de crédito ou débito"
          action={{
            label: "Adicionar",
            onClick: () => console.log('Adicionar cartão'),
            variant: "outline",
            icon: Plus
          }}
        />
      </SettingsCard>

      {/* Histórico */}
      <SettingsCard title="Histórico" description="Seus pagamentos e faturas" icon={Calendar}>
        <div className="text-center py-8">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600 text-sm">Nenhum pagamento realizado</p>
          <p className="text-xs text-gray-500 mt-1">Quando você fizer um upgrade, o histórico aparecerá aqui</p>
        </div>
      </SettingsCard>
    </div>
  );
};

export default ConfiguracoesAssinatura;
