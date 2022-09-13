import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ocrscreen',
  templateUrl: './ocrscreen.component.html',
  styleUrls: ['./ocrscreen.component.css']
})
export class OcrscreenComponent implements OnInit {
  fileUpload!:FormGroup


  constructor(private spinner: NgxSpinnerService, private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {

    this.fileUpload = this.fb.group({
      file:['']
    })
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000); 
  }
  onSubmit(){
    this.http.post('http://127.0.0.1:5000/upload', this.fileUpload.value).subscribe((res:any) => {
      console.log('res');
    })
  }





}
