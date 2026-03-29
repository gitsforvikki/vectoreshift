import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="app flex flex-col h-screen w-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1535] to-[#050709] overflow-hidden">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
