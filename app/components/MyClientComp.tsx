"use client";
import ReactDOMServer from "react-dom/server";

const MyCompClient = () => {
  return (
    <button
      onClick={(e) => {
        console.debug("click");
      }}
    >
      click
    </button>
  );
};
const html = ReactDOMServer.renderToString(<MyCompClient />);

const MyComp = () => {
  if (typeof window === "undefined") {
    return <div id="my-comp" dangerouslySetInnerHTML={{ __html: html }}></div>;
  }

  return (
    <div id="my-comp">
      <MyCompClient />
    </div>
  );
};

export default MyComp;
