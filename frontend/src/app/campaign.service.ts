import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  private baseUrl = 'http://localhost:8000/api/campaigns';

  constructor(private http: HttpClient) {}

  getCampaigns(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  addCampaign(campaign: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, campaign);
  }

  deleteCampaign(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}/`);
  }

  updateCampaign(id: number, campaign: any): Observable<any> {
    console.log('first');
    return this.http.put(`${this.baseUrl}/${id}/`, campaign);
  }
}
