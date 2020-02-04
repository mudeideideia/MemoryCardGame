const $root = document.querySelector("#root")


const $cardWrapping = createCardWrapping();

const $memoryCardGirl = createMemoryCard({
    src: "img/girl.jpg",
    alt: "program girl",
    nameClass: ""
});
const $memoryCardBook = createMemoryCard({
    src: "img/book.svg",
    alt: "program book",
    nameClass: ""
});


$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardGirl)
$cardWrapping.insertAdjacentHTML("beforeend", $memoryCardBook)

$root.insertAdjacentElement("beforeend", $cardWrapping)
