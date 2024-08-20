import * as Dialog from '@radix-ui/react-dialog'
import { Handbag, X } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import {
  ButtonCartLength,
  ButtonContainer,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalOverlay,
} from './styles'
import { EmptyCart } from './EmptyCart'
import { ContentCart } from './ContentCar'

export function Cart() {
  const { cartItems } = useCart()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonContainer>
          <Handbag
            size={24}
            weight='bold'
          />

          {cartItems.length > 0 && (
            <ButtonCartLength>
              {cartItems.length}
            </ButtonCartLength>
          )}
        </ButtonContainer>
      </Dialog.Trigger>

      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
          <Dialog.Title>
            Bike Cart
          </Dialog.Title>
          <ModalClose asChild>
            <X size={24} weight='bold'/>
          </ModalClose>
          <ModalDescription>
            {cartItems.length >= 1
              ? <ContentCart />
              : <EmptyCart />
            }
          </ModalDescription>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}