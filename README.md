Smileyfixer
===========

Addon originally developed by Richard Quirk (see https://github.com/richq/smileyfixer).
This is a modified version for Thunderbird 78.4+ using MailExtensions.

Description from the [original readme](https://github.com/richq/smileyfixer):

> Outlook sends emails with a J instead of the smiley :)
> 
> The reason is due to the Wingdings font face, which is missing on non-Windows
> platforms. This add-on fixes the most common situations.
> 
> More details:
> 
> http://lifehacker.com/5574668
> http://superuser.com/questions/159334

The [code for the core logic](scripts/smileyfixer.js) and the [locales](_locales) are taken from the [original addon](https://github.com/richq/smileyfixer) that is published under [Apache version 2.0 license](http://www.apache.org/licenses/LICENSE-2.0.html).
The remaining code for MailExtensions is taken from the nicely written addon [colorediffs](https://github.com/Qeole/colorediffs/) by Qeole licensed under [MPL 2.0](MPL-2.0).

Installation
------------

Clone the repository and build the extension.

```bash
    git clone https://github.com/matthias-g/smileyfixer.git
    cd smileyfixer
    make
```

In Thunderbird, go to the "Add-ons Manager" and use "Install Add-on From File..." to install the resulting xpi file.
