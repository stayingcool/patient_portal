import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { SettingsComponent } from './settings.component';

export const settingsRoute: Route = {
    path: 'settings',
    component: SettingsComponent,
    data: {
        authorities: ['ROLE_PATIENT'],
        pageTitle: 'Settings'
    },
    canActivate: [UserRouteAccessService]
};
