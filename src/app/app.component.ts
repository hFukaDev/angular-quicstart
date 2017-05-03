/*
 * angularアプリケーションはコンポーネントで構成されています。
 * コンポーネントは、HTMLテンプレートとそれにバインドされるクラスの組み合わせ。
 */

// Componentでコレータを使うのでインポートする。
import { Component } from '@angular/core';

// 表示データを扱うためのデータクラス。
// ヒーローのデータを扱うので、IDと名前のメンバを持つ。
export class Hero {
  id: number;
  name: string;
}
// ヒーロー一覧に表示するデータ
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


/*
 * Componentデコレータはコンポーネントクラスに対して必ずつける必要がある。
  */
@Component({
  // selectorプロパティはangularに対して、コンポーネントを表すタグの名前を示す。
  selector: 'my-app',
  // templateはselectorで示されたタグが、DOM上でどのように展開されるかを表す。
  // {{ }}で囲まれた名前はコンポーネントクラスのプロパティと対応する。
  // テンプレートはバッククオートで囲むことで複数行で記述することもできる。
  //
  // [[ngModle]]は、inputタグからの入力をコンポーネントに反映することもできる。
  // input/output両方に対応しているのでtwo way bindingと言われる。
  // ngModuleを使うにはFormsModuleを使う必要がある。
  // そのためapp.module.tsで@angular/formsからインポートする必要がある。
  //
  // *ngForディレクティブはリストデータを列挙する。
  // <tag *ngFor="let 変数名 of リストデータ">
  //  :
  // </tag>
  // tagの中が繰り返されるのではなくtagとその中身が繰り返される。
  template: `
    <h1>{{title}}</h1>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    `,

})
export class AppComponent  {
  title='Tour of Heroes';
  // ヒーローを文字列のデータから、追加したHeroオブジェクトに変更
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // ヒーロー一覧に表示するデータ
  heroes = HEROES;
}
