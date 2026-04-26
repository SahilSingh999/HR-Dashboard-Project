"use client";

import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TimeTrackerSession } from "@/lib/types";

export function CircularTimeTracker({ initialSession }: { initialSession: TimeTrackerSession }) {
  const [isRunning, setIsRunning] = useState(initialSession.isRunning);
  const [time, setTime] = useState(initialSession.hours * 3600 + initialSession.minutes * 60);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => setIsRunning(!isRunning);

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const progress = (time % 3600) / 3600; // Progress based on current hour
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="flex flex-col items-center justify-center py-4 w-full">
      <div className="relative flex items-center justify-center w-64 h-64">
        {/* Background Circle */}
        <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 256 256">
          <circle
            cx="128"
            cy="128"
            r="120"
            className="stroke-secondary fill-transparent"
            strokeWidth="8"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="128"
            cy="128"
            r="120"
            className="stroke-primary fill-transparent stroke-[8px] transition-all duration-300 ease-in-out"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset }}
            initial={{ strokeDashoffset: circumference }}
          />
        </svg>

        <div className="flex flex-col items-center justify-center absolute z-10 space-y-4">
          <div className="text-4xl font-heading font-bold tabular-nums tracking-tight">
            {formatTime(time)}
          </div>
          
          <Button
            size="icon"
            variant={isRunning ? "secondary" : "default"}
            className="rounded-full w-14 h-14 shadow-lg transition-transform hover:scale-105"
            onClick={toggleTimer}
          >
            {isRunning ? (
              <Pause className="w-6 h-6" fill="currentColor" />
            ) : (
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            )}
          </Button>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-muted-foreground font-medium">Daily Goal: 8 Hours</p>
      </div>
    </div>
  );
}
