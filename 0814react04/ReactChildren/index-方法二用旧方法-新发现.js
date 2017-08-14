import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';


class NoteList extends Component{
	render(){
		var child = this.props.children;
		var list = null;
		list = child.map((e,i)=>{
			var styledata = {color:'red',background:'#ccc',marginBottom:'20'}
			var data = {
				key:i,
				style:styledata
			}
			return <li {...data}>{e}</li>
		})
		return (
			<ol>
				{list}
			</ol>
		)
	}
}
ReactDOM.render(
	<NoteList>
		<span style={{color:'red '}}>hello</span>
		<span>world</span>
	</NoteList>,
document.getElementById('root'));
registerServiceWorker();
