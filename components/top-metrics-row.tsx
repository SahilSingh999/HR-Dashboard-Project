"use client";

import { TopMetricsSummary } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function TopMetricsRow({ data }: { data: TopMetricsSummary }) {
  // Use exact values since they sum up to 100% in our mock data
  const segments = [
    { 
      label: "Interviews", 
      value: data.interviewsPercentage,
      className: "bg-foreground text-background border-transparent shadow-sm", // Dark pill
    },
    { 
      label: "Hired", 
      value: data.hiredPercentage,
      className: "bg-primary text-primary-foreground border-transparent shadow-sm", // Yellow pill
    },
    { 
      label: "Project time", 
      value: data.projectTimePercentage,
      // Striped pattern
      className: "striped-bg text-foreground border-transparent relative overflow-hidden shadow-inner",
    },
    { 
      label: "Output", 
      value: data.outputPercentage,
      className: "bg-transparent text-foreground border-border border shadow-sm", // Outlined pill
    },
  ];

  const stats = [
    { label: "Total employees", value: data.totalEmployees },
    { label: "Total hirings", value: data.totalHirings },
    { label: "Total projects", value: data.totalProjects },
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-10 items-end justify-between w-full">
      {/* Segmented Progress Bar Section */}
      <div className="flex-1 w-full pt-2">
        {/* Labels Row */}
        <div className="flex w-full gap-2 mb-3 px-1">
          {segments.map((segment, i) => (
            <div key={`label-${i}`} style={{ width: `${segment.value}%` }} className="flex-shrink-0">
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {segment.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Pills Row */}
        <div className="flex w-full gap-2">
          {segments.map((segment, i) => (
            <motion.div 
              key={`bar-${i}`}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: `${segment.value}%`, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
              className={cn(
                "h-12 flex items-center px-4 rounded-full text-sm font-semibold transition-all hover:brightness-105",
                segment.className
              )}
            >
              <span className="relative z-10">{segment.value}%</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Divider */}
      <div className="hidden xl:block w-px h-16 bg-border mx-2" />
      
      {/* Stats Section */}
      <div className="flex gap-8 w-full xl:w-auto justify-between xl:justify-end pb-1">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center xl:items-end">
            <span className="text-3xl lg:text-4xl font-heading font-bold">{stat.value}</span>
            <span className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
