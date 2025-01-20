import { Component, Inject, Input } from '@angular/core';
import { SuggestedActivityViewModel } from '../../models/suggested-activity-view-model';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GoogleApiService } from 'src/app/services/google-api/google-api.service';

@Component({
  selector: 'app-suggested-activity-detailed',
  templateUrl: './suggested-activity-detailed.component.html',
  styleUrls: ['./suggested-activity-detailed.component.scss'],
})
export class SuggestedActivityDetailedComponent {
  @Input() activity!: SuggestedActivityViewModel;
  photosUri: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: DialogRef,
    private googleApiService: GoogleApiService
  ) {
    if (data) {
      this.activity = data;

      this.activity.photosReferences.forEach((photo) => {
        this.googleApiService.getPhoto(photo).subscribe({
          next: (value) => {
            this.photosUri.push(value);
          },
          error: (err) => console.log(err),
        });
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
