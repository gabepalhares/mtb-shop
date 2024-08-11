import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import bike1 from '../assets/bikes/1.png';
import bike2 from '../assets/bikes/2.png';
import bike3 from '../assets/bikes/3.png';
import bike4 from '../assets/bikes/4.png';
import bike5 from '../assets/bikes/5.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={bike1} width={520} height={480} alt="" />

        <footer>
          <strong>S-Works Turbo Levo SL</strong>
          <span>R$ 135.000,00</span>
        </footer>
      </Product>

      <Product>
        <Image src={bike2} width={520} height={480} alt="" />

        <footer>
          <strong>S-Works Stumpjumper</strong>
          <span>R$ 80.000,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}