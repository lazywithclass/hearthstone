///<reference path="../board-state.ts" />

import { BoardHistory } from '../board-state'
import { Card } from './card'

let ArcaneGiant = function (): Card {

  let cardState = {
    cost: (history: BoardHistory) => Math.max(0, 12 - history.spellsPlayed),
    strength: 8,
    constitution: 8
  }

  const canPlay: Card["canPlay"] = (board) =>
    cardState.cost(board.history) <= board.me.crystals.free

  const play: Card["play"] = (board) => {
    board.cards.push(this)
    return board
  }

  return { canPlay, play }
}

export = ArcaneGiant