
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./hooks/useCart";
import { FavoritesProvider } from "./hooks/useFavorites";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MenCollection from "./pages/MenCollection";
import WomenCollection from "./pages/WomenCollection";
import ChildrenCollection from "./pages/ChildrenCollection";
import ProductDetail from "./pages/ProductDetail";
import UserAccount from "./pages/UserAccount";
import SeasonalWear from "./pages/SeasonalWear";
import OccasionWear from "./pages/OccasionWear";
import NewArrivals from "./pages/NewArrivals";
import VirtualTryOn from "./pages/VirtualTryOn";
import AboutUs from "./pages/AboutUs";
import WeddingWear from "./pages/WeddingWear";
import PartyWear from "./pages/PartyWear";
import SpringCollection from "./pages/SpringCollection";
import SummerCollection from "./pages/SummerCollection";
import SizeGuide from "./pages/SizeGuide";
import PersonalStyling from "./pages/PersonalStyling";
import BulkOrders from "./pages/BulkOrders";
import GiftCards from "./pages/GiftCards";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <FavoritesProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/men" element={<MenCollection />} />
                <Route path="/women" element={<WomenCollection />} />
                <Route path="/children" element={<ChildrenCollection />} />
                <Route path="/seasonal" element={<SeasonalWear />} />
                <Route path="/occasions" element={<OccasionWear />} />
                <Route path="/new-arrivals" element={<NewArrivals />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/account" element={<UserAccount />} />
                <Route path="/virtual-try-on" element={<VirtualTryOn />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/wedding-wear" element={<WeddingWear />} />
                <Route path="/party-wear" element={<PartyWear />} />
                <Route path="/spring-collection" element={<SpringCollection />} />
                <Route path="/summer-collection" element={<SummerCollection />} />
                
                {/* Service Pages */}
                <Route path="/size-guide" element={<SizeGuide />} />
                <Route path="/personal-styling" element={<PersonalStyling />} />
                <Route path="/bulk-orders" element={<BulkOrders />} />
                <Route path="/gift-cards" element={<GiftCards />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
                
                {/* Placeholder routes for remaining footer pages */}
                <Route path="/custom-design" element={<NotFound />} />
                <Route path="/shipping" element={<NotFound />} />
                <Route path="/returns" element={<NotFound />} />
                <Route path="/size-exchange" element={<NotFound />} />
                <Route path="/faqs" element={<NotFound />} />
                <Route path="/track-order" element={<NotFound />} />
                <Route path="/careers" element={<NotFound />} />
                <Route path="/sustainability" element={<NotFound />} />
                <Route path="/press" element={<NotFound />} />
                <Route path="/partnerships" element={<NotFound />} />
                <Route path="/blog" element={<NotFound />} />
                <Route path="/privacy" element={<NotFound />} />
                <Route path="/terms" element={<NotFound />} />
                <Route path="/cookies" element={<NotFound />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ScrollToTop>
          </BrowserRouter>
        </FavoritesProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
