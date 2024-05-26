
interface MenuProps {
  title: string,
  description: string,
  onClick: () => void
}

function MenuCard(props: MenuProps) {
    return (
      <button onClick={props.onClick} className="w-72 m-5 h-48 border-[#383e57] bg-[#1e212e] border-4 rounded-lg flex flex-col items-center hover:bg-[#2b2f42]">
        <h1 className="text-white font-jb-mono font-bold text-xl pt-8">{props.title}</h1>
        <p className="text-white font-jb-mono px-4 pt-3">{props.description}</p>
      </button>
    );
}

export default MenuCard;