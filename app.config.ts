export default defineAppConfig({
  ui: {
    primary: "merino",
    gray: "zinc",
    variables: {
      light: {
        background: "var(--color-gray-50)",
      },
      dark: {
        background: "var(--color-gray-950)",
      },
    },
    button: {
      rounded: "rounded-full",
      default: {
        size: "md",
        color: "black",
      },
    },
    input: {
      rounded: "rounded-full",
    },

    footer: {
      top: {
        wrapper: "border-t border-gray-200 dark:border-gray-800",
        container: "py-8 lg:py-16",
      },
      bottom: {
        wrapper: "border-t border-gray-200 dark:border-gray-800",
      },
    },
  },
});
