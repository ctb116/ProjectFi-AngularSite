Specs:

Goal:
Friday - finish a functional nav bar

Components In Progress:
- main banner: text does not stay in relative position to image when screen resize

NavBar Component Specs:
- navbar changes based on screen size
  on desktop view it goes (logo, Plan, Phones, Coverage, FAQ, FI FIT QUIZ, Sign in, Get Fi)
- if navbar is less than desktop size the above (expect for logo and the buttons go away)
  a menu icon appears on the left side of the fi_logo
  clicking on that icon brings up remove menu items along with the buttons
- navbar is locked at the top of the screen when scrolling
- blue promotion bar is not locked but is aboe the navbar
- if menu icon is clicked user can only scroll in that menu, the main view is greyout and locked




Components - Homepage -
 - top nav bar that always stays (keep in main index)
 - small blue bar with latest deals (in main index) goes away after scroll down

 - top big image on every page (expect FAQ)
 -- has auto filtering through images with additional arrow click

 - twitter customer review

 - image left / text right
 - text left / image right
 (both above have a fade in of text has user scrolls down (title)(content)(button))

 - site spanning banner (green one) with hover activated button

 - stay informed(transparent background (icon)(content)(button))
 --repeats on several pages

 -grey footer

 Implementing multiple pages
 - ng methods in the compoents that return which text and images to display given a page click input








# ProjectFi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
