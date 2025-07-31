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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const orders = [
    { id: 'ORD001', vendor: 'ABC Supplies', date: '2023-10-26', amount: '₹15,000', status: 'Processing' },
    { id: 'ORD002', vendor: 'Tech Innovators', date: '2023-10-25', amount: '₹45,000', status: 'Processing' },
    { id: 'ORD003', vendor: 'Creative Designs', date: '2023-10-25', amount: '₹22,500', status: 'Shipped' },
    { id: 'ORD004', vendor: 'Gourmet Kitchen', date: '2023-10-24', amount: '₹8,000', status: 'Processing' },
    { id: 'ORD005', vendor: 'Office Essentials', date: '2023-10-23', amount: '₹12,300', status: 'Delivered' },
    { id: 'ORD006', vendor: 'ABC Supplies', date: '2023-10-22', amount: '₹2,500', status: 'Delivered' },
    { id: 'ORD007', vendor: 'Tech Innovators', date: '2023-10-21', amount: '₹18,000', status: 'Canceled' },
];

export default function SupplierOrdersPage() {
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="shipped">Shipped</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
          <TabsTrigger value="canceled" className="hidden sm:flex">
            Canceled
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Date
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Amount</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              Manage your incoming orders and view their status.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Vendor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Date
                  </TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map(order => (
                    <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.vendor}</TableCell>
                        <TableCell>
                            <Badge variant="outline">{order.status}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{order.date}</TableCell>
                        <TableCell className="text-right">{order.amount}</TableCell>
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
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Mark as Shipped</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                    Cancel Order
                                </DropdownMenuItem>
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
              Showing <strong>1-7</strong> of <strong>32</strong> orders
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
