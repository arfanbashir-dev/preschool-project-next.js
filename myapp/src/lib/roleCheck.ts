// lib/roleCheck.ts

export function isAllowed(role: string, allowedRoles: string[]) {
  return allowedRoles.includes(role);
}
