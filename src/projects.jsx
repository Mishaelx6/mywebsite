 import React, {useState} from "react";
 import "./project.css";
 import firstpic from "./assets/./Screenshot1.png"
 import data from "./data"

  function Project (){
    const[list, setData] = useState(data)

    return(
      <section id="product1" class="section-p1">
        <h1 className="sub-title sub2">Projects</h1>

        <div className="pro-container">
          {
           list.map((item) => {
              const {id, image} = item;
              return(
                <>
                <div key= {id} className="pro">
                  <img src={image} alt=""/>
                <div className="des">
                <button  className="btn btn2"> starter file</button>
                     <button  className="btn btn2"> source codes</button>
                   </div>
                   </div>
                     </>
              )
            })
          }

          </div>
          <button class="basebtn"> HIRE ME</button>
    </section>
    )

 }

 export default Project
