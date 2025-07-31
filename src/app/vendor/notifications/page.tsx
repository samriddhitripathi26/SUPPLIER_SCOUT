import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Truck, Package, Tag } from "lucide-react"

const notifications = [
  {
    icon: CheckCircle,
    title: "Order Verified",
    description: "Your order #ORD003 has been verified by the admin and sent to the supplier.",
    time: "45 minutes ago",
    read: false,
  },
  {
    icon: Truck,
    title: "Order Shipped",
    description: "Your order #ORD001 from Reliable Parts has been shipped.",
    time: "8 hours ago",
    read: false,
  },
  {
    icon: Tag,
    title: "Price Drop Alert",
    description: "The price for 'Safety Helmets' from SecureGear Co. has dropped by 5%.",
    time: "1 day ago",
    read: true,
  },
  {
    icon: Package,
    title: "New Product Available",
    description: "Quick Components just listed 'High-Capacity Fuses'.",
    time: "3 days ago",
    read: true,
  },
]

export default function VendorNotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            All your important updates in one place.
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
