import * as React from "react";
import { Link, useStaticQuery, graphql, PageProps } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";

import Layout from "../components/layout";
import Seo from "../components/seo";

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

const IndexPage = () => {
	const data: Queries.IndexPageQuery = useStaticQuery(graphql`
		query IndexPage {
			allFile(filter: { extension: { eq: "jpg" } }) {
				nodes {
					id
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	`);

	return (
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
				{data &&
					data.allFile.nodes.map(
						node =>
							node.childImageSharp && (
								<div key={node.id} style={styles.photoContainer}>
									<GatsbyImage
										image={node.childImageSharp.gatsbyImageData}
										alt=""
									/>
								</div>
							)
					)}
			</ul>
		</Layout>
	);
};

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
	}),
	photoContainer: {
		height: 500,
		width: 500
	}
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
