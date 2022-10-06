import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cardslider from "./components/Cardslider";
import Netflexback from "./assets/images/outer-banks-netflix-ko.jpg";
import Searchswiper from "./pages/Searchswiper";
import black from "./assets/images/black.png";

function App() {
  const [backimg, setBackimg] = useState(
    "https://images.hdqwalls.com/download/outer-banks-netflix-ko-2048x1152.jpg"
  );
  const [search, setSearch] = useState("");
  const [styles, setStyles] = useState({
    backgroundImage: ` url(
      "${backimg}"
    )`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  });
  useEffect(() => {
    if (search) {
      setStyles({
        backgroundImage: `url(${black})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      });
    } else {
      setStyles({
        backgroundImage: `url("${backimg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      });
    }
  }, [search]);

  return (
    <div style={styles} className="h-screen w-screen md:bg-contain">
      <Navbar search={search} setSearch={setSearch} />
      {search ? (
        <Searchswiper search={search} />
      ) : (
        <div>
          <Hero />
          <Cardslider />
        </div>
      )}
    </div>
  );
}

export default App;
