export type CodeArea = {
  syntax: string;
  code: string;
  color: string;
  texteArea: string;
  titulo: string;
  url?: string;
};

export type Code = Array<CodeArea>;
