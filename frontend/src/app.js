import React from 'react';

const App = () => {
    return ( <div>hi from app</div> );
}
 
export default App;
























//functional component
// export default Element;

// let word = "Hello";
// const styles = {
//     header: {
//         border: '1px solid black',
//         padding: '5px',
//         borderRadius: '5px'
//     },
//     text: {
//         fontFamily: 'tahoma',
//         fontWeight: 'bold'
//     }
// }
// const Element = () => {
//     console.log('comp called')

//     return (<div>
//         <div>
//             <h1 className="header">
//                 {word.toLocaleUpperCase()}
//                 {4 + 5}
//             </h1>
//             <p className="text" style={styles.text}>
//                 this is our first React app.
//     </p>
//         </div>
//         <input type="text" value={word} />

//         <input type="button" value="change"
//             onClick={(e) => {
//                 // console.log('clicked')
//                 // console.log(e)
//                 word = "Hamada";
//                 console.log(word)
//                 // ReactDOM.render(<Element />, document.querySelector('#root'))
//             }}
//         />
//         <img src="https://images.unsplash.com/photo-1609520505555-8bb8d82184bc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
//         <img src="/images/photo1.jpeg" alt=""/>
//         <p></p>
//     </div>)
// }