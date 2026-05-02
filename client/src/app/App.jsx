import "./App.css"
import { Editor } from "@monaco-editor/react"

function App() {

  return (
  <main
  className="h-screen p-4 w-full  bg-gray-950 flex gap-4"
  >
<aside
className="h-full w-1/4 rounded-lg bg-amber-50"></aside>
<section
className="w-3/4 rounded-lg overflow-hidden bg-neutral-900"
>
  <Editor
  height="100%"
    defaultLanguage="javascript"
    defaultValue="// Naman Mittal"
    theme="vs-dark"
  />
</section>
  </main>
  )
}

export default App
