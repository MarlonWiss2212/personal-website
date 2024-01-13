import { usePathname, useRouter } from "@/navigation"
import { Select, SelectItem } from "@nextui-org/select"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { ChangeEvent } from "react"

const getFlagComponent = (locale: string) => {
  return <Image width={24} height={24} src={`/language/${locale}.png`} alt={`${locale == "en" ? "english" : "german"} flag`} />
}

export default function ChangeLanguageButton() {
  const locale = useLocale()
  const t = useTranslations("language")
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value })
  }

  return (
    <Select color="default" size="sm" selectedKeys={[locale]} label={t("title")} selectionMode="single" value={locale} onChange={handleChange} startContent={getFlagComponent(locale)}>
      <SelectItem value={"en"} key="en" startContent={getFlagComponent("en")} className="flex justify-between">
        {t("english")}
      </SelectItem>
      <SelectItem value={"de"} key="de" startContent={getFlagComponent("de")} className="flex justify-between">
        {t("german")}
      </SelectItem>
    </Select>
  )
}
