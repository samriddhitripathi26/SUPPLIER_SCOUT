import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UtensilsCrossed } from "lucide-react";


export default function RegisterPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
             <div className="flex justify-center items-center gap-2 mb-4">
                <UtensilsCrossed className="h-7 w-7 text-primary" />
                <span className="text-2xl font-bold tracking-tight text-foreground font-headline">Supplier Scout</span>
            </div>
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Create your account to get started
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Acme Inc." required />
            </div>
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
                <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">I am a</Label>
              <Select defaultValue="vendor">
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vendor">Vendor</SelectItem>
                  <SelectItem value="supplier">Supplier</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
       <div className="hidden bg-muted lg:block relative">
        <Image
            src="https://wallpaperaccess.com/full/2338249.jpg"
            alt="Image"
            width="1080"
            height="1920"
            data-ai-hint="modern factory"
            className="h-full w-full object-cover dark:brightness-[0.2]"
        />
         <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-gradient-to-t from-black/80 to-transparent text-white">
            <div className="max-w-md text-center">
                <h2 className="text-4xl font-bold font-headline">Join a Network of Excellence</h2>
                <p className="mt-4 text-lg">
                Become part of a thriving ecosystem of vendors and suppliers. Supplier Scout empowers your business with the tools and connections you need to succeed in a competitive market.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
