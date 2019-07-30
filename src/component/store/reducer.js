import shop from './shop.json'
import './connect'

const store = {
    list: shop.shop.list,
    buy: shop.shop.buy,
    select: shop.shop.select,
    total: shop.shop.total
}

const reducer = (state = store, action) => {
    console.log(state)
    switch (action.type) {
        case 'select':
            const target_list = state.list[action.index];
            const num = target_list.num = 1
            state.select === undefined ? Object.assign(state.select = []) : console.log(state.select)
            state.select.splice(state.select.length, 1, Object.assign(target_list, { num }))
            state.total === undefined ? Object.assign(state.total = 0) : console.log(state.total)
            state.total += target_list.price
            return { ...state, select: state.select, total: state.total }
        case 'add':
            const target_add = state.select[action.index];
            const num_add = ++target_add.num
            state.select.splice(action.index, 1, Object.assign(target_add, { num_add }))
            state.total += Object.assign(target_add.price)
            return { ...state, num: target_add.num, total: state.total }
        case 'reduce':
            const target_reduce = state.select[action.index]
            target_reduce.num > 1 ? Object.assign(--target_reduce.num) : state.select.splice(action.index, 1)
            state.total -= Object.assign(target_reduce.price)
            return { ...state, select: state.select, total: state.total }
        case 'buy':
            const target_buy = state.select
            state.buy === undefined ? Object.assign(state.buy = []) : console.log(state.select)
            const index = state.buy.length
            state.buy[index] = Object.assign({})
            state.buy[index].kind = Object.assign([state.select.length])
            const today = new Date()
            const data = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();
            state.buy[index].time = Object.assign([data])
            state.buy[index].info = target_buy
            state.buy[index].total = Object.assign([state.total])
            state.select = []
            state.total = 0
            return { ...state, select: state.select, total: state.total, buy: state.buy }
        default:
            return state
    }
}

export default reducer