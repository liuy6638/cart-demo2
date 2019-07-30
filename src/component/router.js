import Home from './home'
import Cart from './cart'
import Order from './order'
import Mine from './mine'

let router = [
    {
        path: '/',
        componentName: Home,
        exact: true
    },
    {
        path: '/cart',
        componentName: Cart
    },
    {
        path: '/order',
        componentName: Order
    },
    {
        path: '/mine',
        componentName: Mine
    }

]


export default router