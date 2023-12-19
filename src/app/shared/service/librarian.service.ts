import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrarianService {

  constructor(private http:HttpClient) { }

LibrarianLogin(empid:any,mobileno:any,typeofemployee:any){
  return this.http.get<any>(`http://localhost:3000/officer/login?empid=${empid}&mobileno=${mobileno}&typeofemployee=${typeofemployee}`)
}
GetProfile(empid:any){
  return this.http.get<any>(`http://localhost:3000/librarian/profile?empid=${empid}`)
}
EditProfile(id:any,data:any){
  const headers = new HttpHeaders({
    'content-type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })
  return this.http.put<any>(`http://localhost:3000/librarian/updateprofile/`+id,data,{headers:headers})
}
GetStudents(){
  return this.http.get<any>(`http://localhost:3000/librarian/studentlist`)
}
PostBooks(data:any){
  return this.http.post<any>(`http://localhost:3000/librarian/addbook`,data)
}
GetBooks(){
  return this.http.get<any>(`http://localhost:3000/librarian/books`)
}
PostStudentBooks(data:any){
  return this.http.post<any>(`http://localhost:3000/librarian/addstudentbooks`,data)
}
GetStudentBooks(){
  return this.http.get<any>(`http://localhost:3000/librarian/viewstudentbooks`)
}
EditBooks(id:any , data:any){
  return this.http.put<any>(`http://localhost:3000/librarian/book/`+id , data)
}
DeleteBooks(id:any){
  return this.http.delete<any>(`http://localhost:3000/librarian/book/`+id)
}
EditStudentBooks(id:any,data:any){
  return this.http.put<any>(`http://localhost:3000/librarian/editstubooks/`+id , data)
}
DeleteStudentBooks(id:any){
  return this.http.delete<any>(`http://localhost:3000/librarian/delstubooks/`+id)
}
SearchStudentBooks(hallticket:any){
  return this.http.get<any>(`http://localhost:3000/librarian/searchstudentbook?hallticket=${hallticket}`)
}
}
