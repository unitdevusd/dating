// DOM
const customTooltips = document.querySelectorAll(".custom-tooltips")

// Listeners
customTooltips.forEach(ctt => {
    new bootstrap.Tooltip(ctt)
})