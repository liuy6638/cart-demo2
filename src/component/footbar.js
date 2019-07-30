import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import router from "./router"
import "./footbar.css"

class Footbar extends Component {
    render() {
        return (
            <Router>
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
                {router.map(({ path, exact = true, componentName }, index) => {
                    return (
                        <Route
                            path={path}
                            exact={exact}
                            component={componentName}
                            key={index}
                        />
                    )

                })}
            </Router>
        )
    }
}

export default Footbar