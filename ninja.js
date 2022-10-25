class Ninja {
    constructor(name, health = 3, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName() {
        console.log(`You go against ${this.name}! Ready yourself...`)
    }

    showStats() {
        console.log(this)
    }

    drinkSake() {
        console.log("Drinking sake!")
        this.health += 10
        console.log("Health up! HP:", this.health)
    }
}


class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10, wisdom)
    }

    speakWisdom() {
        super.sayName()
        super.drinkSake()
        console.log(
            "What one programmer can do in one month, two programmers can do in two months."
        )
    }

    showStats() {
        super.showStats()
    }
}

const superSensei = new Sensei("Master Roshi");
superSensei.speakWisdom()
superSensei.showStats()
