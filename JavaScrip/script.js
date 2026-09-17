function upDate(previewPic) {
    console.log("Event triggered!");
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    // Thay đổi nội dung text
    document.getElementById("image").innerHTML = previewPic.alt;

    // Thay đổi background image
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // Trả về trạng thái ban đầu
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
