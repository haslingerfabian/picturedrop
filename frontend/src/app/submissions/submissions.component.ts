import { WorkspaceListComponent } from './../workspace-list/workspace-list.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Vouchers, Workspace } from '../../../libs/src/app/api/models';
import { WorkspacesService } from '../../../libs/src/app/api/services';
import { VouchersService } from '../../../libs/src/app/api/services/vouchers.service';

@Component({
  selector: 'app-submissions',
  imports: [CommonModule, WorkspaceListComponent],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss'
})
export class SubmissionsComponent {
    workspaces: Workspace[] = [];
    vouchers: Vouchers[] = [];
    selectedWorkspaceId: number | null = null;
    filteredVouchers: Vouchers[] = [];

    constructor(
      private workspacesService: WorkspacesService,
      private vouchersService: VouchersService
    ) {}

    ngOnInit()
    {
      this.loadWorkspaces();
      this.loadVouchers();
    }

    loadWorkspaces(): void {
      this.workspacesService.getAllWorkspaces().subscribe({
        next: (data) => {
          this.workspaces = Array.isArray(data) ? data : [data];
        },
        error: (err) => {
          console.error('Fehler beim Laden der Workspaces:', err);
        }
      });
    }

    loadVouchers(): void {
      this.vouchersService.getAllVouchers().subscribe({
        next: (data) => {
          this.vouchers = Array.isArray(data) ? data : [data];
        },
        error: (err) => {
          console.error('Fehler beim Laden der Vouchers:', err);
        }
      });
    }
    selectWorkspace(workspaceId: number): void {
      this.selectedWorkspaceId = workspaceId;
      this.filteredVouchers = this.vouchers.filter(voucher => voucher.WorkspaceId === workspaceId.toString());
    }
}
