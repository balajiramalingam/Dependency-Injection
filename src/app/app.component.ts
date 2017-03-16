import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  localService: ApiService;

  constructor(private apiService: ApiService){
    
  }

  ngOnInit(): void {
    const injector: any = ReflectiveInjector.resolveAndCreate([ApiService]);

    this.localService = injector.get(ApiService);

    /*
     *Setting description to Singleton instance of the service,
     */
    this.apiService.setDescription("api service");
   
   /*
     *Setting description to locallly created service,
     */
    this.localService.setDescription("local service");


    console.log(this.apiService.getDescription()); // will print "api service"

    console.log(this.localService.getDescription()); //will print local service
  }

}
