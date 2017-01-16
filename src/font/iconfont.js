;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xialakuang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M848 368c0-26.512-21.488-48-48-48-12.944 0-24.672 5.136-33.312 13.456l-0.016-0.016L511.888 588.224 260.4 336.736C251.6 326.496 238.56 320 224 320c-26.512 0-48 21.488-48 48 0 12.88 5.088 24.576 13.36 33.2l-0.128 0.128 288 288 0.016-0.016C485.984 698.368 498.224 704 511.792 704c0.032 0 0.064 0 0.112 0 0.032 0 0.064 0 0.112 0 13.584 0 25.792-5.632 34.544-14.688l0.016 0.016 288-288-0.016-0.016C842.88 392.688 848 380.944 848 368z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wangluo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M736.232934 118.192202h-448.922521L62.848129 506.970675 287.309389 895.749148h448.922521l224.46126-388.778473L736.232934 118.192202zM714.634073 858.33945H308.90825l-202.862399-351.368775L308.909274 155.602924h405.725823l202.862399 351.368775L714.634073 858.33945z"  ></path>' +
    '' +
    '<path d="M680.117875 521.647048c-14.008799 0-26.808389 5.145024-36.64076 13.634057l-136.371287-77.926889A93.415201 93.415201 0 0 0 511.771674 428.121266a93.632265 93.632265 0 0 0-3.184284-24.257891l95.178332-47.589166c10.092438 9.734078 23.812501 15.731998 38.941431 15.731998 30.991985 0 56.115059-25.124098 56.115059-56.115059 0-30.991985-25.124098-56.115059-56.115059-56.115059-30.991985 0-56.115059 25.124098-56.115059 56.115059 0 2.346745 0.16075 4.653559 0.44027 6.924537l-95.186523 47.593261c-17.122434-21.805686-43.725023-35.813461-73.599949-35.813461-51.652967 0-93.525781 41.872814-93.525781 93.525781 0 39.839378 24.913178 73.854896 60.006848 87.333323l-13.646344 81.87499c-26.33945 4.618747-46.361528 27.590638-46.361528 55.252948 0 30.991985 25.124098 56.115059 56.11506 56.115059 30.991985 0 56.115059-25.124098 56.115059-56.115059 0-21.142208-11.696866-39.544499-28.96674-49.112708l13.648391-81.891372c26.64252-0.949142 50.444782-13.038156 66.891453-31.755803l136.38562 77.934055a56.411986 56.411986 0 0 0-0.907162 10.004384c0 30.991985 25.124098 56.115059 56.115059 56.115059 30.991985 0 56.115059-25.124098 56.115059-56.115059 0.002048-30.989937-25.121026-56.114035-56.113011-56.114035z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yunyingguanli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M736.232934 118.192202h-448.922521L62.848129 506.970675 287.309389 895.749148h448.922521l224.46126-388.778473L736.232934 118.192202zM714.634073 858.33945H308.90825l-202.862399-351.368775L308.909274 155.602924h405.725823l202.862399 351.368775L714.634073 858.33945z" fill="" ></path>' +
    '' +
    '<path d="M586.137489 389.350825h35.451005v37.60014h-35.451005zM586.137489 463.476027h35.451005v36.526085h-35.451005z" fill="" ></path>' +
    '' +
    '<path d="M454.000992 299.110692v336.251107h-110.651287v-61.96042c17.313901-7.12829 29.507351-24.158574 29.507351-44.043451 0-26.299518-21.31934-47.618859-47.618859-47.618859s-47.618859 21.31934-47.618858 47.618859c0 19.352457 11.551474 35.996736 28.130225 43.445502v99.084455h148.251428v37.60014h224.525765V299.110692H454.000992z m187.99968 372.777193H492.675188V336.710832h149.325484v335.177053z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiazaiAPP-gerenzhongxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M481.28 844.8l30.72 35.84 30.72-35.84 353.28-389.12c10.24-10.24 5.12-20.48 0-30.72-10.24-10.24-20.48-5.12-30.72 0l-332.8 363.52V20.48c0-10.24-10.24-20.48-20.48-20.48s-20.48 10.24-20.48 20.48v768L158.72 424.96c-5.12-5.12-20.48-5.12-30.72 0-10.24 10.24-10.24 20.48 0 30.72l353.28 389.12z"  ></path>' +
    '' +
    '<path d="M988.16 680.96c-10.24 0-20.48 10.24-20.48 20.48v225.28c0 25.6-20.48 46.08-46.08 46.08H97.28c-25.6 0-46.08-20.48-46.08-46.08v-225.28c0-10.24-10.24-20.48-20.48-20.48s-20.48 10.24-20.48 20.48v225.28c0 51.2 40.96 87.04 92.16 87.04h819.2c51.2 0 92.16-40.96 92.16-87.04v-225.28c-5.12-10.24-15.36-20.48-25.6-20.48z"  ></path>' +
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