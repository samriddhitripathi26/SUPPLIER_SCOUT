import { DashboardLayout } from "@/components/dashboard/layout";
import { CartProvider } from "@/hooks/use-cart";

export default function VendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <DashboardLayout role="vendor">{children}</DashboardLayout>
    </CartProvider>
  );
}
