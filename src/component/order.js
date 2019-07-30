import React, { Component } from 'react'
import './store/connect'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './store/connect'
import './order.css'

class Order extends Component {
    detail = () => {
        document.getElementsByClassName('order_info').innerHTML(
            (this.props.info.buy).map((info, index) => {
                return (
                    <div className='details'>
                        <div className='bar' key={index}>
                            <p>{info.name}</p>
                            <img src={info.src} alt=''></img>
                            <span className='jm'>价格：{info.price}</span>
                            <span className='jm '>码数：{info.mashu}</span>
                        </div>
                    </div>
                )
            })
        )
    }
    render() {
        const infos = this.props.info.buy || []
        return (
            <div className='orderr'>
                {infos.map((info, index) => {
                    return (
                        <div className='order_info' key={index}>
                            <div className='time'>日期:{info.time[0]}</div>
                            <div className='kind'>种类:{info.kind[0]}</div>
                            <div className='total'>￥{info.total[0]}</div>
                            <div className='info'>
                                <button onClick={this.detail.bind(this)}>查看详情</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Order = connect(mapStateToProps, mapDispatchToProps)(Order)