const ROLE_INSTANCES = ["user"];

export const roleConfig = Object.fromEntries(
  ROLE_INSTANCES.map((role) => [role, role])
);
