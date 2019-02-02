import { getBoard } from './src/board-state'
import * as ArcaneGiant from './src/cards/arcane-giant'

let board = getBoard()
let arcaneGiant = ArcaneGiant()

console.log(arcaneGiant.canPlay(board))