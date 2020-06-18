# Milestone Project JavaScript/JQuery

## JUST SNAKE

In the early 2000's as technology increased and cellphones had become more accessible with multiple capibilites.<br>
Cellphone games such as Snake came standard with your cellphone such as the popular Nokia 3110, we all tried betting our top scores.<br>

I have decided to recreate the poplular game for everyone to enjoy in both the classic format for celluar use as well as for the pc.

## UX
For the UX on this project I wanted to create a simple and user friendly site. My target audience is ages, hence I chose vibarant colors.<br>

I used Bootstrap4 to assit with the mobile friendly code to ensure that the game can be played anywhere.<br>

I wanted a seasoned gamer still to have fun, I want to perform an quick and simple game, so that I can achieve a goal.<br>
I designed my wireframe on Balsamiq please follow the link to find the preview
href = https://balsamiq.cloud/s7p10rp/p3hmyt9/r2278

### User Perspectective Story
Herewith a discriptive step by step breakdown of the UX for User A:<br>
Landing page <br>
<li> When landing on the Home page the user firsts notices the bright logo & heading to know they have found the right page </li>
<li> Underneath the Logo there is a score column so that the user can quickly identify there current score, this resets when a new game starts</li>
<li> In a conveint sized canvas box is the game the starts playing immedaitely and gets the user into game mode as they land on the page.</li>
<li> Below the canvas is quick instructions so that the user can grasp the controls immedaitely.</li>
<li> The screen is very responsive and fits on all devises with no need to scroll down to read any infomation.</li>

## Features
Simple, clean and basic gaming

Current features
<li>Feature 1 - Snake game including Apple for food</li>
<li>Feature 2 - Keeping score and resetting after the match</li>
<br>
...<br>
Features Left to Implement

<li>Feature 1 - Score keeping</li>
<li>Feature 2 - Menu and different settings</li>
<li>Feature 3 - Easy and simple snake play</li>
<li>Feature 4 - change color of the snake when it reaches a highscore level</li>
<li>Feature 5 - save highscores to a game centre to allow the user to come back to beat thier previous scores.</li>

Technologies Used
languages - HTML5, CSS3, JQuery, JavaScript <br>
framework - Wireframe was done on Balsamiq  <br>
libraries and other tools - Google fonts, PNGtree.com

## Testing
// Debug
https://validator.w3.org/nu/?doc=https%3A%2F%2Fgithub.com%2FJustwhittaker%2FPRO2-JustSnake
    //document.getElementById("debug").innerHTML = snake_dir + " " + snake_next_dir + " " + snake[0].x + " " + snake[0].y;   
Nu Html Checker This tool is an ongoing experiment in better HTML checking, and its behavior remains subject to change

Showing results for https://github.com/Justwhittaker/PRO2-JustSnake Checker Input and points of fixes and debugging noted Show sourceoutlineimage report

1. Error: Attribute value not allowed on element meta at this point.
From line 52, column 3; to line 52, column 69
/>↩↩  ↩↩  meta name="selected-link" value="repo_source" data-pjax-transient>↩↩    
<li> </li>

2. Error: Element meta is missing one or more of the following attributes: content, property.
From line 52, column 3; to line 52, column 69
/>↩↩  ↩↩  meta name="selected-link" value="repo_source" data-pjax-transient>↩↩    
<li> </li>

3. Error: Bad value x-pjax-version for attribute http-equiv on element meta.
From line 85, column 3; to line 85, column 79
IONS">↩↩  <meta http-equiv="x-pjax-version" content="f4281e552ed2ce22b528e4c9203cf648">↩  ↩↩ 
<li> </li>

4. Warning: The banner role is unnecessary for element header.
From line 127, column 11; to line 127, column 96
<li> </li>

5. Error: Stray end tag option.
From line 253, column 43; to line 253, column 51
xmp --></option></form
<li> </li>

6. Error: Stray end tag form.
From line 253, column 52; to line 253, column 58
></option></form><form 
<li> </li>

7. Error: Element div not allowed as child of element label in this context. (Suppressing further errors from this subtree.)
From line 275, column 13; to line 275, column 123

          <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">↩     

Contexts in which element div may be used:
Where flow content is expected.
As a child of a dl element.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.

8. Error: An element with role=option must be contained in, or owned by, an element with role=listbox.
From line 280, column 1; to line 280, column 134
<li> </li>

9. Error: Attribute vertical_align not allowed on element svg at this point.
From line 502, column 7; to line 502, column 165
e">↩      svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path 
<li> </li>

10. Error: Element div not allowed as child of element summary in this context. (Suppressing further errors from this subtree.)
From line 687, column 9; to line 687, column 56
>↩        div class="d-flex repository-lang-stats-graph">↩     

Contexts in which element div may be used:
Where flow content is expected.
As a child of a dl element.
<li> </li>

11. Error: Element details not allowed as child of element get-repo-controller in this context. (Suppressing further errors from this subtree.)
From line 765, column 3; to line 765, column 124
roller>↩  details class="position-relative details-overlay details-reset" data-action="toggle:get-repo-controller#onDetailsToggle">↩    <
Contexts in which element details may be used:
Where flow content is expected.
<li> </li>

12. Error: Element script must not have attribute async unless attribute src is also specified or unless attribute type is specified with value module.
From line 1171, column 5; to line 1171, column 294
iv>↩↩↩    script crossorigin="anonymous" async="async" integrity="sha512-WcQmT2vhcClFVOaaAJV/M+HqsJ2Gq/myvl6F…-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-59c4264f.js"></scri
<li> </li>

13. Error: Element script must not have attribute integrity unless attribute src is also specified.
From line 1171, column 5; to line 1171, column 294
iv>↩↩↩    script crossorigin="anonymous" async="async" integrity="sha512-WcQmT2vhcClFVOaaAJV/M+HqsJ2Gq/myvl6F…-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-59c4264f.js"></scri
<li> </li>

14. Error: Element script must not have attribute async unless attribute src is also specified or unless attribute type is specified with value module.
From line 1178, column 7; to line 1178, column 294
   ↩      script crossorigin="anonymous" async="async" integrity="sha512-4GcSWGoe36+BoWho4gtJcByZe8j43w+lt2/P…-module-id="./drag-drop.js" data-src="https://github.githubassets.com/assets/drag-drop-e0671258.js"></scri
<li> </li>

15. Error: Element script must not have attribute integrity unless attribute src is also specified.
From line 1178, column 7; to line 1178, column 294
 ↩  script crossorigin="anonymous" async="async" integrity="sha512-4GcSWGoe36+BoWho4gtJcByZe8j43w+lt2/P…-module-id="./drag-drop.js" data-src="https://github.githubassets.com/assets/drag-drop-e0671258.js"></scri
<li> </li>

16. Error: Element script must not have attribute async unless attribute src is also specified or unless attribute type is specified with value module.
From line 1179, column 7; to line 1179, column 298
pt>↩  script crossorigin="anonymous" async="async" integrity="sha512-3Vk1NFIOm+TBUMM6pTA6DCUwwLLnc/QIT8jp…ule-id="./gist-vendor.js" data-src="https://github.githubassets.com/assets/gist-vendor-dd593534.js"></scri
<li> </li>

17. Error: Element script must not have attribute integrity unless attribute src is also specified.
From line 1179, column 7; to line 1179, column 298
pt>↩      script crossorigin="anonymous" async="async" integrity="sha512-3Vk1NFIOm+TBUMM6pTA6DCUwwLLnc/QIT8jp…ule-id="./gist-vendor.js" data-src="https://github.githubassets.com/assets/gist-vendor-dd593534.js"></scri
<li> </li>

18. Error: Element script must not have attribute async unless attribute src is also specified or unless attribute type is specified with value module.
From line 1180, column 7; to line 1180, column 298
pt>↩      script crossorigin="anonymous" async="async" integrity="sha512-iv+4yAluOjiG50ZypUBIWIUCRDo6JEBf2twv…ule-id="./randomColor.js" data-src="https://github.githubassets.com/assets/randomColor-8affb8c8.js"></scri
<li> </li>

19. Error: Element script must not have attribute integrity unless attribute src is also specified.
From line 1180, column 7; to line 1180, column 298
pt>↩      script crossorigin="anonymous" async="async" integrity="sha512-iv+4yAluOjiG50ZypUBIWIUCRDo6JEBf2twv…ule-id="./randomColor.js" data-src="https://github.githubassets.com/assets/randomColor-8affb8c8.js"></scri
<li> </li>

## Deployment

 I used Github pages in Github to control the deployment of the website you will find the deployment at 
https://justwhittaker.github.io/PRO2-JustSnake/.

## Credits

### Dependencies

1. keymaster.js [https://github.com/madrobby/keymaster]// https://www.npmjs.com/search?q=keymaster
2. JQuery (html js middleware)
    The project uses JQuery to simplify DOM manipulation.
3. bootstrap (not used atm)

Content
JQuery research
    1. CodeInstitute Java Funadementals - "Var","if", "Else if", "arrays" and "axis"
    2. https://www.w3schools.com/js/js_random.asp
    3. https://www.w3schools.com/tags/canvas_arc.asp

Better Git Commit terms
http://karma-runner.github.io/5.0/dev/git-commit-msg.html

### Media
The photos used in this site were obtained from:
1. PNGtree.com  
    https://pngtree.com/so/apple<br>
    https://pngtree.com/so/snake

### Acknowledgements

https://fonts.google.com/specimen/Bitter?selection.family=Bitter:wght@700&sidebar.open

I received inspiration and technical knowledge for this project from the following platforms
1. Alignment
https://www.w3schools.com/tags/att_img_align.asp<br>
https://www.w3schools.com/graphics/game_canvas.asp

2. JQuery
// @see https://stackoverflow.com/a/1527820/2124254 <br>
https://tutorialzine.com/2015/06/making-your-first-html5-game-with-phaser<br>
https://github.com/infusion/HTML5-Experiments/blob/master/html5-snake.html<br>
https://www.html5canvastutorials.com/advanced/html5-canvas-snake-game/ <br>
https://stackoverflow.com/questions/10879955/how-to-align-an-image-dead-center-with-bootstrap<br>
https://developers.google.com/speed/libraries


