import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';


class NoteList extends Component{
	render(){
		var child = this.props.children;

		var list = null;
		list = child.map((e,i) =>{
			return <li key={i}>{e}</li>
		});


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
