const heading =React.createElement("h1",{id:"heading"},"Hello World from React!");
console.log(heading);//object


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);

//<div id="parent">
//    <div id="child">
//        <h1>I'm an h1 tag</h1>
//    </div>
//</div>


const heading1=React.createElement(
        "div",
        {id:"parent"},
        React.createElement("div",
            {id:"child"},
            [ React.createElement("h1",{},"i am an h1 tag"),
              React.createElement("h2",{},"h2 tag")
            ]

        )
    )

    root.render(heading1);   
    
