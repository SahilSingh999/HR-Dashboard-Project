"use client";

import { TimelineEvent } from "@/lib/types";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TimelineProps {
  events: TimelineEvent[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-heading text-xl font-bold">Timeline</h2>
        <div className="bg-secondary/20 px-3 py-1 rounded-full text-xs font-semibold text-muted-foreground">
          {events.length} Events Today
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative flex-1"
      >
        {/* Continuous Vertical Line */}
        <div className="absolute left-[65.5px] sm:left-[93.5px] top-4 bottom-4 w-px bg-border/50" />

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div 
              key={event.id} 
              variants={itemVariants}
              className="relative flex items-start gap-3 sm:gap-6 group"
            >
              {/* Time */}
              <div className="w-[48px] sm:w-[64px] shrink-0 text-right pt-1">
                <span className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {event.time}
                </span>
              </div>

              {/* Timeline Dot */}
              <div className="relative z-10 flex flex-col items-center justify-start pt-2">
                <div className="w-3 h-3 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] group-hover:scale-125 transition-transform duration-300" />
              </div>

              {/* Event Card */}
              <div className="flex-1 bg-card/40 backdrop-blur hover:bg-card/60 transition-colors border rounded-xl p-4 shadow-sm group-hover:shadow-md">
                <h3 className="font-bold text-base mb-1">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                
                {/* Attendees */}
                {event.attendees && event.attendees.length > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {event.attendees.map((attendee, i) => (
                        <div 
                          key={attendee.id}
                          className="relative w-8 h-8 rounded-full border-2 border-background overflow-hidden"
                          style={{ zIndex: event.attendees.length - i }}
                          title={attendee.name}
                        >
                          {/* Fallback to initials if image fails, but here we just use img */}
                          <img 
                            src={attendee.avatarUrl} 
                            alt={attendee.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-2 font-medium">
                      {event.attendees.length} {event.attendees.length === 1 ? 'Attendee' : 'Attendees'}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
