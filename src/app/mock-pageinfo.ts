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
               )  
]
