import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  studentLogin(hallticket:any,mobileno:any){
    return this.http.get('http://localhost:3000/student/login?hallticket='+hallticket+'&mobileno='+mobileno)
  }
  studentProfile(hallticket:any){
    return this.http.get('http://localhost:3000/student/profile?hallticket='+hallticket)
  }
  viewTimetable(branch:any){
    return this.http.get('http://localhost:3000/student/viewtt?branch='+branch)
  }
  viewMarks(hallticket:any){
    return this.http.get('http://localhost:3000/student/viewMarks?hallticket='+hallticket)
  }
  viewFee(hallticket:any){
    return this.http.get('http://localhost:3000/student/showfee?hallticket='+hallticket)
  }
  viewBooks(hallticket:any){
    return this.http.get('http://localhost:3000/student/showbooks?hallticket='+hallticket)
  }
  updateProfile(id:any,data:any){
    return this.http.put('http://localhost:3000/student/updateprofile/'+id,data)
  }
applyForJob(data:any){
  return this.http.post('http://localhost:3000/student/applyjob',data) 
}

  showAllJobs(){
    return this.http.get('http://localhost:3000/student/alljobs')
  }
  viewJobStatus(h:any){
    return this.http.get('http://localhost:3000/student/viewjob?hallticket='+h)
  }
}
