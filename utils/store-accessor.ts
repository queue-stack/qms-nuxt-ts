import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Counter from '@/store/counter'

let counterStore: Counter

function initialiseStores(store: Store<any>) {
  counterStore = getModule(Counter, store)
}

export { initialiseStores, counterStore }
