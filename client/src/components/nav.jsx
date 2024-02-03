import { useNavigate } from "react-router-dom"

export function Nav(){
  const nav = {
    title: "Title",
    items: [
      {
        name: "Home",
        link: "/home"
      },
      {
        name: "My Workouts",
        link: "/workouts"
      }
    ]
  }

  const navigate = useNavigate();
  const handleClick = (e) => navigate(`${e}`);

  return (
    <div className="flex flex-row">
      <div>{`${nav.title}`}</div>
      <ul>
        {nav.items.map(item => (
          (
            <li key={`${item.name}`}><a href="" onClick={() => handleClick(item.link)}>{`${item.name}`}</a></li>
          )
        ))}
      </ul>
    </div>
  )
}