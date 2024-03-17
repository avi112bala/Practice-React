import { useState } from "react"
import data from './data'
import './style.css'

export default function Accordian(){
    const [selectedItem,setSelecteditem]=useState(null);
    const handlesingleclick=(getitemid)=>{
        setSelecteditem(getitemid===selectedItem?null:getitemid);
    }
    return <div className="wrapper">
        <div className="accordian">
            {
                data &&data.length>0?data.map((dataitem,index)=>{
                    return (
                      <div className="item" key={index}>
                        <div className="title" onClick={()=>handlesingleclick(dataitem.id)}>
                          <h2>{dataitem.question}</h2>
                          <span>+</span>
                        </div>
                        {
                            selectedItem===dataitem.id ?
                            <div className="content">{dataitem.answer}</div>
                            :
                            ''
                        }
                      </div>
                    );
                })
                :''
            }
        </div>
    </div>
}