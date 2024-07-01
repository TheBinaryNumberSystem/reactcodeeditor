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
  const [buttonText, setButtonText] = useState("Copy");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        setButtonText("Copied");
        setTimeout(() => {
          setButtonText("Copy");
        }, 3000);
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <div className="text-center pt-5">
      <h3 className="text-4xl mb-4 underline capitalize font-extrabold">
        React code editor
      </h3>

      <div className="relative m-8 rounded-md bg-gray-900 text-white w-[calc(100%-60px)] overflow-hidden mx-auto">
        <div className="h-10 bg-gray-600 relative flex items-center justify-between px-4">
          <div className="flex items-center">
            <div className="bg-red-700 w-3 h-3 rounded-full mx-1"></div>
            <div className="bg-green-700 w-3 h-3 rounded-full mx-1"></div>
            <div className="bg-blue-700 w-3 h-3 rounded-full mx-1"></div>
          </div>
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            {buttonText}
          </button>
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
// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "./prism-vsc-dark-plus.css";

// const codeSnippet = `function add(a, b) {
//   return a + b;
// }
// add(5, 10);
// // Output: 15
// `;

// function App() {
//   const [code, setCode] = useState(codeSnippet);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(code).then(
//       () => {
//         alert("Code copied to clipboard!");
//       },
//       (err) => {
//         console.error("Failed to copy: ", err);
//       }
//     );
//   };

//   return (
//     <div className="text-center pt-5">
//       <h3 className="text-4xl mb-4 underline capitalize font-extrabold">
//         React code editor
//       </h3>

//       <div className="relative m-8 rounded-md bg-gray-900 text-white w-[calc(100%-60px)] overflow-hidden mx-auto">
//         <div className="h-10 bg-gray-600 relative flex items-center justify-between px-4">
//           <div className="flex items-center">
//             <div className="bg-red-700 w-3 h-3 rounded-full mx-1"></div>
//             <div className="bg-green-700 w-3 h-3 rounded-full mx-1"></div>
//             <div className="bg-blue-700 w-3 h-3 rounded-full mx-1"></div>
//           </div>
//           <button
//             onClick={copyToClipboard}
//             className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
//           >
//             Copy
//           </button>
//         </div>
//         <div className="h-[calc(100%-60px)] overflow-y-auto p-2.5">
//           <Editor
//             value={code}
//             onValueChange={(code) => setCode(code)}
//             highlight={(code) => highlight(code, languages.js)}
//             padding={10}
//             style={{
//               fontFamily: '"Fira code", "Fira Mono", monospace',
//               fontSize: 14,
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "./prism-vsc-dark-plus.css";

// const codeSnippet = `function add(a, b) {
//   return a + b;
// }
// add(5, 10);
// // Output: 15
// `;

// function App() {
//   const [code, setCode] = useState(codeSnippet);

//   return (
//     <div className="text-center pt-5">
//       <h3 className="text-4xl mb-4 underline capitalize font-extrabold">
//         React code editor
//       </h3>

//       <div className="relative m-8 rounded-md bg-gray-900 text-white w-[calc(100%-60px)] overflow-hidden mx-auto">
//         <div className="h-10 bg-gray-600 relative">
//           <div className="flex items-center justify-center absolute left-2.5 top-1/2 transform -translate-y-1/2">
//             <div className="bg-red-700 w-3 h-3 rounded-full mx-1"></div>
//             <div className="bg-green-700 w-3 h-3 rounded-full mx-1"></div>
//             <div className="bg-blue-700 w-3 h-3 rounded-full mx-1"></div>
//           </div>
//         </div>
//         <div className="h-[calc(100%-60px)] overflow-y-auto p-2.5">
//           <Editor
//             value={code}
//             onValueChange={(code) => setCode(code)}
//             highlight={(code) => highlight(code, languages.js)}
//             padding={10}
//             style={{
//               fontFamily: '"Fira code", "Fira Mono", monospace',
//               fontSize: 14,
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
