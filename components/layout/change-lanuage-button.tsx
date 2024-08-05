import { locales } from "@/middleware"
import { usePathname, useRouter } from "@/navigation"
import { Locale } from "@/types/locale-type"
import { Select, SelectItem } from "@nextui-org/select"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { ChangeEvent } from "react"

const getFlagComponent = (locale: Locale) => {
  return <Image width={24} height={24} src={`/language/${locale.code}.png`} alt={`${locale.name} flag`} />
}

export default function ChangeLanguageButton() {
  const locale = useLocale()
  const t = useTranslations("language")
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value })
  }

  const foundFlag = locales.find(localeOfArray => localeOfArray.code == locale)
  return (
    <Select 
      color="default" 
      size="sm" 
      selectedKeys={[locale]} 
      label={t("title")} 
      selectionMode="single" 
      value={locale} 
      onChange={handleChange} 
      startContent={foundFlag ? getFlagComponent(foundFlag) : foundFlag}>
      {locales.map(locale => (
        <SelectItem key={locale.code} value={locale.code} startContent={getFlagComponent(locale)} className="flex justify-between">
          {t(locale.name)}
        </SelectItem>
      ))}
    </Select>
  )
}
