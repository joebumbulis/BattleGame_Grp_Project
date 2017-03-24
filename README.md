## Classic Battle Game

**Start New Journey (initializes new game)**

- input player name
- click new game button
---------- Basic Character
- Player Name
- Static Health = 1
- Static Life = 1



**Journey - Gives player options (choice 1 or choice 2)**
- Display choices for location
- Player picks location 1 or location 2
- Display choices for weapons
- (will weapon abilities be different? different hp?)
- Player picks weapon 1 or weapon 2



**Battle (based on choice1 or choice2)**
- Location 1 gets Enemy 1
- Player vs Enemy 1

- Location 2 gets Enemy 2
- Player vs Enemy 2

- Battle System
- Player has 2 Choices: Defend and Attack (buttons)
- WHEN player choices ATTACK or DEFEND
- WHAT: message will display if player wins or loses battle

**Life Determined by Health**
- Health determines if you get to battle again
- Display Health
- Life determines whether you win or lose game


**To Win, have most lives(determined by health)**
- display WIN or LOSE message

## WHAT WHEN
WHEN: home page loads
WHAT: <input> field is displayed
- button to start new game is displayed(disabled)


WHEN: user inputs name
WHAT: start button is enabled, input field removed, save name in variable for future use.

WHEN: when start button is clicked
WHAT: journey page loads, home page disappears, journey page only has 2 location buttons

WHEN: Location button is selected
WHAT: Location buttons disappear, location name is displayed, story text appears, Weapon Buttons Displayed

WHEN: Weapon button selected
WHAT: Story text appears, Next button displays

WHEN: Next button is clicked
WHAT: Journey remove, Battle page is displayed

WHEN: Battle page displays
WHAT: Story Text of who the enemy is, 2 user action buttons displayed

WHEN: User action Button clicked
WHAT: Run Probability/action/defend function runs

WHEN: Probability function is called
WHAT: display result in DOM

WHEN: result is displayed
WHAT: go to end page

### Narrative Arch with Copy Content
#### Overarching Story
* Opening Screen:
Game Name: "Motherflippin' Rap Battle"

Welcome to your one shot, this opportunity comes once in a lifetime. Your entire life, you've dreamed of entering into a rap battle.

What's your rapper name? [enter name into input]

It's the weekend. You ain't gone nothin' to do, so you go out with your friends. This is a rare moment, as you spend almost all of your time either working your day job or spittin' mad flows into the mirror as you dream about one day entering into a rap battle.

Button "Go out with friends"

* Location page:
You and your gaggle of buds drive up to Emos in your 2008 Corolla. As you are walking up to the club, your like, What up? I'm so pumped about my stuff from the thrift shop. Ice on the fridge, it's so frosty that people by like, "Yams, that a cold mass donkey."

You notice some strange activity in the alley way behind Emos, do you enter the club or go into the alley.

Two buttons: "Alley" & "Club"

Wow, you realize you've happened upon a rap battle! It's your moment. Do you choose to bust out your mad flows or your dope beatboxing?

Two buttons: "Mad Flows" & "beatboxing"

* Rap Battle:

'user name' is up against 'enemy name [name is determined by location]'.

Do you decide to rap battle to attack your opponent 'ad hominem' style or using observational flows. Ad hominem will attack your opponents personally. Observational flows will just make fun of the situation at large.

Two buttons:
"Ad Hominem" & "Observational"


Rap Battle - User enters into a rap battle with either the Hiphopopotamus (located in the back alley behind Emos) or the Rhymenocerous (located inside Emos).
[image of opponents](http://img13.deviantart.net/ef22/i/2014/002/3/4/hiphopopotamus_vs_rhymenocerous_by_renegade21-d70gv3v.jpg)

* Win/Lose page
Initial text:
"Win/Lose Annoucenemnt based" on the outcome of the battle.

Win: "Boom! You're the motherflippin' Winna!"

Lose: "Wah-wah! Your palms were too sweaty, knees weak, arms too heavy,
you threw up your mom's spaghetti. Go home and practice, so you'll
be more ready."
