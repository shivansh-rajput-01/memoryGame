# Multiplayer Memory Match Game

A competitive two-player brain game built with Vanilla JavaScript. Unlike standard memory games, this project features a turn-based system where players compete to find matches and earn the highest score.

## Project URL
https://shivansh-rajput-01.github.io/memoryGame/

## Game Logic & Rules
- **Two-Player Mode:** Players take turns to flip two cards.
- **Match Bonus:** If Player 1 finds a match, their score increases by 1, the matched cards are removed from the board (keeping other positions intact), and Player 1 gets another turn.
- **Turn Switching:** If the cards do not match, they automatically flip back, and the turn passes to Player 2.
- **Strategic Persistence:** The board layout remains static as cards are removed, challenging players to remember the exact positions of hidden icons.

## Key Features
- **Advanced State Management:** Handles player turns, scores, and consecutive chance logic.
- **Dynamic DOM Updates:** Removes matched elements while maintaining the grid structure.
- **Automated Timeouts:** Cards flip back automatically on a mismatch to ensure fair gameplay.
- **Competitive Scoring:** Real-time score tracking for both participants.

## Technologies Used
- **HTML5:** Game structure and grid layout.
- **CSS3:** Card flip animations and UI styling.
- **JavaScript (Vanilla):** Core multiplayer logic, turn-switching, and match detection.
- **GitHub Pages:** Deployment and hosting.

## Installation and Local Setup
1. Clone the repository:
   `git clone https://github.com/shivansh-rajput-01/memoryGame.git`
2. Open `index.html` in your browser to start playing.

## Author
Developed by Shivansh Rajput  
GitHub: https://github.com/shivansh-rajput-01
