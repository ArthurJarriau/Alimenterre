import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";
import Aliment from "../components/Aliment";
import Similar from "../components/Similar";

const Product = () => {
  const location = useLocation();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProduit();
  }, []);

  const getProduit = () => {
    fetch(`https://world.openfoodfacts.net/api/v2/product/${location.state.barcodeValue}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });
  };

  return (
    <main className="product">
      <Aliment
        name={product?.generic_name_fr || 'Banane'}
        imageUrl={product?.image_front_url || './img/Banane'}
        text= {product?.preparation_fr || "La banane est un fruit de la famille des bananidés. On en mange souvent pour ne plus avoir faim. Elle est riche en oligoéléments. Un vrai délice pour vos papilles."}
      />
      <About
        name={product?.generic_name_fr || 'Banane'}
        origin={product?.origin || "Non précisé"}
        score={product?.nutriscore_score || '~60'}
        energy={(product?.energy || '170') + 'kj'}
        glucide="9,8g / 9,8g"
        vitaminea="120µg (15%)"
        vitaminec="12mg (15%)"
        vitaminee="1,8mg (15%)"
        vitamineb6="0,21mg (15%)"
        acide="0,90mg (15%)"
      />
      <Similar />
    </main>
  );
};

export default Product;
