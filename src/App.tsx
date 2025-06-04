
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";
import Index from "./pages/Index";

// Lazy loading para páginas não-críticas
import { lazy } from "react";

const BuscadorImoveis = lazy(() => import("./pages/BuscadorImoveis"));
const BuscadorVeiculos = lazy(() => import("./pages/BuscadorVeiculos"));
const FavoritosImoveis = lazy(() => import("./pages/FavoritosImoveis"));
const FavoritosVeiculos = lazy(() => import("./pages/FavoritosVeiculos"));
const Leiloeiros = lazy(() => import("./pages/Leiloeiros"));
const Agenda = lazy(() => import("./pages/Agenda"));
const Perfil = lazy(() => import("./pages/Perfil"));
const Login = lazy(() => import("./pages/auth/Login"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const AuthCallback = lazy(() => import("./pages/auth/AuthCallback"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Componente de loading suave para páginas
const PageLoadingFallback = () => (
  <div className="w-full min-h-screen bg-white flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <LoadingSpinner size="lg" />
      <p className="text-sm text-gray-600">Carregando...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Index sem lazy loading - crítico para SEO e primeira impressão */}
          <Route path="/" element={<Index />} />
          
          {/* Rotas de busca com lazy loading */}
          <Route path="/buscador/imoveis" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <BuscadorImoveis />
            </Suspense>
          } />
          <Route path="/buscador/veiculos" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <BuscadorVeiculos />
            </Suspense>
          } />
          
          {/* Rotas de favoritos com lazy loading */}
          <Route path="/favoritos/imoveis" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <FavoritosImoveis />
            </Suspense>
          } />
          <Route path="/favoritos/veiculos" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <FavoritosVeiculos />
            </Suspense>
          } />
          
          {/* Outras rotas públicas com lazy loading */}
          <Route path="/leiloeiros" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <Leiloeiros />
            </Suspense>
          } />
          <Route path="/agenda" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <Agenda />
            </Suspense>
          } />
          
          {/* Rotas protegidas com lazy loading */}
          <Route 
            path="/perfil" 
            element={
              <ProtectedRoute>
                <Suspense fallback={<PageLoadingFallback />}>
                  <Perfil />
                </Suspense>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <Suspense fallback={<PageLoadingFallback />}>
                  <Admin />
                </Suspense>
              </ProtectedRoute>
            } 
          />
          
          {/* Rotas de autenticação com lazy loading */}
          <Route path="/auth/login" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <Login />
            </Suspense>
          } />
          <Route path="/auth/sign-up" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <SignUp />
            </Suspense>
          } />
          <Route path="/auth/callback" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <AuthCallback />
            </Suspense>
          } />
          
          {/* Rotas de compatibilidade (redirecionamento das antigas) */}
          <Route path="/buscador" element={<Navigate to="/buscador/imoveis" replace />} />
          <Route path="/veiculos" element={<Navigate to="/buscador/veiculos" replace />} />
          <Route path="/imoveis" element={<Navigate to="/buscador/imoveis" replace />} />
          
          {/* Catch-all route com lazy loading */}
          <Route path="*" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
