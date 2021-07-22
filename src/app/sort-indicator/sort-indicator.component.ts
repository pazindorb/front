import {Component, Input} from '@angular/core';
import {SearchMode} from "../enums/search-mode";


@Component({
  selector: 'sort-indicator',
  templateUrl: './sort-indicator.component.html',
  styleUrls: ['./sort-indicator.component.css']
})
export class SortIndicatorComponent {

  @Input() expectedSearchMode: SearchMode | undefined;
  @Input() activeSearchMode: SearchMode | undefined;
  @Input() increasingSearch: boolean = false;

}
