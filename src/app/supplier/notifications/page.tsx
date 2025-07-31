import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Banknote, MessageSquare, Package } from "lucide-react"

const notifications = [
  {
    icon: ShoppingCart,
    title: "New Order Received (#ORD015)",
    description: "An order for ₹8,400 was placed by Tech Innovators.",
    time: "5 minutes ago",
    read: false,
  },
  {
    icon: Banknote,
    title: "Payment Received",
    description: "Payment for order #ORD011 has been successfully processed.",
    time: "2 hours ago",
    read: false,
  },
  {
    icon: MessageSquare,
    title: "New Product Inquiry",
    description: "A vendor asked a question about 'High-Tensile Wires'.",
    time: "1 day ago",
    read: true,
  },
  {
    icon: Package,
    title: "Low Stock Warning",
    description: "Your stock for 'Safety Helmets' is running low.",
    time: "2 days ago",
    read: true,
  },
]

export default function SupplierNotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Stay updated with your latest activities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div key={index}>
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <notification.icon className="h-5 w-5 mt-1 text-muted-foreground" />
                    <div className="flex-1">
                        <p className={`font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>{notification.title}</p>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">{notification.time}</div>
                    {!notification.read && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                </div>
                {index < notifications.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
