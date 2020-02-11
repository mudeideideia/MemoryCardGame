const $root = document.querySelector("#root")


const $cardWrapping = createCardWrapping();

const createMemoryCard = memoryCard()

const $memoryCardGirl = createMemoryCard({
    src: "img/girl_transparent.png",
    alt: "program girl",
});
const $memoryCardBook = createMemoryCard({
    src: "img/book.svg",
    alt: "program book",
});

$cardWrapping.addEventListener('click', (event) => {
    // console.log(event)
    console.log(document.querySelectorAll('.card-box.-activeted').length)
})


$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardGirl)
$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardBook)

$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardGirl)
$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardBook)

$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardGirl)
$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardBook)

$root.insertAdjacentElement("beforeend", $cardWrapping)
