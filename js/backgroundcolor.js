const randomColors = [
    {
        lightMainColor: "#d5e2f7",
        main1Color: "#5a88f5",
        main2Color: "#4687f7",
        darkMainColor: "#2d5168",
        darkBackgroundColor: "#0c212e",
    },
    {
        lightMainColor: "#d5e2f7",
        main1Color: "#697dff",
        main2Color: "#4772ff",
        darkMainColor: "#2d2f68",
        darkBackgroundColor: "#0e0c2e",
    },
    {
        lightMainColor: "#d5d8f7",
        main1Color: "#5e6ff2",
        main2Color: "#445ef2",
        darkMainColor: "#2d3668",
        darkBackgroundColor: "#0c0e2e",
    },
    {
        lightMainColor: "#d8d5f7",
        main1Color: "#6d5ef2",
        main2Color: "#5544f2",
        darkMainColor: "#312d68",
        darkBackgroundColor: "#110c2e",
    },
    {
        lightMainColor: "#ddd5f7",
        main1Color: "#7E5EF2",
        main2Color: "#6A44F2",
        darkMainColor: "#392d68",
        darkBackgroundColor: "#160c2e",
    },
];

const colorPicker = document.querySelectorAll(".colorpicker");

function handleColorPicker(){
    for (let i = 0; i < colorPicker.length; i++) {
        colorPicker[i].style.background = randomColors[i].main1Color;
        colorPicker[i].style.border = `3px solid ${randomColors[i].main2Color}`;
    }
}

function handleChangeColor(color) {
    document.documentElement.style.setProperty("--light-main-color", color.lightMainColor);
    document.documentElement.style.setProperty("--main1-color", color.main1Color);
    document.documentElement.style.setProperty("--main2-color", color.main2Color);
    document.documentElement.style.setProperty("--dark-main-color", color.darkMainColor);
    document.documentElement.style.setProperty("--dark-background-color", color.darkBackgroundColor);
}

function handleColors() {
    const color = randomColors[Math.floor(Math.random() * randomColors.length)];
    handleChangeColor(color);
}

handleColorPicker();
handleColors();