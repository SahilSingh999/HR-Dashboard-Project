"use client";

import { WeeklyProgressData } from "@/lib/types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WeeklyProgressProps {
  data: WeeklyProgressData;
}

export function WeeklyProgress({ data }: WeeklyProgressProps) {
  // Find the maximum hours to scale the bars appropriately
  // Default to 10 if max is 0 to avoid division by zero
  const maxHours = Math.max(...data.days.map((d) => d.hours), 10);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-heading text-xl font-bold">Weekly Progress</h2>
        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
          {data.totalHours} hrs
        </div>
      </div>

      <div className="flex-1 flex items-end justify-between gap-2 mt-auto">
        {data.days.map((day, index) => {
          const heightPercentage = (day.hours / maxHours) * 100;
          
          return (
            <div key={index} className="flex flex-col items-center gap-3 w-full group">
              <div className="w-full relative flex items-end justify-center h-32 rounded-lg bg-secondary/20">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${heightPercentage}%` }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1, 
                    ease: [0.25, 0.4, 0.25, 1] 
                  }}
                  className={cn(
                    "w-full absolute bottom-0 rounded-lg transition-colors duration-300",
                    day.isCurrentDay 
                      ? "bg-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]" 
                      : "bg-primary/20 group-hover:bg-primary/40"
                  )}
                />
                
                {/* Tooltip on hover */}
                <div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-popover text-popover-foreground text-xs py-1 px-2 rounded shadow-md transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap border">
                  {day.hours} hrs
                </div>
              </div>
              <span 
                className={cn(
                  "text-sm font-medium transition-colors",
                  day.isCurrentDay ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {day.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
