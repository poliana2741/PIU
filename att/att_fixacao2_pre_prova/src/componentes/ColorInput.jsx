// // // // import { useState, useEffect } from 'react';

// // // // export default function ColorInput() {
// // // //   const [text, setText] = useState('');

// // // //   useEffect(() => {
// // // //     document.body.style.backgroundColor = text.length > 0 ? 'lightblue' : 'lightcoral': 'pink' : 'blue';
// // // //   }, [text]);

// // // //   return (
// // // //     <input
// // // //       type="text"
// // // //       value={text}
// // // //       onChange={(e) => setText(e.target.value)}
// // // //       placeholder="Digite algo..."
// // // //     />
// // // //   );
// // // // }


// // // import { useState, useEffect } from 'react';

// // // export default function ColorInput() {
// // //   const [text, setText] = useState('');

// // //   useEffect(() => {
// // //     document.body.style.backgroundColor = 
// // //       text.length > 10 ? 'lightblue' : 
// // //       text.length > 5 ? 'lightcoral' : 
// // //       text.length > 0 ? 'pink' : 
// // //       'white';
// // //   }, [text]);

// // //   return (
// // //     <div style={{ padding: '20px' }}>
// // //       <input
// // //         type="text"
// // //         value={text}
// // //         onChange={(e) => setText(e.target.value)}
// // //         placeholder="Digite algo..."
// // //       />
// // //       <p>Texto digitado: {text}</p>
// // //     </div>
// // //   );
// // // }


// // import { useState, useEffect } from 'react';

// // export default function ColorInput() {
// //   const [text, setText] = useState('');

// //   useEffect(() => {
// //     const colors = [
// //       '#FF5733',  // Vermelho alaranjado (0-2 caracteres)
// //       '#33FF57',  // Verde claro (3-4)
// //       '#3357FF',  // Azul (5-6)
// //       '#F033FF',  // Rosa (7-8)
// //       '#FF33F0',  // Rosa choque (9-10)
// //       '#33FFF0',  // Ciano (11-12)
// //       '#F0FF33',  // Amarelo (13-14)
// //       '#8A2BE2',  // Azul violeta (15-16)
// //       '#FF8C00',  // Laranja escuro (17-18)
// //       '#7CFC00'   // Verde grama (19+)
// //     ];

// //     const colorIndex = Math.min(Math.floor(text.length / 2), colors.length - 1);
// //     document.body.style.backgroundColor = colors[colorIndex];
// //   }, [text]);

// //   return (
// //     <div style={{ 
// //       padding: '20px', 
// //       textAlign: 'center',
// //       fontFamily: 'Arial, sans-serif'
// //     }}>
// //       <input
// //         type="text"
// //         value={text}
// //         onChange={(e) => setText(e.target.value)}
// //         placeholder="Digite algo para mudar a cor..."
// //         style={{
// //           padding: '10px',
// //           fontSize: '16px',
// //           borderRadius: '5px',
// //           border: '1px solid #ccc',
// //           width: '300px'
// //         }}
// //       />
// //       <p style={{ marginTop: '10px' }}>
// //         Caracteres digitados: {text.length} | Cor atual: {document.body.style.backgroundColor}
// //       </p>
// //     </div>
// //   );
// // }


// import { useState, useEffect } from 'react';

// export default function ColorInput() {
//   const [text, setText] = useState('');

//   // Array com 50 cores diferentes (1 para cada caractere até 50)
//   const colors = [
//     '#FF0000', '#FF4000', '#FF8000', '#FFBF00', '#FFFF00', // Tons de vermelho a amarelo
//     '#BFFF00', '#80FF00', '#40FF00', '#00FF00', '#00FF40', // Tons de verde
//     '#00FF80', '#00FFBF', '#00FFFF', '#00BFFF', '#0080FF', // Tons de azul claro
//     '#0040FF', '#0000FF', '#4000FF', '#8000FF', '#BF00FF', // Tons de azul a roxo
//     '#FF00FF', '#FF00BF', '#FF0080', '#FF0040', '#FF0020', // Tons de magenta
//     '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#CC00FF', // Tons de roxo
//     '#9900FF', '#6600FF', '#3300FF', '#0000FF', '#0033FF', // Tons de azul
//     '#0066FF', '#0099FF', '#00CCFF', '#00FFFF', '#00FFCC', // Tons de ciano
//     '#00FF99', '#00FF66', '#00FF33', '#00FF00', '#33FF00', // Tons de verde
//     '#66FF00', '#99FF00', '#CCFF00', '#FFFF00', '#FFCC00', // Tons de amarelo
//     '#FF9900', '#FF6600', '#FF3300', '#FF0000' // Tons de laranja a vermelho
//   ];

//   useEffect(() => {
//     const colorIndex = Math.min(text.length, colors.length - 1);
//     document.body.style.backgroundColor = colors[colorIndex];
//     document.body.style.transition = 'background-color 0.3s ease'; // Suaviza a transição
//   }, [text]);

//   return (
//     <div style={{ 
//       padding: '40px', 
//       textAlign: 'center',
//       fontFamily: 'Arial, sans-serif',
//       color: '#333'
//     }}>
//       <h2>Digite e veja 50 cores diferentes</h2>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Digite aqui..."
//         style={{
//           padding: '12px',
//           fontSize: '18px',
//           borderRadius: '8px',
//           border: '2px solid #ddd',
//           width: '80%',
//           maxWidth: '500px',
//           margin: '20px 0'
//         }}
//       />
//       <div style={{
//         backgroundColor: 'rgba(255,255,255,0.7)',
//         padding: '15px',
//         borderRadius: '8px',
//         display: 'inline-block'
//       }}>
//         <p>Caracteres digitados: <strong>{text.length}</strong></p>
//         <p>Cor atual: <strong>{colors[Math.min(text.length, colors.length - 1)]}</strong></p>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';

export default function ColorInput() {
  const [text, setText] = useState('');

  // 50 cores altamente contrastantes (sequência otimizada para máximo contraste)
  const colors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', // Cores primárias + secundárias
    '#00FFFF', '#FF8000', '#8000FF', '#00FF80', '#FF0080', // Cores terciárias
    '#80FF00', '#0080FF', '#FF8040', '#40FF80', '#8040FF', // Combinações contrastantes
    '#FF4000', '#00FF40', '#4000FF', '#FFBF00', '#00FFBF', 
    '#BF00FF', '#FF0040', '#40FF00', '#0040FF', '#FF8C00',
    '#8C00FF', '#00FF8C', '#FF008C', '#8CFF00', '#008CFF',
    '#FF3300', '#00FF33', '#3300FF', '#FF6600', '#00FF66',
    '#6600FF', '#FF0066', '#66FF00', '#0066FF', '#FF9999',
    '#99FF99', '#9999FF', '#FF99CC', '#CCFF99', '#99CCFF',
    '#FFCC99', '#CC99FF', '#99FFCC', '#FF3399', '#99FF33'
  ];

  useEffect(() => {
    const colorIndex = Math.min(text.length, colors.length - 1);
    document.body.style.backgroundColor = colors[colorIndex];
    document.body.style.transition = 'background-color 0.3s ease';
  }, [text]);

  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      minHeight: '100vh'
    }}>
      <h2>Digite e veja 50 cores contrastantes</h2>
      <p>Cada caractere muda para uma cor completamente diferente</p>
      
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite aqui..."
        style={{
          padding: '12px',
          fontSize: '18px',
          borderRadius: '8px',
          border: '2px solid #ddd',
          width: '80%',
          maxWidth: '500px',
          margin: '20px 0',
          backgroundColor: 'rgba(255,255,255,0.8)'
        }}
      />
 
    </div>
  );
}