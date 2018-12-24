import { Injectable } from '@angular/core';
import { UiLayout, UiLink } from '@next/ui';
import { environment } from '../environments/environment';

const sourceCode: UiLink = {
  label: 'Source Code',
  labelClass: 'd-none d-lg-inline',
  link: 'https://github.com/tabler/tabler-angular',
  linkClass: 'btn btn-sm btn-outline-primary ml-2',
  icon: 'fa fa-fw fa-github',
  external: true
};
const documentation: UiLink = {
  label: 'Documentation',
  labelClass: 'd-none d-lg-inline',
  link: 'https://tabler.github.io/tabler-angular/',
  linkClass: 'btn btn-sm btn-outline-success ml-2',
  icon: 'fa fa-fw fa-info',
  external: true
};
const fire: UiLink = {
  label: 'Firebase Demo',
  labelClass: 'd-none d-lg-inline',
  link: 'https://tabler-angular-fire.firebaseapp.com/',
  linkClass: 'btn btn-sm btn-outline-warning ml-2',
  icon: 'fa fa-fw fa-fire',
  external: true
};

@Injectable()
export class AppService {
  constructor(private ui: UiLayout) {
    this.init();
  }
  public init() {
    this.ui.appName = 'Next';
    this.ui.headerNav = [
      {
        label: 'Home',
        icon: 'fe fe-home',
        link: '/home'
      }
    ];
    this.ui.headerSubNav = [fire, documentation, sourceCode];
    this.ui.profile = {
      label: 'Jane Pearson',
      description: 'Administrator',
      avatar: 'assets/faces/female/1.jpg'
    };
    this.ui.profileNav = [
      {
        link: '/profile',
        label: 'Profile',
        icon: 'fe fe-user'
      },
      {
        link: '/',
        label: 'Settings',
        icon: 'fe fe-settings'
      },
      {
        link: '/messages',
        label: 'Inbox',
        icon: 'fe fe-mail',
        badge: {
          label: '6',
          color: 'primary'
        }
      },
      {
        link: '/messages/compose',
        label: 'New message',
        icon: 'fe fe-send'
      },
      {
        divider: true
      },
      {
        link: '/',
        label: 'Need help?',
        icon: 'fe fe-help-circle'
      },
      {
        link: '/login',
        label: 'Sign out',
        icon: 'fe fe-log-out'
      }
    ];

    const now = new Date().getTime();
    this.ui.notifications = [
      {
        avatarText: 'AB',
        from: 'AB',
        text: 'pushed new commit: Fix page load performance issue.',
        date: now - 10000
      },
      {
        avatarText: 'AB',
        from: 'AB',
        text: 'started new task: Tabler UI design.',
        date: now - 100000
      },
      {
        avatarText: 'AB',
        from: 'AB',
        text: 'deployed new version of NodeJS REST Api V3',
        date: now - 1000000
      }
    ];

    this.ui.footerSubNav = [[documentation], [sourceCode], [fire]];
    this.ui.footerSubText = `Premium and Open Source dashboard template with responsive and high quality UI. For Free!`;

    this.ui.footerNav = [documentation, sourceCode];
    this.ui.footerText = `
      Copyright © 2018 <a [href]="https://github.com/tabler/tabler-angular">tabler-angular</a>.
      Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>.
      Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
      MIT Licensed`;
  }
}
