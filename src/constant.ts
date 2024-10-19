import BoneLessImage from './assets/boneless.webp';
import RegularBoilerImage from './assets/currycut.jpeg';
import CockerelImage from './assets/cockerel.jpeg';
import GaonRaniImage from './assets/gaorani.jpeg';
import biriyani from './assets/biriyani.jpeg'
import kabab from './assets/kabab.jpeg'
import butter from './assets/butterchicken.jpeg'
import tikka from './assets/chicken-tikka.jpeg'

type SizeType = "500gm" | "1kg" | "2kg" | "3kg" ;

export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  prices: Record<SizeType, string>;
  sizes: SizeType[];
}

export const cardItems: Product[] = [
  {
    id: 1,
    title: "Bone Less ",
    description: "Per Kg",
    imageUrl: BoneLessImage,
    prices: {
      "500gm": "120",
      "1kg": "240",
      "2kg": "480",
      "3kg": "720",
    },
    sizes: ["500gm", "1kg", "2kg", "3kg"],
  },
  {
    id: 2,
    title: " Currycut",
    description: "Per Kg",
    imageUrl: RegularBoilerImage,
    prices: {
      "500gm": "120",
      "1kg": "240",
      "2kg": "480",
      "3kg": "720",
    },
    sizes: ["500gm", "1kg", "2kg", "3kg"],
  },
  {
    id: 3,
    title: "Cockerel",
    description: "Per Kg",
    imageUrl: CockerelImage,
    prices: {
      "500gm": "150",
      "1kg": "300",
      "2kg": "600",
      "3kg": "900",
    },
    sizes: ["500gm", "1kg", "2kg", "3kg"],
  },
  {
    id: 4,
    title: "GaonRani",
    description: "Per Kg",
    imageUrl: GaonRaniImage,
    prices: {
      "1kg": "600",
      "500gm": "",
      "2kg": "",
      "3kg": ""
    },
    sizes: ["500gm", "1kg", "2kg", "3kg"],
  },
  {
    id: 5,
    title: "Chicken Biriyani",
    description: "Per Kg",
    imageUrl: biriyani,
    prices: {
      "1kg": "600",
      "500gm": "",
      "2kg": "",
      "3kg": ""
    },
    sizes: ["500gm", "1kg", "2kg", "3kg"],
  },
  {
    id: 6,
    title: "Chicken Tikka",
    description: "Per Kg",
    imageUrl: tikka,
    prices: {
      "1kg": "600",
      "500gm": "",
      "2kg": "",
      "3kg": ""
    },
    sizes: ["500gm", "1kg", "2kg", "3kg"],
  },
  {
    id: 7,
    title: "Butter Chicken",
    description: "Per Kg",
    imageUrl: butter,
    prices: {
      "1kg": "600",
      "500gm": "",
      "2kg": "",
      "3kg": ""
    },
    sizes: ["500gm", "1kg", "2kg", "3kg"],
  },
  {
    id: 8,
    title: "Chicken Kabab",
    description: "Per Kg",
    imageUrl: kabab,
    prices: {
      "1kg": "600",
      "500gm": "",
      "2kg": "",
      "3kg": ""
    },
    sizes: ["500gm", "1kg", "2kg", "3kg"],
  },
 
];
