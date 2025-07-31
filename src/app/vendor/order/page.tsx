import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const orders = [
    { id: 'ORD003', supplier: 'Bulk Fabrics Co.', date: '2023-10-25', amount: '₹22,500', status: 'Verified' },
    { id: 'ORD001', supplier: 'Reliable Parts', date: '2023-10-26', amount: '₹15,000', status: 'Shipped' },
    { id: 'ORD008', supplier: 'Stationery World', date: '2023-10-22', amount: '₹7,800', status: 'Delivered' },
    { id: 'ORD010', supplier: 'Fresh Produce Inc.', date: '2023-10-21', amount: '₹11,200', status: 'Delivered' },
    { id: 'ORD012', supplier: 'Quick Components', date: '2023-10-20', amount: '₹33,000', status: 'Pending Verification' },
];

export default function VendorOrdersPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>My Orders</CardTitle>
                <CardDescription>Track the status of your past and current orders.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Supplier</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>{order.supplier}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{order.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">{order.amount}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>View Order Details</DropdownMenuItem>
                                            <DropdownMenuItem>Track Shipment</DropdownMenuItem>
                                            <DropdownMenuItem>Request Return</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
