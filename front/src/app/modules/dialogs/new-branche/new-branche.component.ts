import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CepService } from '../../services/cep.service';
import { BackService } from '../../services/back.service';

@Component({
  selector: 'app-new-branche',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-branche.component.html',
  styleUrl: './new-branche.component.scss'
})
export class NewBrancheComponent {
  formGroup!: FormGroup;
  data = [];
  selectedFile: File | null = null;

  constructor(
    private _diaLogRef: MatDialogRef<NewBrancheComponent>,
    private formBuilder: FormBuilder,
    public matSnackBar: MatSnackBar,
    private cepService: CepService,
    private backService: BackService
  ) {}

  public closeModal() {
    return this._diaLogRef.close();
  }

  private clearAddressFields(): void {
    this.formGroup.patchValue(
      {
        street: '',
        city: '',
        state: '',
      },
      { emitEvent: false }
    );
  }
  
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
    this.backService.addBranches(this.formGroup.value).subscribe({
      next: (response) => {
        if (response.includes('yet')) {
          alert('Código já cadastrado!');
        } else {
          window.location.reload();
          alert('Cadastrado com sucesso!');
        }
      },
      error: (error) => {
        console.log(error);
        alert('Erro ao cadastrar');
      },
    });
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      codigo: ['', Validators.required],
      responsavel: ['', Validators.required],
      foto: ['file', this.selectedFile],
      cep: ['', Validators.required],
      uf: '',
      cidade: '',
      bairro: '',
      logradouro: '',
      numero: ['', Validators.required],
    });
  
    this.formGroup.get('cep')?.valueChanges.subscribe((cep) => {
      console.log('aqui');
      if (cep.length === 8) {
        this.cepService.getAddressByCep(cep).subscribe((data) => {
          if (data && !data.erro) {
            this.formGroup.patchValue({
              logradouro: data.logradouro,
              cidade: data.localidade,
              uf: data.uf,
              bairro: data.bairro,
            });
            console.log(data.logradouro);
          } else {
            this.clearAddressFields();
          }
        });
      } else {
        this.clearAddressFields();
      }
    });
  }
}
