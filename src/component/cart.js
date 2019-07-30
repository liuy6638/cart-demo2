import React, { Component } from 'react'
import './store/connect'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './store/connect'
import './cart.css'

class Cart extends Component {
    add = (index) => {
        this.props.Increase(index);
    }
    reduce = (index) => {
        this.props.Decrease(index);
    }
    buy = () => {
        this.props.Buy();
    }
    render() {
        const infos = this.props.info.select || []
        return (
            <div className='cart'>
                {infos.map((info, index) => {
                    return (
                        <div className='barr' key={index}>
                            <p>{info.name}</p>
                            <img src={info.src} alt=''></img>
                            <span className='jmr'>价格：{info.price}</span>
                            <span className='jmr '>码数：{info.mashu}</span>
                            <div className='numr'>
                                <button onClick={this.add.bind(this, index)}>+</button>
                                <span className='numr'>{info.num || 0}</span>
                                <button onClick={this.reduce.bind(this, index)}>-</button>
                            </div>
                            <span className='single'>￥{info.num * info.price}</span>
                        </div>
                    )
                })}
                <div className='cart'>
                    ￥{this.props.info.total}
                    <button onClick={this.buy.bind(this)}>购买</button>
                </div>
            </div>
        )
    }
}

export default Cart = connect(mapStateToProps, mapDispatchToProps)(Cart)
