import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperadminService {

  constructor(private http:HttpClient) { }

  getSuperadmin(username:any,password:any){
    return this.http.get('http://localhost:3000/superadmin/login?username=' + username +'&password=' +password)
  }
  getOfficer(){
    return this.http.get('http://localhost:3000/superadmin/officer')
  }
  getStudents(branch:any){
    return this.http.get('http://localhost:3000/superadmin/students?branch=' + branch)
  }
  SearchStudents(hallticket:any){
    return this.http.get('http://localhost:3000/superadmin/searchstudent?hallticket=' + hallticket)
  }
  getFaculty(department:any){
    return this.http.get('http://localhost:3000/superadmin/viewfaculty?department=' + department)
  }
  viewFee(){
    return this.http.get('http://localhost:3000/superadmin/fee')
  }
  STotalFee(){
    return this.http.get('http://localhost:3000/superadmin/stutotalfee')
  }
  StudentTotalfee(){
    return this.http.get('http://localhost:3000/superadmin/studentfee')
  }
  Searchtotalstudfee(hallticket:any){
    return this.http.get('http://localhost:3000/superadmin/searchstufee?hallticket=' + hallticket)
  }
  searchStdtotalFee(hallticket:any){
    return this.http.get('http://localhost:3000/superadmin/searchstutotalfee?hallticket=' + hallticket)
  }
  updateStdFee(id:any,data:any){
    return this.http.put('http://localhost:3000/superadmin/clearfee/'+ id,data)
  }
  viewBooks(){
    return this.http.get('http://localhost:3000/superadmin/totalbooks')
  }
  viewStdBooks(){
    return this.http.get('http://localhost:3000/superadmin/showstubooks')
  }
  TotalStudents(){
    return this.http.get('http://localhost:3000/superadmin/totalstudents')
  }
  viewJobs(){
    return this.http.get('http://localhost:3000/superadmin/viewplacements')
  }
  viewApplyJobs(){
    return this.http.get('http://localhost:3000/superadmin/studentjobs')
  }
  SearchApplyCandidate(hallticket:any){
    return this.http.get('http://localhost:3000/superadmin/searchstujob?hallticket=' + hallticket)
  }
}
