import { getDictionary, Locale } from "../dictionaries";
import Button from "@/components/UI/Button";
import { redirect } from "next/navigation";

export default async function Profile({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang }: { lang: Locale } = await params;
  const dict = await getDictionary(lang);

  async function submitProfile() {
    "use server";
    redirect(`/${lang}/quiz`);
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="border p-6 rounded-lg">
        <h1 className="text-xl md:text-3xl">
          {dict.profile.weWantToKnowMoreAboutYou}
        </h1>
        <form className="space-y-4 mt-4 flex flex-col" action={submitProfile}>
          <label htmlFor="genre">{dict.profile.AreYouAMage}</label>
          <select name="genre" id="genre">
            <option value="wizard">{dict.profile.Mage}</option>
            <option value="witch">{dict.profile.Witch}</option>
            <option value="creature">{dict.profile.MagicalCreature}</option>
          </select>
          <label htmlFor="age">{dict.profile.WhatIsYourAge}</label>
          <input type="number" name="age" id="age" />
          <label htmlFor="name">{dict.profile.WhatIsYourWizardName}</label>
          <input type="text" name="name" id="name" />
          <Button type="submit">{dict.profile.Continue}</Button>
        </form>
      </div>
    </div>
  );
}
