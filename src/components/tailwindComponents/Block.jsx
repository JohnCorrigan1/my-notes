import { CopyBlock, dracula } from "react-code-blocks";


export default function Block(props) {

    return (
        <>
            <div className="mb-5">
            <h1 className="text-2xl text-center">{props.title}</h1>
            <p>{props.description}</p>
            </div>
            <div className="mb-10">
            <CopyBlock
                text={props.code}
                theme={dracula}
                language={props.language}
            />
            </div>
        </>
    )
}

