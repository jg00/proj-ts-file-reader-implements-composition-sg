// One Implementation of Report Output. Works with Summary Class.
import { OutputTarget } from '../Summary'

export class ConsoleReport implements OutputTarget {
  print(report: string): void{
    console.log(report)
  }
}