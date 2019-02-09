import { Card } from './card'
import { spellsPlayed, PlayerState } from '../player'

let ArcaneGiant = function (): Card {

  let state = {
    strength: 8,
    constitution: 8
  }

  const cost = (playerState: PlayerState) =>
    Math.max(0, 12 - spellsPlayed(playerState))

  const play: Card["play"] = (board) => {
    // board.cards.push(this)
    return board
  }

  return { play, cost, state }
}

export = ArcaneGiant