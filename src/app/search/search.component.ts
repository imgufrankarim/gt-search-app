import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from '../service/utilityservice.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  profile:any[];
  repos: any[];
  username:string;

  constructor(private profileService: UtilityserviceService) { 

  }

  findProfile(){
  	this.profileService.updateProfile(this.username);
  	this.profileService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this.profileService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})  	
  }

  ngOnInit() {
  }

}
