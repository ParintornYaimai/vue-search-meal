import {createStore} from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutation'
import state from './state'

const store = createStore({
    state,
    actions,
    mutations,
    getters
})

export default store