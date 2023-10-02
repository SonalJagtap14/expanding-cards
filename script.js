//var image= document.querySelectorAll(".image-card").src;
//addEventListener('click'), function()
/*image.forEach(images=>  {
    images.addEventListener('click', ()=>{
        image.forEach(i=> i.classList.remove('active'));
        images.classList.add('active');
    });
});*/
/*{
    image.forEach(imgs => {
        if (imgs !== this) {
            imgs.classList.remove('active');
        }
    });
    this.classList.toggle('active');
}
image.forEach( imgs => {
    imgs.addEventListener('click', active);
});*/

const image = document.querySelectorAll(".imagecard");

image.forEach(imagecard => {
    imagecard.addEventListener('click', () => {
        //removing active class from all the other images....
        image.forEach(imagecard => {
            imagecard.classList.remove('active');
        })
        imagecard.classList.add('active');

    })
})
