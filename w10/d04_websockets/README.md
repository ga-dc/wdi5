# W10D04 Websockets

## LOs

- Compare the Request/Response model of HTTP with the bi-directional model of Websockets
- Use the Socket.io library to write a client & server that communicate over Websockets

## Story Time!

- INeedAPrompt.com
  - One day, caught a lot of attention on Reddit
    - It made me happy. The end.
- BUT THEN!
  - I got an e-mail from my hosting provider at 1:12AM:

> System administration was forced to suspend your site in an emergency to prevent server and system overloads. 

> The suspension was placed due to an extremely large amount of traffic to ineedaprompt.com/counter.txt

> At the time of suspension, we were seeing over 1.86 million hits.

- Had a click counter: "Number of prompts generated"
  - Was making an AJAX request every second that was POSTing to a script, telling it to update this `counter.txt` file, and then showing the new number of clicks
  - That's 3600 extra requests per hour PER USER.
- I fixed by having the clicks update only when you refresh the page.

## HTTP

- AJAX uses HTTP
- "PULL"
  - You "pull" information from the server
    - You make a request, and you get something back
  - It's as if to have a conversation over the phone, whenever you wanted to say something you had to hang up and dial again
  - That sounds inefficient, right?
  - **Turn and talk**
    - Why do we do things this way?
    - What would the alternative be?

## Websocket

- Javascript can also use Websockets
- "PUSH"
  - Instead of having to make a new request every time you want information from the server, it can "push" information to you
  - Opens a connection between two computers and *maintains* it
  - It's as if you just stayed on the phone with the person

- **We do**
  - List out the pros and cons of Websockets and HTTP

- Expensive in different ways
  - HTTP, you have to worry about bombarding your server with requests
  - Websocket, you have to worry about your server having too many connections

- Better for different things
  - HTTP is better for sending big packets of data
    - Inefficient for small packets of data, since you send a bunch of data each time as headers
  - Websocket is better for sending small packets of data really frequently
  

## TCP/IP

- Fun fact: There are LOTS of different web protocols. These all fall under the umbrella of TCP/IP
  - Transmission Control Protocol/Internet Protocol
  - http://en.wikipedia.org/wiki/Category:Application_layer_protocols
  - Familiar faces
    - Internet Relay Chat (IRC)
    - Bitcoin
    - Domain Name System (DNS)
    - Internet Message Access Protocol (IMAP)
    - Post Office Protocol (POP)
    - Tor

## Let's look at some Websocketing!

- Firebase
  - Provides a websocket server
  - Looking at the pricing
    - https://www.firebase.com/pricing.html
    - Pricing based on number of connections
    - HTTP servers, pricing based on gigabytes of bandwidth -- how much memory can be allocated to responding to requests
  - Log in (with Github!) and show memory
    - Formats everything as JSON, as opposed to having to use SQL
  - Let's test it out with **Tetris**!
    - https://sandbox-tutorial.firebaseapp.com/#-JplZswBra_s9Qsf_-0T
    - https://tpe3ogy8c3x.firebaseio-demo.com/
    - It's updating instantly!

## Socket.io

- A library for websockets, which we're going to use to make your server a websocket server
- Notice that you can make Websocket requests in both the front end and the back end:
  - http://socket.io/docs/

## You do
- Do their walkthrough to make a chat app!
  - Feeling adventurous? Do it using HBS, based on what we did yesterday!
- http://socket.io/get-started/chat/
- Solution
  - https://github.com/ga-dc/socket.io-chat

## What's the downside of what we just did?
- No data persistence `:(`
- Add in Mongo!
  - https://github.com/ga-dc/socket.io-chat/tree/mongo

## Make my server public!
- Notes to self:
  - Add `:3000` to end of URL

## If time left, connect to Firebase
