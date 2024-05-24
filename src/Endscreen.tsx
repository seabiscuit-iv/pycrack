import Menu from "./Menu";

interface PTS {
  points: number;
  gameMode: string;
  setHome: () => void;
}

const Endscreen = (props : PTS) => {
  return (
    <div>
      <Menu />
      <div className="mx-96 flex flex-col items-center p-2 text-center">
        <p className="text-green-200 font-jb-mono font-extrabold text-3xl pt-12 pb-10">PyCrack</p> 
        <p className="text-white font-jb-mono font-light text-lg pt-12 pb-2">Game Mode: {props.gameMode}</p> 
        <p className="text-white font-jb-mono font-light text-3xl pb-10">Final Score: {props.points}</p> 
        <button onClick={props.setHome} className="mt-10 font-jb-mono text-lg bg-gray-600 text-white flex items-center justify-center py-4 px-12 hover:bg-gray-500 rounded-lg">Home</button>
      </div>
    </div>
  );
}

export default Endscreen;