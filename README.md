# Ping Pong Friday Project

#### _Ken Rutan's Ping Pong Page, March 31th, 2017_

#### By _**Ken Rutan**_

## Overview

This website will allow a user to enter a number, and from there generate a list of numbers from 1 to the number that the user entered.  For every third number, the site will replace it with "ping" and for every fifth number, the site will replace it with "pong."  If a number is a mutiple of both 3 and 5, the site will generate the input "pingpong."

## Specifications

For any positive, integer input:

* Take the user's input and acknowledge that it has been received.
  - Example Input: '5'
  - Example Output: 'Input Success'
* Take the user's input, and feed it to a function that returns every number below it:
  - Example Input: '7'
  - Example Output: '1, 2, 3, 4, 5, 6, 7'
* Implement an element within the function which pulls out numbers that are multiples of 3 and replaces them with ping.
  - Example Input: '10'
  - Example Output: '1, 2, ping, 4, 5, ping, 7, 8, ping, 10'
* Implement another element within the function which pulls out numbers that are multiples of 5 and replaces them with pong.
  - Example Input: '14'
  - Example Output: '1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14'
* Ensure that numbers that are multiples of both 3 and 5 are replaced with a single entry 'pingpong' rather than multiple separate entries.
  - Example Input: '15'
  - Example Output: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong'
* Ensure that the user has inputted nothing but numbers into the input.
  - Example Input: 'abcdef'
  - Example Output: 'That is not a positive integer.'

## Installation

Locate the git repository of this project.
Clone or download the git repository onto your desktop.
Locate index.html file.
The html file should be self-executing.
If it is not, open it in the browser of your choice.

## Usage

Input a number and click "Return a list of numbers."  The program should automatically generate the required list.

## Known Bugs
There are currently no known bugs in these HTML, CSS, Bootstrap, Javascript or jQuery files.

## Support and contact details

For further support, please contact Ken Rutan through his Github account. E-mail will not be listed here as this README is publicly displayed.

##Technologies Used

This website was constructed using HTML, CSS, and javascript as well as Bootstrap and jQuery elements.

## License

Copyright (c) 2017 Ken Rutan.  This software is licenced under the MIT License.
