import Link from "next/link";
import Image from "next/image"
import { Cart } from "../Cart"

import logoImg from '../../assets/logo.svg'
import { HeaderContainer, MTBShop } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImg} alt="MTB Shop Logo" />
      </Link>
      <MTBShop>
        <p>MTB SHOP</p>
        </MTBShop>
      <Cart />
    </HeaderContainer>
  )
}