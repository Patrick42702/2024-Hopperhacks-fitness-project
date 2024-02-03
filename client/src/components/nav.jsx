import { useNavigate } from "react-router-dom";

export function Nav() {
  const nav = {
    title: "ML Fitness",
    items: [
      {
        name: "Home",
        link: "/home",
      },
      {
        name: "My Workouts",
        link: "/workouts",
      },
    ],
  };

  const navigate = useNavigate();
  const handleClick = (e) => navigate(`${e}`);

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="px-12 text-4xl">{`${nav.title}`}</div>
      <ul className="">
        {nav.items.map((item) => (
          <li key={`${item.name}`} className="inline mx-4">
            <a href="" onClick={() => handleClick(item.link)}>
              {`${item.name}`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
