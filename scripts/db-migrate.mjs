import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const migrationsDir = join(process.cwd(), "supabase", "migrations");

if (!existsSync(migrationsDir)) {
  console.error("No migrations directory found at supabase/migrations");
  process.exit(1);
}

const files = readdirSync(migrationsDir).filter((name) => name.endsWith(".sql"));

if (files.length === 0) {
  console.warn("No migration files found. Nothing to apply.");
  process.exit(0);
}

console.log("Migration files detected:");
for (const file of files.sort()) {
  console.log(`- ${file}`);
}
console.log("Apply these migrations with Supabase CLI or your deployment pipeline.");
