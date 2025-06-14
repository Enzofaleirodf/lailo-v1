
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Index from "./pages/Index";
import BuscadorImoveis from "./pages/BuscadorImoveis";
import BuscadorVeiculos from "./pages/BuscadorVeiculos";
import FavoritosImoveis from "./pages/FavoritosImoveis";
import FavoritosVeiculos from "./pages/FavoritosVeiculos";
import Leiloeiros from "./pages/Leiloeiros";
import Agenda from "./pages/Agenda";
import Configuracoes from "./pages/Configuracoes";
import ConfiguracoesPerfil from "./pages/configuracoes/ConfiguracoesPerfil";
import ConfiguracoesAssinatura from "./pages/configuracoes/ConfiguracoesAssinatura";
import ConfiguracoesAlertas from "./pages/configuracoes/ConfiguracoesAlertas";
import ConfiguracoesLaudos from "./pages/configuracoes/ConfiguracoesLaudos";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import AuthCallback from "./pages/auth/AuthCallback";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Index />} />
          
          {/* Rotas de busca */}
          <Route path="/buscador/imoveis" element={<BuscadorImoveis />} />
          <Route path="/buscador/veiculos" element={<BuscadorVeiculos />} />
          
          {/* Rotas de favoritos */}
          <Route path="/favoritos/imoveis" element={<FavoritosImoveis />} />
          <Route path="/favoritos/veiculos" element={<FavoritosVeiculos />} />
          
          {/* Outras rotas públicas */}
          <Route path="/leiloeiros" element={<Leiloeiros />} />
          <Route path="/agenda" element={<Agenda />} />
          
          {/* Rotas de configurações protegidas */}
          <Route 
            path="/configuracoes" 
            element={
              <ProtectedRoute>
                <Configuracoes />
              </ProtectedRoute>
            } 
          >
            <Route path="perfil" element={<ConfiguracoesPerfil />} />
            <Route path="assinatura" element={<ConfiguracoesAssinatura />} />
            <Route path="alertas" element={<ConfiguracoesAlertas />} />
            <Route path="laudos" element={<ConfiguracoesLaudos />} />
          </Route>
          
          {/* Rota protegida de admin */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } 
          />
          
          {/* Rotas de autenticação */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          
          {/* Redirecionamentos de compatibilidade */}
          <Route path="/perfil" element={<Navigate to="/configuracoes/perfil" replace />} />
          <Route path="/buscador" element={<Navigate to="/buscador/imoveis" replace />} />
          <Route path="/veiculos" element={<Navigate to="/buscador/veiculos" replace />} />
          <Route path="/imoveis" element={<Navigate to="/buscador/imoveis" replace />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
