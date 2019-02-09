import { Card } from './card'
import { PlayerState } from '../player'

let MindControl = function (): Card {

  const cost = () => 10

  const play: Card["play"] = (playerState: PlayerState) => {
    playerState.spellsPlayed.push(MindControl())
    return playerState
  }

  return { play, cost }
}

export = MindControl