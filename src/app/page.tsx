
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UtensilsCrossed } from "lucide-react";

export default function LoginPage() {
  const [role, setRole] = useState("vendor");
  const router = useRouter();

  const handleLogin = () => {
    // In a real app, you'd perform authentication here.
    // For this prototype, we'll just redirect based on the selected role.
    router.push(`/${role}/dashboard`);
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
             <div className="flex justify-center items-center gap-2 mb-4">
                <UtensilsCrossed className="h-7 w-7 text-primary" />
                <span className="text-2xl font-bold tracking-tight text-foreground font-headline">Supplier Scout</span>
            </div>
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vendor">Vendor</SelectItem>
                  <SelectItem value="supplier">Supplier</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleLogin} type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <Image
            src="https://www.freepik.com/free-photo/little-toy-shopping-trolley_3242558.htm#fromView=search&page=1&position=11&uuid=a8fcc83a-5bd1-41d4-b7c8-18219811f125&query=1080+X+1920+supplier+cart+image"
            alt="Image"
            width="1080"
            height="1920"
            data-ai-hint="food stall night"
            className="h-full w-full object-cover dark:brightness-[0.2]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-gradient-to-t from-black/80 to-transparent text-white">
            <div className="max-w-md text-center">
                <h2 className="text-4xl font-bold font-headline">Your One-Stop Shop for Street Food Supplies</h2>
                <p className="mt-4 text-lg">
                Supplier Scout connects street food vendors with the best local suppliers. Find fresh ingredients, compare prices, and get everything you need delivered right to your stall.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
