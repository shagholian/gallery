import * as $ from "jquery";

export default class Gallery {

    public galleryBox: object = $(".gallery-box");
    public images: object = $(".gallery-box img");
    public modal: object = $(".modal-box");
    public modalImg: object = $("img.modal-content");

    constructor() {
        const $body = $("body").hasClass("gallery");

        if($body) {
            this.eventListener();
        }
    }

    eventListener() {
        $(this.images).click((e) => this.showImg(e.target))
        $(".close").click(() => this.closeGallery());
        
    }

    showImg(imgClick) {

        const galleryTitle = $(imgClick).attr("gallery-title");
        const galleryDesc = $(imgClick).attr("gallery-desc");
        const imgsThisGallery = $(`[gallery-title=${galleryTitle}]`);
        console.log(imgsThisGallery);

        this.modalImg.attr("src", imgClick.src);
        this.modal.show();

        document.getElementById("caption").innerText = galleryDesc ? galleryDesc : "";
        
        
        
        Object.keys(imgsThisGallery).forEach((key, val) => {
            if(imgsThisGallery[key].tagName == "IMG") {
                imgsThisGallery[key].classList.add("demo-img");
                $("#demo-img").append(imgsThisGallery[key].cloneNode(true));
            }
        })
    }

    closeGallery() {
        $("#demo-img").empty();
        this.modal.slideUp(500);
        
    }

}