import { MainBanner } from './models/main-banner.model';

//Img, BigText, SmallText, button

export const MAINBANNER: MainBanner[] = [
  new MainBanner("about/hero-furry-desktop.jpg",
                 "about/hero-furry-tablet.jpg",
                 "about/hero-furry-mobile.jpg",
                 "Project Fi, a phone plan from Google",
                 "Meet the phone plan you'll want to snuggle up with.",
                 "button"
                ),
  new MainBanner("plan/cone_2_web.jpg",
                 "plan/cone_2_tablet.jpg",
                 "plan/cone_2_mobile.jpg",
                 "Bill Protection makes saving twice as sweet",
                 "Bill Protection gives you the peace of mind of unlimited data when you need it without having to pay for it when you don’t.",
                 "button"
               ),
  new MainBanner("coverage/hero-banner-desktop.jpg",
                  "coverage/hero-banner-tablet.jpg",
                  "coverage/hero-banner-mobile.jpg",
                  "Stay on the smoothest signal with 3 powerful networks",
                  "Seamlessly switch to the fastest of three 4G LTE networks, and get free access to 2 million secure Wi-Fi hotspots.",
                  "GET FI"
                ),
  new MainBanner("quiz/hero-banner-desktop.jpg",
                  "quiz/hero-banner-tablet.jpg",
                  "quiz/hero-banner-mobile.jpg",
                  "Should you make the satisfying switch?",
                  "Take our quiz to find out",
                  "START QUIZ"
                )
]
