import { useQuery } from "@apollo/client/react";
import {
  makeStyles,
  tokens,
  Text,
  Spinner,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { GET_TASKS } from "../services/graphqlQueries";
import { StatusBadge, PriorityBadge } from "../components/Badges";
import type { Task } from "../types";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  link: {
    color: tokens.colorBrandForeground1,
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
  badges: {
    display: "flex",
    gap: "8px",
  },
});

export function TasksPage() {
  const styles = useStyles();
  const { data, loading, error } = useQuery<{ tasks: Task[] }>(GET_TASKS);

  if (loading) return <Spinner label="Loading tasks..." />;
  if (error) return <Text>Error loading tasks: {error.message}</Text>;

  const tasks = data?.tasks ?? [];

  return (
    <div data-testid="tasks-page">
      <div className={styles.header}>
        <Text as="h2" size={500} weight="semibold">
          All Tasks ({tasks.length})
        </Text>
      </div>

      <Table aria-label="Tasks list">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Priority</TableHeaderCell>
            <TableHeaderCell>Assignee</TableHeaderCell>
            <TableHeaderCell>Updated</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} data-testid={`task-row-${task.id}`}>
              <TableCell>
                <Link to={`/tasks/${task.id}`} className={styles.link}>
                  {task.title}
                </Link>
              </TableCell>
              <TableCell>
                <StatusBadge status={task.status} />
              </TableCell>
              <TableCell>
                <PriorityBadge priority={task.priority} />
              </TableCell>
              <TableCell>
                {task.assignee?.displayName ?? "Unassigned"}
              </TableCell>
              <TableCell>
                {new Date(task.updatedAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
