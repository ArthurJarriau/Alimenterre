import React, { useState } from 'react';
import Scanner from './Scanner';
import {Fab, TextareaAutosize, Paper} from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const BarcodeScanner = () => {
  const [results, setResults] = useState([]);
  const [scanning, setScanning] = useState(false);

  const _scan = () => {
    setScanning(!scanning);
  }

  const _onDetected = result => {
    setResults([result]);
  }

  return (
    <div>
      <Link to="/">
          <Fab style={{marginRight:10}} color="secondary">
              <ArrowBack/>
          </Fab>
      </Link>
      <span>Barcode Scanner</span>
      
      <Paper variant="outlined" style={{marginTop:30, width:640, height:320}}>
        <Scanner onDetected={_onDetected} />
      </Paper>

      <TextareaAutosize
          style={{fontSize:32, width:320, height:100, marginTop:30}}
          rowsMax={4}
          defaultValue={'No data scanned'}
          value={results[0] ? results[0].codeResult.code : 'No data scanned'}
      />

    </div>
  );
}

export default BarcodeScanner;