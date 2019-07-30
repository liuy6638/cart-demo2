import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './store/connect'
import './home.css'

class Home extends Component {
    select = (index) => {
        this.props.select(index)
    }
    render() {
        const infos = this.props.info.list
        return (
            <div className='homee'>
                {infos.map((info, index) => {
                    return (
                        <div className='bar' key={index}>
                            <p>{info.name}</p>
                            <img src={info.src} alt=''></img>
                            <span className='jm'>价格：{info.price}</span>
                            <span className='jm '>码数：{info.mashu}</span>
                            <button onClick={this.select.bind(this, index)}>加入购物车</button>
                        </div>
                    )
                })}
                <div className='home'>
                </div>
            </div>
        )
    }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home)