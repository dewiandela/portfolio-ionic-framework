import { Component, OnInit } from '@angular/core';
import { UkmService } from '../ukm.service';
import { Router } from '@angular/router';
import { UKM } from '../ukm.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  myUkm: UKM[];

  constructor(
      private ukmService: UkmService,
      private router: Router,
  ) { }

  ngOnInit() {
      this.myUkm = this.ukmService.getMyUkm();

      console.log("myUkm", this.myUkm);
  }

  ionViewWillEnter() {
    this.myUkm = this.ukmService.getMyUkm();
  }

  onCancelMyUkm(id: string) {
      this.ukmService.removeFromMyUkm(id);
      this.myUkm = this.ukmService.getMyUkm();
  }
}
