# jquery.safeHarbor [![Build Status](https://travis-ci.org/ndnhat/jquery-safeharbor.png)](https://travis-ci.org/ndnhat/jquery-safeharbor)

Safe Harbor is a jQuery plugin that creates a privacy policy notice and helps your web application conform with the US-EU Safe Harbor. Optionally, Safe Harbor can be paired with [jquery-cookie](https://github.com/carhartl/jquery-cookie) to memorize the user's acknowledgement and not show the notice in subsequent visits.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/ndnhat/jquery-safeharbor/master/jquery.safeharbor.min.js
[max]: https://raw.github.com/ndnhat/jquery-safeharbor/master/jquery.safeharbor.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="jquery.cookie.js"></script> <!-- Optional -->
<script src="jquery.safeharbor.js"></script>
<script>
jQuery(function($) {
  $.safeHarbor({text: 'This is our <a href="privacy.html">Privacy policy</a>'}); 
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/ndnhat/jquery-safeharbor/trend.png)](https://bitdeli.com/free "Bitdeli Badge")