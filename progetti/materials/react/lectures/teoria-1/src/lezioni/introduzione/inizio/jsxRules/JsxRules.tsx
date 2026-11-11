/*
    JSX & Rules 
    - JSX è una estensione della sintassi di JavaScript
    - JSX produce React "element"

    - Tag HTML deve essere chiuso
    - JSX attributi sono camelCaseS
    - JSX può essere usato con ES6

    -- CSS in Jsx
    - className invece di class
    - style={{color: "red"}}
    - style={variabileCss}
*/
/* Crea il tuo componente JsxRules
    rfce
*/

export const JsxRules = () => (
    <div>
        <h1>Jsxrules</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sed minima harum omnis quasi aspernatur impedit optio nostrum dolorum dolorem doloremque, accusantium pariatur. Non, architecto esse. Quis temporibus debitis unde!</p>
        <img src="https://picsum.photos/200" alt="React-logo" />
    </div>
  )

export {}

