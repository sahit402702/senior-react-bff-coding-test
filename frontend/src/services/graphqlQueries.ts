import { gql } from "@apollo/client/core";

export const GET_DASHBOARD = gql`
  query GetDashboard {
    dashboard {
      totalUsers
      totalTasks
      tasksByStatus {
        status
        count
      }
      tasksByPriority {
        priority
        count
      }
      recentTasks {
        id
        title
        status
        priority
        assignee {
          displayName
        }
        updatedAt
      }
    }
  }
`;

export const GET_TASKS = gql`
  query GetTasks($status: TaskStatus, $priority: TaskPriority) {
    tasks(status: $status, priority: $priority) {
      id
      title
      description
      status
      priority
      assignee {
        id
        displayName
      }
      updatedAt
    }
  }
`;

export const GET_TASK = gql`
  query GetTask($id: ID!) {
    task(id: $id) {
      id
      title
      description
      status
      priority
      assigneeId
      assignee {
        id
        displayName
        email
        department
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      displayName
      email
      department
      jobTitle
      tasks {
        id
        title
        status
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      displayName
      email
      department
      jobTitle
      tasks {
        id
        title
        status
        priority
      }
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      title
      status
      priority
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
      id
      title
      status
      priority
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;
