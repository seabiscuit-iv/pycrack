
interface MenuProps {
  title: string,
  description: string,
  onClick: () => void
}

function MenuCard(props: MenuProps) {
    return (
      <button onClick={props.onClick} className="w-72 m-5 h-48 border-gray-400 bg-gray-600 border-4 rounded-lg flex flex-col items-center hover:bg-gray-500">
        <h1 className="text-white font-jb-mono font-bold text-xl pt-8">{props.title}</h1>
        <p className="text-white font-jb-mono px-4 pt-3">{props.description}</p>
      </button>
    );
}

export default MenuCard;