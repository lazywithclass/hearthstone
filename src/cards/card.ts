import { PlayerState } from '../player'

export type Card = {
  state?: {
    strength: number
    constitution: number
  }
  cost: (playerState: PlayerState) => number
  play:  (playerState: PlayerState) => PlayerState
}
