const zoom = {
    methods: {
        onZoom(image = null) {

            // document.getElementById("image-zoom_3RXUOVXR_17")
            this.$zoom(
                image ? image : this.no_image_base64,
                // "https://community.openenergymonitor.org/uploads/default/original/2X/3/3fc1bd5759825d0a69cc61238cc1cd1dd2604130.png",
                {
                    allowZoom: true, // When false, zooming is not available. Image will be shown on 100% size.
                    autoScale: true, // When true, if the image is larger than the screen, it will be automatically scaled down until suitable. Along with 'allowZoom'
                    closeOnClickModal: true // When false, clicking modal layer will close the viewer.
                }
            );

            document.querySelector(".__image-zoom__image").style.display = "none";
            document.querySelector(".__image-zoom__scaler").style.display = "none";
            this.$nextTick(() => {
                document.querySelector(".__image-zoom__image").style.display =
                    "initial";
                document.querySelector(".__image-zoom__scaler").style.display = "initial";

                document.querySelector(".__image-zoom__scaler").className =
                    "__image-zoom__scaler fade-in-zoom";
                document.querySelector(".__image-zoom__image").className =
                    "__image-zoom__image fade-in-zoom";
            });

            // dibawah untuk menghapus toolbar dipojok atas
            document.querySelector(".__image-zoom__close-container").style.display =
                "none";
        }

    }
}

export default zoom