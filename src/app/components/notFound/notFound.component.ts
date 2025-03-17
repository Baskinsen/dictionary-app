import { Component } from "@angular/core";
import { AnimationItem } from "lottie-web";
import { LottieComponent, AnimationOptions } from "ngx-lottie";
// import { LottieAnimationComponent } from "../../lottie-animation/lottie-animation.component";


@Component({
  selector: "word-not-found",
  imports: [LottieComponent],
  templateUrl: "./notFound.component.html",
  styleUrls: ["./notFound.component.css"]
})

export class NotFound {
  title = "Word Not Found";

  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: '/public/emoji.json',
    loop: true,
    autoplay: true

  }

    animationCreated(animationItem: AnimationItem): void {
        this.animationItem = animationItem;
    }
}
