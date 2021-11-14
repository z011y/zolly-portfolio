import Link from "next/link";
import { useRouter } from "next/router";

import { styled } from "../../stitches.config";

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
  gridGap: "4px",
  marginRight: "16px",
  backgroundColor: "$accent",
  border: "1px solid $border",
  borderRadius: "16px",
  padding: "4px 8px",

  a: {
    fontSize: "14px",
  },

  "@bp1": {
    gridGap: "14px",
    marginRight: "0",
    borderRadius: "8px",
    padding: "0",
    backgroundColor: "$background",
    border: "none",

    "&:hover": {
      cursor: "pointer",
    },

    a: {
      fontSize: "16px",
    },
  },
});
