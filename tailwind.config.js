module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{md,mdx,jsx,tsx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'f33-gray-800': '#2c2c2c',
        'f33-gray-700': '#4D4F4C',
        'f33-gray-600': '#8B8B8B',
        'f33-gray-500': '#C2C2C2',
        'f33-gray-400': '#DCDCDC',
        'f33-gray-200': '#e8e8e8',
        'f33-gray-100': '#f3f3f3',
        'f33-white': '#ffffff',

        'f33-green-500': '#2FADA6',
        'f33-blue-500': '#6823FC',
        'f33-orange-500': '#E8A631',
        'f33-red-500': '#E52207',
      },
    }
  }
};