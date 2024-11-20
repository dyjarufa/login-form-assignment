import './App.css';
import LoginForm from './components/LoginForm';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <LoginForm />
      </div>
    </AppProvider>
  );
}

export default App;
