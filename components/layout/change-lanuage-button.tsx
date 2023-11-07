import { Select, SelectItem } from "@nextui-org/select"
import { useLocale } from "next-intl"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

const getFlagComponent = (locale: string) => {
  return <Image width={24} height={24} src={`/language/${locale}.png`} alt={`${locale == "en" ? "english" : "german"} flag`} />
}

export default function ChangeLanguageButton() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Select value={locale} startContent={getFlagComponent(locale)}>
      <SelectItem value={"en"} key="en" startContent={getFlagComponent("en")} className="flex justify-between">
        English
      </SelectItem>
      <SelectItem value={"de"} key="de" startContent={getFlagComponent("de")} className="flex justify-between">
        Deutsch
      </SelectItem>
    </Select>
  )
}
