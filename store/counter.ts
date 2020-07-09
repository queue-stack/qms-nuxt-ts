import { Module, Action, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({
  name: 'counter',
  stateFactory: true,
  namespaced: true,
})
export default class Counter extends VuexModule {
  public counter: number = 0

  get getCounter() {
    return this.counter
  }

  @Mutation
  INCREMENT_COUNTER() {
    this.counter++
  }

  @Mutation
  DECR_COUNTER() {
    this.counter--
  }

  @Action
  increment() {
    this.context.commit('INCREMENT_COUNTER')
  }

  @Action
  decr() {
    this.context.commit('DECR_COUNTER')
  }
}
