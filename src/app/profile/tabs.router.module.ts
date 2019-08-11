import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './profile.page';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfilePage,
        children: [
            {
                path: 'playdates',
                children: [
                    {
                        path: '',
                        loadChildren: '../playdates/playdates.module#PlaydatesPageModule'
                    }
                ]
            },
            {
                path: 'events',
                children: [
                    {
                        path: '',
                        loadChildren: '../events/events.module#EventsPageModule'
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: '../settings/settings.module#SettingsPageModule'
                    }
                ]
            },
            {
                path: 'myprofile',
                children: [
                    {
                        path: '',
                        loadChildren: '../myprofile/myprofile.module#MyprofilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/profile/playdates',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/profile/profile/playdates',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsRouterModule {}
