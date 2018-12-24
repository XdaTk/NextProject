import { Component, Input } from '@angular/core';
import { UiLayout } from '../../../../services/ui.service';

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @Input() public config: UiLayout;
}
