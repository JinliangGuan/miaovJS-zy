import React,{Component} from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import HeadModel from "./components/header";
import LiModel  from "./components/Li";

class App extends Component{
    constructor(){
        super();
        this.state = {
            val:'',
            liData:[
                            {con:'白日依山尽',checked:true,id:1},
                            {con:'粒粒皆辛苦',checked:false,id:2},
                            {con:'更上一层楼',checked:false,id:3}
                        ]
        }
    }
    itemCheckFn = (id) =>{
            let {liData} = this.state;
            let arr = Object.assign(liData);
            
    }
    PvalFn = (newVal) => {
        this.setState({
            val:newVal
        })
    }
  render(){
          let {liData} = this.state;
          let list = null;
          list = liData.map((e,i)=>{
                  let data = {
                          con:e.con,
                          checked:e.checked,
                          id:e.id,
                          key:i
                  }
                 return <LiModel  {...data}/>
          })




            return (
                      <div>
                            <HeadModel  v={this.state.val} Fn={this.PvalFn}/>
                            <section className="main">
                                  <input
                                    className="toggle-all"
                                    type="checkbox"
                                    checked=""
                                    />

                                  <ul className="todo-list">
                                      {list}
                                  </ul>
                         </section>
                 </div>
        )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
