"use client";

import { OnboardingTask, OnboardingStatus } from "@/lib/types";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  CheckCircle2, 
  Circle, 
  Users, 
  CalendarDays, 
  Settings, 
  Target, 
  ShieldCheck,
  type LucideIcon
} from "lucide-react";

interface OnboardingTasksProps {
  tasks: OnboardingTask[];
  status: OnboardingStatus;
  onToggleTask?: (id: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  interview: Users,
  meeting: CalendarDays,
  update: Settings,
  goals: Target,
  policy: ShieldCheck,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export function OnboardingTasks({ tasks, status, onToggleTask }: OnboardingTasksProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header with Progress Ring */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="font-heading text-xl font-bold text-foreground">Onboarding</h2>
          <p className="text-sm text-muted-foreground mt-1">Complete your profile</p>
        </div>
        
        {/* Simple SVG Progress Ring */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
            {/* Background Circle */}
            <path
              className="text-secondary/50"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* Progress Circle */}
            <motion.path
              initial={{ strokeDasharray: "0, 100" }}
              animate={{ strokeDasharray: `${status.overallPercentage}, 100` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-primary"
              strokeWidth="4"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute flex items-center justify-center inset-0 text-[10px] font-bold text-foreground">
            {status.overallPercentage}%
          </div>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar"
      >
        {tasks.map((task) => {
          const Icon = iconMap[task.iconType] || Settings;
          
          return (
            <motion.div 
              key={task.id}
              variants={itemVariants}
              className={cn(
                "group flex items-center gap-4 p-3 rounded-xl transition-all duration-300",
                task.isCompleted 
                  ? "bg-secondary/20 hover:bg-secondary/40" 
                  : "bg-background/40 hover:bg-background/60 shadow-sm border border-border/50"
              )}
            >
              {/* Task Icon/Status */}
              <button 
                onClick={() => onToggleTask?.(task.id)}
                className="shrink-0 transition-transform hover:scale-110 focus:outline-none"
              >
                {task.isCompleted ? (
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                ) : (
                  <Circle className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <h4 className={cn(
                  "font-semibold text-sm truncate transition-colors",
                  task.isCompleted ? "text-muted-foreground line-through decoration-muted-foreground/30" : "text-foreground group-hover:text-primary"
                )}>
                  {task.title}
                </h4>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                  <Icon className="w-3 h-3" />
                  <span>{task.timestamp}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
