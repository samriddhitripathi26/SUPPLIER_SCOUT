import { DashboardLayout } from "@/components/dashboard/layout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="admin">{children}</DashboardLayout>;
}
