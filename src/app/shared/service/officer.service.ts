import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OfficerService {
  constructor(private http: HttpClient) {}

  officerLogin(e: any, m: any, t: any) {
    return this.http.get(
      `http://localhost:3000/officer/login?empid=${e}&mobileno=${m}&typeofemployee=${t}`
    );
  }

  getProfile(eid: any) {
    return this.http.get('http://localhost:3000/officer/profile?empid=' + eid);
  }

  updateOfficerProfile(id: any, data: any) {
    return this.http.put(
      'http://localhost:3000/officer/updateprofile/' + id,
      data
    );
  }

  addEmployees(data: any) {
    return this.http.post('http://localhost:3000/officer/addemp', data);
  }

  viewEmployees() {
    return this.http.get('http://localhost:3000/officer/emps?typeofemployee=');
  }
  editEmployee(_id: any, data: any) {
    return this.http.put<any>(
      'http://localhost:3000/officer/updateemp/' + _id,
      data
    );
  }

  deleteEmployee(_id: string) {
    return this.http.delete<any>('http://localhost:3000/officer/delemp/' + _id);
  }
  searchEmps(emp: any) {
    return this.http.get(
      'http://localhost:3000/officer/searchemp?empid=' + emp
    );
  }

  addStudents(data: any) {
    return this.http.post('http://localhost:3000/officer/studentreg', data);
  }

  viewStudents() {
    return this.http.get('http://localhost:3000/officer/allstudents');
  }
  editStudents(_id: any, data: any) {
    return this.http.put<any>(
      'http://localhost:3000/officer/updatestudent/' + _id,
      data
    );
  }

  deleteStudents(_id: string) {
    return this.http.delete<any>(
      'http://localhost:3000/officer/delstudent/' + _id
    );
  }

  searchStudents(h: any) {
    return this.http.get(
      'http://localhost:3000/officer/student?hallticket=' + h
    );
  }

  addFees(data: any) {
    return this.http.post('http://localhost:3000/officer/addfee', data);
  }

  viewFees() {
    return this.http.get('http://localhost:3000/officer/viewfee');
  }
  updateFee(_id: any, data: any) {
    return this.http.put<any>(
      'http://localhost:3000/officer/updatefee/' + _id,
      data
    );
  }

  addstudentFee(data: any) {
    return this.http.post('http://localhost:3000/officer/stutotalfee', data);
  }
  viewStudentFees() {
    return this.http.get('http://localhost:3000/officer/viewstutotalfee');
  }
  updateStudentFee(_id: any, data: any) {
    return this.http.put<any>(
      'http://localhost:3000/officer/editstutotalfee/' + _id,
      data
    );
  }
  searchStudentFee(h: any) {
    return this.http.get(
      'http://localhost:3000/officer/showstutotalfee?hallticket=' + h
    );
  }



  addPlacemnet(data: any) {
    return this.http.post('http://localhost:3000/officer/addplacement', data);
  }

  viewPlacement() {
    return this.http.get('http://localhost:3000/officer/viewplacement');
  }

  viewStudentJobs() {
    return this.http.get('http://localhost:3000/officer/studentjobs');
  }

  searchJobs(h: any) {
    return this.http.get(
      'http://localhost:3000/officer/searchstujobs?hallticket=' + h
    );
  }
  getBranchwiseStudents(b:any){
    return this.http.get(
      'http://localhost:3000/officer/branchwisestudents?branch=' + b
    ); 
  }
}
