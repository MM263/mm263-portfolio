---
title: 'UX↑: Checkout Redesign'
date: '2019-02-21T22:40:34.169Z'
spoiler: Is it a radio button or a checkbox though?
---

import CreditCardForm from '../../../src/components/CreditCardForm.js';

Hi! In UX↑ series I am trying to level up↑ my UX skills by upgrading designs while describing my thought process.

Today I'll be taking on [/u/yosifqassim](https://www.reddit.com/user/yosifqassim)'s design of a checkout. Take a look!

![old-design](https://i.imgur.com/XKxrSyG.png)

This is the second iteration of a design by him, but there are still some things that we can improve.

## Credit Card Form

- First of all, we need to find a font that is similar to the original as we are working with a picture. Speaking of work, I find Work Sans a little bit more elegant while keeping the same serious tone. Also, let's keep things consistent - right now it seems to me that checkbox label uses some kind of condensed font and we will change it to Work Sans as well.
- Let's tone down the boldness a notch all over the place. There is no real need to make inputs fields and checkbox label bold.
- There are some inconsistencies in spacing in input fields. Let's fix that and align input values a little bit more towards the bottom.
- We also should capitalize second words everywhere, as it is the most common way to handle titles and buttons in English language.

There is something else that we could do with the form. I really appreciate Stripe's approach of a single line credit card input where cursor jumps between inputs (try it out, it's interactive):

<CreditCardForm />

It's cool, but this input is too long for our current design. It breaks the flow of our form. Nevertheless, let's put it in anyway and look at where we stand now.

![redesign-progress2](https://i.imgur.com/XHxlOkJ.png)

Now our form is all over the place placement-wise. We need to change our layout to make the use of space more efficient.

- There is way too much free space on the left and it diverts attention from the checkout. Let's shrink it.
- Currently, the "Pay Now" button doesn't fit in the form's flow. It just weirdly hovers at the center. As it is the main action of this form it would be suitable to make it take 100% width of a form.
- The "Pay Now" button would benefit from the shadow as it often helps users to distinguish that an element is actionable.

We should also tighten up the form itself and move it closer to the center.

![redesign-progress3](https://i.imgur.com/gD3AnC8.png)

Let's look at the "Save for another purchase" checkbox. We can see that instead of a checkmark in the box there is a dot-square thingy. I wasn't aware that I feel so strongly about sticking to conventions. Allow me to present my case on avoiding being unnecessarily smart.

---

When designing for the web we are all unfortunately stuck to the same design language that users were taught over the years. Everybody knows how a link looks. It is usually underlined, its color differs from the main text color, it may have a small chain icon to the left or to the right. The same goes for inputs (blinking cursor and a different background, border, usually with a placeholder), selects (a pre-filled input field with an arrow down on the right), buttons (square and bright with short action text). Users become confused without those identifiers, however small they can be.

So we keep things easy and recognizable and often that means that we should adhere to the common design language of the web. We don't make users think.

In this case, it means that the checkbox should stay a checkbox. Why?

- Expected behavior of radio-button is that once it is clicked - it can't be unclicked, unlike a checkbox.
- This can create a false impression of the weight of the decision to click it or not. It should be an easy decision, but we make user think of the consequence of the click and we should avoid that.
- If it is checked by default it can create a false impression that the developer did a choice for a user and said user has no way to undo it. It is not true, he can. But radio button made him think.
- The absence of other radio-button-looking elements with this checkbox can look confusing - we don't want that.
- If one makes another form with the current design and some checkboxes and radio buttons are by chance close to each other squareness and roundness becomes the only distinctive difference between them. This is not good for skimming your page and users usually skim forms before filling it.

<div style={{ userSelect: 'none', display: 'flex', flexDirection:'column' }}>
  <label htmlFor="lonely-radio">
    <input id="lonely-radio" type="radio" value="lonely-radio" />
    I'm a lonely radio-button, I can't be unchecked 😪
  </label>

<label htmlFor="happy-checkbox">
<input id="happy-checkbox" type="checkbox" value="happy-checkbox" />
I'm a happy checkbox because you can uncheck me! 😁
</label>

</div>

---

_Rant over!_ Let's make a radio button great again by making it an actual checkbox.

The next thing I want to bring attention to is two huge buttons at the top. They are big, which means they detract attention from the checkout itself. Essentially, they are just big radio buttons. If we wanted to leave them our best option would be to make them full-blown tabs or even just simple radio buttons, but we don't want to leave them.

PayPal offers only one way to use it on your website - via a popup that is called with a button.

![paypal-example](https://www.paypalobjects.com/digitalassets/c/NA/web/canvas/paypal-checkout/Browser2-checkout-popup2.png)

Maybe the best way to use PayPal would be to make a step before this one, where user chooses how they want to pay. So, for now, we replace big radio buttons with a simple header and assume that user selected credit card checkout on the previous screen.

One last thing for the current iteration is making the picture of a card more useful. Right now its only function is to, maybe, remind user that they are going to buy something. Let's make it useful by displaying user inputs on it. That means that we must get rid of tilt, unfortunately.

![redesign-progress4](https://i.imgur.com/RC0fsVg.png)

We are finished with moving and removing stuff and now our checkout looks a bit generic due to taking a lot of cues from Material Design and general flatness. I thought of a few ways to spice it up a notch.

First of all, let's expand our background color on the left and change it to a more neutral one. Its current color introduces stark contrast that diverts attention from a form.

The second thing is making the card's background more colorful. Let's use [Trianglify](https://trianglify.io/) to generate an abstract background and to apply blur on top of it. It is now beautiful _and_ we made it more useful than just displaying the picture (albeit the pretty one).

![redesign-progress5](https://i.imgur.com/lqXhAOv.png)

So, is my interpretation of this piece of a checkout form objectively better? The answer is a resouding **no**.

The decision behind it is not the matter of how good it looks, how useful it is at all. It is the matter of the research. Previously I mentioned that things can divert said attention from an important target. In our case our goal is user pressing a "Pay Now" button and this poses a question: Would any element in the place of card be detrimental to our goal? This question is pretty simple. We don't know, _unless_ we test it on real users.

Ultimately we shouldn't just make a design and leave it at that. In this case, for example, one could setup an A/B testing environment. It means that we would serve the part of our users the design with a card and some another interpretation of it to others. We pick a success metric, such as number a checkouts and after a period of time compare which design did better. After that one should iterate on a design that won and so on.

Moving on.

Now, we can clearly distinguish interactive and important elements on the page. However, there is one more thing left for us to tweak. We assumed that the user selected a credit card checkout earlier, so this form has a few steps. That is why I think the stepper would be appropriate to indicate where we are and how many steps are left while filling empty space of the form at the top.

Another bonus is that we can eliminate our back button because stepper is interactive and user can navigate steps without vague back buttons.

![redesign-progress6](https://i.imgur.com/O3V3pWs.png)

The last thing we did is trimming unnecessary white space because I imagine that this kind of form would fit best somewhere in the middle of the page.

---

## Conclusion

It's very important to recognize the importance of iterating when it comes to any creative work. While one can come up with something nice on the first try, there is a chance that you can improve what you did. For example, I am currently writing this on the day after I finished our final iteration and I already can imagine some things that we could make better (e.g. use of space could use some work, common sense tells me that a new iteration of a card could be more detrimental than a picture). So, taking a break from work helps me to look at it with a fresh eye and I encourage you to do so too. After that, iterate, test and iterate again - this is how I think, that great designs are made.
