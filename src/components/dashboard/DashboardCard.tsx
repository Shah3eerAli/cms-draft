import React, { ReactNode } from 'react';
import Card from '../ui/Card';

type Props = {
  title: string;
  amount: string;
  description: string;
  icon: ReactNode;
};

const DashboardCard = ({ title, amount, description, icon }: Props) => {
  return (
    <Card>
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h1 className="text-base font-medium">{title}</h1>
        {icon}
      </div>
      <div>
        <div className="text-3xl font-bold">{amount}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};

export default DashboardCard;
