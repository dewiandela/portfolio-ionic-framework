import { Component, OnInit, Input } from '@angular/core';
import { UKM } from '../ukm.model';
import { ActivatedRoute } from '@angular/router';
import { UkmService } from '../ukm.service';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  ukm: UKM[];
  listedLoadedUkm: UKM[];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private ukmService: UkmService,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.ukm = this.ukmService.getAllUKM();
    this.listedLoadedUkm = this.ukm.slice(1);
  }

  
  async presentAlert(ukm) {
    const alert = await this.alertController.create({
      header: 'Question',
      message: 'Apakah anda ingin menjadikan buku favorit?',
      buttons: [
        {
          text: 'Tidak',
          role: 'Cancel'
        },
        {
          text: 'Iya',
          handler: () => this.onJoinUkm(ukm)
        }
      ]
    });
    await alert.present();
  }

  onJoinUkm(ukm) {
    this.ukmService.addToMyUkm(ukm);
}

}
