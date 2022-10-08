import { CopyBlock, dracula } from "react-code-blocks";
import { CodeBlock, nord } from 'react-code-blocks';


export default function Block(props) {

    return (
        <div>
            <h1 className="text-2xl">{props.title}</h1>
            <CopyBlock
                text={props.code}
                theme={dracula}
                language={props.language}
            />
        </div>
    )
}

