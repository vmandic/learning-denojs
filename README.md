# Learning Deno JS (a better and more fun Node JS)

(I am using) this repository (which) contains sample code used for learning in a file by file approach to better understanding Deno JS concepts and usage.

## Basic commands

Use `deno run "filename"` to run deno programs.

Use `deno compile "filename"` to compile into a single executable.

## Editor support

To enable vscode autocomplete create a .vscode\setting.json > `{"deno.enable": true}` and also install the deno extension: <https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno>.

## (**Super awesome**) core concepts

- single executable (`deno compile`)
- typescript out of the box, no .tsconfig
- no node_modules, only ES imports, import files directly, no package.json
- isolated execution; you must specify what is allowed, eg. file (disk I/O) access or web (address) access

## Top level await

Deno supports top level await, meaning that you can write `await` statements in top level scope without needing an explicit `async function` scope.

---
More intro details can be found on the official tutorial page: <https://deno.land/manual@v1.6.2/introduction>
