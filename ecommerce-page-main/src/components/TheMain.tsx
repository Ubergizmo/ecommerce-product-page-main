import { useState } from "react";
import { useCounter } from "../contexts/CounterContext";
import { Icons, Img } from "../Themes/Theme";

const picturesDatas = [
  {
    id: 1,
    source: Img.product1Tiny,
    dynamiqueSource: Img.product1,
    alt: "product1",
  },
  {
    id: 2,
    source: Img.product2Tiny,
    dynamiqueSource: Img.product2,
    alt: "product2",
  },
  {
    id: 3,
    source: Img.product3Tiny,
    dynamiqueSource: Img.product3,
    alt: "product3",
  },
  {
    id: 4,
    source: Img.product4Tiny,
    dynamiqueSource: Img.product4,
    alt: "product4",
  },
];

const TheMain = () => {
  const { setCounter } = useCounter();
  const [selectedPic, setSelectedPic] = useState(Img.product1);
  const [quantity, setQuantity] = useState<number>(1);
  const reduceQ = () => {
    if (quantity - 1 < 1) setQuantity(1);
    else setQuantity(quantity - 1);
  };
  const incrementQ = () => {
    setQuantity(quantity + 1);
  };
  const handleCounter = () => {
    setCounter(quantity);
  };
  return (
    <main className="px-20 pt-20 pb-6 lg:pt-0 sm:px-10">
      <div className=" h-full px-16 flex lg:flex-col lg:px-0">
        <section className="w-1/2 lg:w-full">
          <div className="w-4/5 lg:w-full">
            <img
              src={selectedPic}
              alt="selectedPicture"
              className="w-full lg:w-full rounded-2xl"
              loading="lazy"
            />
            <div className="flex justify-between flex-wrap w-full mt-5">
              {picturesDatas.map((picture) => {
                return (
                  <img
                    key={picture.id}
                    src={picture.source}
                    alt={picture.alt}
                    className="w-1/5 rounded-xl cursor-pointer hover:opacity-60"
                    onClick={() => setSelectedPic(picture.dynamiqueSource)}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section className="w-1/2 h-full lg:w-full">
          <div className="font-sans cursor-default text-Dark-grayish-blue pt-20">
            <p className="uppercase mb-6">Sneaker Company</p>
            <h1 className="text-bold text-black text-5xl mb-6">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-base text-wrap mb-6">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex items-center mb-6">
              <h2 className="text-black mr-4">$125.00</h2>
              <p className="text-white bg-black p-1 rounded-md">50%</p>
            </div>
            <p className="text-Dark-grayish-blue font-bold line-through mb-6">
              $250.00
            </p>
            <div className="flex h-12">
              <div className="bg-gray-200 mr-7 w-2/6 rounded-xl flex">
                <div
                  className="text-orange cursor-pointer flex-1 flex items-center justify-center font-bold text-lg "
                  onClick={reduceQ}
                >
                  -
                </div>
                <div className="flex-1 flex items-center justify-center text-black font-bold">
                  {quantity}
                </div>
                <div
                  className="text-orange cursor-pointer flex-1 flex items-center justify-center font-bold text-lg "
                  onClick={incrementQ}
                >
                  +
                </div>
              </div>
              <div
                className="bg-orange flex w-4/6 rounded-xl justify-center items-center cursor-pointer"
                onClick={handleCounter}
              >
                <img src={Icons.cart} alt="cart" className=" mr-4 fill-black" />
                <h3 className="text-black">Add to cart</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TheMain;
