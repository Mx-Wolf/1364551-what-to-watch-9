export const  AppRoute = {
  Main : '/',
  SignIn : '/login',
  MyList  : '/mylist',
  Film :  (id:number|':id')=>`/films/${id}`,
  AddReview : (id:number|':id')=>`/films/${id}/review`,
  Player : (id:number|':id')=> `/player/${id}`,
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DECIMAL = 10;
