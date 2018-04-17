var potionArray= [];

function potion(name, effect, value){
	this.name=name;
	this.effect=effect;
	this.value=value;
	potionArray.push(this);
}

new Potion("Healing",
			"This potion’s red liquid glimmers when agitated.  Drink to regain 2d4 + 2 hitpoints.",
			25
			)
new Potion("Animal Friendship", 
		"When you drink this potion, you can cast the animal friendship spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.",
		50
		},
		name: "Fire Breath": 	
		{effect:"After drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet of you. The target must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a sailed save, or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed. The potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
		value:100
		},
	"Giant Strength": 
		{effect:"When you drink this potion, your Strength score changes to 25 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion’s transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. The potion of frost giant strength and the potion of stone giant strength have the same effect.",
		value:100
		},
	"Growth": 			
		{effect:"When you drink this potion, you gain the “enlarge” effect of the enlarge/reduce spell for 1d4 hours (no concentration required). The red in the potion’s liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.",
		value:50
		},
	"Greater Healing": 
		{effect:"This potion’s red liquid glimmers when agitated.  Drink to regain 4d4+4 hitpoints.",
		value:50
		}
	"Finn's Cure-All": 
		{effect:"This potion removes effects such as charm, petrification, curses (including attunement to a cursed magic item), any reduction to the target's ability scores, or an effect reducing the target's hit point maximum",
		value:500
		},
	"Glibness": 
		{effect:"For one hour, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.",
		value:100
		},
	"Poison":
		{effect:"This concoction looks, smells, and tastes like a potion of healing or other beneficial potion. However, it is actually poison masked by illusion magic. An identify spell reveals its true nature.If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.",
		value:50
		},
		"Fire Resistance": 
			{effect:"When you drink this potion, you gain resistance to fire damage for 1 hour.",
			value:50
			},
		"Cold Resistance": 
			{effect:"When you drink this potion, you gain resistance to cold damage for 1 hour.",
			value:50
			},
		"Force Resistance": 
			{effect:"When you drink this potion, you gain resistance to force damage for 1 hour.",
			value:50
			},
		"Lightning Resistance": 
			{effect:"When you drink this potion, you gain resistance to lightning damage for 1 hour.",
			value:50
			},
		"Necrotic Resistance": 
			{effect:"When you drink this potion, you gain resistance to necrotic damage for 1 hour.",
			value:50
			},
		"Poison Resistance": 
			{effect:"When you drink this potion, you gain resistance to poison damage for 1 hour.",
			value:50
			},
		"Psychic Resistance": 
			{effect:"When you drink this potion, you gain resistance to psychic damage for 1 hour.",
			value:50
			},
		"Radiant Resistance": 
			{effect:"When you drink this potion, you gain resistance to radiant damage for 1 hour.",
			value:50
			},
		"Thunder Resistance": 
			{effect:"When you drink this potion, you gain resistance to thunder damage for 1 hour.",
			value:50
			},
	"Love": 
		{effect:"The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed. This potion’s rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart.",
		value:100
		},
	"Clairvoyance": 
		{effect:"When you drink this potion, you gain the effect of the clairvoyance spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.",
		value:250
		},
	"Diminution": 
		{effect:"When you drink this potion, you gain the “reduce” effect of the enlarge/reduce spell for 1d4 hours (no concentration required). The red in the potion’s liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.",
		value:250
		},
	"Superior Healing": 
		{effect:"This potion’s red liquid glimmers when agitated. Drink to regain 8d4 + 8 hitpoints.",
		value:250
		},
	"Heroism": 
		{effect:"For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the bless spell, which means whenever you makes an attack roll or a saving throw before the spell ends, you can roll a d4 and add the number rolled to the attack roll or saving throw. This blue potion bubbles and steams as if boiling.",
		value:250
		},
	"Invulnerability": 
		{effect:"Drink to regain 2d4 + 2 hitpoints.",
		value:1000
		},
	"Mind Reading": 
		{effect:"When you drink this potion, you gain the effect of the detect thoughts spell (save DC 13). The potion’s dense, purple liquid has an ovoid cloud of pink floating in it.",
		value:250
		},
	"Flying": 
		{effect:"When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you’re in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion’s clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
		value:1000
		},
	"Invisibility": 
		{effect:"This potion’s container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.",
		value:5000
		},
	"Longevity": 
		{effect:"Drink to regain 2d4 + 2 hitpoints.",
		value:10000
		},
	"Speed": 
		{effect:"When you drink this potion, for one minute your speed is doubled, you gain a +2 bonus to AC, you have advantage on Dexterity saving throws, and you gain an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. When the effect ends, you can’t move or take actions until after your next turn, as a wave of lethargy sweeps over you. The potion’s yellow fluid is streaked with black and swirls on its own.",
		value:1000
		},
	"Vitality": {effect:"Drink to regain 2d4 + 2 hitpoints.",
		value:1000
		},
	"Supreme Healing": 
		{effect:"This potion’s red liquid glimmers when agitated. Drink to regain 10d4 + 20 hitpoints.",
		value:1000
		}
	"Water Breathing": 
		{effect:"You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.",
		value:100
		}
}
