import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  towns: any[] = [];
  constructor(
    private campaignService: CampaignService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
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

    this.campaignService.getTowns().subscribe(
      (data: any) => {
        this.towns = data;
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
      if (result) {
        this.campaignService.addCampaign(result).subscribe({
          next: (updatedCampaign) => {
            this.openSnackBar('Added new Campaign successfully');
            this.getCampaigns();
          },
          error: (err) => {
            this.openSnackBar('error:' + err);
          },
        });
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 4000,
    });
  }
}
