import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

function counter(state=0,action){
    let {type,val} = action;
    switch(type){
        case 'INCERMENT':
            return ++state;
   
        case 'DECREMENT':
            return --state;
        break;
        default:
            return state;
    }
}

const store = createStore(counter, applyMiddleware(thunk));

function inIfOdd(val){
    return function (dispatch,getState){
        let state = getState();
        if(state%2==1){
            dispatch({type:'INCERMENT'});
        }
    }
}

function inIfEven(){
    return function (dispatch,getState){
        let state = getState();
        if(state%2==0){
            dispatch({type:'INCERMENT'});
        }
    }
}

function async(){
    return function (dispatch){
        setTimeout(()=>{
            dispatch({type:'DECREMENT'})
        },1500)
    }
}

//监听事件
store.subscribe(()=>{
    let state = store.getState();
    $val.val(state);
})

let $in = $('.increment'),
    $de = $('.decre'),
    $val = $('.val'),
    $odd = $('.odd'),
    $async = $('.async'),
    $even = $('.even')

    $in.click(()=>{
        
        store.dispatch({
            type:"INCERMENT"
        })
    })
    $de.click(ev=>{
        store.dispatch({
            type:"DECREMENT"
        })
    })
    $odd.click(()=>{
        store.dispatch(inIfOdd(5))
    })
    $async.click(()=>{
        store.dispatch(async())
    })
    $even.click(()=>{
        store.dispatch(inIfEven())
    })
   