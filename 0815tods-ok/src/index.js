import React,{Component} from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import HeadModel from "./components/header";
import LiModel  from "./components/Li";
import FooterModel from "./components/footer";

class App extends Component{
    constructor(){
        super();
        this.state = {
            val:'',
            display:'disAll',
            disData:['selected','',''],
            liData:[]
        }
    }
    componentDidMount(){
            this.setState({
                     liData:getLocalData('data')
      });
    }
    //选中该条数据
    itemCheckFn = (id) =>{
            let {liData} = this.state;
            let arr = Object.assign(liData);
            arr.forEach((e,i)=>{
                        if(e.id == id){
                                e.checked = !e.checked;
                        }
            })
            this.setState({
                    liData:arr
            })

    }
    //删除该条数据
    delItemFn = (id) => {
            let{liData} = this.state;
            let nData = Object.assign(liData);
            nData = nData.filter((e,i)=>{
                            return e.id != id;
            })
            this.setState({
                    liData:nData
            })
    }
    //同步</import>输入框的值
    PvalFn = (newVal) => {
        this.setState({
            val:newVal
        })
    }
    //双击修改数据
    changeDBTxt =(newItemData)=> {
            let {liData} = this.state;
            let nData = Object.assign(liData);
            nData.forEach((e)=>{
                    if(e.id == newItemData.id){
                            e.con = newItemData.con
                    }
            })
            this.setState({
                   liData:nData
            })
    }
    //添加数据
    addOneFn = () =>{
            let {liData} = this.state;
            let addData = Object.assign(liData);
            let nId = +new Date();
            let newOne = {
                    con:this.state.val,
                    checked:false,
                    id:nId
            }
            addData.push(newOne);
            this.setState({
                    liData:addData,
                    val:''
            })
    }
    EscFn =()=>{
            this.setState({
                    val:''
            })
    }
    //全选
    checkAllFn = (ev) => {
            let {liData} = this.state;
            let nData = Object.assign(liData);

            var allCheckBtn = ev.target;
            console.log(allCheckBtn.checked)
            nData.forEach((e,i)=>{
                    e.checked = allCheckBtn.checked;
            })
            this.setState({
                   liData:nData
            })
    }
    //切换显示
    PdisFn = (disStr) =>{
                let nDisData = null;
                if(disStr == 'disAll'){
                        nDisData = ['selected','','']
                }else if(disStr =='disNo'){
                        nDisData = ['','selected','']
                }else if(disStr == 'disYes'){
                        nDisData = ['','','selected']
                }
                this.setState({
                        display:disStr,
                        disData:nDisData
                })
    }
    //清空未完成
    PclearNoFn = () =>{
            let {liData} = this.state;
            let nData = Object.assign(liData);
            nData = nData.filter((e)=> e.checked == false)
            this.setState({
                    liData:nData
            })
    }

  render(){
                //li内容的预处理(全显示，未完成，已完成)========
                  let {liData} = this.state;

                  let disItemArr = null;
                  switch (this.state.display) {
                          case 'disYes':
                                disItemArr = liData.filter((e) => e.checked == true)
                                break;
                          case 'disNo':
                                disItemArr = liData.filter((e) => e.checked == false)
                                break;
                          default:
                                disItemArr = Object.assign(liData)
                          break;
                  }

                  let list = null;
                  list = disItemArr.map((e,i)=>{
                          let data = {
                                  con:e.con,
                                  checked:e.checked,
                                  id:e.id,
                                  key:i,
                                  itemCheckFn:this.itemCheckFn,
                                  delItemFn:this.delItemFn,
                                  changeDBTxt:this.changeDBTxt
                          }
                         return <LiModel  {...data}/>
                  })
                //   顶部栏数据========
                  let hdData = {
                          v:this.state.val,
                          PvalFn:this.PvalFn,
                          addOneFn:this.addOneFn,
                          EscFn:this.EscFn
                  }
                  //全选图标是否亮========
                  let checkAllIcn = null;
                  let isAll = false;
                  let boxArr = [];
                  liData.forEach((e,i)=>{
                          boxArr.push(e.checked)
                  })
                  isAll = boxArr.includes(false)?false:true;

                 //footer的数据预处理========
                 let footerEle = null;
                 if(liData.length){
                         let checkNum = 0;
                         boxArr.forEach((e)=>{
                                 if(!e){
                                         checkNum++;
                                 }
                         })

                         let ftData = {
                                 checkNum:checkNum,
                                 display:this.state.display,
                                 disData:this.state.disData,
                                 PdisFn:this.PdisFn,
                                 PclearNoFn:this.PclearNoFn
                         }
                        footerEle = <FooterModel {...ftData}/>

                        checkAllIcn = <input
                                                  className="toggle-all"
                                                  type="checkbox"
                                                  checked={isAll}
                                                  onChange = {this.checkAllFn}
                                                  />

                                //把数据存储到本地

                                  localStorage.setItem('data',JSON.stringify(liData))

                  }

                 //console.log(liData)
                //   localStorage.setItem('data',JSON.stringify(liData))
                return (
                        <div>
                                  <HeadModel  {...hdData} />
                                  <section className="main">
                                          {checkAllIcn}
                                          <ul className="todo-list">
                                              {list}
                                          </ul>
                                 </section>

                                 {footerEle}
                         </div>
               )
        }
}

function getLocalData(dataName){

        var  moDate = [
                {con:'白日依山尽',checked:true,id:1},
                {con:'粒粒皆辛苦',checked:false,id:2},
                {con:'更上一层楼',checked:false,id:3}
        ]

        var Val = JSON.parse(localStorage.getItem(dataName));
        if(Val){
                return Val;
        }else{
                return moDate
        }

        return Val || [{checked:false,txt:'呵呵',id:1}];
        //return JSON.parse(localStorage.getItem(dataName) || [{checked:false,con:'呵呵',id:1}])
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
        module.hot.accept();
}
