import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICampaign } from '../interfaces/campaign';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss'],
})
export class CampaignFormComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CampaignFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.data?.campaign?.name || '', Validators.required],
      keywords: [this.data?.campaign?.keywords || '', Validators.required],
      bid_amount: [this.data?.campaign?.bid_amount || '', Validators.required],
      campaign_fund: [
        this.data?.campaign?.campaign_fund || '',
        Validators.required,
      ],
      status: [this.data?.campaign?.status || '', Validators.required],
      town: [this.data?.campaign?.town || ''],
      radius: [this.data?.campaign?.radius || ''],
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
}
