import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Wind, Sun, Eye, Gauge, Thermometer, Sunrise, Sunset, CloudRain } from "lucide-react";
import { CurrentWeather } from "@/data/weatherData";

interface Props {
  data: CurrentWeather;
}

interface DetailCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtitle?: string;
  index: number;
}

function DetailCard({ icon, label, value, subtitle, index }: DetailCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
    >
      <Card className="glass-card border-border/40 hover:border-primary/30 transition-all duration-300 group">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-muted-foreground group-hover:text-primary transition-colors">
              {icon}
            </div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function DetailsGrid({ data }: Props) {
  const getUVLevel = (uv: number) => {
    if (uv <= 2) return "Low";
    if (uv <= 5) return "Moderate";
    if (uv <= 7) return "High";
    if (uv <= 10) return "Very High";
    return "Extreme";
  };

  const details = [
    {
      icon: <Droplets size={18} />,
      label: "Humidity",
      value: `${data.humidity}%`,
      subtitle: `Dew point: ${data.dewPoint}°F`,
    },
    {
      icon: <Wind size={18} />,
      label: "Wind",
      value: `${data.windSpeed} mph`,
      subtitle: `Direction: ${data.windDirection}`,
    },
    {
      icon: <Sun size={18} />,
      label: "UV Index",
      value: `${data.uvIndex}`,
      subtitle: getUVLevel(data.uvIndex),
    },
    {
      icon: <Eye size={18} />,
      label: "Visibility",
      value: `${data.visibility} mi`,
      subtitle: "Clear conditions",
    },
    {
      icon: <Gauge size={18} />,
      label: "Pressure",
      value: `${data.pressure} in`,
      subtitle: "Steady",
    },
    {
      icon: <Thermometer size={18} />,
      label: "Feels Like",
      value: `${data.feelsLike}°F`,
      subtitle: "Slightly cooler due to wind",
    },
    {
      icon: <Sunrise size={18} />,
      label: "Sunrise",
      value: data.sunrise,
      subtitle: "Golden hour at 6:55 AM",
    },
    {
      icon: <Sunset size={18} />,
      label: "Sunset",
      value: data.sunset,
      subtitle: "Golden hour at 7:42 PM",
    },
  ];

  return (
    <div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-base font-semibold mb-4 flex items-center gap-2"
      >
        <CloudRain size={18} className="text-primary" />
        Weather Details
      </motion.h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {details.map((detail, i) => (
          <DetailCard key={detail.label} {...detail} index={i} />
        ))}
      </div>
    </div>
  );
}
