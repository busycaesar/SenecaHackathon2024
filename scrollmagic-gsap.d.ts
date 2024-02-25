import "scrollmagic";
import { TweenMax, TweenLite, TimelineMax, TimelineLite } from "gsap";

declare module "scrollmagic" {
  interface Scene {
    setTween(tween: TweenMax | TweenLite | TimelineMax | TimelineLite): Scene;
  }
}
