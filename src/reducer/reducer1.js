let defaultState = {
    title: 'react redux测试',
    list: [
        '第一条测试数据',
        '第二条测试数据',
    ]
}
let reducer1 = (state = defaultState, action) => {
    switch (action.type){
        case "ADD":
            state.list = [...state.list,action.val];
            return Object.assign({},state);
        case "DEL":
            state.list.splice(action.key,1);
            return Object.assign({},state);
        default:
            return state;
    }
}
export default reducer1;
