class Fighter {
    constructor(atk, def, hp) {
        this.atk = atk;
        this.def = def;
        this.hp = hp;
    }
}

var Fighter1 = new Fighter(40, 5, 100);
var Fighter2 = new Fighter(30, 20, 100);

Fighter1.attack = function() {
    var attack1 = this.atk + (Math.floor(Math.random() * 5) - 5) - Fighter2.def;
    Fighter2.hp = Fighter2.hp - attack1;
    document.getElementById("hp2").innerHTML = Fighter2.hp;
};

Fighter2.attack = function() {
    var attack1 = this.atk + (Math.floor(Math.random() * 5) - 5) - Fighter1.def;
    Fighter1.hp = Fighter1.hp - attack1;
    document.getElementById("hp1").innerHTML = Fighter1.hp;
};

function random() {
    var randomNum =  Math.floor(Math.random() * 6) + 1;
    /*var randomNum2 =  Math.floor(Math.random() * 6) + 1;
    var randomNum3 =  Math.floor(Math.random() * 6) + 1;*/
    if (randomNum === 1) {
        document.getElementById("plr1button1").innerHTML = "Attack";
        $("#plr1button1").bind("click", Fighter1.bind.attack(Fighter1));
        document.getElementById("plr2button1").innerHTML = "Attack";
        $("#plr2button1").bind("click", Fighter2.bind.attack(Fighter2));
    }
    else if (randomNum === 2) {
        document.getElementById("plr1button1").innerHTML = "Crit Attack";
        document.getElementById("plr2button1").innerHTML = "Crit Attack";
    }
    else if (randomNum === 3) {
        document.getElementById("plr1button1").innerHTML = "Spell";
        document.getElementById("plr2button1").innerHTML = "Spell";
    }

    else if (randomNum === 4) {
        document.getElementById("plr1button1").innerHTML = "Heal";
        document.getElementById("plr2button1").innerHTML = "Heal";
    }
    else if (randomNum === 5) {
        document.getElementById("plr1button1").innerHTML = "Mega Heal";
        document.getElementById("plr2button1").innerHTML = "Mega Heal";
    }
    else if(randomNum === 6) {
        document.getElementById("plr1button1").innerHTML = "Raise Def";
        document.getElementById("plr2button1").innerHTML = "Raise Def";
    }

    if (randomNum2 === 1) {
        document.getElementById("plr1button2").innerHTML = "Attack";
        document.getElementById("plr2button2").innerHTML = "Attack";
    }
    else if (randomNum2 === 2) {
        document.getElementById("plr1button2").innerHTML = "Crit Attack";
        document.getElementById("plr2button2").innerHTML = "Crit Attack";
    }
    else if (randomNum2 === 3) {
        document.getElementById("plr1button2").innerHTML = "Spell";
        document.getElementById("plr2button2").innerHTML = "Spell";
    }
    else if (randomNum2 === 4) {
        document.getElementById("plr1button2").innerHTML = "Heal";
        document.getElementById("plr2button2").innerHTML = "Heal";
    }
    else if (randomNum2 === 5) {
        document.getElementById("plr1button2").innerHTML = "Mega Heal";
        document.getElementById("plr2button2").innerHTML = "Mega Heal";
    }
    else if (randomNum2 === 6) {
        document.getElementById("plr1button2").innerHTML = "Raise Def";
        document.getElementById("plr2button2").innerHTML = "Raise Def";
    }

    if (randomNum3 === 1) {
        document.getElementById("plr1button3").innerHTML = "Attack";
        document.getElementById("plr2button3").innerHTML = "Attack";
    }
    else if (randomNum3 === 2) {
        document.getElementById("plr1button3").innerHTML = "Crit Attack";
        document.getElementById("plr2button3").innerHTML = "Crit Attack";
    }
    else if (randomNum3 === 3) {
        document.getElementById("plr1button3").innerHTML = "Spell";
        document.getElementById("plr2button3").innerHTML = "Spell";
    }
    else if (randomNum3 === 4) {
        document.getElementById("plr1button3").innerHTML = "Heal";
        document.getElementById("plr2button3").innerHTML = "Heal";
    }
    else if (randomNum3 === 5) {
        document.getElementById("plr1button3").innerHTML = "Mega Heal";
        document.getElementById("plr2button3").innerHTML = "Mega Heal";
    }
    else if (randomNum3 === 6) {
        document.getElementById("plr1button3").innerHTML = "Raise Def";
        document.getElementById("plr2button3").innerHTML = "Raise Def";
    }
}