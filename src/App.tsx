import { useState } from "react";
import Classic from "./Classic";
import Lava from "./Lava";
import MainMenu from "./MainMenu";
import Peaceful from "./Peaceful";
import RPG from "./RPG";

enum View {
  MENU,
  CLASSIC,
  LAVA,
  RPG,
  PEACEFUL,
  ENDSCREEN, 
}

function App() {
  const [page, setPage] = useState<View>(View.MENU);

  if (page === View.MENU) {
    return <MainMenu setPage={(view) => {setPage(view)}}/>;
  } else if (page === View.CLASSIC) {
    return <Classic />;
  } else if (page === View.RPG) {
    return <RPG />;
  } else if (page === View.LAVA) {
    return <Lava />;
  } else if (page === View.PEACEFUL) {
    return <Peaceful />;
  } else {
    return null;
  }
}

export { View };

export default App;
