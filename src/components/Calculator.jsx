import React, { useState } from "react";
import '../css/calc.css'

import { IoPersonOutline } from "react-icons/io5";

const Calculator = () => {
    const [tipVal, setTIpVal] = useState()
    const [total, setTotal] = useState()
    const [bill, setBill] = useState()
    const [persons, setPersons] = useState()
  return (
    <div className="main">
        <h1 className="heading">Tip Calculator</h1>
      <div className="spliter">
      <div className="sectOne">
        <div className="bill">
          <p>Bill</p>
          <div className="billInput">
            <span>$</span>
            <input type="text" name="bill" value={bill} onChange={(e)=>setBill(e.target.value)}/>
          </div>
        </div>
        <div className="selectTip">
            <p>Select Tip %</p>
            <div className="tipButtons">
                <button onClick={()=> setTIpVal(0.05)}>5%</button>
                <button onClick={()=>setTIpVal(0.10)}>10%</button>
                <button onClick={()=>setTIpVal(0.15)}>15%</button>
                <button onClick={()=>setTIpVal(0.25)}>25%</button>
                <button onClick={()=>setTIpVal(0.50)}>50%</button>
                <input type="text" className="tipInput"/>
            </div>
        </div>
        <div className="noPeople">
            <p>Number of People</p>
            <div className="billInput">
            <IoPersonOutline/>
            <input type="text" value={persons} onChange={(e)=>setPersons(e.target.value)}/>
            </div>
        </div>
      </div>
      <div className="totals">
        <div className="tipDisplay">
            <span>Tip Amount <br/> /person</span>
            <span className="totalvalue">${(tipVal*bill).toFixed(2)}</span>
        </div>
        <div className="totalDisplay">
            <span>Total<br/> /person</span>
            <span className="totalvalue">${(tipVal*persons*bill).toFixed(2)}</span>
        </div>
        <button onClick={()=>{setTIpVal(0)}}>RESET</button>
      </div>
      </div>
    </div>
  );
};

export default Calculator;
