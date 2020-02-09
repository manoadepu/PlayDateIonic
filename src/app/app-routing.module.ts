import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'playdates', loadChildren: './playdates/playdates.module#PlaydatesPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'myprofile', loadChildren: './myprofile/myprofile.module#MyprofilePageModule' },
  { path: 'search-by-username', loadChildren: './search-by-username/search-by-username.module#SearchByUsernamePageModule' },
  { path: 'display-searched-user', loadChildren: './display-searched-user/display-searched-user.module#DisplaySearchedUserPageModule' },
  { path: 'request-play-date-modal', loadChildren: './request-play-date-modal/request-play-date-modal.module#RequestPlayDateModalPageModule' },
  { path: 'view-upcoming-playdates', loadChildren: './view-upcoming-playdates/view-upcoming-playdates.module#ViewUpcomingPlaydatesPageModule' },
  { path: 'upcoming-play-dates-modal', loadChildren: './upcoming-play-dates-modal/upcoming-play-dates-modal.module#UpcomingPlayDatesModalPageModule' },
  { path: 'search-near-by-modal', loadChildren: './search-near-by-modal/search-near-by-modal.module#SearchNearByModalPageModule' },
  { path: 'message-display-modal', loadChildren: './message-display-modal/message-display-modal.module#MessageDisplayModalPageModule' },
  { path: 'show-user-profile-modal', loadChildren: './show-user-profile-modal/show-user-profile-modal.module#ShowUserProfileModalPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'request-user-to-participate-in-event-modal', loadChildren: './request-user-to-participate-in-event-modal/request-user-to-participate-in-event-modal.module#RequestUserToParticipateInEventModalPage' },
  { path: 'edit-user-details-modal', loadChildren: './modals/edit-user-details-modal/edit-user-details-modal.module#EditUserDetailsModalPageModule' },
  { path: 'show-requested-play-dates-modal', loadChildren: './modals/show-requested-play-dates-modal/show-requested-play-dates-modal.module#ShowRequestedPlayDatesModalPageModule' },
  { path: 'view-event-details-modal', loadChildren: './modals/view-event-details-modal/view-event-details-modal.module#ViewEventDetailsModalPageModule' },
  { path: 'view-participant', loadChildren: './modals/view-participant/view-participant.module#ViewParticipantPageModule' },
  { path: 'play-dates-created-by-user', loadChildren: './modals/play-dates-created-by-user/play-dates-created-by-user.module#PlayDatesCreatedByUserPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
