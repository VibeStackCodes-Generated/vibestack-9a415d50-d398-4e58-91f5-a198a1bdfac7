import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { HourlyForecast } from "@/data/weatherData";
import { TrendingUp } from "lucide-react";

interface Props {
  data: HourlyForecast[];
}

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg px-3 py-2 shadow-xl">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-bold text-primary">{payload[0].value}°F</p>
      </div>
    );
  }
  return null;
}

export function TemperatureChart({ data }: Props) {
  const chartData = data.map(h => ({
    time: h.time,
    temp: h.temp,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      <Card className="glass-card border-border/40">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <TrendingUp size={18} className="text-primary" />
            Temperature Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 22%)" />
                <XAxis
                  dataKey="time"
                  tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }}
                  axisLine={{ stroke: "hsl(217, 33%, 22%)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }}
                  axisLine={false}
                  tickLine={false}
                  domain={['dataMin - 2', 'dataMax + 2']}
                  tickFormatter={(v) => `${v}°`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="temp"
                  stroke="hsl(199, 89%, 48%)"
                  strokeWidth={2.5}
                  fill="url(#tempGradient)"
                  dot={{ r: 3, fill: "hsl(199, 89%, 48%)", strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: "hsl(199, 89%, 48%)", stroke: "hsl(222, 47%, 14%)", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
