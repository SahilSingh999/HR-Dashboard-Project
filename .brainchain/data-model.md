# 📦 Data Model

This model defines the TypeScript interfaces for the mocked data that will drive the UI components.

```typescript
export interface UserProfile {
  id: string;
  name: string;
  role: string;
  compensation: number;
  avatarUrl: string;
}

export interface TopMetricsSummary {
  interviewsPercentage: number;
  hiredPercentage: number;
  projectTimePercentage: number;
  outputPercentage: number;
  totalEmployees: number;
  totalHirings: number;
  totalProjects: number;
}

export interface WeeklyProgressData {
  totalHours: number;
  days: {
    label: string; // 'S', 'M', 'T', etc.
    hours: number;
    isCurrentDay: boolean;
  }[];
}

export interface TimeTrackerSession {
  hours: parseInt;
  minutes: parseInt;
  isRunning: boolean;
}

export interface OnboardingStatus {
  overallPercentage: number;
  taskPercentage: number;
  reviewPercentage: number;
  emptyPercentage: number;
}

export interface OnboardingTask {
  id: string;
  title: string;
  timestamp: string; // e.g., 'Sep 13, 08:30'
  isCompleted: boolean;
  iconType: 'interview' | 'meeting' | 'update' | 'goals' | 'policy';
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  time: string; // e.g., '8:00 am'
  durationHours: number;
  attendees: UserProfile[];
}

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon?: string;
  hasChildren: boolean;
  value?: string; // e.g. 'MacBook Air Version M1'
}
```
