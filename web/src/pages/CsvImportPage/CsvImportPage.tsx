import { Importer, ImporterField } from 'react-csv-importer'

// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import 'react-csv-importer/dist/index.css'
const CsvImportPage = () => {
  return (
    <>
      <MetaTags title="CsvImport" description="CsvImport page" />

      <h1>CsvImportPage</h1>
      <Importer
        assumeNoHeaders={false} // optional, keeps "data has headers" checkbox off by default
        restartable={false} // optional, lets user choose to upload another file when import is complete
        onStart={({ file, preview, fields, columnFields }) => {
          // optional, invoked when user has mapped columns and started import
          console.log(file, preview, fields, columnFields)
        }}
        processChunk={async (rows, { startIndex }) => {
          // required, may be called several times
          // receives a list of parsed objects based on defined fields and user column mapping;
          // (if this callback returns a promise, the widget will wait for it before parsing more data)
          // for (row of rows) {
          //   await myAppMethod(row)
          // }
          console.log(rows, startIndex)
        }}
        onComplete={({ file, preview, fields, columnFields }) => {
          // optional, invoked right after import is done (but user did not dismiss/reset the widget yet)
          console.log(file, preview, fields, columnFields)
        }}
        onClose={({ file, preview, fields, columnFields }) => {
          // optional, if this is specified the user will see a "Finish" button after import is done,
          // which will call this when clicked
          console.log(file, preview, fields, columnFields)
        }}

        // CSV options passed directly to PapaParse if specified:
        // delimiter={...}
        // newline={...}
        // quoteChar={...}
        // escapeChar={...}
        // comments={...}
        // skipEmptyLines={...}
        // delimitersToGuess={...}
        // chunkSize={...} // defaults to 10000
        // encoding={...} // defaults to utf-8, see FileReader API
      >
        <ImporterField name="id" label="id" />
        <ImporterField name="title" label="Title" />
        <ImporterField name="body" label="body" />
        <ImporterField name="postalCode" label="Postal Code" optional />
      </Importer>
    </>
  )
}

export default CsvImportPage
