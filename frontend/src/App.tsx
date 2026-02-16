import { Routes, Route, useLocation } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Layout } from "./components/Layout";
import { DashboardPage } from "./pages/DashboardPage";
import { TasksPage } from "./pages/TasksPage";
import { TaskDetailPage } from "./pages/TaskDetailPage";
import { UsersPage } from "./pages/UsersPage";
import { UserDetailPage } from "./pages/UserDetailPage";

const titleMap: Record<string, string> = {
  "/": "Dashboard",
  "/tasks": "Tasks",
  "/users": "Users",
};

function getTitle(pathname: string): string {
  if (pathname.startsWith("/tasks/")) return "Task Detail";
  if (pathname.startsWith("/users/")) return "User Detail";
  return titleMap[pathname] ?? "Task Manager";
}

function App() {
  const location = useLocation();
  const title = getTitle(location.pathname);

  return (
    <Layout sidebar={<Sidebar />} title={title}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
