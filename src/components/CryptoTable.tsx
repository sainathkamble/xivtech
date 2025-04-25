import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store/store';
import { formatNumber, formatPercentage } from '../utils/formatters';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
  color: #495057;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
  font-size: 14px;
`;

const PercentChange = styled.span<{ isPositive: boolean }>`
  color: ${props => props.isPositive ? '#16c784' : '#ea3943'};
  font-weight: 500;
`;

const CryptoLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  vertical-align: middle;
`;

const CryptoName = styled.div`
  display: flex;
  align-items: center;
`;

const Symbol = styled.span`
  color: #6c757d;
  margin-left: 8px;
`;

const ChartContainer = styled.div`
  width: 100px;
  height: 40px;
`;

const CryptoTable: React.FC = () => {
  const assets = useSelector((state: RootState) => state.crypto.assets);

  return (
    <Table>
      <thead>
        <tr>
          <Th>#</Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>1h %</Th>
          <Th>24h %</Th>
          <Th>7d %</Th>
          <Th>Market Cap</Th>
          <Th>Volume(24h)</Th>
          <Th>Circulating Supply</Th>
          <Th>Last 7 Days</Th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => {
          const chartData = asset.chartData.map((value, index) => ({
            value,
            index,
          }));

          return (
            <tr key={asset.id}>
              <Td>{asset.id}</Td>
              <Td>
                <CryptoName>
                  <CryptoLogo src={asset.logo} alt={asset.name} />
                  {asset.name}
                  <Symbol>{asset.symbol}</Symbol>
                </CryptoName>
              </Td>
              <Td>${formatNumber(asset.price)}</Td>
              <Td>
                <PercentChange isPositive={asset.percentChange1h >= 0}>
                  {formatPercentage(asset.percentChange1h)}
                </PercentChange>
              </Td>
              <Td>
                <PercentChange isPositive={asset.percentChange24h >= 0}>
                  {formatPercentage(asset.percentChange24h)}
                </PercentChange>
              </Td>
              <Td>
                <PercentChange isPositive={asset.percentChange7d >= 0}>
                  {formatPercentage(asset.percentChange7d)}
                </PercentChange>
              </Td>
              <Td>${formatNumber(asset.marketCap)}</Td>
              <Td>${formatNumber(asset.volume24h)}</Td>
              <Td>
                {formatNumber(asset.circulatingSupply)} {asset.symbol}
              </Td>
              <Td>
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={asset.percentChange7d >= 0 ? '#16c784' : '#ea3943'}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </Td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CryptoTable; 