class Fighter {
    constructor(atk, def, hp) {
        this.atk = atk;
        this.def = def;
        this.hp = hp;
    }
}

var Fighter1 = new Fighter(40, 5, 100);
var Fighter2 = new Fighter(30, 20, 100);

function random() {
    var randomNum =  Math.floor(Math.random() * 6) + 1;
    var randomNum2 =  Math.floor(Math.random() * 6) + 1;
    var randomNum3 =  Math.floor(Math.random() * 6) + 1;
    if (randomNum === 1) {
        $("#plr1button1").prop("onclick",null).off("click");
        $("#plr2button1").prop("onclick",null).off("click");
        document.getElementById("plr1button1").innerHTML = "Attack";
        $("#plr1button1").bind("click", Fighter1.attack.bind(Fighter1));
        document.getElementById("plr2button1").innerHTML = "Attack";
        $("#plr2button1").bind("click", Fighter2.attack.bind(Fighter2));
    }
    else if (randomNum === 2) {
        $("#plr1button1").prop("onclick",null).off("click");
        $("#plr2button1").prop("onclick",null).off("click");
        document.getElementById("plr1button1").innerHTML = "Crit Attack";
        $("#plr1button1").bind("click", Fighter1.critAttack.bind(Fighter1));
        document.getElementById("plr2button1").innerHTML = "Crit Attack";
        $("#plr2button1").bind("click", Fighter2.critAttack.bind(Fighter2));
    }
    else if (randomNum === 3) {
        $("#plr1button1").prop("onclick",null).off("click");
        $("#plr2button1").prop("onclick",null).off("click");
        document.getElementById("plr1button1").innerHTML = "Spell";
        $("#plr1button1").bind("click", Fighter1.spell.bind(Fighter1));
        document.getElementById("plr2button1").innerHTML = "Spell";
        $("#plr2button1").bind("click", Fighter2.spell.bind(Fighter2));
    }
    else if (randomNum === 4) {
        $("#plr1button1").prop("onclick",null).off("click");
        $("#plr2button1").prop("onclick",null).off("click");
        document.getElementById("plr1button1").innerHTML = "Heal";
        $("#plr1button1").bind("click", Fighter1.heal.bind(Fighter1));
        document.getElementById("plr2button1").innerHTML = "Heal";
        $("#plr2button1").bind("click", Fighter2.heal.bind(Fighter2));
    }
    else if (randomNum === 5) {
        $("#plr1button1").prop("onclick",null).off("click");
        $("#plr2button1").prop("onclick",null).off("click");
        document.getElementById("plr1button1").innerHTML = "Mega Heal";
        $("#plr1button1").bind("click", Fighter1.megaHeal.bind(Fighter1));
        document.getElementById("plr2button1").innerHTML = "Mega Heal";
        $("#plr2button1").bind("click", Fighter2.megaHeal.bind(Fighter2));
    }
    else if(randomNum === 6) {
        $("#plr1button1").prop("onclick",null).off("click");
        $("#plr2button1").prop("onclick",null).off("click");
        document.getElementById("plr1button1").innerHTML = "Raise Def";
        $("#plr1button1").bind("click", Fighter1.raiseDef.bind(Fighter1));
        document.getElementById("plr2button1").innerHTML = "Raise Def";
        $("#plr2button1").bind("click", Fighter2.raiseDef.bind(Fighter2));
    }






    if (randomNum2 === 1) {
        $("#plr1button2").prop("onclick",null).off("click");
        $("#plr2button2").prop("onclick",null).off("click");
        document.getElementById("plr1button2").innerHTML = "Attack";
        $("#plr1button2").bind("click", Fighter1.attack.bind(Fighter1));
        document.getElementById("plr2button2").innerHTML = "Attack";
        $("#plr2button2").bind("click", Fighter2.attack.bind(Fighter2));
    }
    else if (randomNum2 === 2) {
        $("#plr1button2").prop("onclick",null).off("click");
        $("#plr2button2").prop("onclick",null).off("click");
        document.getElementById("plr1button2").innerHTML = "Crit Attack";
        $("#plr1button2").bind("click", Fighter1.critAttack.bind(Fighter1));
        document.getElementById("plr2button2").innerHTML = "Crit Attack";
        $("#plr2button2").bind("click", Fighter2.critAttack.bind(Fighter2));
    }
    else if (randomNum2 === 3) {
        $("#plr1button2").prop("onclick",null).off("click");
        $("#plr2button2").prop("onclick",null).off("click");
        document.getElementById("plr1button2").innerHTML = "Spell";
        $("#plr1button2").bind("click", Fighter1.spell.bind(Fighter1));
        document.getElementById("plr2button2").innerHTML = "Spell";
        $("#plr2button2").bind("click", Fighter2.spell.bind(Fighter2));
    }
    else if (randomNum2 === 4) {
        $("#plr1button2").prop("onclick",null).off("click");
        $("#plr2button2").prop("onclick",null).off("click");
        document.getElementById("plr1button2").innerHTML = "Heal";
        $("#plr1button2").bind("click", Fighter1.heal.bind(Fighter1));
        document.getElementById("plr2button2").innerHTML = "Heal";
        $("#plr2button2").bind("click", Fighter2.heal.bind(Fighter2));
    }
    else if (randomNum2 === 5) {
        $("#plr1button2").prop("onclick",null).off("click");
        $("#plr2button2").prop("onclick",null).off("click");
        document.getElementById("plr1button2").innerHTML = "Mega Heal";
        $("#plr1button2").bind("click", Fighter1.megaHeal.bind(Fighter1));
        document.getElementById("plr2button2").innerHTML = "Mega Heal";
        $("#plr2button2").bind("click", Fighter2.megaHeal.bind(Fighter2));
    }
    else if(randomNum2 === 6) {
        $("#plr1button2").prop("onclick",null).off("click");
        $("#plr2button2").prop("onclick",null).off("click");
        document.getElementById("plr1button2").innerHTML = "Raise Def";
        $("#plr1button2").bind("click", Fighter1.raiseDef.bind(Fighter1));
        document.getElementById("plr2button2").innerHTML = "Raise Def";
        $("#plr2button2").bind("click", Fighter2.raiseDef.bind(Fighter2));
    }






    if (randomNum3 === 1) {
        $("#plr1button3").prop("onclick",null).off("click");
        $("#plr2button3").prop("onclick",null).off("click");
        document.getElementById("plr1button3").innerHTML = "Attack";
        $("#plr1button3").bind("click", Fighter1.attack.bind(Fighter1));
        document.getElementById("plr2button3").innerHTML = "Attack";
        $("#plr2button3").bind("click", Fighter2.attack.bind(Fighter2));
    }
    else if (randomNum3 === 2) {
        $("#plr1button3").prop("onclick",null).off("click");
        $("#plr2button3").prop("onclick",null).off("click");
        document.getElementById("plr1button3").innerHTML = "Crit Attack";
        $("#plr1button3").bind("click", Fighter1.critAttack.bind(Fighter1));
        document.getElementById("plr2button3").innerHTML = "Crit Attack";
        $("#plr2button3").bind("click", Fighter2.critAttack.bind(Fighter2));
    }
    else if (randomNum3 === 3) {
        $("#plr1button3").prop("onclick",null).off("click");
        $("#plr2button3").prop("onclick",null).off("click");
        document.getElementById("plr1button3").innerHTML = "Spell";
        $("#plr1button3").bind("click", Fighter1.spell.bind(Fighter1));
        document.getElementById("plr2button3").innerHTML = "Spell";
        $("#plr2button3").bind("click", Fighter2.spell.bind(Fighter2));
    }
    else if (randomNum3 === 4) {
        $("#plr1button3").prop("onclick",null).off("click");
        $("#plr2button3").prop("onclick",null).off("click");
        document.getElementById("plr1button3").innerHTML = "Heal";
        $("#plr1button3").bind("click", Fighter1.heal.bind(Fighter1));
        document.getElementById("plr2button3").innerHTML = "Heal";
        $("#plr2button3").bind("click", Fighter2.heal.bind(Fighter2));
    }
    else if (randomNum3 === 5) {
        $("#plr1button3").prop("onclick",null).off("click");
        $("#plr2button3").prop("onclick",null).off("click");
        document.getElementById("plr1button3").innerHTML = "Mega Heal";
        $("#plr1button3").bind("click", Fighter1.megaHeal.bind(Fighter1));
        document.getElementById("plr2button3").innerHTML = "Mega Heal";
        $("#plr2button3").bind("click", Fighter2.megaHeal.bind(Fighter2));
    }
    else if(randomNum3 === 6) {
        $("#plr1button3").prop("onclick",null).off("click");
        $("#plr2button3").prop("onclick",null).off("click");
        document.getElementById("plr1button3").innerHTML = "Raise Def";
        $("#plr1button3").bind("click", Fighter1.raiseDef.bind(Fighter1));
        document.getElementById("plr2button3").innerHTML = "Raise Def";
        $("#plr2button3").bind("click", Fighter2.raiseDef.bind(Fighter2));
    }
}