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
              const {id, image, href1 ,href2} = item;
              return(
                <>
                <div key= {id} className="pro">
                  <img src={image} alt=""/>
                <div className="des">
                <a href={href1}>
                <button  className="btn btn2"> starter file</button>
                </a>

                <a href={href2}>
                   <button  className="btn btn2"> source codes</button>
                </a>
                   </div>
                   </div>
                     </>
              )
            })
          }

          </div>
          <a href = "mailto:mishaeljohnson56@gmail.com">
          <button  class="basebtn"> HIRE ME</button>
          </a>
    </section>
    )

 }

 export default Project
