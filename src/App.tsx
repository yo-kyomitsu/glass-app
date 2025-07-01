import GlassCard from "./GlassCard";
import "./style.css";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/DeepSpace.png')" }}
    >
      <GlassCard className="w-full max-w-3xl h-[400px] p-10 bg-white/10 backdrop-blur-2xl border border-white/30 text-white shadow-2xl text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome</h1>
        <p className="text-lg opacity-90">
          This glass panel is now larger, clearer, and more immersive.
        </p>
      </GlassCard>
    </div>
  );
}

export default App;
