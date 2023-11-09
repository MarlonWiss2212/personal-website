import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export default function AppStoreLink({ appStoreLink }: {appStoreLink: string}) {
  return (
    <Link href={appStoreLink} rel="noopener noreferrer" target="_blank">
      <Image src={"/appstore/app-store.svg"} alt={`appstore ${appStoreLink}`} className="w-auto h-10 rounded-none" />
    </Link>
  )
}