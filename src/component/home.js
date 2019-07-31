import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './store/connect'
import './home.css'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'


class Home extends Component {
    select = (index) => {
        this.props.select(index)
    }
    render() {
        const infos = this.props.info.list
        return (
            <CssBaseline className='homee'>
                {infos.map((info, index) => {
                    return (
                        <div className='bar' key={index}>
                            <p>{info.name}</p>
                            <img src={info.src} alt=''></img>
                            <span className='jm'>价格：{info.price}</span>
                            <span className='jm '>码数：{info.mashu}</span>
                            <Button onClick={this.select.bind(this, index)} variant='contained' color='primary'>加入购物车</Button>
                        </div>
                    )
                })}
                <div className='home'>
                </div>
            </CssBaseline>
        )
    }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home)