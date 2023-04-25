import { Command, Flags } from "@oclif/core";
import Conf from "conf";
import { getRepoArgs, getRepoClass, sanitizeRepoArgs } from "../libs/commands";
import { IContext } from "../types";
import { resolve } from "path";
import { mkdir } from "../libs/file-system";

export default class Setup extends Command {
  static description = "Sets up available repositories";

  static examples = [
    "<%= config.bin %> <%= command.id %>",
    "<%= config.bin %> <%= command.id %> repo1 repo2",
  ];

  static flags = {
    directory: Flags.string({
      char: "d",
      required: false,
    }),
  };

  static args = getRepoArgs();

  private conf = new Conf();

  public async run(): Promise<void> {
    try {
      const { args, flags } = await this.parse(Setup);
      const ctx = this.conf.get("ctx") as IContext;
      const repos = sanitizeRepoArgs(args);

      // Set Project Directory
      if (flags.directory) {
        this.conf.set("projectDir", resolve(flags.directory));
        mkdir(flags.directory);
      }

      for (const repo of repos) {
        const repoClass = getRepoClass(ctx, repo);
        await repoClass.setup();
      }
    } catch (e: any) {
      this.error(e);
    }
  }
}
