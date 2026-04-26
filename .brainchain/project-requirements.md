# 📋 Project Requirements

**Project Name:** Crextio HR Dashboard

## 1. Data Origin
- **Mocked Data:** The application will use robust, typed mock data structures for all initial development and demo purposes.

## 2. Priority Features
The "15-minute build" foundation will prioritize the following key features:
1. **Time Tracker Component:** With interactive start/pause state.
2. **Calendar Timeline:** Horizontal scrolling/layout of upcoming events and meetings.
3. **Interviews Tracking:** Top progress bars indicating taken vs pending interviews.
4. **Dark Mode Toggle:** Immediate support for system and manual theme switching.

## 3. Auth/State Requirements
- **Presentation/Demo Mode:** No authentication layers, role-based access control (RBAC), or multi-tenant database configuration is required.
- **State Management:** Local component state (via React `useState`/`useContext`) will be sufficient for UI interactivity. 

## 4. Interactivity Depth
- **High Visual Interactivity:** The UI must feel alive. Hover states, micro-animations (Framer Motion), and functional component toggling (like checking off onboarding tasks or starting the time tracker) should be fully implemented using local state.

## 5. Tech Stack & Standards
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Components:** Shadcn UI + Radix primitives
- **Animation:** Framer Motion
- **Icons:** Lucide React

## 6. Assets & Typography
- **Headings Font:** `Red Hat Display` (Bold weights).
- **Body Font:** `Poppins` (Medium weights).
- **Images:** Use premium stock placeholders and sleek UI illustrations.
- **Theme:** Strict adherence to the provided soft yellow/cream gradient in light mode, with a functional toggle to a premium dark mode aesthetic.
