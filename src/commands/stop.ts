import { Command } from "@oclif/core";
import Conf from "conf";
import { getRepoArgs, getRepoClass, sanitizeRepoArgs } from "../libs/commands";
import { IContext } from "../types";

export default class Stop extends Command {
  static description = "Stop provided repositories";

  static examples = [
    "<%= config.bin %> <%= command.id %>",
    "<%= config.bin %> <%= command.id %> repo1 repo2",
  ];

  static args = getRepoArgs();

  private conf = new Conf();

  public async run(): Promise<void> {
    try {
      const { args } = await this.parse(Stop);
      const ctx = this.conf.get("ctx") as IContext;
      const repos = sanitizeRepoArgs(args);

      for (const repo of repos) {
        const repoClass = getRepoClass(ctx, repo);
        await repoClass.stop();
      }
    } catch (e: any) {
      this.error(e);
    }
  }
}
