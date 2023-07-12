import DashboardCard from "@/components/dashboard/DashboardCard";
import BarChartOverview from "@/components/dashboard/BarChartOverview";
import Card from "@/components/ui/Card";
import Table from "@/components/ui/Table";
import { DollarSign, Users2 } from "lucide-react";
import PieChartOverview from "@/components/dashboard/PieChartOverview";

export default function Home() {
  return (
    <main className="w-full m-8">
      <header className="grid grid-cols-4 gap-4">
        <DashboardCard
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          title="Total Revenue"
          description="+20.1% from last month"
          amount="$45,231.89"
        />
        <DashboardCard
          icon={<Users2 className="h-4 w-4 text-muted-foreground" />}
          title="Total Subscriber"
          description="+20.1% from last month"
          amount="$45,231.89"
        />
        <DashboardCard
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          title="Total Revenue"
          description="+20.1% from last month"
          amount="$45,231.89"
        />
        <DashboardCard
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          title="Total Revenue"
          description="+20.1% from last month"
          amount="$45,231.89"
        />
      </header>

      <section className="my-4 grid grid-cols-3 gap-4">
        {/* <Card className='col-span-2'>
        <h2 className='text-2xl font-bold mb-4'>
          Overview
        </h2>
      <BarChartOverview />
      </Card>
      <Card>
      <h2 className='text-2xl font-bold'>Recent Sales</h2>
        <p className='mb-4'>You made 265 sales this month. </p>
    <PieChartOverview />
      </Card> */}
      </section>
    </main>
  );
}
