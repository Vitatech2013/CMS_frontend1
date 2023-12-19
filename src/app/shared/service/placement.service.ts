import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private http:HttpClient) { }

  placementLogin(data:any){
    return this.http.post('http://localhost:3000/placement/login', data)
  }

  viewAppliedStudents(cname:any){
    return this.http.get(`http://localhost:3000/placement/viewstudents?companyname=${cname}`)
  }
  statusUpdate(id:any,data:any){
    return this.http.put(`http://localhost:3000/placement/status/${id}`,data)
  }

  viewProfile(email:any){
    return this.http.get(`http://localhost:3000/placement/profile?emailid=${email}`)
  }

  updateProfile(id:any,data:any){
    return this.http.put(`http://localhost:3000/placement/updateProfile/${id}`,data)
  }
}
