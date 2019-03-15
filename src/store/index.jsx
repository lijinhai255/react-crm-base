import { action , observable } from 'mobx'

class Store {
    @observable qiphon = "csdn Qiphon"
    @observable qq = "767521025"
    @action change(val){
        this.qiphon += val
    }
}

export default new Store()