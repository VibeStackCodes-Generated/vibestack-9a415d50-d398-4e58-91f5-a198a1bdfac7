import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { WeatherIcon } from "./WeatherIcon";
import { HourlyForecast as HourlyData } from "@/data/weatherData";
import { Clock } from "lucide-react";

interface Props {
  data: HourlyData[];
}

export function HourlyForecast({ data }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Card className="glass-card border-border/40">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <Clock size={18} className="text-primary" />
            Hourly Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full">
            <div className="flex gap-3 pb-2">
              {data.map((hour, i) => (
                <motion.div
                  key={hour.time}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xl min-w-[72px] transition-colors ${
                    i === 0 ? "bg-primary/15 border border-primary/30" : "hover:bg-secondary/50"
                  }`}
                >
                  <span className={`text-xs font-medium ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
                    {hour.time}
                  </span>
                  <WeatherIcon condition={hour.conditionIcon} size={22} animate={false} />
                  <span className="text-sm font-semibold">{hour.temp}°</span>
                  {hour.precipitation > 0 && (
                    <span className="text-[10px] text-blue-400">{hour.precipitation}%</span>
                  )}
                </motion.div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>
    </motion.div>
  );
}
