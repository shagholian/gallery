import * as $ from "jquery";

export default class Gallery {

    public galleryBox: object = $(".gallery-box");
    public images: object = $(".gallery-box img");
    public modal: object;
    public modalImg: object;
    public galleryTitle: string;

    constructor() {
        const $body = $("body").hasClass("gallery");

        if($body) {
            this.eventListener();
        }
    }

    eventListener() {
        $(this.images).click((e) => this.showModal(e.target));
        
    }

    showModal(imgClick) {
        const galleryTitle = $(imgClick).attr("gallery-title");
        const galleryDesc = $(imgClick).attr("gallery-desc");
        const imgsThisGallery = $(`[gallery-title=${galleryTitle}]`);

        this.createModalTag();
        this.modalImg.attr("src", imgClick.src);
        this.modal.show();
        document.getElementById("caption").innerText = galleryDesc ? galleryDesc : "";
        
        Object.keys(imgsThisGallery).forEach((key, val) => {
            if(imgsThisGallery[key].tagName == "IMG") {
                imgsThisGallery[key].classList.add("demo-img");
                $("#demo-img").append(imgsThisGallery[key].cloneNode(true));
            }
        })
        $("img.demo-img").click((e) => this.showDemo(e.target));
        
    }

    closeGallery() {
        this.modal.slideUp(500);
        
        setTimeout(() => {
            this.modal.remove();
            this.modal  = null;
            this.modalImg  = null;
        }, 550);
        
    }

    showDemo(imgClick) {
        this.modalImg.attr("src", imgClick.src);
        const galleryDesc = $(imgClick).attr("gallery-desc");

        document.getElementById("caption").innerText = galleryDesc ? galleryDesc : "";
    }

    createModalTag() {
        const Tag = `
            <div id="modal-box" class="modal-box">
                <span class="close">&times;</span>
                <img class="modal-content" id="img01">
                <div id="caption">caption</div>
                <div id="demo-img"></div>
            </div>
        `;
        $(".gallery-box").after(Tag);
        this.modal  = $(".modal-box");
        this.modalImg  = $("img.modal-content");
        $(".close").click(() => this.closeGallery());    
    }
}