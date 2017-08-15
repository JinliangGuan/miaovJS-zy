import React,{Component} from "react";


class LiModel  extends Component{
        constructor(props){
                super(props);
                this.state = {
                        dbOnoff:false,
                        dbVal:this.props.con
                }
        }
        changeCheck = () =>{
                //console.log(ev.target.id)
                this.props.itemCheckFn(this.props.id)
        }
        delFn = (ev) =>{
                this.props.delItemFn(this.props.id)
        }
        dbclick =() =>{
                this.setState({
                        dbOnoff:true
                },()=>{
                        this.db.focus();
                })
        }

        dbChangVal = (ev) =>{
                this.setState({
                        dbVal : ev.target.value
                })
        }
        dbSubmit = (ev) => {
                //con:'白日依山尽',checked:true,id:1
                let{id,checked} = this.props;
                // let newCon = this.db.value?this.db.value:con;
                if(this.db.value){
                        let newItemData = {
                                con:this.state.dbVal,
                                checked:checked,
                                id:id
                        }
                        this.props.changeDBTxt(newItemData);
                        this.setState({
                                dbOnoff:false
                        })
                }else{
                        alert('请输入内容后再提交')
                }
        }
        dbKeyUp = (ev) =>{
                if(ev.keyCode === 13){
                        this.dbSubmit()
                }
                if(ev.keyCode === 27){
                        this.setState({
                                dbOnoff:false,
                                dbVal:this.props.con
                        })
                }
        }
        render(){
                let{checked} = this.props;
                let sClass = checked?'completed':'';
                if(this.state.dbOnoff){
                        sClass+=" editing";
                }

                return (
                        <li className = {sClass}>
                          <div className="view">
                              <input
                                        className="toggle"
                                        type = "checkbox"
                                        id = {this.props.id}
                                        checked = {this.props.checked}
                                        onChange = {this.changeCheck}
                                />
                              <label onDoubleClick = {this.dbclick}> {this.props.con} </label>
                              <button
                                      className="destroy"
                                      onClick = {this.delFn}
                                 >
                                 </button>
                          </div>
                          <input
                            ref = {(elem) => {this.db = elem}}
                            className ="edit"
                            value = {this.state.dbVal}
                            onChange = {this.dbChangVal}
                            onBlur = {this.dbSubmit}
                            onKeyUp = {this.dbKeyUp}
                          />
                        </li>
                )
        }
}

export default LiModel ;
