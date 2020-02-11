function memoryCard () {

    const style = `
        .card-box {
            position: relative;
            width: 155px;
            height: 155px;
            margin-bottom: 15px;
        }

        .card {
            width: 100%;
            height: 100%;
            background-color: #f24a70;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            cursor: pointer;
            position: absolute;
        }

        .card.-front {
            background-color: #fff;
            display: none;
        }

        .card-box.-activeted .card {
            display: none;
        }

        .card-box.-activeted .card.-front {
            display: flex;
        }

        .card.-front::before {
            content: "";
            width: 95px;
            height: 95px;
            background: #d4d4d4;
            border-radius: 50%;
            position: absolute;
        }

        .card > .icon {
            width: 80px;
            height: 80px;
        }


        .card.-front > .icon {
            position: absolute;
            transform: traslateY(-12%);
        }
    `

    const $style = document.createElement("style")
    $style.textContent = style
    document.querySelector("head").insertBefore($style, null)

    return ({ src, alt }) => 
        `
            <div class="card-box" onClick="handleClick(this)">
                <article class="card">
                    <img src="img/geio.svg" alt="icone do gueio" class="icon"/>
                </article>
            
                <article class="card -front">
                    <img src="${src}" alt="${alt}" class="icon"/>
                </article>
            </div>
        `
}

const handleClick = ($card) => {
    $card.classList.toggle('-activeted')
}