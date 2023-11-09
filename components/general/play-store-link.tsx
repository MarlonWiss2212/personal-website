import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export default function PlayStoreLink({ playStoreLink }: {playStoreLink: string}) {
  return (
    <Link href={playStoreLink} rel="noopener noreferrer" target="_blank">
      <Image src={"/appstore/play-store.svg"} alt={`playStore ${playStoreLink}`} className="w-auto h-10 rounded-none" />
    </Link>
  )
}