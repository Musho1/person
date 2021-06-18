import { useDispatch } from "react-redux"
import img from "../../randomise-person-images/pants-3-min.png"
import { Action_B } from "../Redux/Action/Action_B"
import { Action_C } from "../Redux/Action/Action_C"
import './c.css'
function C(){
    const dispatch=useDispatch()
    const c=[
        '/static/media/pants-1-min.8b184af1.png',
        '/static/media/pants-2-min.3df9a2d3.png',
        '/static/media/pants-3-min.a0eca387.png'

    ]
    return <div className="cdiv">
        {c.map((elm,i)=>{
            return <img key={i} onClick={()=>dispatch(Action_C(elm))}  src={elm}></img>
        })}
    </div>
}
export default C