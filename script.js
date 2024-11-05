/* * * * * * * * * * * * * *

Copright 2023 Riley Jones. 
All Rights Reserved.

JS of FHS Clock.

* * * * * * * * * * * * * * */

function weekday() {
    var e = new Date;

    function t() {
        var e = o();
        return setInterval(function () {
            s(a(), e)
        }, 1e3)
    }

    function a() {
        return new Date
    }

    function o() {
        var e = new Date;
        return e.setHours(c[0]), e.setMinutes(c[1]), e.setSeconds(c[2]), e
    }

    function s(e, t) {
        var a = t.getTime() - e.getTime() + 1e3, // synchronizing fix
            o = Math.floor((d = a >= 0 ? a : a + 864e5) / 3600 / 1e3),
            s = Math.floor(d / 60 / 1e3) - 60 * o;
        u(o, s, Math.floor(d / 1e3) - 3600 * o - 60 * s)
    }

    function r(e, t) {
        return e + " "
    }

    function u(e, t, a) {
        $("#countdown")
            .html(e + "h " + t + "m " + a + "s ")
    }
    if (0 == e.getDay() && document.getElementById("schoolhours")
        .classList.add("hide"), 1 == e.getDay()) {
        var c = [14, 34, 0];

        function t() {
            var e = o();
            return setInterval(function () {
                s(a(), e)
            }, 1e3)
        }

        function a() {
            return new Date
        }

        function o() {
            var e = new Date;
            return e.setHours(c[0]), e.setMinutes(c[1]), e.setSeconds(c[2]), e
        }

        function s(e, t) {
            var a = t.getTime() - e.getTime() + 1e3, // synchronizing fix
                o = Math.floor((d = a >= 0 ? a : a + 864e5) / 3600 / 1e3),
                s = Math.floor(d / 60 / 1e3) - 60 * o;
            u(o, s, Math.floor(d / 1e3) - 3600 * o - 60 * s)
        }

        function r(e, t) {
            return e + " "
        }

        function u(e, t, a) {
            $("#countdown")
                .html(e + "h " + t + "m " + a + "s ")
        }
        t()
    }
    2 == e.getDay() && (c = [14, 34, 0], t()), 3 == e.getDay() && (c = [14, 34, 0], t()), 4 == e.getDay() && (c = [13, 56, 0], t()), 5 == e.getDay() && (c = [14, 34, 0], t())
}

function updateClock() {
    var e = new Date,
        t = e.getHours(),
        a = e.getHours(),
        o = e.getMinutes(),
        s = e.getSeconds(),
        r = (t = 0 == (t = a > 12 ? a - 12 : a) ? 12 : t) + ":" + (o = (o < 10 ? "0" : "") + o) + ":" + (s = (s < 10 ? "0" : "") + s) + " " + (a < 12 ? "AM" : "PM");
    $("#clock")
        .html(r)
}
weekday(), $(document)
    .ready(function () {
        setInterval(updateClock, 1e3)
    });
var weekday, d = new Date;
(weekday = Array(7))[0] = "Sunday", weekday[1] = "Monday", weekday[2] = "Tuesday", weekday[3] = "Wednesday", weekday[4] = "Thursday", weekday[5] = "Friday", weekday[6] = "Saturday";
var n = weekday[d.getDay()];
document.getElementById("day")
    .innerHTML = n;
var d2 = new Date,
    weekday2 = Array(7);
weekday2[0] = "N/A", weekday2[1] = "2:34 PM", weekday2[2] = "2:34 PM", weekday2[3] = "2:34 PM", weekday2[4] = "1:56 PM", weekday2[5] = "2:34 PM", weekday2[6] = "N/A";
var n2 = weekday2[d2.getDay()];
document.getElementById("release")
    .innerHTML = n2, $(document)
        .ready(function () {
            var e = new Date,
                t = new Date,
                a = (new Date)
                    .getTime();
            a > e.setHours(7, 20) && a < t.setHours(14, 34) ? (document.getElementById("schoolhours")
                .classList.add("open"), document.getElementById("releasetime")
                    .classList.add("open")) : (document.getElementById("schoolhours")
                        .classList.add("closed"), document.getElementById("releasetime")
                            .classList.add("closed"), document.getElementById("schoolend")
                                .classList.add("show"), document.getElementById("releaseend")
                                    .classList.add("show"))
        });
var text = ["N/A"],
    counter = 0,
    elem = document.getElementById("countdown"),
    inst = setInterval(change, 995);

function change() {
    elem.innerHTML = text[counter], ++counter >= text.length && (counter = 0, clearInterval(inst))
}
