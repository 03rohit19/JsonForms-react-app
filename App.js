import React from "react";
import JsonFormsScreen from "./components/JsonFormsScreen";
import { createMuiTheme } from "@mui/material";

export const App = () => <JsonFormsScreen />;

export default App;

export const customizedTheme = createMuiTheme({
  jsonforms: { input: { category: { color: "#FFFF00" } } },
});
