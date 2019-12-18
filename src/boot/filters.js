export default async({
    // app,
    // router,
    // store,
    Vue
}) => {
    Vue.filter(
        "position",
        await
        function(value, args) {
            switch (Number(value)) {
                case 0:
                    return "Super Admin";
                case 1:
                    return "Supervisor";
                case 2:
                    return "Temperature Man";
            }
        }
    );

    Vue.filter(
        "gender",
        await
        function(value, args) {
            switch (Number(value)) {
                case 0:
                    return "Laki-laki";
                case 1:
                    return "Perempuan";
            }
        }
    );

    Vue.filter(
        "place",
        await
        function(value, args) {
            switch (value) {
                case "":
                    return "---";
                case "A":
                    return "Kanan";
                case "B":
                    return "Kiri";
            }
        }
    );

    Vue.filter(
        "marital",
        await
        function(value, args) {
            switch (Number(value)) {
                case 0:
                    return "Lajang";
                case 1:
                    return "Menikah";
            }
        }
    );

    Vue.filter(
        "boolean",
        await
        function(value, args) {
            switch (Number(value)) {
                case 0:
                    return false;
                case 1:
                    return true;
            }
        }
    );

    Vue.filter(
        "yes_or_no",
        await
        function(value, args) {
            return value == "true" ? 'Ya' : 'Tidak';
        }
    );


    Vue.filter(
        "verification",
        await
        function(value, args) {
            switch (Number(value)) {
                case 0:
                    return "Tidak Terverifikasi";
                case 1:
                    return "Terverifikasi";
            }
        }
    );

    Vue.filter(
        "disable",
        await
        function(value, args) {
            switch (Number(value)) {
                case 0:
                    return "Tidak";
                case 1:
                    return "Ya";
            }
        }
    );

    Vue.filter("condition", value => {
        switch (Number(value)) {
            case 1:
                return "Noise";
            case 2:
                return "Dusty";
            case 3:
                return "Vibration";
        }
    });

    Vue.filter("weather", value => {
        switch (Number(value)) {
            case 1:
                return "Cerah";
            case 2:
                return "Mendung";
            case 3:
                return "Hujan";
            case 4:
                return "Kabut";
            case 5:
                return "Angin";
            case 6:
                return "Lainnya";
        }
    });

    Vue.filter("capitalize", str => {

        if (str == undefined)
            return str
        if (str == null)
            return str

        var splitStr = str.toLowerCase().split(" ");
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] =
                splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(" ");
    });

    Vue.filter("upper", str => {
        if (str == undefined)
            return str
        if (str == null)
            return str

        return str.toUpperCase();
    });
};