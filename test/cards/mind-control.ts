import { init, PlayerState } from '../../src/player'
import * as MindControl from '../../src/cards/mind-control'

describe('Mind Control', () => {

  let playerState: PlayerState

  beforeEach(() => {
    playerState = init()
  })

  test('could be played when having enough crystals', () => {
    playerState.crystals.free = 10
    expect(MindControl().canPlay(playerState)).toBeTruthy()
  })

})
