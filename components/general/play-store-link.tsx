import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export default function PlayStoreLink({ playStoreLink }: {playStoreLink: string}) {
  return (
    <Link data-testid={`playStoreLink${playStoreLink}`} href={playStoreLink} rel="noopener noreferrer" target="_blank">
      <Image data-testid={`playStoreImage${playStoreLink}`} src={"/appstore/play-store.svg"} alt={`playStore ${playStoreLink}`} className="w-auto h-10 rounded-none" />
    </Link>
  )
}