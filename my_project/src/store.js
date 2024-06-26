import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            count: 100000,
            transaction: null,
            transactions: [1, 2, 3, 4]
        }
    },
    getters: {
       TransactionFiltered(state) {
           return state.transactions.filter(transaction => transaction % 2 === 0)
       }
    }
    ,
    mutations: {
        increment(state) {
            state.count++
        },
        setTransaction(state, transactionPayload) {
            state.transaction = transactionPayload
        }
    },
    actions: {
        async fetchTransaction({ commit }, { id }) {
            const res = await fetch(`http://localhost:3000/transactions/${id}`)
            const data = await res.json()
            commit('setTransaction', data)
        }
    }
})

export default store