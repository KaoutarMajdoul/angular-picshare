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

  ngOnInit(): void {
      this.title = "Bientôt les vacances";
      this.description = "Devinez ma prochaine destination.. un indice : paradisiaque.";
      this.createdAt = new Date();
      this.likes = 0;
      this.imageUrl = "https://www.voyagetanzanie.fr/cdn/tz-public/nungwi_plage-MAX-w1000h600.jpg";
    }
}
