import { Component, OnInit } from '@angular/core';

interface CloudService {
  acronym: string;
  fullName: string;
}

const CLOUD_SERVICES: CloudService[] = [
  {
    acronym: 'AWS',
    fullName: 'Amazon Web Services',
  },
  {
    acronym: 'Azure',
    fullName: 'Microsoft Azure',
  },
  {
    acronym: 'GCP',
    fullName: 'Google Cloud Platform',
  },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cloudServices: CloudService[] = CLOUD_SERVICES;
  selectedCloudService: CloudService | undefined;

  constructor() {}

  ngOnInit(): void {}

  selectSvc(svc: CloudService) {
    this.selectedCloudService = svc;
  }
}
