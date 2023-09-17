import Image from "next/image";
import Products from "@/components/products";
import { Cagliostro } from "next/font/google";
const PlantProducts = [
  {
    id: 1,
    name: "Wheat",
    href: "#",
    imageSrc:
      "https://m.economictimes.com/thumb/height-450,width-600,imgsize-134476,msid-95141021/wheat.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Pure",
  },
  {
    id: 2,
    name: "Paddy",
    href: "#",
    imageSrc:
      "https://www.dainiknepal.news/wp-content/uploads/2023/02/dhan.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Maize",
    href: "#",
    imageSrc:
      "https://t4.ftcdn.net/jpg/05/21/84/23/360_F_521842378_XYYP0IjnbgraQqHlna2y3wSmaCXRiUAI.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Millet",
    href: "#",
    imageSrc:
      "https://www.ifpri.org/sites/default/files/Blog/finger_millet.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  // More products...
];
const AnimalProducts = [
  {
    id: 1,
    name: "Wheat",
    href: "#",
    imageSrc:
      "https://m.economictimes.com/thumb/height-450,width-600,imgsize-134476,msid-95141021/wheat.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Pure",
  },
  {
    id: 2,
    name: "Paddy",
    href: "#",
    imageSrc:
      "https://www.dainiknepal.news/wp-content/uploads/2023/02/dhan.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Maize",
    href: "#",
    imageSrc:
      "https://t4.ftcdn.net/jpg/05/21/84/23/360_F_521842378_XYYP0IjnbgraQqHlna2y3wSmaCXRiUAI.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Millet",
    href: "#",
    imageSrc:
      "https://www.ifpri.org/sites/default/files/Blog/finger_millet.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  // More products...
];

export default function Home() {
  return (
    <main className="flex flex-col gap-10 min-h-screen items-center justify-between py-24">
      <div className="mx-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">
          Agricultural Products
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          {PlantProducts.map((item, index) => {
            return (
              <Products
                key={index}
                id={item.id}
                name={item.name}
                href={item.href}
                image={item.imageSrc}
                imageAlt={item.imageAlt}
                price={item.price}
                color={item.color}
              />
            );
          })}
        </div>
      </div>
      <div className="mx-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">
          Animal Products
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          {AnimalProducts.map((item, index) => {
            return (
              <Products
                key={index}
                id={item.id}
                name={item.name}
                href={item.href}
                image={item.imageSrc}
                imageAlt={item.imageAlt}
                price={item.price}
                color={item.color}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
