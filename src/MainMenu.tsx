import { View } from "./App";
import Menu from "./Menu";
import MenuCard from "./MenuCard";

interface PageSet {
  setPage: (page: View) => void
}

function MainMenu(props: PageSet) {
  return (
    <div>
      <Menu />
      <div className="mx-96 flex flex-col items-center p-2 text-center">
        <p className="text-green-200 font-jb-mono font-extrabold text-3xl pt-12 pb-10">PyCrack</p> 
        <div className="flex flex-row">
          <div className="flex flex-col">
            <MenuCard onClick={() => {props.setPage(View.CLASSIC)}} title="Classic" description="Answer as many questions as you can in 3 minutes"/>
            <MenuCard onClick={() => {props.setPage(View.RPG)}} title="RPG" description="You get three lives, and lose one everytime you incorrectly answer"/>
          </div>
          <div className="flex flex-col">
            <MenuCard onClick={() => {props.setPage(View.LAVA)}} title="Lava" description="Start with 30 seconds, and gain 10 seconds for each question you answer"/>
            <MenuCard onClick={() => {props.setPage(View.PEACEFUL)}} title="Peaceful" description="No timer, answer questions at your own pace"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu;