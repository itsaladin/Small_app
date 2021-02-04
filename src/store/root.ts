import {Instance, types} from 'mobx-state-tree';
import {DataJson} from '../types/auth/auth';
import {User} from './user';

export const RootStore = types
  .model('RootStore', {
    state: types.maybe(types.string),
    user: types.maybe(User),
    shipping: 60,
    payment: 'cod',
    check: false,
  })
  .actions((self) => ({
    logIn(user: DataJson) {
      self.user = user;
    },
    setState(s: string) {
      self.state = s;
    },
    setCheck() {
      self.check = !self.check;
    },
    logout() {
      self.user = undefined;
    },

  }))
  .views((self) => ({
    get isLoggedIn() {
      return !!self.user;
    },
  }));

export type RootStoreType = Instance<typeof RootStore>;
