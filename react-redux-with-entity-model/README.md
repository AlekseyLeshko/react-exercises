model for entities in redux store
=

## Idea
Create model for all rudux store entities.

## API
- convertForStore
- getData

I think solution with model be a slowly but slightly.
Profits of use model: encapsulation all in model(convert time and date, static entity dummy and other logic), as a consequence comfortable work with data in component.

### Benchmarks
```
npm run test benchmark-one-item.js
```
