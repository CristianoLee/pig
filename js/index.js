var app = new Vue({
    el: '#app',
    data: {
        imgArr: [
            'images/rou1.png',
            'images/rou2.png',
            'images/rou3.png',
            'images/rou4.png',
            'images/rou5.png',
            'images/rou6.png',
        ],
        index: 0
    },
    mounted() {
        var that = this;
        setInterval(function () {
            that.next();
        }, 100);
    },
    methods: {

        prev() {
            if (this.index == 0) {
                this.index = 5;
            } else {
                this.index--;
            }
        },
        next() {
            if (this.index == 5) {
                this.index = 0;
            } else {
                this.index++;
            }
        },
    }
})