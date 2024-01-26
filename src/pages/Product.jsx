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
      <About
        name="Banane"
        origin="Guadeloupe"
        score="75"
        energy="170kj / 40kcal"
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
