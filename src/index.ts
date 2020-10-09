import { MatchReader } from "./MatchReader";
import { CsvFileReader } from './CsvFileReader'
import { WinsAnalysis} from './analyzers/WinsAnalysis'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { Summary } from './Summary'
import { HtmlReport } from './reportTargets/HtmlReports'

// Instantiate MatchReader with Static Method. After .load, we get access to matchReader.matches (type MatchReader.matches: MatchData[]) data
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load();

// Instantiate Summary with Static Method.
const summary = Summary.winsAnalysisWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches)


/* Good Ref Original Version Before Using Static Methods Like Above
  // Create an object that satisfies the 'DataReader' interface
  const csvFileReader = new CsvFileReader('football.csv');

  // Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
  const matchReader = new MatchReader(csvFileReader);

  matchReader.load();

  // Now we can reference matchReader.matches (type MatchReader.matches: MatchData[]) data
  const summary = new Summary(
    new WinsAnalysis('Man United'),
    new HtmlReport())

  summary.buildAndPrintReport(matchReader.matches)
*/
