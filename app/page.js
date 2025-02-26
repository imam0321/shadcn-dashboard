import { Calendar } from "@/components/Cards/Calendar";
import { General } from "@/components/Cards/General";
import { Lines } from "@/components/Cards/Lines";
import { TableComponent } from "@/components/Cards/Table";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <General />
        <div className="grid gap-4">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 h-[300px] overflow-hidden">
        <Lines />
        <Card className="p-1 overflow-y-scroll">
          <CardHeader className="p-1">
            <CardTitle>Order</CardTitle>
            <CardDescription>
              Those are the results of this month Order.
            </CardDescription>
          </CardHeader>
          <TableComponent />
        </Card>
        <Card className="p-1 overflow-y-scroll">
          <CardHeader className="p-1">
            <CardTitle>Order</CardTitle>
            <CardDescription>
              Those are the results of this month Order.
            </CardDescription>
          </CardHeader>
          <TableComponent />
        </Card>
      </div>
    </div>
  );
}
