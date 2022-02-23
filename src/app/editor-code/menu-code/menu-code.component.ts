import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { CodeComponent } from '../code/code.component';

@Component({
  selector: 'app-menu-code',
  templateUrl: './menu-code.component.html',
  styleUrls: ['./menu-code.component.css'],
})
export class MenuCodeComponent implements OnInit {
  @Output() public formNovoProjeto = this.formBuilder.group({
    nomeProjeto: ['', Validators.required],
    descricaoProjeto: ['', Validators.required],
    linguagem: ['', Validators.required],
  });

  @Output() linguagemAtualizada: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() colorAtualizada: EventEmitter<string> = new EventEmitter<string>();
  @Output() tituloAtualizado: EventEmitter<string> = new EventEmitter<string>();
  @Output() descricaoAtualizada: EventEmitter<string> =
    new EventEmitter<string>();

  @Input() formatarCode!: Subject<string>;

  public color!: string;
  constructor(
    private formBuilder: FormBuilder,
    private codeEditor: CodeComponent
  ) {}

  ngOnInit(): void {
    this.formNovoProjeto.addControl('nomeProjeto', new FormControl(''));
    this.formNovoProjeto.addControl('descricaoProjeto', new FormControl(''));

    this.formNovoProjeto
      .get('nomeProjeto')
      ?.valueChanges.subscribe((nomeProjeto) =>
        this.tituloAtualizado.emit(nomeProjeto)
      );

    this.formNovoProjeto
      .get('descricaoProjeto')
      ?.valueChanges.subscribe((descricaoProjeto) =>
        this.descricaoAtualizada.emit(descricaoProjeto)
      );
  }

  ngAfterViewInit() {
    this.formNovoProjeto
      .get('linguagem')
      ?.valueChanges.subscribe((linguagem) =>
        this.linguagemAtualizada.emit(linguagem)
      );

    this.formNovoProjeto
      .get('color')
      ?.valueChanges.subscribe((color) => this.colorAtualizada.emit(color));
  }

  salvarTeste() {
    return this.codeEditor.salvarCor();
  }
}
