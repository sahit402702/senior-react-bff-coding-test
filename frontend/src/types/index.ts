export interface User {
  id: string;
  displayName: string;
  email: string;
  department: string;
  jobTitle: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  assigneeId: string;
  assignee?: User | null;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardSummary {
  totalUsers: number;
  totalTasks: number;
  tasksByStatus: { status: string; count: number }[];
  tasksByPriority: { priority: string; count: number }[];
  recentTasks: Task[];
}

export interface UserWithTasks extends User {
  tasks: Task[];
  taskStats: {
    total: number;
    completed: number;
    inProgress: number;
    todo: number;
  };
}
