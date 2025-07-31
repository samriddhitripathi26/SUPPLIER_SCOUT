import { DashboardLayout } from "@/components/dashboard/layout";

export default function SupplierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="supplier">{children}</DashboardLayout>;
}
