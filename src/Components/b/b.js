import { useDispatch } from "react-redux"
import img from "../../randomise-person-images/torso-3-min.png"
import { Action_B } from "../Redux/Action/Action_B"
import './b.css'
function B(){
    const dispatch=useDispatch()
    const a=[
        '/static/media/torso-1-min.2d3af3de.png',
        '/static/media/torso-2-min.118682ed.png',
        '/static/media/torso-3-min.1cdf98fc.png'

    ]
    return <div className="bdiv">
        {a.map((elm,i)=>{
            return <img key={i} onClick={()=>dispatch(Action_B(elm))}  src={elm}></img>
        })}
    </div>
}
export default B