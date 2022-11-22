import React from "react";

import BannerPath from '../../assets/images/banner.jpeg'
import './banner.css'

//stateless component
const Banner=()=>(
    <img src={BannerPath} className="bannerStyle" />
)

export default Banner;
