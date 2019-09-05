# WidgetBar

## Short Description

The library is about to create customizable widget on your website. Content includes buttons showing up and closing widget 
as well as 'Get widget' button which would change widget with provided by user settings.

### Features:

* Simple, semantic markup.
* Doesn’t require any external library.
* Uses CSS3 transitions and touch events.

# Usage instructions

Following the steps below you will be able to get the library up and running.

1. Link files:
	```html
		<!-- Put these into the <head> -->
		<link rel="stylesheet" href="testbar.css">
	```
 
  ```html
  <!-- Put these before closing body tag</body> -->
  <script src="./widget.js"></script>
    <script>
        let myBar = new Bar({
            message: 'Add beautiful widgets to your website',
            position: 'top'
        })
         ```

2. Add markup:
	```html
		 <div class="wrapper">
        <div>
            <button class="displayBtn wrapper__showBtn--center">Show Bar</button>
        </div>
    </div>
	```
 # Customizable option:
 This library allows to customize three properties:
 
* Animate          //  Boolean
* Color            // String
* BackgroundColor  // String

Please note that above is optional as widget has its own default setting
This customizable options must be provided as an object as an argument within our initialisation.

### Please see example:

```html
<script>
  let myBar = new Bar({
    message: 'Add beautiful widgets to your website',
    position: 'top',
    myCustom: {
      animate: false,
      background: 'blue',
      color: 'black',
      }
  })
    </script>
	```


