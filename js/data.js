"use strict";

const feed = [{
        autorius: {
            vardas: 'Tomas',
            pavarde: 'Pavardenis',
            amzius: 0,
            lytis: 'Vyras',
            avataras: '',
            nuoroda: '#'
        },
        laikas: 1583832433393,
        pranesimas: {
            tekstas: 'Sveiki, as esu Tomas.',
            spalva: '',
            paveiksliukai: [

            ]
        }
    },
    {
        autorius: {
            vardas: 'Laura',
            pavarde: 'Pavardenis',
            amzius: 20,
            lytis: 'Moteris',
            avataras: '',
            nuoroda: '#',
        },
        laikas: 1583832433393,
        pranesimas: {
            tekstas: 'Neturiu komentaru....',
            spalva: '',
            paveiksliukai: [

            ]
        }
    },
    {
        autorius: {
            vardas: 'Tomas',
            pavarde: 'Pavardenis',
            amzius: 27,
            lytis: 'Vyras',
            avataras: '2.png',
            nuoroda: '#',
        },
        laikas: 1583832434388,
        pranesimas: {
            tekstas: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex earum tenetur odit nemo id architecto laborum iure error, aliquid nisi',
            spalva: '',
            paveiksliukai: [

            ]
        }
    },
    {
        autorius: {
            vardas: 'Vardenis',
            pavarde: 'Pavardenis',
            amzius: 50,
            lytis: 'Vyras',
            avataras: '3.png',
            nuoroda: '#',
        },
        laikas: 1583832434388,
        pranesimas: {
            tekstas: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex earum tenetur odit nemo id architecto laborum iure error, aliquid nisi . Ex earum tenetur odit nemo id architecto laborum iure error, . Ex earum tenetur odit nemo id architecto laborum iure error,',
            spalva: '',
            paveiksliukai: [

            ]
        }
    },
    {
        autorius: {
            vardas: 'Vardenis',
            pavarde: 'Pavardenis',
            amzius: 50,
            lytis: 'Vyras',
            avataras: 'avataras.png',
            nuoroda: '#',
        },
        laikas: 1583832434388,
        pranesimas: {
            tekstas: 'Labas',
            spalva: '',
            paveiksliukai: [

            ]
        }
    },
    {
        autorius: {
            vardas: 'Vardenis',
            pavarde: 'Pavardenis',
            amzius: 50,
            lytis: 'Vyras',
            avataras: 'avataras.png',
            nuoroda: '#',
        },
        laikas: 1583832434388,
        pranesimas: {
            tekstas: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam quia totam nemo, tempore delectus, illum rem necessitatibus minus maxime et odit vel explicabo ullam! Tenetur iusto velit delectus et ex numquam repellat natus, eaque esse sint iste consectetur placeat nesciunt quos vel commodi? Aliquam modi facilis nulla consequatur illum.',
            spalva: '',
            paveiksliukai: [

            ]
        }
    },
    {
        autorius: {
            vardas: 'Vardenis',
            pavarde: 'Pavardenis',
            amzius: 50,
            lytis: 'Vyras',
            avataras: 'avataras.png',
            nuoroda: '#',
        },
        laikas: 1583832434388,
        pranesimas: {
            tekstas: 'Labas',
            spalva: 'red',
            paveiksliukai: [
                '1.png',
                '2.png',
            ]
        }
    },
    {
        autorius: {
            vardas: 'Vardenis',
            pavarde: 'Pavardenis',
            amzius: 50,
            lytis: 'Vyras',
            avataras: 'avataras.png',
            nuoroda: '#',
        },
        laikas: 1583832434388,
        pranesimas: {
            tekstas: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex earum tenetur odit nemo id architecto laborum iure error, aliquid nisi . Ex earum tenetur  . Ex earum tenetur odit nemo id architecto laborum iure erro',
            spalva: '',
            paveiksliukai: [
                '1.png',
            ]
        }
    },
    {
        autorius: {
            vardas: 'Vardenis',
            pavarde: 'Pavardenis',
            amzius: 50,
            lytis: 'Vyras',
            avataras: 'avataras.png',
            nuoroda: '#',
        },
        laikas: 1583832434388,
        pranesimas: {
            tekstas: 'LabasLorem ipsum dolor sit, amet consectetur adipisicing elit. Ex earum tenetur odit nemo id architecto laborum iure error, aliquid nisi, Ex earum tenetur odit nemo id architecto laborum iure erro',
            spalva: '',
            paveiksliukai: [
                '1.png',
                '2.png',
                '3.png',
            ]
        }
    },
    {
        autorius: {
            vardas: 'Vardenis',
            pavarde: 'Pavardenis',
            amzius: 50,
            lytis: 'Vyras',
            avataras: 'avataras.png',
            nuoroda: '#',
        },
        laikas: 1583832434388,
        pranesimas: {
            tekstas: 'LabasLorem ipsum dolor sit, amet consectetur adipisicing elit. Ex earum ',
            spalva: 'orange',
            paveiksliukai: [
                '1.png',
                '2.png',
                '3.png',
                '4.png',
            ]
        }
    },

    {
        autorius: {
            vardas: 'Vardenis',
            pavarde: 'Pavardenis',
            amzius: 50,
            lytis: 'Vyras',
            avataras: 'avataras.png',
            nuoroda: '#',
        },
        laikas: 1583832434388,
        pranesimas: {
            tekstas: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex earum tenetur odit nemo id architecto laborum iure error, aliquid nisi',
            spalva: '',
            paveiksliukai: [
                '1.png',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
            ]
        }
    },

]

console.log(feed);

// let feedNew = feed.concat('PUSH');
// console.log(feedNew);

console.log(feed[1].autorius.amzius)

let result1 = feed.find(function(item, index, array) {
    return item.autorius.amzius === 50; // grazina tik pirma kuris TRUE
});

console.log(result1);

// delete feedNew[1];
// console.log(feedNew);
// console.log(feedNew[3]);

for (let object of feed) {
    console.log(object);
}

