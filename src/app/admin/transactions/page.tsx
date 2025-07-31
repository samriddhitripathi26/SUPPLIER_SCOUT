import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TransactionsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>
          Monitor all transactions happening on the platform.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">Transaction monitoring feature coming soon.</p>
        </div>
      </CardContent>
    </Card>
  );
}
