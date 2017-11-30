Fighter2.attack = function() {
    var attack1 = this.atk + (Math.floor(Math.random() * 5) - 5) - Fighter1.def;
    if (attack1 > 0) {
        Fighter1.hp -= attack1;
        document.getElementById("hp1").innerHTML = "Health: " + Fighter1.hp  + "/100";
        $('.plrAction2').attr('disabled', 'disabled');
        if (Fighter1.hp <= 0) {
            document.getElementById("hp1").innerHTML = "LOSER";
            document.getElementById("hp2").innerHTML = "WINNER";
        }
    }
};

Fighter2.critAttack = function() {
    var critAttack = (this.atk * 2) - Fighter1.def;
    if (critAttack > 0) {
        Fighter1.hp -= critAttack;
        document.getElementById("hp1").innerHTML = "Health: " + Fighter1.hp  + "/100";
        $('.plrAction2').attr('disabled', 'disabled');
        if (Fighter1.hp <= 0) {
            document.getElementById("hp1").innerHTML = "LOSER";
            document.getElementById("hp2").innerHTML = "WINNER";
        }
    }
};

Fighter2.spell = function() {
    var spell = 30;
    Fighter1.hp -= spell;
    document.getElementById("hp1").innerHTML = "Health: " + Fighter1.hp  + "/100";
    $('.plrAction2').attr('disabled', 'disabled');
    if (Fighter1.hp <= 0) {
        document.getElementById("hp1").innerHTML = "LOSER";
        document.getElementById("hp2").innerHTML = "WINNER";
    }
};

Fighter2.heal = function() {
    var heal = 15;
    this.hp += heal;
    document.getElementById("hp2").innerHTML = "Health: " + this.hp  + "/100";
    $('.plrAction2').attr('disabled', 'disabled');
}

Fighter2.megaHeal = function() {
    var megaHeal = 30;
    this.hp += megaHeal;
    document.getElementById("hp2").innerHTML = "Health: " + this.hp  + "/100";
    $('.plrAction2').attr('disabled', 'disabled');
}

Fighter2.raiseDef = function() {
    this.def += 5;
    $('.plrAction2').attr('disabled', 'disabled');
}