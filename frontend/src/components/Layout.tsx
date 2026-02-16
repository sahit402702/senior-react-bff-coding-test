import {
  makeStyles,
  tokens,
  Text,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  layout: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 24px",
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  content: {
    padding: "24px",
    flex: 1,
    overflow: "auto",
  },
});

interface LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  title: string;
}

export function Layout({ sidebar, children, title }: LayoutProps) {
  const styles = useStyles();

  return (
    <div className={styles.layout}>
      {sidebar}
      <div className={styles.main}>
        <header className={styles.header}>
          <Text as="h1" size={600} weight="semibold">
            {title}
          </Text>
        </header>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
