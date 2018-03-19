* Issue reproduction

The svg-sprite-loader output allways is by default 'sprite.svg'. Configuration roperty 'spriteFileName' doesn´t work.

* Installation

```
yarn 

yarn build
```

* Expectation

When the project is built the sprite name is 'sprite.svg' when the configuration is 
```javascript 
{
    include: path.join(__dirname, 'src'),
    exclude: /(node_modules)/,
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    options: {
        extract: true,
        spriteFileName: 'my-custom-name.svg'
    }
}
```

I think the output file name should be 'my-custom-name.svg'.