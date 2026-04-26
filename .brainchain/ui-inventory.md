# 🧩 UI Component Inventory

List of React components required to build the dashboard, mapping to the Shadcn UI library where applicable.

## Shadcn UI Primitives Needed
1. `Button` (Standard buttons, icon buttons)
2. `Card` (`Card`, `CardHeader`, `CardTitle`, `CardContent`, `CardDescription`)
3. `Progress` (For the top metric bars)
4. `Avatar` (`Avatar`, `AvatarImage`, `AvatarFallback`)
5. `Accordion` (For the left side menu: "Pension contributions", "Devices")
6. `Switch` (For the Dark Mode toggle in settings/nav)
7. `Badge` (For the "$1,200" pill and progress labels)
8. `DropdownMenu` (For the top navigation "Settings" or user profile if needed)
9. `ScrollArea` (For the timeline and checklist if they overflow)

## Custom Feature Components
1. **`TopNavBar`**: Contains the logo, navigation links, and theme switch.
2. **`TopMetricsRow`**: Houses the 4 progress bars and the 3 quick-stat counters.
3. **`UserProfileCard`**: The large image card with the user's name, role, and compensation.
4. **`WeeklyProgressChart`**: Custom SVG or Framer Motion powered bar chart showing hours per day.
5. **`CircularTimeTracker`**: Custom SVG circular progress indicator with play/pause controls.
6. **`OnboardingSummary`**: Shows the multi-segmented 18% progress UI.
7. **`SidebarAccordionMenu`**: The list component containing dropdowns for Devices, Compensation, etc.
8. **`CalendarTimeline`**: A complex, horizontally scrolling or absolute-positioned timeline view.
9. **`DarkTaskChecklist`**: The dark-themed card containing the list of onboarding tasks with checkbox interactions.
