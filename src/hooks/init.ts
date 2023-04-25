import { Hook } from "@oclif/core";
import { basename, resolve } from "path";
import Conf from "conf";
import { mkdir } from "../libs/file-system";
import { globby } from "globby";
import { uniq } from "lodash";

const hook: Hook<"init"> = async function (opts) {
  const config = new Conf();

  // Return early if now project directory has been set
  if (!config.has("projectDir")) {
    return;
  }

  // Ensure CLI Directories exist
  mkdir(resolve(config.get("projectDir") as string));
  mkdir(resolve(opts.config.configDir));
  mkdir(resolve(opts.config.dataDir));
  mkdir(resolve(opts.config.cacheDir));

  // Get list of all repositories
  const paths = await globby(`${this.config.root}/**/*.repo.(j|t)s`);
  const repos = uniq(paths.map((path) => basename(path).split(".")[0]));
  config.set("repos", repos);
};

export default hook;
