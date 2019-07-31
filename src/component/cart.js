import React, { Component } from 'react'
import './store/connect'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './store/connect'
import './cart.css'
import Button from '@material-ui/core/Button'

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
        const infos = this.props.info.select
        return (
            <div className='cartt'>
                {infos.map((info, index) => {
                    return (
                        <div className='barr' key={index}>
                            <p>{info.name}</p>
                            <img src={info.src} alt=''></img>
                            <span className='jmr'>价格：{info.price}</span>
                            <span className='jmr '>码数：{info.mashu}</span>
                            <div className='numr'>
                                <button onClick={this.add.bind(this, index)}>+</button>
                                <span className='numr'>{info.num}</span>
                                <button onClick={this.reduce.bind(this, index)}>-</button>
                            </div>
                            <span className='single'>￥{info.num * info.price}</span>
                        </div>
                    )
                })}
                <div className='ccart'>
                    ￥{infos.reduce((total, e) => {
                        return total + e.num * e.price
                    }, 0)}   
                    <Button onClick={this.buy.bind(this)} variant='contained'>购买</Button>
                </div>
                <div className='home'>
                </div>
            </div>
        )
    }
}

export default Cart = connect(mapStateToProps, mapDispatchToProps)(Cart)
