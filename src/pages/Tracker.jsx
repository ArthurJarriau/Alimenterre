import React, { useCallback, useContext, useState } from 'react';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../components/App';
import { useLocation, Navigate } from "react-router-dom";
import CardHisto from '../components/CardHisto';
import BarcodeScanner from '../components/BarcodeScanner';

const Tracker = () => {
    const { loginState } = useContext(AuthContext);
    const location = useLocation();

    const [inputValue, setInputValue] = useState('');
    const [autoComp, setAutoComp] = useState([]);
    const [codeBarre, setCodeBarre] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [scanResult, setScanResult] = useState(null);
    const [textareaValue, setTextareaValue] = useState('Aucun code barre détecté');
    const [barcodeValue, setBarcodeValue] = useState(null);

    const handleScan = (result) => {
        setScanResult(result.codeResult.code);
        setIsScanning(false);
    };

    const getData = () => {
        console.log('getData() appelée')
        fetch(`https://world.openfoodfacts.net/api/v2/search?stores_tags=leclerc&countries_tags_en=fr&categories_tags_fr=${inputValue}&page_size=5`)
            .then(res => res.json())
            .then(data => {
                setAutoComp(data.products);
                console.log(data.products)
                //console.log(`https://world.openfoodfacts.net/api/v2/search?stores_tags=leclerc&countries_tags_en=fr&categories_tags_fr=${inputValue}&page_size=5`);
            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });

    }
    const getDataCB = () => {
        console.log('getDataCB() appelée')
        fetch(`https://world.openfoodfacts.net/api/v2/product/${inputValue}`)
            .then(res => res.json())
            .then(data => {
                setCodeBarre(true)
                setAutoComp(data);
                console.log(data)
                //console.log(`https://world.openfoodfacts.net/api/v2/search?stores_tags=leclerc&countries_tags_en=fr&categories_tags_fr=${inputValue}&page_size=5`);
            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
            });

    }

    const handleComplete = (productName) => {
        //console.log(productName);
        setInputValue(productName)
        setAutoComp([])
    };

    const from = /*location.state?.from ||*/ '/';

    if (!loginState.user) {
        return <Navigate to={from} />;
    }
    
    return (
        <section className='tracker'>
            <h2 className='tracker__title'>Tracker Alimentation</h2>
            <section className="search-bar">
            {!isScanning && <input
                    type="text"
                    className=""
                    placeholder="nom ou code barre..."
                    value={inputValue || scanResult}
                    onChange={(e) => {
                        if (e.target.value.length >= 3) {
                            if(isNaN(e.target.value)){
                                getData();
                            }else{
                                getDataCB();
                            }
                        } else {
                            setCodeBarre(false)
                            setAutoComp([]);
                        }
                        setInputValue(e.target.value);
                        
                    }}
                />}
                {!isScanning && <button onClick={() => setIsScanning(true)} style={{backgroundImage: 'url("/img/scanner.png")', 
                    backgroundSize: 'cover', 
                    border: 'none', 
                    color: 'transparent', 
                    width: '20px', 
                    height: '20px',
                    position: 'absolute',
                    right: '35px',}}>
                Start Scanner
                </button>}
                {isScanning && <BarcodeScanner onDetected={handleScan} setTextareaValue={setTextareaValue} setBarcodeValue={setBarcodeValue}/>}
                {!isScanning && <button>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.5" cy="7.5" r="7" stroke="black" />
                        <path d="M17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L17.1464 17.8536ZM12.1464 12.8536L17.1464 17.8536L17.8536 17.1464L12.8536 12.1464L12.1464 12.8536Z" fill="black" />
                    </svg>
                </button>}
                <section className='autoComp'>
                    <ul>
                    {(autoComp.length>0 && !codeBarre) &&
                            autoComp.map((product, index) => (
                                <li onClick={()=> handleComplete(product.product_name_fr)}>
                                    {product.product_name_fr}
                                </li>
                            )) 
                            
                        }
                        {(autoComp.product && codeBarre) &&
                                <li onClick={()=> handleComplete(autoComp.product.product_name_fr)}>
                                    {autoComp.product}
                                </li>
                           
                        }
                        
                    </ul>
                </section>
            </section>

            <ul>
                <li><CardHisto imageUrl="/img/banane.png" name="Banane" points="100" /></li>
                <li><CardHisto imageUrl="/img/banane.png" name="Banane" points="100" /></li>
                <li><CardHisto imageUrl="/img/banane.png" name="Banane" points="100" /></li>
                <li><CardHisto imageUrl="/img/banane.png" name="Banane" points="100" /></li>
                <li><CardHisto imageUrl="/img/banane.png" name="Banane" points="100" /></li>
            </ul>
        </section>
    );
};

export default Tracker;
