import new1 from "../assets/new-1.webp";
import new2 from "../assets/new-2.webp"; 
import new3 from "../assets/new-3.webp";
import new4 from "../assets/new-4.webp";
import new5 from "../assets/new-5.webp";
import new6 from "../assets/new-6.webp";
import men from "../assets/men.webp";
import jewelery from "../assets/jewlery.webp"; 
import electronics from "../assets/electronics.webp";
import image1 from "../assets/hero-1.webp";
import image2 from "../assets/hero-2.webp";
import image3 from "../assets/hero-3.webp"; 
import image4 from "../assets/hero-4.webp";
import image5 from "../assets/hero-5.webp";
import image6 from "../assets/hero-6.webp";
import best1 from "../assets/best-1.webp";
import best2 from "../assets/best-2.webp";
import best3 from "../assets/best-3.webp";
import best4 from "../assets/best-4.webp";
import best5 from "../assets/best-5.webp";
import best6 from "../assets/best-6.webp";
import best7 from "../assets/best-7.webp";
import best8 from "../assets/best-8.webp";


import { FiCalendar } from 'react-icons/fi';
import { IoBagHandle } from 'react-icons/io5';
import { FiGift } from 'react-icons/fi';
import { TfiReload } from 'react-icons/tfi';



export const heroImage = [
  {
    id: 1,
    image: image1, // Verify image1 is imported and exists
    title: "Soft Leather JACKETS",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
  },
  {
    id: 2, 
    image: image2,
    title: "Soft Leather SweatPants",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: image3,
    title: "Diamond Ring In 14k Gold",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    image: image4,
    title: "Earring in 14K Gold",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    image: image5,
    title: "Apple LapTop",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    image: image6,
    title: "Smartphone",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
  },
];

export const section1Data = [
  {
    id: -1,
    image: new1,
    title: "Diamond Ring in 18K Gold",
    price: 420,
    category: "jewelery",
  },
  {
    id: -2,
    image: new2,
    title: "Soft Leather T-Shirt", 
    price: 200,
    category: "men's clothing",
  },
  {
    id: -3,
    image: new3,
    title: "Soft Leather Jacket",
    price: 350,
    category: "men's clothing",
  },
  {
    id: -4,
    image: new4,
    title: "Heart Bronze Ring In 14K Gold",
    price: 400,
    category: "jewelery",
  },
  {
    id: -5,
    image: new5,
    title: "Soft Leather Jacket",
    price: 290,
    category: "men's clothing",
  },
  {
    id: -6,
    image: new6,
    title: "Bronze Necklace In 14k Gold",
    price: 480,
    category: "jewelery",
  },
];

export const iconData = [
  {
    icon: FiCalendar,
    title: "Book An Appointment",
    description:
      "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: IoBagHandle,
    title: "Pick up in store",
    description: 
      "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: FiGift,
    title: "Special packaging",
    description:
      "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: TfiReload,
    title: "Free global returns",
    description:
      "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
];

export const categoryData = [
  {
    img: men, // Verify men image is imported and exists
    label: "SHOP FOR MEN",
    link: "/category/men's clothing",
    delay: 0.3,
  },
  {
    img: electronics,
    label: "SHOP FOR electronics",
    link: "/category/electronics", 
    delay: 0.6,
  },
  {
    img: jewelery,
    label: "SHOP FOR jewelery",
    link: "/category/jewelery",
    delay: 0.9,
  },
];

export const section2Data = [
  {
    id: -8,
    image: best1, // Verify best1 is imported and exists
    title: "Diamond Accessory in 18K Gold",
    price: 280,
    category: "jewelery"
  },
  {
    id: -9,
    image: best2,
    title: "Soft Leather T-Shirt",
    price: 70,
    category: "men's clothing"
  },
  {
    id: -10,
    image: best3,
    title: "Soft Leather T-Shirt",
    price: 82,
    category: "men's clothing"
  },
  {
    id: -11,
    image: best4,
    title: "Earring in 14K Gold",
    price: 290,
    category: "jewelery"
  },
  {
    id: -12,
    image: best5,
    title: "Bronze Necklace In 14k Gold",
    price: 320,
    category: "jewelery"
  },
  {
    id: -13,
    image: best6,
    title: "Soft Leather Jacket",
    price: 180,
    category: "men's clothing"
  },
  {
    id: -14,
    image: best7,
    title: "Soft Leather Jacket",
    price: 210,
    category: "men's clothing"
  },
  {
    id: -15,
    image: best8,
    title: "Earring in 14K Gold",
    price: 240,
    category: "jewelery"
  }
];