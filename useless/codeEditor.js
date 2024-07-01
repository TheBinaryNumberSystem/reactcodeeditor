import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "./prism-vsc-dark-plus.css";

const codeSnippet = `function add(a, b) {
  return a + b;
}
add(5, 10);
// Output: 15
`;

function App() {
  const [code, setCode] = useState(codeSnippet);

  return (
    <div className="App">
      <h3>
        React code editor and syntax highlighter using PrismJS -{" "}
        <a href="https://www.cluemediator.com/" target="_blank">
          Clue Mediator
        </a>
      </h3>

      <div className="relative m-8 rounded-md bg-gray-900 text-white w-[calc(100%-60px)] overflow-hidden">
        <div className="h-10 bg-gray-800/10 relative">
          <div className="flex items-center justify-center absolute left-2.5 top-1/2 transform -translate-y-1/2">
            <div className="bg-gray-700 w-2.5 h-2.5 rounded-full mx-1"></div>
            <div className="bg-gray-700 w-2.5 h-2.5 rounded-full mx-1"></div>
            <div className="bg-gray-700 w-2.5 h-2.5 rounded-full mx-1"></div>
          </div>
        </div>
        <div className="h-[calc(100%-60px)] overflow-y-auto p-2.5">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import Prism from "prismjs";
// import "prismjs/themes/prism.css"; // You can choose other themes available in the prismjs package

// const CodeEditor = () => {
//   const [code, setCode] = useState("");

//   const handleChange = (event) => {
//     setCode(event.target.value);
//   };

//   const handleKeyPress = (event) => {
//     // Prevent inserting tabs into contentEditable div
//     if (event.key === "Tab") {
//       event.preventDefault();
//       document.execCommand("insertText", false, "  "); // Insert two spaces for tab
//     }
//   };

//   // Function to highlight code on input
//   const highlightCode = () => {
//     return Prism.highlight(code, Prism.languages.javascript, "javascript");
//   };

//   return (
//     <div className="relative max-w-4xl mx-auto">
//       <div
//         className="w-full h-96 font-mono text-transparent caret-black bg-transparent border border-gray-300 p-4 box-border absolute top-0 left-0 resize-none outline-none z-10"
//         contentEditable
//         spellCheck="false"
//         onChange={handleChange}
//         onKeyDown={handleKeyPress}
//         onBlur={() => {
//           // Manually update the state on blur to ensure code consistency
//           setCode(document.getElementById("code").textContent);
//         }}
//         dangerouslySetInnerHTML={{ __html: highlightCode() }}
//         id="code"
//       />
//     </div>
//   );
// };

// export default CodeEditor;
