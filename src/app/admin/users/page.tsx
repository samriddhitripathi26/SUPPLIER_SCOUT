import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function UsersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
        <CardDescription>
          Manage vendors, suppliers, and other admins.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">User management feature coming soon.</p>
        </div>
      </CardContent>
    </Card>
  );
}
