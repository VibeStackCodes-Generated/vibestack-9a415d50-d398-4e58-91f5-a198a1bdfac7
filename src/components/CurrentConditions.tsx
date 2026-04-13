import { motion } from "framer-motion";
import { MapPin, ArrowUp, ArrowDown, Clock } from "lucide-react";
import { WeatherIcon } from "./WeatherIcon";
import { CurrentWeather } from "@/data/weatherData";

interface Props {
  data: CurrentWeather;
}

export function CurrentConditions({ data }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="weather-gradient rounded-2xl p-6 md:p-8 border border-border/40"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left: Location & Temperature */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <MapPin size={16} />
            <span className="text-sm font-medium">{data.city}, {data.region}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground/60 mb-4">
            <Clock size={14} />
            <span className="text-xs">Updated {data.lastUpdated}</span>
          </div>

          <div className="flex items-start gap-4">
            <div>
              <div className="text-8xl md:text-9xl font-extralight tracking-tighter temp-gradient leading-none">
                {data.temperature}°
              </div>
              <p className="text-lg text-foreground/80 mt-2 font-medium">{data.condition}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1 text-sm">
              <ArrowUp size={14} className="text-orange-400" />
              <span className="text-foreground/70">{data.high}°</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <ArrowDown size={14} className="text-blue-400" />
              <span className="text-foreground/70">{data.low}°</span>
            </div>
            <span className="text-sm text-muted-foreground">Feels like {data.feelsLike}°</span>
          </div>
        </div>

        {/* Right: Large Weather Icon */}
        <div className="flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <WeatherIcon condition={data.conditionIcon} size={120} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
