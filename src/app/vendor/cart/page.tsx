"use client";

import Image from "next/image"
import Link from "next/link"
import { Plus, Minus, Trash2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

export default function VendorCartPage() {
    const { items, updateQuantity, removeFromCart, clearCart } = useCart();
    const { toast } = useToast();

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    const handlePlaceOrder = () => {
      if (items.length === 0) {
        toast({
          variant: "destructive",
          title: "Your cart is empty",
          description: "Add items to your cart before placing an order.",
        });
        return;
      }

      // In a real app, this would trigger an API call to the backend
      // and potentially a payment gateway.
      console.log("Placing order with items:", items);
      
      clearCart();
      
      toast({
        title: "Order Placed!",
        description: "Your order has been successfully placed.",
      });
    }

  return (
    <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Your Cart</CardTitle>
                    <CardDescription>Review and manage items for your bulk order.</CardDescription>
                </CardHeader>
                <CardContent>
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg text-center">
                            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
                            <h3 className="mt-4 text-lg font-semibold">Your cart is empty</h3>
                            <p className="mt-2 text-sm text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
                            <Button asChild className="mt-4">
                                <Link href="/vendor/dashboard">Start Shopping</Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map(item => (
                                <div key={item.id} className="flex items-center gap-4">
                                    <Image src={item.image} alt={item.name} data-ai-hint={item.hint} width={80} height={80} className="rounded-md object-cover" />
                                    <div className="flex-1">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-muted-foreground">from {item.supplier}</p>
                                        <p className="text-sm font-bold text-primary">₹{item.price.toFixed(2)} / unit</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus className="h-4 w-4" /></Button>
                                        <Input type="number" value={item.quantity} className="h-8 w-14 text-center" readOnly/>
                                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus className="h-4 w-4" /></Button>
                                    </div>
                                    <p className="font-semibold w-24 text-right">₹{(item.price * item.quantity).toFixed(2)}</p>
                                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}><Trash2 className="h-4 w-4" /></Button>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Taxes (18%)</span>
                        <span>₹{tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                     <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Delivery Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" placeholder="123, Industrial Area" />
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="Mumbai" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="pincode">Pincode</Label>
                            <Input id="pincode" placeholder="400072" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="instructions">Special Instructions</Label>
                        <Textarea id="instructions" placeholder="e.g., Deliver to warehouse gate 2" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full bg-accent hover:bg-accent/90" onClick={handlePlaceOrder}>Place Order</Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}
