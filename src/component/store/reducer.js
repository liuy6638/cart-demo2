import shop from './shop.json'
import './connect'

const store = {
    list: shop.shop.list,
    buy: shop.shop.buy = [],
    select: shop.shop.select = [],
    total: shop.shop.total
}

const reducer = (state = store, action) => {
    console.log(state)
    switch (action.type) {
        case 'select':
            const target_list = { ...state.list[action.index], num: 1 };
            state.select.splice(state.select.length, 1, Object.assign(target_list))
            return state
        case 'add':
            const target_select_index_add = { ...state.select[action.index] };
            target_select_index_add.num += 1
            state.select.splice(action.index, 1, Object.assign(target_select_index_add))
            return { ...state, select: state.select }
        case 'reduce':
            const target_select_index_reduce = { ...state.select[action.index] };
            if (target_select_index_reduce.num === 1) {
                state.select.splice(action.index, 1)
            } else {
                target_select_index_reduce.num -= 1
                state.select.splice(action.index, 1, Object.assign(target_select_index_reduce))
            }
            return { ...state, select: state.select }
        case 'buy':
            const target_select_buy = [ ...state.select ]
            const target_buy_new = {}
            const today = new Date()
            const data = today.getFullYear() + '-' +
            (today.getMonth() + 1) + '-' +
            today.getDate() + '-' +
            today.getHours() + '-' +
            today.getMinutes() + '-' +
            today.getSeconds();
            target_buy_new.kind = state.select.length
            target_buy_new.info = target_select_buy
            target_buy_new.time = data
            state.select.splice(0, state.select.length)
            state.buy.splice(state.buy.length, 1, target_buy_new)
            return { ...state, select: state.select, buy: state.buy }
        case 'delete':
            state.buy.splice(action.index, 1)
            return { ...state, buy: state.buy }
        default:
            return state
    }
}

export default reducer