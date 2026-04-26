"use client";

import { useState, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { TopMetricsRow } from "@/components/top-metrics-row";
import { CircularTimeTracker } from "@/components/circular-time-tracker";
import { WeeklyProgress } from "@/components/weekly-progress";
import { Timeline } from "@/components/timeline";
import { UserProfile } from "@/components/user-profile";
import { OnboardingTasks } from "@/components/onboarding-tasks";
import { 
  mockMetricsSummary, 
  initialTimeTrackerSession, 
  mockWeeklyProgress, 
  mockTimelineEvents, 
  mockUserProfile, 
  mockOnboardingTasks 
} from "@/lib/mock-data";

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Home() {
  const [tasks, setTasks] = useState(mockOnboardingTasks);

  const handleToggleTask = (id: string) => {
    setTasks(current => current.map(t => 
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    ));
  };

  const onboardingStatus = useMemo(() => {
    const completed = tasks.filter(t => t.isCompleted).length;
    const total = tasks.length;
    const overallPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return {
      totalTasks: total,
      completedTasks: completed,
      overallPercentage,
      taskPercentage: overallPercentage,
      reviewPercentage: 0,
      emptyPercentage: 100 - overallPercentage
    };
  }, [tasks]);

  // Dynamically shift Output vs Project Time based on onboarding completion
  const dynamicMetrics = useMemo(() => {
    const baseOutput = 10;
    const baseProjectTime = 60;
    const bonus = onboardingStatus.completedTasks * 3; 
    
    return {
      ...mockMetricsSummary,
      outputPercentage: baseOutput + bonus,
      projectTimePercentage: baseProjectTime - bonus,
    };
  }, [onboardingStatus.completedTasks]);

  // Dynamically adjust total hours in weekly progress
  const dynamicWeeklyProgress = useMemo(() => {
    return {
      ...mockWeeklyProgress,
      totalHours: mockWeeklyProgress.totalHours + (onboardingStatus.completedTasks * 1.5)
    };
  }, [onboardingStatus.completedTasks]);

  const sectionClass = "bg-card/80 backdrop-blur rounded-[2rem] border border-border hover:border-gray-400 dark:hover:border-primary transition-all duration-300 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]";

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Background Gradient Effect */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      >
        {/* Main Content Area */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          <motion.section variants={itemVariants} className={sectionClass}>
            <h2 className="font-heading text-xl font-bold mb-6">Overview</h2>
            <TopMetricsRow data={dynamicMetrics} />
          </motion.section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <motion.section variants={itemVariants} className={`${sectionClass} min-h-[300px] flex flex-col`}>
               <h2 className="font-heading text-xl font-bold mb-4">Time Tracker</h2>
               <div className="flex-1 flex items-center justify-center">
                 <CircularTimeTracker initialSession={initialTimeTrackerSession} />
               </div>
             </motion.section>
             <motion.section variants={itemVariants} className={`${sectionClass} min-h-[300px]`}>
               <WeeklyProgress data={dynamicWeeklyProgress} />
             </motion.section>
          </div>
          
          <motion.section variants={itemVariants} className={`${sectionClass} min-h-[300px] overflow-hidden`}>
             <Timeline events={mockTimelineEvents} />
          </motion.section>
        </div>
        
        {/* Sidebar Area */}
        <div className="col-span-1 lg:col-span-4 space-y-6">
           <motion.section variants={itemVariants} className={`${sectionClass} min-h-[250px]`}>
             <UserProfile profile={mockUserProfile} />
           </motion.section>
           
           <motion.section variants={itemVariants} className={`${sectionClass} min-h-[300px]`}>
             <OnboardingTasks 
                tasks={tasks} 
                status={onboardingStatus} 
                onToggleTask={handleToggleTask} 
             />
           </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
