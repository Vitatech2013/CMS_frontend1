import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { FacultyLoginComponent } from './faculty/faculty-login/faculty-login.component';
import { LibrarianLoginComponent } from './librarian/librarian-login/librarian-login.component';
import { OfficerLoginComponent } from './officer/officer-login/officer-login.component';
import { PlacementLoginComponent } from './placement-cell/placement-login/placement-login.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { SuperadminLoginComponent } from './superadmin/superadmin-login/superadmin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacultyAddMarksComponent } from './faculty/faculty-add-marks/faculty-add-marks.component';
import { FacultyDashboardComponent } from './faculty/faculty-dashboard/faculty-dashboard.component';
import { FacultyProfileComponent } from './faculty/faculty-profile/faculty-profile.component';
import { FacultyViewStudentsComponent } from './faculty/faculty-view-students/faculty-view-students.component';
import { FacultyViewMarksComponent } from './faculty/faculty-view-marks/faculty-view-marks.component';
import { FacultyAddTimetableComponent } from './faculty/faculty-add-timetable/faculty-add-timetable.component';
import { FacultyViewTimetableComponent } from './faculty/faculty-view-timetable/faculty-view-timetable.component';
import { LibrarianDashboardComponent } from './librarian/librarian-dashboard/librarian-dashboard.component';
import { LibrarianHeaderComponent } from './librarian/librarian-header/librarian-header.component';
import { LibrarianHomeComponent } from './librarian/librarian-home/librarian-home.component';
import { LibrarianSidenavComponent } from './librarian/librarian-sidenav/librarian-sidenav.component';
import { LibrarianNavbarComponent } from './librarian/librarian-navbar/librarian-navbar.component';
import { LibrarianAddbooksComponent } from './librarian/librarian-addbooks/librarian-addbooks.component';
import { LibrarianAddstudentbooksComponent } from './librarian/librarian-addstudentbooks/librarian-addstudentbooks.component';
import { LibrarianViewbooksComponent } from './librarian/librarian-viewbooks/librarian-viewbooks.component';
import { LibrarianStudentviewbooksComponent } from './librarian/librarian-studentviewbooks/librarian-studentviewbooks.component';
import { LibrarianEditstudentbooksComponent } from './librarian/librarian-editstudentbooks/librarian-editstudentbooks.component';
import { LibrarianEditbooksComponent } from './librarian/librarian-editbooks/librarian-editbooks.component';
import { StudentRegistrationComponent } from './student/student-registration/student-registration.component';
import { HomeComponent } from './welcome-page/home/home.component';
import { LoginsPageComponent } from './welcome-page/logins-page/logins-page.component';
import { OfficerDashboardComponent } from './officer/officer-dashboard/officer-dashboard.component';
import { OfficerHomeComponent } from './officer/officer-home/officer-home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { OfficerAddEmployeeComponent } from './officer/officer-add-employee/officer-add-employee.component';
import { OfficerAddFeeComponent } from './officer/officer-add-fee/officer-add-fee.component';
import { OfficerAddStudentComponent } from './officer/officer-add-student/officer-add-student.component';
import { StudentRecordsComponent } from './admin/students-list/student-records/student-records.component';
import { FacultyListComponent } from './admin/faculty-list/faculty-list.component';
import { FeeDetailsComponent } from './admin/fee-details/fee-details.component';
import { ViewTimetableComponent } from './student/view-timetable/view-timetable.component';
import { ViewMarksComponent } from './student/view-marks/view-marks.component';
import { ViewFeeComponent } from './student/view-fee/view-fee.component';
import { ViewBooksComponent } from './student/view-books/view-books.component';
import { ViewProfileComponent } from './student/view-profile/view-profile.component';
import { UpdateProfileComponent } from './student/update-profile/update-profile.component';
import { LibraryComponent } from './admin/library/library.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { AddOfficerComponent } from './admin/officer/add-officer/add-officer.component';
import { EditOfficerComponent } from './admin/officer/edit-officer/edit-officer.component';
import { ViewOfficerComponent } from './admin/officer/view-officer/view-officer.component';
import { DeleteOfficerComponent } from './admin/officer/delete-officer/delete-officer.component';
import { LibrarianViewstudentsComponent } from './librarian/librarian-viewstudents/librarian-viewstudents.component';
import { LibrarianEditprofileComponent } from './librarian/librarian-editprofile/librarian-editprofile.component';
import { LibrarianSearchstudentbookComponent } from './librarian/librarian-searchstudentbook/librarian-searchstudentbook.component';
import { SuperadminDashboardComponent } from './superadmin/superadmin-dashboard/superadmin-dashboard.component';
import { SViewOfficerComponent } from './superadmin/s-view-officer/s-view-officer.component';
import { SViewFacultyComponent } from './superadmin/s-view-faculty/s-view-faculty.component';
import { SViewFeeComponent } from './superadmin/Fee/s-view-fee/s-view-fee.component';
import { SEditFeeComponent } from './superadmin/Fee/s-edit-fee/s-edit-fee.component';
import { SViewStudentslistComponent } from './superadmin/s-view-studentslist/s-view-studentslist.component';
import { SViewBooksComponent } from './superadmin/s-view-books/s-view-books.component';
import { SuperadminHomeComponent } from './superadmin/superadmin-home/superadmin-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { OfficerViewStudentsComponent } from './officer/officer-view-students/officer-view-students.component';
import { OfficerStudentFeeStatusComponent } from './officer/officer-student-fee-status/officer-student-fee-status.component';
import { OfficerViewFeeComponent } from './officer/officer-view-fee/officer-view-fee.component';
import { OfficerViewEmpComponent } from './officer/officer-view-emp/officer-view-emp.component';
import { OfficerEditStudentComponent } from './officer/officer-edit-student/officer-edit-student.component';
import { OfficerDeleteStudentComponent } from './officer/officer-delete-student/officer-delete-student.component';
import { OfficerProfileComponent } from './officer/officer-profile/officer-profile.component';
import { PlacementCellDashboardComponent } from './placement-cell/placement-cell-dashboard/placement-cell-dashboard.component';
import { PlacementProfileComponent } from './placement-cell/placement-profile/placement-profile.component';
import { PlacementJobsComponent } from './placement-cell/placement-jobs/placement-jobs.component';
import { PlacementChangeStatusComponent } from './placement-cell/placement-change-status/placement-change-status.component';
import { StudentJobsComponent } from './student/student-jobs/student-jobs.component';
import { StudentApplyJobComponent } from './student/student-apply-job/student-apply-job.component';
import { OfficerProfileEditComponent } from './officer/officer-profile-edit/officer-profile-edit.component';
import { OfficerAddStudentFeeComponent } from './officer/officer-add-student-fee/officer-add-student-fee.component';
import { OfficerViewStudentDetailsComponent } from './officer/officer-view-student-details/officer-view-student-details.component';
import { OfficerEditEmployeeComponent } from './officer/officer-edit-employee/officer-edit-employee.component';
import { OfficerDeleteEmployeeComponent } from './officer/officer-delete-employee/officer-delete-employee.component';
import { OfficerPlacementComponent } from './officer/officer-placement/officer-placement.component';
import { AdminViewLibrarianComponent } from './admin/library/admin-view-librarian/admin-view-librarian.component';
import { AdminPlacementcellComponent } from './admin/admin-placementcell/admin-placementcell.component';
import { AdminStdApplyJobsComponent } from './admin/admin-placementcell/admin-std-apply-jobs/admin-std-apply-jobs.component';
import { DashboardFacultyComponent } from './faculty/dashboard-faculty/dashboard-faculty.component';
import { FacultyEditprofileComponent } from './faculty/faculty-editprofile/faculty-editprofile.component';
import { FacultyEditmarksComponent } from './faculty/faculty-editmarks/faculty-editmarks.component';
import { FacultyEdittimetableComponent } from './faculty/faculty-edittimetable/faculty-edittimetable.component';
import { SViewFacultyDetailsComponent } from './superadmin/s-view-faculty/s-view-faculty-details/s-view-faculty-details.component';
import { SViewOfficerDetailsComponent } from './superadmin/s-view-officer/s-view-officer-details/s-view-officer-details.component';
import { SViewCompaniesComponent } from './superadmin/s-view-companies/s-view-companies.component';
import { SViewStdDetailsComponent } from './superadmin/s-view-studentslist/s-view-std-details/s-view-std-details.component';
import { SStdAllotmentorderComponent } from './superadmin/s-view-studentslist/s-std-allotmentorder/s-std-allotmentorder.component';
import { AdminFeeViewComponent } from './admin/fee-details/admin-fee-view/admin-fee-view.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    FacultyLoginComponent,
    LibrarianLoginComponent,
    OfficerLoginComponent,
    PlacementLoginComponent,
    StudentLoginComponent,
    SuperadminLoginComponent,
    AdminDashboardComponent,
    AddOfficerComponent,
    EditOfficerComponent,
    DeleteOfficerComponent,
    ViewOfficerComponent,
    StudentRegistrationComponent,
    HomeComponent,
    LoginsPageComponent,
    FacultyAddMarksComponent,
    FacultyDashboardComponent,
    FacultyProfileComponent,
    FacultyViewStudentsComponent,
    FacultyViewMarksComponent,
    FacultyAddTimetableComponent,
    FacultyViewTimetableComponent,
    StudentDashboardComponent,
    OfficerDashboardComponent,
    OfficerHomeComponent,
    OfficerAddEmployeeComponent,
    OfficerAddFeeComponent,
    OfficerAddStudentComponent,
    OfficerViewStudentsComponent,
    OfficerStudentFeeStatusComponent,
    OfficerViewFeeComponent,
    OfficerViewEmpComponent,
    OfficerEditStudentComponent,
    OfficerDeleteStudentComponent,
    OfficerProfileComponent,
    StudentRecordsComponent,
    FacultyListComponent,
    FeeDetailsComponent,
    ViewTimetableComponent,
    ViewMarksComponent,
    ViewFeeComponent,
    ViewBooksComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    LibraryComponent,
    StudentDashboardComponent,
    LibrarianDashboardComponent,
    LibrarianHeaderComponent,
    LibrarianHomeComponent,
    LibrarianSidenavComponent,
    LibrarianNavbarComponent,
    LibrarianAddbooksComponent,
    LibrarianAddstudentbooksComponent,
    LibrarianViewbooksComponent,
    LibrarianStudentviewbooksComponent,
    LibrarianEditstudentbooksComponent,
    LibrarianEditbooksComponent,
    LibrarianViewstudentsComponent,
    OfficerAddEmployeeComponent,
    OfficerHomeComponent,
    OfficerAddFeeComponent ,
 OfficerAddStudentComponent ,
 StudentRecordsComponent ,
 FacultyListComponent ,
 FeeDetailsComponent,
   ViewTimetableComponent, 
   ViewMarksComponent,
  ViewFeeComponent,
    ViewBooksComponent,
 ViewProfileComponent ,
   UpdateProfileComponent,
   LibrarianEditprofileComponent,
   LibrarianSearchstudentbookComponent, 
   SuperadminDashboardComponent,
   SViewOfficerComponent,
   SViewFacultyComponent,
   SViewFeeComponent,
   SEditFeeComponent,
   SViewStudentslistComponent,
   SViewBooksComponent,
   SuperadminHomeComponent,
   OfficerProfileEditComponent,
   OfficerAddStudentFeeComponent,
   OfficerViewStudentDetailsComponent,
   OfficerEditEmployeeComponent,
   OfficerDeleteEmployeeComponent,
   OfficerPlacementComponent,
   AdminHomeComponent,
   PlacementCellDashboardComponent,
   PlacementProfileComponent,
   PlacementJobsComponent,
   PlacementChangeStatusComponent,
   StudentJobsComponent,
   StudentApplyJobComponent,
   AdminViewLibrarianComponent,
   AdminPlacementcellComponent,
   AdminStdApplyJobsComponent,
   DashboardFacultyComponent,
   FacultyEditprofileComponent,
   FacultyEditmarksComponent,
   FacultyEdittimetableComponent,
   SViewFacultyDetailsComponent,
   SViewOfficerDetailsComponent,
   SViewCompaniesComponent,
   SViewStdDetailsComponent,
   SStdAllotmentorderComponent,
   AdminFeeViewComponent,

    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
