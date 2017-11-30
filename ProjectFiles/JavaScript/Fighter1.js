Fighter1.attack = function() {
    var attack1 = this.atk + (Math.floor(Math.random() * 5) - 5) - Fighter2.def;
    if (attack1 > 0) {
        Fighter2.hp -= attack1;
        document.getElementById("hp2").innerHTML = "Health: " + Fighter2.hp + "/100";
        $('.plrAction1').attr('disabled', 'disabled');
        if (Fighter2.hp <= 0) {
            document.getElementById("hp2").innerHTML = "LOSER";
            document.getElementById("hp1").innerHTML = "WINNER";
        }
    }
};

Fighter1.critAttack = function() {
    var critAttack = (this.atk * 2) - Fighter2.def;
    if (critAttack > 0) {
        Fighter2.hp -= critAttack;
        document.getElementById("hp2").innerHTML = "Health: " + Fighter2.hp  + "/100";
        $('.plrAction1').attr('disabled', 'disabled');
        if (Fighter2.hp <= 0) {
            document.getElementById("hp2").innerHTML = "LOSER";
            document.getElementById("hp1").innerHTML = "WINNER";
        }
    }
};

Fighter1.spell = function() {
    var spell = 30;
    Fighter2.hp -= spell;
    document.getElementById("hp2").innerHTML = "Health: " + Fighter2.hp  + "/100";
    $('.plrAction1').attr('disabled', 'disabled');
    if (Fighter2.hp <= 0) {
        document.getElementById("hp2").innerHTML = "LOSER";
        document.getElementById("hp1").innerHTML = "WINNER";
    }
};

Fighter1.heal = function() {
    var heal = 15;
    this.hp += heal;
    document.getElementById("hp1").innerHTML = "Health: " + this.hp  + "/100";
    $('.plrAction1').attr('disabled', 'disabled');
}

Fighter1.megaHeal = function() {
    var megaHeal = 30;
    this.hp += megaHeal;
    document.getElementById("hp1").innerHTML = "Health: " + this.hp  + "/100";
    $('.plrAction1').attr('disabled', 'disabled');
}

Fighter1.raiseDef = function() {
    this.def += 5;
    $('.plrAction1').attr('disabled', 'disabled');
}