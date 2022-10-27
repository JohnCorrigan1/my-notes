import Block from "../Block";

const code = `<div className="flex">
{textContent.map((letter) => (
  <h1
    key={Math.random()}
    className="hover:text-red-500 hover:-translate-y-2 duration-200 cursor-default"
  >
    {letter}
  </h1>
))}
</div>`

const TextAnimation = () => {
    return (
        <div id="textAnimation">
            <Block
            title="Heading Text Animation"
            code={code}
            language="jsx" />
        </div>
    )
}

export default TextAnimation;