export default {
  namespaced: true,
  state: {
    clients: [
      { name: "Марія", age: 19, description: 'Марія, 19 років Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд', foto: 'maria.jpg' },
      { name: "Степан", age: 61, description: 'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?', foto: 'stepan.png' },
      { name: "Любов", age: 58, description: 'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.', foto: 'lubov.png' },
      { name: "Олександр", age: 20, description: 'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.', foto: 'oleksandr.png' },
      { name: "Ірина", age: 55, description: 'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.', foto: 'iruna.png' },
    ],
    currentClient: {},
    cur: 0,
    resultSale: [
      {
        count: 0, id: 1,
      },
      { count: 0, id: 2 },
      { count: 0, id: 3 }
    ],
  },
  actions: {
    resetGame({ commit }) {
      commit('setResetState')
    },
    getClient({ commit }, idx) {
      commit('setCurrentClient', idx)
    },
    updateCurClient({ state, dispatch }) {
      dispatch("getClient", state.cur)
    },
    updateResultSaleAndCur({ commit }, data) {
      commit('setUpdateResultSaleAndCur', data)
    }
  },
  mutations: {
    setCurrentClient(state, curClient) {
      state.currentClient = state.clients[curClient];
    },
    setResetState(state) {
      state.cur = 0,
        state.curClient = {}
      state.resultSale = [
        { count: 0, id: 1 },
        { count: 0, id: 2 },
        { count: 0, id: 3 }
      ]
    },
    setUpdateResultSaleAndCur(state, data) {
      state.resultSale.map((el) => {
        if (el.id === +data) {
          el.count += 1
        }
      });
      state.cur = state.cur + 1;
    }

  },
  getters: {
    currentClient: ({ currentClient }) => { return currentClient },
    clients: ({ clients }) => { return clients },
    cur: ({ cur }) => { return cur },
    resultSale: ({ resultSale }) => { return resultSale },
  },
}