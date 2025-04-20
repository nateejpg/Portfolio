function toggleCard (button) {

    const container = button.closest(".wrappedContainer");
    const wrappedImg = container.querySelector('.wrappedImg');
    const image = wrappedImg.querySelector('img');
    const div = wrappedImg.querySelector('div');

    const isHidden = image.style.display === 'none';

    image.style.display = isHidden ? "flex" : "none";
    div.style.display = isHidden ? "none" : "flex";

}

