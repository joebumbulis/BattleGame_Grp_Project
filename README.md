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
