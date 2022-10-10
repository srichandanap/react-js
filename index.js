import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';
import Time from "./Component/Time";
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<Time />);