This react hook exposes the current window width to our react component. It also considers window resizing.

## Installation

```markdown
npm install hook-usewindowwidth
```

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import useWindowWidth from 'hook-usewindowwidth';

const DisplayWindowWidth = () => {
    const windowWidth = useWindowWidth();
    return (
      <p>The current window width is {windowWidth}</p>
    )
}

ReactDOM.render(<DisplayWindowWidth />, rootElement);
```

## Requirements
This hook requires `React 16.8.0` or higher. As a result `React 16.8.0` is also a peer dependency of this package.