import React,{Component} from "react";

class HeadModel extends Component{
changeVal = (ev) => {
        this.props.PvalFn(ev.target.value)
}
keyFn = (ev) => {
        if(ev.keyCode === 13){
                this.props.addOneFn();
        }
        // if(ev.keyCode === 27){
        //         this.props.EscFn();
        //         ev.target.blur();
        // }
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
            onKeyUp = {this.keyFn}
        />
      </header>
    )
  }
}
export default HeadModel;
