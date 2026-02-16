import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import {
  Card,
  CardHeader,
  makeStyles,
  tokens,
  Text,
  Spinner,
} from "@fluentui/react-components";
import { GET_TASK } from "../services/graphqlQueries";
import { StatusBadge, PriorityBadge } from "../components/Badges";
import type { Task } from "../types";

const useStyles = makeStyles({
  container: {
    maxWidth: "800px",
  },
  card: {
    padding: "24px",
    marginBottom: "16px",
  },
  field: {
    marginBottom: "16px",
  },
  label: {
    color: tokens.colorNeutralForeground3,
    marginBottom: "4px",
  },
  badges: {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
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
  assigneeCard: {
    padding: "16px",
  },
});

export function TaskDetailPage() {
  const { id } = useParams<{ id: string }>();
  const styles = useStyles();
  const { data, loading, error } = useQuery<{ task: Task }>(GET_TASK, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <Spinner label="Loading task..." />;
  if (error) return <Text>Error loading task: {error.message}</Text>;
  if (!data?.task)
    return <Text data-testid="task-not-found">Task not found</Text>;

  const { task } = data;

  return (
    <div className={styles.container} data-testid="task-detail-page">
      <Link to="/tasks" className={styles.backLink}>
        ← Back to Tasks
      </Link>

      <Card className={styles.card}>
        <CardHeader
          header={
            <Text as="h2" size={600} weight="semibold">
              {task.title}
            </Text>
          }
        />

        <div className={styles.badges}>
          <StatusBadge status={task.status} />
          <PriorityBadge priority={task.priority} />
        </div>

        <div className={styles.field} style={{ marginTop: "16px" }}>
          <Text className={styles.label} size={200} block>
            Description
          </Text>
          <Text>{task.description}</Text>
        </div>

        <div className={styles.field}>
          <Text className={styles.label} size={200} block>
            Created
          </Text>
          <Text>{new Date(task.createdAt).toLocaleString()}</Text>
        </div>

        <div className={styles.field}>
          <Text className={styles.label} size={200} block>
            Last Updated
          </Text>
          <Text>{new Date(task.updatedAt).toLocaleString()}</Text>
        </div>
      </Card>

      {task.assignee && (
        <Card className={styles.assigneeCard}>
          <CardHeader
            header={<Text weight="semibold">Assignee</Text>}
          />
          <div className={styles.field}>
            <Text weight="semibold">{task.assignee.displayName}</Text>
          </div>
          <div className={styles.field}>
            <Text className={styles.label} size={200} block>
              Email
            </Text>
            <Text>{task.assignee.email}</Text>
          </div>
          <div className={styles.field}>
            <Text className={styles.label} size={200} block>
              Department
            </Text>
            <Text>{task.assignee.department}</Text>
          </div>
        </Card>
      )}
    </div>
  );
}
