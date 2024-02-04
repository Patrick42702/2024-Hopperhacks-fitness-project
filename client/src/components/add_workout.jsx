import { useDispatch } from "react-redux"
import { to_welcome } from "../features/counter/contentSlice"

export function Add_workout(){
    const dispatch = useDispatch();

    return(
        <form className="max-w-md mx-auto p-8 bg-white rounded">
            <div className="text-lg mb-4">Add Workouts!</div>
            <div className="activity">
                <label htmlFor="activity">Name of Activity</label>
                <div className="activityinput">
                    <input type="string" className="input-field"></input>
                </div>
            </div>
            <br />
            <div className="weights">
                <label htmlFor="weights">Weights in lbs</label>
                <div className="weightsinput">
                    <input type="number" min="2.5" className="input-field" step=".5"></input>
                </div>
            </div>
            <br />
            <div className="reps">
                <label htmlFor="reps">Number of Repetitions</label>
                <div className="repsinput">
                    <input type="number" className="input-field" min="1" step="1"></input>
                </div>
            </div>
            <br />
            <div className="content">
                <button className="mr-20 bg-blue-500 hover:bg-blue-700">Add Workout</button>
                <button className="ml-12 bg-blue-500 hover:bg-blue-700" onClick={() => dispatch(to_welcome())}>Return to Home</button>
            </div>
        </form>
    )
}

