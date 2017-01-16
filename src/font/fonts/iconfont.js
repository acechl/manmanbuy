;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-arrowup" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 32l-480 480 288 0 0 512 384 0 0-512 288 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiazai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M873.152 319.552 873.152 378.496 965.184 378.496 965.184 965.056 58.816 965.056 58.816 378.496 148.16 378.496 148.16 319.552 0 319.552 0 1024 1024 1024 1024 319.552Z"  ></path>' +
    '' +
    '<path d="M481.728 0l60.224 0 0 564.608-60.224 0 0-564.608Z"  ></path>' +
    '' +
    '<path d="M512 546.688 782.592 317.056 830.144 374.912 512 641.856 193.856 374.912 241.408 317.056Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuobiankuohao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M736.41984 885.0432c7.74144 7.74144 8.4992 20.8896 0.79872 29.3888-7.76192 8.4992-20.91008 8.4992-28.59008 0.77824L288.27648 529.63328c-8.4992-6.94272-9.27744-20.0704-1.536-28.59008L693.92384 108.52352c7.76192-7.72096 20.91008-6.9632 28.59008 0.77824 7.76192 8.4992 7.76192 20.86912-0.73728 28.59008L331.55072 514.9696 736.41984 885.0432z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)