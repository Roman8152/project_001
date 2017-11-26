var Fighter1 = {
    atk: 40,
    def: 5,
    hp: 100,
    healMove: 0,
    attack: function() {
        var attack1 = (this.atk + (Math.floor(Math.random() * 5) - 5) - Fighter2.def);
        Fighter2.hp = Fighter2.hp - attack1;
        document.getElementById("hp2").innerHTML = Fighter2.hp + "/100";
        ++this.healMove;
        document.getElementById("plr1heal").disabled = true;
        document.getElementById("plr1atk").disabled = true;
        document.getElementById("plr2atk").disabled = false;
        if (Fighter2.hp <= 0) {
            document.getElementById("plr1heal").disabled = true;
            document.getElementById("plr1atk").disabled = true;
            document.getElementById("plr2heal").disabled = true;
            document.getElementById("plr2atk").disabled = true;
            document.getElementById("hp1").innerHTML = "WINNER";
            document.getElementById("hp2").innerHTML = "DEAD";
        }
        if (Fighter2.healMove >= 3 && Fighter2.hp > 0) {
            document.getElementById("plr2heal").disabled = false;
        }
    },
    heal: function() {
            var heal = 5 + (Math.floor(Math.random() * 20));
            this.hp = this.hp + heal;
            document.getElementById("hp1").innerHTML = this.hp + "/100";
            this.healMove = this.healMove - 3;
            document.getElementById("plr1heal").disabled = true;
            document.getElementById("plr1atk").disabled = true;
            document.getElementById("plr2atk").disabled = false;
            if (Fighter2.healMove >= 3 && Fighter2.hp > 0) {
                document.getElementById("plr2heal").disabled = false;
            }
            if (Fighter2.hp <= 0) {
                document.getElementById("plr1heal").disabled = true;
                document.getElementById("plr1atk").disabled = true;
                document.getElementById("plr2heal").disabled = true;
                document.getElementById("plr2atk").disabled = true;
                document.getElementById("hp1").innerHTML = "WINNER";
                document.getElementById("hp2").innerHTML = "DEAD";
            }
    }
};

var Fighter2 = {
    atk: 30,
    def: 20,
    hp: 100,
    healMove: 0,
    attack: function() {
        var attack1 = (this.atk + (Math.floor(Math.random() * 5) - 5) - Fighter1.def);
        Fighter1.hp = Fighter1.hp - attack1;
        document.getElementById("hp1").innerHTML = Fighter1.hp + "/100";
        ++this.healMove;
        document.getElementById("plr2heal").disabled = true;
        document.getElementById("plr2atk").disabled = true;
        document.getElementById("plr1atk").disabled = false;
        if (Fighter1.hp <= 0) {
            document.getElementById("plr1heal").disabled = true;
            document.getElementById("plr1atk").disabled = true;
            document.getElementById("plr2heal").disabled = true;
            document.getElementById("plr2atk").disabled = true;
            document.getElementById("hp2").innerHTML = "WINNER";
            document.getElementById("hp1").innerHTML = "DEAD";
        }
        if (Fighter1.healMove >= 3 && Fighter1.hp > 0) {
            document.getElementById("plr1heal").disabled = false;
        } 
    },
    heal: function() {
        var heal = 5 + (Math.floor(Math.random() * 20));
        this.hp = this.hp + heal;
        document.getElementById("hp2").innerHTML = this.hp + "/100";
        this.healMove = this.healMove - 3;
        document.getElementById("plr2heal").disabled = true;
        document.getElementById("plr2atk").disabled = true;
        document.getElementById("plr1atk").disabled = false;
        if (Fighter1.healMove >= 3 && Fighter1.hp > 0) {
            document.getElementById("plr1heal").disabled = false;
        }
        if (Fighter1.hp <= 0) {
            document.getElementById("plr1heal").disabled = true;
            document.getElementById("plr1atk").disabled = true;
            document.getElementById("plr2heal").disabled = true;
            document.getElementById("plr2atk").disabled = true;
            document.getElementById("hp2").innerHTML = "WINNER";
            document.getElementById("hp1").innerHTML = "DEAD";
        }
    }

};

