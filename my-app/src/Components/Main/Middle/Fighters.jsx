import React from "react";
import { NavLink } from "react-router-dom";
import { EshAC } from "../../../Redux/fighters-reducer";
import StoreContext from "../../../StoreContext";
import z from "./Fighters.module.css";


const Fighters = (props) => { 

  return ( <StoreContext.Consumer>
    
    {
             (store)=>{
              // let esh = store.dispatch(EshAC())
              let state = store.getState()
              let MidFight = state.fighters.mFighter.map((f) => {

                return (
                  <div>
                    <div>
                      <img src={f.link} />
                    </div>
                    <div>{f.name}</div>
                    <div>record-{f.record}</div>
                    <div>weight-{f.weight}</div>
                    <div>age-{f.age} </div>
                  </div>
                );
              });
            
              return (
                <div className={z.middle}>
                  <div>{MidFight}</div>
                  {/* <button onClick={esh}>click</button> */}
                </div>
              );
            }
  
          }
            </StoreContext.Consumer>  
        )

        }


 


export default Fighters;
