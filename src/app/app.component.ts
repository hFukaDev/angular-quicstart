/*
 * angularアプリケーションはコンポーネントで構成されています。
 * コンポーネントは、HTMLテンプレートとそれにバインドされるクラスの組み合わせ。
 */

// Componentでコレータを使うのでインポートする。
import { Component } from '@angular/core';

/*
 * Componentデコレータはコンポーネントクラスに対して必ずつける必要がある。
  */
@Component({
  // selectorプロパティはangularに対して、コンポーネントを表すタグの名前を示す。
  selector: 'my-app',
  // templateはselectorで示されたタグが、DOM上でどのように展開されるかを表す。
  // {{ }}で囲まれた名前はコンポーネントクラスのプロパティと対応する。
  template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`,
})
export class AppComponent  {
  title='Tour of Heroes';
  hero='Windstorm';
}
