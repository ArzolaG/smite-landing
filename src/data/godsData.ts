import type {God} from "../types/types.ts";

export const GODS: God[] = [
    {
        id: "scylla",
        name: "Scylla",
        slogan: "Horror of the Sea",
        bio: "Ancient poems warn of a treacherous channel where sailors face a deadly choice: risk their ship near the monstrous whirlpool Charybdis or navigate the rocky shoals inhabited by Scylla, Horror of the Sea. No ship escapes her waters unscathed. Survivors tell of enormous black tentacles with hound heads that splinter ships with precision, accompanied by her child-like, bloodthirsty laughter.",
        category: "mage",
        combat_type: "ranged",
        pantheon: "greek",
        type: "magical",
        color:"#992DD7",
        abilities: [
            
            {
                id: "quick_learner",
                name: "Quick Learner",
                type: "passive",
                description:
                    "Each of Scylla's abilities gain an additional effect at max rank. In  addition, Scylla gains 25 Magical Power for each max rank ability.",
            },
            {
                id: "sic_em",
                name: "Sic 'Em",
                type: "1",
                description:
                    "Scylla sends two hounds forward, damaging, Rooting, and Crippling the first enemy hit. At max rank, two additional enemies nearby the first target will also be hit.",
                specs: {
                    Damage: "60/110/160/210/260 (+75% of your magical power)",
                    "Root Duration": "1.75s",
                },
            },
            {
                id: "crush",
                name: "Crush",
                type: "2",
                description:
                    "Scylla creates a Magical field that Slows enemies. After 5s it detonates and damages enemies, dealing 20% increased damage to Minions and Jungle Camps. Scylla may activate the ability again to detonate it early. At max rank, enemies in the area also have their Magical Protection reduced, and targets hit by the damage retain the debuff and are Slowed for 1s.",
                specs: {
                    Damage: "100/155/210/265/320 (85% of your Magical Power)",
                    "Max Rank Debuff": "isrank5/15% Magical Protection Reduced",
                    Slow: "30%",
                },
            },
            {
                id: "sentinel",
                name: "Sentinel",
                type: "3",
                description:
                    "Passive: Scylla gains MP5. Active: Scylla summons a sentinel to the target area, granting vision of enemies for 5s. Scylla may activate the ability again within 5s to move to the sentinel location. At max rank, the vision is granted through line of sight blockers, and placement range increases.",
                specs: {
                    "Passive MP5": "4/6/8/10/12",
                    "Summon Range": "65/65/65/65/70",
                    "Vision Range": "40/50/60/70/80",
                },
            },
            {
                id: "monster",
                name: "I'm a Monster",
                type: "4",
                description:
                    "Scylla reveals her true nature, becoming immune to Crowd Control for the next 6s, and gaining movement speed. She may make one powerful attack during this time. If she kills an enemy god with the attack, she gains another 6s and may attack again. At max rank, the movement speed bonus doubles.",
                specs: {
                    "Damage per Hit": "400/500/600/700/800 (120% of your Magical Power)",
                    "Movement Speed": "35/35/35/35/70%",
                },
            },
        ],
    },
    {
        id: "thor",
        name: "Thor",
        slogan: "God of Thunder",
        bio: "Thor, as famous as he is bold, is God of the thundering sky. Yet his hammer, Mjolnir is nearly as famous as he is, and Thor will not be parted from it.Odin, the All-Father, bore many children, but none as well known nor as mighty as Thor, who had the strength to move mountains and the power to call lightning from the sky. Despite these incredible gifts, Thor’s enemies were cunning, bloodthirsty, and numerous. ",
        category: "assassin",
        combat_type: "melee",
        pantheon: "norse",
        type: "physical",
        color:"#3E55BE",
        abilities: [
            {
                id: "warriors_madness",
                name: "Warrior's Madness",
                type: "passive",
                description:
                    "Thor gains Physical Power for each enemy god within 55 units of him.",
                specs:{
                    "Physical Power":"7",
                    "Max Stacks":"3"
                }
            },
            {
                id: "mjolnir",
                name: "Mjolnir's Attunement",
                type: "1",
                description:
                    "Thor throws Mjolnir forward, doing damage to all enemies in its path. If hit twice, minions will take 100% damage while gods take 200% damage from the return. While the hammer is flying, pressing the button again will teleport Thor to his hammer.",
                specs: {
                    Damage: "40/80/120/160/200 (+30% of your Physical Power)",
                },
            },  
            {
                id: "tectonic_rift",
                name: "Tectonic Rift",
                type: "2",
                description:
                    "Thor slams his hammer on the ground, causing a fissure to appear in front of him, Stunning and damaging enemies, and blocking movement.",
                specs: {
                    Damage: "30/50/70/90/110 (+20% of your Physical Power)",
                    "Fissure Lifetime": "3.7s",
                    Stun: "1.2/1.3/1.4/1.5/1.6s",
                },
            },
            {
                id: "berserker_barrage",
                name: "Berserker Barrage",
                type: "3",
                description:
                    "Thor spins his hammer around him dealing damage to Enemies in front of him up to 3 times and those behind him up to 2 times. The final swing deals extra damage. Thor is immune to Knockup for the duration.",
                specs: {
                    "Damage per Tick": "30/50/70/90/110 (+40% of your Physical Power)",
                    "Final Swing Damage": "45/65/85/105/125 (+60% of your Physical Power)",
                },
            },
            {
                id: "anvil",
                name: "Anvil of Dawn",
                type: "4",
                description:
                    "After a short buildup, Thor leaps into the air. While in the air, Thor can target a great distance away to come crashing down in the area, dealing damage and Stunning all enemies in the radius. For 6 seconds after landing, when Thor deals damage to a god lightning will arc, damaging the enemy hit and up to two additional enemies within 35 units. Subsequent lighting hits deal 50% damage.",
                specs: {
                    "Damage": "100/160/220/270/340 (+85% of your Physical Power)",
                    "Arc Damage": "10/15/20/25/30 (10% of your Physical Power)",
                    Stun:"1.5s"
                },
            },
        ],
    },
    {
        id: "bacchus",
        name: "Bacchus",
        slogan: "God of Wine",
        bio: "Eat, drink, and be merry, for tomorrow you may die. None adhere more vigorously to this creed than Bacchus, the Roman God of Wine, lewd behavior, and madness.After spending much of his formative years with his impressively intoxicated mentor Solinus, whom Bacchus loves like a father, the God of Wine is now a wanderer and teacher. He’s journeyed across all of Asia, through India, and finally back to Rome, spreading the 'Mysteries of the Vine'",
        category: "guardian",
        combat_type: "melee",
        pantheon: "roman",
        color:"#689d7b",
        type: "magical",
        abilities: [
            {
                id: "drunk",
                name: "Drunk-O-Meter",
                type: "passive",
                description:
                    "Bacchus loves the drink and as Bacchus drinks from his jug, he becomes more intoxicated, gaining Buffs when he gets Tipsy and Smashed. Bacchus also celebrates when he kills an enemy god, giving him 10% on his meter.",
                specs:{
                    Tipsy:"Gain 10 Magical Power and 5% Damage Mitigation",
                    Smashed:"Gain 30 Magical Power and 10% Damage Mitigation"
                }
            },
            {
                id: "chug",
                name: "Chug",
                type: "1",
                description:
                    "Bacchus takes a drink from his jug, healing him and giving him additional Buffs.",
                specs: {
                    "Drunk-O-Meter":"40%",
                    "Magical Power":"0/7/14/21/28/35",
                    Heal:"0/22/29/36/43/50",
                    Protections:"0/15/20/25/30/35",
                    Duration:"6s"
                },
            },
            {
                id: "belly_flop",
                name: "Belly Flop",
                type: "2",
                description:
                    "Bacchus jumps into the air and, not so gracefully, comes slamming to the ground belly first, knocking all enemies into the air and dealing damage. If he is Tipsy, all enemies are also Slowed after they land.",
                specs: {
                    Damage: "90/135/180/225/270 (+70% of your Magical Power)",
                    "Slow Duration":"2s",
                    Slow:"20%"
                },
            },
            {
                id: "belch",
                name: "Belch of the Gods",
                type: "3",
                description:
                    "Bacchus lets out an obnoxiously loud belch, doing damage every .5s for 2s and reducing enemy healing. Lane Minions take a small amount of extra damage. If he is Tipsy, enemies are Stunned for 1s. Bacchus is immune to knockback for the duration.",
                specs: {
                    "Damage per Tick": "30/45/60/75/90 (+15% of your Magical Power)",
                    Stun:"1.1/1.2/1.3/1.4/1.5s",
                    "Healing Reduction Duration":"5s",
                    "Minion Damage per Tick":"3/4/5/6/7",
                    "Healing Reduction":"40%"
                },
            },
            {
                id: "intoxicate",
                name: "Intoxicate",
                type: "4",
                description:
                    "Bacchus smashes his jug of wine on the ground, intoxicating all nearby enemies and doing damage. If he is Smashed, Bacchus also gains a Magical Power Buff because of his anger over his lost wine!",
                specs: {
                    "Damage": "230/300/370/440/510 (+60% of your Magical Power)",
                    "Magical Power Buff": "20/30/40/50/60",
                    "Intoxication Debuff Duration":"4s",
                    "Buff Duration":"5s"
                },
            },
        ],
    },
    {
        id: "mulan",
        name: "Mulan",
        slogan: "The Ascendant Warrior",
        bio: "There are many stories about the girl who became a hero. Most are embellished, the events polished to a legendary sheen. They say that Hua Mulan was blessed, that her bow and blade were gifts of the gods. That she was wise beyond measure, and stronger than a hundred warriors, for her heart was pure. That she became the sworn sister of the king’s daughter. That she returned home and married a prince, or perhaps a farmer.",
        category: "warrior",
        combat_type: "melee",
        pantheon: "chinese",
        color:"#da611f",
        type: "physical",
        abilities: [
            {
                id: "training_arc",
                name: "Training Arc",
                type: "passive",
                description:
                    "Mulan utilizes a Sword, Spear and Bow with her abilities and can gain Skill towards them by damaging enemy gods. Her expertise in each weapon provides different bonuses. Mulan also gains a buff every 10 seconds that reduces the cooldown of the next non-ultimate ability used by 2 seconds.",
                specs:{
                    "Sword Skill":"500/ 1500/ 6500 damage done",
                    "Bow Skill":"200/ 500/ 2000 damage done",
                    "Spear Skill":"500/ 1500/ 6500 damage done",
                    "Skill gain for Minions":"30%"
                }
            },
            {
                id: "cross_strike",
                name: "Cross Strike",
                type: "1",
                description:
                    "Mulan swings her sword with precision, striking twice and dealing damage to all enemies hit. Skilled - Mulan gains an Attack Speed increase after using this ability. Adept - Mulan strikes a third time in a large cone in front of her. Mastered - Mulan gains 10% Attack Speed.",
                specs: {
                    "Damage per Hit:": "75/95/115/135/155 (+30% of your Physical Power)",
                    Duration:"6s",
                    "Attack Speed":"25%"
                },
            },
            {
                id: "spear_thrust",
                name: "Spear Thrust",
                type: "2",
                description:
                    "Mulan brings forth her spear striking in front of her, dealing damage and slowing all enemies hit. Skilled - Mulan heals for up to 3 enemies hit. Adept - Mulan strikes a second time further in front of her, dealing bonus damage if she hits the same enemy. Mastered - Mulan gains 5% Power.",
                specs: {
                    "Damage per Hit": "100/135/170/205/240 (+35% of your Physical Power)",
                    "Duration": "3s",
                    "Bonus Damage":"10/20/30/40/50 (+10% of your Physical Power)",
                    Slow:"25%",
                    Heal:"12/23/34/45/56"
                },
            },
            {
                id: "grapple",
                name: "Grapple",
                type: "3",
                description:
                    "Mulan readies herself and fires an arrow with a rope attached to it. If she hits an enemy god she stuns them, dealing damage and pulling them towards her while dashing and hitting them again for extra damage. Skilled - Mulan gains a Protection buff after hitting an enemy god. Adept - Mulan is able to dash to walls. Mastered - Mulan gains 5% Movement Speed & 5% Protections.",
                specs: {
                    "Arrow Damage": "90/135/180/225/270 (+50% of your Physical Power)",
                    "Bonus Damage": "40/50/60/70/80 (+20% of your Physical Power)",
                    Duration:"6s",
                    "Stun Duration": "1s",
                    "Protection Increase":"25/30/35/40/45"
                },
            },
            {
                id: "divine_mastery",
                name: "Divine Mastery",
                type: "4",
                description:
                    "Mulan brings forth her entire arsenal dashing forwards with sword slashes, dealing damage and rooting enemies for 1s. Then, Mulan uses her new divine energy to knock up enemies with her spear before firing a large projectile attack with her bow. Dealing damage with any part of this ability gains Skill towards the weapon used. Mulan also gains Protections for the duration.",
                specs: {
                    "Sword Damage":"80/130/180/230/280 (+60% of your Physical Power)",
                    "Arrow Damage": "175/225/275/325/375 (+60% of your Physical Power)",
                    "Spear Damage": "100/140/180/220/260 (+40% of your Physical Power)",
                    "Protection Increase":"30%"
                },
            },
        ],
    },
];