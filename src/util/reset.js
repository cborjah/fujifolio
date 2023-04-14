import { css } from "@emotion/react";

const ResetStyles = css`
	:root {
		--border-radius: 4px;
		--color-text: #333;
		--color-primary: #7026b9;
		--color-code-bg: #fff4db;
		--color-code: #8a6534;
		--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
			sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
		--font-mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
			"Courier New", monospace;
		--font-lg: 18px;
		--font-md: 16px;
		--font-sm: 14px;
		--font-sx: 12px;
		--line-height-loose: 1.75;
		--line-height-normal: 1.5;
		--line-height-dense: 1.1;
		--space-1: 4px;
		--space-2: 8px;
		--space-3: 16px;
		--space-4: 24px;
		--space-5: 32px;
		--space-6: 64px;
		--size-content: 54rem;
		--size-gutter: var(--space-5);
		--size-gap: var(--space-6);
	}
	html {
		-webkit-text-size-adjust: 100%;
		box-sizing: border-box;
		font: sans-serif;
		font-size: var(--font-md);
		line-height: var(--line-height-normal);
		overflow-y: scroll;
	}
	body {
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		color: var(--color-text);
		font-family: sans-serif;
		font-family: var(--font-sans);
		font-weight: normal;
		margin: 0;
		word-wrap: break-word;
	}
	a {
		background-color: transparent;
		color: var(--color-primary);
		text-decoration: none;
		font-weight: 500;
		text-decoration: underline;
		text-decoration-thickness: 1.5px;
		text-underline-offset: 2px;
	}
	a:active,
	a:hover {
		outline-width: 0;
		text-decoration: none;
	}
	abbr[title] {
		border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
		cursor: help;
		text-decoration: none;
	}
	b,
	strong {
		font-weight: inherit;
		font-weight: bolder;
	}
	dfn {
		font-style: italic;
	}
	h1 {
		margin: 0;
		margin-bottom: 3rem;
		padding: 0;
		line-height: var(--line-height-dense);
		letter-spacing: -0.01em;
	}
	h1 > b {
		color: var(--color-primary);
	}
	img {
		border-style: none;
		max-width: 100%;
	}
	code,
	kbd,
	pre,
	samp {
		font-family: var(--font-mono);
		font-size: 1em;
		line-height: inherit;
	}
	hr {
		box-sizing: content-box;
		overflow: visible;
		margin-left: 0;
		margin-right: 0;
		margin-top: 0;
		padding: 0;
		margin-bottom: calc(var(--space-4) - 1px);
		background: hsla(0, 0%, 0%, 0.2);
		border: none;
		height: 1px;
	}
	* {
		box-sizing: inherit;
	}
	*:before {
		box-sizing: inherit;
	}
	*:after {
		box-sizing: inherit;
	}
	hgroup,
	img,
	figure,
	fieldset,
	ul,
	ol,
	dl,
	dd,
	p {
		margin: 0;
		padding: 0;
		margin-bottom: var(--space-4);
	}
	ul,
	ol {
		margin-left: var(--space-4);
		list-style-position: outside;
		list-style-image: none;
	}
	pre {
		margin-left: 0;
		margin-right: 0;
		margin-top: 0;
		margin-bottom: var(--space-4);
		font-size: 0.875rem;
		line-height: var(--line-height-normal);
		background: hsla(0, 0%, 0%, 0.04);
		border-radius: var(--border-radius);
		overflow: auto;
		word-wrap: normal;
		padding: var(--space-4);
	}
	b,
	strong,
	dt,
	th {
		font-weight: bold;
	}
	li {
		margin-bottom: calc(var(--space-4) / 2);
	}
	ol li,
	ul li {
		padding-left: 0;
	}
	li > ol,
	li > ul {
		margin-bottom: calc(var(--space-4) / 2);
		margin-left: var(--space-4);
		margin-top: calc(var(--space-4) / 2);
	}
	blockquote *:last-child {
		margin-bottom: 0;
	}
	li *:last-child {
		margin-bottom: 0;
	}
	p *:last-child {
		margin-bottom: 0;
	}
	li > p {
		margin-bottom: calc(var(--space-4) / 2);
	}
	p {
		max-width: 680px;
	}
	code {
		font-size: 0.875rem;
	}
	kbd {
		font-size: 0.875rem;
	}
	samp {
		font-size: 0.875rem;
	}
	abbr {
		border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
		cursor: help;
	}
	acronym {
		border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
		cursor: help;
	}
	tt,
	code {
		background-color: var(--color-code-bg);
		border-radius: var(--border-radius);
		color: var(--color-code);
		font-family: var(--font-mono);
		padding-bottom: 0.25em;
		padding-top: 0.25em;
		word-break: normal;
	}
	pre code {
		background: none;
	}
	code:before,
	code:after,
	tt:before,
	tt:after {
		content: "\\00a0";
		letter-spacing: -0.2em;
	}
	pre code:before,
	pre code:after,
	pre tt:before,
	pre tt:after {
		content: none;
	}
`;

export default ResetStyles;
