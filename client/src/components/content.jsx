import { useDispatch } from "react-redux"
import { to_add_workout } from "../features/counter/contentSlice"

export function Content(){
  const user = '<name>'
  const workouts = 4

  const dispatch = useDispatch()

  return (
    <div className="content">
      <div>Hello, {`${user}`}!</div>
      <div>You've done {`${workouts}`} workouts.</div>
      <button>Suggest Workouts</button>
      <br />
      <button onClick={() => dispatch(to_add_workout())}>Add workouts</button>
    </div>
  )
}