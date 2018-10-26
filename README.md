Goal:
Friday 10/23/18 - finish navbar, particularly hide/show of promotional message based on scroll location (done)

## Components In Progress:
###### 1) main-banner: text does not stay in relative position to image when screen resize

###### 2) top-navbar: scroll position alters the class value but the transition is too jarring. (maybe try Angular animations?)

Components - Homepage:

_NavBar Component Specs:</br>
- navbar changes based on screen size: </br>
    navbar on desktop view looks like (logo, [Plan, Phones, Coverage, FAQ, Fi FIT QUIZ]links, [Sign in, Get Fi]buttons) </br>
    if navbar is less than desktop size the above (expect logo and Get Fi button) is removed </br>
    a menu icon appears on the left side of the logo in tablet and mobile view </br>
    clicking that menu icon opens a side menu containing removed items mentioned above
    While in the side menu, the main window is locked and dimmed. Scrolling is only allowed in the side menu while it's opened.
- navbar is fixed at the top of the screen when scrolling down </br>
  if user is at top of page, the navbar is offset and blue promotional banner appears</br>_

At-a-glance Component Specs:
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
