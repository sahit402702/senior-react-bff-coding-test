import { NavLink } from "react-router-dom";
import {
  makeStyles,
  tokens,
  Text,
} from "@fluentui/react-components";
import {
  Board24Regular,
  TaskListSquareLtr24Regular,
  People24Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  nav: {
    display: "flex",
    flexDirection: "column",
    width: "220px",
    backgroundColor: tokens.colorNeutralBackground2,
    borderRight: `1px solid ${tokens.colorNeutralStroke1}`,
    padding: "16px 0",
    gap: "4px",
  },
  brand: {
    padding: "8px 16px 24px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 16px",
    textDecoration: "none",
    color: tokens.colorNeutralForeground1,
    borderRadius: tokens.borderRadiusMedium,
    margin: "0 8px",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  activeLink: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
});

export function Sidebar() {
  const styles = useStyles();

  return (
    <nav className={styles.nav} data-testid="sidebar">
      <div className={styles.brand}>
        <Board24Regular />
        <Text weight="bold" size={500}>
          Task Manager
        </Text>
      </div>

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.activeLink : ""}`
        }
      >
        <Board24Regular />
        <span>Dashboard</span>
      </NavLink>

      <NavLink
        to="/tasks"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.activeLink : ""}`
        }
      >
        <TaskListSquareLtr24Regular />
        <span>Tasks</span>
      </NavLink>

      <NavLink
        to="/users"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.activeLink : ""}`
        }
      >
        <People24Regular />
        <span>Users</span>
      </NavLink>
    </nav>
  );
}
