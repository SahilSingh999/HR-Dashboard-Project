import { 
  TopMetricsSummary, 
  TimeTrackerSession, 
  WeeklyProgressData, 
  TimelineEvent, 
  OnboardingStatus, 
  OnboardingTask,
  UserProfile
} from "./types";

export const mockMetricsSummary: TopMetricsSummary = {
  interviewsPercentage: 15,
  hiredPercentage: 15,
  projectTimePercentage: 60,
  outputPercentage: 10,
  totalEmployees: 142,
  totalHirings: 24,
  totalProjects: 18,
};

export const initialTimeTrackerSession: TimeTrackerSession = {
  hours: 1,
  minutes: 45,
  isRunning: false,
};

export const mockUserProfile: UserProfile = {
  id: "u1",
  name: "Evan Little",
  role: "Lead Software Engineer",
  compensation: 45,
  avatarUrl: "https://i.pravatar.cc/150?u=u1",
};

export const mockWeeklyProgress: WeeklyProgressData = {
  totalHours: 42,
  days: [
    { label: "S", hours: 0, isCurrentDay: false },
    { label: "M", hours: 8, isCurrentDay: false },
    { label: "T", hours: 8, isCurrentDay: false },
    { label: "W", hours: 9, isCurrentDay: false },
    { label: "T", hours: 7, isCurrentDay: false },
    { label: "F", hours: 10, isCurrentDay: true },
    { label: "S", hours: 0, isCurrentDay: false },
  ],
};

export const mockTimelineEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Product Sync",
    description: "Weekly sync with the product team to discuss roadmap.",
    time: "9:00 am",
    durationHours: 1,
    attendees: [
      { id: "a1", name: "Alice", role: "PM", compensation: 0, avatarUrl: "https://i.pravatar.cc/150?u=1" },
      { id: "a2", name: "Bob", role: "Designer", compensation: 0, avatarUrl: "https://i.pravatar.cc/150?u=2" }
    ]
  },
  {
    id: "2",
    title: "Interview: Frontend Engineer",
    description: "Technical interview with candidate.",
    time: "11:30 am",
    durationHours: 1.5,
    attendees: [
      { id: "a3", name: "Charlie", role: "Candidate", compensation: 0, avatarUrl: "https://i.pravatar.cc/150?u=3" }
    ]
  },
  {
    id: "3",
    title: "Design Review",
    description: "Reviewing the new dashboard mockups.",
    time: "2:00 pm",
    durationHours: 1,
    attendees: [
      { id: "a2", name: "Bob", role: "Designer", compensation: 0, avatarUrl: "https://i.pravatar.cc/150?u=2" },
      { id: "a4", name: "Diana", role: "Lead", compensation: 0, avatarUrl: "https://i.pravatar.cc/150?u=4" }
    ]
  }
];

export const mockOnboardingStatus: OnboardingStatus = {
  overallPercentage: 18,
  taskPercentage: 45,
  reviewPercentage: 20,
  emptyPercentage: 35,
};

export const mockOnboardingTasks: OnboardingTask[] = [
  {
    id: "t1",
    title: "Introductory Interview",
    timestamp: "Sep 13, 08:30",
    isCompleted: true,
    iconType: "interview",
  },
  {
    id: "t2",
    title: "Meeting with Team Lead",
    timestamp: "Sep 13, 10:00",
    isCompleted: false,
    iconType: "meeting",
  },
  {
    id: "t3",
    title: "Update Profile Details",
    timestamp: "Sep 14, 09:00",
    isCompleted: false,
    iconType: "update",
  },
  {
    id: "t4",
    title: "Set Initial Goals",
    timestamp: "Sep 15, 11:30",
    isCompleted: false,
    iconType: "goals",
  },
  {
    id: "t5",
    title: "Review Security Policy",
    timestamp: "Sep 16, 14:00",
    isCompleted: false,
    iconType: "policy",
  }
];
