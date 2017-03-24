import { Component, OnInit, ReflectiveInjector,Inject } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: "ComponentApIService", useClass: ApiService }
  ]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  localService: ApiService;

  constructor(private apiService: ApiService, @Inject("ComponentApIService") private componentApiService:ApiService){
    
  }

  ngOnInit(): void {
    const injector: any = ReflectiveInjector.resolveAndCreate([ApiService]);

    this.localService = injector.get(ApiService);
   
   /*
     *Setting description to locally created service,
     */
    this.localService.setDescription("local service");

    /*
     *Setting description to Singleton instance of the service,
     */
    this.apiService.setDescription("app level service");

    this.componentApiService.setDescription("Component level service"+new Date());     

    console.log(this.apiService.getDescription()); // will print "api service"

    console.log(this.localService.getDescription()); //will print "local service"

    console.log(this.componentApiService.getDescription()); //will print "component service"
  }

}
