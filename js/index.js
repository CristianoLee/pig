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
        index: 0,
        timer: null,
        type: '暂停'
    },
    mounted() {
        this.test(100);
    },
    methods: {
        normol() {
            this.test(1000);
        },
        fast() {
            this.test(100);
        },
        slow() {
            this.test(3000);
        },
        stop() {
            if (this.type == '暂停') {
                this.type = '继续';
                clearInterval(this.timer);
            } else {
                this.type = '暂停';
                let that = this;
                that.timer = setInterval(function () {
                    that.next();
                }, 100);
            }
        },
        test(time) {
            let that = this;
            clearInterval(that.timer);
            that.type = '暂停';
            that.timer = setInterval(function () {
                that.next();
            }, time);
        },
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
        }
    }
})
