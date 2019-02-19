import { init, PlayerState } from '../../src/player'
import * as ArcaneGiant from '../../src/cards/arcane-giant'
import * as MindControl from '../../src/cards/mind-control'

describe('Arcane Giant', () => {

  let playerState: PlayerState

  beforeEach(() => {
    playerState = init()
  })

  test('could be played when having enough crystals', () => {
    playerState.crystals.free = 10
    playerState = MindControl().play(playerState)
    playerState = MindControl().play(playerState)
    expect(ArcaneGiant().canPlay(playerState)).toBeTruthy()
  })

  test('without enough crystals cannot be played', () => {
    playerState.crystals.free = 10
    expect(ArcaneGiant().canPlay(playerState)).toBeFalsy()
  })

})
