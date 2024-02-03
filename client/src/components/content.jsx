export function Content(){
  const user = '<name>'
  const workouts = 4
  return (
    <div className="flex-grow ">
      <div>Hello, {`${user}`}!</div>
      <div>You've done {`${workouts}`} workouts.</div>
      <button>Suggest Workouts</button>
      <br />
      <button>Add workouts</button>
    </div>
  )
}