import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CampaignService } from '../campaign.service';
import { ICampaign } from '../interfaces/campaign';
import { CampaignFormComponent } from '../campaign-form/campaign-form.component';

@Component({
  selector: 'app-campaigns-table',
  templateUrl: './campaigns-table.component.html',
  styleUrls: ['./campaigns-table.component.scss'],
})
export class CampaignsTableComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<ICampaign> = new MatTableDataSource();

  @Input() getCampaigns!: () => void;

  displayedColumns: string[] = [
    'name',
    'keywords',
    'bid_amount',
    'campaign_fund',
    'status',
    'town',
    'radius',
    'actions',
  ];

  constructor(
    private campaignService: CampaignService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  updateCampaignButton(campaign: any): void {
    this.openCampaignForm(campaign);
  }

  deleteCampaignButton(campaign: ICampaign): void {
    this.campaignService.deleteCampaign(campaign.id).subscribe({
      next: () => {
        this.openSnackBar('Deleted Campaign successfully');
        this.getCampaigns();
      },
      error: (err) => {
        this.openSnackBar('error:' + err);
      },
    });
  }

  openCampaignForm(campaign?: any): void {
    const dialogRef = this.dialog.open(CampaignFormComponent, {
      data: { campaign: campaign },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (campaign && result) {
        this.campaignService.updateCampaign(campaign.id, result).subscribe({
          next: (updatedCampaign) => {
            this.openSnackBar('Updated Campaign successfully');
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
