import React from "react";
import Counter from "./Counter/Counter.js";
import Dropdown from "./Dropdown/Dropdown.js";


const App = () => {
    return (
        <div>
            <Counter initialValue={0} />
            <Dropdown />
        </div>
    );
};

export default App;