const themeSetting = (mode) => {
    return {
        theme: (mode === "light") ? {
            bg: "#000000",
            secondary: "#000000",
            third: "#1a1a1a",
            // fourth: ,
        }
            :
            {
                bg: "ffffff",
                secondary: "#000000",
                third: "#1a1a1a",
                // fourth: ,
            }
    }
}
export default themeSetting;
