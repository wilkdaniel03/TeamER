import ReactDOM from "react-dom/client"

const Index = (props) => {
  return <h1>Hello, World!</h1>
} 

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<Index />)
