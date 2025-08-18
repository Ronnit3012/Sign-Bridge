import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-UAQBJQCG.js";
import {
  __async
} from "./chunk-H7FQKYJT.js";

// node_modules/pose-viewer/dist/esm/pose-viewer-8421959f.js
var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var inited = false;
function init() {
  inited = true;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
}
function toByteArray(b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
  arr = new Arr(len * 3 / 4 - placeHolders);
  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;
  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 255;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 255;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var output = "";
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 63];
    output += "==";
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 63];
    output += lookup[tmp << 2 & 63];
    output += "=";
  }
  parts.push(output);
  return parts.join("");
}
function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
  }
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
  }
  buffer[offset + i - d] |= s * 128;
}
var toString = {}.toString;
var isArray = Array.isArray || function(arr) {
  return toString.call(arr) == "[object Array]";
};
var INSPECT_MAX_BYTES = 50;
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== void 0 ? global$1.TYPED_ARRAY_SUPPORT : true;
function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError("Invalid typed array length");
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }
  return that;
}
function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new Error("If encoding is specified then the first argument must be a string");
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192;
Buffer._augment = function(arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};
function from(that, value, encodingOrOffset, length) {
  if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }
  if (typeof value === "string") {
    return fromString(that, value, encodingOrOffset);
  }
  return fromObject(that, value);
}
Buffer.from = function(value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};
if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
}
function assertSize(size) {
  if (typeof size !== "number") {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}
function alloc(that, size, fill2, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill2 !== void 0) {
    return typeof encoding === "string" ? createBuffer(that, size).fill(fill2, encoding) : createBuffer(that, size).fill(fill2);
  }
  return createBuffer(that, size);
}
Buffer.alloc = function(size, fill2, encoding) {
  return alloc(null, size, fill2, encoding);
};
function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}
Buffer.allocUnsafe = function(size) {
  return allocUnsafe(null, size);
};
Buffer.allocUnsafeSlow = function(size) {
  return allocUnsafe(null, size);
};
function fromString(that, string, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }
  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);
  if (actual !== length) {
    that = that.slice(0, actual);
  }
  return that;
}
function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}
function fromArrayBuffer(that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError("'offset' is out of bounds");
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError("'length' is out of bounds");
  }
  if (byteOffset === void 0 && length === void 0) {
    array = new Uint8Array(array);
  } else if (length === void 0) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    that = fromArrayLike(that, array);
  }
  return that;
}
function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);
    if (that.length === 0) {
      return that;
    }
    obj.copy(that, 0, 0, len);
    return that;
  }
  if (obj) {
    if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
      if (typeof obj.length !== "number" || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }
    if (obj.type === "Buffer" && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function checked(length) {
  if (length >= kMaxLength()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
  }
  return length | 0;
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}
Buffer.compare = function compare(a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError("Arguments must be Buffers");
  }
  if (a === b) return 0;
  var x = a.length;
  var y = b.length;
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (list.length === 0) {
    return Buffer.alloc(0);
  }
  var i;
  if (length === void 0) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }
  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};
function byteLength(string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== "string") {
    string = "" + string;
  }
  var len = string.length;
  if (len === 0) return 0;
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
      case void 0:
        return utf8ToBytes(string).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length;
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
  var loweredCase = false;
  if (start === void 0 || start < 0) {
    start = 0;
  }
  if (start > this.length) {
    return "";
  }
  if (end === void 0 || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return "";
  }
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return "";
  }
  if (!encoding) encoding = "utf8";
  while (true) {
    switch (encoding) {
      case "hex":
        return hexSlice(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, start, end);
      case "ascii":
        return asciiSlice(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice(this, start, end);
      case "base64":
        return base64Slice(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
        encoding = (encoding + "").toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};
Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};
Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};
Buffer.prototype.toString = function toString2() {
  var length = this.length | 0;
  if (length === 0) return "";
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};
Buffer.prototype.equals = function equals(b) {
  if (!internalIsBuffer(b)) throw new TypeError("Argument must be a Buffer");
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
  var str = "";
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
    if (this.length > max) str += " ... ";
  }
  return "<Buffer " + str + ">";
};
Buffer.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError("Argument must be a Buffer");
  }
  if (start === void 0) {
    start = 0;
  }
  if (end === void 0) {
    end = target ? target.length : 0;
  }
  if (thisStart === void 0) {
    thisStart = 0;
  }
  if (thisEnd === void 0) {
    thisEnd = this.length;
  }
  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError("out of range index");
  }
  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }
  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);
  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0) return -1;
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (isNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length - 1;
  }
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1;
  }
  if (typeof val === "string") {
    val = Buffer.from(val, encoding);
  }
  if (internalIsBuffer(val)) {
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === "number") {
    val = val & 255;
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;
  if (encoding !== void 0) {
    encoding = String(encoding).toLowerCase();
    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read2(buf, i2) {
    if (indexSize === 1) {
      return buf[i2];
    } else {
      return buf.readUInt16BE(i2 * indexSize);
    }
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read2(arr, i + j) !== read2(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }
  return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write2(string, offset, length, encoding) {
  if (offset === void 0) {
    encoding = "utf8";
    length = this.length;
    offset = 0;
  } else if (length === void 0 && typeof offset === "string") {
    encoding = offset;
    length = this.length;
    offset = 0;
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === void 0) encoding = "utf8";
    } else {
      encoding = length;
      length = void 0;
    }
  } else {
    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  }
  var remaining = this.length - offset;
  if (length === void 0 || length > remaining) length = remaining;
  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  if (!encoding) encoding = "utf8";
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case "hex":
        return hexWrite(this, string, offset, length);
      case "utf8":
      case "utf-8":
        return utf8Write(this, string, offset, length);
      case "ascii":
        return asciiWrite(this, string, offset, length);
      case "latin1":
      case "binary":
        return latin1Write(this, string, offset, length);
      case "base64":
        return base64Write(this, string, offset, length);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ucs2Write(this, string, offset, length);
      default:
        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};
Buffer.prototype.toJSON = function toJSON() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  var res = "";
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 127);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = "";
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = "";
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === void 0 ? len : ~~end;
  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }
  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }
  if (end < start) end = start;
  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, void 0);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }
  return newBuf;
};
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
  if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) checkOffset(offset, byteLength2, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength2 && (mul *= 256)) {
    val += this[offset + i] * mul;
  }
  return val;
};
Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength2, this.length);
  }
  var val = this[offset + --byteLength2];
  var mul = 1;
  while (byteLength2 > 0 && (mul *= 256)) {
    val += this[offset + --byteLength2] * mul;
  }
  return val;
};
Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};
Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) checkOffset(offset, byteLength2, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength2 && (mul *= 256)) {
    val += this[offset + i] * mul;
  }
  mul *= 128;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
  return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) checkOffset(offset, byteLength2, this.length);
  var i = byteLength2;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 256)) {
    val += this[offset + --i] * mul;
  }
  mul *= 128;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
  return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 128)) return this[offset];
  return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
    checkInt(this, value, offset, byteLength2, maxBytes, 0);
  }
  var mul = 1;
  var i = 0;
  this[offset] = value & 255;
  while (++i < byteLength2 && (mul *= 256)) {
    this[offset + i] = value / mul & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength2 = byteLength2 | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
    checkInt(this, value, offset, byteLength2, maxBytes, 0);
  }
  var i = byteLength2 - 1;
  var mul = 1;
  this[offset + i] = value & 255;
  while (--i >= 0 && (mul *= 256)) {
    this[offset + i] = value / mul & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 255;
  return offset + 1;
};
function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 65535 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}
Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};
Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};
function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 4294967295 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
  }
}
Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};
Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength2 - 1);
    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
  }
  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 255;
  while (++i < byteLength2 && (mul *= 256)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength2 - 1);
    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
  }
  var i = byteLength2 - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 255;
  while (--i >= 0 && (mul *= 256)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 255;
  }
  return offset + byteLength2;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 255 + value + 1;
  this[offset] = value & 255;
  return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
  if (value < 0) value = 4294967295 + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError("Index out of range");
  if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;
  if (targetStart < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
  if (end < 0) throw new RangeError("sourceEnd out of bounds");
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }
  var len = end - start;
  var i;
  if (this === target && start < targetStart && targetStart < end) {
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }
  return len;
};
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  if (typeof val === "string") {
    if (typeof start === "string") {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === "string") {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== void 0 && typeof encoding !== "string") {
      throw new TypeError("encoding must be a string");
    }
    if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
  } else if (typeof val === "number") {
    val = val & 255;
  }
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError("Out of range index");
  }
  if (end <= start) {
    return this;
  }
  start = start >>> 0;
  end = end === void 0 ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;
  if (typeof val === "number") {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }
  return this;
};
var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
function base64clean(str) {
  str = stringtrim(str).replace(INVALID_BASE64_RE, "");
  if (str.length < 2) return "";
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, "");
}
function toHex(n) {
  if (n < 16) return "0" + n.toString(16);
  return n.toString(16);
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1) bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1) bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 255);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}
function isnan(val) {
  return val !== val;
}
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}
function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isFastBuffer(obj.slice(0, 0));
}
var Context = class {
  constructor(importPath, useContextVariables) {
    this.code = "";
    this.scopes = [["vars"]];
    this.bitFields = [];
    this.tmpVariableCount = 0;
    this.references = /* @__PURE__ */ new Map();
    this.imports = [];
    this.reverseImports = /* @__PURE__ */ new Map();
    this.useContextVariables = false;
    this.importPath = importPath;
    this.useContextVariables = useContextVariables;
  }
  generateVariable(name) {
    const scopes = [...this.scopes[this.scopes.length - 1]];
    if (name) {
      scopes.push(name);
    }
    return scopes.join(".");
  }
  generateOption(val) {
    switch (typeof val) {
      case "number":
        return val.toString();
      case "string":
        return this.generateVariable(val);
      case "function":
        return `${this.addImport(val)}.call(${this.generateVariable()}, vars)`;
    }
  }
  generateError(err) {
    this.pushCode(`throw new Error(${err});`);
  }
  generateTmpVariable() {
    return "$tmp" + this.tmpVariableCount++;
  }
  pushCode(code) {
    this.code += code + "\n";
  }
  pushPath(name) {
    if (name) {
      this.scopes[this.scopes.length - 1].push(name);
    }
  }
  popPath(name) {
    if (name) {
      this.scopes[this.scopes.length - 1].pop();
    }
  }
  pushScope(name) {
    this.scopes.push([name]);
  }
  popScope() {
    this.scopes.pop();
  }
  addImport(im) {
    if (!this.importPath) return `(${im})`;
    let id = this.reverseImports.get(im);
    if (!id) {
      id = this.imports.push(im) - 1;
      this.reverseImports.set(im, id);
    }
    return `${this.importPath}[${id}]`;
  }
  addReference(alias) {
    if (!this.references.has(alias)) {
      this.references.set(alias, {
        resolved: false,
        requested: false
      });
    }
  }
  markResolved(alias) {
    const reference = this.references.get(alias);
    if (reference) {
      reference.resolved = true;
    }
  }
  markRequested(aliasList) {
    aliasList.forEach((alias) => {
      const reference = this.references.get(alias);
      if (reference) {
        reference.requested = true;
      }
    });
  }
  getUnresolvedReferences() {
    return Array.from(this.references).filter(([_, reference]) => !reference.resolved && !reference.requested).map(([alias, _]) => alias);
  }
};
var aliasRegistry = /* @__PURE__ */ new Map();
var FUNCTION_PREFIX = "___parser_";
var PRIMITIVE_SIZES = {
  uint8: 1,
  uint16le: 2,
  uint16be: 2,
  uint32le: 4,
  uint32be: 4,
  int8: 1,
  int16le: 2,
  int16be: 2,
  int32le: 4,
  int32be: 4,
  int64be: 8,
  int64le: 8,
  uint64be: 8,
  uint64le: 8,
  floatle: 4,
  floatbe: 4,
  doublele: 8,
  doublebe: 8
};
var PRIMITIVE_NAMES = {
  uint8: "Uint8",
  uint16le: "Uint16",
  uint16be: "Uint16",
  uint32le: "Uint32",
  uint32be: "Uint32",
  int8: "Int8",
  int16le: "Int16",
  int16be: "Int16",
  int32le: "Int32",
  int32be: "Int32",
  int64be: "BigInt64",
  int64le: "BigInt64",
  uint64be: "BigUint64",
  uint64le: "BigUint64",
  floatle: "Float32",
  floatbe: "Float32",
  doublele: "Float64",
  doublebe: "Float64"
};
var PRIMITIVE_LITTLE_ENDIANS = {
  uint8: false,
  uint16le: true,
  uint16be: false,
  uint32le: true,
  uint32be: false,
  int8: false,
  int16le: true,
  int16be: false,
  int32le: true,
  int32be: false,
  int64be: false,
  int64le: true,
  uint64be: false,
  uint64le: true,
  floatle: true,
  floatbe: false,
  doublele: true,
  doublebe: false
};
var Parser = class _Parser {
  constructor() {
    this.varName = "";
    this.type = "";
    this.options = {};
    this.endian = "be";
    this.useContextVariables = false;
  }
  static start() {
    return new _Parser();
  }
  primitiveGenerateN(type, ctx) {
    const typeName = PRIMITIVE_NAMES[type];
    const littleEndian = PRIMITIVE_LITTLE_ENDIANS[type];
    ctx.pushCode(`${ctx.generateVariable(this.varName)} = dataView.get${typeName}(offset, ${littleEndian});`);
    ctx.pushCode(`offset += ${PRIMITIVE_SIZES[type]};`);
  }
  primitiveN(type, varName, options) {
    return this.setNextParser(type, varName, options);
  }
  useThisEndian(type) {
    return type + this.endian.toLowerCase();
  }
  uint8(varName, options = {}) {
    return this.primitiveN("uint8", varName, options);
  }
  uint16(varName, options = {}) {
    return this.primitiveN(this.useThisEndian("uint16"), varName, options);
  }
  uint16le(varName, options = {}) {
    return this.primitiveN("uint16le", varName, options);
  }
  uint16be(varName, options = {}) {
    return this.primitiveN("uint16be", varName, options);
  }
  uint32(varName, options = {}) {
    return this.primitiveN(this.useThisEndian("uint32"), varName, options);
  }
  uint32le(varName, options = {}) {
    return this.primitiveN("uint32le", varName, options);
  }
  uint32be(varName, options = {}) {
    return this.primitiveN("uint32be", varName, options);
  }
  int8(varName, options = {}) {
    return this.primitiveN("int8", varName, options);
  }
  int16(varName, options = {}) {
    return this.primitiveN(this.useThisEndian("int16"), varName, options);
  }
  int16le(varName, options = {}) {
    return this.primitiveN("int16le", varName, options);
  }
  int16be(varName, options = {}) {
    return this.primitiveN("int16be", varName, options);
  }
  int32(varName, options = {}) {
    return this.primitiveN(this.useThisEndian("int32"), varName, options);
  }
  int32le(varName, options = {}) {
    return this.primitiveN("int32le", varName, options);
  }
  int32be(varName, options = {}) {
    return this.primitiveN("int32be", varName, options);
  }
  bigIntVersionCheck() {
    if (!DataView.prototype.getBigInt64) throw new Error("BigInt64 is unsupported on this runtime");
  }
  int64(varName, options = {}) {
    this.bigIntVersionCheck();
    return this.primitiveN(this.useThisEndian("int64"), varName, options);
  }
  int64be(varName, options = {}) {
    this.bigIntVersionCheck();
    return this.primitiveN("int64be", varName, options);
  }
  int64le(varName, options = {}) {
    this.bigIntVersionCheck();
    return this.primitiveN("int64le", varName, options);
  }
  uint64(varName, options = {}) {
    this.bigIntVersionCheck();
    return this.primitiveN(this.useThisEndian("uint64"), varName, options);
  }
  uint64be(varName, options = {}) {
    this.bigIntVersionCheck();
    return this.primitiveN("uint64be", varName, options);
  }
  uint64le(varName, options = {}) {
    this.bigIntVersionCheck();
    return this.primitiveN("uint64le", varName, options);
  }
  floatle(varName, options = {}) {
    return this.primitiveN("floatle", varName, options);
  }
  floatbe(varName, options = {}) {
    return this.primitiveN("floatbe", varName, options);
  }
  doublele(varName, options = {}) {
    return this.primitiveN("doublele", varName, options);
  }
  doublebe(varName, options = {}) {
    return this.primitiveN("doublebe", varName, options);
  }
  bitN(size, varName, options) {
    options.length = size;
    return this.setNextParser("bit", varName, options);
  }
  bit1(varName, options = {}) {
    return this.bitN(1, varName, options);
  }
  bit2(varName, options = {}) {
    return this.bitN(2, varName, options);
  }
  bit3(varName, options = {}) {
    return this.bitN(3, varName, options);
  }
  bit4(varName, options = {}) {
    return this.bitN(4, varName, options);
  }
  bit5(varName, options = {}) {
    return this.bitN(5, varName, options);
  }
  bit6(varName, options = {}) {
    return this.bitN(6, varName, options);
  }
  bit7(varName, options = {}) {
    return this.bitN(7, varName, options);
  }
  bit8(varName, options = {}) {
    return this.bitN(8, varName, options);
  }
  bit9(varName, options = {}) {
    return this.bitN(9, varName, options);
  }
  bit10(varName, options = {}) {
    return this.bitN(10, varName, options);
  }
  bit11(varName, options = {}) {
    return this.bitN(11, varName, options);
  }
  bit12(varName, options = {}) {
    return this.bitN(12, varName, options);
  }
  bit13(varName, options = {}) {
    return this.bitN(13, varName, options);
  }
  bit14(varName, options = {}) {
    return this.bitN(14, varName, options);
  }
  bit15(varName, options = {}) {
    return this.bitN(15, varName, options);
  }
  bit16(varName, options = {}) {
    return this.bitN(16, varName, options);
  }
  bit17(varName, options = {}) {
    return this.bitN(17, varName, options);
  }
  bit18(varName, options = {}) {
    return this.bitN(18, varName, options);
  }
  bit19(varName, options = {}) {
    return this.bitN(19, varName, options);
  }
  bit20(varName, options = {}) {
    return this.bitN(20, varName, options);
  }
  bit21(varName, options = {}) {
    return this.bitN(21, varName, options);
  }
  bit22(varName, options = {}) {
    return this.bitN(22, varName, options);
  }
  bit23(varName, options = {}) {
    return this.bitN(23, varName, options);
  }
  bit24(varName, options = {}) {
    return this.bitN(24, varName, options);
  }
  bit25(varName, options = {}) {
    return this.bitN(25, varName, options);
  }
  bit26(varName, options = {}) {
    return this.bitN(26, varName, options);
  }
  bit27(varName, options = {}) {
    return this.bitN(27, varName, options);
  }
  bit28(varName, options = {}) {
    return this.bitN(28, varName, options);
  }
  bit29(varName, options = {}) {
    return this.bitN(29, varName, options);
  }
  bit30(varName, options = {}) {
    return this.bitN(30, varName, options);
  }
  bit31(varName, options = {}) {
    return this.bitN(31, varName, options);
  }
  bit32(varName, options = {}) {
    return this.bitN(32, varName, options);
  }
  namely(alias) {
    aliasRegistry.set(alias, this);
    this.alias = alias;
    return this;
  }
  skip(length, options = {}) {
    return this.seek(length, options);
  }
  seek(relOffset, options = {}) {
    if (options.assert) {
      throw new Error("assert option on seek is not allowed.");
    }
    return this.setNextParser("seek", "", {
      length: relOffset
    });
  }
  string(varName, options) {
    if (!options.zeroTerminated && !options.length && !options.greedy) {
      throw new Error("One of length, zeroTerminated, or greedy must be defined for string.");
    }
    if ((options.zeroTerminated || options.length) && options.greedy) {
      throw new Error("greedy is mutually exclusive with length and zeroTerminated for string.");
    }
    if (options.stripNull && !(options.length || options.greedy)) {
      throw new Error("length or greedy must be defined if stripNull is enabled.");
    }
    options.encoding = options.encoding || "utf8";
    return this.setNextParser("string", varName, options);
  }
  buffer(varName, options) {
    if (!options.length && !options.readUntil) {
      throw new Error("length or readUntil must be defined for buffer.");
    }
    return this.setNextParser("buffer", varName, options);
  }
  wrapped(varName, options) {
    if (typeof options !== "object" && typeof varName === "object") {
      options = varName;
      varName = "";
    }
    if (!options || !options.wrapper || !options.type) {
      throw new Error("Both wrapper and type must be defined for wrapped.");
    }
    if (!options.length && !options.readUntil) {
      throw new Error("length or readUntil must be defined for wrapped.");
    }
    return this.setNextParser("wrapper", varName, options);
  }
  array(varName, options) {
    if (!options.readUntil && !options.length && !options.lengthInBytes) {
      throw new Error("One of readUntil, length and lengthInBytes must be defined for array.");
    }
    if (!options.type) {
      throw new Error("type is required for array.");
    }
    if (typeof options.type === "string" && !aliasRegistry.has(options.type) && !(options.type in PRIMITIVE_SIZES)) {
      throw new Error(`Array element type "${options.type}" is unkown.`);
    }
    return this.setNextParser("array", varName, options);
  }
  choice(varName, options) {
    if (typeof options !== "object" && typeof varName === "object") {
      options = varName;
      varName = "";
    }
    if (!options) {
      throw new Error("tag and choices are are required for choice.");
    }
    if (!options.tag) {
      throw new Error("tag is requird for choice.");
    }
    if (!options.choices) {
      throw new Error("choices is required for choice.");
    }
    for (const keyString in options.choices) {
      const key = parseInt(keyString, 10);
      const value = options.choices[key];
      if (isNaN(key)) {
        throw new Error(`Choice key "${keyString}" is not a number.`);
      }
      if (typeof value === "string" && !aliasRegistry.has(value) && !(value in PRIMITIVE_SIZES)) {
        throw new Error(`Choice type "${value}" is unkown.`);
      }
    }
    return this.setNextParser("choice", varName, options);
  }
  nest(varName, options) {
    if (typeof options !== "object" && typeof varName === "object") {
      options = varName;
      varName = "";
    }
    if (!options || !options.type) {
      throw new Error("type is required for nest.");
    }
    if (!(options.type instanceof _Parser) && !aliasRegistry.has(options.type)) {
      throw new Error("type must be a known parser name or a Parser object.");
    }
    if (!(options.type instanceof _Parser) && !varName) {
      throw new Error("type must be a Parser object if the variable name is omitted.");
    }
    return this.setNextParser("nest", varName, options);
  }
  pointer(varName, options) {
    if (!options.offset) {
      throw new Error("offset is required for pointer.");
    }
    if (!options.type) {
      throw new Error("type is required for pointer.");
    }
    if (typeof options.type === "string" && !(options.type in PRIMITIVE_SIZES) && !aliasRegistry.has(options.type)) {
      throw new Error(`Pointer type "${options.type}" is unkown.`);
    }
    return this.setNextParser("pointer", varName, options);
  }
  saveOffset(varName, options = {}) {
    return this.setNextParser("saveOffset", varName, options);
  }
  endianness(endianness) {
    switch (endianness.toLowerCase()) {
      case "little":
        this.endian = "le";
        break;
      case "big":
        this.endian = "be";
        break;
      default:
        throw new Error('endianness must be one of "little" or "big"');
    }
    return this;
  }
  endianess(endianess) {
    return this.endianness(endianess);
  }
  useContextVars(useContextVariables = true) {
    this.useContextVariables = useContextVariables;
    return this;
  }
  create(constructorFn) {
    if (!(constructorFn instanceof Function)) {
      throw new Error("Constructor must be a Function object.");
    }
    this.constructorFn = constructorFn;
    return this;
  }
  getContext(importPath) {
    const ctx = new Context(importPath, this.useContextVariables);
    ctx.pushCode("var dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.length);");
    if (!this.alias) {
      this.addRawCode(ctx);
    } else {
      this.addAliasedCode(ctx);
      ctx.pushCode(`return ${FUNCTION_PREFIX + this.alias}(0).result;`);
    }
    return ctx;
  }
  getCode() {
    const importPath = "imports";
    return this.getContext(importPath).code;
  }
  addRawCode(ctx) {
    ctx.pushCode("var offset = 0;");
    ctx.pushCode(`var vars = ${this.constructorFn ? "new constructorFn()" : "{}"};`);
    ctx.pushCode("vars.$parent = null;");
    ctx.pushCode("vars.$root = vars;");
    this.generate(ctx);
    this.resolveReferences(ctx);
    ctx.pushCode("delete vars.$parent;");
    ctx.pushCode("delete vars.$root;");
    ctx.pushCode("return vars;");
  }
  addAliasedCode(ctx) {
    ctx.pushCode(`function ${FUNCTION_PREFIX + this.alias}(offset, context) {`);
    ctx.pushCode(`var vars = ${this.constructorFn ? "new constructorFn()" : "{}"};`);
    ctx.pushCode("var ctx = Object.assign({$parent: null, $root: vars}, context || {});");
    ctx.pushCode(`vars = Object.assign(vars, ctx);`);
    this.generate(ctx);
    ctx.markResolved(this.alias);
    this.resolveReferences(ctx);
    ctx.pushCode("Object.keys(ctx).forEach(function (item) { delete vars[item]; });");
    ctx.pushCode("return { offset: offset, result: vars };");
    ctx.pushCode("}");
    return ctx;
  }
  resolveReferences(ctx) {
    const references = ctx.getUnresolvedReferences();
    ctx.markRequested(references);
    references.forEach((alias) => {
      var _a;
      (_a = aliasRegistry.get(alias)) === null || _a === void 0 ? void 0 : _a.addAliasedCode(ctx);
    });
  }
  compile() {
    const importPath = "imports";
    const ctx = this.getContext(importPath);
    this.compiled = new Function(importPath, "TextDecoder", `return function (buffer, constructorFn) { ${ctx.code} };`)(ctx.imports, TextDecoder);
  }
  sizeOf() {
    let size = NaN;
    if (Object.keys(PRIMITIVE_SIZES).indexOf(this.type) >= 0) {
      size = PRIMITIVE_SIZES[this.type];
    } else if (this.type === "string" && typeof this.options.length === "number") {
      size = this.options.length;
    } else if (this.type === "buffer" && typeof this.options.length === "number") {
      size = this.options.length;
    } else if (this.type === "array" && typeof this.options.length === "number") {
      let elementSize = NaN;
      if (typeof this.options.type === "string") {
        elementSize = PRIMITIVE_SIZES[this.options.type];
      } else if (this.options.type instanceof _Parser) {
        elementSize = this.options.type.sizeOf();
      }
      size = this.options.length * elementSize;
    } else if (this.type === "seek") {
      size = this.options.length;
    } else if (this.type === "nest") {
      size = this.options.type.sizeOf();
    } else if (!this.type) {
      size = 0;
    }
    if (this.next) {
      size += this.next.sizeOf();
    }
    return size;
  }
  // Follow the parser chain till the root and start parsing from there
  parse(buffer) {
    if (!this.compiled) {
      this.compile();
    }
    return this.compiled(buffer, this.constructorFn);
  }
  setNextParser(type, varName, options) {
    const parser = new _Parser();
    parser.type = type;
    parser.varName = varName;
    parser.options = options;
    parser.endian = this.endian;
    if (this.head) {
      this.head.next = parser;
    } else {
      this.next = parser;
    }
    this.head = parser;
    return this;
  }
  // Call code generator for this parser
  generate(ctx) {
    if (this.type) {
      switch (this.type) {
        case "uint8":
        case "uint16le":
        case "uint16be":
        case "uint32le":
        case "uint32be":
        case "int8":
        case "int16le":
        case "int16be":
        case "int32le":
        case "int32be":
        case "int64be":
        case "int64le":
        case "uint64be":
        case "uint64le":
        case "floatle":
        case "floatbe":
        case "doublele":
        case "doublebe":
          this.primitiveGenerateN(this.type, ctx);
          break;
        case "bit":
          this.generateBit(ctx);
          break;
        case "string":
          this.generateString(ctx);
          break;
        case "buffer":
          this.generateBuffer(ctx);
          break;
        case "seek":
          this.generateSeek(ctx);
          break;
        case "nest":
          this.generateNest(ctx);
          break;
        case "array":
          this.generateArray(ctx);
          break;
        case "choice":
          this.generateChoice(ctx);
          break;
        case "pointer":
          this.generatePointer(ctx);
          break;
        case "saveOffset":
          this.generateSaveOffset(ctx);
          break;
        case "wrapper":
          this.generateWrapper(ctx);
          break;
      }
      if (this.type !== "bit") this.generateAssert(ctx);
    }
    const varName = ctx.generateVariable(this.varName);
    if (this.options.formatter && this.type !== "bit") {
      this.generateFormatter(ctx, varName, this.options.formatter);
    }
    return this.generateNext(ctx);
  }
  generateAssert(ctx) {
    if (!this.options.assert) {
      return;
    }
    const varName = ctx.generateVariable(this.varName);
    switch (typeof this.options.assert) {
      case "function":
        {
          const func = ctx.addImport(this.options.assert);
          ctx.pushCode(`if (!${func}.call(vars, ${varName})) {`);
        }
        break;
      case "number":
        ctx.pushCode(`if (${this.options.assert} !== ${varName}) {`);
        break;
      case "string":
        ctx.pushCode(`if (${JSON.stringify(this.options.assert)} !== ${varName}) {`);
        break;
      default:
        throw new Error("assert option must be a string, number or a function.");
    }
    ctx.generateError(`"Assertion error: ${varName} is " + ${JSON.stringify(this.options.assert.toString())}`);
    ctx.pushCode("}");
  }
  // Recursively call code generators and append results
  generateNext(ctx) {
    if (this.next) {
      ctx = this.next.generate(ctx);
    }
    return ctx;
  }
  generateBit(ctx) {
    const parser = JSON.parse(JSON.stringify(this));
    parser.options = this.options;
    parser.generateAssert = this.generateAssert.bind(this);
    parser.generateFormatter = this.generateFormatter.bind(this);
    parser.varName = ctx.generateVariable(parser.varName);
    ctx.bitFields.push(parser);
    if (!this.next || this.next && ["bit", "nest"].indexOf(this.next.type) < 0) {
      const val = ctx.generateTmpVariable();
      ctx.pushCode(`var ${val} = 0;`);
      const getMaxBits = (from2 = 0) => {
        let sum2 = 0;
        for (let i = from2; i < ctx.bitFields.length; i++) {
          const length = ctx.bitFields[i].options.length;
          if (sum2 + length > 32) break;
          sum2 += length;
        }
        return sum2;
      };
      const getBytes = (sum2) => {
        if (sum2 <= 8) {
          ctx.pushCode(`${val} = dataView.getUint8(offset);`);
          sum2 = 8;
        } else if (sum2 <= 16) {
          ctx.pushCode(`${val} = dataView.getUint16(offset);`);
          sum2 = 16;
        } else if (sum2 <= 24) {
          ctx.pushCode(`${val} = (dataView.getUint16(offset) << 8) | dataView.getUint8(offset + 2);`);
          sum2 = 24;
        } else {
          ctx.pushCode(`${val} = dataView.getUint32(offset);`);
          sum2 = 32;
        }
        ctx.pushCode(`offset += ${sum2 / 8};`);
        return sum2;
      };
      let bitOffset = 0;
      const isBigEndian = this.endian === "be";
      let sum = 0;
      let rem = 0;
      ctx.bitFields.forEach((parser2, i) => {
        let length = parser2.options.length;
        if (length > rem) {
          if (rem) {
            const mask2 = -1 >>> 32 - rem;
            ctx.pushCode(`${parser2.varName} = (${val} & 0x${mask2.toString(16)}) << ${length - rem};`);
            length -= rem;
          }
          bitOffset = 0;
          rem = sum = getBytes(getMaxBits(i) - rem);
        }
        const offset = isBigEndian ? sum - bitOffset - length : bitOffset;
        const mask = -1 >>> 32 - length;
        ctx.pushCode(`${parser2.varName} ${length < parser2.options.length ? "|=" : "="} ${val} >> ${offset} & 0x${mask.toString(16)};`);
        if (parser2.options.length === 32) {
          ctx.pushCode(`${parser2.varName} >>>= 0`);
        }
        if (parser2.options.assert) {
          parser2.generateAssert(ctx);
        }
        if (parser2.options.formatter) {
          parser2.generateFormatter(ctx, parser2.varName, parser2.options.formatter);
        }
        bitOffset += length;
        rem -= length;
      });
      ctx.bitFields = [];
    }
  }
  generateSeek(ctx) {
    const length = ctx.generateOption(this.options.length);
    ctx.pushCode(`offset += ${length};`);
  }
  generateString(ctx) {
    const name = ctx.generateVariable(this.varName);
    const start = ctx.generateTmpVariable();
    const encoding = this.options.encoding;
    const isHex = encoding.toLowerCase() === "hex";
    const toHex2 = 'b => b.toString(16).padStart(2, "0")';
    if (this.options.length && this.options.zeroTerminated) {
      const len = this.options.length;
      ctx.pushCode(`var ${start} = offset;`);
      ctx.pushCode(`while(dataView.getUint8(offset++) !== 0 && offset - ${start} < ${len});`);
      const end = `offset - ${start} < ${len} ? offset - 1 : offset`;
      ctx.pushCode(isHex ? `${name} = Array.from(buffer.subarray(${start}, ${end}), ${toHex2}).join('');` : `${name} = new TextDecoder('${encoding}').decode(buffer.subarray(${start}, ${end}));`);
    } else if (this.options.length) {
      const len = ctx.generateOption(this.options.length);
      ctx.pushCode(isHex ? `${name} = Array.from(buffer.subarray(offset, offset + ${len}), ${toHex2}).join('');` : `${name} = new TextDecoder('${encoding}').decode(buffer.subarray(offset, offset + ${len}));`);
      ctx.pushCode(`offset += ${len};`);
    } else if (this.options.zeroTerminated) {
      ctx.pushCode(`var ${start} = offset;`);
      ctx.pushCode("while(dataView.getUint8(offset++) !== 0);");
      ctx.pushCode(isHex ? `${name} = Array.from(buffer.subarray(${start}, offset - 1), ${toHex2}).join('');` : `${name} = new TextDecoder('${encoding}').decode(buffer.subarray(${start}, offset - 1));`);
    } else if (this.options.greedy) {
      ctx.pushCode(`var ${start} = offset;`);
      ctx.pushCode("while(buffer.length > offset++);");
      ctx.pushCode(isHex ? `${name} = Array.from(buffer.subarray(${start}, offset), ${toHex2}).join('');` : `${name} = new TextDecoder('${encoding}').decode(buffer.subarray(${start}, offset));`);
    }
    if (this.options.stripNull) {
      ctx.pushCode(`${name} = ${name}.replace(/\\x00+$/g, '')`);
    }
  }
  generateBuffer(ctx) {
    const varName = ctx.generateVariable(this.varName);
    if (typeof this.options.readUntil === "function") {
      const pred = this.options.readUntil;
      const start = ctx.generateTmpVariable();
      const cur = ctx.generateTmpVariable();
      ctx.pushCode(`var ${start} = offset;`);
      ctx.pushCode(`var ${cur} = 0;`);
      ctx.pushCode(`while (offset < buffer.length) {`);
      ctx.pushCode(`${cur} = dataView.getUint8(offset);`);
      const func = ctx.addImport(pred);
      ctx.pushCode(`if (${func}.call(${ctx.generateVariable()}, ${cur}, buffer.subarray(offset))) break;`);
      ctx.pushCode(`offset += 1;`);
      ctx.pushCode(`}`);
      ctx.pushCode(`${varName} = buffer.subarray(${start}, offset);`);
    } else if (this.options.readUntil === "eof") {
      ctx.pushCode(`${varName} = buffer.subarray(offset);`);
    } else {
      const len = ctx.generateOption(this.options.length);
      ctx.pushCode(`${varName} = buffer.subarray(offset, offset + ${len});`);
      ctx.pushCode(`offset += ${len};`);
    }
    if (this.options.clone) {
      ctx.pushCode(`${varName} = buffer.constructor.from(${varName});`);
    }
  }
  generateArray(ctx) {
    const length = ctx.generateOption(this.options.length);
    const lengthInBytes = ctx.generateOption(this.options.lengthInBytes);
    const type = this.options.type;
    const counter = ctx.generateTmpVariable();
    const lhs = ctx.generateVariable(this.varName);
    const item = ctx.generateTmpVariable();
    const key = this.options.key;
    const isHash = typeof key === "string";
    if (isHash) {
      ctx.pushCode(`${lhs} = {};`);
    } else {
      ctx.pushCode(`${lhs} = [];`);
    }
    if (typeof this.options.readUntil === "function") {
      ctx.pushCode("do {");
    } else if (this.options.readUntil === "eof") {
      ctx.pushCode(`for (var ${counter} = 0; offset < buffer.length; ${counter}++) {`);
    } else if (lengthInBytes !== void 0) {
      ctx.pushCode(`for (var ${counter} = offset + ${lengthInBytes}; offset < ${counter}; ) {`);
    } else {
      ctx.pushCode(`for (var ${counter} = ${length}; ${counter} > 0; ${counter}--) {`);
    }
    if (typeof type === "string") {
      if (!aliasRegistry.get(type)) {
        const typeName = PRIMITIVE_NAMES[type];
        const littleEndian = PRIMITIVE_LITTLE_ENDIANS[type];
        ctx.pushCode(`var ${item} = dataView.get${typeName}(offset, ${littleEndian});`);
        ctx.pushCode(`offset += ${PRIMITIVE_SIZES[type]};`);
      } else {
        const tempVar = ctx.generateTmpVariable();
        ctx.pushCode(`var ${tempVar} = ${FUNCTION_PREFIX + type}(offset, {`);
        if (ctx.useContextVariables) {
          const parentVar = ctx.generateVariable();
          ctx.pushCode(`$parent: ${parentVar},`);
          ctx.pushCode(`$root: ${parentVar}.$root,`);
          if (!this.options.readUntil && lengthInBytes === void 0) {
            ctx.pushCode(`$index: ${length} - ${counter},`);
          }
        }
        ctx.pushCode(`});`);
        ctx.pushCode(`var ${item} = ${tempVar}.result; offset = ${tempVar}.offset;`);
        if (type !== this.alias) ctx.addReference(type);
      }
    } else if (type instanceof _Parser) {
      ctx.pushCode(`var ${item} = {};`);
      const parentVar = ctx.generateVariable();
      ctx.pushScope(item);
      if (ctx.useContextVariables) {
        ctx.pushCode(`${item}.$parent = ${parentVar};`);
        ctx.pushCode(`${item}.$root = ${parentVar}.$root;`);
        if (!this.options.readUntil && lengthInBytes === void 0) {
          ctx.pushCode(`${item}.$index = ${length} - ${counter};`);
        }
      }
      type.generate(ctx);
      if (ctx.useContextVariables) {
        ctx.pushCode(`delete ${item}.$parent;`);
        ctx.pushCode(`delete ${item}.$root;`);
        ctx.pushCode(`delete ${item}.$index;`);
      }
      ctx.popScope();
    }
    if (isHash) {
      ctx.pushCode(`${lhs}[${item}.${key}] = ${item};`);
    } else {
      ctx.pushCode(`${lhs}.push(${item});`);
    }
    ctx.pushCode("}");
    if (typeof this.options.readUntil === "function") {
      const pred = this.options.readUntil;
      const func = ctx.addImport(pred);
      ctx.pushCode(`while (!${func}.call(${ctx.generateVariable()}, ${item}, buffer.subarray(offset)));`);
    }
  }
  generateChoiceCase(ctx, varName, type) {
    if (typeof type === "string") {
      const varName2 = ctx.generateVariable(this.varName);
      if (!aliasRegistry.has(type)) {
        const typeName = PRIMITIVE_NAMES[type];
        const littleEndian = PRIMITIVE_LITTLE_ENDIANS[type];
        ctx.pushCode(`${varName2} = dataView.get${typeName}(offset, ${littleEndian});`);
        ctx.pushCode(`offset += ${PRIMITIVE_SIZES[type]}`);
      } else {
        const tempVar = ctx.generateTmpVariable();
        ctx.pushCode(`var ${tempVar} = ${FUNCTION_PREFIX + type}(offset, {`);
        if (ctx.useContextVariables) {
          ctx.pushCode(`$parent: ${varName2}.$parent,`);
          ctx.pushCode(`$root: ${varName2}.$root,`);
        }
        ctx.pushCode(`});`);
        ctx.pushCode(`${varName2} = ${tempVar}.result; offset = ${tempVar}.offset;`);
        if (type !== this.alias) ctx.addReference(type);
      }
    } else if (type instanceof _Parser) {
      ctx.pushPath(varName);
      type.generate(ctx);
      ctx.popPath(varName);
    }
  }
  generateChoice(ctx) {
    const tag = ctx.generateOption(this.options.tag);
    const nestVar = ctx.generateVariable(this.varName);
    if (this.varName) {
      ctx.pushCode(`${nestVar} = {};`);
      if (ctx.useContextVariables) {
        const parentVar = ctx.generateVariable();
        ctx.pushCode(`${nestVar}.$parent = ${parentVar};`);
        ctx.pushCode(`${nestVar}.$root = ${parentVar}.$root;`);
      }
    }
    ctx.pushCode(`switch(${tag}) {`);
    for (const tagString in this.options.choices) {
      const tag2 = parseInt(tagString, 10);
      const type = this.options.choices[tag2];
      ctx.pushCode(`case ${tag2}:`);
      this.generateChoiceCase(ctx, this.varName, type);
      ctx.pushCode("break;");
    }
    ctx.pushCode("default:");
    if (this.options.defaultChoice) {
      this.generateChoiceCase(ctx, this.varName, this.options.defaultChoice);
    } else {
      ctx.generateError(`"Met undefined tag value " + ${tag} + " at choice"`);
    }
    ctx.pushCode("}");
    if (this.varName && ctx.useContextVariables) {
      ctx.pushCode(`delete ${nestVar}.$parent;`);
      ctx.pushCode(`delete ${nestVar}.$root;`);
    }
  }
  generateNest(ctx) {
    const nestVar = ctx.generateVariable(this.varName);
    if (this.options.type instanceof _Parser) {
      if (this.varName) {
        ctx.pushCode(`${nestVar} = {};`);
        if (ctx.useContextVariables) {
          const parentVar = ctx.generateVariable();
          ctx.pushCode(`${nestVar}.$parent = ${parentVar};`);
          ctx.pushCode(`${nestVar}.$root = ${parentVar}.$root;`);
        }
      }
      ctx.pushPath(this.varName);
      this.options.type.generate(ctx);
      ctx.popPath(this.varName);
      if (this.varName && ctx.useContextVariables) {
        if (ctx.useContextVariables) {
          ctx.pushCode(`delete ${nestVar}.$parent;`);
          ctx.pushCode(`delete ${nestVar}.$root;`);
        }
      }
    } else if (aliasRegistry.has(this.options.type)) {
      const tempVar = ctx.generateTmpVariable();
      ctx.pushCode(`var ${tempVar} = ${FUNCTION_PREFIX + this.options.type}(offset, {`);
      if (ctx.useContextVariables) {
        const parentVar = ctx.generateVariable();
        ctx.pushCode(`$parent: ${parentVar},`);
        ctx.pushCode(`$root: ${parentVar}.$root,`);
      }
      ctx.pushCode(`});`);
      ctx.pushCode(`${nestVar} = ${tempVar}.result; offset = ${tempVar}.offset;`);
      if (this.options.type !== this.alias) {
        ctx.addReference(this.options.type);
      }
    }
  }
  generateWrapper(ctx) {
    const wrapperVar = ctx.generateVariable(this.varName);
    const wrappedBuf = ctx.generateTmpVariable();
    if (typeof this.options.readUntil === "function") {
      const pred = this.options.readUntil;
      const start = ctx.generateTmpVariable();
      const cur = ctx.generateTmpVariable();
      ctx.pushCode(`var ${start} = offset;`);
      ctx.pushCode(`var ${cur} = 0;`);
      ctx.pushCode(`while (offset < buffer.length) {`);
      ctx.pushCode(`${cur} = dataView.getUint8(offset);`);
      const func2 = ctx.addImport(pred);
      ctx.pushCode(`if (${func2}.call(${ctx.generateVariable()}, ${cur}, buffer.subarray(offset))) break;`);
      ctx.pushCode(`offset += 1;`);
      ctx.pushCode(`}`);
      ctx.pushCode(`${wrappedBuf} = buffer.subarray(${start}, offset);`);
    } else if (this.options.readUntil === "eof") {
      ctx.pushCode(`${wrappedBuf} = buffer.subarray(offset);`);
    } else {
      const len = ctx.generateOption(this.options.length);
      ctx.pushCode(`${wrappedBuf} = buffer.subarray(offset, offset + ${len});`);
      ctx.pushCode(`offset += ${len};`);
    }
    if (this.options.clone) {
      ctx.pushCode(`${wrappedBuf} = buffer.constructor.from(${wrappedBuf});`);
    }
    const tempBuf = ctx.generateTmpVariable();
    const tempOff = ctx.generateTmpVariable();
    const tempView = ctx.generateTmpVariable();
    const func = ctx.addImport(this.options.wrapper);
    ctx.pushCode(`${wrappedBuf} = ${func}.call(this, ${wrappedBuf}).subarray(0);`);
    ctx.pushCode(`var ${tempBuf} = buffer;`);
    ctx.pushCode(`var ${tempOff} = offset;`);
    ctx.pushCode(`var ${tempView} = dataView;`);
    ctx.pushCode(`buffer = ${wrappedBuf};`);
    ctx.pushCode(`offset = 0;`);
    ctx.pushCode(`dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.length);`);
    if (this.options.type instanceof _Parser) {
      if (this.varName) {
        ctx.pushCode(`${wrapperVar} = {};`);
      }
      ctx.pushPath(this.varName);
      this.options.type.generate(ctx);
      ctx.popPath(this.varName);
    } else if (aliasRegistry.has(this.options.type)) {
      const tempVar = ctx.generateTmpVariable();
      ctx.pushCode(`var ${tempVar} = ${FUNCTION_PREFIX + this.options.type}(0);`);
      ctx.pushCode(`${wrapperVar} = ${tempVar}.result;`);
      if (this.options.type !== this.alias) {
        ctx.addReference(this.options.type);
      }
    }
    ctx.pushCode(`buffer = ${tempBuf};`);
    ctx.pushCode(`dataView = ${tempView};`);
    ctx.pushCode(`offset = ${tempOff};`);
  }
  generateFormatter(ctx, varName, formatter) {
    if (typeof formatter === "function") {
      const func = ctx.addImport(formatter);
      ctx.pushCode(`${varName} = ${func}.call(${ctx.generateVariable()}, ${varName});`);
    }
  }
  generatePointer(ctx) {
    const type = this.options.type;
    const offset = ctx.generateOption(this.options.offset);
    const tempVar = ctx.generateTmpVariable();
    const nestVar = ctx.generateVariable(this.varName);
    ctx.pushCode(`var ${tempVar} = offset;`);
    ctx.pushCode(`offset = ${offset};`);
    if (this.options.type instanceof _Parser) {
      ctx.pushCode(`${nestVar} = {};`);
      if (ctx.useContextVariables) {
        const parentVar = ctx.generateVariable();
        ctx.pushCode(`${nestVar}.$parent = ${parentVar};`);
        ctx.pushCode(`${nestVar}.$root = ${parentVar}.$root;`);
      }
      ctx.pushPath(this.varName);
      this.options.type.generate(ctx);
      ctx.popPath(this.varName);
      if (ctx.useContextVariables) {
        ctx.pushCode(`delete ${nestVar}.$parent;`);
        ctx.pushCode(`delete ${nestVar}.$root;`);
      }
    } else if (aliasRegistry.has(this.options.type)) {
      const tempVar2 = ctx.generateTmpVariable();
      ctx.pushCode(`var ${tempVar2} = ${FUNCTION_PREFIX + this.options.type}(offset, {`);
      if (ctx.useContextVariables) {
        const parentVar = ctx.generateVariable();
        ctx.pushCode(`$parent: ${parentVar},`);
        ctx.pushCode(`$root: ${parentVar}.$root,`);
      }
      ctx.pushCode(`});`);
      ctx.pushCode(`${nestVar} = ${tempVar2}.result; offset = ${tempVar2}.offset;`);
      if (this.options.type !== this.alias) {
        ctx.addReference(this.options.type);
      }
    } else if (Object.keys(PRIMITIVE_SIZES).indexOf(this.options.type) >= 0) {
      const typeName = PRIMITIVE_NAMES[type];
      const littleEndian = PRIMITIVE_LITTLE_ENDIANS[type];
      ctx.pushCode(`${nestVar} = dataView.get${typeName}(offset, ${littleEndian});`);
      ctx.pushCode(`offset += ${PRIMITIVE_SIZES[type]};`);
    }
    ctx.pushCode(`offset = ${tempVar};`);
  }
  generateSaveOffset(ctx) {
    const varName = ctx.generateVariable(this.varName);
    ctx.pushCode(`${varName} = offset`);
  }
};
function newParser() {
  return new Parser().endianess("little");
}
function componentHeaderParser() {
  const limbParser = newParser().uint16("from").uint16("to");
  const colorParser = newParser().uint16("R").uint16("G").uint16("B");
  const strParser = newParser().uint16("_chars").string("text", {
    length: "_chars"
  });
  return newParser().uint16("_name").string("name", {
    length: "_name"
  }).uint16("_format").string("format", {
    length: "_format"
  }).uint16("_points").uint16("_limbs").uint16("_colors").array("points", {
    type: strParser,
    formatter: (arr) => arr.map((item) => item.text),
    length: "_points"
  }).array("limbs", {
    type: limbParser,
    length: "_limbs"
  }).array("colors", {
    type: colorParser,
    length: "_colors"
  });
}
function getHeaderParser() {
  const componentParser = componentHeaderParser();
  return newParser().floatle("version").uint16("width").uint16("height").uint16("depth").uint16("_components").array("components", {
    type: componentParser,
    length: "_components"
  }).saveOffset("headerLength");
}
function getBodyParserV0_0(header) {
  let personParser = newParser().int16("id");
  header.components.forEach((component) => {
    let pointParser = newParser();
    Array.from(component.format).forEach((c) => {
      pointParser = pointParser.floatle(c);
    });
    personParser = personParser.array(component.name, {
      "type": pointParser,
      "length": component._points
    });
  });
  const frameParser = newParser().uint16("_people").array("people", {
    type: personParser,
    length: "_people"
  });
  return newParser().seek(header.headerLength).uint16("fps").uint16("_frames").array("frames", {
    type: frameParser,
    length: "_frames"
  });
}
function parseBodyV0_0(header, buffer) {
  return getBodyParserV0_0(header).parse(buffer);
}
function parseBodyV0_1(header, buffer, version) {
  const _points = header.components.map((c) => c.points.length).reduce((a, b) => a + b, 0);
  const _dims = Math.max(...header.components.map((c) => c.format.length)) - 1;
  let infoParser = newParser().seek(header.headerLength);
  let infoSize = 0;
  if (version === 0.1) {
    infoParser = infoParser.uint16("fps").uint16("_frames");
    infoSize = 6;
  } else if (version === 0.2) {
    infoParser = infoParser.floatle("fps").uint32("_frames");
    infoSize = 10;
  } else {
    throw new Error(`Invalid version ${version}`);
  }
  infoParser = infoParser.uint16("_people");
  const info = infoParser.parse(buffer);
  const parseFloat32Array = (length, offset) => {
    const dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.length);
    let currentOffset = offset;
    const vars = {
      data: new Float32Array(length),
      offset: 0
    };
    for (let i = 0; i < vars.data.length; i++) {
      let $tmp1 = dataView.getFloat32(currentOffset, true);
      currentOffset += 4;
      vars.data[i] = $tmp1;
    }
    vars.offset = currentOffset;
    return vars;
  };
  const data = parseFloat32Array(info._frames * info._people * _points * _dims, header.headerLength + infoSize);
  const confidence = parseFloat32Array(info._frames * info._people * _points, data.offset);
  function frameRepresentation(i) {
    const people = new Array(info._people);
    for (let j = 0; j < info._people; j++) {
      const person = {};
      people[j] = person;
      let k = 0;
      header.components.forEach((component) => {
        person[component.name] = [];
        for (let l = 0; l < component.points.length; l++) {
          const offset = i * (info._people * _points) + j * _points;
          const place = offset + k + l;
          const point = {
            "C": confidence.data[place]
          };
          [...component.format].forEach((dim, dimIndex) => {
            if (dim !== "C") {
              point[dim] = data.data[place * _dims + dimIndex];
            }
          });
          person[component.name].push(point);
        }
        k += component.points.length;
      });
    }
    return {
      people
    };
  }
  const frames = new Proxy({}, {
    get: function(target, name) {
      if (name === "length") {
        return info._frames;
      }
      return frameRepresentation(name);
    }
  });
  return Object.assign(Object.assign({}, info), {
    frames
  });
}
var headerParser = getHeaderParser();
function parsePose(buffer) {
  const header = headerParser.parse(buffer);
  let body;
  const version = Math.round(header.version * 1e3) / 1e3;
  switch (version) {
    case 0:
      body = parseBodyV0_0(header, buffer);
      break;
    case 0.1:
    case 0.2:
      body = parseBodyV0_1(header, buffer, version);
      break;
    default:
      throw new Error("Parsing this body version is not implemented - " + header.version);
  }
  return {
    header,
    body
  };
}
var Pose = class _Pose {
  constructor(header, body) {
    this.header = header;
    this.body = body;
  }
  static from(buffer) {
    const pose = parsePose(buffer);
    return new _Pose(pose.header, pose.body);
  }
  static fromLocal(path) {
    return __async(this, null, function* () {
      const buffer = (void 0)(path);
      return _Pose.from(buffer);
    });
  }
  static fromRemote(url, abortController) {
    return __async(this, null, function* () {
      var _a;
      const init2 = {};
      if (abortController) {
        init2.signal = abortController.signal;
      }
      const res = yield fetch(url, init2);
      if (!res.ok) {
        let message = (_a = res.statusText) !== null && _a !== void 0 ? _a : String(res.status);
        try {
          const json = yield res.json();
          message = json.message;
        } catch (e) {
        }
        throw new Error(message);
      }
      const buffer = Buffer.from(yield res.arrayBuffer());
      return _Pose.from(buffer);
    });
  }
};
var PoseRenderer = class {
  constructor(viewer) {
    this.viewer = viewer;
  }
  x(v) {
    const n = v * (this.viewer.elWidth - 2 * this.viewer.elPadding.width);
    return n / this.viewer.pose.header.width + this.viewer.elPadding.width;
  }
  y(v) {
    const n = v * (this.viewer.elHeight - 2 * this.viewer.elPadding.height);
    return n / this.viewer.pose.header.height + this.viewer.elPadding.height;
  }
  isJointValid(joint) {
    return joint.C > 0;
  }
  renderJoints(joints, colors) {
    return joints.filter(this.isJointValid.bind(this)).map((joint, i) => {
      return this.renderJoint(i, joint, colors[i % colors.length]);
    });
  }
  renderLimbs(limbs, joints, colors) {
    const lines = limbs.map(({
      from: from2,
      to
    }) => {
      const a = joints[from2];
      const b = joints[to];
      if (!this.isJointValid(a) || !this.isJointValid(b)) {
        return null;
      }
      const c1 = colors[from2 % colors.length];
      const c2 = colors[to % colors.length];
      const color = {
        R: (c1.R + c2.R) / 2,
        G: (c1.G + c2.G) / 2,
        B: (c1.B + c2.B) / 2
      };
      return {
        from: a,
        to: b,
        color,
        z: (a.Z + b.Z) / 2
      };
    });
    return lines.filter(Boolean).sort((a, b) => b.z - a.z).map(({
      from: from2,
      to,
      color
    }) => this.renderLimb(from2, to, color));
  }
  renderFrame(frame) {
    return frame.people.map((person) => this.viewer.pose.header.components.map((component) => {
      const joints = person[component.name];
      return [this.renderJoints(joints, component.colors), this.renderLimbs(component.limbs, joints, component.colors)];
    }));
  }
};
var SVGPoseRenderer = class extends PoseRenderer {
  renderJoint(i, joint, color) {
    const {
      R,
      G,
      B
    } = color;
    return h("circle", {
      cx: joint.X,
      cy: joint.Y,
      r: 4,
      class: "joint draggable",
      style: {
        fill: `rgb(${R}, ${G}, ${B})`,
        opacity: String(joint.C)
      },
      "data-id": i
    });
  }
  renderLimb(from2, to, color) {
    const {
      R,
      G,
      B
    } = color;
    return h("line", {
      x1: from2.X,
      y1: from2.Y,
      x2: to.X,
      y2: to.Y,
      style: {
        stroke: `rgb(${R}, ${G}, ${B})`,
        opacity: String((from2.C + to.C) / 2)
      }
    });
  }
  render(frame) {
    const viewBox = `0 0 ${this.viewer.pose.header.width} ${this.viewer.pose.header.height}`;
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox,
      width: this.viewer.elWidth,
      height: this.viewer.elHeight
    }, h("g", null, this.renderFrame(frame)));
  }
};
var CanvasPoseRenderer = class extends PoseRenderer {
  renderJoint(_, joint, color) {
    const {
      R,
      G,
      B
    } = color;
    this.ctx.strokeStyle = `rgba(0, 0, 0, 0)`;
    this.ctx.fillStyle = `rgba(${R}, ${G}, ${B}, ${joint.C})`;
    const radius = Math.round(this.thickness / 3);
    this.ctx.beginPath();
    this.ctx.arc(this.x(joint.X), this.y(joint.Y), radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }
  renderLimb(from2, to, color) {
    const {
      R,
      G,
      B
    } = color;
    this.ctx.lineWidth = this.thickness * 5 / 4;
    this.ctx.strokeStyle = `rgba(${R}, ${G}, ${B}, ${(from2.C + to.C) / 2})`;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x(from2.X), this.y(from2.Y));
    this.ctx.lineTo(this.x(to.X), this.y(to.Y));
    this.ctx.stroke();
  }
  // renderLimb(from: PosePointModel, to: PosePointModel, color: RGBColor) {
  //   const {R, G, B} = color;
  //   this.ctx.fillStyle = `rgba(${R}, ${G}, ${B}, ${(from.C + to.C) / 2})`;
  //
  //   const x = this.x((from.X + to.X) / 2);
  //   const y = this.y((from.Y + to.Y) / 2);
  //
  //   const sub = {x: this.x(from.X - to.X), y: this.y(from.Y - to.Y)}
  //
  //   const length = Math.sqrt(Math.pow(sub.x, 2) + Math.pow(sub.y, 2));
  //   const radiusX = Math.floor(length / 2);
  //   const radiusY = this.thickness;
  //   const rotation = Math.floor(Math.atan2(sub.y, sub.x) * 180 / Math.PI);
  //   this.ctx.beginPath();
  //   this.ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, 360);
  //   this.ctx.fill();
  // }
  render(frame) {
    const drawCanvas = () => {
      var _a;
      const canvas = this.viewer.element.shadowRoot.querySelector("canvas");
      if (canvas) {
        canvas.width = this.viewer.elWidth;
        canvas.height = this.viewer.elHeight;
        this.ctx = canvas.getContext("2d");
        if (this.viewer.background) {
          this.ctx.fillStyle = this.viewer.background;
          this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
          this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        const w = this.viewer.elWidth - 2 * this.viewer.elPadding.width;
        const h2 = this.viewer.elHeight - 2 * this.viewer.elPadding.height;
        this.thickness = (_a = this.viewer.thickness) !== null && _a !== void 0 ? _a : Math.round(Math.sqrt(w * h2) / 150);
        this.renderFrame(frame);
      } else {
        throw new Error("Canvas isn't available before first render");
      }
    };
    try {
      drawCanvas();
    } catch (e) {
      requestAnimationFrame(drawCanvas);
    }
    return h("canvas", {
      width: this.viewer.elWidth,
      height: this.viewer.elHeight
    });
  }
};
var poseViewerCss = ":host{display:inline-block}svg,canvas{max-width:100%}svg circle{stroke:black;stroke-width:1px;opacity:0.8}svg line{stroke-width:8px;opacity:0.8;stroke:black}canvas{display:block}";
var PoseViewerStyle0 = poseViewerCss;
var PoseViewer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.canplaythrough$ = createEvent(this, "canplaythrough$", 7);
    this.ended$ = createEvent(this, "ended$", 7);
    this.loadeddata$ = createEvent(this, "loadeddata$", 7);
    this.loadedmetadata$ = createEvent(this, "loadedmetadata$", 7);
    this.loadstart$ = createEvent(this, "loadstart$", 7);
    this.pause$ = createEvent(this, "pause$", 7);
    this.play$ = createEvent(this, "play$", 7);
    this.firstRender$ = createEvent(this, "firstRender$", 7);
    this.render$ = createEvent(this, "render$", 7);
    this.hasRendered = false;
    this.src = void 0;
    this.svg = false;
    this.width = null;
    this.height = null;
    this.aspectRatio = null;
    this.padding = null;
    this.thickness = null;
    this.background = null;
    this.loop = false;
    this.autoplay = true;
    this.playbackRate = 1;
    this.currentTime = NaN;
    this.duration = NaN;
    this.ended = false;
    this.paused = true;
    this.readyState = 0;
    this.error = void 0;
  }
  componentWillLoad() {
    this.renderer = this.svg ? new SVGPoseRenderer(this) : new CanvasPoseRenderer(this);
    return this.srcChange();
  }
  componentDidLoad() {
    this.resizeObserver = new ResizeObserver(this.setDimensions.bind(this));
    this.resizeObserver.observe(this.element);
  }
  loadPose() {
    return __async(this, null, function* () {
      if (this.fetchAbortController) {
        this.fetchAbortController.abort();
      }
      if (typeof this.src === "string") {
        const isRemoteUrl = this.src.startsWith("http") || this.src.startsWith("//");
        const isBrowserEnvironment = typeof window !== "undefined";
        if (isRemoteUrl || isBrowserEnvironment) {
          this.fetchAbortController = new AbortController();
          this.pose = yield Pose.fromRemote(this.src, this.fetchAbortController);
        } else {
          this.pose = yield Pose.fromLocal(this.src);
        }
      } else {
        this.pose = Pose.from(this.src);
      }
    });
  }
  initPose() {
    this.setDimensions();
    this.loadedmetadata$.emit();
    this.loadeddata$.emit();
    this.canplaythrough$.emit();
    this.duration = (this.pose.body.frames.length - 1) / this.pose.body.fps;
    this.currentTime = 0;
    if (this.autoplay) {
      this.play();
    }
  }
  srcChange() {
    return __async(this, null, function* () {
      if (this.src === this.lastSrc) {
        return;
      }
      this.lastSrc = this.src;
      this.clearInterval();
      this.setDimensions();
      delete this.pose;
      this.currentTime = NaN;
      this.duration = NaN;
      this.hasRendered = false;
      if (!this.src) {
        return;
      }
      this.ended = false;
      this.loadstart$.emit();
      this.error = null;
      try {
        yield this.loadPose();
        this.initPose();
        this.error = null;
      } catch (e) {
        console.error("PoseViewer error", e);
        this.error = e;
      }
    });
  }
  setDimensions() {
    this.elPadding = {
      width: 0,
      height: 0
    };
    if (!this.pose) {
      this.elWidth = 0;
      this.elHeight = 0;
      return;
    }
    if (!this.width && !this.height) {
      this.elWidth = this.pose.header.width;
      this.elHeight = this.pose.header.height;
      return;
    }
    const rect = this.element.getBoundingClientRect();
    const parseSize = (size, by) => size.endsWith("px") ? Number(size.slice(0, -2)) : size.endsWith("%") ? by * size.slice(0, -1) / 100 : Number(size);
    if (this.width && this.height) {
      this.elWidth = parseSize(this.width, rect.width);
      this.elHeight = parseSize(this.height, rect.height);
    } else if (this.width) {
      this.elWidth = parseSize(this.width, rect.width);
      this.elHeight = this.aspectRatio ? this.elWidth * this.aspectRatio : this.pose.header.height / this.pose.header.width * this.elWidth;
    } else if (this.height) {
      this.elHeight = parseSize(this.height, rect.height);
      this.elWidth = this.aspectRatio ? this.elHeight / this.aspectRatio : this.pose.header.width / this.pose.header.height * this.elHeight;
    }
    if (this.padding) {
      this.elPadding.width += parseSize(this.padding, this.elWidth);
      this.elPadding.height += parseSize(this.padding, this.elHeight);
    }
    const ratioWidth = this.elWidth - this.elPadding.width * 2;
    const ratioHeight = this.elHeight - this.elPadding.height * 2;
    const elAR = ratioWidth / ratioHeight;
    const poseAR = this.pose.header.width / this.pose.header.height;
    if (poseAR > elAR) {
      this.elPadding.height += (poseAR - elAR) * ratioHeight / 2;
    } else {
      this.elPadding.width += (elAR - poseAR) * ratioWidth / 2;
    }
  }
  syncMedia(media) {
    return __async(this, null, function* () {
      this.media = media;
      this.media.addEventListener("pause", this.pause.bind(this));
      this.media.addEventListener("play", this.play.bind(this));
      const syncTime = () => this.currentTime = this.frameTime(this.media.currentTime);
      this.media.addEventListener("seek", syncTime);
      this.media.addEventListener("timeupdate", syncTime);
      const updateRate = () => this.playbackRate = this.media.playbackRate;
      this.media.addEventListener("ratechange", updateRate);
      updateRate();
      this.clearInterval();
      if (this.media.paused) {
        this.pause();
      } else {
        this.play();
      }
    });
  }
  getPose() {
    return __async(this, null, function* () {
      return this.pose;
    });
  }
  nextFrame() {
    return __async(this, null, function* () {
      const newTime = this.currentTime + 1 / this.pose.body.fps;
      if (newTime > this.duration) {
        if (this.loop) {
          this.currentTime = newTime % this.duration;
        } else {
          this.ended$.emit();
          this.ended = true;
        }
      } else {
        this.currentTime = newTime;
      }
    });
  }
  frameTime(time) {
    if (!this.pose) {
      return 0;
    }
    return Math.floor(time * this.pose.body.fps) / this.pose.body.fps;
  }
  play() {
    return __async(this, null, function* () {
      if (!this.paused) {
        this.clearInterval();
      }
      this.paused = false;
      this.play$.emit();
      if (this.currentTime > this.duration) {
        this.currentTime = 0;
      }
      const intervalTime = 1e3 / (this.pose.body.fps * this.playbackRate);
      if (this.media) {
        this.loopInterval = setInterval(() => this.currentTime = this.frameTime(this.media.currentTime), intervalTime);
      } else {
        let lastTime = Date.now() / 1e3;
        this.loopInterval = setInterval(() => {
          const now = Date.now() / 1e3;
          this.currentTime += (now - lastTime) * this.playbackRate;
          lastTime = now;
          if (this.currentTime > this.duration) {
            if (this.loop) {
              this.currentTime = this.currentTime % this.duration;
            } else {
              this.ended$.emit();
              this.ended = true;
              this.clearInterval();
            }
          }
        }, intervalTime);
      }
    });
  }
  pause() {
    return __async(this, null, function* () {
      this.paused = true;
      this.pause$.emit();
      this.clearInterval();
    });
  }
  clearInterval() {
    if (this.loopInterval) {
      clearInterval(this.loopInterval);
    }
  }
  disconnectedCallback() {
    this.clearInterval();
  }
  render() {
    if (this.error) {
      return this.error.name !== "AbortError" ? this.error.message : "";
    }
    if (!this.pose || isNaN(this.currentTime) || !this.renderer) {
      return "";
    }
    const currentTime = this.currentTime > this.duration ? this.duration : this.currentTime;
    const frameId = Math.floor(currentTime * this.pose.body.fps);
    const frame = this.pose.body.frames[frameId];
    const render = this.renderer.render(frame);
    if (!this.hasRendered) {
      requestAnimationFrame(() => {
        this.hasRendered = true;
        this.firstRender$.emit();
      });
    }
    requestAnimationFrame(() => this.render$.emit());
    return h(Host, null, render);
  }
  get element() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "src": ["srcChange"]
    };
  }
};
PoseViewer.style = PoseViewerStyle0;
export {
  PoseViewer as pose_viewer
};
/*! Bundled license information:

pose-viewer/dist/esm/pose-viewer-8421959f.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   *)
*/
//# sourceMappingURL=pose-viewer.entry-YMLGSH3Y.js.map
