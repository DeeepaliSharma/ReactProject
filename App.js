   
           
           
           
           const parent = React.createElement(
            "div",
            {id :"parent"}, 
            [
                React.createElement(
                    "div",
                     {id:"child"},
                 [   React.createElement(
                    "div",
                    {id: "grandchild"},
                   [ React.createElement( "h1", {},  "H1 tag"),
                    React.createElement( "h2", {},  "H2 tag")]
                    
                ),   React.createElement(
                    "div",
                    {id: "grandchild2"},
                   [ React.createElement( "h1", {},  "H1 tag"),
                    React.createElement( "h2", {},  "H2 tag")]
                    
                )]
                ),
                React.createElement(
                    "div",
                     {id:"child2"},
                 [   React.createElement(
                    "div",
                    {id: "grandchild"},
                   [ React.createElement( "h1", {},  "H1 tag"),
                    React.createElement( "h2", {},  "H2 tag")]
                    
                ),   React.createElement(
                    "div",
                    {id: "grandchild2"},
                   [ React.createElement( "h1", {},  "H1 tag"),
                    React.createElement( "h2", {},  "H2 tag")]
                    
                )]
                )]
        
        )
        
        
        
        
        
        
        
        
        console.log(parent);
        
        
        const heading = React.createElement("h1",{ id: "heading"},"Hello World");
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);