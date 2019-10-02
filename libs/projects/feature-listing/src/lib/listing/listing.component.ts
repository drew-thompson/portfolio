import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Project } from '@portfolio/data/models';
import { ProjectsService } from '@portfolio/projects/data-access';
import { detail, listing } from '@portfolio/projects/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'portfolio-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  animations: [listing, detail],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent implements OnInit, AfterViewInit {
  @ViewChild(RouterOutlet, { static: true }) outlet: RouterOutlet;

  projects$: Observable<Project[]>;
  isViewingDetail: boolean;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects$ = this.projectsService.getProjects();
  }

  ngAfterViewInit() {
    this.isViewingDetail = this.outlet.isActivated;
  }

  onActivated(): void {
    this.isViewingDetail = true;
  }

  onDeactivated(): void {
    this.isViewingDetail = false;
  }
}
