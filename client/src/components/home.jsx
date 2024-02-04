import { Nav } from "./nav";
import { Footer } from "./footer";
import { Content } from "./content";
import { Add_workout } from "./add_workout";
import { useSelector, useDispatch } from "react-redux";

export function Home() {
  const content_state = useSelector(state => state.content.status);
  const dispatch = useDispatch();

  console.log(content_state)
  return (
    <div id="home" className="flex flex-col min-h-screen">
      <Nav />
      {content_state === "welcome" && <Content />}
      {content_state === "add_workout" && <Add_workout/>}
      <Footer />
    </div>
  );
}
