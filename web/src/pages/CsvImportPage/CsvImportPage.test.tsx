import { render } from '@redwoodjs/testing/web'

import CsvImportPage from './CsvImportPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CsvImportPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CsvImportPage />)
    }).not.toThrow()
  })
})
