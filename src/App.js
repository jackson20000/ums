import React from "react";
import "./App.css";

import Navigator from "./navigation/Navigator";

const App = ({ ...props }) => {
  return (
    <div>
      <Navigator {...props} />
    </div>
  );
};
export default App;
