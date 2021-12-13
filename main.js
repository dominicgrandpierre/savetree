var treeImages = ["https://www.bing.com/th?id=OIP.LPDM4YDWZeJ12P5bBeYd2QHaEo&w=147&h=102&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
"https://d279m997dpfwgl.cloudfront.net/wp/2016/09/tree.jpg",
"https://ak.jogurucdn.com/media/image/p15/media_gallery-2017-09-20-9-12_92ef3e4f1bac67a1d1a5d4e5bbc9cd1c.jpg",
"https://i.pinimg.com/originals/37/9f/ed/379feddef71fd8f44ea26c66de290675.jpg"];

var importance =["Trees provide shelter for birds and animals.",
"Trees help controlling pollution.",
"Trees help in preventing soil erosion.",
"Trees help in controlling global warming."];

var i=0;
function next(){
    document.getElementById("d1").src=treeImages[i];
    document.getElementById("c2").innerHTML=importance[i];
    i++;
    if(i==4)
    {
        i=0;
    }
}