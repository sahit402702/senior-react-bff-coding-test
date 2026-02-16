import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import restRoutes from "./rest/routes.js";

export async function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // REST API routes
  app.use("/api", restRoutes);

  // GraphQL endpoint
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  app.use(
    "/graphql",
    expressMiddleware(apolloServer, {
      context: async ({ req }) => ({ headers: req.headers }),
    })
  );

  // Health check
  app.get("/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  return { app, apolloServer };
}
