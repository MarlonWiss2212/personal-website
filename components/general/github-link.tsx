import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export default function GithubLink({ gitHubLink }: {gitHubLink: string}) {
  return (
    <Link href={gitHubLink} rel="noopener noreferrer" target="_blank" className="py-2">
      <Image src={"/github-logo.svg"} alt={`githublink ${gitHubLink}`} className="w-auto h-8 p-1 rounded-md bg-neutral-800" />
    </Link>
  )
}