"use client";

import { UserProfile as UserProfileType } from "@/lib/types";
import { motion } from "framer-motion";
import { Edit2, MessageSquare, DollarSign } from "lucide-react";

interface UserProfileProps {
  profile: UserProfileType;
}

export function UserProfile({ profile }: UserProfileProps) {
  return (
    <div className="flex flex-col h-full relative">
      <div className="flex justify-between items-start mb-6">
        <h2 className="font-heading text-xl font-bold">User Profile</h2>
        <button className="p-2 bg-secondary/50 hover:bg-secondary rounded-full transition-colors group">
          <Edit2 className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center flex-1"
      >
        {/* Avatar Section */}
        <div className="relative mb-4 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-primary/40 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative w-24 h-24 rounded-full border-4 border-background overflow-hidden bg-muted">
            <img 
              src={profile.avatarUrl} 
              alt={profile.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          {/* Online Status Indicator */}
          <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-500 border-4 border-background" />
        </div>

        {/* User Info */}
        <h3 className="font-bold text-lg mb-1">{profile.name}</h3>
        <p className="text-sm text-muted-foreground mb-6">{profile.role}</p>

        {/* Quick Stats/Info */}
        <div className="w-full bg-secondary/30 rounded-2xl p-4 flex items-center justify-between mt-auto backdrop-blur-sm border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-0.5">Compensation</p>
              <p className="font-bold">${profile.compensation}/hr</p>
            </div>
          </div>
          
          <button className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 transition-all">
            <MessageSquare className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
