import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import {
  Card,
  CardHeader,
  makeStyles,
  tokens,
  Text,
  Spinner,
  Avatar,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@fluentui/react-components";
import { GET_USER } from "../services/graphqlQueries";
import { StatusBadge, PriorityBadge } from "../components/Badges";
import type { Task } from "../types";

const useStyles = makeStyles({
  container: {
    maxWidth: "900px",
  },
  card: {
    padding: "24px",
    marginBottom: "16px",
  },
  userHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "16px",
  },
  field: {
    marginBottom: "12px",
  },
  label: {
    color: tokens.colorNeutralForeground3,
    marginBottom: "4px",
  },
  backLink: {
    color: tokens.colorBrandForeground1,
    textDecoration: "none",
    marginBottom: "16px",
    display: "inline-block",
    ":hover": {
      textDecoration: "underline",
    },
  },
  link: {
    color: tokens.colorBrandForeground1,
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
});

interface UserData {
  id: string;
  displayName: string;
  email: string;
  department: string;
  jobTitle: string;
  tasks: Task[];
}

export function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const styles = useStyles();
  const { data, loading, error } = useQuery<{ user: UserData }>(GET_USER, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <Spinner label="Loading user..." />;
  if (error) return <Text>Error loading user: {error.message}</Text>;
  if (!data?.user)
    return <Text data-testid="user-not-found">User not found</Text>;

  const { user } = data;

  return (
    <div className={styles.container} data-testid="user-detail-page">
      <Link to="/users" className={styles.backLink}>
        ← Back to Users
      </Link>

      <Card className={styles.card}>
        <div className={styles.userHeader}>
          <Avatar name={user.displayName} size={56} color="brand" />
          <div>
            <Text as="h2" size={600} weight="semibold" block>
              {user.displayName}
            </Text>
            <Text size={300}>{user.jobTitle}</Text>
          </div>
        </div>

        <div className={styles.field}>
          <Text className={styles.label} size={200} block>
            Email
          </Text>
          <Text>{user.email}</Text>
        </div>

        <div className={styles.field}>
          <Text className={styles.label} size={200} block>
            Department
          </Text>
          <Text>{user.department}</Text>
        </div>
      </Card>

      <Card className={styles.card}>
        <CardHeader
          header={
            <Text weight="semibold">Assigned Tasks ({user.tasks.length})</Text>
          }
        />
        <Table aria-label="User tasks">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Priority</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {user.tasks.map((task) => (
              <TableRow key={task.id}>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
