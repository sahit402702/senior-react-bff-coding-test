import { useQuery } from "@apollo/client/react";
import {
  Card,
  CardHeader,
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
import { GET_DASHBOARD } from "../services/graphqlQueries";
import { StatusBadge, PriorityBadge } from "../components/Badges";
import type { DashboardSummary } from "../types";

const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    marginBottom: "24px",
  },
  card: {
    padding: "16px",
  },
  statValue: {
    fontSize: "32px",
    fontWeight: tokens.fontWeightBold,
    color: tokens.colorBrandForeground1,
  },
  section: {
    marginBottom: "24px",
  },
  chartGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "24px",
  },
  barContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "8px",
  },
  barLabel: {
    width: "90px",
    textTransform: "capitalize" as const,
  },
  bar: {
    height: "24px",
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorBrandBackground,
    transition: "width 0.3s ease",
  },
  link: {
    color: tokens.colorBrandForeground1,
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
});

export function DashboardPage() {
  const styles = useStyles();
  const { data, loading, error } = useQuery<{ dashboard: DashboardSummary }>(
    GET_DASHBOARD
  );

  if (loading) return <Spinner label="Loading dashboard..." />;
  if (error) return <Text>Error loading dashboard: {error.message}</Text>;
  if (!data) return null;

  const { dashboard } = data;
  const maxCount = Math.max(
    ...dashboard.tasksByStatus.map((s) => s.count),
    ...dashboard.tasksByPriority.map((p) => p.count),
    1
  );

  return (
    <div data-testid="dashboard-page">
      <div className={styles.grid}>
        <Card className={styles.card}>
          <CardHeader header={<Text weight="semibold">Total Users</Text>} />
          <div className={styles.statValue} data-testid="total-users">
            {dashboard.totalUsers}
          </div>
        </Card>
        <Card className={styles.card}>
          <CardHeader header={<Text weight="semibold">Total Tasks</Text>} />
          <div className={styles.statValue} data-testid="total-tasks">
            {dashboard.totalTasks}
          </div>
        </Card>
        <Card className={styles.card}>
          <CardHeader header={<Text weight="semibold">Completed</Text>} />
          <div className={styles.statValue}>
            {dashboard.tasksByStatus.find((s) => s.status === "done")?.count ??
              0}
          </div>
        </Card>
        <Card className={styles.card}>
          <CardHeader header={<Text weight="semibold">In Progress</Text>} />
          <div className={styles.statValue}>
            {dashboard.tasksByStatus.find(
              (s) => s.status === "in-progress" || s.status === "in_progress"
            )?.count ?? 0}
          </div>
        </Card>
      </div>

      <div className={styles.chartGrid}>
        <Card className={styles.card}>
          <CardHeader
            header={<Text weight="semibold">Tasks by Status</Text>}
          />
          {dashboard.tasksByStatus.map((item) => (
            <div key={item.status} className={styles.barContainer}>
              <span className={styles.barLabel}>{item.status}</span>
              <div
                className={styles.bar}
                style={{ width: `${(item.count / maxCount) * 200}px` }}
              />
              <span>{item.count}</span>
            </div>
          ))}
        </Card>

        <Card className={styles.card}>
          <CardHeader
            header={<Text weight="semibold">Tasks by Priority</Text>}
          />
          {dashboard.tasksByPriority.map((item) => (
            <div key={item.priority} className={styles.barContainer}>
              <span className={styles.barLabel}>{item.priority}</span>
              <div
                className={styles.bar}
                style={{ width: `${(item.count / maxCount) * 200}px` }}
              />
              <span>{item.count}</span>
            </div>
          ))}
        </Card>
      </div>

      <div className={styles.section}>
        <Text as="h2" size={500} weight="semibold">
          Recent Tasks
        </Text>
        <Table aria-label="Recent tasks">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Priority</TableHeaderCell>
              <TableHeaderCell>Assignee</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dashboard.recentTasks.map((task) => (
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
                <TableCell>
                  {task.assignee?.displayName ?? "Unassigned"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
