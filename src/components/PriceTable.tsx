
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { getPriceForSymbol } from '../../services/getPriceForSymbols';

interface dataProps {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}

export default function PriceTable({ symbol }: { symbol: string }) {
  const [data, setData] = useState<dataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: dataProps[] = await getPriceForSymbol(symbol);
      setData(res);
    };
    fetchData();
  }, [symbol]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#f0f0f0' }}>
            <TableCell>ID</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Quote Quantity</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Is Buyer Maker</TableCell>
            <TableCell>Is Best Match</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} style={{ backgroundColor: '#fff' }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.qty}</TableCell>
              <TableCell>{row.quoteQty}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.isBuyerMaker.toString()}</TableCell>
              <TableCell>{row.isBestMatch.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
