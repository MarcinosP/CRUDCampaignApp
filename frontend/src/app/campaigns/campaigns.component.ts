import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { CampaignService } from '../campaign.service';
import { ICampaign } from '../interfaces/campaign';
import { CampaignFormComponent } from '../campaign-form/campaign-form.component';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
})
export class CampaignsComponent implements OnInit {
  dataSource: MatTableDataSource<ICampaign> = new MatTableDataSource();

  constructor(
    private campaignService: CampaignService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCampaigns();
  }

  getCampaigns(): void {
    this.campaignService.getCampaigns().subscribe(
      (data: ICampaign[]) => {
        this.dataSource = new MatTableDataSource(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addNewCapaignButton(): void {
    this.openCampaignForm();
  }

  openCampaignForm(campaign?: any): void {
    const dialogRef = this.dialog.open(CampaignFormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.campaignService.addCampaign(result).subscribe({
        next: (updatedCampaign) => {
          console.log('Campaign created successfully:', updatedCampaign);
          this.getCampaigns();
        },
        error: (err) => {
          console.error('Error updating campaign:', err);
        },
      });
    });
  }
}
