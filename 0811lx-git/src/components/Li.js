import React,{Component} from "react";


class LiModel  extends Component{
        changeCheck = (ev) =>{
                this.props.itemCheckFn(this.target.id)
        }
        render(){

                return (
                        <li className="completed">
                          <div className="view">
                              <input
                                        className="toggle"
                                        type="checkbox"
                                        checked={this.props.checked}
                                        onChange = {this.changeCheck}
                                />
                              <label>{this.props.con}</label>
                              <button className="destroy"></button>
                          </div>
                        </li>
                )
        }
}

export default LiModel ;
