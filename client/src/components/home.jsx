import { Nav } from "./nav";
import { Footer } from "./footer";
import { Content } from "./content";

export function Home() {
  return (
    <div id="home" className="flex flex-col min-h-screen">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}
