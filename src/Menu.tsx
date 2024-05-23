import { useState } from "react";
import LangButton from "./LangButton";
import { config } from "./content/config";

interface ResetFunc {
  reload?: () => void
}

function Menu (props : ResetFunc) {
    const [showLanguagePanel, setShowLanguagePanel] = useState(false);

    return (
    <div className="float-right mr-14 mt-12 ml-8 flex flex-col items-center justify-center align-middle">
      <div className="flex flex-row"> 
        <button onClick={() => {setShowLanguagePanel(!showLanguagePanel)}} className="flex items-center justify-center hover:bg-gray-500 bg-gray-600 w-[11.5rem] h-10 font-jb-mono rounded-lg">  
          <p className="text-white text-center">Select Languages</p>
        </button>
        <div className="flex items-center justify-center hover:bg-gray-500 bg-gray-600 w-20 h-10 ml-8 font-jb-mono rounded-lg">  
          <a href="/about/" className="text-white">About</a>
        </div>   
      </div>
      {showLanguagePanel ? 
      <div className="flex flex-col items-center pt-7 float-right mt-12 bg-gray-600 text-white text-center w-[18.5rem] h-[36rem] rounded-lg font-jb-mono">
        <LangButton name="Python" get={() => {return config.python}} toggle={() => {config.python = !config.python}}/>
        <LangButton name="Java" get={() => {return config.java}} toggle={() => {config.java = !config.java}}/>
        <LangButton name="C" get={() => {return config.c}} toggle={() => {config.c = !config.c}}/>
        <LangButton name="JavaScript" get={() => {return config.javascript}} toggle={() => {config.javascript = !config.javascript}}/>
        <button onClick={() => {
            setShowLanguagePanel(false); 
            if (props.reload !== undefined) {
              props.reload();
            }
          }} className="bg-gray-500 hover:bg-gray-400 border-4 py-2 px-4 rounded-lg mt-auto mb-8">
          Submit Preferences
        </button>
      </div>
      : "" }
    </div>
    
    );
}

export default Menu