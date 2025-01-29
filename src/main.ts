import * as core from '@actions/core'
import { HttpClient } from '@actions/http-client'
// import { wait } from './wait.js'

/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    // https://n1xf0y3j35.execute-api.us-east-2.amazonaws.com/serverless_lambda_stage/hello/jerry?hair=green
    const pony = core.getInput('pony')
    core.info(`Pony's name is ${pony}`)

    const http = new HttpClient('my-first-action')
    const res = await http.get(
      `https://n1xf0y3j35.execute-api.us-east-2.amazonaws.com/serverless_lambda_stage/hello/${pony}?hair=green`
    )

    core.info(`Response from server: ${res.message}`)
    core.info(`Body from server: ${await res.readBody()}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
