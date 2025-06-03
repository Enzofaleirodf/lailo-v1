
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AppLayout } from "./components/layout/AppLayout";
import Index from "./pages/Index";
import BuscadorImoveis from "./pages/BuscadorImoveis";
import BuscadorVeiculos from "./pages/BuscadorVeiculos";
import FavoritosImoveis from "./pages/FavoritosImoveis";
import FavoritosVeiculos from "./pages/FavoritosVeiculos";
import Leiloeiros from "./pages/Leiloeiros";
import Perfil from "./pages/Perfil";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import AuthCallback from "./pages/auth/AuthCallback";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      gcTime: 10 * 60 * 1000, // 10 minutos
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
          {/* Rotas com layout unificado */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Index />} />
            
            {/* Rotas de busca */}
            <Route path="buscador/imoveis" element={<BuscadorImoveis />} />
            <Route path="buscador/veiculos" element={<BuscadorVeiculos />} />
            
            {/* Rotas de favoritos (protegidas) */}
            <Route 
              path="favoritos/imoveis" 
              element={
                <ProtectedRoute>
                  <FavoritosImoveis />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="favoritos/veiculos" 
              element={
                <ProtectedRoute>
                  <FavoritosVeiculos />
                </ProtectedRoute>
              } 
            />
            
            <Route path="leiloeiros" element={<Leiloeiros />} />
            
            {/* Rotas protegidas */}
            <Route 
              path="perfil" 
              element={
                <ProtectedRoute>
                  <Perfil />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
          </Route>
          
          {/* Rotas de autenticação (sem layout principal) */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          
          {/* Rotas de compatibilidade (redirecionamento) */}
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
