import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/react";

import Header from "./header";
import ResetStyles from "../util/reset";

type LayoutProps = {
	children: React.ReactElement[];
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<Global styles={ResetStyles} />
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<div css={divStyles}>
				<main>{children}</main>
				<footer css={footerStyles}>
					© {new Date().getFullYear()} &middot; Built with
					{` `}
					<a href="https://www.gatsbyjs.com">Gatsby</a>
				</footer>
			</div>
		</>
	);
};

const divStyles = css({
	margin: `0 auto`,
	maxWidth: `var(--size-content)`,
	padding: `var(--size-gutter)`,
});

const footerStyles = css({
	marginTop: `var(--space-5)`,
	fontSize: `var(--font-sm)`,
	backgroundColor: "red",
});

export default Layout;
