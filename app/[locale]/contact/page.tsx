import AnimatedTitle from "@/components/general/animated-title"
import { useTranslations } from "next-intl"
import ContactForm from "@/components/contact/contact-form";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({params: {locale}}: any): Promise<Metadata> {
  const t = await getTranslations({locale: locale, namespace: "contact.metadata"})
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    }
  }
}

export default function Contact() {
  const t = useTranslations("contact")
  return (
    <div className="flex flex-col gap-10 overscroll-none h-full lg:pb-14">
      <AnimatedTitle className="text-5xl font-bold">{t("title")}</AnimatedTitle>
      <div className="flex flex-col gap-y-8">
        {/** E-Mail */}
        <div className="flex flex-row items-center gap-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-8 h-auto" viewBox="0 0 512 512" fill="#FFFFFF">
            <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />{" "}
          </svg>
          marlon.wisskirchen@outlook.de
        </div>
        {/** Tel */}
        <div className="flex flex-row items-center gap-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-8 h-auto" viewBox="0 0 512 512" fill="#FFFFFF">
            <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z" />{" "}
          </svg>
          +4917663751820
        </div>
        {/** Contact Form */}
        <ContactForm />
      </div>
    </div>
  )
}
