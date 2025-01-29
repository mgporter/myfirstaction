import * as core from '@actions/core'
import { wait } from './wait.js'

/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {

    const name = core.getInput("firstname");
    core.info(`Person's name is ${name}`)
    

    core.exportVariable('personname', name);



    
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
