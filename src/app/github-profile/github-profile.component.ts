import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   let id = +params.get('id');
    //   console.log(id);
    // });
  }

  submit(){
    this.route.navigate(['/followers'], {
      queryParams : { page : 1, order : 'newest'}
    });
  }

}
