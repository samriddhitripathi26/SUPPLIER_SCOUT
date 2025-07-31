import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Banknote, Package, Users, CheckCircle, ArrowUpRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

const orders = [
    { id: 'ORD001', vendor: 'Mumbai Chaat Corner', supplier: 'Reliable Parts', date: '2023-10-26', amount: '₹15,000', status: 'Pending Verification' },
    { id: 'ORD002', vendor: 'Delhi Bites', supplier: 'Quick Components', date: '2023-10-25', amount: '₹45,000', status: 'Pending Verification' },
    { id: 'ORD003', vendor: 'Kolkata Rolls', supplier: 'Bulk Fabrics Co.', date: '2023-10-25', amount: '₹22,500', status: 'Verified' },
    { id: 'ORD004', vendor: 'Chennai Express', supplier: 'Fresh Produce Inc.', date: '2023-10-24', amount: '₹8,000', status: 'Pending Verification' },
    { id: 'ORD005', vendor: 'Bangalore Bakes', supplier: 'Stationery World', date: '2023-10-23', amount: '₹12,300', status: 'Verified' },
];

interface StatCardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    description: string;
}

function StatCard({ title, value, icon: Icon, description }: StatCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}


export default function AdminDashboardPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <StatCard 
                    title="Total Revenue" 
                    value="₹1,250,450" 
                    icon={Banknote} 
                    description="+20.1% from last month"
                />
                <StatCard 
                    title="Active Suppliers" 
                    value="230" 
                    icon={Package} 
                    description="+15 since last week"
                />
                <StatCard 
                    title="New Vendors" 
                    value="52" 
                    icon={Users} 
                    description="+40% this month"
                />
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Orders for Verification</CardTitle>
                        <CardDescription>
                            Review and process recent orders from vendors.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <Link href="#">
                            View All
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Vendor</TableHead>
                                <TableHead>Supplier</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead className="text-center">Status</TableHead>
                                <TableHead className="text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium">{order.id}</TableCell>
                                    <TableCell>{order.vendor}</TableCell>
                                    <TableCell>{order.supplier}</TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell className="text-right">{order.amount}</TableCell>
                                    <TableCell className="text-center">
                                        <Badge variant={order.status === 'Verified' ? 'default' : 'secondary'} className={order.status === 'Verified' ? 'bg-green-100 text-green-800' : ''}>
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {order.status === 'Pending Verification' && (
                                            <Button variant="outline" size="sm">
                                                <CheckCircle className="mr-2 h-4 w-4" />
                                                Verify & Process
                                            </Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
