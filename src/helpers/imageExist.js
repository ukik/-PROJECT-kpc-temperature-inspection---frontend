const imageExist = {
    methods: {
        imageExist(origin, dom) {
            const vm = this
            var img = new Image();

            img.onload = function() {
                // alert("good");
                document.getElementById(dom).src = origin;
            };
            img.onerror = function() {
                // alert("bad");
                if (document.getElementById(dom) != null) {
                    document.getElementById(dom).src = vm.no_image_base64
                        //                        "https://cdn.dribbble.com/users/37530/screenshots/2485318/no-results.png";
                }
            };
            img.src = origin;
        }
    }
}

export default imageExist