import {
  Badge,
  makeStyles,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  badge: {
    textTransform: "capitalize",
  },
});

interface StatusBadgeProps {
  status: string;
}

const statusAppearanceMap: Record<string, "important" | "informative" | "success"> = {
  todo: "important",
  "in-progress": "informative",
  "in_progress": "informative",
  done: "success",
};

const statusLabelMap: Record<string, string> = {
  todo: "To Do",
  "in-progress": "In Progress",
  "in_progress": "In Progress",
  done: "Done",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = useStyles();
  return (
    <Badge
      className={styles.badge}
      appearance="filled"
      color={statusAppearanceMap[status] ?? "informative"}
      data-testid="status-badge"
    >
      {statusLabelMap[status] ?? status}
    </Badge>
  );
}

interface PriorityBadgeProps {
  priority: string;
}

const priorityColorMap: Record<string, "danger" | "warning" | "informative"> = {
  high: "danger",
  medium: "warning",
  low: "informative",
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const styles = useStyles();
  return (
    <Badge
      className={styles.badge}
      appearance="outline"
      color={priorityColorMap[priority] ?? "informative"}
      data-testid="priority-badge"
    >
      {priority}
    </Badge>
  );
}
