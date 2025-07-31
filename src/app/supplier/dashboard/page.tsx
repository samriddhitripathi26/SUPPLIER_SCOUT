import Image from "next/image"
import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const products = [
    { id: 'PROD001', name: 'Potatoes (Aloo)', image: 'https://placehold.co/64x64.png', hint: "fresh potatoes", status: 'Active', price: '₹30.00 / kg', stock: '500 kg', category: 'Vegetables' },
    { id: 'PROD002', name: 'Onions (Pyaaz)', image: 'https://placehold.co/64x64.png', hint: "fresh onions", status: 'Active', price: '₹40.00 / kg', stock: '450 kg', category: 'Vegetables' },
    { id: 'PROD003', name: 'Gram Flour (Besan)', image: 'https://placehold.co/64x64.png', hint: "flour bag", status: 'Active', price: '₹80.00 / kg', stock: '250 kg', category: 'Grains & Flour' },
    { id: 'PROD004', name: 'Vegetable Oil', image: 'https://placehold.co/64x64.png', hint: "oil canister", status: 'Archived', price: '₹150.00 / litre', stock: '0', category: 'Oils' },
    { id: 'PROD005', name: 'Chaat Masala Box', image: 'https/placehold.co/64x64.png', hint: "spices box", status: 'Active', price: '₹500.00 / box', stock: '150 boxes', category: 'Spices' },
    { id: 'PROD006', name: 'Pani Puri Pellets', image: 'https/placehold.co/64x64.png', hint: "puri pellets", status: 'Active', price: '₹200.00 / kg', stock: '100 kg', category: 'Snacks' },

];

export default function SupplierProductsPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
            <div>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                Manage your food ingredients and supplies.
                </CardDescription>
            </div>
            <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Product
                </span>
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="hidden md:table-cell">
                Stock
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Category
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map(product => (
                <TableRow key={product.id}>
                    <TableCell className="hidden sm:table-cell">
                        <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={product.image}
                        data-ai-hint={product.hint}
                        width="64"
                        />
                    </TableCell>
                    <TableCell className="font-medium">
                        {product.name}
                    </TableCell>
                    <TableCell>
                        <Badge variant={product.status === 'Active' ? 'outline' : 'secondary'}>{product.status}</Badge>
                    </TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell className="hidden md:table-cell">{product.stock}</TableCell>
                    <TableCell className="hidden md:table-cell">
                        {product.category}
                    </TableCell>
                    <TableCell>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                            >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Archive</DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-6</strong> of <strong>22</strong> products
        </div>
      </CardFooter>
    </Card>
  )
}
