import React from "react";

const ProduitRecom = (props) => {
    return (
        <>
          <section className={`recom__${props.class}-item`}>
            <img
              className={`recom__${props.class}-elipse`}
              src="img/elipse-fruit.svg"
              alt="aliment"
            />
            <img
              className={`recom__${props.class}-img`}
              src="https://images.openfoodfacts.net/images/products/762/230/068/9124/front_fr.149.200.jpg"
              alt=""
            />
          </section>
        </>
      );
    };

export default ProduitRecom;