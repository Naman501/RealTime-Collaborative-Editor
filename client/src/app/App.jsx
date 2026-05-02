import "./App.css"
import { Editor } from "@monaco-editor/react"
import {MonacoBinding} from "y-monaco"
import {useRef,useMemo} from "react"
import * as Y from "yjs"
import {SocketIOProvider} from "y-socket.io"

function App() {

const editorRef= useRef(null)
const ydoc = useMemo ( ( ) => new Y.Doc(), [])
const yText = useMemo (() => ydoc.getText("monaco"), [ydoc])

const handleMount=(editor)=>{
editorRef.current=editor
const provider = new SocketIOProvider("http://localhost:3000", "monaco", ydoc,{
  autoConnect:true
})
const monacoBinding = new MonacoBinding(
yText,
editorRef.current.getModel(),
new Set([editorRef.current]),
provider.awareness
)
}

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
    onMount={handleMount}
  />
</section>
  </main>
  )
}

export default App
