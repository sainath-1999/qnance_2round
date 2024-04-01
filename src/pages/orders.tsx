import { Box, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import SymbolSelect from '../components/SelectSymbol';
import PriceTable from '../components/PriceTable';

const OrdersHome: React.FC = () => {
  const [symbol, setSymbol] = useState<string>('BNBBTC');
  const handleSymbolChange = (val: string) => {
    setSymbol(val);
  };

  return (
    <div>
      <Navbar />
      {sessionStorage.getItem('isLogedIn') === 'true' && (
        <Container>
          <Box
            sx={{
              width: 150,
              height: 150,
              marginTop: 5,
            }}
          >
            <SymbolSelect
              symbol={symbol}
              handleSymbolChange={handleSymbolChange}
            />
          </Box>
          <Container>
            <PriceTable symbol={symbol} />
          </Container>
        </Container>
      )}
    </div>
  );
};

export default OrdersHome;
