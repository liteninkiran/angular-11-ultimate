import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectsService } from './projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

    public projects: Project[];

    constructor(private projectsService: ProjectsService) { }

    ngOnInit(): void {
        this.projectsService.getAllProjects().subscribe((response: Project[]) => {
            this.projects = response;
        });
    }

}
