import Heading from "@/components/UI/Heading";
import ButtonLink from "@/components/UI/ButtonLink";

import { getDictionary, Locale } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <Heading className="mb-10">
        {dict.home.findWhereYouBelongAtHogwarts}
      </Heading>
      <ButtonLink href="/profile">{dict.home.start}</ButtonLink>
    </div>
  );
}
