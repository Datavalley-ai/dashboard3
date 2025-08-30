# Learners Dashboard

A professional, modern, and comprehensive student dashboard built with React, TypeScript, and Tailwind CSS. Perfect for educational platforms and client demos.

## 🚀 Features

### Core Features
- **Student Profile Management** - Complete student information with avatar and progress tracking
- **Course Progress Tracker** - Visual progress bars for each module with status indicators
- **Assignment Management** - Track assignments with priority levels, due dates, and submission status
- **Class Schedule** - Upcoming classes with instructor information and session types
- **Attendance Tracking** - Visual attendance records with percentage calculations
- **Grade Management** - Performance tracking across all courses
- **Resource Library** - Downloadable study materials and resources
- **Notifications System** - Real-time alerts and updates
- **Quick Actions** - Easy access to common student tasks

### UI/UX Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern Animations** - Smooth transitions, hover effects, and loading states
- **Beautiful Gradients** - Professional color schemes with gradient backgrounds
- **Interactive Charts** - Performance trends and attendance visualization using Recharts
- **Glass Morphism** - Modern glass-like effects with backdrop blur
- **Custom Animations** - Fade-in, slide-in, and scale animations for enhanced UX

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd learn-path-dash-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🎨 Customization

### Colors and Themes
The dashboard uses a modern color palette with gradients. You can customize colors by modifying:

- `src/index.css` - Custom CSS variables and animations
- `tailwind.config.ts` - Tailwind configuration
- Component-specific color classes in `src/components/Dashboard.tsx`

### Adding New Features
1. **New Dashboard Sections**: Add new tabs in the `TabsList` component
2. **Additional Data Cards**: Extend the stats cards in the Overview section
3. **Custom Charts**: Add new chart components using Recharts
4. **New Actions**: Add buttons to the Quick Actions section

## 🔄 Backend Integration

### Replacing Mock Data
The dashboard currently uses mock data located in `src/components/Dashboard.tsx`. To integrate with your backend:

1. **Create API Service**
   ```typescript
   // src/services/api.ts
   export const api = {
     getStudentProfile: () => fetch('/api/student/profile'),
     getAssignments: () => fetch('/api/assignments'),
     getSchedule: () => fetch('/api/schedule'),
     getProgress: () => fetch('/api/progress'),
     getGrades: () => fetch('/api/grades'),
     getNotifications: () => fetch('/api/notifications'),
     getResources: () => fetch('/api/resources'),
   }
   ```

2. **Add State Management**
   ```typescript
   // Using React Query for data fetching
   import { useQuery } from '@tanstack/react-query'
   
   const { data: studentData, isLoading } = useQuery({
     queryKey: ['student-profile'],
     queryFn: api.getStudentProfile
   })
   ```

3. **Replace Mock Data**
   ```typescript
   // Replace mockStudentData with real data
   const studentData = useQuery(['student-profile'], api.getStudentProfile).data
   ```

### API Endpoints Structure
Your backend should provide these endpoints:

```typescript
interface StudentProfile {
  name: string
  email: string
  course: string
  avatar: string
  studentId: string
  joinDate: string
}

interface Assignment {
  id: number
  title: string
  dueDate: string
  status: 'pending' | 'in-progress' | 'completed' | 'not-started'
  course: string
  priority: 'high' | 'medium' | 'low'
}

interface Schedule {
  id: number
  title: string
  time: string
  date: string
  instructor: string
  type: 'lecture' | 'workshop' | 'meeting'
}

interface Progress {
  overall: number
  modules: Array<{
    name: string
    progress: number
    status: string
  }>
}
```

## 📱 Responsive Design

The dashboard is fully responsive and includes:
- **Mobile-first approach** with Tailwind CSS
- **Flexible grid layouts** that adapt to screen sizes
- **Touch-friendly interactions** for mobile devices
- **Optimized typography** for different screen sizes

## 🎯 Performance Optimizations

- **Lazy loading** for components and data
- **Optimized images** with proper sizing
- **Efficient animations** with CSS transforms
- **Minimal re-renders** with React best practices

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure
```
src/
├── components/
│   ├── Dashboard.tsx          # Main dashboard component
│   └── ui/                    # Reusable UI components
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── progress.tsx
│       └── tabs.tsx
├── lib/
│   └── utils.ts               # Utility functions
├── App.tsx                    # Main app component
└── main.tsx                   # Entry point
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the `dist` folder to S3
- **Docker**: Create a Dockerfile for containerized deployment

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradients (#3B82F6 to #8B5CF6)
- **Success**: Green gradients (#10B981 to #059669)
- **Warning**: Orange gradients (#F59E0B to #D97706)
- **Error**: Red gradients (#EF4444 to #DC2626)
- **Neutral**: Gray gradients (#6B7280 to #374151)

### Typography
- **Headings**: Inter font family
- **Body**: System font stack
- **Code**: Monospace fonts

### Spacing
- **Consistent spacing** using Tailwind's spacing scale
- **Responsive padding** and margins
- **Proper component spacing** for visual hierarchy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for modern education platforms**
