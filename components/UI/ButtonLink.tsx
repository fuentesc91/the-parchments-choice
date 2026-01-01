import Button from "@/components/UI/Button";
import Link from "next/link";

export default function ButtonLink({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
      <Button>{children}</Button>
    </Link>
  );
}
