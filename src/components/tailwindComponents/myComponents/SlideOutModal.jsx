import Block from "../Block";

const code = ` <>
<div className=" bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-50"></div>
<div className={"templateLiteral here and replace with backtick ? 'cart-in' : 'cart-out'} cart-modal overflow-y-scroll bg-white flex flex-col gap-10 items-center p-12 rounded-xl fixed right-0 w-5/6 max-w-2xl h-5/6 mt-20 z-50"}>
  <div className="absolute top-5 left-5 ">
    <Image
      onClick={props.onClose}
      className="cursor-pointer"
      src="/arrowRight.svg"
      height={40}
      width={40}
    />
  </div>
  {cart.length < 1 ? (
    <h1 className=" m-auto text-2xl text-slate-400">Cart Empty...</h1>
  ) : (
    <div>some content would go here</div>

    ))
  )}
  <div className="text-black mt-auto bottom-0">
    <p>Some Text</p>
    <button className=" active:scale-95 bg-cyan-400 p-2 pr-5 pl-5 rounded-lg shadow-md shadow-slate-400 hover:bg-cyan-500">
      Checkout
    </button>
  </div>
</div>
</>`

const css = `@-webkit-keyframes slideOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(200%);
    }
  }
  @-moz-keyframes slideOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(900px);
    }
  }
  @keyframes slideOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(900px);
    }
  }
  
  @-webkit-keyframes slideIn {
    0% {
      transform: translateX(200%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @-moz-keyframes slideIn {
    0% {
      transform: translateX(900px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slideIn {
    0% {
      transform: translateX(900px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 800px) {
    .cart-modal {
      min-width: 100vw;
      padding: 10px;
      padding-top: 40px;
    }
  }
  
  @media (max-width: 400px) {
    .cart-title {
      font-size: large;
    }
    .remove-button {
      font-size: medium;
      padding: 2px;
    }
  }`


const SlideOutModal = () => {
    return(
        <div id="slideOutModal">
            <Block
            title="Slide Out Modal"
            code={code}
            language="jsx"/>
            <Block
            title="Slide Out Modal CSS"
            code={css}
            language="css" />
        </div>

    )
}

export default SlideOutModal;