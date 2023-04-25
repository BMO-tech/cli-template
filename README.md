oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli-template
$ cli COMMAND
running command...
$ cli (--version)
cli-template/0.1.0 darwin-arm64 node-v18.16.0
$ cli --help [COMMAND]
USAGE
  $ cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cli deploy`](#cli-deploy)
* [`cli help [COMMANDS]`](#cli-help-commands)
* [`cli setup`](#cli-setup)
* [`cli start`](#cli-start)
* [`cli stop`](#cli-stop)

## `cli deploy`

Deploy provided repositories

```
USAGE
  $ cli deploy

DESCRIPTION
  Deploy provided repositories

EXAMPLES
  $ cli deploy

  $ cli deploy repo1 repo2
```

_See code: [dist/commands/deploy.ts](https://github.com/BMO-tech/cli-template/blob/v0.1.0/dist/commands/deploy.ts)_

## `cli help [COMMANDS]`

Display help for cli.

```
USAGE
  $ cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `cli setup`

Sets up available repositories

```
USAGE
  $ cli setup [-d <value>]

FLAGS
  -d, --directory=<value>  Set the root project directory

DESCRIPTION
  Sets up available repositories

EXAMPLES
  $ cli setup

  $ cli setup repo1 repo2
```

_See code: [dist/commands/setup.ts](https://github.com/BMO-tech/cli-template/blob/v0.1.0/dist/commands/setup.ts)_

## `cli start`

Start provided repositories

```
USAGE
  $ cli start

DESCRIPTION
  Start provided repositories

EXAMPLES
  $ cli start

  $ cli start repo1 repo2
```

_See code: [dist/commands/start.ts](https://github.com/BMO-tech/cli-template/blob/v0.1.0/dist/commands/start.ts)_

## `cli stop`

Stop provided repositories

```
USAGE
  $ cli stop

DESCRIPTION
  Stop provided repositories

EXAMPLES
  $ cli stop

  $ cli stop repo1 repo2
```

_See code: [dist/commands/stop.ts](https://github.com/BMO-tech/cli-template/blob/v0.1.0/dist/commands/stop.ts)_
<!-- commandsstop -->
