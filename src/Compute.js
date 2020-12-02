//https://www.youtube.com/watch?v=NE2UgLd1-2k
//First install @material-ui/core using npm
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@material-ui/core'
import Data from './Data'
import { fontWeight, height } from '@material-ui/system';

function Compute() {

    const [count, setCount] = useState('');

    return (
        <div className="main">

        <Grid lg={12} item container spacing={2}>
            <Grid item lg={3} xs={12}> <h1 style={{ backgroundColor: '#F8F9F9',height:120 }}><div>
                <p style={{ fontSize: 16, fontWeight: 2 }}>Quantity: <b>{Data[0].Quantity + Data[1].Quantity + Data[2].Quantity}</b></p>
                <p style={{ fontSize: 16, fontWeight: 2 }}>Avg Cost:<b> ${Data[0].AvgCost + Data[1].AvgCost + Data[2].AvgCost}</b></p>
                <p style={{ fontSize: 16, fontWeight: 2 }}>Invested Amount:<b>$ {Data[0].Invested_amount + Data[1].Invested_amount + Data[2].Invested_amount}</b></p>
            </div></h1></Grid>
            <Grid item lg={3} xs={12}> <h1 style={{ backgroundColor: '#F8F9F9',height:120 }}><div>
            <p style={{ fontSize: 16, fontWeight: 2 }}>Market Vaue: <b>${(Data[0].Price + Data[1].Price + Data[2].Price) * (Data[0].Quantity + Data[1].Quantity + Data[2].Quantity)}</b></p>
            <p style={{ fontSize: 16, fontWeight: 2 }}>percent of profit: <b>{Data[0].portfolio_value + Data[1].portfolio_value + Data[2].portfolio_value}%</b></p>
            <div class="progress">
              <div class="progress-bar bg-success" style={{ width: "50.73%" }}><b>{Data[0].portfolio_value + Data[1].portfolio_value + Data[2].portfolio_value}%</b></div>
            </div></div></h1></Grid>
            <Grid item lg={3} xs={12}> <h1 style={{ backgroundColor: '#F8F9F9',height:120 }}><div>
            <p style={{ fontSize: 16, fontWeight: 2 }}>Unrealized pL: <b>{Data[0].unrealizred_PnL + Data[1].unrealizred_PnL + Data[2].unrealizred_PnL}</b></p>
            <p style={{ fontSize: 16, fontWeight: 2 }}>Return:<b>{Data[0].return + Data[1].return + Data[2].return}%</b></p>
            <div class="progress">
              <div class="progress-bar" style={{ width: "16.48%" }}><b>{Data[0].return + Data[1].return + Data[2].return}%</b></div>
            </div>
          </div></h1></Grid>
            <Grid item lg={3} xs={12}><div className="e" style={{ backgroundColor: '#F8F9F9', height:120 }}>
            <button type="button" class="btn btn-outline-danger button">Buy</button> <br /> <br /> 
            <button type="button" class="btn btn-outline-danger">Sell</button>
          </div></Grid>

        </Grid>

        <Grid lg={12} item container spacing={2}>
        <Grid item lg={3} xs={12}> <h1 style={{ backgroundColor: '#F8F9F9',height:120}}><div>
            <p style={{ fontSize: 16, fontWeight: 2 }}>Quantity: <b>{Data[3].Quantity + Data[4].Quantity + Data[5].Quantity}</b></p>
            <p style={{ fontSize: 16, fontWeight: 2 }}>Avg Cost:<b> ${Data[3].AvgCost + Data[4].AvgCost + Data[5].AvgCost}</b></p>
            <p style={{ fontSize: 16, fontWeight: 2 }}>Invested Amount: <b>${Data[3].Invested_amount + Data[4].Invested_amount + Data[5].Invested_amount}</b></p>
        </div></h1></Grid>
        <Grid item lg={3} xs={12}> <h1 style={{ backgroundColor: '#F8F9F9',height:120 }}><div>
        <p style={{ fontSize: 16, fontWeight: 2 }}>Market Vaue: <b>${(Data[3].Price + Data[4].Price + Data[5].Price) * (Data[3].Quantity + Data[4].Quantity + Data[5].Quantity)}</b></p>
        <p style={{ fontSize: 16, fontWeight: 2 }}>percent of profit: <b>{Data[3].portfolio_value + Data[4].portfolio_value + Data[5].portfolio_value}%</b></p>
        <div class="progress">
          <div class="progress-bar bg-success" style={{ width: "47%" }}><b>{Data[3].portfolio_value + Data[4].portfolio_value + Data[5].portfolio_value}%</b></div>
        </div></div></h1></Grid>
        <Grid item lg={3} xs={12}> <h1 style={{ backgroundColor: '#F8F9F9',height:120 }}><div>
        <p style={{ fontSize: 16, fontWeight: 2 }}>Unrealized pL: <b>{Data[3].unrealizred_PnL + Data[4].unrealizred_PnL + Data[5].unrealizred_PnL}</b></p>
        <p style={{ fontSize: 16, fontWeight: 2 }}>Return:<b>{Data[3].return + Data[4].return + Data[5].return}%</b></p>
        <div class="progress">
          <div class="progress-bar" style={{ width: "24%" }}><b>{Data[3].return + Data[4].return + Data[5].return}%</b></div>
        </div>
      </div></h1></Grid>
        <Grid item lg={3} xs={12}> <h1 style={{ backgroundColor: '#F8F9F9',height:120 }}><div style={{ backgroundColor: '#F8F9F9', height:120 }}>
        <button type="button" class="btn btn-outline-danger">Buy</button><br />
        <button type="button" class="btn btn-outline-danger">Sell</button>
      </div></h1></Grid>

    </Grid>
    </div>
        
    );



}

export default Compute;