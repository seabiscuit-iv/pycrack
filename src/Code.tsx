import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Question {
  lang : string,
  code : string,
  answer : string
}


function Code(props : Question) {

  return ( 
    <div className="bg-[#1f2123] p-4 text-white font-jb-mono w-[35rem] rounded-xl"> 
      <SyntaxHighlighter language={props.lang} customStyle={{
        backgroundColor: 'transparent',
        fontSize: 18
      }} style={vs2015}>
        { props.code }
      </SyntaxHighlighter>
    </div>
  );
}
  
  export default Code;
  