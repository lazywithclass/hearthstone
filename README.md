## Hearthstone

Coding Hearthstone as a way to learn programming

### Cards

You could find cards here https://www.hearthpwn.com/cards

### Approaches

All approaches have:

* testing
* debugging if you want to write scripts and see a board in action
* debugging for tests

working under VS Code.

#### First (from 9e48d81 to -)

I started by modelling a card, [Arcane Giant](https://www.hearthpwn.com/cards/42049-arcane-giant), then added properties to that card so that you start having the concept of `state`, stats of a card, and interaction with the `board`.

I've then found out that to create a `Card` I would need a `Board` and some `Player`s to understand if for example I could play that card, and so on. So I've split out all objects I've previously put into my one and only card, `ArcaneGiant`, into separate objects, so I got

 * `board-state.ts` which would contain the current `Board` and the history
 of what happened
 * `player.ts` which would represent a `Player`

Now I have a way to run this through `launch.ts`, and also debugging is in place, thanks to source maps and VS Code which makes the whole really easy.

Next step is writing tests.

While writing them I got into a doubt: should the function `play` be part of a `Card` or should it be part of the `Board`? From a logic point of view I'd say you play a card onto the board, so in FP terms you apply the function `play` to its argument `Board`, seems to make sense. Also, in the future if a card is an edge case I could always do the required changes there, without affecting `Board`.