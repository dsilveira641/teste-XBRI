import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Options } from 'src/shared/interfaces/options';
import { DomainsService } from 'src/shared/services/domains.service';

@Component({
  selector: 'app-create-edit-form',
  templateUrl: './create-edit-form.component.html',
  styleUrls: ['./create-edit-form.component.scss']
})
export class CreateEditFormComponent implements OnInit, OnDestroy, OnChanges {
  
  @Input() data: any = null;

  form!: FormGroup;
  categories!: Options[];
  categories$!: Observable<Options[]>;
  
  private destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private domains: DomainsService,    
  ) { 
    this.buildForm();
  }
  
  ngOnInit(): void {
    console.log("[ngOnInit]");    
    this.getCategoriesValues();  
    this.formRules();
     
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("[ngOnChanges]", this.data);
    
    if (this.data) {
      this.form.patchValue(this.data.element);
    }
  }


  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.unsubscribe();
  }

  private buildForm() {
    this.form = this.fb.group({
      id: [null],
      nomeItem: [null, [Validators.required, Validators.maxLength(70)]],
      categoria: [null, Validators.required],
      quantidade: [null],
      preco: [null],
      ativo: [null, Validators.required]
    })
  }

  private formRules() {
    this.form.get('ativo')?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe({
      next: (value) => {                
        if (value) {
          this.form.get('quantidade')?.setValidators([Validators.required]);
          this.form.get('preco')?.setValidators([Validators.required]);    
        }
        else {
          this.form.get('quantidade')?.clearValidators();
          this.form.get('preco')?.clearValidators();    
        }

        this.form.get('quantidade')?.updateValueAndValidity();
        this.form.get('preco')?.updateValueAndValidity();
      }
    });
  }
  
  private getCategoriesValues() {
    this.categories$ = this.domains.getCategory()        
  }  
}
