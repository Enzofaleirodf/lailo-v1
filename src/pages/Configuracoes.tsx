
import React from "react";
import { Settings, Bell, Mail, Shield, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const Configuracoes = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-4 pb-20 md:pb-4 md:pl-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Configurações</h1>
          <p className="text-gray-600">Gerencie suas preferências e configurações da conta</p>
        </div>

        <div className="space-y-6">
          {/* Notificações */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notificações
              </CardTitle>
              <CardDescription>
                Configure como você quer receber notificações sobre leilões
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Novos leilões</p>
                  <p className="text-sm text-gray-600">Receba notificações sobre novos leilões</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Leilões favoritos</p>
                  <p className="text-sm text-gray-600">Notificações sobre seus leilões favoritos</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Lembretes de encerramento</p>
                  <p className="text-sm text-gray-600">Avisos antes do encerramento dos leilões</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Email */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </CardTitle>
              <CardDescription>
                Configure suas preferências de email
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Newsletter semanal</p>
                  <p className="text-sm text-gray-600">Receba resumos semanais por email</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Ofertas especiais</p>
                  <p className="text-sm text-gray-600">Receba ofertas e promoções por email</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Privacidade */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Privacidade
              </CardTitle>
              <CardDescription>
                Gerencie suas configurações de privacidade
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Perfil público</p>
                  <p className="text-sm text-gray-600">Permitir que outros vejam seu perfil</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Histórico de atividades</p>
                  <p className="text-sm text-gray-600">Salvar histórico de buscas e visualizações</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Dados */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Dados da Conta
              </CardTitle>
              <CardDescription>
                Gerencie os dados da sua conta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Baixar meus dados
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                Excluir histórico
              </Button>
              
              <Button variant="destructive" className="w-full justify-start">
                Excluir conta
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
