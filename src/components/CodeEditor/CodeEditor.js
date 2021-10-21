import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const useStyles = makeStyles(() => ({
  editor: {
    width: "80%",
    height: "85vh",
    // backgroundColor: 'red',
    display: "flex",
    flexDirection: "column",
  },
  toolbar: {
    width: "100%",
    // backgroundColor: 'green',
    height: "38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  childtoolbar: {
    display: "flex",
  },
  textArea: {
    width: "100%",
    // backgroundColor: 'blue',
    height: "500px",
    marginTop: "1rem",
    backgroundColor: "white",
  },
  dropdown: {
    // backgroundColor: '#F94B25',
  },
}));

function CodeEditor() {
  const classes = useStyles();
  //   const [code, setCode] = React.useState(
  //     `function add(a, b) {\n  return a + b;\n}`
  //   );
  const [value, setValue] = useState("Language");
  const [theme, setTheme] = useState("theme");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  const handleTheme = (e) => {
    console.log(e);
    setTheme(e);
  };

  return (
    <div className={classes.editor}>
      <div className={classes.toolbar}>
        <div className={classes.childtoolbar}>
          <DropdownButton
            className={classes.dropdown}
            id="dropdown-basic-button"
            title={value}
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="java">Java</Dropdown.Item>
            <Dropdown.Item eventKey="cpp">C++</Dropdown.Item>
            <Dropdown.Item eventKey="python">Python</Dropdown.Item>
            <Dropdown.Item eventKey="javascript">JavaScript</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className={classes.childtoolbar}>
          <DropdownButton
            className={classes.dropdown}
            id="dropdown-basic-button"
            title={theme}
            onSelect={handleTheme}
          >
            <Dropdown.Item eventKey="light">Light</Dropdown.Item>
            <Dropdown.Item eventKey="vs-dark">Dark</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div id="textarea" className={classes.textArea}>
        <Editor
          height="100%"
          defaultLanguage={"java"}
          language={value}
          defaultValue="// some comment"
          theme={theme}
        />
      </div>
    </div>
  );
}

export default CodeEditor;
