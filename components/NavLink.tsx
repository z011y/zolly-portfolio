import Link from "next/link";
import { useRouter } from "next/router";

import { styled } from "../stitches.config";

type NavLinkProps = {
  href: string;
  text: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
};

const NavLink = ({ href, text, icon, activeIcon }: NavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const activeStyles = isActive ? { color: "#0091FF" } : {};

  return (
    <Link href={href} passHref>
      <LinkWrapper>
        {isActive ? activeIcon : icon}
        <a style={activeStyles}>{text}</a>
      </LinkWrapper>
    </Link>
  );
};

export default NavLink;

const LinkWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridGap: "16px",
});
