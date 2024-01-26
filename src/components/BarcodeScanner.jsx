import React, { useState } from 'react';
import Scanner from './Scanner';
import {Fab, TextareaAutosize, Paper} from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from "react-router-dom";

const BarcodeScanner = ({setTextareaValue, setBarcodeValue}) => {
  const [results, setResults] = useState([]);
  const [scanning, setScanning] = useState(false);
  const navigate = useNavigate();
  const _scan = () => {
    setScanning(!scanning);
  }

  const _onDetected = result => {
    setTextareaValue(result.codeResult.code);
    setBarcodeValue("3560071275808");
    setResults([...results, result]);
    navigate('/product', { state: { barcodeValue: "3560071275808" } });
  };

  return (
    <div>
      <Link to="/">
          <Fab style={{marginRight:10}} color="black">
              <ArrowBack/>
          </Fab>
      </Link>
      <span>Barcode Scanner</span>
      
      <Paper variant="outlined" style={{marginTop:30, width:300, height:200}}>
        <Scanner onDetected={_onDetected} />
      </Paper>

      <TextareaAutosize
            style={{fontSize:32, width:'300px', height:100, marginTop:30}}
            rowsmax={4}
            value={results[0] ? "3560071275808" : 'Aucun code barre détecté'}
        />

    </div>
  );
}

export default BarcodeScanner;