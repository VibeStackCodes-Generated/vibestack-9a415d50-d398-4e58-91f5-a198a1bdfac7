import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherIcon } from "./WeatherIcon";
import { ForecastDay } from "@/data/weatherData";
import { CalendarDays, Droplets } from "lucide-react";

interface Props {
  data: ForecastDay[];
}

export function FiveDayForecast({ data }: Props) {
  const maxHigh = Math.max(...data.map(d => d.high));
  const minLow = Math.min(...data.map(d => d.low));
  const range = maxHigh - minLow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="glass-card border-border/40">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <CalendarDays size={18} className="text-primary" />
            5-Day Forecast
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {data.map((day, i) => {
            const leftPercent = ((day.low - minLow) / range) * 100;
            const widthPercent = ((day.high - day.low) / range) * 100;

            return (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`flex items-center gap-3 py-3 px-3 rounded-xl transition-colors hover:bg-secondary/40 ${
                  i === 0 ? "bg-primary/10 border border-primary/20" : ""
                }`}
              >
                {/* Day name */}
                <div className="w-12 shrink-0">
                  <span className={`text-sm font-semibold ${i === 0 ? "text-primary" : ""}`}>
                    {day.day}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-8 shrink-0 flex justify-center">
                  <WeatherIcon condition={day.conditionIcon} size={22} animate={false} />
                </div>

                {/* Precipitation */}
                <div className="w-10 shrink-0 flex items-center gap-0.5">
                  {day.precipitation > 0 ? (
                    <>
                      <Droplets size={12} className="text-blue-400" />
                      <span className="text-xs text-blue-400">{day.precipitation}%</span>
                    </>
                  ) : (
                    <span className="text-xs text-muted-foreground/40">—</span>
                  )}
                </div>

                {/* Low temp */}
                <span className="text-sm text-muted-foreground w-8 text-right shrink-0">{day.low}°</span>

                {/* Temperature bar */}
                <div className="flex-1 h-1.5 bg-secondary/60 rounded-full relative mx-2 min-w-[80px]">
                  <div
                    className="absolute h-full rounded-full"
                    style={{
                      left: `${leftPercent}%`,
                      width: `${Math.max(widthPercent, 8)}%`,
                      background: `linear-gradient(90deg, hsl(210 70% 55%), hsl(30 80% 55%))`,
                    }}
                  />
                </div>

                {/* High temp */}
                <span className="text-sm font-semibold w-8 text-right shrink-0">{day.high}°</span>
              </motion.div>
            );
          })}
        </CardContent>
      </Card>
    </motion.div>
  );
}
