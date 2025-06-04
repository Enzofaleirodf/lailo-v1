
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "../../hooks/useAuth";
import { showSuccess, showError } from "../../components/ui/NotificationToast";
import { useFavoritesStore } from "../../stores/favoritesStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setProfile, isAuthenticated } = useAuth();
  const { addFavorite } = useFavoritesStore();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirecionar se já estiver logado
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handlePostLoginActions = (redirectData: any) => {
    if (redirectData && redirectData.action === 'favorite' && redirectData.item) {
      addFavorite(redirectData.item);
      showSuccess("Adicionado aos favoritos", redirectData.item.title);
      
      if (redirectData.returnUrl) {
        navigate(redirectData.returnUrl);
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

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
        
        const urlParams = new URLSearchParams(location.search);
        const redirectBackTo = urlParams.get('redirectBackTo');
        
        if (redirectBackTo) {
          try {
            const redirectData = JSON.parse(decodeURIComponent(redirectBackTo));
            handlePostLoginActions(redirectData);
          } catch (error) {
            console.error('Erro ao processar dados de redirecionamento:', error);
            navigate("/");
          }
        } else {
          navigate("/");
        }
      } else {
        showError("Erro no login", "Email ou senha incorretos");
      }
    } catch (error) {
      showError("Erro no login", "Tente novamente mais tarde");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    const urlParams = new URLSearchParams(location.search);
    const redirectBackTo = urlParams.get('redirectBackTo');
    
    if (redirectBackTo) {
      try {
        const redirectData = JSON.parse(decodeURIComponent(redirectBackTo));
        if (redirectData.returnUrl) {
          navigate(redirectData.returnUrl);
          return;
        }
      } catch (error) {
        console.error('Erro ao processar URL de retorno:', error);
      }
    }
    navigate("/");
  };

  // Verificar se vem de uma tentativa de favoritar
  const urlParams = new URLSearchParams(location.search);
  const redirectBackTo = urlParams.get('redirectBackTo');
  let showFavoriteMessage = false;
  
  if (redirectBackTo) {
    try {
      const redirectData = JSON.parse(decodeURIComponent(redirectBackTo));
      showFavoriteMessage = redirectData.action === 'favorite';
    } catch (error) {
      // Silenciar erro de parsing
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto md:max-w-6xl px-4 py-4">
          <div className="flex items-center">
            <button
              onClick={handleBack}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            {/* Logo no desktop */}
            <div className="hidden md:block ml-4">
              <div className="text-xl font-bold text-blue-600">
                LeilõesBR
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex items-center justify-center px-4 py-8 md:py-16">
        <div className="w-full max-w-md">
          {/* Mensagem de favorito (se aplicável) */}
          {showFavoriteMessage && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-700 text-center">
                Você precisa estar logado para acessar seus favoritos.
              </p>
            </div>
          )}

          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Entrar ou criar conta
              </CardTitle>
              <p className="text-gray-600 text-sm">
                Acesse seus favoritos e acompanhe os leilões de forma personalizada.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Botões de entrada */}
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full h-12 text-base"
                  onClick={() => {/* TODO: Implementar Google Auth */}}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Entrar com Google
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full h-12 text-base"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Entrar com e-mail
                </Button>
              </div>

              {/* Formulário de email (inicialmente oculto) */}
              {showPassword && (
                <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-gray-200">
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

                  <Button type="submit" className="w-full h-12 text-base" disabled={isLoading}>
                    {isLoading ? "Entrando..." : "Entrar"}
                  </Button>
                </form>
              )}

              <div className="text-center space-y-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Não tem uma conta?{" "}
                  <Link 
                    to={`/auth/sign-up${location.search}`} 
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Criar conta gratuita
                  </Link>
                </p>
                
                {/* Informações de teste */}
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-blue-600 text-center">
                    <strong>Teste:</strong> admin@test.com / 123456
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
