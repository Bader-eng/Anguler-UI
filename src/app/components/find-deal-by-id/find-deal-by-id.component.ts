import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-find-deal-by-id',
  templateUrl: './find-deal-by-id.component.html',
  styleUrls: ['./find-deal-by-id.component.css'],
})
export class FindDealByIdComponent implements OnInit {
  deal: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getOneById(id: string) {
    this.http.get(environment.API  + id).subscribe(
      (res) => (this.deal = res),
      (err) => {
        this.deal = null;
        Swal.fire({
          title: 'Deal not found!',
          icon: 'error',
          text: 'Please try another deal ID',
        });
      }
    );
  }
}
