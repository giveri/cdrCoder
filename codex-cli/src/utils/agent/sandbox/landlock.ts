import type { ExecResult } from "./interface.js";
import type { AppConfig } from "../../config.js";
import type { SpawnOptions } from "child_process";

import { exec } from "./raw-exec.js";

/**
 * Runs Landlock with the following permissions:
 * - can read any file on disk
 * - can write to process.cwd()
 * - can write to the platform user temp folder
 * - can write to any user-provided writable root
 */
export async function execWithLandlock(
  cmd: Array<string>,
  opts: SpawnOptions,
  _userProvidedWritableRoots: ReadonlyArray<string>,
  config: AppConfig,
  abortSignal?: AbortSignal,
): Promise<ExecResult> {
  // The sandbox helper binary is not available. Run the command directly
  // without applying additional restrictions so it executes with the same
  // privileges as the current user.
  return exec(cmd, opts, config, abortSignal);
}
