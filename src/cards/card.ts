import { PlayerState } from '../player'

export type Card = {
  state?: {
    strength: number
    constitution: number
  }
  cost: (playerState: PlayerState) => number
  canPlay:  (playerState: PlayerState) => boolean
  play:  (playerState: PlayerState) => PlayerState
}
