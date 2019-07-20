This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Purpose

This project is meant to be a way for me to familiarize myself with several technologies that I have never touched but have seen used in various code bases spariously. These technologies (mostly libraries) include Redux, React-Redux and Canvas.

As I work on this project I intend to make baby steps along the way to building out this small video game. As such I will have some minor milestones that I wish to achieve and which I hope to guide me.

This project does use React though right now and even has React-Redux bindings in some components. However I will heavily be using the Canvas API for the game plays UI. If I expand this project out so that I have things like saving, main-menu, etc then I might use React more and also might incorporate React-Router for these screens.

### Game Concept

Essentially this game will be a type of "bullet hell" where you have a main character that can move left+right and an enemy "boss" which tries to kill you with a lot of bullets.

The gameplay itself will be much simpler then bullet hells such as Touhou.
Instead of moving on a horizontal plane the character can "lean" left, right or not at all. The boss does not move at all. Both characters have 1 bullet to fire at each and thats it. If either miss the timer has to run out before a draw is called.

This might not sound like much of a "bullet hell" at all. In fact it sounds closer to a quick draw game which is what the title implies.. but here is the catch. Your is a GOD. Before a draw can be called (before the timer goes out) your opponent can cast fire, lightning, wind and has an impentrable shield. Your only chance of surviving is to wait for a draw to be called... or if your 1 bullet try to shoot down the god while their gaurd is down.

It all sounds pretty epic but as cool of a concept (at least to me) it is, this again is just a excersise for me to learn new technologies. 😏

### Milestones

- Render the Canvas and render some rects on it
- Implement "pathing" mechanism where after a projectile is created it goes along a certain path from its initial positoin.
- Render the "mainProtagonist", the god "Helios", and some example projectiles (hit boxes only).
- Implement collision detection. Implement death screen.
- Add "scripts" for the god "Helios" so that he has a generates pre-defined projectiles.
- Bind keyboard controls to "mainProtagonist" (implement the lone shoot you have.)
- Add a main menu (so your just not thrown into the game.)
- Game Over Screen - You Win Screen - DRAW Screen

### Extras

Future ideas for this project might include extras "gods", extra playable characters and if we have those then maybe an overworld where you can walk around?

The project will effectively be "complete" though if all of the milestones are done.
