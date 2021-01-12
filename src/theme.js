import { extendTheme } from "@chakra-ui/react";

const Link = {
	baseStyle: {
		fontWeight: "bold",
		textTransform: "uppercase",
	},
	sizes: {
		xl: {
			m: "1rem",
			p: "2rem",
			fontSize: "2rem",
			borderRadius: "0.5rem",
		},
		md: {
			m: "0.1rem",
			p: "0.5rem",
			fontSize: "1.2rem",
			borderRadius: "0.25rem",
		},
	},
	variants: {
		outline: {
			border: "1px solid black",
		},
		minimal: {
			textDecoration: "none",
		},
		normal: {},
	},
	defaultProps: {
		variant: "minimal",
		size: "md",
	},
};

const Button = {
	// The styles all button have in common
	baseStyle: {
		fontWeight: "bold",
		textTransform: "uppercase",
	},
	// Two sizes: sm and md
	sizes: {
		sm: {
			fontSize: "12px",
			padding: "16px",
		},
		md: {
			fontSize: "16px",
			padding: "24px",
		},
	},
	// Two variants: outline and solid
	variants: {
		outline: {
			border: "2px solid",
			borderColor: "green.500",
		},
		solid: {
			bg: "green.500",
			color: "white",
		},
	},
	// The default size and variant values
	defaultProps: {
		size: "md",
		variant: "outline",
	},
};

export const theme = extendTheme({
	components: { Button, Link },
	colors: { brand: { 900: "#fafa00" } },
});
