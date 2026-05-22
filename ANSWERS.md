#### Thank you so much for giving me the opportunity.
#### I tried my best to do this in less time, as one day was spent in my lab exam.
#### Hope full for the next steps.
#### If I had a little extra time, i would have format this awswers.md well.
#### Kindly accept my appology for this.


## 1. How to run?

Follow these steps to get the project running locally on your machine.

**1. Clone the repository**
```bash
git clone [https://github.com/zaidy-mughal/Dynamic-Tip-Calculator.git](https://github.com/zaidy-mughal/Dynamic-Tip-Calculator.git)
cd Dynamic-Tip-Calculator
```

**2. Install dependencies**
```bash
pnpm install
```

**3. Start the development server**
```bash
pnpm dev
```

Boom! You have just run the project. Open the provided `localhost` link in your terminal to view the app.



## 2. Stack & design choices: Why did you pick this frontend stack for this task?
#### My stack for this task is ReactJs with tailwindcss.

When i saw the assesment title, i decided to go with HTML, CSS, and Vanilla JS.
Before start coding i read the document thoroughly, then i realised (and asking from AI and google) 
using vanilla JS for interconnected variable to manage state will become spaghetti.

I choosed this stack because this project requires 3-4 inter-dependent inputs and multiple result fields to update. 
I can make a component and use that calculator component in any other app.
React is build for complex Reactive states.

Drawback: - React comes with extra tools (build) and library overhead.

Also I have not worked with other frameworks except ReactJS, I have to skip all other frameworks due to the deadline of this Assessment.


## 3. Responsive & accessibility:

This app behaves responsive on multiple screens (mobile and desktop).
I kept the Responsive logic Simple:
Used Flexbox:
      swith the rows and columns according to the screen size.
      used min-h-[100svh] for keyboard not covering the result.

**Accessibility Consideration:**
    focus states, color contrast 

**What's one you knowingly skipped and why?**
    i skipped screen reader labels because in this small app screen reader labels can override useful native text (validations).

## 4. AI usage:

I have used three tools for this project.
Google search, Chatgpt and Gemini for research and queries.
I visited the official docs of different framework to choose tech stack by knowing which specific problem a tech stack or framework solves, where it is not suitable and why should i choose in my app's scenario.
I mostly asked why questions from ai, then i tried to implement the best solution with AI.
ai gvae me too many garbage outputs.

Links to the chats are:
`https://gemini.google.com/share/9fe799d384bb`
`https://chatgpt.com/share/6a0f6d0a-935c-83ec-b9f5-2c6d170fdcc1`


Github Copilot tool for writing code.

#### I changed the AI output:
AI gave me useMemo hook to calculate the total bills.
I changed it to simple operations.
because useMemo is used to cache the expensive computations.



## 5. Honest gap: What's one thing in your submission that isn't polished enough, and what would you do to fix it with another day?

- UI is not consistent and properly spaced. and rounding policy can work on showing all list of every person's payable bill.

#### Rounding policy:
I choosed rotating the remainder rounding policy, because it gives fair reason that every one should have pay one extra cent on their turn.
In that way there will be no extra cent goes and no less money collected.


### Thanks.
