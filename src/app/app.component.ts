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


/*
 * Componentデコレータはコンポーネントクラスに対して必ずつける必要がある。
  */
@Component({
  // selectorプロパティはangularに対して、コンポーネントを表すタグの名前を示す。
  selector: 'my-app',
  // templateはselectorで示されたタグが、DOM上でどのように展開されるかを表す。
  // {{ }}で囲まれた名前はコンポーネントクラスのプロパティと対応する。
  // テンプレートはバッククオートで囲むことで複数行で記述することもできる。
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
    `,
})
export class AppComponent  {
  title='Tour of Heroes';
  // ヒーローを文字列のデータから、追加したHeroオブジェクトに変更
  hero: Hero = {
  id: 1,
  name: 'Windstorm'
  };
}
