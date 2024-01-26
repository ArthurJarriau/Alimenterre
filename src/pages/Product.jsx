import About from "../components/About";
import Aliment from "../components/Aliment";
import Similar from "../components/Similar";

const Product = (props) => {
  return (
    <main className="product">
      <Aliment
        name="Banane"
        imageUrl="/img/banane.png"
        text="La banane est un fruit de la famille des bananidés. On en mange souvent
      pour ne plus avoir faim. Elle est riche en oligoéléments. Un vrai délice
      pour vos papilles."
      />
      <About name="Banane" origin="Guadeloupe" score="75" />
      <Similar />
    </main>
  );
};

export default Product;
