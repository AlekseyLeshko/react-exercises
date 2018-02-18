import store from '../../store';
import * as actions from './actions.js';
import * as selectors from './selectors.js';

const id = 'users-test-id';
describe('modules:users', () => {
  it('should create new users', () => {
    const users = {
      id,
    };

    const count = selectors.getAllUsers(store.getState()).length;
    const expectedCount = count + 1;

    store.dispatch(actions.createUsers(users));

    const actualStore = selectors.getAllUsers(store.getState());

    expect(actualStore).toHaveLength(expectedCount);
  });

  it('should update users', () => {
    const users = {
      id,
      name: 'new-name'
    };
    const item = selectors.getUsersById(store.getState(), id);
    expect(item.name).not.toEqual(users.name);

    store.dispatch(actions.updateUsers(users));

    const actual = selectors.getUsersById(store.getState(), id);

    expect(actual.name).toEqual(users.name);
  });

  it('should create new users', () => {
    const users = {
      id,
    };

    const count = selectors.getAllUsers(store.getState()).length;
    const expectedCount = count - 1;

    store.dispatch(actions.deleteUsers(users));

    const actualStore = selectors.getAllUsers(store.getState());

    expect(actualStore).toHaveLength(expectedCount);
  });
});
