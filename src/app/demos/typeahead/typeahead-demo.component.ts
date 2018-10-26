import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TypeaheadSearchResultAction, TypeaheadSearchFunction } from 'projects/ux/src/public_api';
import { of } from 'rxjs';

@Component({
  selector: 'app-typeahead-demo',
  templateUrl: './typeahead-demo.component.html'
})
export class TypeaheadDemoComponent implements OnInit {
  public errors: any[];
  public reactiveForm: FormGroup;

  public findProductFunction: TypeaheadSearchFunction<any> = (searchText: string) => {
    return of([
      {
        imageUrl: '',
        name: 'Foobar',
        price: '5',
        url: ''
      }
    ]);
  }

  public searchResultAction: TypeaheadSearchResultAction<any> = (result: any) => {
    console.log('result?', result);
  }

  constructor(
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public submit(): void {}

  private createForm(): void {
    this.reactiveForm = this.formBuilder.group({
      name: new FormControl(null, [
        Validators.required
      ])
    });
  }
}
