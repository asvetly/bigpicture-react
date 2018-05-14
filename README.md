# bigpicture-react

# react-bigpicture
React Lightbox Component based on BigPicture.js / Video and Image

```
npm install @ugg0t/bigpicture-react --save
yarn add @ugg0t/bigpicture-react
```


```javascript
import React from 'react';
import { render } from 'react-dom';
import { BPImage, BPVideo, BPYoutube, BPVimeo } from '@ugg0t/bigpicture-react';

render(
    <div>
        <BPImage
          src="http://lorempixel.com/1200/700/sports/1"
          caption="Example of an optional caption."  
        >
            <img src="http://lorempixel.com/400/200/sports/1" />
        </BPImage>

        <BPVideo src="http://www.html5videoplayer.net/videos/toystory.mp4">
            <img src="http://lorempixel.com/400/200/sports/2" />
        </BPVideo>

        <BPYoutube src="https://www.youtube.com/watch?v=v_ThypI2bSo">
            <img src="http://lorempixel.com/400/200/sports/3" />
        </BPYoutube>

        <BPVimeo src="https://vimeo.com/119287310">
            <img src="http://lorempixel.com/400/200/sports/5" />
        </BPVimeo>
    </div>,
  document.querySelector('#root')
);
```

![horizontal with codes](https://media.giphy.com/media/nlSqALz5JMItdoHdfC/giphy.gif)

BigPicture by @henrygd https://github.com/henrygd/bigpicture