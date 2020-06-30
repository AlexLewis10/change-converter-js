import Change from './change-converter'

let change

beforeEach(() => {
  change = new Change()
})

describe('test setup', () => {
  it('everything set up and working', () => {
    expect(change.getChange()).toEqual(true)
  })

})