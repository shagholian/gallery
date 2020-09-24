# gallery
this library use for create gallery 

use this attribute for using library:
if you have different gallery; you must defining different `gallery-title` attribute for img tag
you can description for every img tag with use `gallery-desc` attribute

your tag of gallery must in `gallery-box` class.

You can have multiple attachments; they must in `images-caption` class and `gallery-title` attribute be similar to the original photo.

> link gallery.css in head tag 

```html
<div class="container gallery-box">
    <div class="row mt-3">
        <div class="col-sm">
            <img alt="picture" src="assets/images/gallery/img (42).jpg"
                class="img-fluid" gallery-title="gallery-1" gallery-desc="desc"/>

            <div class="images-caption">
                <img alt="picture" src="assets/images/gallery/img (43).jpg"
                    class="" gallery-title="gallery-1" />

                <img alt="picture" src="assets/images/gallery/img (44).jpg"
                    class="" gallery-title="gallery-1" />

            </div>
        </div>
        <div class="col-sm">
            <img alt="picture" src="assets/images/gallery/img (45).jpg"
                class="img-fluid" gallery-title="gallery-2"/>

            <div class="images-caption">
                <img alt="picture" src="assets/images/gallery/img (46).jpg"
                    class="" gallery-title="gallery-2" />

                <img alt="picture" src="assets/images/gallery/img (47).jpg"
                    class="" gallery-title="gallery-2"/>

            </div>
        </div>
    </div>
</div>

<script src="ts/gallery.js"></script>
<script>
    new Gallery();
</script>

```
