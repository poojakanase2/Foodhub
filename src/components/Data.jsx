import Dosa from "../images/dosa.jpg";
import Chola from "../images/chhola.jpg";
import Idli from "../images/idli.jpg";
import MasalaDosa from "../images/masala.jpg";
import Paneer from "../images/paneer.jpg";
import MaharashtrianThali from "../images/Maharashtra.jpg"; // Fixed variable name
import Chicken from "../images/chicken.jpg";
import Pizza from "../images/pizza.jpg";
import FishCurry from "../images/fishcurry.jpg";
import TambadaPandhara from "../images/Kolhapuri tambda pandhara.jpg"; 
export const MenuList = [
 
  {
    name: "Maharashtrian Thali",
    image: MaharashtrianThali, // Fixed variable reference
    price: 500,
  },
  {
    name: "Kolhapuri Tambada Pandhara",
    image: TambadaPandhara, // ✅ Fixed variable
    price: 450,
  },
  {
    name: "Dosa",
    image: Dosa,
    price: 200,
  },
  {
    name: "Chola",
    image: Chola,
    price: 250,
  },
  {
    name: "Idli Sambhar",
    image: Idli,
    price: 300,
  },
  {
    name: "Chicken",
    image: Chicken,
    price: 400,
  },
  {
    name: "Fish Curry",
    image: FishCurry,
    price: 400,
  },
  {
    name: "Pizza",
    image: Pizza,
    price: 400,
  },
  {
    name: "Masala Dosa",
    image: MasalaDosa,
    price: 100,
  },
  {
    name: "Paneer",
    image: Paneer,
    price: 400,
  },
 
];