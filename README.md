# Mars Rover Challenge

## Description

We are going to move the Rovers 🤖 on the surface of Mars!. It's surface is represented by a Plateau which can be set as a square/rectangular grid as your preference. Rovers navigate the Plateau so they can use their special cameras 📷 and robot arms 🦾 to collect samples back to Planet Earth 🌏. Currently there are two Rovers: Rover1 and Rover2 landed on Mars ready to be navigated for sample collection. The position of Rover is represented by an X axis and Y axis. The direction at which it's facing is represented by North(N), South(S), East(E), West(W). So, if the rover is at postion `(0,0)` facing North. The input will be `0 0 N`.

## How to install and run the Project:

`npm install`

`npm run build`

`npm run start`

## How to run test:

`npm run test`

## Inputs to the program:

### First Line of Input to the Program

The first line of input is to enter the upper right coordinates of the Plateau assuming the lower left coordinates to be (0,0). eg: `5 5` or `10 8`

```
----------------------------------------------

Welcome to Mars 😊 !

----------------------------------------------

Enter the plateau grid 🏞️  for Rover to move (eg: 10 8) ➡️  :
```

### Second Line of Input to the Program

The second line of input is to select the Rover to move. Enter the option number of Rover - 1 or 2.

```
Select the Rover to move 🚗 from below :
1 - Rover1 🚗
2 - Rover2 🚗
Enter the option number of Rover ➡️  :
```

### Third Line of Input to the Program

The third line of input is the Rover’s position, which is represented by two integers representing the X and Y coordinates and a letter representing, where the Rover is facing (its orientation). eg: `1 2 N`

```
You've selected Rover1 🚗 😊

----------------------------------------------

Enter the coordinates and orientation of Rover1 🚗 (✅ eg: 12N - Here 1 is the x coordinate, 2 is the y coordinate and N is the orientation) ➡️  :
```

### Fourth Line of Input to the selected Rover

The fourth line of input is a string of letters representing the instructions to move the Rover around the Plateau: eg: `MMMLLLMMR`

```
----------------------------------------------

Now Rover1 is ready to move 🚗 🚗 🚗

----------------------------------------------
Enter M 🚗 to move the Rover forward by one grid point
Enter R ➡️  to rotate the Rover 90 degrees right
Enter L ⬅️  to rotate the Rover 90 degrees left

----------------------------------------------
Enter moves of Rover1 eg: MLRMMLR ➡️ :
```

## Instructions to move Rove:

A string of letters mentioned below are used to move or rotate the Rover.

```
L - Spins the Rover 90 degrees Left without moving from the current coordinate point.
R - Spins the Rover 90 degrees Rightwithout moving from the current coordinate point.
M - Moves the Rover forward by one grid point, maintaining the same heading/orientation.
```

## Movement Rules:

Both Rovers cannot move at the same time. The first Rover need to finish moving first before the second one can move.

## Output:

Output will be the final position of the Rover with the direction it's facing.

## Example Test Case

### Lines of Input to the Program:

`10 8`

`1`

`12N`

`LMLMLMLMM`

### Expected Output:

```
Rover1 🚗  moved to 🚩 🚩 🚩  ( 13N ) from initial position ( 12N ) with moves 🕹️  ( LMLMLMLMM )
```
