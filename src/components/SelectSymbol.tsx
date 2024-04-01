import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
//import symbolsjson from '../mock/anance.json';
import { getSymbols } from '../../services/getSymbols';
interface filterprops {
  filterType: string;
  minPrice: string;
  maxPrice: string;
  tickSize: string;
}
interface symbolProps {
  symbol: string;
  status: string;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  quoteAssetPrecision: number;
  baseCommissionPrecision: number;
  quoteCommissionPrecision: number;
  orderTypes: string[];
  icebergAllowed: boolean;
  ocoAllowed: boolean;
  quoteOrderQtyMarketAllowed: boolean;
  allowTrailingStop: boolean;
  cancelReplaceAllowed: boolean;
  isSpotTradingAllowed: boolean;
  isMarginTradingAllowed: boolean;
  filters: filterprops[];
  permissions: string[];
  defaultSelfTradePreventionMode: string;
  allowedSelfTradePreventionModes: string[];
}
export default function SymbolSelect({
  symbol,
  handleSymbolChange,
}: {
  symbol: string;
  handleSymbolChange: (val: string) => void;
}) {
  const [symboloptions, setSymbolOptions] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent) => {
    handleSymbolChange(event.target.value as string);
  };

  useEffect(() => {
    //const { symbols } = symbolsjson;
    
    //At my end API is not working so uncomment this and hit the api at your end
    const getSymbolOptions=async ()=>{
      const res=await getSymbols()
      console.log("res symbol", res.symbol);
      
      setSymbolOptions(
        res.symbols?.slice(0, 10).map((item: symbolProps) => item.symbol)
      );
      
    }
    getSymbolOptions()
    
    // setSymbolOptions(
    //   symbols.slice(0, 10).map((item: symbolProps) => item.symbol)
    // );
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Symbol</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={symbol}
          label="Symbol"
          onChange={handleChange}
        >
          {symboloptions.map((label) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
