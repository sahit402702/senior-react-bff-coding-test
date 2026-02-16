# Senior React + BFF Coding Test

A timed coding assessment (40 minutes) for Senior Front-End / BFF Engineers evaluating proficiency in React, TypeScript, BFF patterns, API orchestration, and testing.

## 🏗️ Project Architecture

```
├── frontend/          # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/    # Reusable UI components (Fluent UI)
│   │   ├── pages/         # Route-level page components
│   │   ├── services/      # API client & GraphQL queries
│   │   ├── types/         # TypeScript type definitions
│   │   └── __tests__/     # Component & integration tests
│   └── vitest.config.ts
├── bff/               # Backend-for-Frontend (Express + Apollo GraphQL)
│   ├── src/
│   │   ├── graphql/       # Schema & resolvers
│   │   ├── rest/          # REST API routes
│   │   ├── services/      # Data service & aggregation logic
│   │   ├── validation/    # JSON schema validation (Ajv)
│   │   ├── types/         # TypeScript type definitions
│   │   └── __tests__/     # API & unit tests
│   └── vitest.config.ts
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for build tooling
- **Microsoft Fluent UI** (`@fluentui/react-components`) for UI consistency with Microsoft ecosystem
- **React Router** for deep linking and navigation
- **Apollo Client** for GraphQL data fetching
- **Vitest** + **Testing Library** for testing

### BFF (Backend-for-Frontend)
- **Express** REST API
- **Apollo Server** GraphQL endpoint
- **Ajv** for JSON schema validation
- **TypeScript** throughout
- **Vitest** + **Supertest** for API testing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
# Install dependencies
cd bff && npm install
cd ../frontend && npm install

# Start BFF server (terminal 1)
cd bff && npm run dev
# → http://localhost:4000 (REST: /api, GraphQL: /graphql)

# Start frontend dev server (terminal 2)
cd frontend && npm run dev
# → http://localhost:5173 (proxies /api and /graphql to BFF)
```

### Run Tests

```bash
# BFF tests (36 tests)
cd bff && npm test

# Frontend tests (33 tests)
cd frontend && npm test
```

## 📋 Coding Test Tasks (40 minutes)

Complete as many tasks as possible. Each task evaluates specific competencies.

### Task 1: Create Task Form Component (15 min)
**Evaluates: React patterns, Fluent UI, TypeScript, form handling**

Create a `CreateTaskForm` component in `frontend/src/components/CreateTaskForm.tsx`:
- Use Fluent UI form components (`Input`, `Dropdown`, `Button`, `Field`)
- Include fields: title, description, status (dropdown), priority (dropdown), assignee (dropdown)
- Validate that title is not empty before submission
- Call the `CREATE_TASK` GraphQL mutation on submit (mutation is already defined in `services/graphqlQueries.ts`)
- Display success/error feedback using Fluent UI `MessageBar`
- Add the form to the Tasks page with a "New Task" button that toggles the form visibility

**Bonus:** Add the component to the route `/tasks/new`

### Task 2: Add Task Filtering (10 min)
**Evaluates: GraphQL, React state management, API consumption**

Add filtering to the Tasks page (`frontend/src/pages/TasksPage.tsx`):
- Add Fluent UI `Dropdown` controls for filtering by status and priority
- The GraphQL `tasks` query already supports `status` and `priority` variables
- Pass selected filter values as query variables to `useQuery`
- Show "No tasks found" when filters return empty results

### Task 3: Add Delete Task Functionality (10 min)
**Evaluates: Mutations, REST/GraphQL pragmatic choices, user confirmation**

Add delete functionality to the Task Detail page (`frontend/src/pages/TaskDetailPage.tsx`):
- Add a Fluent UI `Button` with "Delete" label (appearance="subtle", icon: `Delete24Regular`)
- Show a Fluent UI `Dialog` for confirmation before deleting
- Use either the GraphQL `DELETE_TASK` mutation or the REST `api.deleteTask()` — make a pragmatic choice and be ready to justify it
- Navigate to `/tasks` after successful deletion
- Handle and display errors

### Task 4: Write Tests (5 min)
**Evaluates: Testing skills, test patterns**

Write tests for the component(s) you created. Use the existing test patterns in `__tests__/`:
- Test utilities in `testUtils.tsx` provide `renderWithProviders` with MockedProvider
- Test rendering, user interactions, loading states, and error states
- Aim for at least 3 meaningful test cases

## 🔍 Evaluation Criteria

| Criteria | Weight | What We Look For |
|----------|--------|------------------|
| **React Patterns** | 25% | Hooks, component composition, state management |
| **TypeScript** | 20% | Proper typing, interfaces, type safety |
| **Fluent UI Usage** | 15% | Correct component selection, consistent styling |
| **API Integration** | 15% | GraphQL queries/mutations, REST usage, error handling |
| **Testing** | 15% | Meaningful tests, mocking, coverage |
| **Code Quality** | 10% | Clean code, readability, patterns |

## 📡 API Reference

### REST Endpoints (BFF)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | List all users |
| GET | `/api/users/:id` | Get user with tasks & stats |
| GET | `/api/tasks` | List tasks with assignees |
| GET | `/api/tasks/:id` | Get single task |
| POST | `/api/tasks` | Create task (JSON body) |
| PATCH | `/api/tasks/:id` | Update task (partial JSON) |
| DELETE | `/api/tasks/:id` | Delete task |
| GET | `/api/dashboard` | Aggregated dashboard summary |

### GraphQL Schema (BFF)

```graphql
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

enum TaskStatus { todo, in_progress, done }
enum TaskPriority { low, medium, high }
```

### JSON Validation Schema

Task creation requires:
```json
{
  "title": "string (1-200 chars, required)",
  "description": "string (0-2000 chars, required)",
  "status": "todo | in-progress | done (required)",
  "priority": "low | medium | high (required)",
  "assigneeId": "string (required)"
}
```

## 🔗 Deep Linking

The app supports deep linking to all views:
- `/` — Dashboard
- `/tasks` — Task list
- `/tasks/:id` — Task detail
- `/users` — User list
- `/users/:id` — User detail

## 📁 Key Files for Candidates

| File | Purpose |
|------|---------|
| `frontend/src/services/graphqlQueries.ts` | All GraphQL queries & mutations |
| `frontend/src/services/api.ts` | REST API client |
| `frontend/src/types/index.ts` | Shared TypeScript types |
| `frontend/src/__tests__/testUtils.tsx` | Test helper with providers |
| `frontend/src/components/Badges.tsx` | Example Fluent UI component |
| `frontend/src/pages/TasksPage.tsx` | Example page with GraphQL |