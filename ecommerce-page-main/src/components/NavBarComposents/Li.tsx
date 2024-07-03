import { motion } from "framer-motion";
import "../NavBar.css";
type Props = {
  children: string;
};

const Li = ({ children }: Props) => {
  return (
    <motion.li className="mx-7 font-sans text-base text-Dark-grayish-blue cursor-pointer hover:text-Very-dark-blue hover:font-bold w-24 text-center li duration-700">
      {children}
    </motion.li>
  );
};

export default Li;
