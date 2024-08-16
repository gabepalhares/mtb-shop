import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Home() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Congrats <strong>Gabriel</strong>! Your brand new bike <strong>Stumpjumper</strong>is already descending to your home.
      </p>

      <Link href="/">
        Back to catalog
      </Link>
    </SuccessContainer>
  );
}