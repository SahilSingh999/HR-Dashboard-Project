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
    label: string;
    hours: number;
    isCurrentDay: boolean;
  }[];
}

export interface TimeTrackerSession {
  hours: number;
  minutes: number;
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
  timestamp: string;
  isCompleted: boolean;
  iconType: 'interview' | 'meeting' | 'update' | 'goals' | 'policy';
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  time: string;
  durationHours: number;
  attendees: UserProfile[];
}

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon?: string;
  hasChildren: boolean;
  value?: string;
}
