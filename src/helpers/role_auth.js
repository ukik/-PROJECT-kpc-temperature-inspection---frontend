const role_auth = {
    beforeMount() {
        /**
         * -------------------------------------------------------------
         * Auth Check
         * -------------------------------------------------------------
         */
        // console.log(this.get_credentials);

        // redirect to 'login' page because store logged (false)
        if (!this.get_user) {
            if (this.$route.name != "login") {
                this.$router.replace({
                    name: "login",
                });
                return
            }
        }

        // redirect to 'login' page because store logged (false)
        if (!this.get_credentials.logged) {
            if (this.$route.name != "login") {
                this.$router.replace({
                    name: "login",
                });
                return
            }
        }

        // redirect to 'login' page because store role (false)
        if (this.get_credentials.role == null) {
            if (this.$route.name != "login") {
                this.$router.replace({
                    name: "login",
                });
                return
            }
        } else {

            if (this.$route.meta.roles != undefined) {
                for (let i = 0; i < this.$route.meta.roles.length; i++) {
                    const element = this.$route.meta.roles[i];
                    // redirect to which page according to authorized page
                    if (Number(element) == Number(this.get_credentials.role)) {
                        // console.log(this.$route.meta.roles, Number(element), Number(this.get_credentials.role));
                        return
                    }
                }

                if (this.$route.name != "laporan") {
                    this.$router.replace({
                        name: "laporan",
                        replace: true
                    });
                }
            }
        }

    },
}

export default role_auth