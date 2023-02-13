let buildHeader = document.createElement("h1");
buildHeader.textContent = "Hello World";
document.body.appendChild(buildHeader);

let buildDiv = document.createElement("div");
document.body.appendChild(buildDiv);

let buildParagraph = document.createElement("p");
document.body.appendChild(buildParagraph);

//create a dictionary of nested objects
let myObject = {
    ob1:{ name: "John", age: 30, city: "New York", image:"https://storage.googleapis.com/afs-prod/media/media:9a69ee0081754db0a0a12b9796e9e24e/3000.jpeg" },
    ob2:{ name: "Peter", age: 40, city: "Paris", image:"https://vignette.wikia.nocookie.net/marvelhigh/images/1/13/Peter.jpg/revision/latest?cb=20170817200136" },
    ob3:{ name: "Amy", age: 20, city: "London", image:"https://www.hawtcelebs.com/wp-content/uploads/2019/02/amy-smart-at-2019-kodak-awards-in-los-angeles-02-15-2019-4.jpg" }
};


//create a function to loop through the dictionary
function loopThroughObject(obj) {
    for (let key in obj) {
        //build a div for each object
        let buildDiv = document.createElement("div");
        document.body.appendChild(buildDiv);
        buildDiv.style.display = "flex";
        buildDiv.style.flexDirection = "row";
        //build a paragraph for each object
        let buildParagraph = document.createElement("p");
        buildParagraph.textContent = "Meet "+ obj[key].name + ", " + obj[key].age + ", " + obj[key].city;
        buildDiv.appendChild(buildParagraph);
        buildDiv.style.display = "block";
        //add the image to the div
        let buildImage = document.createElement("img");
        buildImage.src = obj[key].image;
        buildDiv.appendChild(buildImage);
        
        //write a short bio for each object
        let buildBio = document.createElement("p");
        buildBio.textContent = "This is a short bio for " + obj[key].name;
        buildDiv.appendChild(buildBio);
        buildDiv.style.display = "inline-block";

        }
 
    }

loopThroughObject(myObject);



    //put each image in the same div as the one above
