import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, Wind, Moon, CloudSun, CloudMoon, Snowflake, CloudFog } from "lucide-react";
import { motion } from "framer-motion";

interface WeatherIconProps {
  condition: string;
  size?: number;
  className?: string;
  animate?: boolean;
}

export function WeatherIcon({ condition, size = 24, className = "", animate = true }: WeatherIconProps) {
  const iconProps = { size, className };

  const wrapper = (children: React.ReactNode, color: string) => {
    if (!animate) return <span className={color}>{children}</span>;
    return (
      <motion.span
        className={color}
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
    );
  };

  switch (condition) {
    case "sunny":
      return wrapper(
        <motion.span animate={animate ? { rotate: 360 } : {}} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
          <Sun {...iconProps} />
        </motion.span>,
        "text-amber-400"
      );
    case "clear-night":
      return wrapper(<Moon {...iconProps} />, "text-indigo-300");
    case "partly-cloudy":
      return wrapper(<CloudSun {...iconProps} />, "text-sky-300");
    case "partly-cloudy-night":
      return wrapper(<CloudMoon {...iconProps} />, "text-indigo-300");
    case "cloudy":
      return wrapper(<Cloud {...iconProps} />, "text-slate-400");
    case "rainy":
      return wrapper(<CloudRain {...iconProps} />, "text-blue-400");
    case "drizzle":
      return wrapper(<CloudDrizzle {...iconProps} />, "text-blue-300");
    case "stormy":
      return wrapper(<CloudLightning {...iconProps} />, "text-purple-400");
    case "snowy":
      return wrapper(<Snowflake {...iconProps} />, "text-sky-200");
    case "foggy":
      return wrapper(<CloudFog {...iconProps} />, "text-slate-400");
    case "windy":
      return wrapper(<Wind {...iconProps} />, "text-teal-300");
    default:
      return wrapper(<Sun {...iconProps} />, "text-amber-400");
  }
}
