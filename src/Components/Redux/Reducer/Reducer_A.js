import { Action_A } from "../Action/Action_A";
import State_A from "../state/State_A";

function Reducer_A(state=State_A,action){
    let temp={...state}
    if(action.type==="Action_A"){
        temp.active=action.value
    }
    if(action.type==="Action_B"){
        temp.activeb=action.value
    }
    if(action.type==="Action_C"){
        temp.activec=action.value
    }
    return temp
}
export default Reducer_A