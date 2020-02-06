const $root = document.querySelector("#root")


const $cardWrapping = createCardWrapping();

const createMemoryCard = memoryCard()

const $memoryCardGeio = createMemoryCard({
    src: "img/geio.svg",
    alt: "program girl",
    nameClass: ""
});
const $memoryCardGirl = createMemoryCard({
    src: "img/girl_transparent.png",
    alt: "program girl",
    nameClass: "-front"
});
const $memoryCardBook = createMemoryCard({
    src: "img/book.svg",
    alt: "program book",
    nameClass: "-front"
});


$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardGirl)
$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardBook)
$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardGeio)
$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardGeio)

$root.insertAdjacentElement("beforeend", $cardWrapping)
