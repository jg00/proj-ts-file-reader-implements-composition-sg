// MatchReader Coordinates Further Handling Data From Different Source Readers
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData"
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  // Return Pre-configured instances of MatchReader
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = []

  constructor(public reader: DataReader){}

  // Initiate Data Load (that Conforms to a Specific Data Structure ie string[][]), Perform Data Conversions
  load(){
    this.reader.read()
     this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}


