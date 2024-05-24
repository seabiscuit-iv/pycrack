import { useState } from "react";
import Classic from "./Classic";
import Endscreen from "./Endscreen";
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

let score = 0;
let game = "";

function App() {
  const [page, setPage] = useState<View>(View.MENU);

  const endGame = (pts : number, gameMode: string) => {
    score = pts;
    game = gameMode;
    console.log(score);
    setPage(View.ENDSCREEN);
  }

  if (page === View.MENU) {
    return <MainMenu setPage={(view) => {setPage(view)}}/>;
  } else if (page === View.CLASSIC) {
    return <Classic expiryFunc={(scr: number) => {endGame(scr, "Classic")}}/>;
  } else if (page === View.RPG) {
    return <RPG />;
  } else if (page === View.LAVA) {
    return <Lava />;
  } else if (page === View.PEACEFUL) {
    return <Peaceful />;
  } else if (page === View.ENDSCREEN) {
    return <Endscreen setHome={() => {setPage(View.MENU)}} points={score} gameMode={game}/>;
  } else {
    return null;
  }
}

export { View };

export default App;
