function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    image.setAttribute('id', 'imgCat')
    div.appendChild(image);
}

function resetCat() {
    document.getElementById('imgCat').remove();
}