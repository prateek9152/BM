import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Config } from "../config/config";
import { HttpErrorHandlerService, HandleError } from "./http-error-handler.service";
import { Storage } from "@ionic/storage";
@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private handleError: HandleError;
  public token: any;
  public headers: any;
  public options: any;


  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
    private storage: Storage) {
    this.handleError = httpErrorHandler.createHandleError('PostService');
  }
  getApiHeaders(extraHeader = {}, checkAuth = false) {

    if (checkAuth) {
      this.token = localStorage.getItem('userToken');
      this.headers = new HttpHeaders({ "Authorization": "Bearer " + this.token });
    }
    return this.options = { headers: this.headers };
  }
  // ---------------------------- program -------------------------------

  insertProgram(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/insertProgram', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('insertProgram', data)));
  }

  fetchAllProgram(): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/fetchAllProgram', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('fetchAllProgram')));
  }

  fetchMusic(): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/fetchMusic', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('fetchMusic')));
  }

  updateProgramMusic(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateProgramMusic', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateProgramMusic', data)));
  }

  searchMusic(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/searchMusic', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('searchMusic', data)));
  }

  getProgramById(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getProgramById', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getProgramById', data)));
  }

  updateEquipment(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateEquipment', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateEquipment', data)));
  }
  updateNutrition(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateNutrition', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateNutrition', data)));
  }

  updateVideo(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateVideo', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateVideo', data)));
  }

  updateDescription(data:any):Observable<any>{
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateDescription' , data, this.getApiHeaders(null,true) ).pipe(catchError(this.handleError('updateDescription',data)));
  }
  getUpcomingPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getUpcomingPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getUpcomingPrograms', formData)));
  }

  getHostedPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getHostedPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getHostedPrograms', formData)));
  }

  getRequestedPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getRequestedPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getRequestedPrograms', formData)));
  }

  acceptProgramRequest(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/acceptProgramRequest', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('acceptProgramRequest', formData)));
  }
  
  getAcceptedPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAcceptedPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAcceptedPrograms', formData)));
  }

  advertiseRequest(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/advertiseRequest', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('advertiseRequest', formData)));
  }

  getAdDetail(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAdDetail', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAdDetail', formData)));
  }

  getAdCompanyDetails(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAdCompanyDetails', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAdCompanyDetails', formData)));
  }

  acceptSponsers(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/acceptSponsers', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('acceptSponsers', formData)));
  }
  
  checkStreaming(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/checkStreaming', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('checkStreaming', formData)));
  }
  
  joinRequest(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/joinProgramRequest', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('joinRequest', formData)));
  }

  acceptJoinRequest(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/acceptJoinRequest', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('acceptJoinRequest', formData)));
  }

  deleteProgram(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/deleteProgram', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('deleteProgram', formData)));
  }

  getConsultPrograms(formData){
    return this.http.post<any>(Config.ApiUrl+'api/auth/getConsultPrograms', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getConsultPrograms', formData)));
  } 

  getAllUpcomingPrograms(formData){
    return this.http.post<any>(Config.ApiUrl+'api/auth/getAllUpcomingProgram', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getAllUpcomingPrograms', formData)));
  }

  getSponserComment(formData){
    return this.http.post<any>(Config.ApiUrl+'api/auth/getSponserComment', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getSponserComment', formData)));
  }
  addSponserComment(formData){
    return this.http.post<any>(Config.ApiUrl+'api/auth/addSponserComment', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('addSponserComment', formData)));
  }

  getSponserList(formData){
    return this.http.post<any>(Config.ApiUrl+'api/auth/getSponserList', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getSponserList', formData)));
  }
}
