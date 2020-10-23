//Testimonials

const testi = [
    {
        name: "Hannah",
        text : "Being a web developer is always difficult. It’s a creative job, but one where usually you aren’t the primary stakeholder.I know how it feels to use your creative juices to perfect a piece of code."
    },
    {
        name : "Sophie Turner",
        text : "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring"
    },
    {
        name : "Mackenzie foy",
        text : "Digital design is like painting, except the paint never dries. Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
    },
    {
        name : "Maize Williams",
        text : "The life of a designer is a life of fight. Fight against the ugliness. Just like a doctor fights against disease. For us, the visual disease is what we have around, and what we try to do is cure it somehow with design."
    }
]

let name = document.getElementById("name");
let text = document.getElementById("text");

let prevT = document.querySelector(".prevTest");
let nextT = document.querySelector(".nextTest");

let currentIt = 0

function showTest() {
    let items = testi[currentIt];
    name.textContent = items.name;
    text.textContent = items.text;
}

prevT.addEventListener("click", () => {
    currentIt--;
    if(currentIt < 0) {
        currentIt = testi.length-1
    }
    showTest();
})

nextT.addEventListener("click",() => {
    currentIt++;
    if(currentIt > testi.length-1) {
        currentIt = 0
    }
    showTest();
})

showTest()