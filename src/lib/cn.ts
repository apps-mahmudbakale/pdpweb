export type ClassValue = string | number | null | false | undefined;

/** Minimal class name joiner — the project has no clsx/tailwind-merge dependency. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}
