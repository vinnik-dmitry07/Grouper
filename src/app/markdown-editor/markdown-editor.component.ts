import {Component, Input, OnInit} from '@angular/core';
import {MdEditorOption, UploadResult} from 'ngx-markdown-editor';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.css']
})

export class MarkdownEditorComponent implements OnInit {
  static defaultContent = MarkdownEditorComponent.initDefaultContent();

  public options: MdEditorOption = {
    showPreviewPanel: true,
    enablePreviewContentClick: true,
    resizable: false,
    customRender: {
      image(href: string, title: string, text: string): string {
        let out = `<img style="max-width: 100%;" src="${href}" alt="${text}"`;
        if (title) {
          out += ` title="${title}"`;
        }
        out += (this.options as any).xhtml ? '/>' : '>';
        return out;
      }
    },
    markedjsOpt: {
      sanitize: true
    }
  };

  @Input()
  public content;

  @Input()
  public mode;

  constructor() {
  }

  static initDefaultContent(): string {
    const contentArr = ['# Приклад заголовку'];
    contentArr.push('```javascript ');
    contentArr.push('// Приклад коду');
    contentArr.push('function Test() {');
    contentArr.push('	console.log("Test");');
    contentArr.push('}');
    contentArr.push('```');
    contentArr.push(' Приклад | Таблиці');
    contentArr.push(' ---- | ----');
    contentArr.push(' *Курсив* | **Жирний**');
    contentArr.push('![Приклад зображення](http://csc.knu.ua/media/departments/c373f20b-a959-4c20-aaa3-b50989fb8858.png)');
    contentArr.push('');
    contentArr.push('- [ ] Приклад');
    contentArr.push('- [x] Списку');
    contentArr.push('- Тест');
    contentArr.push('');
    contentArr.push('[Приклад посилання](https://www.google.com)');
    contentArr.push('');
    return contentArr.join('\r\n');
  }

  ngOnInit(): void {
    if (!this.content) {
      this.content = MarkdownEditorComponent.defaultContent;
    }
  }

  doUpload(files: Array<File>): Promise<Array<UploadResult>> {
    console.log(files);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result: Array<UploadResult> = [];
        for (const file of files) {
          result.push({
            name: file.name,
            url: `https://avatars3.githubusercontent.com/${file.name}`,
            isImg: file.type.indexOf('image') !== -1
          });
        }
        resolve(result);
      }, 3000);
    });
  }

  onEditorLoaded(editor): void {
    // console.log(`ACE Editor Ins: `, editor);
    // editor.setOption('showLineNumbers', false);

    // setTimeout(() => {
    //   editor.setOption('showLineNumbers', true);
    // }, 2000);
  }

  preRender(mdContent): string {
    // console.log(`preRender fired`);
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(mdContent);
    //   }, 4000);
    // })
    return mdContent;
  }

  postRender(html): string {
    // console.log(`postRender fired`);
    // return '<h1>Test</h1>';
    return html;
  }

  onPreviewDomChanged(dom: HTMLElement): void {
    // console.log(`onPreviewDomChanged fired`);
    // console.log(dom);
    // console.log(dom.innerHTML)
  }
}
