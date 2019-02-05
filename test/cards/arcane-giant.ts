import { getBoard } from '../../src/board-state'
import * as Player from '../../src/player'
import * as ArcaneGiant from '../../src/cards/arcane-giant'

describe('Arcane Giant', () => {

  test('could be played when having enough crystals', () => {
    let board = getBoard({
      cards: [],
      // TODO spellPlayed should be deducted from the history
      history: { spellsPlayed: 2 },
      me: Player.init({ crystals: { used: 0, free: 10 } }),
      opponent: Player.init()
    })
    expect(ArcaneGiant().canPlay(board)).toBeTruthy()
  })

  test('without enough crystals cannot be played', () => {
    let board = getBoard({
      cards: [],
      // TODO spellPlayed should be deducted from the history
      history: { spellsPlayed: 0 },
      me: Player.init({ crystals: { used: 0, free: 10 } }),
      opponent: Player.init()
    })
    expect(ArcaneGiant().canPlay(board)).toBeFalsy()
  })

})
