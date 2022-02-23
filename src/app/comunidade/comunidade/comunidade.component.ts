import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.component.html',
  styleUrls: ['./comunidade.component.css'],
})
export class ComunidadeComponent implements OnInit {
  faHeart = faHeart;
  faComment = faComment;

  linguagemSelecionada$: Subject<string> = new Subject();
  textoSelecionado$: Subject<string> = new Subject();

  constructor(private readonly localStorageService: LocalStorageService) {}
  syntax!: string;
  color!: string;
  texteArea!: string;
  titulo!: string;
  code!: string;
  posts = JSON.parse(this.localStorageService.get('code'));

  ngOnInit(): void {}
  ngAfterViewInit() {}

  textoSelecionado($event: string) {}
}
