let rollBtn = document.getElementById('rollBtn');
let rerollBtn = document.getElementById('rerollBtn');
let sumBtn = document.getElementById('sumBtn');
let BtnContainer = document.getElementById('BtnContainer');
let DieContainer = document.getElementById('DieContainer');

let dieArray = [];

rollBtn.addEventListener('click', () => new Die())
rerollBtn.addEventListener('click', () => {
    dieArray.forEach((elements) => elements.roll());
});

sumBtn.addEventListener('click', () => {
    let sum = 0;
    for (let i = 0; i < dieArray.length; i++) {
        sum += dieArray[i].value;
    }
    alert(sum);
})

class Die {
    constructor() {
        this.div = document.createElement("div");
        this.div.className = "die";
        DieContainer.appendChild(this.div);
        this.roll();
        this.div.addEventListener("click", () => this.roll());
        dieArray.push(this); //puts THIS object into the dieArray
    }
    

    roll() {
        this.value = Math.floor(Math.random() * 20 + 1);
        this.div.innerHTML = ""
        let img = document.createElement("img");
        img.addEventListener("dblclick", () => {
            this.div.remove();
            let i = dieArray.indexOf(this);
            dieArray.splice(i, 1);
        });
        this.div.appendChild(img);
        switch (this.value) {
            case 1:
                img.src = "./1 d20.png"
                break;
            case 2:
                img.src = "./2 d20.png"
                break;
            case 3:
                img.src = "./3 d20.png"
                break;
            case 4:
                img.src = "./4 d20.png"
                break;
            case 5:
                img.src = "./5 d20.png"
                break;
            case 6:
                img.src = "./6 d20.png"
                break;
            case 7:
                img.src = "./7 d20.png"
                break;
            case 8:
                img.src = "./8 d20.png"
                break;
            case 9:
                img.src = "./9 d20.png"
                break;
            case 10:
                img.src = "./10 d20.png"
                break;
            case 11:
                img.src = "./11 d20.png"
                break;
            case 12:
                img.src = "./12 d20.png"
                break;
            case 13:
                img.src = "./13 d20.png"
                break;
            case 14:
                img.src = "./14 d20.png"
                break;
            case 15:
                img.src = "./15 d20.png"
                break;
            case 16:
                img.src = "./16 d20.png"
                break;
            case 17:
                img.src = "./17 d20.png"
                break;
            case 18:
                img.src = "./18 d20.png"
                break;
            case 19:
                img.src = "./19 d20.png"
                break;
            case 20:
                img.src = "./20 d20.png"
                break;
        }
    }
}