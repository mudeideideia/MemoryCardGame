function memoryCard () {

    const style = `
        .memory-card {
            width: 155px;
            height: 155px;
            background-color: #f24a70;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            position: relative;
            cursor: pointer;
        }

        .memory-card.-front {
            background-color: #fff;
        }

        .memory-card.-front::before {
            content: "";
            width: 95px;
            height: 95px;
            background: #d4d4d4;
            border-radius: 50%;
            position: absolute;
        }

        .memory-card > .icon {
            width: 80px;
            height: 80px;
        }


        .memory-card.-front > .icon {
            position: absolute;
            transform: traslateY(-12%);
        }
    `

    const $style = document.createElement("style")
    $style.textContent = style
    document.querySelector("head").insertBefore($style, null)
    
    return ({ src, alt, nameClass}) => 
        `
            <article class="memory-card ${nameClass}">
                <img src="${src}" alt="${alt}" class="icon" onClick="handleClick(this)"/>
            </article>
        `
}

const handleClick = (pointer) => console.log(pointer)