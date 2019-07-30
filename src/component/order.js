import React, { Component } from 'react'
import './store/connect'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './store/connect'
import './order.css'

class Order extends Component {
    detail = () => {

    }
    render() {
        const infos = this.props.info.buy || []
        return (
            <div className='orderr'>
                {infos.map((info, index) => {
                    return (
                        <div className='order_info' key={index}>
                            <div className='time qq'>日期：{info.time[0]}</div>
                            <div className='kind qq'>种类：{info.kind[0]}</div>
                            <div className='total qq'>总额：{info.total[0]}</div>
                            <div className='info ww'>
                                {(info.info).map((info, index) => {
                                    return (
                                            <div className='barrr' key={index}>
                                                <p>{info.name}</p>
                                                <img src={info.src} alt=''></img>
                                                <span className='jmrr'>价格：{info.price}</span>
                                                <span className='jmrr '>码数：{info.mashu}</span>
                                                <span className='jmrr'>件数：{info.num} </span>
                                                <span className='jmrr'>￥{info.num * info.price} </span>
                                            </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                <div className='home'>
                </div>
            </div>
        )
    }
}

export default Order = connect(mapStateToProps, mapDispatchToProps)(Order)