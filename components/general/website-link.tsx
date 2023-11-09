import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export default function WebsiteLink({ websiteLink }: {websiteLink: string}) {
  return (
    <Link href={websiteLink} rel="noopener noreferrer" target="_blank">
      <Image src={"/website-icon.svg"} alt={`website ${websiteLink}`} className="w-auto h-10 rounded-none" />
    </Link>
  )
}