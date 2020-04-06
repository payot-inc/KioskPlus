import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    company: {
      name: '데일리워시',
      discount: 0.1,
    },
    user: {
      phone: '010-0000-0000',
      point: 1000,
      machine: {},
      product: {},
      payAmount: 0,
    }
  },
  mutations: {
    setCompany(state, value) {
      state.company = value;
    },
    setMachine(state, machine) {
      state.user.machine = machine;
    },
    setProduct(state, product) {
      state.user.product = product;
    },
    setPayAmount(state, amount) {
      state.user.payAmount = amount;
    }
  },
  actions: {},
  modules: {},
});
