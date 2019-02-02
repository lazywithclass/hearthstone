## Hearthstone

Coding Hearthstone cards as a way to learn programming

### Cards

You could find cards here https://www.hearthpwn.com/cards

### Approaches

All approaches have debugging and testing working under VS Code.

#### First

Model a card, I've started with [Arcane Giant](https://www.hearthpwn.com/cards/42049-arcane-giant), then add properties to that card
so that you start having the concept of `state`, stats of a card, and
interaction with the `board`.

I've then found out that to create a `Card` I would need a `Board` and
some `Player`s to understand if for example I could play that card, and so on.
So I've split out all objects I've previously put into my one and only card,
`ArcaneGiant`, into separate objects, so I got

 * `board-state.ts` which would contain the current `Board` and the history
 of what happened
 * `player.ts` which would represent a `Player`