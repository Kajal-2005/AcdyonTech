**Why this approach instead of the obvious one?**

The easy route was a light mode page with a feature list and a screenshot. I didn't go that way because that's what every other landing page looks like and nobody remembers it. I kept it dark only because the people using a changelog tool are mostly developers who already live in dark mode. Making it fully dark meant I could design every color as one system instead of maintaining two themes. The bigger decision was putting a real interactive widget in the demo section instead of a screenshot. The widget on this page actually filters entries when you click the buttons so you can see it working before you even think about signing up. That felt more convincing than any copy I could write.


**One trade-off I made because of the time limit?**

The email form at the bottom does not actually send anything. It validates your email and shows a success message but nothing gets stored anywhere. If I had more time I would connect it to something like Formspree or a small serverless function with an email confirmation. I would also add basic spam protection so the same address cannot submit multiple times. Right now it is just a UI that looks like it works and that is worth being upfront about.


**Where I used AI and what I checked myself?**

I used AI to help write the HTML structure, the CSS, and the JavaScript. It got the base done fast. I personally rewrote all the copy because every headline and description needed to sound like a real product, not a template. The line that says measured on our own machine on the 40% faster claim is something I added on purpose because AI would never write that and I think it builds more trust than a clean round number. I also tested the filter buttons in the widget at 390px width, changed the easter egg from a Konami code to hovering the logo five times because the Konami sequence was too hard to trigger, and checked every section in Chrome DevTools at mobile width to make sure nothing overflowed. The no fake testimonials rule was my own call. Fake social proof is easy to spot and it makes everything else on the page feel less believable too.
