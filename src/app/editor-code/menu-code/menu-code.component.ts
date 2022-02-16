import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-code',
  templateUrl: './menu-code.component.html',
  styleUrls: ['./menu-code.component.css'],
})
export class MenuCodeComponent implements OnInit {
  public formNovoProjeto = this.formBuilder.group({
    nomeProjeto: ['', Validators.required],
    descricaoProjeto: ['', Validators.required],
    linguagem: ['', Validators.required],
  });

  @Output() linguagemAtualizada: EventEmitter<string> =
    new EventEmitter<string>();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.formNovoProjeto
      .get('linguagem')
      ?.valueChanges.subscribe((linguagem) =>
        this.linguagemAtualizada.emit(linguagem)
      );
  }
}
