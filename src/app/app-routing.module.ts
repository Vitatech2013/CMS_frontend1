import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SuperadminLoginComponent } from './superadmin/superadmin-login/superadmin-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './welcome-page/home/home.component';
import { LoginsPageComponent } from './welcome-page/logins-page/logins-page.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { OfficerLoginComponent } from './officer/officer-login/officer-login.component';
import { FacultyLoginComponent } from './faculty/faculty-login/faculty-login.component';
import { LibrarianLoginComponent } from './librarian/librarian-login/librarian-login.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentRegistrationComponent } from './student/student-registration/student-registration.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { OfficerDashboardComponent } from './officer/officer-dashboard/officer-dashboard.component';
import { OfficerHomeComponent } from './officer/officer-home/officer-home.component';
import { OfficerAddEmployeeComponent } from './officer/officer-add-employee/officer-add-employee.component';
import { OfficerAddFeeComponent } from './officer/officer-add-fee/officer-add-fee.component';
import { OfficerAddStudentComponent } from './officer/officer-add-student/officer-add-student.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { ViewProfileComponent } from './student/view-profile/view-profile.component';
import { ViewMarksComponent } from './student/view-marks/view-marks.component';
import { ViewFeeComponent } from './student/view-fee/view-fee.component';
import { ViewBooksComponent } from './student/view-books/view-books.component';
import { ViewTimetableComponent } from './student/view-timetable/view-timetable.component';
import { FacultyListComponent } from './admin/faculty-list/faculty-list.component';
import { FeeDetailsComponent } from './admin/fee-details/fee-details.component';
import { StudentRecordsComponent } from './admin/students-list/student-records/student-records.component';
import { AddOfficerComponent } from './admin/officer/add-officer/add-officer.component';
import { ViewOfficerComponent } from './admin/officer/view-officer/view-officer.component';
import { EditOfficerComponent } from './admin/officer/edit-officer/edit-officer.component';
import { DeleteOfficerComponent } from './admin/officer/delete-officer/delete-officer.component';
import { LibraryComponent } from './admin/library/library.component';
import { FacultyProfileComponent } from './faculty/faculty-profile/faculty-profile.component';
import { FacultyAddTimetableComponent } from './faculty/faculty-add-timetable/faculty-add-timetable.component';
import { FacultyViewTimetableComponent } from './faculty/faculty-view-timetable/faculty-view-timetable.component';
import { FacultyAddMarksComponent } from './faculty/faculty-add-marks/faculty-add-marks.component';
import { FacultyViewMarksComponent } from './faculty/faculty-view-marks/faculty-view-marks.component';
import { FacultyViewStudentsComponent } from './faculty/faculty-view-students/faculty-view-students.component';
import { LibrarianNavbarComponent } from './librarian/librarian-navbar/librarian-navbar.component';
import { LibrarianHomeComponent } from './librarian/librarian-home/librarian-home.component';
import { LibrarianAddbooksComponent } from './librarian/librarian-addbooks/librarian-addbooks.component';
import { LibrarianViewbooksComponent } from './librarian/librarian-viewbooks/librarian-viewbooks.component';
import { LibrarianAddstudentbooksComponent } from './librarian/librarian-addstudentbooks/librarian-addstudentbooks.component';
import { LibrarianStudentviewbooksComponent } from './librarian/librarian-studentviewbooks/librarian-studentviewbooks.component';
import { LibrarianViewstudentsComponent } from './librarian/librarian-viewstudents/librarian-viewstudents.component';
import { SuperadminDashboardComponent } from './superadmin/superadmin-dashboard/superadmin-dashboard.component';
import { SViewOfficerComponent } from './superadmin/s-view-officer/s-view-officer.component';
import { SViewFacultyComponent } from './superadmin/s-view-faculty/s-view-faculty.component';
import { SViewFeeComponent } from './superadmin/Fee/s-view-fee/s-view-fee.component';
import { SEditFeeComponent } from './superadmin/Fee/s-edit-fee/s-edit-fee.component';
import { SViewStudentslistComponent } from './superadmin/s-view-studentslist/s-view-studentslist.component';
import { SViewBooksComponent } from './superadmin/s-view-books/s-view-books.component';
import { SuperadminHomeComponent } from './superadmin/superadmin-home/superadmin-home.component';
import { OfficerViewStudentsComponent } from './officer/officer-view-students/officer-view-students.component';
import { OfficerViewEmpComponent } from './officer/officer-view-emp/officer-view-emp.component';
import { OfficerProfileComponent } from './officer/officer-profile/officer-profile.component';
import { PlacementLoginComponent } from './placement-cell/placement-login/placement-login.component';
import { PlacementCellDashboardComponent } from './placement-cell/placement-cell-dashboard/placement-cell-dashboard.component';
import { PlacementProfileComponent } from './placement-cell/placement-profile/placement-profile.component';
import { PlacementJobsComponent } from './placement-cell/placement-jobs/placement-jobs.component';
import { StudentJobsComponent } from './student/student-jobs/student-jobs.component';
import { OfficerStudentFeeStatusComponent } from './officer/officer-student-fee-status/officer-student-fee-status.component';
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

const routes: Routes = [
  {
    path: 'faculty-dashboard',
    component: DashboardFacultyComponent,
    children: [
      
      { path: 'faculty-profile', component: FacultyProfileComponent },
      { path: 'faculty-addtt', component: FacultyAddTimetableComponent },
      { path: 'faculty-viewtt', component: FacultyViewTimetableComponent },
      { path: 'faculty-addmarks', component: FacultyAddMarksComponent },
      { path: 'faculty-viewmarks', component: FacultyViewMarksComponent },
      { path: 'faculty-viewstudents', component: FacultyViewStudentsComponent }, 
      { path: 'faculty-editprofile', component: FacultyEditprofileComponent },
      { path: 'faculty-editmarks', component: FacultyEditmarksComponent},
      { path: 'faculty-edittimetable', component: FacultyEdittimetableComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'logins-page', component: LoginsPageComponent },
  { path: 'superadmin-login', component: SuperadminLoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'officer-login', component: OfficerLoginComponent },
  { path: 'faculty-login', component: FacultyLoginComponent },
  { path: 'library-login', component: LibrarianLoginComponent },
  { path: 'student-login', component: StudentLoginComponent },
  {path:'placement-login',component:PlacementLoginComponent},
  { path: 'student-reg', component: StudentRegistrationComponent },
  
  {path:'superadmin-dashboard',component:SuperadminDashboardComponent, children:[
    { path: '', redirectTo: 'superadmin-home', pathMatch: 'full' },
    {path:'superadmin-home',component:SuperadminHomeComponent},
    {path:'superadmin-viewOfficer',component:SViewOfficerComponent},
    {path:'superadmin-viewOfficer-Details',component:SViewOfficerDetailsComponent},
    {path:'superadmin-viewFaculty',component:SViewFacultyComponent},
    {path:'superadmin-viewfaculty-Details',component:SViewFacultyDetailsComponent},
    {path:'superadmin-viewFee',component:SViewFeeComponent},
    {path:'superadmin-EditFee',component:SEditFeeComponent},
    {path:'superadmin-viewStudents',component:SViewStudentslistComponent},
    {path:'superadmin-viewStudentdDetails',component:SViewStdDetailsComponent},
    {path:'Superadmin-stdAllotmentorder',component:SStdAllotmentorderComponent},
    {path:'superadmin-viewBooks',component:SViewBooksComponent},
    {path:'superadmin-placements',component:SViewCompaniesComponent}
  ]},

  { path: 'admin-dashboard', component: AdminDashboardComponent, children:[
    { path: '', redirectTo: 'admin-home', pathMatch: 'full' },
    {path:'admin-home',component:AdminHomeComponent},
    {path:'admin-add-officer',component:AddOfficerComponent},
    {path:'admin-view-officer',component:ViewOfficerComponent},
    {path:'admin-Update-officer',component:EditOfficerComponent},
    {path:'admin-delete-officer',component:DeleteOfficerComponent},
    {path:'admin-Faculty',component:FacultyListComponent},
    {path:'admin-Fee',component:FeeDetailsComponent},
    {path:'admin-Students-Records',component:StudentRecordsComponent},
    {path:'admin-Library',component:LibraryComponent},
    {path:'admin-ViewLibrarian',component:AdminViewLibrarianComponent},
    {path:'admin-PlacementCell',component:AdminPlacementcellComponent},
    {path:'admin-StudentApplyJobs',component:AdminStdApplyJobsComponent}
  ]},

{
    path: 'officer-dashboard',
    component: OfficerDashboardComponent,
    children: [
      { path: '', redirectTo: 'officer-home', pathMatch: 'full' },
      { path: 'officer-home', component: OfficerHomeComponent },
      { path: 'officer-profile', component: OfficerProfileComponent },
      { path: 'officer-add-emp', component: OfficerAddEmployeeComponent },
      { path: 'officer-add-student', component: OfficerAddStudentComponent },
      { path: 'officer-add-fee', component: OfficerAddFeeComponent },
      { path: 'officer-view-emp', component: OfficerViewEmpComponent },
      { path: 'officer-view-std', component: OfficerViewStudentsComponent },
      { path: 'officer-view-fee-status', component: OfficerStudentFeeStatusComponent, },
      { path: 'officer-placement', component: OfficerPlacementComponent },
    ],
  },

  {path:'student-dashboard',component:StudentDashboardComponent, children:[
    {path:'',redirectTo:'view-timetable',pathMatch:'full'},
    { path:'view-profile',component:ViewProfileComponent},
    { path:'view-marks',component:ViewMarksComponent},
    { path:'view-fee',component:ViewFeeComponent},
    { path:'view-books',component:ViewBooksComponent},
    { path:'view-timetable',component:ViewTimetableComponent},
    {path:'student-placement', component:StudentJobsComponent}
  ]},

  {path:'librarian-dashboard' , component:LibrarianNavbarComponent,
    children:[
      {path:'' , redirectTo:'librarian-profile',pathMatch:'full'},
      {path:'librarian-profile' , component:LibrarianHomeComponent},
      {path:'librarian-viewstudents' , component:LibrarianViewstudentsComponent},
      {path:'librarian-addbooks' , component:LibrarianAddbooksComponent},
      {path:'librarian-viewbooks' , component:LibrarianViewbooksComponent},
      {path:'librarian-addstudentbooks' , component:LibrarianAddstudentbooksComponent},
      {path:'librarian-viewstudentbooks' , component:LibrarianStudentviewbooksComponent},
      {path:'librarian-viewstudentbooks/:hallticket' , component:LibrarianStudentviewbooksComponent},
      ]},

    {path:'placement-dashboard', component:PlacementCellDashboardComponent,children:[
      {path:'',redirectTo:'placement-jobs',pathMatch:'full'},
      {path:'placement-jobs',component:PlacementJobsComponent},
      {path:'placement-profile', component:PlacementProfileComponent}
    ]}

    ]
 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
