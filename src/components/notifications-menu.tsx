"use client"

import { Bell } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

export function NotificationsMenu({ role }: { role: "admin" | "vendor" | "supplier" }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
            <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent" />
            <Bell className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="grid gap-2">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Notifications</h4>
            <p className="text-sm text-muted-foreground">
              You have 3 new messages.
            </p>
          </div>
          <Separator />
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-start gap-3 rounded-lg p-2 hover:bg-muted/50">
                <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                <div className="grid gap-1">
                    <p className="text-sm font-medium">New Order Received</p>
                    <p className="text-sm text-muted-foreground">Order #ORD004 has been placed by Creative Designs.</p>
                </div>
            </div>
             <div className="flex items-start gap-3 rounded-lg p-2 hover:bg-muted/50">
                <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                <div className="grid gap-1">
                    <p className="text-sm font-medium">Order Verified</p>
                    <p className="text-sm text-muted-foreground">Your order #ORD003 has been verified by admin.</p>
                </div>
            </div>
             <div className="flex items-start gap-3 rounded-lg p-2 hover:bg-muted/50">
                 <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                <div className="grid gap-1">
                    <p className="text-sm font-medium">Supplier Update</p>
                    <p className="text-sm text-muted-foreground">Reliable Parts has updated their bulk prices.</p>
                </div>
            </div>
          </div>
          <Separator />
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/${role}/notifications`}>View all notifications</Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
