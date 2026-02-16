import Ajv, { type JSONSchemaType } from "ajv";
import type { CreateTaskInput, UpdateTaskInput } from "../types/index.js";

const ajv = new Ajv({ allErrors: true });

const createTaskSchema: JSONSchemaType<CreateTaskInput> = {
  type: "object",
  properties: {
    title: { type: "string", minLength: 1, maxLength: 200 },
    description: { type: "string", minLength: 0, maxLength: 2000 },
    status: { type: "string", enum: ["todo", "in-progress", "done"] },
    priority: { type: "string", enum: ["low", "medium", "high"] },
    assigneeId: { type: "string", minLength: 1 },
  },
  required: ["title", "description", "status", "priority", "assigneeId"],
  additionalProperties: false,
};

const updateTaskSchema: JSONSchemaType<UpdateTaskInput> = {
  type: "object",
  properties: {
    title: { type: "string", minLength: 1, maxLength: 200, nullable: true },
    description: {
      type: "string",
      minLength: 0,
      maxLength: 2000,
      nullable: true,
    },
    status: {
      type: "string",
      enum: ["todo", "in-progress", "done"],
      nullable: true,
    },
    priority: {
      type: "string",
      enum: ["low", "medium", "high"],
      nullable: true,
    },
    assigneeId: { type: "string", minLength: 1, nullable: true },
  },
  required: [],
  additionalProperties: false,
};

export const validateCreateTask = ajv.compile(createTaskSchema);
export const validateUpdateTask = ajv.compile(updateTaskSchema);

export function formatValidationErrors(
  errors: typeof validateCreateTask.errors
): string[] {
  if (!errors) return [];
  return errors.map((e) => {
    const field = e.instancePath.replace("/", "") || e.params?.missingProperty;
    return `${field}: ${e.message}`;
  });
}
