import { Toaster } from "react-hot-toast";
import { AppHeader } from "./components/AppHeader";
import AppContent from "./components/AppContent";

function App() {
  return (
    <>
    <div className="container">
      <h2>TODO LIST</h2>
      <div className="box">
        <AppHeader/>
      </div>
      <AppContent />
    </div>
    <Toaster 
    position="bottom-right"
    toastOptions={{
      style: {
        fontSize: '1rem',
      }
    }}/>
    </>
  );
}

export default App;
