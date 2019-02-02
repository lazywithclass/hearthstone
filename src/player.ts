type Crystals = {
  used: number
  free: number
}

type Player = {
  crystals: Crystals
}

let defaultPlayer = {
  crystals: {
    used: 0,
    free: 0
  }
}

let init = (player: Player = defaultPlayer): Player => player

export { init, Player, Crystals }