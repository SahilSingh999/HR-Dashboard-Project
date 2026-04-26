"use client";

import { useTheme } from "next-themes";
import { Settings, Bell, User, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TopNavBar() {
  const { theme, setTheme } = useTheme();
  
  const navItems = [
    "Dashboard", "People", "Hiring", "Devices", 
    "Apps", "Salary", "Calendar", "Reviews"
  ];

  return (
    <div className="w-full sticky top-0 z-50 py-4">
      <header className="container mx-auto px-4 flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <div className="px-6 py-2.5 rounded-full border border-border bg-card/90 backdrop-blur-md shadow-sm font-heading font-medium text-xl tracking-tight text-foreground flex items-center justify-center">
            Crextio
          </div>
        </div>

        {/* Center: Navigation Pill */}
        <nav className="hidden lg:flex items-center rounded-full bg-card/90 backdrop-blur-md p-1.5 shadow-sm border border-border">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                item === "Dashboard" 
                  ? "bg-foreground text-background shadow-md" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Settings Pill */}
          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-sm text-sm font-medium hover:bg-secondary/50 transition-all text-foreground">
            <Settings className="w-[18px] h-[18px]" />
            Setting
          </button>

          {/* Notification Circle */}
          <button className="relative w-11 h-11 flex items-center justify-center rounded-full bg-card/90 backdrop-blur-md border border-border shadow-sm hover:bg-secondary/50 transition-all text-foreground">
            <Bell className="w-[18px] h-[18px]" />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-yellow-400 border-2 border-background" />
          </button>

          {/* User Circle */}
          <button className="w-11 h-11 flex items-center justify-center rounded-full bg-card/90 backdrop-blur-md border border-border shadow-sm hover:bg-secondary/50 transition-all text-foreground">
            <User className="w-[18px] h-[18px]" />
          </button>
          
          {/* Theme Toggle */}
          <button 
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-card/90 backdrop-blur-md border border-border shadow-sm hover:bg-secondary/50 transition-all text-foreground"
          >
            <Sun className="h-[18px] w-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </header>
    </div>
  );
}
