import Heading from "@/components/UI/Heading";
import ButtonLink from "@/components/UI/ButtonLink";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <Heading className="mb-10">Descubre tu hogar en Hogwarts</Heading>
      <ButtonLink href="/profile">Empezar</ButtonLink>
    </div>
  );
}
