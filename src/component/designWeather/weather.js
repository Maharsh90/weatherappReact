import React from "react";
import "./style.css";
const Weather = () =>{
    return ( 
    <>
        <div className="main">
            <div className="sub">
                <div className="search">
                    <input type="text" className="item" placeholder="Search"/>
                    <button className="searchBtn">Search</button>
                </div>
            </div>
            <div className="card">
                    <div className="weathericon">
                        <i className={"wi wi-day-sunny"}></i>
                    </div>
                    <div className="weatherinfo">
                        <div className="temprature">
                            <span>23.5&deg;</span>
                        </div>
                        <div className="description">
                            <div className="weatherCondition">ClOUDS</div>
                            <div className="place">Tokyo,JP</div>
                        </div>
                        <div className="date">
                            {new Date().toLocaleString() }
                        </div>
                    </div>
                        <div className="bottom">
                            <div className="bottomDetail">
                                <p className="extraDetailInfo"><i className={"wi wi-sunset"}></i></p>
                                <p>Hello</p>
                            </div>
                            <div className="bottomDetail">
                                <p className="extraDetailInfo"><i className={"wi wi-sunset"}></i></p>
                                <p>Hello</p>
                            </div>
                            <div className="bottomDetail">
                                <p className="extraDetailInfo"><i className={"wi wi-sunset"}></i></p>
                                <p>Hello</p>
                            </div>
                            <div className="bottomDetail">
                                <p className="extraDetailInfo"><i className={"wi wi-sunset"}></i></p>
                                <p>Hello</p>
                            </div>    
                        </div>    
            </div>
        </div>
    </>
    );
}

export default Weather;