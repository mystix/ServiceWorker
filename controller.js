var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
navigator.controller = {
    register: function (scope, url) {
        return accepted();
    },
    ready: function () {
        return accepted();
    }
};
var InstalledEvent = (function (_super) {
    __extends(InstalledEvent, _super);
    function InstalledEvent() {
        _super.apply(this, arguments);

        this.previousVersion = "";
        this.previous = null;
    }
    InstalledEvent.prototype.replace = function () {
    };
    InstalledEvent.prototype.waitUntil = function (f) {
        return accepted();
    };
    return InstalledEvent;
})(_Event);
var ReplacedEvent = (function (_super) {
    __extends(ReplacedEvent, _super);
    function ReplacedEvent() {
        _super.apply(this, arguments);

    }
    return ReplacedEvent;
})(_Event);
var ControllerScope = (function (_super) {
    __extends(ControllerScope, _super);
    function ControllerScope(url, upgrading) {
        _super.call(this, url);
        this.version = "";
        if(upgrading) {
            this.dispatchEvent(new _CustomEvent("update"));
        }
    }
    Object.defineProperty(ControllerScope.prototype, "windows", {
        get: function () {
            return new WindowList();
        },
        enumerable: true,
        configurable: true
    });
    return ControllerScope;
})(SharedWorker);
var Request = (function () {
    function Request() {
        this.method = "GET";
        this.synchronous = false;
        this.redirectCount = 0;
        this.forcePreflight = false;
        this.omitCredentials = false;
    }
    return Request;
})();
var BaseResponse = (function () {
    function BaseResponse() {
    }
    return BaseResponse;
})();
var Response = (function (_super) {
    __extends(Response, _super);
    function Response() {
        _super.apply(this, arguments);

    }
    return Response;
})(BaseResponse);
var CORSXOriginResponse = (function (_super) {
    __extends(CORSXOriginResponse, _super);
    function CORSXOriginResponse() {
        _super.apply(this, arguments);

    }
    return CORSXOriginResponse;
})(BaseResponse);
var CORSSameOriginResponse = (function (_super) {
    __extends(CORSSameOriginResponse, _super);
    function CORSSameOriginResponse() {
        _super.apply(this, arguments);

    }
    return CORSSameOriginResponse;
})(BaseResponse);
var ResponseFuture = (function (_super) {
    __extends(ResponseFuture, _super);
    function ResponseFuture() {
        _super.apply(this, arguments);

    }
    return ResponseFuture;
})(Future);
var FetchEvent = (function (_super) {
    __extends(FetchEvent, _super);
    function FetchEvent() {
        _super.call(this, "fetch", {
    cancelable: true,
    bubbles: false
});
        this.type = "navigate";
        this.isTopLevel = false;
        this.window = null;
    }
    FetchEvent.prototype.respondWith = function (r) {
        return accepted();
    };
    FetchEvent.prototype.forwardTo = function (url) {
        var r = new Response();
        return accepted();
    };
    return FetchEvent;
})(_Event);
var Cache = (function () {
    function Cache() {
        var urls = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            urls[_i] = arguments[_i + 0];
        }
        if(urls.length) {
        }
    }
    Cache.prototype.match = function (name) {
        if(name) {
            return this.items.get(name.toString());
        }
    };
    Cache.prototype.add = function () {
        var response = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            response[_i] = arguments[_i + 0];
        }
        return accepted();
    };
    Cache.prototype.remove = function () {
        var response = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            response[_i] = arguments[_i + 0];
        }
        return accepted();
    };
    Cache.prototype.update = function () {
        var urls = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            urls[_i] = arguments[_i + 0];
        }
        return accepted();
    };
    Cache.prototype.ready = function () {
        return accepted();
    };
    Cache.prototype.swapCache = function () {
        return accepted();
    };
    return Cache;
})();
var CacheList = (function (_super) {
    __extends(CacheList, _super);
    function CacheList(iterable) {
        _super.call(this);
    }
    return CacheList;
})(Map);
var Map = (function () {
    function Map(iterable) {
    }
    Map.prototype.get = function (key) {
    };
    Map.prototype.has = function (key) {
        return true;
    };
    Map.prototype.set = function (key, val) {
    };
    Map.prototype.clear = function () {
    };
    Map.prototype.delete = function (key) {
        return true;
    };
    Map.prototype.forEach = function (callback, thisArg) {
    };
    Map.prototype.items = function () {
        return [];
    };
    Map.prototype.keys = function () {
        return [];
    };
    Map.prototype.values = function () {
        return [];
    };
    return Map;
})();
var _Event = (function () {
    function _Event(type, eventInitDict) {
        this.bubbles = false;
        this.cancelable = true;
        this.defaultPrevented = false;
        this.isTrusted = false;
    }
    _Event.prototype.stopPropagation = function () {
    };
    _Event.prototype.stopImmediatePropagation = function () {
    };
    _Event.prototype.preventDefault = function () {
    };
    return _Event;
})();
var _CustomEvent = (function (_super) {
    __extends(_CustomEvent, _super);
    function _CustomEvent(type, eventInitDict) {
        _super.call(this, type, eventInitDict);
    }
    return _CustomEvent;
})(_Event);
var _EventTarget = (function () {
    function _EventTarget() { }
    _EventTarget.prototype.dispatchEvent = function (e) {
        return true;
    };
    return _EventTarget;
})();
var Resolver = (function () {
    function Resolver() { }
    Resolver.prototype.accept = function (v) {
    };
    Resolver.prototype.reject = function (v) {
    };
    Resolver.prototype.resolve = function (v) {
    };
    return Resolver;
})();
var Future = (function () {
    function Future(init) {
    }
    return Future;
})();
function accepted() {
    return new Future(function (r) {
        r.accept(true);
    });
}
var SharedWorker = (function (_super) {
    __extends(SharedWorker, _super);
    function SharedWorker(url, name) {
        _super.call(this);
    }
    return SharedWorker;
})(_EventTarget);
var WindowList = (function () {
    function WindowList() { }
    return WindowList;
})();
var AsyncMap = (function () {
    function AsyncMap(iterable) {
    }
    AsyncMap.prototype.get = function (key) {
        return accepted();
    };
    AsyncMap.prototype.has = function (key) {
        return accepted();
    };
    AsyncMap.prototype.set = function (key, val) {
        return accepted();
    };
    AsyncMap.prototype.clear = function () {
        return accepted();
    };
    AsyncMap.prototype.delete = function (key) {
        return accepted();
    };
    AsyncMap.prototype.forEach = function (callback, thisArg) {
    };
    AsyncMap.prototype.items = function () {
        return accepted();
    };
    AsyncMap.prototype.keys = function () {
        return accepted();
    };
    AsyncMap.prototype.values = function () {
        return accepted();
    };
    return AsyncMap;
})();
