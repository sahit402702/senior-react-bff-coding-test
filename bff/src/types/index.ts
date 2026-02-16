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
  createdAt: string;
  updatedAt: string;
}

export interface TaskWithAssignee extends Task {
  assignee: User | null;
}

export interface DashboardSummary {
  totalUsers: number;
  totalTasks: number;
  tasksByStatus: { status: string; count: number }[];
  tasksByPriority: { priority: string; count: number }[];
  recentTasks: TaskWithAssignee[];
}

export interface CreateTaskInput {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  assigneeId: string;
}

export interface UpdateTaskInput {
  title?: string;
  description?: string;
  status?: "todo" | "in-progress" | "done";
  priority?: "low" | "medium" | "high";
  assigneeId?: string;
}
