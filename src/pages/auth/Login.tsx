
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "../../hooks/useAuth";
import { showSuccess, showError } from "../../components/ui/NotificationToast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setProfile } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular login (substitua por lógica real quando integrar Supabase)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay

      if (email === "admin@test.com" && password === "123456") {
        const mockUser = {
          id: "1",
          email: email,
          name: "Usuário Admin"
        };

        const mockProfile = {
          id: "1",
          userId: "1",
          name: "Usuário Admin",
          email: email,
          phone: "(61) 99999-9999",
          preferences: {
            notifications: true,
            emailUpdates: true,
            favoriteCategories: ["vehicles", "properties"]
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        setUser(mockUser);
        setProfile(mockProfile);
        showSuccess("Login realizado com sucesso!", `Bem-vindo, ${mockUser.name}`);
        navigate("/");
      } else {
        showError("Erro no login", "Email ou senha incorretos");
      }
    } catch (error) {
      showError("Erro no login", "Tente novamente mais tarde");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <LogIn className="w-6 h-6 text-blue-600" />
            Entrar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{" "}
              <Link to="/auth/sign-up" className="text-blue-600 hover:underline">
                Criar conta
              </Link>
            </p>
            <Link to="/" className="text-sm text-gray-500 hover:underline">
              Voltar ao início
            </Link>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-md">
            <p className="text-xs text-blue-600 text-center">
              <strong>Teste:</strong> admin@test.com / 123456
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
