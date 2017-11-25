var Fighter1 = {
    atk: 30,
    def: 5,
    hp: 100,
    attack: function() {
        var attack1 = (this.atk + (Math.floor(Math.random() * 5) - 5) - Fighter2.def);
        Fighter2.hp = Fighter2.hp - attack1;
        document.getElementById("hp2").innerHTML = Fighter2.hp;
        if (Fighter2.hp <= 0) {
            document.getElementById("hp1").innerHTML = "WINNER";
            document.getElementById("hp2").innerHTML = "DEAD";
        }
    },
    heal: function() {
        var heal = 5 + (Math.floor(Math.random() * 20));
        this.hp = this.hp + heal;
        document.getElementById("hp1").innerHTML = this.hp;
    }
};

var Fighter2 = {
    atk: 15,
    def: 20,
    hp: 100,
    attack: function() {
        var attack1 = (this.atk + (Math.floor(Math.random() * 5) - 5) - Fighter1.def);
        Fighter1.hp = Fighter1.hp - attack1;
        document.getElementById("hp1").innerHTML = Fighter1.hp;
        if (Fighter1.hp <= 0) {
            document.getElementById("hp2").innerHTML = "WINNER";
            document.getElementById("hp1").innerHTML = "DEAD";
        }
    },
    heal: function() {
        var heal = 5 + (Math.floor(Math.random() * 20));
        this.hp = this.hp + heal;
        document.getElementById("hp2").innerHTML = this.hp;
    }
};