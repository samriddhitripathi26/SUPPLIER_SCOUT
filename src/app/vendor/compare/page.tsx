"use client";

import Image from "next/image"
import { Star, Plus, Minus, Info, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const suppliers = [
  { id: 1, name: 'Mumbai Fresh Produce', rating: 4.8, address: 'APMC Market, Vashi', price: 30.00, bulkDiscount: '5% off on 50kg+', image: "https://placehold.co/80x80.png", hint: "fresh potatoes" },
  { id: 2, name: 'Delhi Vegetable Co.', rating: 4.5, address: 'Azadpur Mandi, Delhi', price: 32.00, bulkDiscount: '10% off on 100kg+', image: "https://placehold.co/80x80.png", hint: "potato sack" },
  { id: 3, name: 'Pune Farm Goods', rating: 4.6, address: 'Local Market, Pune', price: 28.50, bulkDiscount: 'Free shipping on 25kg+', image: "https://placehold.co/80x80.png", hint: "farm potatoes" },
  { id: 4, name: 'Nagpur Agri Supplies', rating: 4.2, address: 'Central Warehouse, Nagpur', price: 35.00, bulkDiscount: 'None', image: "https://placehold.co/80x80.png", hint: "potato crate" },
]

export default function VendorComparePage() {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const handleQuantityChange = (id: number, value: number) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, value) }));
  };

  const handleAddToCart = (supplier: (typeof suppliers)[0]) => {
    const quantity = quantities[supplier.id] || 1;
    addToCart({
      id: supplier.id,
      name: 'Potatoes (Aloo)',
      supplier: supplier.name,
      price: supplier.price,
      quantity,
      image: supplier.image,
      hint: supplier.hint
    });
    toast({
      title: "Added to cart",
      description: `${quantity}kg of Potatoes from ${supplier.name} added to your cart.`,
    });
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Compare Suppliers for "Potatoes (Aloo)"</h1>
        <p className="text-muted-foreground">Find the best prices and ratings for your city.</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <TooltipProvider>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Supplier</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Price / kg</TableHead>
                  <TableHead>Bulk Deal</TableHead>
                  <TableHead className="text-center">Quantity (kg)</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {suppliers.map(supplier => (
                  <TableRow key={supplier.id}>
                    <TableCell>
                      <div className="font-medium">{supplier.name}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {supplier.address}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-medium">{supplier.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">₹{supplier.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>{supplier.bulkDiscount}</span>
                        {supplier.bulkDiscount !== 'None' && (
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Discount applies at checkout.</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center justify-center gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(supplier.id, (quantities[supplier.id] || 1) - 1)}><Minus className="h-4 w-4" /></Button>
                            <Input 
                              type="number" 
                              value={quantities[supplier.id] || 1} 
                              onChange={(e) => handleQuantityChange(supplier.id, parseInt(e.target.value, 10))}
                              className="h-8 w-16 text-center" 
                            />
                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(supplier.id, (quantities[supplier.id] || 1) + 1)}><Plus className="h-4 w-4" /></Button>
                        </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button onClick={() => handleAddToCart(supplier)}>Add to Cart</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TooltipProvider>
        </CardContent>
      </Card>
    </div>
  )
}
