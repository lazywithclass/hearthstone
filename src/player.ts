type Crystals = {
  used: number
  free: number
}

type Player = {
  crystals: Crystals
}

let init = (): Player => ({
  crystals: {
    used: 0,
    free: 0
  }
})

export { init, Player, Crystals }