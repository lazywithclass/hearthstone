import { Card } from './card'
import { PlayerState } from '../player'

let MindControl = function (): Card {

  const cost = () => 10

  const play: Card['play'] = (playerState) => {
    playerState.spellsPlayed.push(MindControl())
    return playerState
  }

  const canPlay: Card['canPlay'] = (playerState) =>
    cost() <= playerState.crystals.free

  return { canPlay, play, cost }
}

export = MindControl