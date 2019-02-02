///<reference path="player.ts" />

import * as Player from './player'
import { Card } from './cards/card'

type BoardHistory = {
  spellsPlayed: number
}
let defaultBoardHistory = {
  spellsPlayed: 0
}

type Board = {
  me: Player.Player
  opponent: Player.Player
  cards: Card[]
  history: BoardHistory
}
let defaultBoard: Board = {
  me: Player.init(),
  opponent: Player.init(),
  cards: [],
  history: defaultBoardHistory
}

const getBoard = (currentBoard: Board = defaultBoard) => ({
  ...defaultBoard
})

export { Board, BoardHistory, getBoard }