import { useDispatch } from 'react-redux'
import { Action_A } from '../Redux/Action/Action_A'
import img from '../../randomise-person-images/headwear-2-min.png'
import './a.css'
function A(){
    const dispatch=useDispatch()
        const a=[
            "/static/media/headwear-1-min.412e2511.png",
            "/static/media/headwear-3-min.285da773.png",
            img
        ]
    return <div className="adiv">
       {a.map((elm,i)=>{
           return <img key={i} onClick={()=>dispatch(Action_A(elm))}  src={elm}></img>
       })}
    </div>
}
export default A