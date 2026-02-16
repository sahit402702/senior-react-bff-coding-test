export const typeDefs = `#graphql
  type User {
    id: ID!
    displayName: String!
    email: String!
    department: String!
    jobTitle: String!
    tasks: [Task!]!
  }

  type Task {
    id: ID!
    title: String!
    description: String!
    status: TaskStatus!
    priority: TaskPriority!
    assigneeId: String!
    assignee: User
    createdAt: String!
    updatedAt: String!
  }

  type StatusCount {
    status: String!
    count: Int!
  }

  type PriorityCount {
    priority: String!
    count: Int!
  }

  type DashboardSummary {
    totalUsers: Int!
    totalTasks: Int!
    tasksByStatus: [StatusCount!]!
    tasksByPriority: [PriorityCount!]!
    recentTasks: [Task!]!
  }

  enum TaskStatus {
    todo
    in_progress
    done
  }

  enum TaskPriority {
    low
    medium
    high
  }

  input CreateTaskInput {
    title: String!
    description: String!
    status: TaskStatus!
    priority: TaskPriority!
    assigneeId: String!
  }

  input UpdateTaskInput {
    title: String
    description: String
    status: TaskStatus
    priority: TaskPriority
    assigneeId: String
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    tasks(status: TaskStatus, priority: TaskPriority): [Task!]!
    task(id: ID!): Task
    dashboard: DashboardSummary!
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task!
    updateTask(id: ID!, input: UpdateTaskInput!): Task
    deleteTask(id: ID!): Boolean!
  }
`;
