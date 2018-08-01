import {connect} from 'react-redux';
import App from '../component/App'
import Action from "../action/action";
let mapStateToProps = (state)=>({
    reducer1: state.reducer1
})
let mapDispatchToProps = (dispatch)=>({
    add: (val) => dispatch({type: Action.ADD,val: val}),
    del: (key) => dispatch({type: Action.DEL,key: key})
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
