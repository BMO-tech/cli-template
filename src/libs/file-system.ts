import { accessSync, existsSync, mkdirSync } from "fs";
import { dirname } from "path";

export function mkdir(dir: string): void {
  accessSync(dirname(dir));
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

export function checkDir(dir: string): boolean {
  accessSync(dirname(dir));
  return existsSync(dir);
}
