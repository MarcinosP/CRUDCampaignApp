import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICampaign } from './interfaces/campaign';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  private baseUrl =
    'https://backendcrudapp-d601ede88853.herokuapp.com/api/campaigns';

  constructor(private http: HttpClient) {}

  getCampaigns(): Observable<ICampaign[]> {
    return this.http.get<ICampaign[]>(`${this.baseUrl}/`);
  }

  addCampaign(campaign: ICampaign): Observable<ICampaign> {
    return this.http.post<ICampaign>(`${this.baseUrl}/`, campaign);
  }

  deleteCampaign(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/`);
  }

  updateCampaign(id: number, campaign: ICampaign): Observable<ICampaign> {
    return this.http.put<ICampaign>(`${this.baseUrl}/${id}/`, campaign);
  }

  getTowns(): Observable<any> {
    return this.http.get(
      'https://backendcrudapp-d601ede88853.herokuapp.com/api/towns/'
    );
  }
}
