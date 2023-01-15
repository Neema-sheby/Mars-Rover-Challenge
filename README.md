# Mars Rover Challenge

## Description

The task is to move rovers on the surface of Mars. The surface is represented by a Plateau which is a square grid. Rovers navigate the plateau using their special cameras and robot arms to collect samples back to planet Earth. Currently there are two Rovers: Rover1 and Rover2, available in mars for sample collection. The position of Rover is represented by an x and y axis and the direction at which it's facing by North(N), South(S), East(E), West(W). So, if the rover is at postion (0,0) facing North. The input will be 00N.

## Inputs to the program:

### First Line of Input to the Program

The first line of input is to select the Rover to move.

```
Select the Rover to move 🚗 from below :
1 - Rover1 🚗
2 - Rover2 🚗
Enter the option number of Rover ➡️  :
```

The first line inputted into the program represents the upper-right coordinates of the Plateau.

`5 5`

This Plateau has maximum (x, y) co-ordinates of (5, 5).

N.B. Assume that the lower-left coordinate is (0, 0).

3. Enter the moves of the Rover

Instructions to move Rove:
A string of letters mentioned below are used to move or rotate the Rover.
L - Spins the Rover 90 degrees Left without moving from the current coordinate point.
R - Spins the Rover 90 degrees Rightwithout moving from the current coordinate point.
M - Moves the Rover forward by one grid point, maintaining the same heading/orientation.
Movement Rules:
Both Rovers cannot move at the same time. The first Rover need to finish moving first before the second one can move.
Output:
Output will be the final position of the Rover with the direction it's facing.
