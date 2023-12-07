import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export default function GithubLink({ gitHubLink, imageSrc }: {gitHubLink: string, imageSrc?: string}) {
  return (
    <Link data-testid={`githubLink${gitHubLink}`} href={gitHubLink} rel="noopener noreferrer" target="_blank" className="flex gap-2 p-1 rounded-md bg-neutral-800">
      <Image data-testid={`githubImage${gitHubLink}`} src={"/github-logo.svg"} alt={`githublink ${gitHubLink}`} className="w-auto h-6" />
      {imageSrc != null && <Image src={imageSrc} alt={imageSrc} className="w-auto h-6" />}
    </Link>
  )
}