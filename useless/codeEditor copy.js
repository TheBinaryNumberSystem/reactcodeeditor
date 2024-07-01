import React, { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // You can choose other themes available in the prismjs package

const CodeEditor = () => {
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleKeyPress = (event) => {
    // Prevent inserting tabs into contentEditable div
    if (event.key === "Tab") {
      event.preventDefault();
      document.execCommand("insertText", false, "  "); // Insert two spaces for tab
    }
  };

  // Function to highlight code on input
  const highlightCode = () => {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className="w-full h-96 font-mono text-transparent caret-black bg-transparent border border-gray-300 p-4 box-border absolute top-0 left-0 resize-none outline-none z-10"
        contentEditable
        spellCheck="false"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        onBlur={() => {
          // Manually update the state on blur to ensure code consistency
          setCode(document.getElementById("code").textContent);
        }}
        dangerouslySetInnerHTML={{ __html: highlightCode() }}
        id="code"
      />
    </div>
  );
};

export default CodeEditor;

// import React, { useState } from "react";
// import Prism from "prismjs";
// import "prismjs/themes/prism.css"; // You can choose other themes available in the prismjs package

// const CodeEditor = () => {
//   const [code, setCode] = useState("");

//   const handleChange = (event) => {
//     setCode(event.target.value);
//   };

//   const highlightedCode = Prism.highlight(
//     code,
//     Prism.languages.javascript,
//     "javascript"
//   );

//   return (
//     <div className="relative max-w-4xl mx-auto">
//       <textarea
//         value={code}
//         onChange={handleChange}
//         className="w-full h-96 font-mono text-transparent caret-black bg-transparent border border-gray-300 p-4 box-border absolute top-0 left-0 resize-none outline-none z-10"
//         spellCheck="false"
//       />
//       <pre
//         className="w-full h-96 font-mono border border-gray-300 p-4 box-border overflow-auto pointer-events-none whitespace-pre-wrap break-words"
//         dangerouslySetInnerHTML={{ __html: highlightedCode }}
//       />
//     </div>
//   );
// };

// export default CodeEditor;
