import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  isFetchingText: boolean;

  constructor(
    private _http: HttpClient
  ) { }

  onComplete(audioBlob: Blob) {
    this.isFetchingText = true;
    const formData = new FormData();
    formData.append('audio', audioBlob);
    this._http.post('//localhost:8080/readFile', formData).subscribe(response => {
      this.isFetchingText = false;
    }, error => {
      this.isFetchingText = false;
    })
  }

}
