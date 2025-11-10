import { MantineProvider } from '@mantine/core';
import { LoginForm } from './components/auth/LoginForm';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider 
      theme={{
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <LoginForm />
    </MantineProvider>
  );
}

export default App;