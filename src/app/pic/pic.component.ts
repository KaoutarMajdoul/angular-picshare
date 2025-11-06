import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic',
  standalone: true,
  imports: [],
  templateUrl: './pic.component.html',
  styleUrl: './pic.component.scss'
})
export class PicComponent implements OnInit{
  title!: string;
  description!: string;
  createdAt!: Date;
  likes!: number;
  imageUrl!: string;
  userHasLiked!: boolean;
  likeButtonText!: String;

  ngOnInit(): void {
      this.title = "Bientôt les vacances";
      this.description = "Devinez ma prochaine destination.. un indice : paradisiaque.";
      this.createdAt = new Date();
      this.likes = 0;
      this.imageUrl = "https://www.voyagetanzanie.fr/cdn/tz-public/nungwi_plage-MAX-w1000h600.jpg";
      this.userHasLiked = false;
      this.likeButtonText = "Like";
    
    }

    onLike(): void {
      if (this.userHasLiked) {
       this.unlike();
      } else {
        this.like();
      }
    }

    unlike() {
        this.likes--;
        this.likeButtonText = "Like";
        this.userHasLiked = false;
    }

    like() {
        this.likes++;
        this.likeButtonText = "Unlike";
        this.userHasLiked = true;
    }

}
