function removeImageByClass(className) {
    var elem = document.getElementsByClassName(className);
  
    while (elem.length > 0) {
        console.log(elem[0].src);
        elem[0].parentNode.removeChild(elem[0]);

    }

    //elem.remove();
    return false;
};

function removeImg() {
    var elem = document.getElementsByTagName("img");
    //elem.parentNode.removeChild(elem);
    //elem.outerHTML = "";
    //delete elem;
    for (var i =0; i < elem.length; i++) {
        console.log(elem[i].className);
        console.log(elem[i].src);
        // if(elem[0].classN)
        // elem[0].parentNode.removeChild(elem[0]);

    }

    //elem.remove();
    return false;
};

window.onload = {
    removeImageByClass("lazy-image");
    removeImageByClass("pv-top-card-section__profile-photo-container");
};

// removeImageByClass("pv-top-card-section__profile-photo-container");

