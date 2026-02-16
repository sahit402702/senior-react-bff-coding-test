import { useQuery } from "@apollo/client/react";
import {
  Card,
  CardHeader,
  makeStyles,
  tokens,
  Text,
  Spinner,
  Avatar,
  Badge,
} from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { GET_USERS } from "../services/graphqlQueries";
import type { User, Task } from "../types";

const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "16px",
  },
  card: {
    padding: "16px",
  },
  userHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
    margin: "8px 0 0",
  },
  taskItem: {
    padding: "4px 0",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  link: {
    color: tokens.colorBrandForeground1,
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
});

interface UserWithTasks extends User {
  tasks: Task[];
}

export function UsersPage() {
  const styles = useStyles();
  const { data, loading, error } = useQuery<{ users: UserWithTasks[] }>(
    GET_USERS
  );

  if (loading) return <Spinner label="Loading users..." />;
  if (error) return <Text>Error loading users: {error.message}</Text>;

  const users = data?.users ?? [];

  return (
    <div data-testid="users-page">
      <div className={styles.grid}>
        {users.map((user) => (
          <Card key={user.id} className={styles.card}>
            <div className={styles.userHeader}>
              <Avatar
                name={user.displayName}
                size={40}
                color="brand"
              />
              <div>
                <Link to={`/users/${user.id}`} className={styles.link}>
                  <Text weight="semibold">{user.displayName}</Text>
                </Link>
                <Text size={200} block>
                  {user.jobTitle}
                </Text>
              </div>
            </div>

            <CardHeader
              header={
                <Text size={200} weight="semibold">
                  {user.department}
                </Text>
              }
            />

            <Text size={200}>{user.email}</Text>

            {user.tasks.length > 0 && (
              <>
                <Text
                  size={200}
                  weight="semibold"
                  block
                  style={{ marginTop: "12px" }}
                >
                  Tasks ({user.tasks.length})
                </Text>
                <ul className={styles.taskList}>
                  {user.tasks.slice(0, 3).map((task) => (
                    <li key={task.id} className={styles.taskItem}>
                      <Badge
                        appearance="outline"
                        color={
                          task.status === "done" ? "success" : "informative"
                        }
                        size="small"
                      >
                        {task.status}
                      </Badge>
                      <Link
                        to={`/tasks/${task.id}`}
                        className={styles.link}
                      >
                        {task.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
