import { Observable, Subject, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomainsService } from 'src/shared/services/domains.service';
import { StorageService } from 'src/shared/services/storage.service';
import { Options } from 'src/shared/components/dynamic-select/interfaces/select-interface';
import { AffirmationMessages, LocalStorage } from 'src/app/enums';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-itens',
  templateUrl: './create-itens.component.html',
  styleUrls: ['./create-itens.component.scss'],
  providers: [ MatSnackBar ]
})
export class CreateItensComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  categories!: Options[];
  categories$!: Observable<Options[]>;

  private destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private storage: StorageService,
    private domains: DomainsService,    
    private snackBar: MatSnackBar
  ) { 
    this.buildForm();
  }  

  ngOnInit(): void {
    this.formRules();
    this.getCategoriesValues();
    console.log("[ngOnInit]", this.storageSavedData);
    
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.unsubscribe();
  }

  private buildForm() {
    this.form = this.fb.group({
      nomeItem: [null, [Validators.required, Validators.maxLength(70)]],
      categoria: [null, Validators.required],
      quantidade: [null],
      preco: [null],
      ativo: [null, Validators.required]
    })
  }

  private formRules() {
    const checkIsFieldRequired = ['quantidade', 'preco'];
    this.form.get('ativo')?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe({
      next: (value) => {        
        console.log("[formRules]", value);
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

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
    else {
      const savedItens = this.storageSavedData;
      savedItens.push(this.form.getRawValue());
      this.storage.setItem(LocalStorage.ItensSaved, savedItens);
      this.snackBar.open(AffirmationMessages.SAVE_SUCCESS, '', {
        duration: 3000
      });
      this.form.reset();
    }
  }

  private getCategoriesValues() {
    this.categories$ = this.domains.getCategory()        
  }  

  get storageSavedData(): any {
    return this.storage.getItem(LocalStorage.ItensSaved);
  }
}
