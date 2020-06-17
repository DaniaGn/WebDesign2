var groupSelect = document.getElementById("groupSelect");
var catSelect = document.getElementById("catSelect")

groupSelect.addEventListener("change", function () {
    console.log(groupSelect.value);

    if (groupSelect.value == 'juice') {
        fillCategory(coldJuice);
    } else if (groupSelect.value == 'soda') {
        fillCategory(coldSoda);
    } else if (groupSelect.value == 'coffee') {
        fillCategory(coldCoffee);
    }
})

var coldJuice = ["Apricot Juice", "Cabbage Juice", "Juice Apri"];
var coldSoda = ["Blue", "Pickle", "Red"];
var coldCoffee = ["Choco", "Hazel ", "Chocol"];

var galImage1 = document.getElementById("galleryImg-1");
var galImage2 = document.getElementById("galleryImg-2");
var galImage3 = document.getElementById("galleryImg-3");

var clickOption = document.getElementById("clickOption");


var fillCategory = function (catArray) {
    catSelect.innerHTML = "";
    catArray.forEach(element => {
        var opt = document.createElement('option');
        opt.value = member;
        opt.textContent = member;
        catSelect.appendChild(opt);
    })
}

var juiceImgs = ["images/juice-apricot2.jpg", "images/juice-apricot3.jpg", "images/juice-cabbage.png"];
var sodaImgs = ["images/soda-blue.png", "images/soda-pickle.jpg", "images/soda-red.png"];
var coffeeImgs = ["images/coffee-choco.jpg", "images/coffee-chocol.jpg", "images/coffee-hazel.jpg"];

var imageCounter = 1;
var currentImage = 0;

// function pieGallery() {
//     var nextImage = currentImage + 1;
//     if(nextImage == pieImgs.length) nextImage = 0;
//     galImage1.src = pieImgs[nextImage];
//     currentImage = nextImage;
// }

var juiceGallery = function () {
        if (imageCounter == 1) {
            galleryImg.src = "images/juice-apricot2.jpg";
            imageCounter = 2;
        } else if (imageCounter == 2) {
            galleryImg.src = "images/juice-apricot3.jpg";
            imageCounter = 3;
        } else if (imageCounter == 3) {
            galleryImg.src = "images/juice-cabbage.png";
            imageCounter = 1;
        }

        function sodaGallery() {
            var nextImage = currentImage + 1;
            if (nextImage == sodaImgs.length) nextImage = 0;
            galImage2.src = sodaImgs[nextImage];
            currentImage = nextImage;
        }

        function coffeeGallery() {
            var nextImage = currentImage + 1;
            if (nextImage == coffeeImgs.length) nextImage = 0;
            galImage3.src = coffeeImgs[nextImage];
            currentImage = nextImage;
        }


        window.setInterval(pieGallery, 3000);
        window.setInterval(pizzaGallery, 3000);
        window.setInterval(pastaGallery, 3000);
    }