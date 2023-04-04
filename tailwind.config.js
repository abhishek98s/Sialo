module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// module.exports = {
// 	// @see https://tailwindcss.com/docs/upcoming-changes
// 	future: {
// 		removeDeprecatedGapUtilities: true,
// 		purgeLayersByDefault: true,
// 	},
// 	purge: [
    
//     "./src/**/*.{js,ts,jsx,tsx}",
// 		'./src/components/**/*.js',
// 		'./pages/**/*.js'],
// 	theme: {
// 		extend: {},
// 	},
// 	variants: {},
// 	plugins: [
// 		require( 'tailwindcss' ),
// 		require( 'precss' ),
// 		require( 'autoprefixer' )
// 	]
// }