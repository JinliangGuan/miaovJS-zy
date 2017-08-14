import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';


class NoteList extends Component{
	render(){
		return (
			<ol>
				{
					console.log(this.props.children),
					React.Children.map(this.props.children,(e)=>{
						return <li>{e}</li>
					})
				}
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
