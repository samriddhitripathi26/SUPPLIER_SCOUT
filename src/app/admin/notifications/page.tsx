import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Bell, UserPlus, FileCheck, AlertTriangle } from "lucide-react"

const notifications = [
  {
    icon: UserPlus,
    title: "New Vendor Registered",
    description: "Creative Designs Inc. has joined the platform.",
    time: "15 minutes ago",
    read: false,
  },
  {
    icon: FileCheck,
    title: "Order #ORD004 Verified",
    description: "You have successfully verified an order from ABC Supplies.",
    time: "1 hour ago",
    read: false,
  },
  {
    icon: UserPlus,
    title: "New Supplier Onboarded",
    description: "Quick Components is now active and listing products.",
    time: "3 hours ago",
    read: true,
  },
  {
    icon: AlertTriangle,
    title: "High-Value Order Flagged",
    description: "Order #ORD002 for ₹45,000 requires manual review.",
    time: "1 day ago",
    read: true,
  },
]

export default function AdminNotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Here is a list of your recent notifications.
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
