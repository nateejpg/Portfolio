function toggleCard (button) {

    const container = button.closest(".wrappedContainer");
    const wrappedImg = container.querySelector('.wrappedImg');
    const image = wrappedImg.querySelector('img');
    const div = wrappedImg.querySelector('div');

    const isHidden = image.style.display === 'none';
    const isDivVisible = div.style.display === 'flex';

    if(window.innerWidth < 1100){

        image.style.display = isHidden ? "flex" : "none";
        div.style.display = isDivVisible ? "none" : "flex"

    }else{
        image.style.display = isHidden ? "flex" : "none";
        div.style.display = isHidden ? "none" : "flex";
    }


}

const classEmail = document.getElementById('email');

if (window.innerWidth < 1100) {
    classEmail.style.display = "none";
}
