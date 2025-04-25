import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CryptoTable from '../CryptoTable';
import cryptoReducer from '../../store/cryptoSlice';

const mockStore = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

describe('CryptoTable', () => {
  it('renders the table headers correctly', () => {
    render(
      <Provider store={mockStore}>
        <CryptoTable />
      </Provider>
    );

    expect(screen.getByText('#')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('1h %')).toBeInTheDocument();
    expect(screen.getByText('24h %')).toBeInTheDocument();
    expect(screen.getByText('7d %')).toBeInTheDocument();
    expect(screen.getByText('Market Cap')).toBeInTheDocument();
    expect(screen.getByText('Volume(24h)')).toBeInTheDocument();
    expect(screen.getByText('Circulating Supply')).toBeInTheDocument();
    expect(screen.getByText('Last 7 Days')).toBeInTheDocument();
  });

  it('renders cryptocurrency data correctly', () => {
    render(
      <Provider store={mockStore}>
        <CryptoTable />
      </Provider>
    );

    // Check if Bitcoin data is rendered
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('$93,759.48')).toBeInTheDocument();

    // Check if Ethereum data is rendered
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
    expect(screen.getByText('ETH')).toBeInTheDocument();
    expect(screen.getByText('$1,802.46')).toBeInTheDocument();
  });

  it('renders percentage changes with correct colors', () => {
    render(
      <Provider store={mockStore}>
        <CryptoTable />
      </Provider>
    );

    // Check if positive percentage changes are green
    const positiveChanges = screen.getAllByText(/↑/);
    positiveChanges.forEach(change => {
      expect(change).toHaveStyle({ color: '#16c784' });
    });

    // Check if negative percentage changes are red
    const negativeChanges = screen.getAllByText(/↓/);
    negativeChanges.forEach(change => {
      expect(change).toHaveStyle({ color: '#ea3943' });
    });
  });
}); 