
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Index from "./pages/Index";
import BuscadorImoveis from "./pages/BuscadorImoveis";
import BuscadorVeiculos from "./pages/BuscadorVeiculos";
import FavoritosImoveis from "./pages/FavoritosImoveis";
import FavoritosVeiculos from "./pages/FavoritosVeiculos";
import Leiloeiros from "./pages/Leiloeiros";
import Agenda from "./pages/Agenda";
import Perfil from "./pages/Perfil";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import AuthCallback from "./pages/auth/AuthCallback";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Rotas de busca */}
          <Route path="/buscador/imoveis" element={<BuscadorImoveis />} />
          <Route path="/buscador/veiculos" element={<BuscadorVeiculos />} />
          
          {/* Rotas de favoritos (protegidas) */}
          <Route 
            path="/favoritos/imoveis" 
            element={
              <ProtectedRoute>
                <FavoritosImoveis />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/favoritos/veiculos" 
            element={
              <ProtectedRoute>
                <FavoritosVeiculos />
              </ProtectedRoute>
            } 
          />
          
          {/* Outras rotas */}
          <Route path="/leiloeiros" element={<Leiloeiros />} />
          <Route path="/agenda" element={<Agenda />} />
          
          {/* Rotas protegidas */}
          <Route 
            path="/perfil" 
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            } 
          />
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
          
          {/* Rotas de compatibilidade (redirecionamento das antigas) */}
          <Route path="/buscador" element={<Index />} />
          <Route path="/veiculos" element={<BuscadorVeiculos />} />
          <Route path="/imoveis" element={<BuscadorImoveis />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
