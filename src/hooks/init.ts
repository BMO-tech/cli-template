import { Hook } from "@oclif/core";
import { basename, resolve } from "path";
import Conf from "conf";
import { mkdir } from "../libs/file-system";
import * as globby from "globby";
import { uniq } from "lodash";

const hook: Hook<"init"> = async function (opts) {
  const config = new Conf();

  // Ensure CLI Directories exist
  if (config.has("projectDir")) {
    mkdir(resolve(config.get("projectDir") as string));
  }
  mkdir(resolve(opts.config.configDir));

  // Get list of all repositories
  const paths = await globby(`${this.config.root}/**/*.repo.(j|t)s`);
  const repos = uniq(paths.map((path) => basename(path).split(".")[0]));
  config.set("repos", repos);

  // Create Context
  const ctx = {
    commandRoot: opts.config.root,
    cwd: process.cwd(),
    projectDir: config.get("projectDir") as string,
  };

  config.set("ctx", ctx);
};

export default hook;
