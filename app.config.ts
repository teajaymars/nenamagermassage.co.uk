export default defineAppConfig({
  ui: {
    primary: "olive",
    gray: "merino",
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
    header: {
      wrapper:
        "bg-gray-50 dark:bg-gray-950 py-8 border-b-4 border-gray-100 dark:border-gray-800",
      logo: "hover:bg-gray-100 dark:bg-gray-800 border-transparent rounded-xl",
      links: {
        wrapper:
          "ring-2 ring-primary-400 dark:ring-primary-800 px-3 gap-x-0 rounded-full",
        base: "py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-[3px] after:inset-x-2 after:h-[4px] after:opacity-0 after:bg-olive-600 dark:after:bg-white after:transition-opacity",
        active: "text-primary-900 dark:text-white after:opacity-100",
        inactive:
          "text-primary-600 hover:text-primary-800 dark:text-gray-400 dark:hover:text-gray-200",
      },
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
    pricing: {
      card: {
        highlight: "ring-gray-900 dark:ring-white",
        features: {
          item: {
            icon: {
              base: "text-gray-900 dark:text-white",
            },
          },
        },
      },
    },
  },
});
