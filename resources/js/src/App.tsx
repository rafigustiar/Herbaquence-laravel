import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/components/CartProvider";
import Layout from "@/components/Layout";

// Import halaman-halaman yang sudah ada
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import OurStory from "./pages/OurStory";
import HealthBenefits from "./pages/HealthBenefits";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import PlaceholderPage from "./pages/PlaceholderPage"; // Ini tidak ada di Routesmu, tapi tetap di-import
import NotFound from "./pages/NotFound";

// *** IMPORT HALAMAN BARU DI SINI ***
import CheckoutConfirmationPage from "./pages/CheckoutConfirmationPage"; // Halaman konfirmasi "Terima Kasih"
import InvoiceViewPage from "./pages/InvoiceViewPage"; // Halaman untuk melihat invoice online (jika diakses dari email)

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/story" element={<OurStory />} />
              <Route path="/benefits" element={<HealthBenefits />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/checkout/confirmation" element={<CheckoutConfirmationPage />} />
              <Route path="/invoice/:orderId" element={<InvoiceViewPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;