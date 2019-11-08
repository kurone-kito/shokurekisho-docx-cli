# shokurekisho-docx-cli

[![npm version](https://badge.fury.io/js/%40kurone-kito%2Fshokurekisho-docx-cli.svg)](https://badge.fury.io/js/%40kurone-kito%2Fshokurekisho-docx-cli)

[JSON Resume 形式](https://jsonresume.org)のプロフィール情報から、日本のお堅い系企業ウケしそうな様式の職務経歴書を docx ファイル形式で生成します。
Generate a Word docx file of Japanese-style resume (職務経歴書) from JSON Resume for cli

## Requires

Node.JS >= v8.16

## Usage

```sh
npm i -g @kurone-kito/shokurekisho-docx-cli
shokurekisho build resume.json resume.docx
shokurekisho -h
```

### Extended JSON-Resume

標準の[JSON Resume 形式](https://jsonresume.org)に加え、拡張した形式を読み込むことができます。
In addition to the standard JSON Resume format, the extended format can be read.

```JSON
{
  "projects": [
    {
      ...
      "env": {
        "os": ["Windows XP", "AIX"],
        "language": ["PL/I", "COBOL"],
        "platforms": ["Excel 2000"]
      }
    }
  ],
  "skills": [
    {
      ...
      "tags": "language"
    },
    {
      ...
      "tags": ["tools", "foobar"]
    }
  ]
}
```

## License

MIT
