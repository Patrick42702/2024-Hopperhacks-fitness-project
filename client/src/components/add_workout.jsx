import { useDispatch } from "react-redux"
import { to_welcome } from "../features/counter/contentSlice"

export function Add_workout(){
    const dispatch = useDispatch();


    return(
        <div className="content">
            add workout
            <br />
            <button onClick={() => dispatch(to_welcome())}>return to home</button>
        </div>
    )
}