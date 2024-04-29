const { createTheme } = require("@mui/material");

export const darkTeme= createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#7AB730" //màu xanh lá
        },
        secondary:{
            main:"#5A20CB"
        },
        black:{
            main:"#0D0D0D"
        },
        background:{
            main:"#0000000",
            default:"#ffffff", 
            paper:"#0D0D0D"
        },
        textColor:{
            main:"#111111"
        }
    }
})