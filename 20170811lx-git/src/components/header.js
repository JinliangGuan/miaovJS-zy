import React,{Component} from "react";

class HeadModel extends Component{
changeVal = (ev) => {
        this.props.Fn(ev.target.value)
}
  render(){
    return (
      <header className="header" >
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="请输入内容"
            value={this.props.v}
            onChange = {this.changeVal}
        />
      </header>
    )
  }
}
export default HeadModel;
