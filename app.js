new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'http://google.fr',
        websiteTag: '<a href="http://facebook.com">Facebook</a>',
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        greet: function (time) {
            return "Good Morning " + time + ' ' + this.name;
        },
        add: function (inc) {
            this.age += inc;
        },
        substract: function (inc) {
            this.age -= inc;
        }
    }
});

new Vue({
    el: '#canvas',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }  
    }
});

new Vue({
    el: '#logging',
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function(){
            console.log('You entered your name');
        },
        logAge: function(){
            console.log('You entered your age');
        }
    }
})