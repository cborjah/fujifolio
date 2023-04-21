import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const links = [
	{
		text: "Tutorial",
		url: "https://www.gatsbyjs.com/docs/tutorial",
		description:
			"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site."
	},
	{
		text: "Examples",
		url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
		description:
			"A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites."
	},
	{
		text: "Plugin Library",
		url: "https://www.gatsbyjs.com/plugins",
		description:
			"Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community."
	},
	{
		text: "Build and Host",
		url: "https://www.gatsbyjs.com/cloud",
		description:
			"Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!"
	}
];

const samplePageLinks = [
	{
		text: "Page 2",
		url: "page-2",
		badge: false,
		description:
			"A simple example of linking to another page within a Gatsby site"
	},
	{ text: "TypeScript", url: "using-typescript" },
	{ text: "Server Side Rendering", url: "using-ssr" },
	{ text: "Deferred Static Generation", url: "using-dsg" }
];

const moreLinks = [
	{ text: "Join us on Discord", url: "https://gatsby.dev/discord" },
	{
		text: "Documentation",
		url: "https://gatsbyjs.com/docs/"
	},
	{
		text: "Starters",
		url: "https://gatsbyjs.com/starters/"
	},
	{
		text: "Showcase",
		url: "https://gatsbyjs.com/showcase/"
	},
	{
		text: "Contributing",
		url: "https://www.gatsbyjs.com/contributing/"
	},
	{ text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" }
];

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const IndexPage = () => (
	<Layout>
		<div css={styles.textCenter}>
			<StaticImage
				css={styles.staticImage}
				src="../images/example.png"
				loading="eager"
				width={64}
				quality={95}
				formats={["auto", "webp", "avif"]}
				alt=""
			/>
			<h1>
				Welcome to <b>Gatsby!</b>
			</h1>
			<p css={styles.intro}>
				<b>Example pages:</b>{" "}
				{samplePageLinks.map((link, i) => (
					<React.Fragment key={link.url}>
						<Link to={link.url}>{link.text}</Link>
						{i !== samplePageLinks.length - 1 && <> · </>}
					</React.Fragment>
				))}
				<br />
				Edit <code>src/pages/index.js</code> to update this page.
			</p>
		</div>
		<ul css={styles.list}>
			{links.map(link => (
				<li key={link.url} css={styles.listItem}>
					<a css={styles.listItemLink} href={`${link.url}${utmParameters}`}>
						{link.text} ↗
					</a>
					<p css={styles.listItemDescription}>{link.description}</p>
				</li>
			))}
		</ul>
		<React.Fragment>
			{moreLinks.map((link, i) => (
				<React.Fragment key={link.url}>
					<a href={`${link.url}${utmParameters}`}>{link.text}</a>
					{i !== moreLinks.length - 1 && <> · </>}
				</React.Fragment>
			))}
		</React.Fragment>
	</Layout>
);

const styles = {
	textCenter: css({
		textAlign: "center"
	}),
	intro: css({
		maxWidth: "none",
		lineHeight: `var(--line-height-loose)`
	}),
	list: css({
		display: "grid",
		margin: 0,
		gap: `var(--size-gap)`,
		"--w": "280px",
		"--n": 2,
		gridTemplateColumns: `repeat(
			auto-fit,
			minmax(max(var(--w), 100%/ (var(--n) + 1) + 0.1%), 1fr)
		)`,
		marginBottom: `var(--size-gap)`,
		marginTop: `var(--size-gap)`
	}),
	listItem: css({
		margin: 0,
		"&::marker": {
			color: "#e95800"
		},
		"&:nth-child(2)::marker": {
			color: "#159bf3"
		},
		"&:nth-child(3)::marker": {
			color: "#8eb814"
		},
		"&:nth-child(4)::marker": {
			color: "#663399"
		}
	}),
	listItemLink: css({
		color: `var(--color-primary)`,
		fontWeight: "bold"
	}),
	listItemDescription: css({
		color: `var(--color-text)`,
		marginBottom: 0,
		marginTop: `var(--space-1)`
	}),
	staticImage: css({
		marginBottom: `var(--space-3)`
	})
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
