import { Args } from "@oclif/core";
import { spawn } from "child_process";
import { ICommand, IContext, IRepo } from "../types";
import { ArgInput } from "@oclif/core/lib/interfaces/parser";
import Conf from "conf";

export function runCommand({ cmd, args }: ICommand): Promise<void> {
  return new Promise((resolve, reject) => {
    const command = spawn(cmd, args, {
      stdio: "inherit",
      cwd: process.cwd(),
    });
    command.on("error", reject);
    command.on("close", resolve);
  });
}

export function getRepoArgs(): ArgInput {
  const conf = new Conf();
  if (!conf.has("repos")) {
    return {};
  }

  const repos = conf.get("repos") as string[];
  const args: Record<string, any> = {};
  repos.forEach((_repo, index) => {
    args[`repo${index + 1}`] = Args.string({
      required: false,
      options: repos,
    });
  });

  return args;
}

export function sanitizeRepoArgs(args: { [key: string]: any }): string[] {
  const conf = new Conf();
  let repos = Object.values(args).filter((x) => x);
  if (repos.length === 0) repos = conf.get("repos") as string[];

  return repos;
}

export function getRepoClass(ctx: IContext, repo: string): IRepo {
  try {
    const RepoClass =
      require(`${ctx.commandRoot}/dist/repos/${repo}.repo`).default;

    return new RepoClass(ctx);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
