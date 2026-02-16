import { createApp } from "./app.js";

const PORT = process.env.PORT ?? 4000;

async function main() {
  const { app } = await createApp();
  app.listen(PORT, () => {
    console.log(`🚀 BFF server running at http://localhost:${PORT}`);
    console.log(`   REST API:  http://localhost:${PORT}/api`);
    console.log(`   GraphQL:   http://localhost:${PORT}/graphql`);
  });
}

main().catch(console.error);
