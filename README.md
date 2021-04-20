# 📄 &lt;職歴書&gt; - shokurekisho-docx-cli

[![npm version](https://badge.fury.io/js/%40kurone-kito%2Fshokurekisho-docx-cli.svg)](https://badge.fury.io/js/%40kurone-kito%2Fshokurekisho-docx-cli)

Generate a Word docx file of Japanese-style resume (職務経歴書) from JSON Resume for cli.  
[**JSON Resume** 形式](https://jsonresume.org)のプロフィール情報から、日本のお堅い系企業ウケしそうな様式の職務経歴書を docx ファイル形式で生成します。

## Requires

Node.js &gt;= v13 (**Strongly recommended**)

or

Node.js &gt;= v8.10 and &lt; v13, and a [latest `full-icu` package](https://github.com/unicode-org/full-icu-npm)

## Usage

### on Node.js &gt;= v13

```sh
npm install --global @kurone-kito/shokurekisho-docx-cli
shokurekisho build resume.json resume.docx
```

### on Node.js &gt;= v8.10 and &lt; v13

```sh
npm install --global @kurone-kito/shokurekisho-docx-cli full-icu
NODE_ICU_DATA=$(node-full-icu-path) shokurekisho build resume.json resume.docx
```

## Help

```sh
$ hokurekisho --help
Usage: shokurekisho [options] [command]

Options:
  -V, --version                   output the version number
  -h, --help                      output usage information

Commands:
  build|b <source> [destination]  Generate docx of resume from JSON.
```

### Extended JSON-Resume

In addition to the standard JSON Resume format, the extended format can be read.  
標準の[JSON Resume 形式](https://jsonresume.org)に加え、拡張した形式を読み込むことができます。

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
