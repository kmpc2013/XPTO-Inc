import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CepService } from '../../services/cep.service';
import { BackService } from '../../services/back.service';
import { IBranche } from '../../interface/IBranche';

@Component({
  selector: 'app-new-map',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-map.component.html',
  styleUrl: './new-map.component.scss',
})
export class NewMapComponent {
  formGroup!: FormGroup;
  data = [];
  selectedFile: File | null = null;
  public allBranches: IBranche[] = [];

  constructor(
    private _diaLogRef: MatDialogRef<NewMapComponent>,
    private formBuilder: FormBuilder,
    public matSnackBar: MatSnackBar,
    private backService: BackService
  ) {}

  public closeModal() {
    return this._diaLogRef.close();
  }

  getAllBranches() {
    this.backService.getAllBranches().subscribe((data: IBranche[]) => {
      console.log("Coletando todas as filiais")
      this.allBranches = data;
    });
    
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
    this.backService.addRequest(this.formGroup.value).subscribe({
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
    this.getAllBranches();

    this.formGroup = this.formBuilder.group({
      ponto_de_coleta: ['', Validators.required],
      unidade_destino: ['', Validators.required],
      mercadoria: ['', Validators.required],
      estado: 'Disponível para coleta',
    });
  }
}
