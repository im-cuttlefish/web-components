export const applyTemplate = (content: string) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet">
    <style>
      /* ress.css * v1.2.2 */
      html{box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%}*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{padding:0;margin:0}audio:not([controls]){display:none;height:0}hr{overflow:visible}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}summary{display:list-item}small{font-size:80%}[hidden],template{display:none}abbr[title]{border-bottom:1px dotted;text-decoration:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}input{border-radius:0}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer}[disabled]{cursor:default}[type=number]{width:auto}[type=search]{-webkit-appearance:textfield}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:0;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:1px dotted ButtonText}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,select{text-transform:none}button,input,select,textarea{background-color:transparent;border-style:none;color:inherit}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;max-width:100%;white-space:normal}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}img{border-style:none}progress{vertical-align:baseline}svg:not(:root){overflow:hidden}audio,canvas,progress,video{display:inline-block}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute!important;clip:rect(0 0 0 0)!important}}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}

      html {
        line-height: 1.75;
        font-family: 'Noto Sans JP', sans-serif;
      }
    </style>
  </head>
  <body>
    ${content}
  </body>
</html>`;
