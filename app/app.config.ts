export default defineAppConfig({
    ui: {
        primary: 'sky',
        gray: 'zinc',
        strategy: "merge",
        button: {
          color: {
            primary: {
              solid: 'bg-cod-gray-200 text-white dark:bg-white dark:text-black'
            }
        },
        appheader: {
            navlink: {
                active: 'text-primary',
                inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }
        }
    }
}})