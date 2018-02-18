import store from '../../store';
import * as selectors from './selectors.js';

describe('modules:users:selectors', () => {
  it('should return all users', () => {
    const userss = selectors.getAllUsers(store.getState());

    expect(userss).toHaveLength(1);
  });

  it('should return users by id', () => {
    const id = 'test-id';
    const expectUsers = {
      id,
    };

    const users = selectors.getUsersById(store.getState(), id);

    expect(users).toEqual(expectUsers);
  });
});

