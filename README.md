# KSFace
a modern real minimalistic frontend boilerplate.

## Usage
Simply use npm to install KSFace into your project:

`npm install ksface`

After installing, import the **"ksface.css" file from /dist folder** into your projects stylesheet. 

## Customization
Your Project needs to be able to handle and compile SASS (.scss) files, if you want to modify the default settings of KSFace.

First import the "index.scss" file from /src folder into your projects scss stylesheet.

Now you are able to modify the default variables set within /src/variables.scss by overwriting them inside of your scss file (after importing the index.scss file from KSFace).

For example, to overwrite the default font-size property:

`@import 'ksface/src/scss/index.scss';`

`$font-size: 20px;`
