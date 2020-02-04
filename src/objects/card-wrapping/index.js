function createCardWrapping() {
    const $cardWrapping = document.createElement("section");
    $cardWrapping.classList.add("card-wrapping")

    const $style = document.createElement("style")
    $style.textContent = `
        .card-wrapping {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-top: 10px;
        }

        .card-wrapping > .memory-card {
            margin-bottom: 10px;
        }
    `


        document.querySelector("head").insertBefore($style, null)
    return $cardWrapping
}

