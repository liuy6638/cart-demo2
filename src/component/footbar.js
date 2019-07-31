import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footbar.css"

class Footbar extends Component {
    render() {
        return (
                <div className='footbar'>
                    <div className='home'>
                        <Link to='/'>主页</Link>
                    </div>
                    <div className='cart'>
                        <Link to='/cart'>购物车</Link>
                    </div>
                    <div className='order'>
                        <Link to='/order'>订单</Link>
                    </div>
                    <div className='mine'>
                        <Link to='/mine'>我的</Link>
                    </div>
                </div>
        )
    }
}

export default Footbar