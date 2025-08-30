import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Calendar, Clock, BookOpen, FileText, Users, Bell, Download, Search, Filter, TrendingUp, Award, Target, Zap } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

// Mock Data
const mockStudentData = {
  profile: {
    name: "Sarah Johnson",
    email: "sarah.johnson@student.edu",
    course: "Full Stack Web Development",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    studentId: "STU2024001",
    joinDate: "January 2024"
  },
  progress: {
    overall: 78,
    modules: [
      { name: "HTML & CSS", progress: 95, status: "completed" },
      { name: "JavaScript", progress: 85, status: "in-progress" },
      { name: "React.js", progress: 65, status: "in-progress" },
      { name: "Node.js", progress: 45, status: "in-progress" },
      { name: "Database", progress: 20, status: "not-started" },
      { name: "Deployment", progress: 0, status: "not-started" }
    ]
  },
  assignments: [
    { id: 1, title: "React Hooks Implementation", dueDate: "2024-02-15", status: "pending", course: "React.js", priority: "high" },
    { id: 2, title: "API Integration Project", dueDate: "2024-02-20", status: "in-progress", course: "Node.js", priority: "medium" },
    { id: 3, title: "Database Design Quiz", dueDate: "2024-02-18", status: "completed", course: "Database", priority: "low" },
    { id: 4, title: "Final Portfolio", dueDate: "2024-03-01", status: "not-started", course: "Deployment", priority: "high" }
  ],
  schedule: [
    { id: 1, title: "React Advanced Concepts", time: "09:00 AM", date: "2024-02-14", instructor: "Prof. Smith", type: "lecture" },
    { id: 2, title: "Code Review Session", time: "02:00 PM", date: "2024-02-14", instructor: "Prof. Johnson", type: "workshop" },
    { id: 3, title: "Group Project Meeting", time: "04:00 PM", date: "2024-02-15", instructor: "Prof. Davis", type: "meeting" },
    { id: 4, title: "Database Fundamentals", time: "10:00 AM", date: "2024-02-16", instructor: "Prof. Wilson", type: "lecture" }
  ],
  attendance: {
    total: 45,
    present: 42,
    absent: 3,
    percentage: 93.3
  },
  grades: [
    { course: "HTML & CSS", grade: "A+", score: 98, maxScore: 100 },
    { course: "JavaScript", grade: "A", score: 92, maxScore: 100 },
    { course: "React.js", grade: "B+", score: 87, maxScore: 100 },
    { course: "Node.js", grade: "B", score: 82, maxScore: 100 }
  ],
  notifications: [
    { id: 1, message: "New assignment posted: React Hooks Implementation", time: "2 hours ago", type: "assignment", read: false },
    { id: 2, message: "Your grade for JavaScript Quiz is now available", time: "1 day ago", type: "grade", read: false },
    { id: 3, message: "Class schedule updated for next week", time: "2 days ago", type: "schedule", read: true },
    { id: 4, message: "New study material uploaded: Advanced React Patterns", time: "3 days ago", type: "resource", read: true }
  ],
  resources: [
    { id: 1, name: "React Documentation", type: "pdf", size: "2.5 MB", downloadCount: 45 },
    { id: 2, name: "JavaScript Cheat Sheet", type: "pdf", size: "1.2 MB", downloadCount: 32 },
    { id: 3, name: "CSS Grid Tutorial", type: "video", size: "15.3 MB", downloadCount: 28 },
    { id: 4, name: "Node.js Best Practices", type: "pdf", size: "3.1 MB", downloadCount: 19 }
  ]
}

const performanceData = [
  { month: 'Jan', score: 85 },
  { month: 'Feb', score: 88 },
  { month: 'Mar', score: 92 },
  { month: 'Apr', score: 87 },
  { month: 'May', score: 90 },
  { month: 'Jun', score: 94 }
]

const attendanceData = [
  { name: 'Present', value: 42, color: '#10B981' },
  { name: 'Absent', value: 3, color: '#EF4444' }
]

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('overview')

  const filteredAssignments = mockStudentData.assignments.filter(assignment =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200'
      case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'not-started': return 'bg-gray-100 text-gray-700 border-gray-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getGradeColor = (grade: string) => {
    if (grade.includes('A')) return 'text-green-600'
    if (grade.includes('B')) return 'text-blue-600'
    if (grade.includes('C')) return 'text-yellow-600'
    return 'text-gray-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="animate-fade-in">
                <h1 className="text-3xl font-bold text-gray-900">
                  Learners Dashboard
                </h1>
                <p className="text-sm text-gray-600 mt-1">Welcome back, {mockStudentData.profile.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                <Bell className="h-4 w-4 mr-2 text-blue-600" />
                Notifications
              </Button>
              <Avatar className="ring-2 ring-blue-200 hover:ring-blue-300 transition-all duration-300">
                <AvatarImage src={mockStudentData.profile.avatar} />
                <AvatarFallback className="bg-blue-500 text-white">
                  {mockStudentData.profile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Student Profile Card */}
        <Card className="mb-8 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="flex items-center text-gray-900">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              Student Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <Avatar className="h-24 w-24 ring-4 ring-blue-100 hover:ring-blue-200 transition-all duration-300">
                <AvatarImage src={mockStudentData.profile.avatar} />
                <AvatarFallback className="text-xl bg-blue-500 text-white">
                  {mockStudentData.profile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900">{mockStudentData.profile.name}</h3>
                <p className="text-gray-600">{mockStudentData.profile.email}</p>
                <p className="text-sm text-gray-500">Student ID: {mockStudentData.profile.studentId}</p>
                <p className="text-sm text-gray-500">Course: {mockStudentData.profile.course}</p>
                <p className="text-sm text-gray-500">Joined: {mockStudentData.profile.joinDate}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">
                  {mockStudentData.progress.overall}%
                </div>
                <p className="text-sm text-gray-600">Overall Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-gray-200 shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300">
              Overview
            </TabsTrigger>
            <TabsTrigger value="assignments" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300">
              Assignments
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300">
              Schedule
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300">
              Progress
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300">
              Resources
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Assignments</CardTitle>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">4</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">
                    {mockStudentData.assignments.filter(a => a.status === 'completed').length}
                  </div>
                  <p className="text-xs text-gray-500">Completed</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Attendance</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">{mockStudentData.attendance.percentage}%</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{mockStudentData.attendance.present}</div>
                  <p className="text-xs text-gray-500">Present / {mockStudentData.attendance.total}</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Average Grade</CardTitle>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">A-</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">89.8</div>
                  <p className="text-xs text-gray-500">Out of 100</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Study Streak</CardTitle>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">🔥</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">12</div>
                  <p className="text-xs text-gray-500">Days</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="text-gray-900">Performance Trend</CardTitle>
                  <CardDescription className="text-gray-600">Your monthly performance scores</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                          border: 'none', 
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="#3b82f6" 
                        strokeWidth={3}
                        dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="text-gray-900">Attendance Overview</CardTitle>
                  <CardDescription className="text-gray-600">Present vs Absent sessions</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={attendanceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {attendanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                          border: 'none', 
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions and Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="text-gray-900">Quick Actions</CardTitle>
                  <CardDescription className="text-gray-600">Get started quickly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 p-6">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Join Next Class
                  </Button>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300">
                    <FileText className="h-4 w-4 mr-2" />
                    Submit Assignment
                  </Button>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-all duration-300">
                    <Users className="h-4 w-4 mr-2" />
                    Message Instructor
                  </Button>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300">
                    <Download className="h-4 w-4 mr-2" />
                    Download Materials
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="text-gray-900">Recent Notifications</CardTitle>
                  <CardDescription className="text-gray-600">Latest updates and alerts</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {mockStudentData.notifications.slice(0, 4).map((notification, index) => (
                      <div 
                        key={notification.id} 
                        className={`flex items-start space-x-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 ${
                          notification.read 
                            ? 'bg-gray-50 border border-gray-200' 
                            : 'bg-blue-50 border border-blue-200'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className={`w-3 h-3 rounded-full mt-2 animate-pulse ${
                          notification.read ? 'bg-gray-400' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-6 animate-fade-in">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-gray-900">Assignments & Submissions</CardTitle>
                    <CardDescription className="text-gray-600">Track your assignments and submission status</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search assignments..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 transition-all duration-300">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {filteredAssignments.map((assignment, index) => (
                    <div 
                      key={assignment.id} 
                      className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium text-lg text-gray-900">{assignment.title}</h4>
                          <Badge className={`${getPriorityColor(assignment.priority)}`}>
                            {assignment.priority}
                          </Badge>
                          <Badge className={`${getStatusColor(assignment.status)}`}>
                            {assignment.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Course: {assignment.course}</p>
                        <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="border-gray-300 hover:bg-gray-50 transition-all duration-300">View</Button>
                        {assignment.status === 'pending' && (
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300">Start</Button>
                        )}
                        {assignment.status === 'in-progress' && (
                          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300">Continue</Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6 animate-fade-in">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-gray-900">Upcoming Classes & Schedule</CardTitle>
                <CardDescription className="text-gray-600">Your class schedule and upcoming sessions</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {mockStudentData.schedule.map((session, index) => (
                    <div 
                      key={session.id} 
                      className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
                            <Calendar className="h-7 w-7 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg text-gray-900">{session.title}</h4>
                          <p className="text-sm text-gray-600">Instructor: {session.instructor}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {session.time}
                            </span>
                            <Badge variant="outline" className="border-blue-300 text-blue-700 bg-blue-50">{session.type}</Badge>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300">Join</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6 animate-fade-in">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-gray-900">Course Progress Tracker</CardTitle>
                <CardDescription className="text-gray-600">Track your progress through each module</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {mockStudentData.progress.modules.map((module, index) => (
                    <div key={index} className="space-y-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-lg text-gray-900">{module.name}</h4>
                        <span className="text-lg font-bold text-blue-600">
                          {module.progress}%
                        </span>
                      </div>
                      <Progress value={module.progress} className="h-3 bg-gray-200" />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span className="capitalize">{module.status}</span>
                        <span>{module.progress === 100 ? 'Completed' : `${100 - module.progress}% remaining`}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-gray-900">Grades & Performance</CardTitle>
                <CardDescription className="text-gray-600">Your academic performance across courses</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {mockStudentData.grades.map((grade, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div>
                        <h4 className="font-medium text-lg text-gray-900">{grade.course}</h4>
                        <p className="text-sm text-gray-600">Score: {grade.score}/{grade.maxScore}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getGradeColor(grade.grade)}`}>{grade.grade}</div>
                        <p className="text-sm text-gray-500">{grade.score}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6 animate-fade-in">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-gray-900">Learning Resources</CardTitle>
                <CardDescription className="text-gray-600">Download study materials and resources</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {mockStudentData.resources.map((resource, index) => (
                    <div 
                      key={resource.id} 
                      className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-sm">
                          <Download className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg text-gray-900">{resource.name}</h4>
                          <p className="text-sm text-gray-600">{resource.type.toUpperCase()} • {resource.size}</p>
                          <p className="text-xs text-gray-500">{resource.downloadCount} downloads</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Dashboard


