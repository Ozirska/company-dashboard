import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { Company, Security } from "../types/type";

interface CompanyWidgetProps {
  initialTicker: string;
}

export function CompanyWidget({ initialTicker }: CompanyWidgetProps) {
  const [companySelection, setCompanySelection] = useState(initialTicker);
  const [companyData, setCompanyData] = useState<Company | null>(null);
  const [securityData, setSecurityData] = useState<Security | null>(null);
  const [chartData, setChartData] = useState<{ date: string; price: number }[]>(
    []
  );

  useEffect(() => {
    if (!companySelection) return;

    Promise.all([
      fetch("/fake_api/companies-lookup.json").then((res) => res.json()),
      fetch("/fake_api/securities.json").then((res) => res.json()),
    ])
      .then(([companies, securities]) => {
        const cData = companies.find((c: any) => c.ticker === companySelection);

        setCompanyData(cData);

        const sData = securities.find((s: any) => s.company_id === cData.id);

        setSecurityData(sData);

        const mockChart = Array.from({ length: 20 }, (_, i) => ({
          date: `2024-0${i + 1}-01`,
          price: 100 + Math.random() * 50,
        }));
        setChartData(mockChart);
      })
      .catch((err) => console.error(err));
  }, [companySelection]);

  if (!companyData || !securityData) return <div>Can't find data...</div>;

  return (
    <div className="p-4 space-y-4">
      <Dropdown selected={companySelection} onSelect={setCompanySelection} />

      <div className="p-4 bg-blue-100 rounded space-y-1">
        <h2 className="font-bold text-lg">
          {companyData.name} ({companyData.ticker})
        </h2>
        <p className="text-sm text-gray-600">
          {companyData.sector} | {companyData.industry_group}
        </p>
        <p>{companyData.short_description}</p>
        <p className="text-gray-500">CEO: {companyData.ceo}</p>
      </div>

      <div className="p-4 bg-green-100 rounded space-y-1">
        <p>Share Class: {securityData.share_class}</p>
        <p>Exchange: {securityData.stock_exchange_id}</p>
        <p>Currency: {securityData.currency}</p>
        <p>First Stock Price Date: {securityData.first_stock_price}</p>
        <p>Last Stock Price Date: {securityData.last_stock_price}</p>
      </div>

      <div className="p-4 bg-gray-100 rounded h-72" style={{ width: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
