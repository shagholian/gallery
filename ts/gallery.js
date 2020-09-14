"use strict";
exports.__esModule = true;
var $ = require("jquery");
var Gallery = /** @class */ (function () {
    function Gallery() {
        this.galleryBox = $(".gallery-box");
        this.images = $(".gallery-box img.img-fluid");
        this.modal = $(".modal-box");
        this.modalImg = $("img.modal-content");
        var $body = $("body").hasClass("gallery");
        if ($body) {
            this.eventListener();
        }
    }
    Gallery.prototype.eventListener = function () {
        var _this = this;
        $(this.images).click(function (e) { return _this.showImg(e.target); });
        $(".close").click(function () { return _this.closeGallery(); });
        this.modalImg.hover(function () { return _this.showIcons(); });
    };
    Gallery.prototype.showImg = function (imgClick) {
        this.galleryTitle = $(imgClick).attr("gallery-title");
        var galleryDesc = $(imgClick).attr("gallery-desc");
        var imgsThisGallery = $("[gallery-title=" + this.galleryTitle + "]");
        this.modalImg.attr("src", imgClick.src);
        this.modal.show();
        document.getElementById("caption").innerText = galleryDesc ? galleryDesc : "";
        Object.keys(imgsThisGallery).forEach(function (key, val) {
            if (imgsThisGallery[key].tagName == "IMG") {
                imgsThisGallery[key].classList.add("demo-img");
                $("#demo-img").append(imgsThisGallery[key].cloneNode(true));
            }
        });
    };
    Gallery.prototype.closeGallery = function () {
        $("#demo-img").empty();
        this.modal.slideUp(500);
    };
    Gallery.prototype.showIcons = function () {
        var imgsThisGallery = $("[gallery-title=" + this.galleryTitle + "]");
        if (imgsThisGallery.length) {
            console.log(imgsThisGallery);
        }
    };
    return Gallery;
}());
exports["default"] = Gallery;
