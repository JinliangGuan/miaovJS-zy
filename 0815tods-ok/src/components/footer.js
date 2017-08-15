import React,{Component} from "react";

class FooterModel extends Component{

        disFn = (ev) =>{
                if(ev.target.tagName == 'A'){
                        //console.log('')
                        this.props.PdisFn(ev.target.id);
                }
        }
        clearNo = () =>{
                this.props.PclearNoFn();
        }
        render(){
                //console.log(this.props.disData)
                return (
                        <footer className="footer" >
                                  <span className="todo-count">
                                        <strong>{this.props.checkNum}</strong>
                                        <span>条未选中</span>
                                  </span>
                                  <ul className="filters" onClick = {this.disFn}>
                                            <li>
                                                    <a href="#/all" className={this.props.disData[0]} id="disAll">全部</a>
                                            </li>
                                            <li>
                                                    <a href="#/active" className={this.props.disData[1]} id="disNo">未完成</a>
                                            </li>
                                            <li>
                                                    <a href="#/completed" className={this.props.disData[2]} id="disYes">已完成</a>
                                            </li>
                                  </ul>
                                  <button
                                    className="clear-completed"
                                    onClick = {this.clearNo}
                                  >
                                        清除完成项
                                 </button>
                        </footer>
                )
        }
}




export default FooterModel;
