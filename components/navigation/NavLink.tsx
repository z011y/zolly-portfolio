import Link from "next/link";
import { useRouter } from "next/router";

import { styled, css } from "../../stitches.config";

type NavLinkProps = {
  href: string;
  text: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
};

const NavLink = ({ href, text, icon, activeIcon }: NavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} passHref>
      <LinkWrapper>
        {isActive ? activeIcon : icon}
        <LinkText
          css={isActive ? { color: "$accentText" } : { color: "$text" }}
        >
          {text}
        </LinkText>
      </LinkWrapper>
    </Link>
  );
};

export default NavLink;

const LinkWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "end",
  gridGap: "4px",
  marginRight: "16px",
  backgroundColor: "$accent",
  border: "1px solid $border",
  borderRadius: "8px",
  padding: "4px 8px",

  "@bp1": {
    gridGap: "14px",
    marginRight: "0",
    borderRadius: "8px",
    padding: "0",
    backgroundColor: "$background",
    border: "none",
    alignItems: "center",

    "&:hover": {
      cursor: "pointer",
    },
  },
});

const LinkText = styled("a", {
  fontSize: "14px",
  marginBlockStart: "0",
  marginBlockEnd: "0",
  lineHeight: "1",

  "@bp1": {
    fontSize: "16px",
  },
});
