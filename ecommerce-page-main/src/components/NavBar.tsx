import { useState } from "react";
import { Icons, Img } from "../Themes/Theme";
import { AnimatePresence, motion } from "framer-motion";
import Li from "./NavBarComposents/Li";
import { useCounter } from "../contexts/CounterContext";
import "./NavBar.css";
//*----------------------------------------------------------------
const liDatas = ["Collections", "Men", "Women", "About", "Contact"];
//*----------------------------------------------------------------
const NavBar = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const [burberIsOpen, setburgerIsOpen] = useState<boolean>(false);
  const { counter, setCounter } = useCounter();
  const handleCartOpen = () => {
    setCartIsOpen(!cartIsOpen);
  };
  return (
    <nav className="px-20 lg:px-10 sm:px-4">
      <div className="flex flex-row justify-between items-center my-6 ">
        <img
          src={Icons.menu}
          alt="menu"
          className="hidden lg:block mr-4 cursor-pointer"
          onClick={() => setburgerIsOpen(true)}
        />
        <AnimatePresence>
          {burberIsOpen && (
            <motion.div
              initial={{ x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -1000 }}
              className="bg-white h-svh w-5/6 absolute left-0 top-0 pt-6 pl-6"
            >
              <img
                src={Icons.close}
                className="h-5 w-5 cursor-pointer "
                onClick={() => setburgerIsOpen(false)}
                alt="closer"
              />
              <ul className="list-none font-sans h-44 font-bold text-xl flex flex-col justify-between mt-5">
                {liDatas.map((li) => {
                  return <li className="cursor-pointer">{li}</li>;
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <img src={Icons.logo} alt="logo" className="cursor-pointer" />
        <ul className="list-none flex flex-row ml-6 lg:hidden">
          {liDatas.map((li) => {
            return <Li>{li}</Li>;
          })}
        </ul>
        <motion.div className="ml-auto mr-8 cursor-pointer">
          <img
            src={Icons.cart}
            alt="cart"
            className="w-7 h-7 cart sm:w-5 sm:h-5"
            onClick={handleCartOpen}
          />
          {counter !== 0 && (
            <div className="absolute top-7 bg-orange w-6 text-white text-center rounded-lg font-sans text-xs">
              {counter}
            </div>
          )}
          <AnimatePresence>
            {cartIsOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ height: 200 }}
                className="absolute right-24 top-24 rounded-lg p-2.5 shadow-2xl bg-white sm:top-28 sm:right-6 lg:right-12 lg:w-5/6 w-1/6"
              >
                <h5 className="font-sans text-base">Cart</h5>
                <div className="text-center justify-self-center h-5/6 flex justify-center items-center flex-col font-sans">
                  <AnimatePresence>
                    {counter == 0 ? (
                      <p className="">Your cart is empty</p>
                    ) : (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex justify-between mt-8 text-Dark-grayish-blue"
                        >
                          <img
                            src={Img.product1Tiny}
                            alt="product"
                            className="w-1/6 rounded-md"
                          />
                          <div className="flex flex-col items-start">
                            <div>Fall Limited Edition Sneakers</div>
                            <div>
                              $125.00 x {counter}{" "}
                              <span className="font-bold text-black">
                                ${125 * counter}
                              </span>
                            </div>
                          </div>
                          <img
                            src={Icons.deletee}
                            alt="delete"
                            onClick={() => setCounter(0)}
                            className="w-5 h-6"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="bg-orange cursor-pointer hover:opacity-60 w-full h-10 flex justify-center items-center mt-auto rounded-lg text-black font-bold "
                        >
                          Checkout
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="w-16 h-16 cursor-default rounded-full flex justify-center items-center sm:w-12 sm:h-12"
          whileHover={{ backgroundColor: "hsl(26, 100%, 55%)" }}
        >
          <img
            src={Img.avatar}
            alt="avatar"
            className="w-14 h-14 cursor-default justify-self-center sm:w-10 sm:h-10"
          />
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
