export interface ICommand {
  cmd: string;
  args: string[];
}

export interface IContext {
  projectDir: string;
  commandRoot: string;
  dataDir: string;
  cacheDir: string;
  cwd: string;
}

export interface IRepo {
  ctx: IContext;
  slug: string;
  repoUrl: string;
  setup: () => Promise<void>;
  start: (args?: string[]) => Promise<void>;
  stop: (args?: string[]) => Promise<void>;
  deploy: (args?: string[]) => Promise<void>;
}
