import { Card } from './cards/card'

type Crystals = {
  used: number
  free: number
}

export type PlayerState = {
  crystals: Crystals
  hand: Card[]
  graveyard: Card[]
  board: Card[]
  spellsPlayed: Card[]
  history?: PlayerState
}

export let init = (): PlayerState => ({
  crystals: {
    used: 0,
    free: 0
  },
  hand: [],
  graveyard: [],
  board: [],
  spellsPlayed: []
})

export let canPlay = (playerState: PlayerState, card: Card) =>
  card.cost(playerState) <= playerState.crystals.free

export let spellsPlayed = (playerState: PlayerState) => {
  function recurse(state: PlayerState, runningTotal: number): number {
    runningTotal += state.spellsPlayed.length
    return state.history ?
      recurse(state.history, runningTotal) :
      runningTotal
  }

  return recurse(playerState, 0)
}