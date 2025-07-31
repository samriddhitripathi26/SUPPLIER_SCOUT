"use client";

import Link from "next/link";
import {
  Banknote,
  LayoutDashboard,
  Package,
  Search,
  ShoppingCart,
  Users,
  PackageSearch,
  History
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
  SidebarMenuBadge,
} from "@/components/ui/sidebar";
import { UserNav } from "@/components/user-nav";
import { usePathname } from "next/navigation";
import { NotificationsMenu } from "../notifications-menu";
import { useCart } from "@/hooks/use-cart";

type Role = "admin" | "supplier" | "vendor";

function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <PackageSearch className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold tracking-tight text-foreground">Supplier Scout</span>
    </div>
  );
}

const navLinks: Record<Role, { href: string; label: string; icon: React.ElementType, badge?: () => number | null  }> = {
  admin: [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/transactions", label: "Transactions", icon: Banknote },
  ],
  supplier: [
    { href: "/supplier/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/supplier/products", label: "Products", icon: Package },
    { href: "/supplier/orders", label: "Orders", icon: ShoppingCart },
  ],
  vendor: [
    { href: "/vendor/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/vendor/compare", label: "Compare", icon: Search },
    { href: "/vendor/cart", label: "Cart", icon: ShoppingCart, badge: () => {
      const { items } = useCart();
      return items.length > 0 ? items.length : null;
    }},
    { href: "/vendor/orders", label: "My Orders", icon: History },
  ],
};

export function DashboardLayout({ children, role }: { children: React.ReactNode; role: Role }) {
  const pathname = usePathname();
  const links = navLinks[role];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {links.map((link) => {
                const BadgeContent = link.badge ? link.badge() : null;
                return (
                  <SidebarMenuItem key={link.href}>
                    <Link href={link.href}>
                      <SidebarMenuButton isActive={pathname.startsWith(link.href)}>
                        <link.icon className="h-4 w-4" />
                        {link.label}
                        {BadgeContent !== null && BadgeContent > 0 && (
                          <SidebarMenuBadge>{BadgeContent}</SidebarMenuBadge>
                        )}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            {/* Can add elements to footer here */}
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
            <SidebarTrigger className="md:hidden" />
            <div className="w-full flex-1">
              {/* Can add a global search here if needed */}
            </div>
            <NotificationsMenu role={role} />
            <UserNav />
          </header>
          <main className="flex-1 p-4 sm:p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
