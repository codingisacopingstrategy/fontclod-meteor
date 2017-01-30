Collaborative Fontclod Proof-of-concept
=======================================

![An animated screenshot](https://raw.githubusercontent.com/codingisacopingstrategy/fontclod-meteor/master/screen-gif.gif)

Today most font editing applications are desktop applications. The Fontclod
proof of concept showed convincingly that a modern browser can provide the
graphical user interface for font editing. Yet what are the unique selling
points of a web stack for font design? This repository aims to show that
today’s web technologies make it relatively easy to add collaborative features
to such an application.

## Technology

This example app uses Meteor to make fontclod’s original P.O.C. a realtime
collaborative app: multiple users can now drag the points and in this way draw
together.

Meteor is an integrated set of technologies that make it easier to write apps
that replicate state across multiple users in realtime. It also allows re-use
of JavaScript code across the front- and the back end.

## Running

Make sure you’ve installed [Meteor](https://www.meteor.com/). In the terminal,
navigate to the folder with `fontclod-meteor` and run the following command:

    meteor

You can then access the application by visiting the following page in your
browser: <http://localhost:3000/>
