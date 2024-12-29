// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1491){
var map__1492 = p__1491;
var map__1492__$1 = cljs.core.__destructure_map.call(null,map__1492);
var m = map__1492__$1;
var n = cljs.core.get.call(null,map__1492__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1493_1521 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1494_1522 = null;
var count__1495_1523 = (0);
var i__1496_1524 = (0);
while(true){
if((i__1496_1524 < count__1495_1523)){
var f_1525 = cljs.core._nth.call(null,chunk__1494_1522,i__1496_1524);
cljs.core.println.call(null,"  ",f_1525);


var G__1526 = seq__1493_1521;
var G__1527 = chunk__1494_1522;
var G__1528 = count__1495_1523;
var G__1529 = (i__1496_1524 + (1));
seq__1493_1521 = G__1526;
chunk__1494_1522 = G__1527;
count__1495_1523 = G__1528;
i__1496_1524 = G__1529;
continue;
} else {
var temp__5823__auto___1530 = cljs.core.seq.call(null,seq__1493_1521);
if(temp__5823__auto___1530){
var seq__1493_1531__$1 = temp__5823__auto___1530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1493_1531__$1)){
var c__5565__auto___1532 = cljs.core.chunk_first.call(null,seq__1493_1531__$1);
var G__1533 = cljs.core.chunk_rest.call(null,seq__1493_1531__$1);
var G__1534 = c__5565__auto___1532;
var G__1535 = cljs.core.count.call(null,c__5565__auto___1532);
var G__1536 = (0);
seq__1493_1521 = G__1533;
chunk__1494_1522 = G__1534;
count__1495_1523 = G__1535;
i__1496_1524 = G__1536;
continue;
} else {
var f_1537 = cljs.core.first.call(null,seq__1493_1531__$1);
cljs.core.println.call(null,"  ",f_1537);


var G__1538 = cljs.core.next.call(null,seq__1493_1531__$1);
var G__1539 = null;
var G__1540 = (0);
var G__1541 = (0);
seq__1493_1521 = G__1538;
chunk__1494_1522 = G__1539;
count__1495_1523 = G__1540;
i__1496_1524 = G__1541;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1542 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1542);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1542)))?cljs.core.second.call(null,arglists_1542):arglists_1542));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1497_1543 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1498_1544 = null;
var count__1499_1545 = (0);
var i__1500_1546 = (0);
while(true){
if((i__1500_1546 < count__1499_1545)){
var vec__1509_1547 = cljs.core._nth.call(null,chunk__1498_1544,i__1500_1546);
var name_1548 = cljs.core.nth.call(null,vec__1509_1547,(0),null);
var map__1512_1549 = cljs.core.nth.call(null,vec__1509_1547,(1),null);
var map__1512_1550__$1 = cljs.core.__destructure_map.call(null,map__1512_1549);
var doc_1551 = cljs.core.get.call(null,map__1512_1550__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1552 = cljs.core.get.call(null,map__1512_1550__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1548);

cljs.core.println.call(null," ",arglists_1552);

if(cljs.core.truth_(doc_1551)){
cljs.core.println.call(null," ",doc_1551);
} else {
}


var G__1553 = seq__1497_1543;
var G__1554 = chunk__1498_1544;
var G__1555 = count__1499_1545;
var G__1556 = (i__1500_1546 + (1));
seq__1497_1543 = G__1553;
chunk__1498_1544 = G__1554;
count__1499_1545 = G__1555;
i__1500_1546 = G__1556;
continue;
} else {
var temp__5823__auto___1557 = cljs.core.seq.call(null,seq__1497_1543);
if(temp__5823__auto___1557){
var seq__1497_1558__$1 = temp__5823__auto___1557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1497_1558__$1)){
var c__5565__auto___1559 = cljs.core.chunk_first.call(null,seq__1497_1558__$1);
var G__1560 = cljs.core.chunk_rest.call(null,seq__1497_1558__$1);
var G__1561 = c__5565__auto___1559;
var G__1562 = cljs.core.count.call(null,c__5565__auto___1559);
var G__1563 = (0);
seq__1497_1543 = G__1560;
chunk__1498_1544 = G__1561;
count__1499_1545 = G__1562;
i__1500_1546 = G__1563;
continue;
} else {
var vec__1513_1564 = cljs.core.first.call(null,seq__1497_1558__$1);
var name_1565 = cljs.core.nth.call(null,vec__1513_1564,(0),null);
var map__1516_1566 = cljs.core.nth.call(null,vec__1513_1564,(1),null);
var map__1516_1567__$1 = cljs.core.__destructure_map.call(null,map__1516_1566);
var doc_1568 = cljs.core.get.call(null,map__1516_1567__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1569 = cljs.core.get.call(null,map__1516_1567__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1565);

cljs.core.println.call(null," ",arglists_1569);

if(cljs.core.truth_(doc_1568)){
cljs.core.println.call(null," ",doc_1568);
} else {
}


var G__1570 = cljs.core.next.call(null,seq__1497_1558__$1);
var G__1571 = null;
var G__1572 = (0);
var G__1573 = (0);
seq__1497_1543 = G__1570;
chunk__1498_1544 = G__1571;
count__1499_1545 = G__1572;
i__1500_1546 = G__1573;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.call(null,"Spec");

var seq__1517 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1518 = null;
var count__1519 = (0);
var i__1520 = (0);
while(true){
if((i__1520 < count__1519)){
var role = cljs.core._nth.call(null,chunk__1518,i__1520);
var temp__5823__auto___1574__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___1574__$1)){
var spec_1575 = temp__5823__auto___1574__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1575));
} else {
}


var G__1576 = seq__1517;
var G__1577 = chunk__1518;
var G__1578 = count__1519;
var G__1579 = (i__1520 + (1));
seq__1517 = G__1576;
chunk__1518 = G__1577;
count__1519 = G__1578;
i__1520 = G__1579;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq.call(null,seq__1517);
if(temp__5823__auto____$1){
var seq__1517__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1517__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__1517__$1);
var G__1580 = cljs.core.chunk_rest.call(null,seq__1517__$1);
var G__1581 = c__5565__auto__;
var G__1582 = cljs.core.count.call(null,c__5565__auto__);
var G__1583 = (0);
seq__1517 = G__1580;
chunk__1518 = G__1581;
count__1519 = G__1582;
i__1520 = G__1583;
continue;
} else {
var role = cljs.core.first.call(null,seq__1517__$1);
var temp__5823__auto___1584__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___1584__$2)){
var spec_1585 = temp__5823__auto___1584__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1585));
} else {
}


var G__1586 = cljs.core.next.call(null,seq__1517__$1);
var G__1587 = null;
var G__1588 = (0);
var G__1589 = (0);
seq__1517 = G__1586;
chunk__1518 = G__1587;
count__1519 = G__1588;
i__1520 = G__1589;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5823__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5823__auto__)){
var msg = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5823__auto__)){
var ed = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1590 = cljs.core.conj.call(null,via,t);
var G__1591 = cljs.core.ex_cause.call(null,t);
via = G__1590;
t = G__1591;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5823__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5823__auto__)){
var root_msg = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5823__auto__)){
var data = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5823__auto__)){
var phase = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1594 = datafied_throwable;
var map__1594__$1 = cljs.core.__destructure_map.call(null,map__1594);
var via = cljs.core.get.call(null,map__1594__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1594__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1594__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1595 = cljs.core.last.call(null,via);
var map__1595__$1 = cljs.core.__destructure_map.call(null,map__1595);
var type = cljs.core.get.call(null,map__1595__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1595__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1595__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1596 = data;
var map__1596__$1 = cljs.core.__destructure_map.call(null,map__1596);
var problems = cljs.core.get.call(null,map__1596__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1596__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1596__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1597 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1597__$1 = cljs.core.__destructure_map.call(null,map__1597);
var top_data = map__1597__$1;
var source = cljs.core.get.call(null,map__1597__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1598 = phase;
var G__1598__$1 = (((G__1598 instanceof cljs.core.Keyword))?G__1598.fqn:null);
switch (G__1598__$1) {
case "read-source":
var map__1599 = data;
var map__1599__$1 = cljs.core.__destructure_map.call(null,map__1599);
var line = cljs.core.get.call(null,map__1599__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1599__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1600 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1600__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1600,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1600);
var G__1600__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1600__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1600__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1600__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1600__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1601 = top_data;
var G__1601__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1601,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1601);
var G__1601__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1601__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1601__$1);
var G__1601__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1601__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1601__$2);
var G__1601__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1601__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1601__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1601__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1601__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1602 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1602,(0),null);
var method = cljs.core.nth.call(null,vec__1602,(1),null);
var file = cljs.core.nth.call(null,vec__1602,(2),null);
var line = cljs.core.nth.call(null,vec__1602,(3),null);
var G__1605 = top_data;
var G__1605__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1605,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1605);
var G__1605__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1605__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1605__$1);
var G__1605__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.call(null,G__1605__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1605__$2);
var G__1605__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1605__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1605__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1605__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1605__$4;
}

break;
case "execution":
var vec__1606 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1606,(0),null);
var method = cljs.core.nth.call(null,vec__1606,(1),null);
var file = cljs.core.nth.call(null,vec__1606,(2),null);
var line = cljs.core.nth.call(null,vec__1606,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1593_SHARP_){
var or__5043__auto__ = (p1__1593_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1593_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__1609 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1609__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1609,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1609);
var G__1609__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1609__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1609__$1);
var G__1609__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1609__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1609__$2);
var G__1609__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1609__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1609__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1609__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1609__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1598__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1613){
var map__1614 = p__1613;
var map__1614__$1 = cljs.core.__destructure_map.call(null,map__1614);
var triage_data = map__1614__$1;
var phase = cljs.core.get.call(null,map__1614__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1614__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1614__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1614__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1614__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1614__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1614__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1614__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1615 = phase;
var G__1615__$1 = (((G__1615 instanceof cljs.core.Keyword))?G__1615.fqn:null);
switch (G__1615__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1616_1625 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1617_1626 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1618_1627 = true;
var _STAR_print_fn_STAR__temp_val__1619_1628 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1618_1627);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1619_1628);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1611_SHARP_){
return cljs.core.dissoc.call(null,p1__1611_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1617_1626);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1616_1625);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1620_1629 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1621_1630 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1622_1631 = true;
var _STAR_print_fn_STAR__temp_val__1623_1632 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1622_1631);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1623_1632);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1612_SHARP_){
return cljs.core.dissoc.call(null,p1__1612_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1621_1630);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1620_1629);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1615__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
