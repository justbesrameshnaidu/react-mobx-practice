import { observable } from 'mobx';

class UserStore {
    @observable me: any;

    constructor() {
        this.me = null;
    }
}
const userStore = new UserStore();

export default userStore;
export { UserStore };