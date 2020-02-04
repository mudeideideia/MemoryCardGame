const createMemoryCard = ({ src, alt, nameClass}) => 
    `
    <article class="memory-card ${nameClass}">
        <img src="${src}" alt="${alt}" class="icon" onClick="handleClick(this)"/>
    </article>
    `

const handleClick = (pointer) => console.log(pointer)