import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor( private http:HttpClient) { }
  FacultyLogin(username:any,password:any,toe:any){
    return this.http.get('http://localhost:3000/faculty/login?empid='+ username+'&mobileno='+password+"&typeofemployee="+toe)
  }
  ViewProfile(e:any){
       return this.http.get("http://localhost:3000/faculty/profile?empid="+e)
  }
  EditProfile(id:any,data:any){
   return this.http.put("http://localhost:3000/faculty/updateprofile/"+id,data) 
  }
  AddMarks(data:any){
     return this.http.post("http://localhost:3000/faculty/addmarks",data)
  }
  ViewMarks(){
    return this.http.get("http://localhost:3000/faculty/viewmarks")
  }
  ViewStudentMarks(h:any){
    return this.http.get("http://localhost:3000/faculty/viewstudentmarks?hallticket="+h)
  }
  EditMarks(id:any,data:any){
    return this.http.put("http://localhost:3000/faculty/updatemarks/"+id,data) 

  }
  DeleteMarks(id:any){
return this.http.delete("http://localhost:3000/faculty/delMarks/"+id)
  }
  AddTimetable(data:any){
    return this.http.post("http://localhost:3000/faculty/addtt",data)
  }
  ViewTimetable(b:any){
    return this.http.get("http://localhost:3000/faculty/viewtt?branch="+b)
  }
  EditTimetable(id:any,data:any){
    return this.http.put("http://localhost:3000/faculty/updatett/"+id,data) 

  }
  DeleteTimetable(id:any){
    return this.http.delete("http://localhost:3000/faculty/deletett/"+id)

  }
ViewStudent(){
  return this.http.get("http://localhost:3000/faculty/viewstudents")

}
  
}
