import { motion } from "framer-motion";
import { RefreshCw, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CurrentConditions } from "@/components/CurrentConditions";
import { HourlyForecast } from "@/components/HourlyForecast";
import { FiveDayForecast } from "@/components/FiveDayForecast";
import { DetailsGrid } from "@/components/DetailsGrid";
import { TemperatureChart } from "@/components/TemperatureChart";
import { currentWeather, forecast, hourlyForecast } from "@/data/weatherData";
import { useState } from "react";
import { toast } from "sonner";

export default function Index() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success("Weather data updated", {
        description: "Showing latest conditions for San Francisco",
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-chart-4/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-6 md:py-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
              <span className="temp-gradient">WeatherPulse</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
              <MapPin size={13} />
              San Francisco, California
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleRefresh}
              className="border-border/60 hover:bg-secondary/60"
            >
              <RefreshCw size={16} className={isRefreshing ? "animate-spin" : ""} />
            </Button>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Current Conditions */}
          <CurrentConditions data={currentWeather} />

          {/* Hourly Forecast */}
          <HourlyForecast data={hourlyForecast} />

          {/* Temperature Chart */}
          <TemperatureChart data={hourlyForecast} />

          {/* 5-Day Forecast */}
          <FiveDayForecast data={forecast} />

          {/* Details Grid */}
          <DetailsGrid data={currentWeather} />
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pb-6 text-center text-xs text-muted-foreground/50"
        >
          WeatherPulse Dashboard · Data simulated for demonstration
        </motion.footer>
      </div>
    </div>
  );
}
