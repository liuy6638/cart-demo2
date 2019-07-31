import React, { Component } from 'react'
import './store/connect'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './store/connect'
import './order.css'
import DeleteIcon from '@material-ui/icons/Delete';

class Order extends Component {
    delete = (index) => {
        this.props.Delete(index)
    }
    render() {
        const infos = this.props.info.buy

        return (
            <div className='orderr'>
                {infos.map((info, index) => {
                    console.log(info)
                    return (
                        <div className='order_info' key={index}>
                            <div className='time qq'>日期：{info.time}</div>
                            <div className='kind qq'>种类：{info.kind}</div>
                            <div className='total qq'>总额：{info.info.reduce((total, e) => {
                                return total + e.num * e.price
                            }, 0)}</div>
                            <DeleteIcon onClick={this.delete.bind(this, index)} className='qwq'></DeleteIcon>
                            <div className='info ww'>
                                {(info.info).map((info, index) => {
                                    console.log(info)
                                    return (
                                        <div className='barrr' key={index}>
                                            <p>{info.name}</p>
                                            <img src={info.src} alt=''></img>
                                            <span className='jmrr'>￥：{info.price}</span>
                                            <span className='jmrr '>码数：{info.mashu}</span>
                                            <span className='jmrr'>件数：{info.num} </span>
                                            <span className='jmrr'>总计：{info.num * info.price} 元</span>
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