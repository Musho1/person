import { useSelector } from "react-redux"
import person from "../../randomise-person-images/person.png"
import A from "../a/a"
import B from "../b/b"
import C from "../c/c"
import './Main.css'
function Main(){
   const {Reducer_A}=useSelector((state)=>state)
   console.log(Reducer_A)
    return <div>
        <div className="main">
            <div className="mainImg">
                <img className="imgA" src={Reducer_A.active}></img>
                <img className="mainImgM" src={person}></img>
                <img className="imgB" src={Reducer_A.activeb}></img>
                <img className="imgC" src={Reducer_A.activec}></img>
            </div>
            
            <div className="ABC">
                <A></A>
                <B></B>
                <C></C>
            </div>
         
        </div>
    </div>
}
export default Main