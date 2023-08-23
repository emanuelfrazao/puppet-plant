# Flowery

## goal

the idea being: go beyond the captcha — just for kicks, and flowers (for pedagogical purposes 🫠)

## spec

### user
* get many plant images from https://garden.org/plants
* in an automated fashion, given that the website 
    * does not provide an API
    * does not provide downloadable datasets
    * is protected by Captcha

### functional
* the website has a URL for each subspecies, `https://garden.org/plants/view/{ppid}`, with `ppid in 1..>800_000`, where it stores
    * (optional) basic info, including plant family,
    * (optional) user-uploaded images of the subspecies
    * or else it doesn't contain any plant for that `ppid`
* scraping needs a web-driver to reach the website, and handle the Captcha
* furthermore, the easiest is for the webdriver to be a head-full browser, so that we can handle the Captcha as proper humans
* in python, both selenium and playwright cannot connect to an existing browser window — so we're using puppeteer with nodejs, which can connect to Chrome

#### connecting to existing chrome window

Using ***ref-1.***, we can connect to an existing Chrome window, and then use puppeteer to control it — in MacOS:
* open chrome through the terminal with:
    * `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chrome-remote_data_dir')`
* devtools will be listening on some prompted url, like:
    * `ws:/127.0.0.1:9222/devtools/browser/efe3022a-67ed-4510-982f-5ac1e2819fcd`
* then we just feed that url to `puppeteer.connect({browserWSEndpoint: <url>})`
* and we're able to use puppeteer to control the browser

#### scraping


## requirements
* nodejs and npm
* some packages
* chrome

## usage
* `npm install` to install the packages

## refs

1. [Connecting web-driver to an existing window](https://medium.com/@jaredpotter1/connecting-puppeteer-to-existing-chrome-window-8a10828149e0) — medium
