const avatarExist = {
    methods: {
        avatarExist(origin, dom) {
            const vm = this
            var img = new Image();

            img.onload = function() {
                // alert("good");
                if (document.getElementById(dom) != null) {
                    document.getElementById(dom).src = origin;
                }

            };
            img.onerror = function() {
                setTimeout(() => {
                    if (document.getElementById(dom) != null) {
                        // alert("bad");
                        document.getElementById(dom).src = vm.avatar_base64

                        //                        "https://cdn.dribbble.com/users/37530/screenshots/2485318/no-results.png";
                    }

                }, 1000);
            };
            img.src = origin;
        }
    }
}

export default avatarExist