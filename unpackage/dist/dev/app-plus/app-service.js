if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$u = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/Users/maxab/Projects/galchat/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$t = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      textColor: {
        type: String,
        default: "#000000"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.searchVal = "";
        this.$nextTick(() => {
          this.$emit("clear", { value: "" });
        });
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            style: vue.normalizeStyle({ color: $props.textColor }),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 44, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-f07ef577"], ["__file", "C:/Users/maxab/Projects/galchat/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$s = {
    props: {
      chat: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      },
      active: {
        type: Boolean,
        default: false
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-item" }, [
      vue.createElementVNode("image", {
        class: "avatar",
        src: $props.chat.avatar
      }, null, 8, ["src"]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "top-line" }, [
          vue.createElementVNode(
            "text",
            { class: "name" },
            vue.toDisplayString($props.chat.members.map((member) => member.nickname).join(", ")),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { class: "time" },
            vue.toDisplayString($props.chat.createdAt),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "bottom-line" }, [
          vue.createElementVNode(
            "text",
            { class: "message" },
            vue.toDisplayString($props.chat.lastMessage),
            1
            /* TEXT */
          ),
          $props.chat.unreadCount > 0 ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: "badge"
            },
            vue.toDisplayString($props.chat.unreadCount),
            1
            /* TEXT */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ])
    ]);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-4025332e"], ["__file", "C:/Users/maxab/Projects/galchat/components/chat-item/chat-item.vue"]]);
  const _sfc_main$r = {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        menuVisible: false
      };
    },
    methods: {
      showMenu() {
        this.menuVisible = true;
      },
      hideMenu() {
        this.menuVisible = false;
      },
      onSelect(item) {
        this.$emit("select", item);
        this.hideMenu();
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "pop-menu",
        onLongpress: _cache[2] || (_cache[2] = (...args) => $options.showMenu && $options.showMenu(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
        $data.menuVisible ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "menu-overlay",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.hideMenu && $options.hideMenu(...args))
        }, [
          vue.createElementVNode("view", {
            class: "menu-content",
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($props.items, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "menu-item",
                  style: vue.normalizeStyle({ color: item.color || "#333" }),
                  onClick: ($event) => $options.onSelect(item)
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: item.icon,
                    size: "16"
                  }, null, 8, ["type"]),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  )
                ], 12, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      32
      /* NEED_HYDRATION */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-c37b8154"], ["__file", "C:/Users/maxab/Projects/galchat/components/pop-menu/pop-menu.vue"]]);
  const _sfc_main$q = {
    data() {
      return {
        searchText: "",
        loading: false,
        chats: [
          // {
          // 	id: 1,
          // 	showName: '张三AI',
          // 	lastMessage: '收到你的消息了！',
          // 	timestamp: '10:30',
          // 	avatar: '/static/c3.png',
          // 	unreadCount: 0,
          // 	delete: false
          // },
          // {
          // 	id: 2,
          // 	showName: '李四的群',
          // 	lastMessage: '送他们房子',
          // 	timestamp: '09:13',
          // 	avatar: '/static/c4.png',
          // 	unreadCount: 0,
          // 	delete: false
          // },
          // {
          // 	id: 3,
          // 	showName: '王五',
          // 	lastMessage: 'Niko, hello~',
          // 	timestamp: '昨天',
          // 	avatar: '/static/c5.png',
          // 	unreadCount: 0,
          // 	delete: false
          // }
        ],
        menu: {
          show: false,
          style: "",
          chatIdx: -1,
          isTouchMove: false,
          items: [
            {
              key: "DELETE",
              name: "删除该聊天",
              icon: "trash",
              color: "#e64e4e"
            },
            {
              key: "TOP",
              name: "置顶该聊天",
              icon: "arrow-up"
            }
          ]
        }
      };
    },
    methods: {
      navigateToChatRoom(chatId) {
        if (chatId) {
          uni.navigateTo({
            url: `/pages/tabBar/chats/chat-room?chatId=${chatId}`
          });
        }
      },
      async fetchChats() {
        const res = await new Promise((resolve, reject) => {
          uni.request({
            url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/chat`,
            method: "GET",
            header: {
              "Content-Type": "application/json",
              "authorization": uni.getStorageSync("token")
            },
            success: (res2) => resolve(res2),
            fail: (err) => reject(err)
          });
        });
        return res.data;
      },
      onSelectMenu(item, chatIdx) {
        switch (item.key) {
          case "DELETE":
            this.removeChat(chatIdx);
            break;
          case "TOP":
            this.moveToTop(chatIdx);
            break;
        }
        this.menu.show = false;
      },
      removeChat(chatIdx) {
        this.chats[chatIdx].delete = true;
      },
      moveToTop(chatIdx) {
        const chat = this.chats[chatIdx];
        this.chats.splice(chatIdx, 1);
        this.chats.unshift(chat);
      },
      isShowChat(chat) {
        if (chat.delete) {
          return false;
        }
        return !this.searchText || chat.showName.includes(this.searchText);
      },
      refreshUnreadBadge() {
        if (this.unreadCount > 0) {
          uni.setTabBarBadge({
            index: 0,
            text: this.unreadCount + ""
          });
        } else {
          uni.removeTabBarBadge({
            index: 0,
            complete: () => {
            }
          });
        }
      }
    },
    computed: {
      unreadCount() {
        let count = 0;
        this.chats.forEach((chat) => {
          if (!chat.delete) {
            count += chat.unreadCount;
          }
        });
        return count;
      }
    },
    watch: {
      unreadCount(newCount, oldCount) {
        this.refreshUnreadBadge();
      }
    },
    async onShow() {
      this.refreshUnreadBadge();
      this.loading = true;
      formatAppLog("log", "at pages/tabBar/chats/chats.vue:183", "asdasdasd");
      const chats = await this.fetchChats();
      this.loading = false;
      this.chats = chats.value;
      formatAppLog("log", "at pages/tabBar/chats/chats.vue:188", chats);
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$3);
    const _component_chat_item = resolveEasycom(vue.resolveDynamicComponent("chat-item"), __easycom_1$3);
    const _component_pop_menu = resolveEasycom(vue.resolveDynamicComponent("pop-menu"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab-page" }, [
      $data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "chat-loading"
      }, [
        vue.createElementVNode("view", {
          size: 50,
          mask: false
        }, [
          vue.createElementVNode("view", null, "消息接收中...")
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", { class: "nav-search" }, [
          vue.createVNode(_component_uni_search_bar, {
            radius: "100",
            modelValue: $data.searchText,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchText = $event),
            cancelButton: "none",
            placeholder: "搜索"
          }, null, 8, ["modelValue"])
        ])
      ]),
      !$data.loading && $data.chats.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "chat-tip"
      }, " 温馨提示：您现在还没有任何聊天消息，快跟您的好友发起聊天吧~ ")) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 2 },
        [
          vue.createCommentVNode(' <uni-list v-else>\r\n		    <uni-list-item v-for="(chat,index) in chats" :key="index">\r\n		        <template v-if="isShowChat(chat)">\r\n		            <pop-menu :items="menu.items" @select="onSelectMenu($event,index)">\r\n		                <chat-item :chat="chat" \r\n		                          :index="index" \r\n		                          :active="menu.chatIdx==index">\r\n		                </chat-item>\r\n		            </pop-menu>\r\n		        </template>\r\n		    </uni-list-item>\r\n		</uni-list> '),
          vue.createElementVNode("scroll-view", {
            class: "scroll-bar",
            "scroll-with-animation": "true",
            "scroll-y": "true"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.chats, (chat, index) => {
                return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                  $options.isShowChat(chat) ? (vue.openBlock(), vue.createBlock(_component_pop_menu, {
                    key: 0,
                    items: $data.menu.items,
                    onSelect: ($event) => $options.onSelectMenu($event, index)
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_chat_item, {
                        chat,
                        index,
                        active: $data.menu.chatIdx == index,
                        clickable: "",
                        onClick: ($event) => $options.navigateToChatRoom(chat.id)
                      }, null, 8, ["chat", "index", "active", "onClick"])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["items", "onSelect"])) : vue.createCommentVNode("v-if", true)
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      ))
    ]);
  }
  const PagesTabBarChatsChats = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-d15b82ac"], ["__file", "C:/Users/maxab/Projects/galchat/pages/tabBar/chats/chats.vue"]]);
  const _sfc_main$p = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w = this.width / 2, h = 10;
        if (this.isDot) {
          w = 5;
          h = 5;
        }
        const x = `${-w + this.offset[0]}px`;
        const y = `${-h + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y
          },
          rightBottom: {
            right: x,
            bottom: y
          },
          leftBottom: {
            left: x,
            bottom: y
          },
          leftTop: {
            left: x,
            top: y
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: vue.normalizeClass([$options.classNames, "uni-badge"]),
          style: vue.normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        vue.toDisplayString($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-c97cb896"], ["__file", "C:/Users/maxab/Projects/galchat/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$o = {
    name: "UniListItem",
    emits: ["click", "switchChange"],
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      badgeStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "",
            color: "#000000",
            size: 20,
            customPrefix: ""
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: Object,
        default() {
          return {
            padding: "",
            backgroundColor: "#FFFFFF"
          };
        }
      },
      keepScrollPosition: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      "customStyle.padding": {
        handler(padding) {
          if (typeof padding == "number") {
            padding += "";
          }
          let paddingArr = padding.split(" ");
          if (paddingArr.length === 1) {
            const allPadding = paddingArr[0];
            this.padding = {
              "top": allPadding,
              "right": allPadding,
              "bottom": allPadding,
              "left": allPadding
            };
          } else if (paddingArr.length === 2) {
            const [verticalPadding, horizontalPadding] = paddingArr;
            this.padding = {
              "top": verticalPadding,
              "right": horizontalPadding,
              "bottom": verticalPadding,
              "left": horizontalPadding
            };
          } else if (paddingArr.length === 4) {
            const [topPadding, rightPadding, bottomPadding, leftPadding] = paddingArr;
            this.padding = {
              "top": topPadding,
              "right": rightPadding,
              "bottom": bottomPadding,
              "left": leftPadding
            };
          }
        },
        immediate: true
      }
    },
    // inject: ['list'],
    data() {
      return {
        isFirstChild: false,
        padding: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e) {
        this.$emit("switchChange", e.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$4);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      style: vue.normalizeStyle({ "background-color": $props.customStyle.backgroundColor }),
      "hover-class": !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["border--left", { "uni-list--border": $props.border }])
        },
        null,
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }]),
          style: vue.normalizeStyle({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
        },
        [
          vue.renderSlot(_ctx.$slots, "header", {}, () => [
            vue.createElementVNode("view", { class: "uni-list-item__header" }, [
              $props.thumb ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-list-item__icon"
              }, [
                vue.createElementVNode("image", {
                  src: $props.thumb,
                  class: vue.normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
                }, null, 10, ["src"])
              ])) : $props.showExtraIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-list-item__icon"
              }, [
                vue.createVNode(_component_uni_icons, {
                  customPrefix: $props.extraIcon.customPrefix,
                  color: $props.extraIcon.color,
                  size: $props.extraIcon.size,
                  type: $props.extraIcon.type
                }, null, 8, ["customPrefix", "color", "size", "type"])
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ], true),
          vue.renderSlot(_ctx.$slots, "body", {}, () => [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
              },
              [
                $props.title ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: vue.normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
                  },
                  vue.toDisplayString($props.title),
                  3
                  /* TEXT, CLASS */
                )) : vue.createCommentVNode("v-if", true),
                $props.note ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 1,
                    class: "uni-list-item__content-note"
                  },
                  vue.toDisplayString($props.note),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ], true),
          vue.renderSlot(_ctx.$slots, "footer", {}, () => [
            $props.rightText || $props.showBadge || $props.showSwitch ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: vue.normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
              },
              [
                $props.rightText ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-list-item__extra-text"
                  },
                  vue.toDisplayString($props.rightText),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true),
                $props.showBadge ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
                  key: 1,
                  type: $props.badgeType,
                  text: $props.badgeText,
                  "custom-style": $props.badgeStyle
                }, null, 8, ["type", "text", "custom-style"])) : vue.createCommentVNode("v-if", true),
                $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("switch", {
                  key: 2,
                  disabled: $props.disabled,
                  checked: $props.switchChecked,
                  onChange: _cache[0] || (_cache[0] = (...args) => $options.onSwitchChange && $options.onSwitchChange(...args))
                }, null, 40, ["disabled", "checked"])) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ], true)
        ],
        6
        /* CLASS, STYLE */
      ),
      $props.showArrow || $props.link ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-c7524739"], ["__file", "C:/Users/maxab/Projects/galchat/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  const _sfc_main$n = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      stackFromEnd: {
        type: Boolean,
        default: false
      },
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      },
      renderReverse: {
        type: Boolean,
        default: false
      }
    },
    // provide() {
    // 	return {
    // 		list: this
    // 	};
    // },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      },
      scroll(e) {
        this.$emit("scroll", e);
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-list uni-border-top-bottom" }, [
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-list--border-top"
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-list--border-bottom"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-c2f1266a"], ["__file", "C:/Users/maxab/Projects/galchat/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  const _sfc_main$m = {
    data() {
      return {
        listData: [
          {
            title: "新的虚拟朋友",
            thumb: "/static/logo.png",
            url: "/pages/tabBar/contacts/newVirtualFriend"
          },
          {
            title: "新的真实朋友",
            thumb: "/static/logo.png",
            url: "/pages/tabBar/contacts/newRealFriend"
          },
          {
            title: "群聊",
            thumb: "/static/logo.png",
            url: "/pages/tabBar/contacts/groupChat"
          },
          {
            title: "我的AI",
            thumb: "/static/logo.png",
            url: "/pages/tabBar/contacts/groupChat"
          }
        ],
        friendData: []
      };
    },
    async onShow() {
      try {
        const res = await new Promise((resolve, reject) => {
          uni.request({
            url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/contacts",
            method: "GET",
            header: {
              "Content-Type": "application/json",
              "authorization": uni.getStorageSync("token")
            },
            success: (res2) => resolve(res2),
            fail: (err) => reject(err)
          });
        });
        const profile = res.data;
        this.friendData = profile.value;
        formatAppLog("log", "at pages/tabBar/contacts/contacts.vue:76", this.friendData);
      } catch (error) {
        uni.showModal({
          title: "错误",
          content: "获取用户信息失败，请重新登录",
          showCancel: false,
          success: () => {
            uni.redirectTo({
              url: "/pages/log/log/log"
            });
          }
        });
      }
    },
    methods: {
      // 点击列表项跳转到指定页面
      navigateTo(url) {
        uni.navigateTo({
          url
        });
      },
      // 点击好友跳转到好友详情页面
      navigateToFriend(contact) {
        const friend = contact.contactprofile;
        formatAppLog("log", "at pages/tabBar/contacts/contacts.vue:104", friend);
        uni.navigateTo({
          url: `/pages/detail/frienddetail?chatId=${contact.chatId}&username=${friend.username}&id=${friend.id}&mood=${friend.mood}&nickname=${friend.nickname}&status=${friend.status}`
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$3);
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_0$2);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", { class: "nav-search" }, [
          vue.createVNode(_component_uni_search_bar, {
            radius: "100",
            modelValue: _ctx.searchText,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.searchText = $event),
            cancelButton: "none",
            placeholder: "搜索"
          }, null, 8, ["modelValue"])
        ])
      ]),
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_uni_list, null, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.listData, (item, index) => {
                return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                  key: index,
                  title: item.title,
                  thumb: item.thumb,
                  clickable: "",
                  onClick: ($event) => $options.navigateTo(item.url)
                }, null, 8, ["title", "thumb", "onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_uni_list, null, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_list_item, {
              title: "我的好友",
              customStyle: { backgroundColor: "#f5f5f5" }
            }),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.friendData, (item, index) => {
                return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                  key: index,
                  title: item.contactprofile.username,
                  thumb: item.contactprofile.avatar,
                  clickable: "",
                  onClick: ($event) => $options.navigateToFriend(item)
                }, null, 8, ["title", "thumb", "onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  const PagesTabBarContactsContacts = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__file", "C:/Users/maxab/Projects/galchat/pages/tabBar/contacts/contacts.vue"]]);
  const _imports_0$1 = "/static/uni.png";
  const _sfc_main$l = {
    name: "ProfilePage",
    data() {
      return {
        id: uni.getStorageSync("id") ?? "",
        nickname: uni.getStorageSync("nickname") ?? "",
        username: uni.getStorageSync("username") ?? "",
        mood: uni.getStorageSync("mood") ?? "",
        status: uni.getStorageSync("status") ?? "",
        calender: ""
      };
    },
    async onShow() {
      try {
        const res = await new Promise((resolve, reject) => {
          uni.request({
            url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile",
            method: "GET",
            header: {
              "Content-Type": "application/json",
              "authorization": uni.getStorageSync("token")
              // 使用uni的存储API
            },
            success: (res2) => resolve(res2),
            fail: (err) => reject(err)
          });
        });
        const profile = res.data;
        this.id = profile.value.id;
        this.nickname = profile.value.nickname;
        this.username = profile.value.username;
        this.mood = profile.value.mood ?? "添加心情";
        this.status = profile.value.status ?? "添加状态";
        uni.setStorageSync("id", this.id);
        uni.setStorageSync("nickname", this.nickname);
        uni.setStorageSync("username", this.username);
        uni.setStorageSync("mood", this.mood);
        uni.setStorageSync("status", this.status);
      } catch (error) {
        uni.showModal({
          title: "错误",
          content: "获取用户信息失败，请重新登录",
          showCancel: false,
          success: () => {
            uni.redirectTo({
              url: "/pages/log/log/log"
            });
          }
        });
      }
    },
    methods: {
      onMoodTap() {
        uni.navigateTo({
          url: "/pages/accountsetting/setmood"
        });
      },
      onStatusTap() {
        uni.navigateTo({
          url: "/pages/accountsetting/setstatus"
        });
      },
      onAccountSettingTap() {
        uni.navigateTo({
          url: "/pages/tabBar/me/accountSetting"
        });
      },
      onScheduleTap() {
        uni.navigateTo({
          url: "/pages/accountsetting/setcal"
        });
      },
      onPicturesTap() {
        uni.showToast({
          title: "Tapped on My pictures",
          icon: "none"
        });
      },
      onPrivacyTap() {
        uni.showToast({
          title: "Tapped on Privacy management",
          icon: "none"
        });
      },
      onLogoutTap() {
        uni.removeStorageSync("token");
        uni.removeStorageSync("refresh");
        uni.redirectTo({
          url: "/pages/log/log/log"
        });
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 头像和昵称、账号 "),
      vue.createElementVNode("view", { class: "top-section" }, [
        vue.createElementVNode("view", { class: "head-sculpture" }, [
          vue.createElementVNode("image", { src: _imports_0$1 })
        ]),
        vue.createElementVNode("view", { class: "right-section" }, [
          vue.createElementVNode(
            "view",
            { class: "nickname" },
            " 昵称：" + vue.toDisplayString($data.nickname),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "username" },
            " 用户名：" + vue.toDisplayString($data.username),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createCommentVNode(" 心情和状态 "),
      vue.createElementVNode("view", { class: "middle-section" }, [
        vue.createElementVNode(
          "button",
          {
            class: "mood",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onMoodTap && $options.onMoodTap(...args))
          },
          vue.toDisplayString($data.mood),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "button",
          {
            class: "status",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.onStatusTap && $options.onStatusTap(...args))
          },
          vue.toDisplayString($data.status),
          1
          /* TEXT */
        )
      ]),
      vue.createCommentVNode(" 其他设置选项 "),
      vue.createElementVNode("view", { class: "settings-section" }, [
        vue.createElementVNode("button", {
          class: "setting-item",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onAccountSettingTap && $options.onAccountSettingTap(...args))
        }, "账号设置"),
        vue.createElementVNode("button", {
          class: "setting-item",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.onScheduleTap && $options.onScheduleTap(...args))
        }, "我的日程"),
        vue.createElementVNode("button", {
          class: "setting-item",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.onPicturesTap && $options.onPicturesTap(...args))
        }, "我的图片"),
        vue.createElementVNode("button", {
          class: "setting-item",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.onPrivacyTap && $options.onPrivacyTap(...args))
        }, "隐私设置")
      ]),
      vue.createCommentVNode(" 登出按钮 "),
      vue.createElementVNode("view", { class: "logout-section" }, [
        vue.createElementVNode("button", {
          class: "logout-button",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.onLogoutTap && $options.onLogoutTap(...args))
        }, "登出")
      ])
    ]);
  }
  const PagesTabBarMeMe = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-635a3669"], ["__file", "C:/Users/maxab/Projects/galchat/pages/tabBar/me/me.vue"]]);
  const _sfc_main$k = {
    name: "HomePage",
    methods: {
      goToLogin() {
        uni.navigateTo({
          url: "/pages/log/login/login"
        });
      },
      goToRegister() {
        uni.navigateTo({
          url: "/pages/log/register/register"
        });
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 登录和注册按钮 "),
      vue.createElementVNode("view", { class: "button-section" }, [
        vue.createElementVNode("button", {
          class: "login-button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goToLogin && $options.goToLogin(...args))
        }, "登录"),
        vue.createElementVNode("button", {
          class: "register-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goToRegister && $options.goToRegister(...args))
        }, "注册"),
        vue.createCommentVNode(' <navigator url="/pages/tabBar/chats/chats" open-type="switchTab">\r\n				<text class="link">跳过登录</text>\r\n			</navigator>\r\n\r\n\r\n			<navigator url="/pages/test" open-type="navigate">\r\n				<text class="link">test</text>\r\n			</navigator> ')
      ])
    ]);
  }
  const PagesLogLogLog = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-89f1962c"], ["__file", "C:/Users/maxab/Projects/galchat/pages/log/log/log.vue"]]);
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$j = {
    name: "uni-easyinput",
    emits: [
      "click",
      "iconClick",
      "update:modelValue",
      "input",
      "focus",
      "blur",
      "confirm",
      "clear",
      "eyes",
      "change",
      "keyboardheightchange"
    ],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      adjustPosition: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("blur", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 键盘高度发生变化的时候触发此事件
       * 兼容性：微信小程序2.7.0+、App 3.1.0+
       * @param {Object} event
       */
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle($options.boxStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
            style: vue.normalizeStyle($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
            $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              "placeholder-class": "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              "cursor-spacing": $props.cursorSpacing,
              "adjust-position": $props.adjustPosition,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight", "cursor-spacing", "adjust-position"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: vue.normalizeStyle($options.inputStyle),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              "placeholder-class": "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              "cursor-spacing": $props.cursorSpacing,
              "adjust-position": $props.adjustPosition,
              onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
              onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
              onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing", "adjust-position"])),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                vue.createCommentVNode(" 开启密码时显示小眼睛 "),
                $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true),
            $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-09fd5285"], ["__file", "C:/Users/maxab/Projects/galchat/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$i = {
    name: "uniFormsItem",
    options: {
      virtualHost: true
    },
    provide() {
      return {
        uniFormItem: this
      };
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      }
    },
    props: {
      // 表单校验规则
      rules: {
        type: Array,
        default() {
          return null;
        }
      },
      // 表单域的属性名，在使用校验规则时必填
      name: {
        type: [String, Array],
        default: ""
      },
      required: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      // label的宽度
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: ""
      },
      // 强制显示错误信息
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      // 1.4.0 弃用，统一使用 form 的校验时机
      // validateTrigger: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 弃用，统一使用 form 的label 位置
      // labelPosition: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 以下属性已经废弃，请使用  #label 插槽代替
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      }
    },
    data() {
      return {
        errMsg: "",
        userRules: null,
        localLabelAlign: "left",
        localLabelWidth: "70px",
        localLabelPos: "left",
        border: false,
        isFirstBorder: false
      };
    },
    computed: {
      // 处理错误信息
      msg() {
        return this.errorMessage || this.errMsg;
      }
    },
    watch: {
      // 规则发生变化通知子组件更新
      "form.formRules"(val) {
        this.init();
      },
      "form.labelWidth"(val) {
        this.localLabelWidth = this._labelWidthUnit(val);
      },
      "form.labelPosition"(val) {
        this.localLabelPos = this._labelPosition();
      },
      "form.labelAlign"(val) {
      }
    },
    created() {
      this.init(true);
      if (this.name && this.form) {
        this.$watch(
          () => {
            const val = this.form._getDataValue(this.name, this.form.localData);
            return val;
          },
          (value, oldVal) => {
            const isEqual2 = this.form._isEqual(value, oldVal);
            if (!isEqual2) {
              const val = this.itemSetValue(value);
              this.onFieldChange(val, false);
            }
          },
          {
            immediate: false
          }
        );
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules = null) {
        this.userRules = rules;
        this.init(false);
      },
      // 兼容老版本表单组件
      setValue() {
      },
      /**
       * 外部调用方法
       * 校验数据
       * @param {any} value 需要校验的数据
       * @param {boolean} 是否立即校验
       * @return {Array|null} 校验内容
       */
      async onFieldChange(value, formtrigger = true) {
        const {
          formData,
          localData,
          errShowType,
          validateCheck,
          validateTrigger,
          _isRequiredField,
          _realName
        } = this.form;
        const name = _realName(this.name);
        if (!value) {
          value = this.form.formData[name];
        }
        const ruleLen = this.itemRules.rules && this.itemRules.rules.length;
        if (!this.validator || !ruleLen || ruleLen === 0)
          return;
        const isRequiredField2 = _isRequiredField(this.itemRules.rules || []);
        let result = null;
        if (validateTrigger === "bind" || formtrigger) {
          result = await this.validator.validateUpdate(
            {
              [name]: value
            },
            formData
          );
          if (!isRequiredField2 && (value === void 0 || value === "")) {
            result = null;
          }
          if (result && result.errorMessage) {
            if (errShowType === "undertext") {
              this.errMsg = !result ? "" : result.errorMessage;
            }
            if (errShowType === "toast") {
              uni.showToast({
                title: result.errorMessage || "校验错误",
                icon: "none"
              });
            }
            if (errShowType === "modal") {
              uni.showModal({
                title: "提示",
                content: result.errorMessage || "校验错误"
              });
            }
          } else {
            this.errMsg = "";
          }
          validateCheck(result ? result : null);
        } else {
          this.errMsg = "";
        }
        return result ? result : null;
      },
      /**
       * 初始组件数据
       */
      init(type = false) {
        const {
          validator,
          formRules,
          childrens,
          formData,
          localData,
          _realName,
          labelWidth,
          _getDataValue,
          _setDataValue
        } = this.form || {};
        this.localLabelAlign = this._justifyContent();
        this.localLabelWidth = this._labelWidthUnit(labelWidth);
        this.localLabelPos = this._labelPosition();
        this.form && type && childrens.push(this);
        if (!validator || !formRules)
          return;
        if (!this.form.isFirstBorder) {
          this.form.isFirstBorder = true;
          this.isFirstBorder = true;
        }
        if (this.group) {
          if (!this.group.isFirstBorder) {
            this.group.isFirstBorder = true;
            this.isFirstBorder = true;
          }
        }
        this.border = this.form.border;
        const name = _realName(this.name);
        const itemRule = this.userRules || this.rules;
        if (typeof formRules === "object" && itemRule) {
          formRules[name] = {
            rules: itemRule
          };
          validator.updateSchema(formRules);
        }
        const itemRules = formRules[name] || {};
        this.itemRules = itemRules;
        this.validator = validator;
        this.itemSetValue(_getDataValue(this.name, localData));
      },
      unInit() {
        if (this.form) {
          const {
            childrens,
            formData,
            _realName
          } = this.form;
          childrens.forEach((item, index) => {
            if (item === this) {
              this.form.childrens.splice(index, 1);
              delete formData[_realName(item.name)];
            }
          });
        }
      },
      // 设置item 的值
      itemSetValue(value) {
        const name = this.form._realName(this.name);
        const rules = this.itemRules.rules || [];
        const val = this.form._getValue(name, value, rules);
        this.form._setDataValue(name, this.form.formData, val);
        return val;
      },
      /**
       * 移除该表单项的校验结果
       */
      clearValidate() {
        this.errMsg = "";
      },
      // 是否显示星号
      _isRequired() {
        return this.required;
      },
      // 处理对齐方式
      _justifyContent() {
        if (this.form) {
          const {
            labelAlign
          } = this.form;
          let labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (labelAli === "left")
            return "flex-start";
          if (labelAli === "center")
            return "center";
          if (labelAli === "right")
            return "flex-end";
        }
        return "flex-start";
      },
      // 处理 label宽度单位 ,继承父元素的值
      _labelWidthUnit(labelWidth) {
        return this.num2px(this.labelWidth ? this.labelWidth : labelWidth || (this.label ? 70 : "auto"));
      },
      // 处理 label 位置
      _labelPosition() {
        if (this.form)
          return this.form.labelPosition || "left";
        return "left";
      },
      /**
       * 触发时机
       * @param {Object} rule 当前规则内时机
       * @param {Object} itemRlue 当前组件时机
       * @param {Object} parentRule 父组件时机
       */
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "" ? "bind" : "submit";
              }
              return "submit";
            }
            return "bind";
          }
          return "submit";
        }
        return "bind";
      },
      num2px(num) {
        if (typeof num === "number") {
          return `${num}px`;
        }
        return num;
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]])
      },
      [
        vue.renderSlot(_ctx.$slots, "label", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__label", { "no-label": !$props.label && !$props.required }]),
              style: vue.normalizeStyle({ width: $data.localLabelWidth, justifyContent: $data.localLabelAlign })
            },
            [
              $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "is-required"
              }, "*")) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($props.label),
                1
                /* TEXT */
              )
            ],
            6
            /* CLASS, STYLE */
          )
        ], true),
        vue.createElementVNode("view", { class: "uni-forms-item__content" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__error", { "msg--active": $options.msg }])
            },
            [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($options.msg),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-462874dd"], ["__file", "C:/Users/maxab/Projects/galchat/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
    // "fileurls": 'array'
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value, data, allData) {
      var result = null;
      let rules = fieldValue.rules;
      let hasRequired = rules.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value === null || value === void 0) {
          return result;
        }
        if (typeof value === "string" && !value.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules === void 0) {
        return message["default"];
      }
      for (var i = 0; i < rules.length; i++) {
        let rule = rules[i];
        let vt = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt]) {
          result = RuleValidatorHelper[vt](rule, value, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now2 = Date.now();
          let resultExpr = rule.validateExpr(value, allData, now2);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value, data, allData, vt);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value, data, allData, vt) {
      let result = null;
      try {
        let callbackMessage = null;
        const res = await rule.validateFunction(rule, value, allData || data, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res === "string" && res || res === false) {
          result = this._getMessage(rule, callbackMessage || res, vt);
        }
      } catch (e) {
        result = this._getMessage(rule, e.message, vt);
      }
      return result;
    }
    _getMessage(rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range,
        errorMessage
      } = rule;
      let list = new Array(range.length);
      for (let i = 0; i < range.length; i++) {
        const item = range[i];
        if (types.object(item) && item.value !== void 0) {
          list[i] = item.value;
        } else {
          list[i] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format) > -1) {
        if (!types[format](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i = 0; i < value.length; i++) {
        const element = value[i];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, true, allData);
      }
      return result;
    }
    async validateUpdate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidateUpdate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key in schema) {
        let value = schema[key];
        let errorMessage = await this.validateRule(key, value, data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data, all, allData) {
      let result = [];
      for (let key in data) {
        let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "验证错误",
      defaultInvalid: "提交的字段{field}在数据库中并不存在",
      validateFunction: "验证无效",
      required: "{label}必填",
      "enum": "{label}超出范围",
      timestamp: "{label}格式无效",
      whitespace: "{label}不能为空",
      typeError: "{label}类型无效",
      date: {
        format: "{label}日期{value}格式无效",
        parse: "{label}日期无法解析,{value}无效",
        invalid: "{label}日期{value}无效"
      },
      length: {
        minLength: "{label}长度不能少于{minLength}",
        maxLength: "{label}长度不能超过{maxLength}",
        range: "{label}必须介于{minLength}和{maxLength}之间"
      },
      number: {
        minimum: "{label}不能小于{minimum}",
        maximum: "{label}不能大于{maximum}",
        exclusiveMinimum: "{label}不能小于等于{minimum}",
        exclusiveMaximum: "{label}不能大于等于{maximum}",
        range: "{label}必须介于{minimum}and{maximum}之间"
      },
      pattern: {
        mismatch: "{label}格式不匹配"
      }
    };
  }
  SchemaValidator.message = new Message();
  const deepCopy = (val) => {
    return JSON.parse(JSON.stringify(val));
  };
  const typeFilter = (format) => {
    return format === "int" || format === "double" || format === "number" || format === "timestamp";
  };
  const getValue = (key, value, rules) => {
    const isRuleNumType = rules.find((val) => val.format && typeFilter(val.format));
    const isRuleBoolType = rules.find((val) => val.format && val.format === "boolean" || val.format === "bool");
    if (!!isRuleNumType) {
      if (!value && value !== 0) {
        value = null;
      } else {
        value = isNumber(Number(value)) ? Number(value) : value;
      }
    }
    if (!!isRuleBoolType) {
      value = isBoolean(value) ? value : false;
    }
    return value;
  };
  const setDataValue = (field, formdata, value) => {
    formdata[field] = value;
    return value || "";
  };
  const getDataValue = (field, data) => {
    return objGet(data, field);
  };
  const realName = (name, data = {}) => {
    const base_name = _basePath(name);
    if (typeof base_name === "object" && Array.isArray(base_name) && base_name.length > 1) {
      const realname = base_name.reduce((a, b) => a += `#${b}`, "_formdata_");
      return realname;
    }
    return base_name[0] || name;
  };
  const isRealName = (name) => {
    const reg = /^_formdata_#*/;
    return reg.test(name);
  };
  const rawData = (object = {}, name) => {
    let newData = JSON.parse(JSON.stringify(object));
    let formData = {};
    for (let i in newData) {
      let path = name2arr(i);
      objSet(formData, path, newData[i]);
    }
    return formData;
  };
  const name2arr = (name) => {
    let field = name.replace("_formdata_#", "");
    field = field.split("#").map((v) => isNumber(v) ? Number(v) : v);
    return field;
  };
  const objSet = (object, path, value) => {
    if (typeof object !== "object")
      return object;
    _basePath(path).reduce((o, k, i, _) => {
      if (i === _.length - 1) {
        o[k] = value;
        return null;
      } else if (k in o) {
        return o[k];
      } else {
        o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
        return o[k];
      }
    }, object);
    return object;
  };
  function _basePath(path) {
    if (Array.isArray(path))
      return path;
    return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  const objGet = (object, path, defaultVal = "undefined") => {
    let newPath = _basePath(path);
    let val = newPath.reduce((o, k) => {
      return (o || {})[k];
    }, object);
    return !val || val !== void 0 ? val : defaultVal;
  };
  const isNumber = (num) => {
    return !isNaN(Number(num));
  };
  const isBoolean = (bool) => {
    return typeof bool === "boolean";
  };
  const isRequiredField = (rules) => {
    let isNoField = false;
    for (let i = 0; i < rules.length; i++) {
      const ruleData = rules[i];
      if (ruleData.required) {
        isNoField = true;
        break;
      }
    }
    return isNoField;
  };
  const isEqual = (a, b) => {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    if (a == null || b == null) {
      return a === b;
    }
    var classNameA = toString.call(a), classNameB = toString.call(b);
    if (classNameA !== classNameB) {
      return false;
    }
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a === "" + b;
      case "[object Number]":
        if (+a !== +a) {
          return +b !== +b;
        }
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
    }
    if (classNameA == "[object Object]") {
      var propsA = Object.getOwnPropertyNames(a), propsB = Object.getOwnPropertyNames(b);
      if (propsA.length != propsB.length) {
        return false;
      }
      for (var i = 0; i < propsA.length; i++) {
        var propName = propsA[i];
        if (a[propName] !== b[propName]) {
          return false;
        }
      }
      return true;
    }
    if (classNameA == "[object Array]") {
      if (a.toString() == b.toString()) {
        return true;
      }
      return false;
    }
  };
  const _sfc_main$h = {
    name: "uniForms",
    emits: ["validate", "submit"],
    options: {
      virtualHost: true
    },
    props: {
      // 即将弃用
      value: {
        type: Object,
        default() {
          return null;
        }
      },
      // vue3 替换 value 属性
      modelValue: {
        type: Object,
        default() {
          return null;
        }
      },
      // 1.4.0 开始将不支持 v-model ，且废弃 value 和 modelValue
      model: {
        type: Object,
        default() {
          return null;
        }
      },
      // 表单校验规则
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      //校验错误信息提示方式 默认 undertext 取值 [undertext|toast|modal]
      errShowType: {
        type: String,
        default: "undertext"
      },
      // 校验触发器方式 默认 bind 取值 [bind|submit]
      validateTrigger: {
        type: String,
        default: "submit"
      },
      // label 位置，默认 left 取值  top/left
      labelPosition: {
        type: String,
        default: "left"
      },
      // label 宽度
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: "left"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        uniForm: this
      };
    },
    data() {
      return {
        // 表单本地值的记录，不应该与传如的值进行关联
        formData: {},
        formRules: {}
      };
    },
    computed: {
      // 计算数据源变化的
      localData() {
        const localVal = this.model || this.modelValue || this.value;
        if (localVal) {
          return deepCopy(localVal);
        }
        return {};
      }
    },
    watch: {
      // 监听数据变化 ,暂时不使用，需要单独赋值
      // localData: {},
      // 监听规则变化
      rules: {
        handler: function(val, oldVal) {
          this.setRules(val);
        },
        deep: true,
        immediate: true
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name, value, formName) {
          if (formName) {
            this.$refs[formName].setValue(name, value);
          } else {
            let formVm;
            for (let i in this.$refs) {
              const vm = this.$refs[i];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:182", "当前 uni-froms 组件缺少 ref 属性");
            formVm.setValue(name, value);
          }
        };
      }
      this.childrens = [];
      this.inputChildrens = [];
      this.setRules(this.rules);
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules) {
        this.formRules = Object.assign({}, this.formRules, rules);
        this.validator = new SchemaValidator(rules);
      },
      /**
       * 外部调用方法
       * 设置数据，用于设置表单数据，公开给用户使用 ， 不支持在动态表单中使用
       * @param {Object} key
       * @param {Object} value
       */
      setValue(key, value) {
        let example = this.childrens.find((child) => child.name === key);
        if (!example)
          return null;
        this.formData[key] = getValue(key, value, this.formRules[key] && this.formRules[key].rules || []);
        return example.onFieldChange(this.formData[key]);
      },
      /**
       * 外部调用方法
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      validate(keepitem, callback) {
        return this.checkAll(this.formData, keepitem, callback);
      },
      /**
       * 外部调用方法
       * 部分表单校验
       * @param {Array|String} props 需要校验的字段
       * @param {Function} 回调函数
       */
      validateField(props = [], callback) {
        props = [].concat(props);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          const name = realName(item.name);
          if (props.indexOf(name) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [name]: this.formData[name]
            });
          }
        });
        return this.checkAll(invalidFields, [], callback);
      },
      /**
       * 外部调用方法
       * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
       * @param {Array|String} props 需要移除校验的字段 ，不填为所有
       */
      clearValidate(props = []) {
        props = [].concat(props);
        this.childrens.forEach((item) => {
          if (props.length === 0) {
            item.errMsg = "";
          } else {
            const name = realName(item.name);
            if (props.indexOf(name) !== -1) {
              item.errMsg = "";
            }
          }
        });
      },
      /**
       * 外部调用方法 ，即将废弃
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      submit(keepitem, callback, type) {
        for (let i in this.dataValue) {
          const itemData = this.childrens.find((v) => v.name === i);
          if (itemData) {
            if (this.formData[i] === void 0) {
              this.formData[i] = this._getValue(i, this.dataValue[i]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:289", "submit 方法即将废弃，请使用validate方法代替！");
        }
        return this.checkAll(this.formData, keepitem, callback, "submit");
      },
      // 校验所有
      async checkAll(invalidFields, keepitem, callback, type) {
        if (!this.validator)
          return;
        let childrens = [];
        for (let i in invalidFields) {
          const item = this.childrens.find((v) => realName(v.name) === i);
          if (item) {
            childrens.push(item);
          }
        }
        if (!callback && typeof keepitem === "function") {
          callback = keepitem;
        }
        let promise;
        if (!callback && typeof callback !== "function" && Promise) {
          promise = new Promise((resolve, reject) => {
            callback = function(valid, invalidFields2) {
              !valid ? resolve(invalidFields2) : reject(valid);
            };
          });
        }
        let results = [];
        let tempFormData = JSON.parse(JSON.stringify(invalidFields));
        for (let i in childrens) {
          const child = childrens[i];
          let name = realName(child.name);
          const result = await child.onFieldChange(tempFormData[name]);
          if (result) {
            results.push(result);
            if (this.errShowType === "toast" || this.errShowType === "modal")
              break;
          }
        }
        if (Array.isArray(results)) {
          if (results.length === 0)
            results = null;
        }
        if (Array.isArray(keepitem)) {
          keepitem.forEach((v) => {
            let vName = realName(v);
            let value = getDataValue(v, this.localData);
            if (value !== void 0) {
              tempFormData[vName] = value;
            }
          });
        }
        if (type === "submit") {
          this.$emit("submit", {
            detail: {
              value: tempFormData,
              errors: results
            }
          });
        } else {
          this.$emit("validate", results);
        }
        let resetFormData = {};
        resetFormData = rawData(tempFormData, this.name);
        callback && typeof callback === "function" && callback(results, resetFormData);
        if (promise && callback) {
          return promise;
        } else {
          return null;
        }
      },
      /**
       * 返回validate事件
       * @param {Object} result
       */
      validateCheck(result) {
        this.$emit("validate", result);
      },
      _getValue: getValue,
      _isRequiredField: isRequiredField,
      _setDataValue: setDataValue,
      _getDataValue: getDataValue,
      _realName: realName,
      _isRealName: isRealName,
      _isEqual: isEqual
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-forms" }, [
      vue.createElementVNode("form", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-9a1e3c32"], ["__file", "C:/Users/maxab/Projects/galchat/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      loadStoresState(pinia, JSON.parse(text));
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function loadStoresState(pinia, state) {
    for (const key in state) {
      const storeState = pinia.state.value[key];
      if (storeState) {
        Object.assign(storeState, state[key]);
      } else {
        pinia.state.value[key] = state[key];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    store._isOptionsAPI = !!options.state;
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    const originalHotUpdate = store._hotUpdate;
    vue.toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(assign(
      {
        _hmrPayload,
        _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      partialStore
      // must be added later
      // setupStore
    ));
    pinia._s.set($id, store);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = vue.effectScope()).run(setup)));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
      if (typeof id !== "string") {
        throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
      }
    }
    function useStore(pinia, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT) {
        const currentInstance = vue.getCurrentInstance();
        if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
        !hot) {
          const vm = currentInstance.proxy;
          const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
          cache[id] = store;
        }
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  const useProfileStore = defineStore("profile", {
    state: () => ({
      profile: null
    }),
    actions: {
      async getProfile() {
        try {
          uni.request({
            url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile",
            method: "GET",
            header: {
              "Content-Type": "application/json",
              "authorization": uni.getStorageSync("token")
            },
            success: (res) => {
              this.profile = res.data.value;
            }
          });
        } catch (error) {
          formatAppLog("error", "at stores/profile.js:24", "Error fetching profile:", error);
        }
      },
      async initializeProfile() {
        if (!this.profile) {
          try {
            await this.getProfile();
          } catch (e) {
            formatAppLog("log", "at stores/profile.js:33", e);
          }
        }
      }
    }
  });
  const _sfc_main$g = {
    data() {
      return {
        loginForm: {
          phoneNum: "",
          password: ""
        },
        rules: {
          phoneNum: {
            rules: [{
              required: true,
              errorMessage: "请输入用户名"
            }]
          },
          password: {
            rules: [{
              required: true,
              errorMessage: "请输入密码"
            }]
          }
        }
      };
    },
    methods: {
      submit() {
        const loginData = {
          username: this.loginForm.phoneNum,
          password: this.loginForm.password
        };
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/login",
          method: "POST",
          header: {
            "Content-Type": "application/json"
          },
          data: loginData,
          // 网络请求成功
          success: (res) => {
            const loginInfo = res.data;
            if (loginInfo.status) {
              uni.showToast({
                title: "登录成功",
                icon: "success"
              });
              uni.setStorageSync("token", loginInfo.value.accessToken);
              uni.setStorageSync("refresh", loginInfo.value.accessToken);
              const profileStore = useProfileStore();
              profileStore.getProfile();
              uni.request({
                url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile",
                method: "GET",
                header: {
                  "Content-Type": "application/json",
                  "authorization": uni.getStorageSync("token")
                  // 使用uni的存储API
                },
                success: (res2) => {
                  const profile = res2.data;
                  uni.setStorageSync("id", profile.value.id);
                  uni.setStorageSync("nickname", profile.value.nickname);
                  uni.setStorageSync("username", profile.value.username);
                  uni.setStorageSync("password", loginData.password);
                }
              });
              uni.switchTab({
                url: "/pages/tabBar/chats/chats"
              });
            } else {
              uni.showModal({
                title: "提示",
                content: loginInfo.message,
                showCancel: false
              });
            }
          },
          // 网络请求失败
          fail: (err) => {
            uni.showToast({
              title: "网络请求失败",
              icon: "error"
            });
            formatAppLog("error", "at pages/log/login/login.vue:115", "请求失败：", err);
          }
        });
      }
    }
    // onLoad() {
    // 	this.loginForm.phoneNum = uni.getStorageSync("phoneNum");
    // 	this.loginForm.password = uni.getStorageSync("password");
    // }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$1);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page login" }, [
      vue.createElementVNode("view", { class: "title" }, "欢迎登录"),
      vue.createVNode(_component_uni_forms, {
        class: "form",
        modelValue: $data.loginForm,
        rules: $data.rules,
        "validate-trigger": "bind"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, { name: "phoneNum" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "text",
                modelValue: $data.loginForm.phoneNum,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.loginForm.phoneNum = $event),
                "prefix-icon": "person",
                placeholder: "用户名"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, { name: "password" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: $data.loginForm.password,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.loginForm.password = $event),
                "prefix-icon": "locked",
                placeholder: "密码"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("button", {
            class: "btn-submit",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.submit && $options.submit(...args)),
            type: "primary"
          }, "登录")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "rules"]),
      vue.createElementVNode("navigator", {
        class: "nav-register",
        url: "/pages/log/register/register",
        "open-type": "redirect"
      }, " 没有账号？前往注册 ")
    ]);
  }
  const PagesLogLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-1fa4d8f7"], ["__file", "C:/Users/maxab/Projects/galchat/pages/log/login/login.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        isValid: false,
        dataForm: {
          userName: "",
          nickName: "",
          phoneNum: "",
          code: "",
          password: "",
          confirmPassword: ""
        },
        rules: {
          userName: {
            rules: [{
              required: true,
              errorMessage: "请输入用户名"
            }, {
              minLength: 6,
              // 添加最小长度限制
              errorMessage: "用户名不能少于6个字符"
            }]
          },
          nickName: {
            rules: [{
              required: true,
              errorMessage: "请输入昵称"
            }]
          },
          phoneNum: {
            rules: [{
              required: true,
              errorMessage: "请输入手机号"
            }]
          },
          code: {
            rules: [{
              required: true,
              errorMessage: "请输入验证码"
            }]
          },
          password: {
            rules: [{
              required: true,
              errorMessage: "请输入密码"
            }, {
              minLength: 6,
              // 添加最小长度限制
              errorMessage: "密码不能少于6个字符"
            }]
          },
          confirmPassword: {
            rules: [{
              required: true,
              errorMessage: "请输入确认密码"
            }, {
              validateFunction: (rule, value, data, callback) => {
                formatAppLog("log", "at pages/log/register/register.vue:92", "validateFunction");
                if (data.password != value) {
                  callback("两次密码输入不一致");
                }
                return true;
              }
            }]
          }
        }
      };
    },
    watch: {
      // 深度监听整个对象
      dataForm: {
        handler(newValue, oldValue) {
          if (this.dataForm.userName != "" && this.dataForm.nickname != "" && this.dataForm.phoneNum != "" && this.dataForm.code != "" && this.dataForm.password != "" && this.dataForm.password == this.dataForm.confirmPassword)
            this.isValid = true;
          else
            this.isValid = false;
        },
        deep: true
        // 深度监听
      }
    },
    methods: {
      submit() {
        formatAppLog("log", "at pages/log/register/register.vue:119", "submitted");
        const regData = {
          username: this.dataForm.userName,
          password: this.dataForm.password,
          nickname: this.dataForm.nickName,
          phone: this.dataForm.phoneNum,
          code: this.dataForm.code
        };
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/register",
          method: "POST",
          header: {
            "Content-Type": "application/json"
          },
          data: regData,
          success: (res) => {
            const regInfo = res.data;
            if (regInfo.status) {
              uni.showToast({
                title: "注册成功",
                icon: "success",
                duration: 2e3
              });
              this.login();
            } else {
              uni.showModal({
                title: "注册失败",
                content: regInfo.message,
                showCancel: false
              });
            }
          },
          fail: (err) => {
            uni.showModal({
              title: "错误",
              content: "网络请求失败，请稍后重试",
              showCancel: false
            });
            formatAppLog("error", "at pages/log/register/register.vue:159", "注册请求失败：", err);
          }
        });
      },
      login() {
        const loginData = {
          username: this.dataForm.userName,
          password: this.dataForm.password
        };
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/login",
          method: "POST",
          header: {
            "Content-Type": "application/json"
          },
          data: loginData,
          success: (res) => {
            const loginInfo = res.data;
            if (loginInfo.status) {
              uni.showToast({
                title: loginInfo.message,
                icon: "success"
              });
              uni.setStorageSync("token", loginInfo.value.accessToken);
              uni.setStorageSync("refresh", loginInfo.value.accessToken);
              uni.switchTab({
                url: "/pages/tabBar/chats/chats"
              });
            } else {
              uni.showModal({
                title: "提示",
                content: loginInfo.message,
                showCancel: false
              });
            }
          },
          fail: (err) => {
            uni.showToast({
              title: "网络请求失败",
              icon: "error"
            });
            formatAppLog("error", "at pages/log/register/register.vue:208", "请求失败：", err);
          }
        });
      },
      getVerificationCode() {
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/identity/sendCode",
          method: "POST",
          header: {
            "Content-Type": "application/json"
          },
          data: {
            phone: this.dataForm.phoneNum
          },
          success: (res) => {
            const data = res.data;
            if (data.status) {
              uni.showToast({
                title: "发送成功",
                icon: "success",
                duration: 2e3
              });
            } else {
              uni.showModal({
                title: "发送失败",
                content: data.message,
                showCancel: false
              });
            }
          },
          fail: (err) => {
            uni.showModal({
              title: "错误",
              content: "发送验证码失败，请稍后重试",
              showCancel: false
            });
            formatAppLog("error", "at pages/log/register/register.vue:247", "发送验证码失败：", err);
          }
        });
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$1);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "register" }, [
      vue.createElementVNode("view", { class: "title" }, "欢迎注册"),
      vue.createVNode(_component_uni_forms, {
        class: "form",
        modelValue: $data.dataForm,
        rules: $data.rules,
        "validate-trigger": "bind",
        "label-width": "80px"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            name: "userName",
            label: "用户名"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "text",
                modelValue: $data.dataForm.userName,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.dataForm.userName = $event),
                placeholder: "用户名"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "nickName",
            label: "昵称"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "text",
                modelValue: $data.dataForm.nickName,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.dataForm.nickName = $event),
                placeholder: "昵称"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "phoneNum",
            label: "手机号"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "number",
                modelValue: $data.dataForm.phoneNum,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.dataForm.phoneNum = $event),
                placeholder: "手机号"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "code",
            label: "验证码"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "number",
                modelValue: $data.dataForm.code,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.dataForm.code = $event),
                placeholder: "验证码"
              }, {
                right: vue.withCtx(() => [
                  vue.createElementVNode("button", {
                    disabled: $data.dataForm.phoneNum.length != 11,
                    onClick: _cache[3] || (_cache[3] = (...args) => $options.getVerificationCode && $options.getVerificationCode(...args)),
                    class: "btn-get-code"
                  }, "获取验证码", 8, ["disabled"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "password",
            label: "密码"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: $data.dataForm.password,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.dataForm.password = $event),
                placeholder: "密码"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "confirmPassword",
            label: "确认密码"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: $data.dataForm.confirmPassword,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.dataForm.confirmPassword = $event),
                placeholder: "确认密码"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("button", {
            class: "btn-submit",
            disabled: !$data.isValid,
            onClick: _cache[7] || (_cache[7] = (...args) => $options.submit && $options.submit(...args)),
            type: "warn"
          }, "注册并登录", 8, ["disabled"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "rules"]),
      vue.createElementVNode("navigator", {
        class: "nav-login",
        url: "/pages/log/login/login",
        "open-type": "redirect"
      }, " 已有账号？前往登录 ")
    ]);
  }
  const PagesLogRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-493020a3"], ["__file", "C:/Users/maxab/Projects/galchat/pages/log/register/register.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        inputMessage: "",
        // 输入框消息
        scrollTop: 0,
        // 滚动条位置
        messageList: [
          {
            id: 1,
            content: "你好！",
            isSelf: false,
            avatar: "/static/c1.png",
            time: /* @__PURE__ */ new Date()
          },
          {
            id: 2,
            content: "你好！很高兴见到你！",
            isSelf: true,
            avatar: "/static/c2.png",
            time: /* @__PURE__ */ new Date()
          }
        ]
      };
    },
    methods: {
      // 发送消息
      sendMessage() {
        if (!this.inputMessage.trim())
          return;
        this.messageList.push({
          id: this.messageList.length + 1,
          content: this.inputMessage,
          isSelf: true,
          avatar: "/static/c2.png",
          time: /* @__PURE__ */ new Date()
        });
        this.inputMessage = "";
        this.$nextTick(() => {
          this.scrollToBottom();
        });
        setTimeout(() => {
          this.messageList.push({
            id: this.messageList.length + 1,
            content: "收到你的消息了！",
            isSelf: false,
            avatar: "/static/c1.png",
            time: /* @__PURE__ */ new Date()
          });
          this.scrollToBottom();
        }, 1e3);
      },
      // 滚动到底部
      scrollToBottom() {
        const query = uni.createSelectorQuery().in(this);
        query.select(".message-list").boundingClientRect((data) => {
          this.scrollTop = data.height;
        }).exec();
      },
      // 加载更多消息
      loadMoreMessages() {
        formatAppLog("log", "at pages/tabBar/chats/chat-box.vue:126", "加载更多消息");
      }
    },
    mounted() {
      this.scrollToBottom();
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-container" }, [
      vue.createCommentVNode(" 顶部导航栏 "),
      vue.createElementVNode("view", { class: "chat-header" }, [
        vue.createElementVNode("text", { class: "header-title" }, "聊天")
      ]),
      vue.createCommentVNode(" 消息列表区域 "),
      vue.createElementVNode("scroll-view", {
        class: "chat-messages",
        "scroll-y": "true",
        "scroll-top": $data.scrollTop,
        "scroll-with-animation": true,
        onScrolltoupper: _cache[0] || (_cache[0] = (...args) => $options.loadMoreMessages && $options.loadMoreMessages(...args))
      }, [
        vue.createElementVNode("view", { class: "message-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.messageList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: index,
                  class: vue.normalizeClass(["message-item", item.isSelf ? "message-right" : "message-left"])
                },
                [
                  vue.createCommentVNode(" 头像 "),
                  vue.createElementVNode("image", {
                    class: "avatar",
                    src: item.avatar,
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  vue.createCommentVNode(" 消息内容 "),
                  vue.createElementVNode("view", { class: "message-content" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "message-text" },
                      vue.toDisplayString(item.content),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ], 40, ["scroll-top"]),
      vue.createCommentVNode(" 底部输入区域 "),
      vue.createElementVNode("view", { class: "chat-footer" }, [
        vue.createElementVNode("view", { class: "input-box" }, [
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              type: "text",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.inputMessage = $event),
              "confirm-type": "send",
              onConfirm: _cache[2] || (_cache[2] = (...args) => $options.sendMessage && $options.sendMessage(...args)),
              placeholder: "请输入消息",
              class: "message-input"
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $data.inputMessage]
          ]),
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["send-btn", { active: $data.inputMessage.length > 0 }]),
              onClick: _cache[3] || (_cache[3] = (...args) => $options.sendMessage && $options.sendMessage(...args))
            },
            "发送",
            2
            /* CLASS */
          )
        ])
      ])
    ]);
  }
  const PagesTabBarChatsChatBox = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "C:/Users/maxab/Projects/galchat/pages/tabBar/chats/chat-box.vue"]]);
  const _sfc_main$d = {};
  function _sfc_render$c(_ctx, _cache) {
    return null;
  }
  const PagesTabBarContactsNewVirtualFriend = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "C:/Users/maxab/Projects/galchat/pages/tabBar/contacts/newVirtualFriend.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        searchText: "",
        searchResults: [],
        searchTimer: null,
        hasSearched: false
      };
    },
    watch: {
      "searchText": {
        handler(newValue, oldValue) {
          if (this.searchTimer) {
            clearTimeout(this.searchTimer);
          }
          if (!this.searchText.trim()) {
            this.searchResults = [];
            this.hasSearched = false;
            return;
          }
          this.searchTimer = setTimeout(() => {
            this.searchUser();
          }, 500);
        }
      }
    },
    methods: {
      // 搜索用户
      async searchUser() {
        try {
          const res = await uni.request({
            url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/byUsername/${this.searchText}`,
            method: "GET",
            header: {
              "Content-Type": "application/json",
              "authorization": uni.getStorageSync("token")
            },
            success: (res2) => {
              const userInfo = res2.data;
              this.hasSearched = true;
              if (userInfo.status) {
                this.searchResults = userInfo.value;
                formatAppLog("log", "at pages/tabBar/contacts/newRealFriend.vue:79", this.searchResults);
              } else {
                this.searchResults = [];
              }
            }
          });
        } catch (error) {
          this.searchResults = [];
          uni.showToast({
            title: "网络错误",
            icon: "none"
          });
        }
      },
      showdetail() {
        uni.navigateTo({
          url: `/pages/detail/userdetail?id=${this.searchResults.id}&username=${this.searchText}&nickname=${this.searchResults.nickname}`
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "nav-bar" }, [
          vue.createElementVNode("view", { class: "nav-search" }, [
            vue.createVNode(_component_uni_search_bar, {
              modelValue: $data.searchText,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchText = $event),
              radius: "100",
              cancelButton: "none",
              placeholder: "点击搜索新的好友"
            }, null, 8, ["modelValue"])
          ]),
          vue.createCommentVNode(' 	<view class="nav-add" @click="onAddNewFriends()">\r\n			<uni-icons type="personadd" size="35"></uni-icons>\r\n		</view> ')
        ]),
        vue.createElementVNode("view", null, [
          vue.createCommentVNode(" 搜索结果列表 "),
          $data.searchResults.length != 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "search-results"
          }, [
            vue.createElementVNode("view", {
              class: "user-item",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.showdetail())
            }, [
              vue.createElementVNode("image", {
                class: "user-avatar",
                src: $data.searchResults.avatar,
                mode: "aspectFill"
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "text",
                { class: "user-name" },
                vue.toDisplayString($data.searchResults.username),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 无搜索结果提示 "),
          $data.searchText && $data.searchResults.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "no-results"
          }, [
            vue.createElementVNode("text", null, "未找到相关用户")
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("text", null, "没有待处理的好友请求")
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesTabBarContactsNewRealFriend = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "C:/Users/maxab/Projects/galchat/pages/tabBar/contacts/newRealFriend.vue"]]);
  const _sfc_main$b = {};
  function _sfc_render$a(_ctx, _cache) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$3);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "nav-bar" }, [
      vue.createElementVNode("view", { class: "nav-search" }, [
        vue.createVNode(_component_uni_search_bar, {
          modelValue: _ctx.searchText,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.searchText = $event),
          radius: "100",
          cancelButton: "none",
          placeholder: "点击搜索群聊"
        }, null, 8, ["modelValue"])
      ]),
      vue.createElementVNode("view", {
        class: "nav-add",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onAddNewFriends())
      }, [
        vue.createVNode(_component_uni_icons, {
          type: "personadd",
          size: "35"
        })
      ])
    ]);
  }
  const PagesTabBarContactsGroupChat = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "C:/Users/maxab/Projects/galchat/pages/tabBar/contacts/groupChat.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        listData: [
          {
            title: "昵称",
            url: "/pages/accountsetting/setnickname"
          },
          {
            title: "用户名",
            url: "/pages/accountsetting/setaccount"
          },
          {
            title: "修改密码",
            url: "/pages/accountsetting/setpassword"
          }
        ]
      };
    },
    methods: {
      // 点击列表项跳转到指定页面
      navigateTo(url) {
        uni.navigateTo({
          url
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_0$2);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_list, null, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.listData, (item, index) => {
              return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                key: index,
                title: item.title,
                clickable: "",
                onClick: ($event) => $options.navigateTo(item.url)
              }, null, 8, ["title", "onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesTabBarMeAccountSetting = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "C:/Users/maxab/Projects/galchat/pages/tabBar/me/accountSetting.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        isValid: false,
        oldnickname: uni.getStorageSync("nickname") ?? "",
        dataForm: {
          nickName: uni.getStorageSync("nickname") ?? ""
        },
        rules: {
          nickName: {
            rules: [{
              required: true,
              errorMessage: "请输入昵称"
            }]
          }
        }
      };
    },
    onLoad() {
      this.dataForm = {
        nickName: uni.getStorageSync("nickname")
      };
    },
    watch: {
      // 深度监听整个对象
      dataForm: {
        handler(newValue, oldValue) {
          if (this.dataForm.nickName != this.oldnickname && this.dataForm.nickName != "")
            this.isValid = true;
          else
            this.isValid = false;
        },
        deep: true
        // 深度监听
      }
    },
    methods: {
      submit() {
        const regData = {
          username: uni.getStorageSync("username"),
          nickname: this.dataForm.nickName,
          password: uni.getStorageSync("password"),
          confirmPassword: uni.getStorageSync("password")
        };
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/update",
          method: "PUT",
          header: {
            "Content-Type": "application/json",
            "authorization": uni.getStorageSync("token")
          },
          data: regData,
          success: (res) => {
            const regInfo = res.data;
            if (regInfo.status) {
              uni.setStorageSync("nickname", this.dataForm.nickName);
              uni.showToast({
                title: "修改成功",
                icon: "success",
                duration: 2e3
              });
              uni.navigateBack();
            } else {
              uni.showModal({
                title: "修改失败",
                content: regInfo.message,
                showCancel: false
              });
            }
          },
          fail: (err) => {
            uni.showModal({
              title: "错误",
              content: "网络请求失败，请稍后重试",
              showCancel: false
            });
            formatAppLog("error", "at pages/accountsetting/setnickname.vue:91", "请求失败：", err);
          }
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$1);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "register" }, [
      vue.createVNode(_component_uni_forms, {
        class: "form",
        modelValue: $data.dataForm,
        rules: $data.rules,
        "validate-trigger": "bind",
        "label-width": "80px"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            name: "nickName",
            label: "昵称"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "text",
                modelValue: $data.dataForm.nickName,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.dataForm.nickName = $event),
                placeholder: "昵称"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("text", { class: "tip-text" }, "一个好的昵称可以让好友轻松记住你")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("button", {
            class: "btn-submit",
            disabled: !$data.isValid,
            onClick: _cache[1] || (_cache[1] = (...args) => $options.submit && $options.submit(...args)),
            type: "primary"
          }, "保存", 8, ["disabled"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "rules"])
    ]);
  }
  const PagesAccountsettingSetnickname = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-0be8cd04"], ["__file", "C:/Users/maxab/Projects/galchat/pages/accountsetting/setnickname.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        isValid: false,
        olduserName: uni.getStorageSync("userName") ?? "",
        dataForm: {
          userName: uni.getStorageSync("userName") ?? ""
        },
        rules: {
          userName: {
            rules: [{
              required: true,
              errorMessage: "请输入用户名"
            }, {
              minLength: 6,
              // 添加最小长度限制
              errorMessage: "用户名不能少于6个字符"
            }]
          }
        }
      };
    },
    onLoad() {
      this.dataForm = {
        userName: uni.getStorageSync("userName")
      };
    },
    watch: {
      // 深度监听整个对象
      dataForm: {
        handler(newValue, oldValue) {
          if (this.dataForm.userName != this.olduserName && this.dataForm.userName != "")
            this.isValid = true;
          else
            this.isValid = false;
        },
        deep: true
        // 深度监听
      }
    },
    methods: {
      submit() {
        const regData = {
          username: this.dataForm.userName,
          nickname: uni.getStorageSync("nickname"),
          password: uni.getStorageSync("password"),
          confirmPassword: uni.getStorageSync("password")
        };
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/update",
          method: "PUT",
          header: {
            "Content-Type": "application/json",
            "authorization": uni.getStorageSync("token")
          },
          data: regData,
          success: (res) => {
            const regInfo = res.data;
            if (regInfo.status) {
              uni.setStorageSync("userName", this.dataForm.userName);
              uni.showToast({
                title: "修改成功",
                icon: "success",
                duration: 2e3
              });
              uni.navigateBack();
            } else {
              uni.showModal({
                title: "修改失败",
                content: regInfo.message,
                showCancel: false
              });
            }
          },
          fail: (err) => {
            uni.showModal({
              title: "错误",
              content: "网络请求失败，请稍后重试",
              showCancel: false
            });
            formatAppLog("error", "at pages/accountsetting/setaccount.vue:94", "请求失败：", err);
          }
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$1);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "register" }, [
      vue.createVNode(_component_uni_forms, {
        class: "form",
        modelValue: $data.dataForm,
        rules: $data.rules,
        "validate-trigger": "bind",
        "label-width": "80px"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            name: "userName",
            label: "用户名"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "text",
                modelValue: $data.dataForm.userName,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.dataForm.userName = $event),
                placeholder: "用户名"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("text", { class: "tip-text" }, "用户名是账号的唯一凭证，用于登录，请牢记")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("button", {
            class: "btn-submit",
            disabled: !$data.isValid,
            onClick: _cache[1] || (_cache[1] = (...args) => $options.submit && $options.submit(...args)),
            type: "primary"
          }, "保存", 8, ["disabled"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "rules"])
    ]);
  }
  const PagesAccountsettingSetaccount = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-3c87e4c2"], ["__file", "C:/Users/maxab/Projects/galchat/pages/accountsetting/setaccount.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        isValid: false,
        dataForm: {
          oldpassword: "",
          password: "",
          confirmPassword: ""
        },
        rules: {
          oldpassword: {
            rules: [{
              required: true,
              errorMessage: "请输入旧密码"
            }]
          },
          password: {
            rules: [{
              required: true,
              errorMessage: "请输入新密码"
            }, {
              minLength: 6,
              // 添加最小长度限制
              errorMessage: "密码不能少于6个字符"
            }]
          },
          confirmPassword: {
            rules: [{
              required: true,
              errorMessage: "请输入确认密码"
            }, {
              validateFunction: (rule, value, data, callback) => {
                if (data.password != value) {
                  callback("两次密码输入不一致");
                }
                return true;
              }
            }]
          }
        }
      };
    },
    watch: {
      // 深度监听整个对象
      dataForm: {
        handler(newValue, oldValue) {
          if (this.dataForm.oldpassword != "" && this.dataForm.password != "" && this.dataForm.password == this.dataForm.confirmPassword)
            this.isValid = true;
          else
            this.isValid = false;
        },
        deep: true
        // 深度监听
      }
    },
    methods: {
      submit() {
        const regData = {
          username: uni.getStorageSync("username"),
          nickname: uni.getStorageSync("nickname"),
          password: this.dataForm.password,
          confirmPassword: this.dataForm.oldpassword
        };
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/update",
          method: "PUT",
          header: {
            "Content-Type": "application/json",
            "authorization": uni.getStorageSync("token")
          },
          data: regData,
          success: (res) => {
            const regInfo = res.data;
            if (regInfo.status) {
              uni.setStorageSync("password", this.dataForm.password);
              uni.showToast({
                title: "修改成功",
                icon: "success",
                duration: 2e3
              });
              uni.navigateBack();
            } else {
              uni.showModal({
                title: "修改失败",
                content: regInfo.message,
                showCancel: false
              });
            }
          },
          fail: (err) => {
            uni.showModal({
              title: "错误",
              content: "网络请求失败，请稍后重试",
              showCancel: false
            });
            formatAppLog("error", "at pages/accountsetting/setpassword.vue:115", "请求失败：", err);
          }
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$1);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "register" }, [
      vue.createVNode(_component_uni_forms, {
        class: "form",
        modelValue: $data.dataForm,
        rules: $data.rules,
        "validate-trigger": "bind",
        "label-width": "80px"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            name: "oldpassword",
            label: "旧密码"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: $data.dataForm.oldpassword,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.dataForm.oldpassword = $event),
                placeholder: "旧密码"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "password",
            label: "新密码"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: $data.dataForm.password,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.dataForm.password = $event),
                placeholder: "新密码"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "confirmPassword",
            label: "确认密码"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: $data.dataForm.confirmPassword,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.dataForm.confirmPassword = $event),
                placeholder: "确认密码"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("button", {
            class: "btn-submit",
            disabled: !$data.isValid,
            onClick: _cache[3] || (_cache[3] = (...args) => $options.submit && $options.submit(...args)),
            type: "primary"
          }, "保存", 8, ["disabled"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "rules"])
    ]);
  }
  const PagesAccountsettingSetpassword = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-6db36944"], ["__file", "C:/Users/maxab/Projects/galchat/pages/accountsetting/setpassword.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        dataForm: {
          mood: uni.getStorageSync("mood") === "添加心情" ? "" : uni.getStorageSync("mood")
        }
      };
    },
    onLoad() {
      this.dataForm = {
        mood: uni.getStorageSync("mood") === "添加心情" ? "" : uni.getStorageSync("mood")
      };
    },
    methods: {
      submit() {
        const regData = {
          mood: this.dataForm.mood === "" ? "添加心情" : this.dataForm.mood
        };
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/mood",
          method: "PUT",
          header: {
            "Content-Type": "application/json",
            "authorization": uni.getStorageSync("token")
          },
          data: regData,
          success: (res) => {
            const regInfo = res.data;
            if (regInfo.status) {
              uni.setStorageSync("mood", this.dataForm.mood);
              uni.showToast({
                title: "修改成功",
                icon: "success",
                duration: 2e3
              });
              uni.switchTab({
                url: "/pages/tabBar/me/me"
              });
            } else {
              uni.showModal({
                title: "修改失败",
                content: regInfo.message,
                showCancel: false
              });
            }
          },
          fail: (err) => {
            uni.showModal({
              title: "错误",
              content: "网络请求失败，请稍后重试",
              showCancel: false
            });
            formatAppLog("error", "at pages/accountsetting/setmood.vue:68", "请求失败：", err);
          }
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$1);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "register" }, [
      vue.createVNode(_component_uni_forms, {
        class: "form",
        modelValue: $data.dataForm,
        rules: _ctx.rules,
        "validate-trigger": "bind",
        "label-width": "80px"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            name: "mood",
            label: "心情"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "text",
                modelValue: $data.dataForm.mood,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.dataForm.mood = $event),
                placeholder: "无心情"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("text", { class: "tip-text" }, "将心情告诉你的好友")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("button", {
            class: "btn-submit",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.submit && $options.submit(...args)),
            type: "primary"
          }, "保存")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "rules"])
    ]);
  }
  const PagesAccountsettingSetmood = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-981a19cb"], ["__file", "C:/Users/maxab/Projects/galchat/pages/accountsetting/setmood.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        dataForm: {
          status: uni.getStorageSync("status") === "添加状态" ? "" : uni.getStorageSync("status")
        }
      };
    },
    onLoad() {
      this.dataForm = {
        status: uni.getStorageSync("status") === "添加状态" ? "" : uni.getStorageSync("status")
      };
    },
    methods: {
      submit() {
        const regData = {
          status: this.dataForm.status === "" ? "添加状态" : this.dataForm.status
        };
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/status",
          method: "PUT",
          header: {
            "Content-Type": "application/json",
            "authorization": uni.getStorageSync("token")
          },
          data: regData,
          success: (res) => {
            const regInfo = res.data;
            if (regInfo.status) {
              uni.setStorageSync("status", this.dataForm.status);
              uni.showToast({
                title: "修改成功",
                icon: "success",
                duration: 2e3
              });
              uni.switchTab({
                url: "/pages/tabBar/me/me"
              });
            } else {
              uni.showModal({
                title: "修改失败",
                content: regInfo.message,
                showCancel: false
              });
            }
          },
          fail: (err) => {
            uni.showModal({
              title: "错误",
              content: "网络请求失败，请稍后重试",
              showCancel: false
            });
            formatAppLog("error", "at pages/accountsetting/setstatus.vue:68", "请求失败：", err);
          }
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$1);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "register" }, [
      vue.createVNode(_component_uni_forms, {
        class: "form",
        modelValue: $data.dataForm,
        rules: _ctx.rules,
        "validate-trigger": "bind",
        "label-width": "80px"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            name: "status",
            label: "状态"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "text",
                modelValue: $data.dataForm.status,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.dataForm.status = $event),
                placeholder: "无状态"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("text", { class: "tip-text" }, "将你的状态告诉你的好友")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("button", {
            class: "btn-submit",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.submit && $options.submit(...args)),
            type: "primary"
          }, "保存")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "rules"])
    ]);
  }
  const PagesAccountsettingSetstatus = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-6fd5cd8b"], ["__file", "C:/Users/maxab/Projects/galchat/pages/accountsetting/setstatus.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        isexist: uni.getStorageSync("cal") === "null" ? false : true,
        dataForm: {
          cal: uni.getStorageSync("cal") === "null" ? "" : uni.getStorageSync("cal")
        }
      };
    },
    onLoad() {
      this.dataForm = {
        cal: uni.getStorageSync("cal") === "null" ? "" : uni.getStorageSync("cal")
      };
    },
    methods: {
      submit() {
        const regData = {
          content: this.dataForm.cal === "" ? "null" : this.dataForm.cal,
          userIds: [uni.getStorageSync("id")]
        };
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/calendar",
          method: "POST",
          header: {
            "Content-Type": "application/json",
            "authorization": uni.getStorageSync("token")
          },
          data: regData,
          success: (res) => {
            const regInfo = res.data;
            if (regInfo.status) {
              uni.setStorageSync("cal", this.dataForm.cal);
              uni.showToast({
                title: "添加成功",
                icon: "success",
                duration: 2e3
              });
              uni.switchTab({
                url: "/pages/tabBar/me/me"
              });
            } else {
              uni.showModal({
                title: "添加失败",
                content: regInfo.message,
                showCancel: false
              });
            }
          },
          fail: (err) => {
            uni.showModal({
              title: "错误",
              content: "网络请求失败，请稍后重试",
              showCancel: false
            });
            formatAppLog("error", "at pages/accountsetting/setcal.vue:74", "请求失败：", err);
          }
        });
      },
      alter() {
        const regData = {
          content: this.dataForm.cal === "" ? "null" : this.dataForm.cal,
          userIds: [uni.getStorageSync("id")]
        };
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/calendar",
          method: "PUT",
          header: {
            "Content-Type": "application/json",
            "authorization": uni.getStorageSync("token")
          },
          data: regData,
          success: (res) => {
            const regInfo = res.data;
            if (regInfo.status) {
              uni.setStorageSync("cal", this.dataForm.cal);
              uni.showToast({
                title: "修改成功",
                icon: "success",
                duration: 2e3
              });
              uni.switchTab({
                url: "/pages/tabBar/me/me"
              });
            } else {
              uni.showModal({
                title: "修改失败",
                content: regInfo.message,
                showCancel: false
              });
            }
          },
          fail: (err) => {
            uni.showModal({
              title: "错误",
              content: "网络请求失败，请稍后重试",
              showCancel: false
            });
            formatAppLog("error", "at pages/accountsetting/setcal.vue:119", "请求失败：", err);
          }
        });
      },
      remove() {
        uni.request({
          url: "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/calendar",
          method: "DELETE",
          header: {
            "Content-Type": "application/json",
            "authorization": uni.getStorageSync("token")
          },
          success: (res) => {
            const regInfo = res.data;
            if (regInfo.status) {
              uni.setStorageSync("cal", "null");
              uni.showToast({
                title: "删除成功",
                icon: "success",
                duration: 2e3
              });
              uni.switchTab({
                url: "/pages/tabBar/me/me"
              });
            } else {
              uni.showModal({
                title: "删除失败",
                content: regInfo.message,
                showCancel: false
              });
            }
          },
          fail: (err) => {
            uni.showModal({
              title: "错误",
              content: "网络请求失败，请稍后重试",
              showCancel: false
            });
            formatAppLog("error", "at pages/accountsetting/setcal.vue:159", "请求失败：", err);
          }
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "register" }, [
      vue.createVNode(_component_uni_forms, {
        class: "form",
        modelValue: $data.dataForm,
        rules: _ctx.rules,
        "validate-trigger": "bind",
        "label-width": "80px"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            name: "cal",
            label: "日程"
          }, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode(
                "textarea",
                {
                  class: "cal-textarea",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.dataForm.cal = $event),
                  placeholder: "无日程"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.dataForm.cal]
              ]),
              vue.createElementVNode("text", { class: "tip-text" }, "将你的日程告诉你的好友")
            ]),
            _: 1
            /* STABLE */
          }),
          !$data.isexist ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 0,
            class: "btn-submit",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.submit && $options.submit(...args)),
            type: "primary"
          }, "添加日程")) : vue.createCommentVNode("v-if", true),
          $data.isexist ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 1,
            class: "btn-submit",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.alter && $options.alter(...args)),
            type: "primary"
          }, "保存修改")) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("button", {
            class: "btn-submit",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.remove && $options.remove(...args)),
            type: "warn"
          }, "删除日程")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "rules"])
    ]);
  }
  const PagesAccountsettingSetcal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-9ccbb0de"], ["__file", "C:/Users/maxab/Projects/galchat/pages/accountsetting/setcal.vue"]]);
  const _imports_0 = "/static/me.jpg";
  const _sfc_main$3 = {
    data() {
      return {
        isfriend: false,
        id: "",
        nickname: "",
        username: ""
      };
    },
    onLoad(options) {
      this.id = options.id, this.nickname = options.nickname, this.username = options.username;
    },
    methods: {
      onAddTap() {
        const addData = {
          contactUserId: this.id,
          contactType: "real"
        };
        formatAppLog("log", "at pages/detail/userdetail.vue:43", this.id);
        uni.request({
          url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/contacts`,
          method: "POST",
          header: {
            "Content-Type": "application/json",
            "authorization": uni.getStorageSync("token")
          },
          data: addData,
          success: (res) => {
            const resData = res.data;
            if (resData.status)
              this.isfriend = true;
            uni.showToast({
              title: resData.message,
              icon: "none"
            });
          }
        });
      }
    }
    // async onShow() {
    // 	try {
    // 		const res = await new Promise((resolve, reject) => {
    // 			uni.request({
    // 				url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/profile/byUsername/${this.username}`,
    // 				method: 'GET',
    // 				header: {
    // 					'Content-Type': 'application/json',
    // 					'authorization': uni.getStorageSync('token')
    // 				},
    // 				success: (res) => resolve(res),
    // 				fail: (err) => reject(err)
    // 			});
    // 		});
    // 		const profile = res.data;
    // 		// 更新数据
    // 		this.nickname = profile.value.nickname;
    // 		this.username = profile.value.username;
    // 	} catch (error) {
    // 		uni.showModal({
    // 			title: '错误',
    // 			content: '获取用户信息失败',
    // 			showCancel: false,
    // 		});
    // 	}
    // },
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 头像和昵称、账号 "),
      vue.createElementVNode("view", { class: "top-section" }, [
        vue.createElementVNode("view", { class: "head-sculpture" }, [
          vue.createElementVNode("image", { src: _imports_0 })
        ]),
        vue.createElementVNode("view", { class: "right-section" }, [
          vue.createElementVNode(
            "view",
            { class: "nickname" },
            "昵称：" + vue.toDisplayString($data.nickname),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "username" },
            "用户名：" + vue.toDisplayString($data.username),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createCommentVNode(" 添加按钮 "),
      vue.createElementVNode("view", { class: "add-friend" }, [
        vue.createElementVNode("button", {
          class: "add-button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.onAddTap && $options.onAddTap(...args)),
          disabled: $data.isfriend
        }, vue.toDisplayString($data.isfriend ? "已添加" : "添加好友"), 9, ["disabled"])
      ])
    ]);
  }
  const PagesDetailUserdetail = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-97e00947"], ["__file", "C:/Users/maxab/Projects/galchat/pages/detail/userdetail.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        id: "",
        nickname: "",
        username: "",
        mood: "",
        status: ""
      };
    },
    onLoad(options) {
      this.id = options.id;
      this.nickname = options.nickname;
      this.username = options.username;
      this.chatId = options.chatId;
      if (options.mood === "null" || options.mood === "添加心情")
        this.mood = "无心情";
      else
        this.mood = options.mood;
      if (options.status === "null" || options.status === "添加状态")
        this.status = "无状态";
      else
        this.status = options.status;
    },
    methods: {
      navigateToChatRoom() {
        uni.navigateTo({
          url: `/pages/tabBar/chats/chat-room?chatId=${this.chatId}`
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 头像和昵称、账号 "),
      vue.createElementVNode("view", { class: "top-section" }, [
        vue.createElementVNode("view", { class: "head-sculpture" }, [
          vue.createElementVNode("image", { src: _imports_0 })
        ]),
        vue.createElementVNode("view", { class: "right-section" }, [
          vue.createElementVNode(
            "view",
            { class: "nickname" },
            "昵称：" + vue.toDisplayString($data.nickname),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "username" },
            "用户名：" + vue.toDisplayString($data.username),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { class: "middle-section" }, [
        vue.createElementVNode(
          "button",
          {
            class: "mood",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onMoodTap && _ctx.onMoodTap(...args))
          },
          vue.toDisplayString($data.mood),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "button",
          {
            class: "status",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onStatusTap && _ctx.onStatusTap(...args))
          },
          vue.toDisplayString($data.status),
          1
          /* TEXT */
        )
      ]),
      vue.createCommentVNode(" 添加按钮 "),
      vue.createElementVNode("view", { class: "add-friend" }, [
        vue.createElementVNode("button", {
          class: "add-button",
          clickable: "",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.navigateToChatRoom())
        }, "发消息")
      ])
    ]);
  }
  const PagesDetailFrienddetail = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-88dc242b"], ["__file", "C:/Users/maxab/Projects/galchat/pages/detail/frienddetail.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        profile: null,
        inputMessage: "",
        // 输入框消息
        scrollTop: 0,
        // 滚动条位置
        messages: null
      };
    },
    onLoad(options) {
      this.chatId = options.chatId;
      this.initializeProfile();
    },
    methods: {
      async initializeProfile() {
        const store = useProfileStore();
        this.profile = store.profile;
        if (this.profile) {
          await this.fetchInitialMessages();
          this.setupSocketConnection();
        } else {
          formatAppLog("error", "at pages/tabBar/chats/chat-room.vue:71", "Profile not loaded. Please check authentication.");
        }
      },
      async fetchInitialMessages() {
        try {
          const messages2 = await this.fetchNewMessages(1);
          this.messages = messages2.value;
          this.scrollToBottom();
        } catch (error) {
          formatAppLog("error", "at pages/tabBar/chats/chat-room.vue:81", "Error fetching initial messages:", error);
        }
      },
      async fetchNewMessages(page = 1) {
        try {
          const res = await new Promise((resolve, reject) => {
            uni.request({
              url: `https://gal-chat-test-970e995e1901.herokuapp.com/api/chat/messages/${this.chatId}?page=${page}&limit=30`,
              method: "GET",
              header: {
                "Content-Type": "application/json",
                authorization: uni.getStorageSync("token")
              },
              success: (res2) => resolve(res2),
              fail: (err) => reject(err)
            });
          });
          return res.data;
        } catch (err) {
          formatAppLog("error", "at pages/tabBar/chats/chat-room.vue:102", "Error fetching messages:", err);
          return {
            data: []
          };
        }
      },
      // 发送消息
      sendMessage() {
        if (!this.inputMessage.trim())
          return;
        this.socketTask.send({
          data: JSON.stringify({
            event: "sendMessage",
            data: {
              chatId: this.chatId,
              userId: this.profile.id,
              message: this.inputMessage.trim()
            }
          })
        });
        formatAppLog("log", "at pages/tabBar/chats/chat-room.vue:124", "sendMessage", this.inputMessage.trim());
        this.inputMessage = "";
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      },
      // 滚动到底部
      scrollToBottom() {
        const query = uni.createSelectorQuery().in(this);
        query.select(".message-list").boundingClientRect((data) => {
          this.scrollTop = data.height;
        }).exec();
      },
      // 加载更多消息
      async loadMoreMessages() {
        if (this.messages.totalPages > this.messages.currentPage) {
          try {
            const newMessages = await this.fetchNewMessages(this.messages.currentPage + 1);
            const prevMessages = [...this.messages.data];
            this.messages = newMessages.value;
            this.messages.data = [...this.messages.data, ...prevMessages];
          } catch (error) {
            formatAppLog("error", "at pages/tabBar/chats/chat-room.vue:151", "Error loading more messages:", error);
          }
        }
      },
      setupSocketConnection() {
        try {
          this.socketTask = uni.connectSocket({
            url: "https://gal-chat-test-970e995e1901.herokuapp.com",
            complete: (a) => formatAppLog("log", "at pages/tabBar/chats/chat-room.vue:160", "complete", a),
            success: () => {
              formatAppLog("log", "at pages/tabBar/chats/chat-room.vue:162", "WebSocket connection initiated");
            }
          });
          formatAppLog("log", "at pages/tabBar/chats/chat-room.vue:165", "this.socketTask", this.socketTask);
          this.socketTask.onOpen(() => {
            formatAppLog("log", "at pages/tabBar/chats/chat-room.vue:167", "WebSocket connection opened");
            this.socketTask.send({
              data: JSON.stringify({
                event: "joinChat",
                data: {
                  chatId: this.chatId,
                  userId: this.profile.id
                }
              })
            });
          });
          this.socketTask.onMessage((res) => {
            try {
              const message = JSON.parse(res.data);
              if (message.event === "newMessage") {
                formatAppLog("log", "at pages/tabBar/chats/chat-room.vue:184", "New message received:", message.data);
                this.messages.data = [...this.messages.data, message.data];
              }
            } catch (error) {
              formatAppLog("error", "at pages/tabBar/chats/chat-room.vue:188", "Error parsing message:", error);
            }
          });
          formatAppLog("log", "at pages/tabBar/chats/chat-room.vue:192", "setupSocketConnection");
        } catch (error) {
          formatAppLog("error", "at pages/tabBar/chats/chat-room.vue:194", "Socket connection error:", error);
        }
      }
    },
    onUnload() {
      if (this.socketTask) {
        this.socketTask.close({
          success: () => {
            formatAppLog("log", "at pages/tabBar/chats/chat-room.vue:203", "WebSocket connection closed");
          },
          fail: (err) => {
            formatAppLog("error", "at pages/tabBar/chats/chat-room.vue:206", "Failed to close WebSocket connection:", err);
          }
        });
        this.socketTask.onOpen(null);
        this.socketTask.onMessage(null);
        this.socketTask.onError(null);
        this.socketTask.onClose(null);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    var _a;
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-container" }, [
      vue.createCommentVNode(" 顶部导航栏 "),
      vue.createElementVNode("view", { class: "chat-header" }, [
        vue.createElementVNode("text", { class: "header-title" }, "张三AI")
      ]),
      vue.createCommentVNode(" 消息列表区域 "),
      vue.createElementVNode("scroll-view", {
        class: "chat-messages",
        "scroll-y": "true",
        "scroll-top": $data.scrollTop,
        "scroll-with-animation": true,
        onScrolltoupper: _cache[0] || (_cache[0] = (...args) => $options.loadMoreMessages && $options.loadMoreMessages(...args))
      }, [
        vue.createElementVNode("view", { class: "message-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(((_a = $data.messages) == null ? void 0 : _a.data) || [], (item, index) => {
              var _a2;
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: index,
                  class: vue.normalizeClass(["message-item", (item == null ? void 0 : item.userId) === ((_a2 = $data.profile) == null ? void 0 : _a2.id) ? "message-right" : "message-left"])
                },
                [
                  vue.createCommentVNode(" 头像 "),
                  vue.createElementVNode("image", {
                    class: "avatar",
                    src: item.avatar,
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  vue.createCommentVNode(" 消息内容 "),
                  vue.createElementVNode("view", { class: "message-box" }, [
                    vue.createElementVNode("view", { class: "sender-box" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "sender-text" },
                        vue.toDisplayString(item.sender),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "message-content" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "message-text" },
                        vue.toDisplayString(item.message),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ],
                2
                /* CLASS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ], 40, ["scroll-top"]),
      vue.createCommentVNode(" 底部输入区域 "),
      vue.createElementVNode("view", { class: "chat-footer" }, [
        vue.createElementVNode("view", { class: "input-box" }, [
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              type: "text",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.inputMessage = $event),
              "confirm-type": "send",
              onConfirm: _cache[2] || (_cache[2] = (...args) => $options.sendMessage && $options.sendMessage(...args)),
              placeholder: "请输入消息",
              class: "message-input"
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $data.inputMessage]
          ]),
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["send-btn", { active: $data.inputMessage.length > 0 }]),
              onClick: _cache[3] || (_cache[3] = (...args) => $options.sendMessage && $options.sendMessage(...args))
            },
            "发送",
            2
            /* CLASS */
          )
        ])
      ])
    ]);
  }
  const PagesTabBarChatsChatRoom = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/maxab/Projects/galchat/pages/tabBar/chats/chat-room.vue"]]);
  __definePage("pages/tabBar/chats/chats", PagesTabBarChatsChats);
  __definePage("pages/tabBar/contacts/contacts", PagesTabBarContactsContacts);
  __definePage("pages/tabBar/me/me", PagesTabBarMeMe);
  __definePage("pages/log/log/log", PagesLogLogLog);
  __definePage("pages/log/login/login", PagesLogLoginLogin);
  __definePage("pages/log/register/register", PagesLogRegisterRegister);
  __definePage("pages/tabBar/chats/chat-box", PagesTabBarChatsChatBox);
  __definePage("pages/tabBar/contacts/newVirtualFriend", PagesTabBarContactsNewVirtualFriend);
  __definePage("pages/tabBar/contacts/newRealFriend", PagesTabBarContactsNewRealFriend);
  __definePage("pages/tabBar/contacts/groupChat", PagesTabBarContactsGroupChat);
  __definePage("pages/tabBar/me/accountSetting", PagesTabBarMeAccountSetting);
  __definePage("pages/accountsetting/setnickname", PagesAccountsettingSetnickname);
  __definePage("pages/accountsetting/setaccount", PagesAccountsettingSetaccount);
  __definePage("pages/accountsetting/setpassword", PagesAccountsettingSetpassword);
  __definePage("pages/accountsetting/setmood", PagesAccountsettingSetmood);
  __definePage("pages/accountsetting/setstatus", PagesAccountsettingSetstatus);
  __definePage("pages/accountsetting/setcal", PagesAccountsettingSetcal);
  __definePage("pages/detail/userdetail", PagesDetailUserdetail);
  __definePage("pages/detail/frienddetail", PagesDetailFrienddetail);
  __definePage("pages/tabBar/chats/chat-room", PagesTabBarChatsChatRoom);
  const _sfc_main = {
    setup() {
      if (uni.getStorageSync("token")) {
        const profileStore = useProfileStore();
        profileStore.initializeProfile();
      }
    },
    onLaunch: function() {
      formatAppLog("warn", "at App.vue:15", "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
      formatAppLog("log", "at App.vue:16", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:19", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:22", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/maxab/Projects/galchat/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(createPinia());
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
