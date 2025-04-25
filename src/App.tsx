import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { store } from './store/store';
import CryptoTable from './components/CryptoTable';
import { WebSocketSimulator } from './services/WebSocketSimulator';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #1e2329;
  margin: 0;
  font-size: 24px;
`;

const ErrorMessage = styled.div`
  background-color: #fee2e2;
  color: #dc2626;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #6b7280;
`;

const App: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const ws = new WebSocketSimulator();
      ws.start();
      setIsLoading(false);
      return () => ws.stop();
    } catch (err) {
      setError('Failed to connect to price feed. Please try again later.');
      setIsLoading(false);
    }
  }, []);

  return (
    <Provider store={store}>
      <AppContainer>
        <Header>
          <Title>Cryptocurrency Prices</Title>
        </Header>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {isLoading ? (
          <LoadingMessage>Loading cryptocurrency data...</LoadingMessage>
        ) : (
          <CryptoTable />
        )}
      </AppContainer>
    </Provider>
  );
}

export default App; 