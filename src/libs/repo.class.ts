import { IContext, IRepo } from "../types";
import { runCommand } from "./commands";
import { checkDir } from "./file-system";

export class Repo implements IRepo {
  public readonly slug!: string;
  public readonly repoUrl!: string;

  constructor(public readonly ctx: IContext) {}

  async setup(): Promise<void> {
    const repoDir = `${this.ctx.projectDir}/${this.slug}`;
    if (!checkDir(repoDir)) {
      await runCommand({ cmd: "git", args: ["clone", this.repoUrl, repoDir] });
    }

    await runCommand({ cmd: "npm", args: ["install", "--prefix", repoDir] });
  }

  async start(args: string[] = []): Promise<void> {
    // Do some command
  }

  async stop(args: string[] = []): Promise<void> {
    // Do some command
  }

  async deploy(args: string[] = []): Promise<void> {
    // Do some command
  }
}
