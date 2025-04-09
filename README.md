# The Dashboard
This is a dashboard application I created as a turn in for my Frontend Development class.

I organized my code in a higly modular way, with every main feature in the application in its own module, which makes it easy to work with and debug.
If there is an error with the weather part of the dashboard, you go look at the weather.js file for example.

I try to write as clean code as possible with as good and clear names as possible.
At first I wrote the modules without using ES6 class syntax, I then just for the sake of it and for some practice rewrote a few of them using ES6 class syntax.
I wouldn't say one way is better than the other when it comes to JavaScript (some like OOP and some like Functional programming for example), I do apprieciate both though.
The ones I rewrote to use class syntax I wrote as if i had an interface that mandated the implementation of a run method, which I would have created if i used typescript (js class inheritance didn't make sense in my case as each run would be different, so none would use the inherited implementation anyway)

So I would say some strengths of my code are:
- Highly modular, which makes it easy to debug and extend with new features
- Meaningfull naming, following and understanding the code should not be hard
- I try to keep the code clean and divide things up in different functions/methods
- I use strong encapsulation in my classes with # private fields, but also with my non class based modules by only exporting the functions that should be run.

Some things I could improve on:
- The error handling, right now errors are displayed with alerts and console. I could have implemented some good looking messaging on the page itself
- The location permission prompt is popping up directly when you go to the site, this could confuse users, as it is not clear it is about the weather, I could have had a button to click in the weather widget that initiated the geolocation stuff
- Further accessibility improvements
- In a real world production project I would probably have chosen one approach for my modules (here i used both class-based modules and non class based just to practice both ways)


I did not get full score on best practices because of the point about the location permission prompt mentioned above:

![Image](https://github.com/user-attachments/assets/1dc1a262-2084-4666-8f10-75539d46e733)
