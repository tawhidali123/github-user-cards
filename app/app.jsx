"use strict";

import React from "react";
import ReactDOM from "react-dom";
import "style-loader!css-loader!foundation-sites/dist/css/foundation.min.css";
import "style-loader!css-loader!sass-loader!./style/app.scss";


import MainComponent from "MainComponent";

 $(document).foundation();

ReactDOM.render(

<MainComponent></MainComponent>,

document.getElementById("myApp") );
