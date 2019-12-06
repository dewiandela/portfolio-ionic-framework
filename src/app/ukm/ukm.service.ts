import { Injectable } from '@angular/core';
import { UKM } from './ukm.model';

@Injectable({
    providedIn: 'root'
})
export class UkmService {

    private ukm: UKM[] = [
        new UKM(
            'Judul buku 1',
            'Deskripsi singkat',
            'https://scoopadm.apps-foundry.com/ebook-covers/39381/big_covers/ID_BOBO2018MTH01ED40.jpg',
            'kategori A'
        ),

        new UKM(
            'Judul buku 2',
            'Deskripsi singkat',
            'https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg',
            'Kategori B'
        ),

        new UKM(
            'Judul buku 3',
            'Deskripsi singkat',
            'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Kingsman_The_Secret_Service_%28comics%29.jpg/250px-Kingsman_The_Secret_Service_%28comics%29.jpg',
            'Kategori C'
        ),

        new UKM(
            'Judul buku 4',
            'Deskripsi singkat',
            'https://images-na.ssl-images-amazon.com/images/I/91hjlftjPbL.jpg',
            'Kategori D'
        ),

        new UKM(
            'Judul buku 5',
            'Deskripsi singkat',
            'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/711606/711606._SX1280_QL80_TTD_.jpg',
            'Kategori E'
        )
    ];

    private myUkm: UKM[] = [];

    constructor() { }

    getAllUKM() {
        return [...this.ukm];
    }

    getUKM(id: string) {
        return {
            ...this.ukm.find(ukm => {
                return ukm.id === id;
            })
        };
    }

    addToMyUkm(p: UKM) {
        this.myUkm.push(p);
        console.log(this.myUkm);
    }

    removeFromMyUkm(id: string) {
        this.myUkm = this.myUkm.filter(p => {
            return p.id != p.id;
        })
    }

    getMyUkm() {
        return [...this.myUkm];
    }
}
