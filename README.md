# Rock Paper Scissors 
~~~
This is a simple, console based rock paper scissors game. I created this project for three core reasons:

1. To practice writing simple functions in Javascript.
1. To understand the process of problem solving. 
1. To have write a simple program that can be iterated over time. 
~~~

## Introduction
---
Rock Paper Scissors

A hand game originating from Japan is played between two people often used a fair choosing method similar to grasping straws or a coin toss. [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors).

## Gameplay
---
Rock paper scissors is a zero sum game with the outcome of win, lose or draw. Using thier hands, each player simultaneously makes a fist and bangs it on top on thier opposite palm three times while yelling "Rock," "Paper" and "Scissors," On "Scissors" each player will forms one of three shapes with one hand as below:

### Rock
![closed fist symbolizing rock](https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80 "Closed fist symbolizing 'Rock'")

### Paper

![Open hand with fingers spread symbolizng paper](https://images.unsplash.com/photo-1614032686158-b880f7e82c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80 "Open hand with fingers spread symbolizng 'paper'")


### Scissors

![closed fist with first and second fingers extended in a V shape symbolizng scissors](https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80 "closed fist with first and second fingers extended in a V shape symbolizng 'scissors'")

### Rules
There are three combinations possible to win:
~~~
1. Rock beats, or "Smashes" Scissors.
1. Paper beats, or "Covers" Rock.
1. Scissors beats, or "Cuts" Paper.
1. Any identical guesses are ruled a tie or draw.
~~~

![Rock Paper scissors diagram](https://cdn.vox-cdn.com/thumbor/D_2XiTfAk5x7VXxfYIJ3bZNUByw=/0x0:2429x2396/920x0/filters:focal(0x0:2429x2396):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3488502/shutterstock_106919999.0.jpg)

## Logic

- User will be prompted to enter rock, paper, or scissors. This will be case insensitive. 
- The computer will generate a random response of rock paper or scissors. 
- The responses will be compared based on the aformentioned [rules](#Rules).
- The guess from the user and random guess from the computer will be compared based on the rules to determine a winner or a draw. 
- The player with 3 of five wins will be declared the victor. 

## Technology

Javascript

- This program will initially run in the console. 
- Future iterations will include a GUI.