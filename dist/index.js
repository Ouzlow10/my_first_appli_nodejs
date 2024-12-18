"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// file: src/app.js 

var express = require('express');
var firebase = require("firebase/app");
var cookieParser = require('cookie-parser');
require("dotenv").config();
var PORT = process.env.PORT || 3000;
var app = express();
var http = require('http');
var bcrypt = require("bcryptjs");
var dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
app.use(cookieParser());
var cors = require('cors');
app.use(cors({
  origin: true
}));
var firebaseConfig = {
  apiKey: "AIzaSyBTTpAKsSjammAmwXTzzNp_-Nh0BZ6cbj4",
  authDomain: "appli-reservation-service.firebaseapp.com",
  databaseURL: "https://appli-reservation-service-default-rtdb.firebaseio.com",
  projectId: "appli-reservation-service",
  storageBucket: "appli-reservation-service.firebasestorage.app",
  messagingSenderId: "226926139971",
  appId: "1:226926139971:web:67b77268c3446b6359d2f6"
};
firebase.initializeApp(firebaseConfig);
var admin = require('firebase-admin');

//const serviceAccount = require("/home/ousmane-ndao/Downloads/reservationservice_apirest_nodejs-main/FirebaseService.json");
serviceAccount = require(process.env.CREDENTIALS);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
var maDate = new Date();
var t = new Date(1970, 0, 1); // Epoch
/* t.setSeconds(1732975800);
console.log(`Voici la date de t ${t}`) */
var _require = require("firebase/auth"),
  getAuth = _require.getAuth,
  createUserWithEmailAndPassword = _require.createUserWithEmailAndPassword,
  signInWithEmailAndPassword = _require.signInWithEmailAndPassword,
  signOut = _require.signOut,
  sendEmailVerification = _require.sendEmailVerification,
  sendPasswordResetEmail = _require.sendPasswordResetEmail;
var salt = bcrypt.genSaltSync(10);
var auth = getAuth();
var db = admin.firestore();
/*const realtimedb=admin.database();
const messaging = admin.messaging();*/
var statutdefault;
var _require2 = require('firebase-admin/firestore'),
  QuerySnapshot = _require2.QuerySnapshot;
//Secure With https by self-signed certificates
var https = require('https');
var fs = require('fs');
var httpServer = http.createServer(app);
var options = {
  key: fs.readFileSync("".concat(process.env.server_key)),
  cert: fs.readFileSync("".concat(process.env.server_crt))
};
var httpsServer = https.createServer(options, app);

//Create middleware to check what kind of statut try to souscribe
function registerChecking(_x, _x2, _x3) {
  return _registerChecking.apply(this, arguments);
}
function _registerChecking() {
  _registerChecking = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var _req$body, email, password, adresse, nom, prenom, statut, telephone, userIn, OTPcode;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password, adresse = _req$body.adresse, nom = _req$body.nom, prenom = _req$body.prenom, statut = _req$body.statut, telephone = _req$body.telephone;
          userIn = [];
          if (!email || !password) {
            res.status(401).json({
              email: "Email is required",
              password: "Password is required"
            });
          }
          if (statut) {
            _context3.next = 10;
            break;
          }
          statutdefault = "client";
          userIn.push({
            nom: nom,
            prenom: prenom,
            adresse: adresse,
            email: email,
            password: password,
            telephone: telephone,
            statut: statutdefault
          });
          res.locals = userIn[0];
          next();
          _context3.next = 14;
          break;
        case 10:
          if (!(req.body.statut == "admin")) {
            _context3.next = 14;
            break;
          }
          OTPcode = db.collection('OTPcode');
          _context3.next = 14;
          return OTPcode.get().then(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(querySnapshot) {
              var docs, s, _iterator2, _step2, doc;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    docs = querySnapshot.docs;
                    s = 0;
                    _iterator2 = _createForOfIteratorHelper(docs);
                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        doc = _step2.value;
                        if (doc.id == req.query.otpcode) {
                          s += 1;
                        }
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                    if (s == 0) {
                      res.status(200).json({
                        message: "You need a OTPcode valide to souscribe as admin"
                      });
                    } else {
                      statutdefault = "admin";
                      userIn.push({
                        nom: nom,
                        prenom: prenom,
                        adresse: adresse,
                        email: email,
                        password: password,
                        statut: statutdefault,
                        telephone: telephone,
                        codeOPT: req.query.otpcode
                      });
                      res.locals = userIn[0];
                      next();
                    }
                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x69) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _registerChecking.apply(this, arguments);
}
function deleteUser(_x4, _x5) {
  return _deleteUser.apply(this, arguments);
}
function _deleteUser() {
  _deleteUser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var myIndex, email;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          dataUser = res.locals;
          email = JSON.parse(JSON.stringify(dataUser))['datauser']['data'].email;
          console.log(JSON.parse(JSON.stringify(dataUser))['datauser']['data'].email);
          //res.status(200).json(`${JSON.parse(JSON.stringify(dataUser))['datauser']['data'].email}`)
          admin.auth().getUserByEmail(email).then(/*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(user) {
              var query;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    query = db.collection('users');
                    _context5.next = 3;
                    return query.get().then(/*#__PURE__*/function () {
                      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(querySnapshot) {
                        var docs, _iterator3, _step3, doc;
                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) switch (_context4.prev = _context4.next) {
                            case 0:
                              docs = querySnapshot.docs;
                              _iterator3 = _createForOfIteratorHelper(docs);
                              try {
                                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                  doc = _step3.value;
                                  if (doc.data().email == email) {
                                    myIndex = doc.id;
                                  }
                                }
                              } catch (err) {
                                _iterator3.e(err);
                              } finally {
                                _iterator3.f();
                              }
                            case 3:
                            case "end":
                              return _context4.stop();
                          }
                        }, _callee4);
                      }));
                      return function (_x71) {
                        return _ref4.apply(this, arguments);
                      };
                    }());
                  case 3:
                    _context5.next = 5;
                    return db.collection('users').doc("".concat(myIndex))["delete"]();
                  case 5:
                    console.log("User ".concat(email, " Account Deleted Successful"));
                    res.status(200).json("User Account Deleted Successfully");
                    return _context5.abrupt("return", admin.auth().deleteUser(user.uid));
                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x70) {
              return _ref3.apply(this, arguments);
            };
          }());
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _deleteUser.apply(this, arguments);
}
function registerUser(_x6, _x7) {
  return _registerUser.apply(this, arguments);
} //Login User Request
function _registerUser() {
  _registerUser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var email, password, nom, prenom, adresse, statut, telephone, codeOPT, ourId, myIndex, query;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          dataUser = res.locals;
          email = JSON.parse(JSON.stringify(dataUser)).email;
          password = JSON.parse(JSON.stringify(dataUser)).password;
          nom = JSON.parse(JSON.stringify(dataUser)).nom;
          prenom = JSON.parse(JSON.stringify(dataUser)).prenom;
          adresse = JSON.parse(JSON.stringify(dataUser)).adresse;
          statut = JSON.parse(JSON.stringify(dataUser)).statut;
          telephone = JSON.parse(JSON.stringify(dataUser)).telephone;
          codeOPT = JSON.parse(JSON.stringify(dataUser)).codeOPT;
          ourId = [];
          myIndex = 0;
          query = db.collection('users');
          _context10.next = 14;
          return query.get().then(/*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(querySnapshot) {
              var docs, _iterator4, _step4, doc, i;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    docs = querySnapshot.docs;
                    _iterator4 = _createForOfIteratorHelper(docs);
                    try {
                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                        doc = _step4.value;
                        ourId.push(doc.id);
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }
                    i = 0;
                  case 4:
                    if (!(i < ourId.length)) {
                      _context7.next = 13;
                      break;
                    }
                    if (!ourId.includes("".concat(myIndex))) {
                      _context7.next = 10;
                      break;
                    }
                    myIndex += 1;
                    i += 1;
                    _context7.next = 11;
                    break;
                  case 10:
                    return _context7.abrupt("break", 13);
                  case 11:
                    _context7.next = 4;
                    break;
                  case 13:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x72) {
              return _ref5.apply(this, arguments);
            };
          }());
        case 14:
          createUserWithEmailAndPassword(auth, email, password).then(function (userCredential) {
            sendEmailVerification(auth.currentUser).then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var OTPcode;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return db.collection('users').doc("".concat(myIndex)).create({
                      nom: nom,
                      prenom: prenom,
                      email: email,
                      statut: statut,
                      adresse: adresse,
                      telephone: telephone,
                      dateInscrip: Date.now()
                    });
                  case 2:
                    OTPcode = db.collection('OTPcode');
                    _context9.next = 5;
                    return OTPcode.get().then(/*#__PURE__*/function () {
                      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(querySnapshot) {
                        var docs, s, _iterator5, _step5, doc;
                        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                          while (1) switch (_context8.prev = _context8.next) {
                            case 0:
                              docs = querySnapshot.docs;
                              s = 0;
                              _iterator5 = _createForOfIteratorHelper(docs);
                              _context8.prev = 3;
                              _iterator5.s();
                            case 5:
                              if ((_step5 = _iterator5.n()).done) {
                                _context8.next = 12;
                                break;
                              }
                              doc = _step5.value;
                              if (!(doc.id == codeOPT)) {
                                _context8.next = 10;
                                break;
                              }
                              _context8.next = 10;
                              return db.collection('OTPcode').doc("".concat(codeOPT))["delete"]();
                            case 10:
                              _context8.next = 5;
                              break;
                            case 12:
                              _context8.next = 17;
                              break;
                            case 14:
                              _context8.prev = 14;
                              _context8.t0 = _context8["catch"](3);
                              _iterator5.e(_context8.t0);
                            case 17:
                              _context8.prev = 17;
                              _iterator5.f();
                              return _context8.finish(17);
                            case 20:
                            case "end":
                              return _context8.stop();
                          }
                        }, _callee8, null, [[3, 14, 17, 20]]);
                      }));
                      return function (_x73) {
                        return _ref7.apply(this, arguments);
                      };
                    }());
                  case 5:
                    res.status(200).json({
                      message: "Verification email sent! User created successfully!"
                    });
                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9);
            })))["catch"](function (error) {
              console.error(error);
              res.status(500).json({
                error: "Error sending email verification"
              });
            });
          })["catch"](function (error) {
            var errorMessage = error.message || "An error occurred while registering user";
            res.status(500).json({
              error: errorMessage
            });
          });
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _registerUser.apply(this, arguments);
}
function login(_x8, _x9) {
  return _login.apply(this, arguments);
} //Create middleware function from loginUser function.
//This middleware allow to customers to authentificated 
function _login() {
  _login = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var userIn, authheader, authT, email, password;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          userIn = [];
          authheader = req.headers.authorization;
          if (!authheader) {
            res.setHeader('WWW-Authenticate', 'Basic');
            res.status(401).json({
              message: "Please enter your valides credentials"
            });
          } else {
            authT = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
            email = authT[0];
            password = authT[1];
            signInWithEmailAndPassword(auth, email, password).then(/*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(userCredential) {
                var idToken, query;
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      idToken = userCredential._tokenResponse.idToken;
                      if (!idToken) {
                        _context12.next = 8;
                        break;
                      }
                      res.cookie('access_token', idToken, {
                        httpOnly: true
                      });
                      query = db.collection('users');
                      _context12.next = 6;
                      return query.get().then(/*#__PURE__*/function () {
                        var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(querySnapshot) {
                          var docs, _iterator6, _step6, doc;
                          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                            while (1) switch (_context11.prev = _context11.next) {
                              case 0:
                                docs = querySnapshot.docs;
                                _iterator6 = _createForOfIteratorHelper(docs);
                                try {
                                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                                    doc = _step6.value;
                                    if (doc.data().email == email) {
                                      userIn.push({
                                        data: doc.data()
                                      });
                                      res.status(200).json({
                                        dataUser: userIn,
                                        access_token: idToken
                                      });
                                    }
                                  }
                                } catch (err) {
                                  _iterator6.e(err);
                                } finally {
                                  _iterator6.f();
                                }
                              case 3:
                              case "end":
                                return _context11.stop();
                            }
                          }, _callee11);
                        }));
                        return function (_x75) {
                          return _ref9.apply(this, arguments);
                        };
                      }());
                    case 6:
                      _context12.next = 9;
                      break;
                    case 8:
                      res.status(500).json({
                        error: "Internal Server Error"
                      });
                    case 9:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12);
              }));
              return function (_x74) {
                return _ref8.apply(this, arguments);
              };
            }())["catch"](function (error) {
              console.error(error);
              var errorMessage = error.message || "An error occurred while logging in";
              res.status(500).json({
                error: errorMessage
              });
            });
          }
        case 3:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _login.apply(this, arguments);
}
function authentification(_x10, _x11, _x12) {
  return _authentification.apply(this, arguments);
} //middleware to allow admin or Superadmin statut
function _authentification() {
  _authentification = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res, next) {
    var userIn, authheader, authT, email, password;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          userIn = [];
          authheader = req.headers.authorization;
          if (!authheader) {
            res.setHeader('WWW-Authenticate', 'Basic');
            res.status(401).json({
              message: "You are not authenticated!"
            });
          } else {
            authT = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
            email = authT[0];
            password = authT[1];
            signInWithEmailAndPassword(auth, email, password).then(/*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(userCredential) {
                var query;
                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                    case 0:
                      query = db.collection('users');
                      _context15.next = 3;
                      return query.get().then(/*#__PURE__*/function () {
                        var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(querySnapshot) {
                          var docs, _iterator7, _step7, doc;
                          return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                            while (1) switch (_context14.prev = _context14.next) {
                              case 0:
                                docs = querySnapshot.docs;
                                _iterator7 = _createForOfIteratorHelper(docs);
                                try {
                                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                                    doc = _step7.value;
                                    if (doc.data().email == email) {
                                      userIn.push({
                                        data: doc.data()
                                      });
                                      console.log("Authenfication for user ".concat(userIn[0]['data'].email, " at ").concat(maDate.toUTCString()));
                                      res.locals.datauser = userIn[0];
                                      next();
                                    }
                                  }
                                } catch (err) {
                                  _iterator7.e(err);
                                } finally {
                                  _iterator7.f();
                                }
                              case 3:
                              case "end":
                                return _context14.stop();
                            }
                          }, _callee14);
                        }));
                        return function (_x77) {
                          return _ref11.apply(this, arguments);
                        };
                      }());
                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }, _callee15);
              }));
              return function (_x76) {
                return _ref10.apply(this, arguments);
              };
            }())["catch"](function (error) {
              console.error(error);
              var errorMessage = error.message || "An error occurred while logging in";
              res.status(500).json({
                error: errorMessage
              });
            });
          }
        case 3:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return _authentification.apply(this, arguments);
}
function authentification_admin(_x13, _x14, _x15) {
  return _authentification_admin.apply(this, arguments);
}
function _authentification_admin() {
  _authentification_admin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res, next) {
    var userIn, authheader, somme_client, authT, email, password, errorMessage;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          userIn = [];
          authheader = req.headers.authorization;
          somme_client = 0;
          try {
            //console.log(req.headers);
            if (!authheader) {
              res.setHeader('WWW-Authenticate', 'Basic');
              res.status(401).json('You are not authenticated!');
            } else {
              authT = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
              email = authT[0];
              password = authT[1];
              signInWithEmailAndPassword(auth, email, password).then(/*#__PURE__*/function () {
                var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(userCredential) {
                  var query;
                  return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                      case 0:
                        query = db.collection('users');
                        _context18.next = 3;
                        return query.get().then(/*#__PURE__*/function () {
                          var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(querySnapshot) {
                            var docs, _iterator8, _step8, doc;
                            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                              while (1) switch (_context17.prev = _context17.next) {
                                case 0:
                                  docs = querySnapshot.docs;
                                  _iterator8 = _createForOfIteratorHelper(docs);
                                  try {
                                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                                      doc = _step8.value;
                                      if (doc.data().email == email && (doc.data().statut == "Superadmin" || doc.data().statut == "admin")) {
                                        userIn.push({
                                          data: doc.data()
                                        });
                                        somme_client += 1;
                                        res.locals.datauser = userIn[0];
                                      }
                                    }
                                  } catch (err) {
                                    _iterator8.e(err);
                                  } finally {
                                    _iterator8.f();
                                  }
                                  if (somme_client == 0) {
                                    res.status(500).json({
                                      message: "You not enable for this action"
                                    });
                                  } else {
                                    console.log("Admin Authenfication : ", email, "at ", maDate.toUTCString());
                                    next();
                                  }
                                case 4:
                                case "end":
                                  return _context17.stop();
                              }
                            }, _callee17);
                          }));
                          return function (_x79) {
                            return _ref13.apply(this, arguments);
                          };
                        }());
                      case 3:
                      case "end":
                        return _context18.stop();
                    }
                  }, _callee18);
                }));
                return function (_x78) {
                  return _ref12.apply(this, arguments);
                };
              }())["catch"](function (error) {
                console.error(error);
                var errorMessage = error.message || "An error occurred while logging in";
                res.status(500).json({
                  error: errorMessage
                });
              });
            }
          } catch (error) {
            console.error(error);
            errorMessage = error.message || "An error occurred while logging in";
            res.status(500).json({
              error: errorMessage
            });
          }
        case 4:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return _authentification_admin.apply(this, arguments);
}
function authentification_superadmin(_x16, _x17, _x18) {
  return _authentification_superadmin.apply(this, arguments);
}
function _authentification_superadmin() {
  _authentification_superadmin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res, next) {
    var userIn, authheader, somme_client, err, authT, email, password;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          userIn = [];
          authheader = req.headers.authorization; ///const salt = await bcrypt.genSalt(10);
          somme_client = 0; //console.log(req.headers);
          if (!authheader) {
            err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            res.status(401).json(err);
          } else {
            authT = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
            email = authT[0];
            password = authT[1];
            signInWithEmailAndPassword(auth, email, password).then(/*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(userCredential) {
                var query;
                return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                  while (1) switch (_context21.prev = _context21.next) {
                    case 0:
                      query = db.collection('users');
                      _context21.next = 3;
                      return query.get().then(/*#__PURE__*/function () {
                        var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(querySnapshot) {
                          var docs, _iterator9, _step9, doc;
                          return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                            while (1) switch (_context20.prev = _context20.next) {
                              case 0:
                                docs = querySnapshot.docs;
                                _iterator9 = _createForOfIteratorHelper(docs);
                                try {
                                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                                    doc = _step9.value;
                                    if (doc.data().email == email && doc.data().statut == "Superadmin") {
                                      userIn.push({
                                        data: doc.data()
                                      });
                                      somme_client += 1;
                                      res.locals.datauser = userIn[0];
                                    }
                                  }
                                } catch (err) {
                                  _iterator9.e(err);
                                } finally {
                                  _iterator9.f();
                                }
                                if (somme_client == 0) {
                                  res.status(500).json({
                                    message: "You not enable for this action"
                                  });
                                } else {
                                  console.log("Super admin Authenfication : ", email, "at ", maDate.toUTCString());
                                  next();
                                }
                              case 4:
                              case "end":
                                return _context20.stop();
                            }
                          }, _callee20);
                        }));
                        return function (_x81) {
                          return _ref15.apply(this, arguments);
                        };
                      }());
                    case 3:
                    case "end":
                      return _context21.stop();
                  }
                }, _callee21);
              }));
              return function (_x80) {
                return _ref14.apply(this, arguments);
              };
            }())["catch"](function (error) {
              console.error(error);
              var errorMessage = error.message || "An error occurred while logging in";
              res.status(500).json({
                error: errorMessage
              });
            });
          }
        case 4:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return _authentification_superadmin.apply(this, arguments);
}
function logoutUser(req, res) {
  signOut(auth).then(function () {
    res.clearCookie('access_token');
    res.status(200).json({
      message: "User logged out successfully"
    });
  })["catch"](function (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error"
    });
  });
}
function resetPassword(req, res) {
  var email = req.body.email;
  if (!email) {
    res.status(401).json({
      email: "Email is required"
    });
  }
  sendPasswordResetEmail(auth, email).then(function () {
    res.status(200).json({
      message: "Password reset email sent successfully!"
    });
  })["catch"](function (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error"
    });
  });
}

//Get all users 
function getAllusers(req, res) {
  _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var i, emailAut, query, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          dataUser = res.locals;
          i = 0;
          emailAut = JSON.parse(JSON.stringify(dataUser)).email; //['datauser'].id
          console.log("Users List get by ", emailAut);
          query = db.collection('users');
          response = [];
          _context.next = 9;
          return query.get().then(function (querySnapshot) {
            var docs = querySnapshot.docs;
            var _iterator = _createForOfIteratorHelper(docs),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var doc = _step.value;
                var selectItem = {
                  data: doc.data()
                };
                if (req.query.limit) {
                  if (i < req.query.limit) {
                    response.push(selectItem);
                    i += 1;
                  }
                } else {
                  response.push(selectItem);
                }
                //response.push(selectItem);           
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return response;
          });
        case 9:
          res.status(200).json(response);
          _context.next = 16;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json(_context.t0);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }))();
}

//Create a OTP code for adding a admin user
function genOPTCustomer() {
  //create a base-36 string that contains 30 chars in a-z,0-9
  return _toConsumableArray(Array(6)).map(function (e) {
    return Math.floor(Math.random() * 10);
  }).join('');
}
function createOPTreservation(_x19, _x20) {
  return _createOPTreservation.apply(this, arguments);
}
function _createOPTreservation() {
  _createOPTreservation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
            var mycode;
            return _regeneratorRuntime().wrap(function _callee23$(_context23) {
              while (1) switch (_context23.prev = _context23.next) {
                case 0:
                  _context23.prev = 0;
                  mycode = genOPTCustomer();
                  _context23.next = 4;
                  return db.collection('OTPcodeReservation').doc("".concat(mycode)).create({});
                case 4:
                  res.status(200).json({
                    message: "code created and added Successfully",
                    code: mycode
                  });
                  _context23.next = 11;
                  break;
                case 7:
                  _context23.prev = 7;
                  _context23.t0 = _context23["catch"](0);
                  console.log(_context23.t0);
                  res.status(500).json(_context23.t0);
                case 11:
                case "end":
                  return _context23.stop();
              }
            }, _callee23, null, [[0, 7]]);
          }))();
        case 1:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return _createOPTreservation.apply(this, arguments);
}
function createOPT(_x21, _x22) {
  return _createOPT.apply(this, arguments);
} //Create and add service by admin or superadmin
function _createOPT() {
  _createOPT = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
            var codeTempo, index, mycode;
            return _regeneratorRuntime().wrap(function _callee25$(_context25) {
              while (1) switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.prev = 0;
                  codeTempo = [];
                  index = 0;
                case 3:
                  if (!(index < parseInt(req.query.nombre))) {
                    _context25.next = 11;
                    break;
                  }
                  mycode = genOPTCustomer();
                  _context25.next = 7;
                  return db.collection('OTPcode').doc("".concat(mycode)).create({});
                case 7:
                  codeTempo.push(mycode);
                case 8:
                  index++;
                  _context25.next = 3;
                  break;
                case 11:
                  res.status(200).json({
                    message: "code created and added ",
                    code: codeTempo
                  });
                  _context25.next = 18;
                  break;
                case 14:
                  _context25.prev = 14;
                  _context25.t0 = _context25["catch"](0);
                  console.log(_context25.t0);
                  res.status(500).json(_context25.t0);
                case 18:
                case "end":
                  return _context25.stop();
              }
            }, _callee25, null, [[0, 14]]);
          }))();
        case 1:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }));
  return _createOPT.apply(this, arguments);
}
function createService(_x23, _x24) {
  return _createService.apply(this, arguments);
} //Get all Services 
function _createService() {
  _createService = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
            var query, ourId, myIndex, picture, tempsMini, email;
            return _regeneratorRuntime().wrap(function _callee28$(_context28) {
              while (1) switch (_context28.prev = _context28.next) {
                case 0:
                  _context28.prev = 0;
                  query = db.collection('services');
                  ourId = [];
                  myIndex = 0;
                  _context28.next = 6;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(querySnapshot) {
                      var docs, _iterator10, _step10, doc, i;
                      return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                        while (1) switch (_context27.prev = _context27.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator10 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                                doc = _step10.value;
                                ourId.push(doc.id);
                              }
                            } catch (err) {
                              _iterator10.e(err);
                            } finally {
                              _iterator10.f();
                            }
                            i = 0;
                          case 4:
                            if (!(i < ourId.length)) {
                              _context27.next = 13;
                              break;
                            }
                            if (!ourId.includes("".concat(myIndex))) {
                              _context27.next = 10;
                              break;
                            }
                            myIndex += 1;
                            i += 1;
                            _context27.next = 11;
                            break;
                          case 10:
                            return _context27.abrupt("break", 13);
                          case 11:
                            _context27.next = 4;
                            break;
                          case 13:
                          case "end":
                            return _context27.stop();
                        }
                      }, _callee27);
                    }));
                    return function (_x82) {
                      return _ref19.apply(this, arguments);
                    };
                  }());
                case 6:
                  if (req.body.picture) {
                    picture = req.body.picture;
                  } else {
                    picture = "";
                  }
                  if (req.body.tempsMini) {
                    tempsMini = req.body.tempsMini;
                  } else {
                    tempsMini = 14400;
                  }
                  _context28.next = 10;
                  return db.collection('services').doc("".concat(myIndex)).create({
                    id: myIndex,
                    nom: req.body.nom,
                    prix: req.body.prix,
                    tempsMini: tempsMini,
                    picture: picture,
                    dateInscri: Date.now()

                    //
                  });
                case 10:
                  dataUser = res.locals;
                  email = JSON.parse(JSON.stringify(dataUser))['datauser'].email;
                  console.log("Service name", req.body.nom, "added by", email);
                  res.status(200).json({
                    message: "Service added "
                  });
                  _context28.next = 20;
                  break;
                case 16:
                  _context28.prev = 16;
                  _context28.t0 = _context28["catch"](0);
                  console.log(_context28.t0);
                  res.status(500).json(_context28.t0);
                case 20:
                case "end":
                  return _context28.stop();
              }
            }, _callee28, null, [[0, 16]]);
          }))();
        case 1:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  }));
  return _createService.apply(this, arguments);
}
function getAllService(_x25, _x26) {
  return _getAllService.apply(this, arguments);
}
/* async function getAuser(req,res){
    (async()=>{
        try {
            const query= db.collection('users');
            var if_exist=0;
            var response;
            await query.get().then(async querySnapshot=>{
                let docs=querySnapshot.docs;
                for (const doc of docs) {
                    if (doc.data().email==req.params.email) {
                        if_exist=1;
                        const documentdata=db.collection('users').doc(`${doc.id}`);
                        let user= await documentdata.get();
                        response=user.data();                        
                    }
                    
                }
                if (if_exist==0) {
                    
                    res.status(500).json({message:"Users not found !!"});
                } else {
                    res.status(200).json(response);

                }
               
        })

       
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    })();


} */
//Search Service
function _getAllService() {
  _getAllService = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
            var query, response, i;
            return _regeneratorRuntime().wrap(function _callee30$(_context30) {
              while (1) switch (_context30.prev = _context30.next) {
                case 0:
                  _context30.prev = 0;
                  query = db.collection('services');
                  response = [];
                  i = 0;
                  _context30.next = 6;
                  return query.get().then(function (querySnapshot) {
                    var docs = querySnapshot.docs;
                    var _iterator11 = _createForOfIteratorHelper(docs),
                      _step11;
                    try {
                      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                        var doc = _step11.value;
                        var selectItem = {
                          data: doc.data()
                        };
                        if (req.query.limit) {
                          if (i < req.query.limit) {
                            response.push(selectItem);
                            i += 1;
                          }
                        } else {
                          response.push(selectItem);
                        }
                      }
                    } catch (err) {
                      _iterator11.e(err);
                    } finally {
                      _iterator11.f();
                    }
                    return response;
                  });
                case 6:
                  res.status(200).json(response);
                  _context30.next = 13;
                  break;
                case 9:
                  _context30.prev = 9;
                  _context30.t0 = _context30["catch"](0);
                  console.log(_context30.t0);
                  res.status(500).json(_context30.t0);
                case 13:
                case "end":
                  return _context30.stop();
              }
            }, _callee30, null, [[0, 9]]);
          }))();
        case 1:
        case "end":
          return _context31.stop();
      }
    }, _callee31);
  }));
  return _getAllService.apply(this, arguments);
}
function searchService(_x27, _x28) {
  return _searchService.apply(this, arguments);
} //Search User
function _searchService() {
  _searchService = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
            var terms, query, response, i;
            return _regeneratorRuntime().wrap(function _callee32$(_context32) {
              while (1) switch (_context32.prev = _context32.next) {
                case 0:
                  _context32.prev = 0;
                  terms = req.query.terms;
                  query = db.collection('services');
                  response = [];
                  i = 0;
                  _context32.next = 7;
                  return query.get().then(function (querySnapshot) {
                    var docs = querySnapshot.docs;
                    var _iterator12 = _createForOfIteratorHelper(docs),
                      _step12;
                    try {
                      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                        var doc = _step12.value;
                        for (var key in doc.data()) {
                          if (doc.data()[key].toString().toLowerCase().normalize('NFD').replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u0898-\u089F\u08C9-\u08D2\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C3C\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E3A\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u1714\u1715\u1734\u17C9-\u17D3\u17DD\u1939-\u193B\u1A60\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABE\u1AC1-\u1ACB\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1BE6\u1BF2\u1BF3\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA806\uA82C\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDD4E\uDD69-\uDD6D\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC46\uDC70\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3B\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74\uDFCE-\uDFD0\uDFD2\uDFD3\uDFE1\uDFE2]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97\uDF41\uDF42\uDF5A]|\uD80D[\uDC47-\uDC55]|\uD818\uDD2F|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDD6B\uDD6C\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDC30-\uDC6D\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDDEE\uDDEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, '') == terms.toLowerCase().normalize('NFD').replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u0898-\u089F\u08C9-\u08D2\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C3C\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E3A\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u1714\u1715\u1734\u17C9-\u17D3\u17DD\u1939-\u193B\u1A60\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABE\u1AC1-\u1ACB\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1BE6\u1BF2\u1BF3\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA806\uA82C\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDD4E\uDD69-\uDD6D\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC46\uDC70\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3B\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74\uDFCE-\uDFD0\uDFD2\uDFD3\uDFE1\uDFE2]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97\uDF41\uDF42\uDF5A]|\uD80D[\uDC47-\uDC55]|\uD818\uDD2F|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDD6B\uDD6C\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDC30-\uDC6D\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDDEE\uDDEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, '')) {
                            var selectItem = {
                              data: doc.data()
                            };
                            response.push(selectItem);
                          }
                        }
                      }
                    } catch (err) {
                      _iterator12.e(err);
                    } finally {
                      _iterator12.f();
                    }
                    return response;
                  });
                case 7:
                  if (response.length == 0) {
                    res.status(500).json("No service found");
                  } else {
                    res.status(200).json(response);
                  }
                  _context32.next = 14;
                  break;
                case 10:
                  _context32.prev = 10;
                  _context32.t0 = _context32["catch"](0);
                  console.log(_context32.t0);
                  res.status(500).json(_context32.t0);
                case 14:
                case "end":
                  return _context32.stop();
              }
            }, _callee32, null, [[0, 10]]);
          }))();
        case 1:
        case "end":
          return _context33.stop();
      }
    }, _callee33);
  }));
  return _searchService.apply(this, arguments);
}
function searchUser(_x29, _x30) {
  return _searchUser.apply(this, arguments);
} //Get a specific service 
function _searchUser() {
  _searchUser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
            var terms, query, response, i;
            return _regeneratorRuntime().wrap(function _callee34$(_context34) {
              while (1) switch (_context34.prev = _context34.next) {
                case 0:
                  _context34.prev = 0;
                  terms = req.query.terms;
                  query = db.collection('users');
                  response = [];
                  i = 0;
                  _context34.next = 7;
                  return query.get().then(function (querySnapshot) {
                    var docs = querySnapshot.docs;
                    var _iterator13 = _createForOfIteratorHelper(docs),
                      _step13;
                    try {
                      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                        var doc = _step13.value;
                        for (var key in doc.data()) {
                          if (doc.data()[key].toString().toLowerCase().normalize('NFD').replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u0898-\u089F\u08C9-\u08D2\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C3C\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E3A\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u1714\u1715\u1734\u17C9-\u17D3\u17DD\u1939-\u193B\u1A60\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABE\u1AC1-\u1ACB\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1BE6\u1BF2\u1BF3\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA806\uA82C\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDD4E\uDD69-\uDD6D\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC46\uDC70\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3B\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74\uDFCE-\uDFD0\uDFD2\uDFD3\uDFE1\uDFE2]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97\uDF41\uDF42\uDF5A]|\uD80D[\uDC47-\uDC55]|\uD818\uDD2F|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDD6B\uDD6C\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDC30-\uDC6D\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDDEE\uDDEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, '') == terms.toLowerCase().normalize('NFD').replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u0898-\u089F\u08C9-\u08D2\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C3C\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E3A\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u1714\u1715\u1734\u17C9-\u17D3\u17DD\u1939-\u193B\u1A60\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABE\u1AC1-\u1ACB\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1BE6\u1BF2\u1BF3\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA806\uA82C\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDD4E\uDD69-\uDD6D\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC46\uDC70\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3B\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74\uDFCE-\uDFD0\uDFD2\uDFD3\uDFE1\uDFE2]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97\uDF41\uDF42\uDF5A]|\uD80D[\uDC47-\uDC55]|\uD818\uDD2F|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDD6B\uDD6C\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDC30-\uDC6D\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDDEE\uDDEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, '')) {
                            var selectItem = {
                              data: doc.data()
                            };
                            response.push(selectItem);
                          }
                        }
                      }
                    } catch (err) {
                      _iterator13.e(err);
                    } finally {
                      _iterator13.f();
                    }
                    return response;
                  });
                case 7:
                  if (response.length == 0) {
                    res.status(500).json("No user found");
                  } else {
                    res.status(200).json(response);
                  }
                  _context34.next = 14;
                  break;
                case 10:
                  _context34.prev = 10;
                  _context34.t0 = _context34["catch"](0);
                  console.log(_context34.t0);
                  res.status(500).json(_context34.t0);
                case 14:
                case "end":
                  return _context34.stop();
              }
            }, _callee34, null, [[0, 10]]);
          }))();
        case 1:
        case "end":
          return _context35.stop();
      }
    }, _callee35);
  }));
  return _searchUser.apply(this, arguments);
}
function getAservice(_x31, _x32) {
  return _getAservice.apply(this, arguments);
} //Update a service by admin or Superadmin
function _getAservice() {
  _getAservice = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38(req, res) {
    return _regeneratorRuntime().wrap(function _callee38$(_context38) {
      while (1) switch (_context38.prev = _context38.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
            var query, if_exist;
            return _regeneratorRuntime().wrap(function _callee37$(_context37) {
              while (1) switch (_context37.prev = _context37.next) {
                case 0:
                  _context37.prev = 0;
                  query = db.collection('services');
                  if_exist = 0;
                  _context37.next = 5;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(querySnapshot) {
                      var docs, _iterator14, _step14, doc, documentdata, services, response;
                      return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                        while (1) switch (_context36.prev = _context36.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator14 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                                doc = _step14.value;
                                if (doc.data().id == req.params.id_service) {
                                  if_exist = 1;
                                }
                              }
                            } catch (err) {
                              _iterator14.e(err);
                            } finally {
                              _iterator14.f();
                            }
                            if (!(if_exist == 1)) {
                              _context36.next = 12;
                              break;
                            }
                            documentdata = db.collection('services').doc("".concat(req.params.id_service));
                            _context36.next = 7;
                            return documentdata.get();
                          case 7:
                            services = _context36.sent;
                            response = services.data();
                            res.status(200).json(response);
                            _context36.next = 13;
                            break;
                          case 12:
                            res.status(500).json({
                              message: "services not found !!"
                            });
                          case 13:
                          case "end":
                            return _context36.stop();
                        }
                      }, _callee36);
                    }));
                    return function (_x83) {
                      return _ref24.apply(this, arguments);
                    };
                  }());
                case 5:
                  _context37.next = 11;
                  break;
                case 7:
                  _context37.prev = 7;
                  _context37.t0 = _context37["catch"](0);
                  console.log(_context37.t0);
                  res.status(500).json(_context37.t0);
                case 11:
                case "end":
                  return _context37.stop();
              }
            }, _callee37, null, [[0, 7]]);
          }))();
        case 1:
        case "end":
          return _context38.stop();
      }
    }, _callee38);
  }));
  return _getAservice.apply(this, arguments);
}
function updateService(_x33, _x34) {
  return _updateService.apply(this, arguments);
} //Delete a service
function _updateService() {
  _updateService = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41(req, res) {
    return _regeneratorRuntime().wrap(function _callee41$(_context41) {
      while (1) switch (_context41.prev = _context41.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
            var query, nom, prix, dateInscri, tempsMini, picture, somme_client, id;
            return _regeneratorRuntime().wrap(function _callee40$(_context40) {
              while (1) switch (_context40.prev = _context40.next) {
                case 0:
                  _context40.prev = 0;
                  query = db.collection('services');
                  somme_client = 0;
                  _context40.next = 5;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39(querySnapshot) {
                      var docs, _iterator15, _step15, doc, _maDate, email;
                      return _regeneratorRuntime().wrap(function _callee39$(_context39) {
                        while (1) switch (_context39.prev = _context39.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator15 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                                doc = _step15.value;
                                if (doc.data().id == req.params.id_service) {
                                  somme_client = 1;
                                  id = doc.id;
                                  dateInscri = doc.data().dateInscri;
                                  if (req.body.picture) {
                                    picture = req.body.picture;
                                  } else {
                                    if (doc.data().picture) {
                                      picture = doc.data().picture;
                                    } else {
                                      picture = "";
                                    }
                                  }
                                  if (req.body.tempsMini) {
                                    tempsMini = req.body.tempsMini;
                                  } else {
                                    if (doc.data().tempsMini) {
                                      tempsMini = doc.data().tempsMini;
                                    } else {
                                      tempsMini = 14400;
                                    }
                                  }
                                  if (!req.body.nom) {
                                    nom = doc.data().nom;
                                  } else {
                                    nom = req.body.nom;
                                  }
                                  if (!req.body.prix) {
                                    prix = doc.data().prix;
                                  } else {
                                    prix = req.body.prix;
                                  }
                                }
                              }
                            } catch (err) {
                              _iterator15.e(err);
                            } finally {
                              _iterator15.f();
                            }
                            if (!(somme_client == 0)) {
                              _context39.next = 7;
                              break;
                            }
                            res.status(500).json({
                              message: "service not found !!"
                            });
                            _context39.next = 14;
                            break;
                          case 7:
                            _maDate = new Date();
                            _context39.next = 10;
                            return db.collection('services').doc("".concat(id)).update({
                              id: id,
                              nom: nom,
                              prix: prix,
                              picture: picture,
                              tempsMini: tempsMini,
                              dateInscri: dateInscri
                            });
                          case 10:
                            dataUser = res.locals;
                            email = JSON.parse(JSON.stringify(dataUser))['datauser'].email;
                            console.log("Service name", nom, "updated by ", email, "at ", _maDate.toUTCString());
                            res.status(200).json({
                              message: "service Update Successfully!!"
                            });
                          case 14:
                          case "end":
                            return _context39.stop();
                        }
                      }, _callee39);
                    }));
                    return function (_x84) {
                      return _ref26.apply(this, arguments);
                    };
                  }());
                case 5:
                  _context40.next = 11;
                  break;
                case 7:
                  _context40.prev = 7;
                  _context40.t0 = _context40["catch"](0);
                  console.log(_context40.t0);
                  res.status(500).json(_context40.t0);
                case 11:
                case "end":
                  return _context40.stop();
              }
            }, _callee40, null, [[0, 7]]);
          }))();
        case 1:
        case "end":
          return _context41.stop();
      }
    }, _callee41);
  }));
  return _updateService.apply(this, arguments);
}
function deleteService(_x35, _x36) {
  return _deleteService.apply(this, arguments);
}
function _deleteService() {
  _deleteService = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee44(req, res) {
    return _regeneratorRuntime().wrap(function _callee44$(_context44) {
      while (1) switch (_context44.prev = _context44.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
            var query, somme_client, id_service, id, Ourprofes;
            return _regeneratorRuntime().wrap(function _callee43$(_context43) {
              while (1) switch (_context43.prev = _context43.next) {
                case 0:
                  _context43.prev = 0;
                  query = db.collection('services');
                  somme_client = 0;
                  Ourprofes = [];
                  _context43.next = 6;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42(querySnapshot) {
                      var docs, _iterator16, _step16, doc, email;
                      return _regeneratorRuntime().wrap(function _callee42$(_context42) {
                        while (1) switch (_context42.prev = _context42.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator16 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                                doc = _step16.value;
                                if (doc.data().id == req.params.id_service) {
                                  somme_client = 1;
                                  id_service = doc.data().id_service;
                                  id = doc.id;
                                }
                              }
                            } catch (err) {
                              _iterator16.e(err);
                            } finally {
                              _iterator16.f();
                            }
                            if (!(somme_client == 0)) {
                              _context42.next = 7;
                              break;
                            }
                            res.status(500).json({
                              message: "service not found !!"
                            });
                            _context42.next = 13;
                            break;
                          case 7:
                            _context42.next = 9;
                            return db.collection('services').doc("".concat(id))["delete"]();
                          case 9:
                            dataUser = res.locals;
                            email = JSON.parse(JSON.stringify(dataUser))['datauser'].email;
                            console.log("Service id", id, "deleted by ", email, " at ", maDate.toUTCString());
                            res.status(200).json({
                              message: "service delete Successfully!!"
                            });
                          case 13:
                          case "end":
                            return _context42.stop();
                        }
                      }, _callee42);
                    }));
                    return function (_x85) {
                      return _ref28.apply(this, arguments);
                    };
                  }());
                case 6:
                  _context43.next = 12;
                  break;
                case 8:
                  _context43.prev = 8;
                  _context43.t0 = _context43["catch"](0);
                  console.log(_context43.t0);
                  res.status(500).json(_context43.t0);
                case 12:
                case "end":
                  return _context43.stop();
              }
            }, _callee43, null, [[0, 8]]);
          }))();
        case 1:
        case "end":
          return _context44.stop();
      }
    }, _callee44);
  }));
  return _deleteService.apply(this, arguments);
}
function addProfes(_x37, _x38) {
  return _addProfes.apply(this, arguments);
} //update a worker by a admin/superadmin statut
function _addProfes() {
  _addProfes = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee49(req, res) {
    return _regeneratorRuntime().wrap(function _callee49$(_context49) {
      while (1) switch (_context49.prev = _context49.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
            var ifService, email, password, ourId, myIndex, query, queryService;
            return _regeneratorRuntime().wrap(function _callee48$(_context48) {
              while (1) switch (_context48.prev = _context48.next) {
                case 0:
                  _context48.prev = 0;
                  ifService = 0;
                  email = req.body.email;
                  password = "pasword@123";
                  if (!email) {
                    res.status(401).json({
                      email: "Email is required"
                    });
                  }
                  ourId = [];
                  myIndex = 0;
                  query = db.collection('users');
                  _context48.next = 10;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref30 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee45(querySnapshot) {
                      var docs, _iterator17, _step17, doc, i;
                      return _regeneratorRuntime().wrap(function _callee45$(_context45) {
                        while (1) switch (_context45.prev = _context45.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator17 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                                doc = _step17.value;
                                ourId.push(doc.id);
                              }
                            } catch (err) {
                              _iterator17.e(err);
                            } finally {
                              _iterator17.f();
                            }
                            i = 0;
                          case 4:
                            if (!(i < ourId.length)) {
                              _context45.next = 13;
                              break;
                            }
                            if (!ourId.includes("".concat(myIndex))) {
                              _context45.next = 10;
                              break;
                            }
                            myIndex += 1;
                            i += 1;
                            _context45.next = 11;
                            break;
                          case 10:
                            return _context45.abrupt("break", 13);
                          case 11:
                            _context45.next = 4;
                            break;
                          case 13:
                          case "end":
                            return _context45.stop();
                        }
                      }, _callee45);
                    }));
                    return function (_x86) {
                      return _ref30.apply(this, arguments);
                    };
                  }());
                case 10:
                  queryService = db.collection('services');
                  _context48.next = 13;
                  return queryService.get().then(/*#__PURE__*/function () {
                    var _ref31 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee46(querySnapshot) {
                      var docs, _iterator18, _step18, doc;
                      return _regeneratorRuntime().wrap(function _callee46$(_context46) {
                        while (1) switch (_context46.prev = _context46.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator18 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                                doc = _step18.value;
                                if (doc.data().id == req.body.profession) {
                                  ifService = 1;
                                }
                              }
                            } catch (err) {
                              _iterator18.e(err);
                            } finally {
                              _iterator18.f();
                            }
                          case 3:
                          case "end":
                            return _context46.stop();
                        }
                      }, _callee46);
                    }));
                    return function (_x87) {
                      return _ref31.apply(this, arguments);
                    };
                  }());
                case 13:
                  if (ifService == 1) {
                    createUserWithEmailAndPassword(auth, email, password).then(function (userCredential) {
                      sendEmailVerification(auth.currentUser).then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
                        var dataUser, email;
                        return _regeneratorRuntime().wrap(function _callee47$(_context47) {
                          while (1) switch (_context47.prev = _context47.next) {
                            case 0:
                              _context47.next = 2;
                              return db.collection('users').doc("".concat(myIndex)).create({
                                nom: req.body.nom,
                                email: req.body.email,
                                prenom: req.body.prenom,
                                adresse: req.body.adresse,
                                profession: req.body.profession,
                                telephone: req.boby.telephone,
                                note: 0,
                                nombreEff: 0,
                                statut: "Technicien",
                                dateInscrip: Date.now()
                              });
                            case 2:
                              dataUser = res.locals;
                              email = JSON.parse(JSON.stringify(dataUser))['datauser'].email;
                              console.log("Technician'email", req.body.email, "added by admin'email", email, "à ", maDate.toUTCString());
                              res.status(200).json({
                                message: "Verification email sent! User created successfully!"
                              });
                            case 6:
                            case "end":
                              return _context47.stop();
                          }
                        }, _callee47);
                      })))["catch"](function (error) {
                        console.error(error);
                        res.status(500).json({
                          error: "Error sending email verification"
                        });
                      });
                    })["catch"](function (error) {
                      var errorMessage = error.message || "An error occurred while registering user";
                      res.status(500).json({
                        error: errorMessage
                      });
                    });
                  } else {
                    res.status(401).json("Service not available !!");
                  }
                  _context48.next = 20;
                  break;
                case 16:
                  _context48.prev = 16;
                  _context48.t0 = _context48["catch"](0);
                  console.log(_context48.t0);
                  res.status(500).json(_context48.t0);
                case 20:
                case "end":
                  return _context48.stop();
              }
            }, _callee48, null, [[0, 16]]);
          }))();
        case 1:
        case "end":
          return _context49.stop();
      }
    }, _callee49);
  }));
  return _addProfes.apply(this, arguments);
}
function updateProfes(_x39, _x40) {
  return _updateProfes.apply(this, arguments);
} //delete a professional by admin
function _updateProfes() {
  _updateProfes = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee53(req, res) {
    return _regeneratorRuntime().wrap(function _callee53$(_context53) {
      while (1) switch (_context53.prev = _context53.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
            var if_exist, isProfession, nom_tech, telephone, prenom_tech, profession_tech, idTec, adresse, note, nombreEff, statut, dateInscrip, query;
            return _regeneratorRuntime().wrap(function _callee52$(_context52) {
              while (1) switch (_context52.prev = _context52.next) {
                case 0:
                  //const salt = await bcrypt.genSalt(10);

                  email_tech = req.params.email_tech;
                  if_exist = 0;
                  isProfession = 0;
                  _context52.prev = 3;
                  query = db.collection('users');
                  _context52.next = 7;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref34 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee51(querySnapshot) {
                      var docs, _iterator19, _step19, doc, querySer, _dataUser, email;
                      return _regeneratorRuntime().wrap(function _callee51$(_context51) {
                        while (1) switch (_context51.prev = _context51.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator19 = _createForOfIteratorHelper(docs);
                            _context51.prev = 2;
                            _iterator19.s();
                          case 4:
                            if ((_step19 = _iterator19.n()).done) {
                              _context51.next = 27;
                              break;
                            }
                            doc = _step19.value;
                            if (!(doc.data().email == email_tech)) {
                              _context51.next = 25;
                              break;
                            }
                            if (!(doc.data().statut == "Technicien")) {
                              _context51.next = 25;
                              break;
                            }
                            if_exist = 1;
                            idTec = doc.id;
                            adresse = req.body.adresse ? req.body.adresse : doc.data().adresse;
                            telephone = req.body.telephone ? req.body.telephone : doc.data().telephone;
                            statut = doc.data().statut;
                            dateInscrip = doc.data().dateInscrip;
                            note = doc.data().note;
                            nom_tech = req.body.nom ? req.body.nom : doc.data().nom;
                            prenom_tech = req.body.prenom ? req.body.prenom : doc.data().prenom;
                            nombreEff = doc.data().nombreEff;
                            if (req.body.profession) {
                              _context51.next = 22;
                              break;
                            }
                            profession_tech = doc.data().profession;
                            _context51.next = 25;
                            break;
                          case 22:
                            querySer = db.collection('services');
                            _context51.next = 25;
                            return querySer.get().then(/*#__PURE__*/function () {
                              var _ref35 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee50(querySnapshot) {
                                var docs, _iterator20, _step20, _doc;
                                return _regeneratorRuntime().wrap(function _callee50$(_context50) {
                                  while (1) switch (_context50.prev = _context50.next) {
                                    case 0:
                                      docs = querySnapshot.docs;
                                      _iterator20 = _createForOfIteratorHelper(docs);
                                      try {
                                        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                                          _doc = _step20.value;
                                          if (_doc.data().nom == req.body.profession) {
                                            isProfession = 1;
                                            profession_tech = req.body.profession;
                                          }
                                        }
                                      } catch (err) {
                                        _iterator20.e(err);
                                      } finally {
                                        _iterator20.f();
                                      }
                                      if (isProfession == 0) {
                                        res.status(500).json({
                                          message: "service ".concat(req.body.profession, " not exists !!")
                                        });
                                      }
                                    case 4:
                                    case "end":
                                      return _context50.stop();
                                  }
                                }, _callee50);
                              }));
                              return function (_x89) {
                                return _ref35.apply(this, arguments);
                              };
                            }());
                          case 25:
                            _context51.next = 4;
                            break;
                          case 27:
                            _context51.next = 32;
                            break;
                          case 29:
                            _context51.prev = 29;
                            _context51.t0 = _context51["catch"](2);
                            _iterator19.e(_context51.t0);
                          case 32:
                            _context51.prev = 32;
                            _iterator19.f();
                            return _context51.finish(32);
                          case 35:
                            if (!(if_exist == 0)) {
                              _context51.next = 39;
                              break;
                            }
                            res.status(500).json("No profile you can update found ");
                            _context51.next = 45;
                            break;
                          case 39:
                            _context51.next = 41;
                            return db.collection('users').doc("".concat(idTec)).update({
                              nom: nom_tech,
                              prenom: prenom_tech,
                              email: email_tech,
                              profession: profession_tech,
                              note: note,
                              nombreEff: nombreEff,
                              statut: statut,
                              telephone: telephone,
                              dateInscrip: dateInscrip,
                              adresse: adresse

                              //
                            });
                          case 41:
                            _dataUser = res.locals;
                            email = JSON.parse(JSON.stringify(_dataUser))['datauser'].email;
                            console.log("Technician'email", email_tech, "updated by admin'email", email, "at", maDate.toUTCString());
                            res.status(200).json({
                              message: "User Updated Successfully"
                            });
                          case 45:
                          case "end":
                            return _context51.stop();
                        }
                      }, _callee51, null, [[2, 29, 32, 35]]);
                    }));
                    return function (_x88) {
                      return _ref34.apply(this, arguments);
                    };
                  }());
                case 7:
                  _context52.next = 13;
                  break;
                case 9:
                  _context52.prev = 9;
                  _context52.t0 = _context52["catch"](3);
                  console.log(_context52.t0);
                  res.status(500).json(_context52.t0);
                case 13:
                case "end":
                  return _context52.stop();
              }
            }, _callee52, null, [[3, 9]]);
          }))();
        case 1:
        case "end":
          return _context53.stop();
      }
    }, _callee53);
  }));
  return _updateProfes.apply(this, arguments);
}
function deleteProfes(_x41, _x42) {
  return _deleteProfes.apply(this, arguments);
} //List All Workers with a given nom servace available for a given dateTime
function _deleteProfes() {
  _deleteProfes = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee57(req, res) {
    return _regeneratorRuntime().wrap(function _callee57$(_context57) {
      while (1) switch (_context57.prev = _context57.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
            var email_tech, if_exist, idTec, query;
            return _regeneratorRuntime().wrap(function _callee56$(_context56) {
              while (1) switch (_context56.prev = _context56.next) {
                case 0:
                  //const salt = await bcrypt.genSalt(10);
                  email_tech = req.body.email_tech;
                  if (!email_tech) {
                    res.status(401).json('Email required');
                  }
                  if_exist = 0;
                  _context56.prev = 3;
                  query = db.collection('users');
                  _context56.next = 7;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref37 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee55(querySnapshot) {
                      var docs, _iterator21, _step21, doc;
                      return _regeneratorRuntime().wrap(function _callee55$(_context55) {
                        while (1) switch (_context55.prev = _context55.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator21 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                                doc = _step21.value;
                                if (doc.data().email == email_tech) {
                                  if (doc.data().statut == "Technicien") {
                                    if_exist = 1;
                                    idTec = doc.id;
                                  }
                                }
                              }
                            } catch (err) {
                              _iterator21.e(err);
                            } finally {
                              _iterator21.f();
                            }
                            if (if_exist == 1) {
                              admin.auth().getUserByEmail(email_tech).then(/*#__PURE__*/function () {
                                var _ref38 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee54(user) {
                                  var dataUser, email;
                                  return _regeneratorRuntime().wrap(function _callee54$(_context54) {
                                    while (1) switch (_context54.prev = _context54.next) {
                                      case 0:
                                        _context54.next = 2;
                                        return db.collection('users').doc("".concat(idTec))["delete"]();
                                      case 2:
                                        dataUser = res.locals;
                                        email = JSON.parse(JSON.stringify(dataUser))['datauser'].email;
                                        console.log("Technician'email", email_tech, "deleled by admin'email", email, "at", maDate.toUTCString());
                                        res.status(200).json({
                                          message: "User deleted Successfully"
                                        });
                                        return _context54.abrupt("return", admin.auth().deleteUser(user.uid));
                                      case 7:
                                      case "end":
                                        return _context54.stop();
                                    }
                                  }, _callee54);
                                }));
                                return function (_x91) {
                                  return _ref38.apply(this, arguments);
                                };
                              }());
                            } else {
                              res.status(500).json("Technician Profile  not found");
                            }
                          case 4:
                          case "end":
                            return _context55.stop();
                        }
                      }, _callee55);
                    }));
                    return function (_x90) {
                      return _ref37.apply(this, arguments);
                    };
                  }());
                case 7:
                  _context56.next = 13;
                  break;
                case 9:
                  _context56.prev = 9;
                  _context56.t0 = _context56["catch"](3);
                  console.log(_context56.t0);
                  res.status(500).json(_context56.t0);
                case 13:
                case "end":
                  return _context56.stop();
              }
            }, _callee56, null, [[3, 9]]);
          }))();
        case 1:
        case "end":
          return _context57.stop();
      }
    }, _callee57);
  }));
  return _deleteProfes.apply(this, arguments);
}
function allProfService(_x43, _x44) {
  return _allProfService.apply(this, arguments);
}
function _allProfService() {
  _allProfService = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee62(req, res) {
    return _regeneratorRuntime().wrap(function _callee62$(_context63) {
      while (1) switch (_context63.prev = _context63.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
            var available, i, nom_Service, tempsMini, id_service, serviceQuery, OurWokers, userQuery;
            return _regeneratorRuntime().wrap(function _callee61$(_context62) {
              while (1) switch (_context62.prev = _context62.next) {
                case 0:
                  _context62.prev = 0;
                  dataUser = res.locals;
                  i = 0;
                  id_service = req.params.id_service; //checking the service name First
                  serviceQuery = db.collection('services');
                  _context62.next = 7;
                  return serviceQuery.get().then(/*#__PURE__*/function () {
                    var _ref40 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee58(querySnapshot) {
                      var service_docs, _iterator22, _step22, doc_ser;
                      return _regeneratorRuntime().wrap(function _callee58$(_context58) {
                        while (1) switch (_context58.prev = _context58.next) {
                          case 0:
                            service_docs = querySnapshot.docs;
                            _iterator22 = _createForOfIteratorHelper(service_docs);
                            try {
                              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                                doc_ser = _step22.value;
                                if (doc_ser.data().id == id_service) {
                                  nom_Service = doc_ser.data().nom;
                                  tempsMini = doc_ser.data().tempsMini;
                                }
                              }
                            } catch (err) {
                              _iterator22.e(err);
                            } finally {
                              _iterator22.f();
                            }
                          case 3:
                          case "end":
                            return _context58.stop();
                        }
                      }, _callee58);
                    }));
                    return function (_x92) {
                      return _ref40.apply(this, arguments);
                    };
                  }());
                case 7:
                  OurWokers = [];
                  userQuery = db.collection('users');
                  _context62.next = 11;
                  return userQuery.get().then(/*#__PURE__*/function () {
                    var _ref41 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee60(querySnapshot) {
                      var docs, if_avai, _iterator23, _step23, _loop;
                      return _regeneratorRuntime().wrap(function _callee60$(_context61) {
                        while (1) switch (_context61.prev = _context61.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            if_avai = true;
                            _iterator23 = _createForOfIteratorHelper(docs);
                            _context61.prev = 3;
                            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                              var doc, reservationCheck;
                              return _regeneratorRuntime().wrap(function _loop$(_context60) {
                                while (1) switch (_context60.prev = _context60.next) {
                                  case 0:
                                    doc = _step23.value;
                                    if (!(doc.data().statut == "Technicien" && doc.data().profession == id_service)) {
                                      _context60.next = 10;
                                      break;
                                    }
                                    if (!req.query.dateTravaux) {
                                      _context60.next = 9;
                                      break;
                                    }
                                    reservationCheck = db.collection('Reservation');
                                    _context60.next = 6;
                                    return reservationCheck.get().then(/*#__PURE__*/function () {
                                      var _ref42 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee59(querySnapshot) {
                                        var techs, _iterator24, _step24, tec;
                                        return _regeneratorRuntime().wrap(function _callee59$(_context59) {
                                          while (1) switch (_context59.prev = _context59.next) {
                                            case 0:
                                              techs = querySnapshot.docs;
                                              _iterator24 = _createForOfIteratorHelper(techs);
                                              _context59.prev = 2;
                                              _iterator24.s();
                                            case 4:
                                              if ((_step24 = _iterator24.n()).done) {
                                                _context59.next = 15;
                                                break;
                                              }
                                              tec = _step24.value;
                                              if (!(tec.data().email_tech == doc.data().email && Math.abs(tec.data().dateTravaux - req.query.dateTravaux) < tempsMini)) {
                                                _context59.next = 12;
                                                break;
                                              }
                                              // var f=t.setSeconds(req.query.dateTravaux);
                                              //var d=t.setSeconds(tec.data().dateTravaux); 
                                              // console.log(`Day of date checking ${f} And day of reservation ${d}`)
                                              if_avai = false;
                                              available = [tec.data().dateTravaux - tempsMini, tec.data().dateTravaux + tempsMini];
                                              return _context59.abrupt("break", 15);
                                            case 12:
                                              //   console.log(`Absolue for reservation ${tec.id} est ${Math.abs(tec.data().dateTravaux-req.query.dateTravaux)}`)
                                              available = [0];
                                            case 13:
                                              _context59.next = 4;
                                              break;
                                            case 15:
                                              _context59.next = 20;
                                              break;
                                            case 17:
                                              _context59.prev = 17;
                                              _context59.t0 = _context59["catch"](2);
                                              _iterator24.e(_context59.t0);
                                            case 20:
                                              _context59.prev = 20;
                                              _iterator24.f();
                                              return _context59.finish(20);
                                            case 23:
                                            case "end":
                                              return _context59.stop();
                                          }
                                        }, _callee59, null, [[2, 17, 20, 23]]);
                                      }));
                                      return function (_x94) {
                                        return _ref42.apply(this, arguments);
                                      };
                                    }());
                                  case 6:
                                    //console.log(`Available for ,${doc.data().email}`);

                                    if (req.query.limit && req.query.limit < docs.length) {
                                      if (i < req.query.limit) {
                                        OurWokers.push({
                                          id: doc.id,
                                          nom: doc.data().nom,
                                          email: doc.data().email,
                                          prenom: doc.data().prenom,
                                          profession: doc.data().profession,
                                          nombreEff: doc.data().nombreEff,
                                          adresse: doc.data().adresse,
                                          note: doc.data().note,
                                          telephone: data().telephone,
                                          available: available
                                        });
                                        i += 1;
                                      }
                                    } else {
                                      OurWokers.push({
                                        id: doc.id,
                                        nom: doc.data().nom,
                                        email: doc.data().email,
                                        prenom: doc.data().prenom,
                                        profession: doc.data().profession,
                                        nombreEff: doc.data().nombreEff,
                                        adresse: doc.data().adresse,
                                        note: doc.data().note,
                                        telephone: doc.data().telephone,
                                        available: available
                                      });
                                    }
                                    _context60.next = 10;
                                    break;
                                  case 9:
                                    if (req.query.limit) {
                                      if (i < req.query.limit && req.query.limit < docs.length) {
                                        OurWokers.push({
                                          id: doc.id,
                                          nom: doc.data().nom,
                                          email: doc.data().email,
                                          prenom: doc.data().prenom,
                                          profession: doc.data().profession,
                                          nombreEff: doc.data().nombreEff,
                                          adresse: doc.data().adresse,
                                          note: doc.data().note,
                                          telephone: doc.data().telephone,
                                          available: available
                                        });
                                        i += 1;
                                      }
                                    } else {
                                      OurWokers.push({
                                        id: doc.id,
                                        nom: doc.data().nom,
                                        email: doc.data().email,
                                        prenom: doc.data().prenom,
                                        profession: doc.data().profession,
                                        nombreEff: doc.data().nombreEff,
                                        adresse: doc.data().adresse,
                                        note: doc.data().note,
                                        telephone: doc.data().telephone,
                                        available: available
                                      });
                                    }
                                  case 10:
                                  case "end":
                                    return _context60.stop();
                                }
                              }, _loop);
                            });
                            _iterator23.s();
                          case 6:
                            if ((_step23 = _iterator23.n()).done) {
                              _context61.next = 10;
                              break;
                            }
                            return _context61.delegateYield(_loop(), "t0", 8);
                          case 8:
                            _context61.next = 6;
                            break;
                          case 10:
                            _context61.next = 15;
                            break;
                          case 12:
                            _context61.prev = 12;
                            _context61.t1 = _context61["catch"](3);
                            _iterator23.e(_context61.t1);
                          case 15:
                            _context61.prev = 15;
                            _iterator23.f();
                            return _context61.finish(15);
                          case 18:
                          case "end":
                            return _context61.stop();
                        }
                      }, _callee60, null, [[3, 12, 15, 18]]);
                    }));
                    return function (_x93) {
                      return _ref41.apply(this, arguments);
                    };
                  }());
                case 11:
                  if (OurWokers.length == 0) {
                    res.status(200).json({
                      message: "No Technician found for ".concat(nom_Service)
                    });
                  } else {
                    res.status(200).json({
                      message: "Available Technicians list of service ".concat(nom_Service),
                      technicien: OurWokers.sort(function (a, b) {
                        return a.note < b.note ? 1 : -1 && a.available > b.available ? 1 : -1;
                      })
                    });
                  }
                  _context62.next = 18;
                  break;
                case 14:
                  _context62.prev = 14;
                  _context62.t0 = _context62["catch"](0);
                  console.log(_context62.t0);
                  return _context62.abrupt("return", res.status(500).json(_context62.t0));
                case 18:
                case "end":
                  return _context62.stop();
              }
            }, _callee61, null, [[0, 14]]);
          }))();
        case 1:
        case "end":
          return _context63.stop();
      }
    }, _callee62);
  }));
  return _allProfService.apply(this, arguments);
}
function addReservation(_x45, _x46) {
  return _addReservation.apply(this, arguments);
} //Read all Reservations by a admin user
function _addReservation() {
  _addReservation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee68(req, res) {
    return _regeneratorRuntime().wrap(function _callee68$(_context69) {
      while (1) switch (_context69.prev = _context69.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee67() {
            var ourId, myIndex, telephone_tech, prenom_tech, nom_tech, nom_service, service, Technicians, reservationTec;
            return _regeneratorRuntime().wrap(function _callee67$(_context68) {
              while (1) switch (_context68.prev = _context68.next) {
                case 0:
                  _context68.prev = 0;
                  ourId = [];
                  myIndex = 0;
                  service = db.collection("services");
                  _context68.next = 6;
                  return service.get().then(/*#__PURE__*/function () {
                    var _ref44 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee63(querySnapshot) {
                      var docs, _iterator25, _step25, doc;
                      return _regeneratorRuntime().wrap(function _callee63$(_context64) {
                        while (1) switch (_context64.prev = _context64.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator25 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                                doc = _step25.value;
                                if (doc.data().id == req.body.id_service) {
                                  nom_service = doc.data().nom;
                                }
                              }
                            } catch (err) {
                              _iterator25.e(err);
                            } finally {
                              _iterator25.f();
                            }
                          case 3:
                          case "end":
                            return _context64.stop();
                        }
                      }, _callee63);
                    }));
                    return function (_x95) {
                      return _ref44.apply(this, arguments);
                    };
                  }());
                case 6:
                  Technicians = db.collection("users");
                  _context68.next = 9;
                  return Technicians.get().then(/*#__PURE__*/function () {
                    var _ref45 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee64(querySnapshot) {
                      var docs, _iterator26, _step26, doc;
                      return _regeneratorRuntime().wrap(function _callee64$(_context65) {
                        while (1) switch (_context65.prev = _context65.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator26 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                                doc = _step26.value;
                                if (doc.data().email == req.body.email_tech) {
                                  email_tech = doc.data().email;
                                  telephone_tech = doc.data().telephone;
                                  prenom_tech = doc.data().prenom;
                                  nom_tech = doc.data().nom;
                                }
                              }
                            } catch (err) {
                              _iterator26.e(err);
                            } finally {
                              _iterator26.f();
                            }
                          case 3:
                          case "end":
                            return _context65.stop();
                        }
                      }, _callee64);
                    }));
                    return function (_x96) {
                      return _ref45.apply(this, arguments);
                    };
                  }());
                case 9:
                  reservationTec = db.collection("Reservation");
                  _context68.next = 12;
                  return reservationTec.get().then(/*#__PURE__*/function () {
                    var _ref46 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee66(querySnapshot) {
                      var docs, _iterator27, _step27, doc, i, maDate, OTPcode;
                      return _regeneratorRuntime().wrap(function _callee66$(_context67) {
                        while (1) switch (_context67.prev = _context67.next) {
                          case 0:
                            docs = querySnapshot.docs; //Check index avaible in Reservation Table
                            _iterator27 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                                doc = _step27.value;
                                ourId.push(doc.id);
                              }
                            } catch (err) {
                              _iterator27.e(err);
                            } finally {
                              _iterator27.f();
                            }
                            i = 0;
                          case 4:
                            if (!(i < ourId.length)) {
                              _context67.next = 13;
                              break;
                            }
                            if (!ourId.includes("".concat(myIndex))) {
                              _context67.next = 10;
                              break;
                            }
                            myIndex += 1;
                            i += 1;
                            _context67.next = 11;
                            break;
                          case 10:
                            return _context67.abrupt("break", 13);
                          case 11:
                            _context67.next = 4;
                            break;
                          case 13:
                            maDate = new Date();
                            OTPcode = db.collection("OTPcodeReservation");
                            _context67.next = 17;
                            return OTPcode.get().then(/*#__PURE__*/function () {
                              var _ref47 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee65(querySnapshot) {
                                var docs, ifcodeValide, _iterator28, _step28, doc, _dataUser2;
                                return _regeneratorRuntime().wrap(function _callee65$(_context66) {
                                  while (1) switch (_context66.prev = _context66.next) {
                                    case 0:
                                      docs = querySnapshot.docs;
                                      ifcodeValide = false;
                                      _iterator28 = _createForOfIteratorHelper(docs);
                                      try {
                                        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                                          doc = _step28.value;
                                          if (doc.id == req.query.otpcode) {
                                            //
                                            ifcodeValide = true;
                                          }
                                        }
                                      } catch (err) {
                                        _iterator28.e(err);
                                      } finally {
                                        _iterator28.f();
                                      }
                                      if (!(ifcodeValide == false)) {
                                        _context66.next = 8;
                                        break;
                                      }
                                      res.status(200).json({
                                        message: "You need a OTPcode valide to add a reservation"
                                      });
                                      _context66.next = 12;
                                      break;
                                    case 8:
                                      _dataUser2 = res.locals;
                                      _context66.next = 11;
                                      return db.collection('Reservation').doc("".concat(myIndex)).create({
                                        email_client: JSON.parse(JSON.stringify(_dataUser2))['datauser']['data'].email,
                                        telephone_client: JSON.parse(JSON.stringify(_dataUser2))['datauser']['data'].telephone,
                                        adresse_client: req.body.adresse ? req.body.adresse : JSON.parse(JSON.stringify(_dataUser2))['datauser']['data'].adresse,
                                        prenom_client: JSON.parse(JSON.stringify(_dataUser2))['datauser']['data'].prenom,
                                        nom_client: JSON.parse(JSON.stringify(_dataUser2))['datauser']['data'].nom,
                                        nom_service: nom_service,
                                        email_tech: req.body.email_tech,
                                        telephone_tech: telephone_tech,
                                        prenom_tech: prenom_tech,
                                        nom_tech: nom_tech,
                                        date: Date.now(),
                                        etat: "En cours",
                                        note: 0,
                                        avis: "",
                                        dateTravaux: req.body.dateTravaux,
                                        dateEff: 0
                                      });
                                    case 11:
                                      //await db.collection('OTPcodeReservation').doc(`${req.query.otpcode}`).delete();
                                      res.status(200).json({
                                        message: "Reservation added Successfully !!"
                                      });
                                    case 12:
                                    case "end":
                                      return _context66.stop();
                                  }
                                }, _callee65);
                              }));
                              return function (_x98) {
                                return _ref47.apply(this, arguments);
                              };
                            }());
                          case 17:
                          case "end":
                            return _context67.stop();
                        }
                      }, _callee66);
                    }));
                    return function (_x97) {
                      return _ref46.apply(this, arguments);
                    };
                  }());
                case 12:
                  _context68.next = 18;
                  break;
                case 14:
                  _context68.prev = 14;
                  _context68.t0 = _context68["catch"](0);
                  console.log(_context68.t0);
                  res.status(500).json(_context68.t0);
                case 18:
                case "end":
                  return _context68.stop();
              }
            }, _callee67, null, [[0, 14]]);
          }))();
        case 1:
        case "end":
          return _context69.stop();
      }
    }, _callee68);
  }));
  return _addReservation.apply(this, arguments);
}
function readReservation(_x47, _x48) {
  return _readReservation.apply(this, arguments);
} //Read all Reservations of a  customers by the owner
function _readReservation() {
  _readReservation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee70(req, res) {
    return _regeneratorRuntime().wrap(function _callee70$(_context71) {
      while (1) switch (_context71.prev = _context71.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee69() {
            var query, response, i;
            return _regeneratorRuntime().wrap(function _callee69$(_context70) {
              while (1) switch (_context70.prev = _context70.next) {
                case 0:
                  _context70.prev = 0;
                  query = db.collection('Reservation');
                  response = [];
                  i = 0;
                  _context70.next = 6;
                  return query.get().then(function (querySnapshot) {
                    var docs = querySnapshot.docs;
                    var _iterator29 = _createForOfIteratorHelper(docs),
                      _step29;
                    try {
                      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                        var doc = _step29.value;
                        var selectItem = {
                          data: doc.data()
                        };
                        if (req.query.limit) {
                          if (i < req.query.limit) {
                            response.push(selectItem);
                            i += 1;
                          }
                        } else {
                          response.push(selectItem);
                        }
                      }
                    } catch (err) {
                      _iterator29.e(err);
                    } finally {
                      _iterator29.f();
                    }
                    return response;
                  });
                case 6:
                  return _context70.abrupt("return", res.status(200).json(response.sort(function (a, b) {
                    return a.dateTravaux < b.dateTravaux ? 1 : -1;
                  })));
                case 9:
                  _context70.prev = 9;
                  _context70.t0 = _context70["catch"](0);
                  console.log(_context70.t0);
                  res.status(500).json(_context70.t0);
                case 13:
                case "end":
                  return _context70.stop();
              }
            }, _callee69, null, [[0, 9]]);
          }))();
        case 1:
        case "end":
          return _context71.stop();
      }
    }, _callee70);
  }));
  return _readReservation.apply(this, arguments);
}
function readReservationCustomer(_x49, _x50) {
  return _readReservationCustomer.apply(this, arguments);
} //Read all Reservations of a technician by the owner
function _readReservationCustomer() {
  _readReservationCustomer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee72(req, res) {
    return _regeneratorRuntime().wrap(function _callee72$(_context73) {
      while (1) switch (_context73.prev = _context73.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee71() {
            var i, _dataUser3, emailUser, query, response;
            return _regeneratorRuntime().wrap(function _callee71$(_context72) {
              while (1) switch (_context72.prev = _context72.next) {
                case 0:
                  _context72.prev = 0;
                  i = 0;
                  _dataUser3 = res.locals; //console.log(dataUser['datauser']['data']);
                  emailUser = JSON.parse(JSON.stringify(_dataUser3))['datauser']['data'].email;
                  query = db.collection('Reservation');
                  response = [];
                  _context72.next = 8;
                  return query.get().then(function (querySnapshot) {
                    var docs = querySnapshot.docs;
                    var _iterator30 = _createForOfIteratorHelper(docs),
                      _step30;
                    try {
                      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                        var doc = _step30.value;
                        if (doc.data().email_client == emailUser) {
                          var selectItem = {
                            data: doc.data()
                          };
                          if (req.query.limit) {
                            if (i < req.query.limit) {
                              response.push(selectItem);
                              i += 1;
                            }
                          } else {
                            response.push(selectItem);
                          }
                        }
                      }
                    } catch (err) {
                      _iterator30.e(err);
                    } finally {
                      _iterator30.f();
                    }
                    return response;
                  });
                case 8:
                  if (response.length == 0) {
                    res.status(500).json("You have no reservation for yet");
                  } else {
                    res.status(200).json(response.sort(function (a, b) {
                      return a.dateTravaux < b.dateTravaux ? 1 : -1;
                    }));
                  }
                  _context72.next = 15;
                  break;
                case 11:
                  _context72.prev = 11;
                  _context72.t0 = _context72["catch"](0);
                  console.log(_context72.t0);
                  res.status(500).json(_context72.t0);
                case 15:
                case "end":
                  return _context72.stop();
              }
            }, _callee71, null, [[0, 11]]);
          }))();
        case 1:
        case "end":
          return _context73.stop();
      }
    }, _callee72);
  }));
  return _readReservationCustomer.apply(this, arguments);
}
function readReservationTech(_x51, _x52) {
  return _readReservationTech.apply(this, arguments);
}
function _readReservationTech() {
  _readReservationTech = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee74(req, res) {
    return _regeneratorRuntime().wrap(function _callee74$(_context75) {
      while (1) switch (_context75.prev = _context75.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee73() {
            var i, _dataUser4, emailTec, query, response;
            return _regeneratorRuntime().wrap(function _callee73$(_context74) {
              while (1) switch (_context74.prev = _context74.next) {
                case 0:
                  _context74.prev = 0;
                  i = 0;
                  _dataUser4 = res.locals;
                  emailTec = JSON.parse(JSON.stringify(_dataUser4))['datauser']['data'].email;
                  query = db.collection('Reservation');
                  response = [];
                  _context74.next = 8;
                  return query.get().then(function (querySnapshot) {
                    var docs = querySnapshot.docs;
                    var _iterator31 = _createForOfIteratorHelper(docs),
                      _step31;
                    try {
                      for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                        var doc = _step31.value;
                        if (doc.data().email_tech == emailTec) {
                          var selectItem = {
                            data: doc.data()
                          };
                          if (req.query.limit) {
                            if (i < req.query.limit) {
                              response.push(selectItem);
                              i += 1;
                            }
                          } else {
                            response.push(selectItem);
                          }
                        }
                      }
                    } catch (err) {
                      _iterator31.e(err);
                    } finally {
                      _iterator31.f();
                    }
                    return response;
                  });
                case 8:
                  if (response.length == 0) {
                    res.status(500).json("You have no reservation for yet");
                  } else {
                    res.status(200).json(response.sort(function (a, b) {
                      return a.dateTravaux < b.dateTravaux ? 1 : -1;
                    }));
                  }
                  _context74.next = 15;
                  break;
                case 11:
                  _context74.prev = 11;
                  _context74.t0 = _context74["catch"](0);
                  console.log(_context74.t0);
                  res.status(500).json(_context74.t0);
                case 15:
                case "end":
                  return _context74.stop();
              }
            }, _callee73, null, [[0, 11]]);
          }))();
        case 1:
        case "end":
          return _context75.stop();
      }
    }, _callee74);
  }));
  return _readReservationTech.apply(this, arguments);
}
function readAReservation(_x53, _x54) {
  return _readAReservation.apply(this, arguments);
} //Update a specific reservation based on client
function _readAReservation() {
  _readAReservation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee77(req, res) {
    return _regeneratorRuntime().wrap(function _callee77$(_context78) {
      while (1) switch (_context78.prev = _context78.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee76() {
            var data, query;
            return _regeneratorRuntime().wrap(function _callee76$(_context77) {
              while (1) switch (_context77.prev = _context77.next) {
                case 0:
                  _context77.prev = 0;
                  query = db.collection('Reservation');
                  _context77.next = 4;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref52 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee75(querySnapshot) {
                      var docs, somme, _iterator32, _step32, doc;
                      return _regeneratorRuntime().wrap(function _callee75$(_context76) {
                        while (1) switch (_context76.prev = _context76.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            somme = 0;
                            _iterator32 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                                doc = _step32.value;
                                if (doc.id == req.params.id) {
                                  somme += 1;
                                  data = doc.data();
                                }
                              }
                            } catch (err) {
                              _iterator32.e(err);
                            } finally {
                              _iterator32.f();
                            }
                            if (somme == 0) {
                              res.json({
                                message: "Reservation with this id not found !!"
                              });
                            } else {
                              res.status(200).json({
                                message: "Reservation found Successfully!!",
                                Info: data
                              });
                            }
                          case 5:
                          case "end":
                            return _context76.stop();
                        }
                      }, _callee75);
                    }));
                    return function (_x99) {
                      return _ref52.apply(this, arguments);
                    };
                  }());
                case 4:
                  _context77.next = 10;
                  break;
                case 6:
                  _context77.prev = 6;
                  _context77.t0 = _context77["catch"](0);
                  console.log(_context77.t0);
                  res.status(500).json(_context77.t0);
                case 10:
                case "end":
                  return _context77.stop();
              }
            }, _callee76, null, [[0, 6]]);
          }))();
        case 1:
        case "end":
          return _context78.stop();
      }
    }, _callee77);
  }));
  return _readAReservation.apply(this, arguments);
}
function updateReservationCustomer(_x55, _x56) {
  return _updateReservationCustomer.apply(this, arguments);
} //Update a specific reservation based on client by admin
function _updateReservationCustomer() {
  _updateReservationCustomer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee81(req, res) {
    return _regeneratorRuntime().wrap(function _callee81$(_context82) {
      while (1) switch (_context82.prev = _context82.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee80() {
            var emailCusto, tempsMini, query, nombre_cl, date, dateTravaux_update, telephone_client, prenom_client, prenom_tech, adresse_client, nom_client, email_tech, telephone_tech, nom_tech, etat, note, avis, nom_service, if_avai, available;
            return _regeneratorRuntime().wrap(function _callee80$(_context81) {
              while (1) switch (_context81.prev = _context81.next) {
                case 0:
                  _context81.prev = 0;
                  dataUser = res.locals;
                  emailCusto = JSON.parse(JSON.stringify(dataUser))['datauser']['data'].email;
                  tempsMini = 0;
                  query = db.collection('Reservation');
                  nombre_cl = 0;
                  if_avai = true;
                  available = [];
                  _context81.next = 10;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref54 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee79(querySnapshot) {
                      var docs, _iterator33, _step33, doc, queyrSer;
                      return _regeneratorRuntime().wrap(function _callee79$(_context80) {
                        while (1) switch (_context80.prev = _context80.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator33 = _createForOfIteratorHelper(docs);
                            _context80.prev = 2;
                            _iterator33.s();
                          case 4:
                            if ((_step33 = _iterator33.n()).done) {
                              _context80.next = 34;
                              break;
                            }
                            doc = _step33.value;
                            if (!(doc.id == req.params.id)) {
                              _context80.next = 32;
                              break;
                            }
                            nombre_cl += 1;
                            if (!(emailCusto == doc.data().email_client)) {
                              _context80.next = 32;
                              break;
                            }
                            date = doc.data().date;
                            email_client = doc.data().email_client, telephone_client = doc.data().telephone_client, adresse_client = req.body.adresse ? req.body.adresse : doc.data().adresse_client, prenom_client = doc.data().prenom_tech;
                            nom_client = doc.data().nom_client;
                            nom_service = doc.data().nom_service;
                            email_tech = doc.data().email_tech;
                            telephone_tech = doc.data().telephone_tech;
                            prenom_tech = doc.data().prenom_tech;
                            nom_tech = doc.data().nom_tech;
                            etat = doc.data().etat;
                            note = doc.data().note;
                            avis = doc.data().avis;
                            dateEff = "";
                            dateTravaux_update = req.body.dateTravaux ? req.body.dateTravaux : doc.data().dateTravaux;
                            //Checking the maximal time for the service name
                            queyrSer = db.collection('services');
                            _context80.next = 25;
                            return queyrSer.get().then(/*#__PURE__*/function () {
                              var _ref55 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee78(querySnapshot) {
                                var docs_services, _iterator34, _step34, doc_ser;
                                return _regeneratorRuntime().wrap(function _callee78$(_context79) {
                                  while (1) switch (_context79.prev = _context79.next) {
                                    case 0:
                                      docs_services = querySnapshot.docs;
                                      _iterator34 = _createForOfIteratorHelper(docs_services);
                                      try {
                                        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                                          doc_ser = _step34.value;
                                          if (doc_ser.data().nom == nom_service) {
                                            tempsMini = doc_ser.data().tempsMini;
                                          }
                                        }
                                      } catch (err) {
                                        _iterator34.e(err);
                                      } finally {
                                        _iterator34.f();
                                      }
                                    case 3:
                                    case "end":
                                      return _context79.stop();
                                  }
                                }, _callee78);
                              }));
                              return function (_x101) {
                                return _ref55.apply(this, arguments);
                              };
                            }());
                          case 25:
                            if (!(Math.abs(doc.data().dateTravaux - req.body.dateTravaux) < tempsMini)) {
                              _context80.next = 31;
                              break;
                            }
                            if_avai = false;
                            available = [doc.data().dateTravaux - tempsMini, doc.data().dateTravaux + tempsMini];
                            return _context80.abrupt("break", 34);
                          case 31:
                            available = [0];
                          case 32:
                            _context80.next = 4;
                            break;
                          case 34:
                            _context80.next = 39;
                            break;
                          case 36:
                            _context80.prev = 36;
                            _context80.t0 = _context80["catch"](2);
                            _iterator33.e(_context80.t0);
                          case 39:
                            _context80.prev = 39;
                            _iterator33.f();
                            return _context80.finish(39);
                          case 42:
                            if (!(if_avai == false)) {
                              _context80.next = 46;
                              break;
                            }
                            res.status(500).json({
                              message: "For all the below interval datetime,your technician will not available",
                              Notavailable: available
                            });
                            _context80.next = 53;
                            break;
                          case 46:
                            if (!(nombre_cl == 0)) {
                              _context80.next = 50;
                              break;
                            }
                            res.status(500).json({
                              message: "Reservation not found !!"
                            });
                            _context80.next = 53;
                            break;
                          case 50:
                            _context80.next = 52;
                            return db.collection('Reservation').doc("".concat(req.params.id)).update({
                              email_client: email_client,
                              telephone_client: telephone_client,
                              adresse_client: adresse_client,
                              prenom_client: prenom_client,
                              nom_client: nom_client,
                              nom_service: nom_service,
                              email_tech: email_tech,
                              telephone_tech: telephone_tech,
                              prenom_tech: prenom_tech,
                              nom_tech: nom_tech,
                              date: date,
                              etat: etat,
                              note: note,
                              avis: avis,
                              dateTravaux: dateTravaux_update,
                              dateEff: 0
                            });
                          case 52:
                            res.status(200).json({
                              message: "Reservation update"
                            });
                          case 53:
                          case "end":
                            return _context80.stop();
                        }
                      }, _callee79, null, [[2, 36, 39, 42]]);
                    }));
                    return function (_x100) {
                      return _ref54.apply(this, arguments);
                    };
                  }());
                case 10:
                  _context81.next = 16;
                  break;
                case 12:
                  _context81.prev = 12;
                  _context81.t0 = _context81["catch"](0);
                  console.log(_context81.t0);
                  res.status(500).json(_context81.t0);
                case 16:
                case "end":
                  return _context81.stop();
              }
            }, _callee80, null, [[0, 12]]);
          }))();
        case 1:
        case "end":
          return _context82.stop();
      }
    }, _callee81);
  }));
  return _updateReservationCustomer.apply(this, arguments);
}
function updateReservationAdmin(_x57, _x58) {
  return _updateReservationAdmin.apply(this, arguments);
}
function _updateReservationAdmin() {
  _updateReservationAdmin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee86(req, res) {
    return _regeneratorRuntime().wrap(function _callee86$(_context87) {
      while (1) switch (_context87.prev = _context87.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee85() {
            var emailAdmin, email_Technicien, if_avai, available, query, nombre_cl, date, dateTravaux, tempsMini, telephone_client, prenom_client, prenom_tech_new, adresse_client, nom_client, email_client, email_tech_new, telephone_tech_new, nom_tech_new, etat, note, avis, nom_service, Users;
            return _regeneratorRuntime().wrap(function _callee85$(_context86) {
              while (1) switch (_context86.prev = _context86.next) {
                case 0:
                  _context86.prev = 0;
                  dataUser = res.locals;
                  emailAdmin = JSON.parse(JSON.stringify(dataUser))['datauser'].email;
                  email_Technicien = req.body.email_tech_old;
                  if_avai = true;
                  available = [];
                  query = db.collection('Reservation');
                  nombre_cl = 0, email_tech_new = req.body.email_Technicien_new; //Extrading new technician Informations
                  Users = db.collection('users');
                  _context86.next = 11;
                  return Users.get().then(/*#__PURE__*/function () {
                    var _ref57 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee82(querySnapshot) {
                      var docs, _iterator35, _step35, doc;
                      return _regeneratorRuntime().wrap(function _callee82$(_context83) {
                        while (1) switch (_context83.prev = _context83.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator35 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                                doc = _step35.value;
                                if (doc.data().email == req.body.email_tech_new) {
                                  prenom_tech_new = doc.data().prenom;
                                  nom_tech_new = doc.data().nom;
                                  telephone_tech_new = doc.data().telephone;
                                  email_tech_new = req.body.email_tech_new;
                                }
                              }
                            } catch (err) {
                              _iterator35.e(err);
                            } finally {
                              _iterator35.f();
                            }
                          case 3:
                          case "end":
                            return _context83.stop();
                        }
                      }, _callee82);
                    }));
                    return function (_x102) {
                      return _ref57.apply(this, arguments);
                    };
                  }());
                case 11:
                  _context86.next = 13;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref58 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee84(querySnapshot) {
                      var docs, _iterator36, _step36, doc, queyrSer;
                      return _regeneratorRuntime().wrap(function _callee84$(_context85) {
                        while (1) switch (_context85.prev = _context85.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator36 = _createForOfIteratorHelper(docs);
                            _context85.prev = 2;
                            _iterator36.s();
                          case 4:
                            if ((_step36 = _iterator36.n()).done) {
                              _context85.next = 19;
                              break;
                            }
                            doc = _step36.value;
                            if (doc.id == req.params.id) {
                              if (email_Technicien == doc.data().email_tech) {
                                nombre_cl += 1;
                                date = doc.data().date;
                                email_client = doc.data().email_client, telephone_client = doc.data().telephone_client ? doc.data().telephone_client : 770000077, adresse_client = doc.data().adresse_client, prenom_client = doc.data().prenom_client;
                                nom_client = doc.data().nom_client;
                                nom_service = doc.data().nom_service;
                                etat = doc.data().etat;
                                note = doc.data().note;
                                avis = doc.data().avis;
                                dateEff = "";
                                dateTravaux = doc.data().dateTravaux;
                              }
                            }
                            //Checking the maximal time for the service name
                            queyrSer = db.collection('services');
                            _context85.next = 10;
                            return queyrSer.get().then(/*#__PURE__*/function () {
                              var _ref59 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee83(querySnapshot) {
                                var docs_services, _iterator37, _step37, doc_ser;
                                return _regeneratorRuntime().wrap(function _callee83$(_context84) {
                                  while (1) switch (_context84.prev = _context84.next) {
                                    case 0:
                                      docs_services = querySnapshot.docs;
                                      _iterator37 = _createForOfIteratorHelper(docs_services);
                                      try {
                                        for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                                          doc_ser = _step37.value;
                                          if (doc_ser.data().nom == nom_service) {
                                            tempsMini = doc_ser.data().tempsMini;
                                          }
                                        }
                                      } catch (err) {
                                        _iterator37.e(err);
                                      } finally {
                                        _iterator37.f();
                                      }
                                    case 3:
                                    case "end":
                                      return _context84.stop();
                                  }
                                }, _callee83);
                              }));
                              return function (_x104) {
                                return _ref59.apply(this, arguments);
                              };
                            }());
                          case 10:
                            if (!(doc.data().email_tech == email_tech_new && Math.abs(doc.data().dateTravaux - dateTravaux) < tempsMini)) {
                              _context85.next = 16;
                              break;
                            }
                            if_avai = false;
                            available = [doc.data().dateTravaux - tempsMini, doc.data().dateTravaux + tempsMini];
                            return _context85.abrupt("break", 19);
                          case 16:
                            available = [0];
                          case 17:
                            _context85.next = 4;
                            break;
                          case 19:
                            _context85.next = 24;
                            break;
                          case 21:
                            _context85.prev = 21;
                            _context85.t0 = _context85["catch"](2);
                            _iterator36.e(_context85.t0);
                          case 24:
                            _context85.prev = 24;
                            _iterator36.f();
                            return _context85.finish(24);
                          case 27:
                            if (!(if_avai == false)) {
                              _context85.next = 31;
                              break;
                            }
                            res.status(500).json({
                              message: "This technician is not available for this date"
                            });
                            _context85.next = 38;
                            break;
                          case 31:
                            if (!(nombre_cl == 0)) {
                              _context85.next = 35;
                              break;
                            }
                            res.status(500).json({
                              message: "A Reservation for this technician not found !!"
                            });
                            _context85.next = 38;
                            break;
                          case 35:
                            _context85.next = 37;
                            return db.collection('Reservation').doc("".concat(req.params.id)).update({
                              email_client: email_client,
                              telephone_client: telephone_client,
                              adresse_client: adresse_client,
                              prenom_client: prenom_client,
                              nom_client: nom_client,
                              nom_service: nom_service,
                              email_tech: email_tech_new,
                              telephone_tech: telephone_tech_new,
                              prenom_tech: prenom_tech_new,
                              nom_tech: nom_tech_new,
                              date: date,
                              etat: etat,
                              note: note,
                              avis: avis,
                              dateTravaux: dateTravaux,
                              dateEff: 0
                            });
                          case 37:
                            res.status(200).json({
                              message: "Reservation update"
                            });
                          case 38:
                          case "end":
                            return _context85.stop();
                        }
                      }, _callee84, null, [[2, 21, 24, 27]]);
                    }));
                    return function (_x103) {
                      return _ref58.apply(this, arguments);
                    };
                  }());
                case 13:
                  _context86.next = 19;
                  break;
                case 15:
                  _context86.prev = 15;
                  _context86.t0 = _context86["catch"](0);
                  console.log(_context86.t0);
                  res.status(500).json(_context86.t0);
                case 19:
                case "end":
                  return _context86.stop();
              }
            }, _callee85, null, [[0, 15]]);
          }))();
        case 1:
        case "end":
          return _context87.stop();
      }
    }, _callee86);
  }));
  return _updateReservationAdmin.apply(this, arguments);
}
function finalizerReservation(_x59, _x60) {
  return _finalizerReservation.apply(this, arguments);
} //CREATE STORING CHOICE USER FUNCTION
function _finalizerReservation() {
  _finalizerReservation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee90(req, res) {
    return _regeneratorRuntime().wrap(function _callee90$(_context91) {
      while (1) switch (_context91.prev = _context91.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee89() {
            var emailCusto, query, nombre_cl, date, dateTravaux, telephone_client, prenom_client, prenom_tech, adresse_client, nom_client, email_tech, telephone_tech, nom_tech, etat, note, avis, nom_service, note_tech, nombreEff, email_Technicien, note_Technicien;
            return _regeneratorRuntime().wrap(function _callee89$(_context90) {
              while (1) switch (_context90.prev = _context90.next) {
                case 0:
                  _context90.prev = 0;
                  dataUser = res.locals;
                  emailCusto = JSON.parse(JSON.stringify(dataUser))['datauser']['data'].email;
                  query = db.collection('Reservation');
                  nombre_cl = 0, email_tech = req.body.email_Technicien_;
                  _context90.next = 7;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref61 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee88(querySnapshot) {
                      var docs, _iterator38, _step38, doc, _maDate2, userQuery, total;
                      return _regeneratorRuntime().wrap(function _callee88$(_context89) {
                        while (1) switch (_context89.prev = _context89.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator38 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                                doc = _step38.value;
                                if (doc.id == req.params.id) {
                                  if (emailCusto == doc.data().email_client) {
                                    nombre_cl += 1;
                                    date = doc.data().date;
                                    email_client = doc.data().email_client, adresse_client = doc.data().adresse_client;
                                    telephone_client = doc.data().telephone_client, prenom_client = doc.data().prenom_tech;
                                    nom_client = doc.data().nom_client;
                                    nom_service = doc.data().nom_service;
                                    email_tech = doc.data().email_tech;
                                    telephone_tech = doc.data().telephone_tech;
                                    prenom_tech = doc.data().prenom_tech;
                                    nom_tech = doc.data().nom_tech;
                                    dateEff = "";
                                    dateTravaux = doc.data().dateTravaux;
                                  }
                                }
                              }
                            } catch (err) {
                              _iterator38.e(err);
                            } finally {
                              _iterator38.f();
                            }
                            if (!(nombre_cl == 0)) {
                              _context89.next = 7;
                              break;
                            }
                            res.status(500).json({
                              message: "Reservation for you not found !!"
                            });
                            _context89.next = 17;
                            break;
                          case 7:
                            _maDate2 = new Date();
                            note = req.body.note ? req.body.note : 0;
                            avis = req.body.avis ? req.body.avis : "";
                            note_Technicien = note;
                            _context89.next = 13;
                            return db.collection('Reservation').doc("".concat(req.params.id)).update({
                              email_client: emailCusto,
                              telephone_client: telephone_client,
                              adresse_client: adresse_client,
                              prenom_client: prenom_client,
                              nom_client: nom_client,
                              nom_service: nom_service,
                              email_tech: email_tech,
                              telephone_tech: telephone_tech,
                              prenom_tech: prenom_tech,
                              nom_tech: nom_tech,
                              date: date,
                              etat: "Effectué",
                              note: note,
                              avis: avis,
                              dateTravaux: dateTravaux,
                              dateEff: _maDate2
                            });
                          case 13:
                            console.log("The customer'email", emailCusto, "comfirmed the realization for the reservation by ", email_Technicien);
                            userQuery = db.collection('users');
                            _context89.next = 17;
                            return userQuery.get().then(/*#__PURE__*/function () {
                              var _ref62 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee87(querySnapshoTT) {
                                var docs_tech, _iterator39, _step39, doc_tech;
                                return _regeneratorRuntime().wrap(function _callee87$(_context88) {
                                  while (1) switch (_context88.prev = _context88.next) {
                                    case 0:
                                      docs_tech = querySnapshoTT.docs;
                                      _iterator39 = _createForOfIteratorHelper(docs_tech);
                                      _context88.prev = 2;
                                      _iterator39.s();
                                    case 4:
                                      if ((_step39 = _iterator39.n()).done) {
                                        _context88.next = 14;
                                        break;
                                      }
                                      doc_tech = _step39.value;
                                      if (!(doc_tech.data().email == email_Technicien)) {
                                        _context88.next = 12;
                                        break;
                                      }
                                      note_tech = doc_tech.data().note + note_Technicien;
                                      if (note == 0) {
                                        total = doc_tech.data().nombreEff;
                                      } else {
                                        total = doc_tech.data().nombreEff + 1;
                                      }
                                      nombreEff = doc_tech.data().nombreEff + 1;
                                      _context88.next = 12;
                                      return db.collection('users').doc("".concat(doc_tech.id)).update({
                                        nom: doc_tech.data().nom,
                                        prenom: doc_tech.data().prenom,
                                        email: doc_tech.data().email,
                                        adresse: doc_tech.data().adresse,
                                        profession: doc_tech.data().profession,
                                        note: note_tech / total,
                                        nombreEff: nombreEff,
                                        statut: doc_tech.data().statut,
                                        dateInscrip: doc_tech.data().dateInscrip
                                      });
                                    case 12:
                                      _context88.next = 4;
                                      break;
                                    case 14:
                                      _context88.next = 19;
                                      break;
                                    case 16:
                                      _context88.prev = 16;
                                      _context88.t0 = _context88["catch"](2);
                                      _iterator39.e(_context88.t0);
                                    case 19:
                                      _context88.prev = 19;
                                      _iterator39.f();
                                      return _context88.finish(19);
                                    case 22:
                                      res.status(200).json({
                                        message: "Reservation done"
                                      });
                                    case 23:
                                    case "end":
                                      return _context88.stop();
                                  }
                                }, _callee87, null, [[2, 16, 19, 22]]);
                              }));
                              return function (_x106) {
                                return _ref62.apply(this, arguments);
                              };
                            }());
                          case 17:
                          case "end":
                            return _context89.stop();
                        }
                      }, _callee88);
                    }));
                    return function (_x105) {
                      return _ref61.apply(this, arguments);
                    };
                  }());
                case 7:
                  _context90.next = 13;
                  break;
                case 9:
                  _context90.prev = 9;
                  _context90.t0 = _context90["catch"](0);
                  console.log(_context90.t0);
                  res.status(500).json(_context90.t0);
                case 13:
                case "end":
                  return _context90.stop();
              }
            }, _callee89, null, [[0, 9]]);
          }))();
        case 1:
        case "end":
          return _context91.stop();
      }
    }, _callee90);
  }));
  return _finalizerReservation.apply(this, arguments);
}
function storingChoice(_x61, _x62) {
  return _storingChoice.apply(this, arguments);
} //READ STORING CHOICE USER FUNCTION
function _storingChoice() {
  _storingChoice = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee93(req, res) {
    return _regeneratorRuntime().wrap(function _callee93$(_context94) {
      while (1) switch (_context94.prev = _context94.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee92() {
            var i, _dataUser5, service, technicien, datecommande, ifexist, emailuser, query;
            return _regeneratorRuntime().wrap(function _callee92$(_context93) {
              while (1) switch (_context93.prev = _context93.next) {
                case 0:
                  _context93.prev = 0;
                  i = 0;
                  _dataUser5 = res.locals;
                  service = "", technicien = "", datecommande = "", ifexist = false;
                  emailuser = JSON.parse(JSON.stringify(_dataUser5))['datauser']['data'].email;
                  query = db.collection('choice');
                  _context93.next = 8;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref64 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee91(querySnapshot) {
                      var docs, _iterator40, _step40, doc;
                      return _regeneratorRuntime().wrap(function _callee91$(_context92) {
                        while (1) switch (_context92.prev = _context92.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator40 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                                doc = _step40.value;
                                if (doc.id == emailuser) {
                                  ifexist = true;
                                  service = doc.data().service;
                                  technicien = doc.data().technicien;
                                  datecommande = doc.data().datecommande;
                                }
                              }
                            } catch (err) {
                              _iterator40.e(err);
                            } finally {
                              _iterator40.f();
                            }
                          case 3:
                          case "end":
                            return _context92.stop();
                        }
                      }, _callee91);
                    }));
                    return function (_x107) {
                      return _ref64.apply(this, arguments);
                    };
                  }());
                case 8:
                  if (!ifexist) {
                    _context93.next = 13;
                    break;
                  }
                  _context93.next = 11;
                  return db.collection('choice').doc("".concat(emailuser)).update({
                    service: req.body.service ? req.body.service : service,
                    technicien: req.body.technicien ? req.body.technicien : technicien,
                    datecommande: req.body.datecommande ? req.body.datecommande : datecommande
                  });
                case 11:
                  _context93.next = 15;
                  break;
                case 13:
                  _context93.next = 15;
                  return db.collection('choice').doc("".concat(emailuser)).create({
                    service: req.body.service ? req.body.service : service,
                    technicien: req.body.technicien ? req.body.technicien : technicien,
                    datecommande: req.body.datecommande ? req.body.datecommande : datecommande
                  });
                case 15:
                  res.status(200).json("save");
                  _context93.next = 22;
                  break;
                case 18:
                  _context93.prev = 18;
                  _context93.t0 = _context93["catch"](0);
                  console.log(_context93.t0);
                  res.status(500).json(_context93.t0);
                case 22:
                case "end":
                  return _context93.stop();
              }
            }, _callee92, null, [[0, 18]]);
          }))();
        case 1:
        case "end":
          return _context94.stop();
      }
    }, _callee93);
  }));
  return _storingChoice.apply(this, arguments);
}
function readChoice(_x63, _x64) {
  return _readChoice.apply(this, arguments);
} //DELETE STORING CHOICE USER FUNCTION
function _readChoice() {
  _readChoice = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee96(req, res) {
    return _regeneratorRuntime().wrap(function _callee96$(_context97) {
      while (1) switch (_context97.prev = _context97.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee95() {
            var i, _dataUser6, emailuser, query, data;
            return _regeneratorRuntime().wrap(function _callee95$(_context96) {
              while (1) switch (_context96.prev = _context96.next) {
                case 0:
                  _context96.prev = 0;
                  i = 0;
                  _dataUser6 = res.locals;
                  emailuser = JSON.parse(JSON.stringify(_dataUser6))['datauser']['data'].email;
                  query = db.collection('choice');
                  data = [];
                  _context96.next = 8;
                  return query.get().then(/*#__PURE__*/function () {
                    var _ref66 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee94(querySnapshot) {
                      var docs, _iterator41, _step41, doc;
                      return _regeneratorRuntime().wrap(function _callee94$(_context95) {
                        while (1) switch (_context95.prev = _context95.next) {
                          case 0:
                            docs = querySnapshot.docs;
                            _iterator41 = _createForOfIteratorHelper(docs);
                            try {
                              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                                doc = _step41.value;
                                if (doc.id == emailuser) {
                                  data.push(doc.data());
                                }
                              }
                            } catch (err) {
                              _iterator41.e(err);
                            } finally {
                              _iterator41.f();
                            }
                          case 3:
                          case "end":
                            return _context95.stop();
                        }
                      }, _callee94);
                    }));
                    return function (_x108) {
                      return _ref66.apply(this, arguments);
                    };
                  }());
                case 8:
                  res.status(200).json(data);
                  _context96.next = 15;
                  break;
                case 11:
                  _context96.prev = 11;
                  _context96.t0 = _context96["catch"](0);
                  console.log(_context96.t0);
                  res.status(500).json(_context96.t0);
                case 15:
                case "end":
                  return _context96.stop();
              }
            }, _callee95, null, [[0, 11]]);
          }))();
        case 1:
        case "end":
          return _context97.stop();
      }
    }, _callee96);
  }));
  return _readChoice.apply(this, arguments);
}
function deleteChoice(_x65, _x66) {
  return _deleteChoice.apply(this, arguments);
} //RASA PART 
function _deleteChoice() {
  _deleteChoice = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee98(req, res) {
    return _regeneratorRuntime().wrap(function _callee98$(_context99) {
      while (1) switch (_context99.prev = _context99.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee97() {
            var i, _dataUser7, emailuser;
            return _regeneratorRuntime().wrap(function _callee97$(_context98) {
              while (1) switch (_context98.prev = _context98.next) {
                case 0:
                  _context98.prev = 0;
                  i = 0;
                  _dataUser7 = res.locals;
                  emailuser = JSON.parse(JSON.stringify(_dataUser7))['datauser']['data'].email;
                  _context98.next = 6;
                  return db.collection('choice').doc("".concat(emailuser))["delete"]({});
                case 6:
                  res.status(200).json("delete");
                  _context98.next = 13;
                  break;
                case 9:
                  _context98.prev = 9;
                  _context98.t0 = _context98["catch"](0);
                  console.log(_context98.t0);
                  res.status(500).json(_context98.t0);
                case 13:
                case "end":
                  return _context98.stop();
              }
            }, _callee97, null, [[0, 9]]);
          }))();
        case 1:
        case "end":
          return _context99.stop();
      }
    }, _callee98);
  }));
  return _deleteChoice.apply(this, arguments);
}
var axios = require('axios');
function ResponseRasa(_x67, _x68) {
  return _ResponseRasa.apply(this, arguments);
}
function _ResponseRasa() {
  _ResponseRasa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee100(req, res) {
    return _regeneratorRuntime().wrap(function _callee100$(_context101) {
      while (1) switch (_context101.prev = _context101.next) {
        case 0:
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee99() {
            var RASA_SERVER_URL, message, response;
            return _regeneratorRuntime().wrap(function _callee99$(_context100) {
              while (1) switch (_context100.prev = _context100.next) {
                case 0:
                  _context100.prev = 0;
                  RASA_SERVER_URL = 'http://localhost:5005/webhooks/rest/webhook';
                  message = req.body.message; // Get message and sender ID from client
                  _context100.next = 5;
                  return axios.post(RASA_SERVER_URL, {
                    message: message
                  });
                case 5:
                  response = _context100.sent;
                  console.log(response.data);
                  res.json(response.data);
                  _context100.next = 14;
                  break;
                case 10:
                  _context100.prev = 10;
                  _context100.t0 = _context100["catch"](0);
                  console.error("Error connecting to Rasa:", _context100.t0.message);
                  res.status(500).json({
                    error: "Failed to connect to Rasa"
                  });
                case 14:
                case "end":
                  return _context100.stop();
              }
            }, _callee99, null, [[0, 10]]);
          }))();
        case 1:
        case "end":
          return _context101.stop();
      }
    }, _callee100);
  }));
  return _ResponseRasa.apply(this, arguments);
}
app.post('/chat', ResponseRasa);
app.post('/api/register', registerChecking, registerUser);
app.get('/api/login', login);
app.post('/api/logout', authentification, logoutUser);
app.post('/api/reset-password', resetPassword); //    "password":"Monpassword@123"
app.get('/api/read/users', authentification_admin, getAllusers);
app.get('/api/create/codeotp', authentification_superadmin, createOPT);
app.get('/api/create/codeotpreservation', authentification, createOPTreservation);
app.post("/api/create/service", authentification_admin, createService);
app.get("/api/read/services", getAllService);
app.post("/api/save", authentification, storingChoice);
app.get("/api/save", authentification, readChoice);
app["delete"]('/api/save', authentification, deleteChoice);
app.get("/api/search/service", searchService);
app.get("/api/search/users", searchUser);
app.get("/api/read/service/:id_service", getAservice);
app.put("/api/update/service/:id_service", authentification_admin, updateService);
app.post("/api/create/technicien", authentification_admin, addProfes);
app.put("/api/update/technicien/byadmin/:email_tech", authentification_admin, updateProfes);
app.get("/api/read/technicien/:id_service", authentification, allProfService);
//app.get('/api/read/technicien/:id_service',authentification,allProfServiceAvailable);
app.post("/api/create/reservation", authentification, addReservation);
app.get('/api/read/reservations', authentification_admin, readReservation);
app.get('/api/read/reservations/customer', authentification, readReservationCustomer);
app.get('/api/read/reservations/technician', authentification, readReservationTech);
app.get("/api/read/reservations/:id", authentification_admin, readAReservation);
app.put("/api/update/reservations/byclient/:id", authentification, updateReservationCustomer);
app.put("/api/update/reservations/:id", authentification_admin, updateReservationAdmin);
//app.get("/api/search/reservations",authentification_admin,researchReservation);
app.put("/api/finalizer/reservations/:id", authentification, finalizerReservation);
app["delete"]("/api/delete/user", authentification, deleteUser);
app["delete"]("/api/delete/prof/admin", authentification_admin, deleteProfes);
app["delete"]("/api/delete/service/:id_service", authentification_admin, deleteService);

/*app.listen(PORT, () => {
    console.log(`HTTP Server running on port ${PORT}`);
});*/

/* httpServer.listen(PORT, () => {
    console.log(`HTTP Server running on port ${PORT}`);
});
 */
httpsServer.listen(8000, function () {
  console.log('HTTPS Server running on port 8000');
});