import { Board } from '../board-state'

export type Card = {
  canPlay: (board: Board) => boolean
  play:  (board: Board) => Board
}
