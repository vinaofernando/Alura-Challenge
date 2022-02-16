import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personalizacao',
  templateUrl: './personalizacao.component.html',
  styleUrls: ['./personalizacao.component.css'],
})
export class PersonalizacaoComponent implements OnInit {
  @Input() form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form.addControl('linguagem', new FormControl(''));
    this.form.addControl('color', new FormControl('#6BD1FF'));
  }
}
