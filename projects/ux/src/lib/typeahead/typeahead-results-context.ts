import {
  Injectable,
  TemplateRef
} from '@angular/core';

import { TypeaheadSearchResultAction } from './typeahead-search-result-action';

@Injectable()
export class TypeaheadResultsContext {
  public results: any[];
  public resultSelectedAction: TypeaheadSearchResultAction<any>;
  public searchResultsEmptyMessage: string;
  public templateRef: TemplateRef<any>;
}
