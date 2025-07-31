import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  { name: "Vegetables", image: "./vendor/dashboard/vegetable.jpeg", hint: "fresh vegetables" },
  { name: "Spices & Masalas", image: "./vendor/dashboard/spices.jpeg", hint: "assorted spices" },
  { name: "Grains & Flour", image: "./vendor/dashboard/grains_and_flour.jpeg", hint: "sacks of grain" },
  { name: "Oils & Ghee", image: "./vendor/dashboard/oil.jpeg", hint: "cooking oil bottles" },
  { name: "Dairy & Paneer", image: "./vendor/dashboard/paneer.jpeg", hint: "cheese blocks" },
  { name: "Snacks & Pellets", image: "./vendor/dashboard/snacks.jpeg", hint: "puri pellets" },
  { name: "Chutneys & Sauces", image: "./vendor/dashboard/chutney.jpeg", hint: "chutney bowls" },
  { name: "Disposables", image: "./vendor/dashboard/disposables.jpeg", hint: "paper plates cups" },
];

export default function VendorDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Find Ingredients for Your Stall</h1>
        <p className="text-muted-foreground">Search for ingredients and compare suppliers in your city.</p>
      </div>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for items like 'potatoes', 'chaat masala', 'pani puri'..."
          className="w-full rounded-full bg-card pl-12 h-14 text-base"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Browse by Category</CardTitle>
          <CardDescription>Explore ingredients from our wide range of categories.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <Link href="/vendor/compare" key={category.name}>
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-primary/50 transition-shadow duration-300">
                  <Image
                    src={category.image}
                    alt={category.hint} // Use hint for more descriptive alt text
                    data-ai-hint={category.hint}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
