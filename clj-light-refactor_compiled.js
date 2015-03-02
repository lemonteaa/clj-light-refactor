if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.artifact-version')) {
goog.provide('lt.plugins.cljrefactor.artifact_version');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.artifact_version.select_item = (function select_item(idx,item){var e__11957__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),item,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),item], null));var seq__12064_12092 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12065_12093 = null;var count__12066_12094 = 0;var i__12067_12095 = 0;while(true){
if((i__12067_12095 < count__12066_12094))
{var vec__12068_12096 = cljs.core._nth.call(null,chunk__12065_12093,i__12067_12095);var ev__11958__auto___12097 = cljs.core.nth.call(null,vec__12068_12096,0,null);var func__11959__auto___12098 = cljs.core.nth.call(null,vec__12068_12096,1,null);lt.util.dom.on.call(null,e__11957__auto__,ev__11958__auto___12097,func__11959__auto___12098);
{
var G__12099 = seq__12064_12092;
var G__12100 = chunk__12065_12093;
var G__12101 = count__12066_12094;
var G__12102 = (i__12067_12095 + 1);
seq__12064_12092 = G__12099;
chunk__12065_12093 = G__12100;
count__12066_12094 = G__12101;
i__12067_12095 = G__12102;
continue;
}
} else
{var temp__4092__auto___12103 = cljs.core.seq.call(null,seq__12064_12092);if(temp__4092__auto___12103)
{var seq__12064_12104__$1 = temp__4092__auto___12103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12064_12104__$1))
{var c__11308__auto___12105 = cljs.core.chunk_first.call(null,seq__12064_12104__$1);{
var G__12106 = cljs.core.chunk_rest.call(null,seq__12064_12104__$1);
var G__12107 = c__11308__auto___12105;
var G__12108 = cljs.core.count.call(null,c__11308__auto___12105);
var G__12109 = 0;
seq__12064_12092 = G__12106;
chunk__12065_12093 = G__12107;
count__12066_12094 = G__12108;
i__12067_12095 = G__12109;
continue;
}
} else
{var vec__12069_12110 = cljs.core.first.call(null,seq__12064_12104__$1);var ev__11958__auto___12111 = cljs.core.nth.call(null,vec__12069_12110,0,null);var func__11959__auto___12112 = cljs.core.nth.call(null,vec__12069_12110,1,null);lt.util.dom.on.call(null,e__11957__auto__,ev__11958__auto___12111,func__11959__auto___12112);
{
var G__12113 = cljs.core.next.call(null,seq__12064_12104__$1);
var G__12114 = null;
var G__12115 = 0;
var G__12116 = 0;
seq__12064_12092 = G__12113;
chunk__12065_12093 = G__12114;
count__12066_12094 = G__12115;
i__12067_12095 = G__12116;
continue;
}
}
} else
{}
}
break;
}
return e__11957__auto__;
});
lt.plugins.cljrefactor.artifact_version.select_form = (function select_form(this$,items){var e__11957__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.artifact-versions","div.artifact-versions",2029510539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,lt.plugins.cljrefactor.artifact_version.select_item,items)], null)], null));var seq__12076_12117 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12077_12118 = null;var count__12078_12119 = 0;var i__12079_12120 = 0;while(true){
if((i__12079_12120 < count__12078_12119))
{var vec__12080_12121 = cljs.core._nth.call(null,chunk__12077_12118,i__12079_12120);var ev__11958__auto___12122 = cljs.core.nth.call(null,vec__12080_12121,0,null);var func__11959__auto___12123 = cljs.core.nth.call(null,vec__12080_12121,1,null);lt.util.dom.on.call(null,e__11957__auto__,ev__11958__auto___12122,func__11959__auto___12123);
{
var G__12124 = seq__12076_12117;
var G__12125 = chunk__12077_12118;
var G__12126 = count__12078_12119;
var G__12127 = (i__12079_12120 + 1);
seq__12076_12117 = G__12124;
chunk__12077_12118 = G__12125;
count__12078_12119 = G__12126;
i__12079_12120 = G__12127;
continue;
}
} else
{var temp__4092__auto___12128 = cljs.core.seq.call(null,seq__12076_12117);if(temp__4092__auto___12128)
{var seq__12076_12129__$1 = temp__4092__auto___12128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12076_12129__$1))
{var c__11308__auto___12130 = cljs.core.chunk_first.call(null,seq__12076_12129__$1);{
var G__12131 = cljs.core.chunk_rest.call(null,seq__12076_12129__$1);
var G__12132 = c__11308__auto___12130;
var G__12133 = cljs.core.count.call(null,c__11308__auto___12130);
var G__12134 = 0;
seq__12076_12117 = G__12131;
chunk__12077_12118 = G__12132;
count__12078_12119 = G__12133;
i__12079_12120 = G__12134;
continue;
}
} else
{var vec__12081_12135 = cljs.core.first.call(null,seq__12076_12129__$1);var ev__11958__auto___12136 = cljs.core.nth.call(null,vec__12081_12135,0,null);var func__11959__auto___12137 = cljs.core.nth.call(null,vec__12081_12135,1,null);lt.util.dom.on.call(null,e__11957__auto__,ev__11958__auto___12136,func__11959__auto___12137);
{
var G__12138 = cljs.core.next.call(null,seq__12076_12129__$1);
var G__12139 = null;
var G__12140 = 0;
var G__12141 = 0;
seq__12076_12117 = G__12138;
chunk__12077_12118 = G__12139;
count__12078_12119 = G__12140;
i__12079_12120 = G__12141;
continue;
}
}
} else
{}
}
break;
}
return e__11957__auto__;
});
lt.plugins.cljrefactor.artifact_version.remove_form = (function remove_form(this$){new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clear();
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.plugins.cljrefactor.artifact_version.on_keydown = (function on_keydown(this$,ed,ev){var kc = ev.keyCode;var el = ev.target;if((cljs.core._EQ_.call(null,13,kc)) || (cljs.core._EQ_.call(null,9,kc)))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
var version = [cljs.core.str("\""),cljs.core.str(lt.util.dom.$.call(null,"option:checked",el).innerHTML),cljs.core.str("\"")].join('');lt.plugins.cljrefactor.artifact_version.remove_form.call(null,this$);
lt.objs.editor.insert_at_cursor.call(null,ed,version);
return lt.objs.editor.focus.call(null,ed);
} else
{if(cljs.core._EQ_.call(null,27,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
lt.plugins.cljrefactor.artifact_version.remove_form.call(null,this$);
return lt.objs.editor.focus.call(null,ed);
} else
{return null;
}
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifact-version","artifact-select-form","lt.plugins.cljrefactor.artifact-version/artifact-select-form",1608526199),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.artifact.select.form","inline.artifact.select.form",688625665),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var content = lt.plugins.cljrefactor.artifact_version.select_form.call(null,this$,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(info));var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));lt.object.merge_BANG_.call(null,this$,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widget","widget",4520824246),content,new cljs.core.Keyword(null,"insertLeft","insertLeft",1979827666),false], null))));
lt.util.dom.on.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"select","select",4402849902),content),"blur",((function (content,line,ed,temp__4092__auto__){
return (function (ev){return lt.plugins.cljrefactor.artifact_version.remove_form.call(null,this$);
});})(content,line,ed,temp__4092__auto__))
);
lt.util.dom.on.call(null,content,"keydown",cljs.core.partial.call(null,lt.plugins.cljrefactor.artifact_version.on_keydown,this$,ed));
lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"option","option",4298734567),content),0);
lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"select","select",4402849902),content));
return content;
} else
{return null;
}
}));
lt.plugins.cljrefactor.artifact_version.make = (function make(info){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifact-version","artifact-select-form","lt.plugins.cljrefactor.artifact-version/artifact-select-form",1608526199),info);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.usages')) {
goog.provide('lt.plugins.cljrefactor.usages');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.usages.__BEH__on_close = (function __BEH__on_close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","on-close","lt.plugins.cljrefactor.usages/on-close",757312783),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__clear_BANG_ = (function __BEH__clear_BANG_(this$){return lt.util.dom.empty.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),lt.object.__GT_content.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","clear!","lt.plugins.cljrefactor.usages/clear!",4298270169),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__clear_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.plugins.cljrefactor.usages.result_entry = (function result_entry(entry){var e__11957__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.entry","p.entry",3043677414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.line","span.line",4619821962),cljs.core.first.call(null,new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(entry))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"stmt","stmt",1017445178).cljs$core$IFn$_invoke$arity$1(entry)], null)], null));var seq__13044_13080 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__11957__auto__){
return (function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(entry));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"goto-line","goto-line",2802035088),cljs.core.first.call(null,new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(entry)));
});})(e__11957__auto__))
], null)));var chunk__13045_13081 = null;var count__13046_13082 = 0;var i__13047_13083 = 0;while(true){
if((i__13047_13083 < count__13046_13082))
{var vec__13048_13084 = cljs.core._nth.call(null,chunk__13045_13081,i__13047_13083);var ev__11958__auto___13085 = cljs.core.nth.call(null,vec__13048_13084,0,null);var func__11959__auto___13086 = cljs.core.nth.call(null,vec__13048_13084,1,null);lt.util.dom.on.call(null,e__11957__auto__,ev__11958__auto___13085,func__11959__auto___13086);
{
var G__13087 = seq__13044_13080;
var G__13088 = chunk__13045_13081;
var G__13089 = count__13046_13082;
var G__13090 = (i__13047_13083 + 1);
seq__13044_13080 = G__13087;
chunk__13045_13081 = G__13088;
count__13046_13082 = G__13089;
i__13047_13083 = G__13090;
continue;
}
} else
{var temp__4092__auto___13091 = cljs.core.seq.call(null,seq__13044_13080);if(temp__4092__auto___13091)
{var seq__13044_13092__$1 = temp__4092__auto___13091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13044_13092__$1))
{var c__11308__auto___13093 = cljs.core.chunk_first.call(null,seq__13044_13092__$1);{
var G__13094 = cljs.core.chunk_rest.call(null,seq__13044_13092__$1);
var G__13095 = c__11308__auto___13093;
var G__13096 = cljs.core.count.call(null,c__11308__auto___13093);
var G__13097 = 0;
seq__13044_13080 = G__13094;
chunk__13045_13081 = G__13095;
count__13046_13082 = G__13096;
i__13047_13083 = G__13097;
continue;
}
} else
{var vec__13049_13098 = cljs.core.first.call(null,seq__13044_13092__$1);var ev__11958__auto___13099 = cljs.core.nth.call(null,vec__13049_13098,0,null);var func__11959__auto___13100 = cljs.core.nth.call(null,vec__13049_13098,1,null);lt.util.dom.on.call(null,e__11957__auto__,ev__11958__auto___13099,func__11959__auto___13100);
{
var G__13101 = cljs.core.next.call(null,seq__13044_13092__$1);
var G__13102 = null;
var G__13103 = 0;
var G__13104 = 0;
seq__13044_13080 = G__13101;
chunk__13045_13081 = G__13102;
count__13046_13082 = G__13103;
i__13047_13083 = G__13104;
continue;
}
}
} else
{}
}
break;
}
return e__11957__auto__;
});
lt.plugins.cljrefactor.usages.result_item = (function result_item(item){var e__11957__auto__ = crate.core.html.call(null,(function (){var file = new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(item);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.path","p.path",4266284629),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file","span.file",4619643154),lt.objs.files.basename.call(null,file)], null),"(",lt.objs.files.parent.call(null,file),")"], null),cljs.core.map.call(null,((function (file){
return (function (p1__13050_SHARP_){return lt.plugins.cljrefactor.usages.result_entry.call(null,p1__13050_SHARP_);
});})(file))
,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(item))], null);
})());var seq__13057_13105 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__13058_13106 = null;var count__13059_13107 = 0;var i__13060_13108 = 0;while(true){
if((i__13060_13108 < count__13059_13107))
{var vec__13061_13109 = cljs.core._nth.call(null,chunk__13058_13106,i__13060_13108);var ev__11958__auto___13110 = cljs.core.nth.call(null,vec__13061_13109,0,null);var func__11959__auto___13111 = cljs.core.nth.call(null,vec__13061_13109,1,null);lt.util.dom.on.call(null,e__11957__auto__,ev__11958__auto___13110,func__11959__auto___13111);
{
var G__13112 = seq__13057_13105;
var G__13113 = chunk__13058_13106;
var G__13114 = count__13059_13107;
var G__13115 = (i__13060_13108 + 1);
seq__13057_13105 = G__13112;
chunk__13058_13106 = G__13113;
count__13059_13107 = G__13114;
i__13060_13108 = G__13115;
continue;
}
} else
{var temp__4092__auto___13116 = cljs.core.seq.call(null,seq__13057_13105);if(temp__4092__auto___13116)
{var seq__13057_13117__$1 = temp__4092__auto___13116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13057_13117__$1))
{var c__11308__auto___13118 = cljs.core.chunk_first.call(null,seq__13057_13117__$1);{
var G__13119 = cljs.core.chunk_rest.call(null,seq__13057_13117__$1);
var G__13120 = c__11308__auto___13118;
var G__13121 = cljs.core.count.call(null,c__11308__auto___13118);
var G__13122 = 0;
seq__13057_13105 = G__13119;
chunk__13058_13106 = G__13120;
count__13059_13107 = G__13121;
i__13060_13108 = G__13122;
continue;
}
} else
{var vec__13062_13123 = cljs.core.first.call(null,seq__13057_13117__$1);var ev__11958__auto___13124 = cljs.core.nth.call(null,vec__13062_13123,0,null);var func__11959__auto___13125 = cljs.core.nth.call(null,vec__13062_13123,1,null);lt.util.dom.on.call(null,e__11957__auto__,ev__11958__auto___13124,func__11959__auto___13125);
{
var G__13126 = cljs.core.next.call(null,seq__13057_13117__$1);
var G__13127 = null;
var G__13128 = 0;
var G__13129 = 0;
seq__13057_13105 = G__13126;
chunk__13058_13106 = G__13127;
count__13059_13107 = G__13128;
i__13060_13108 = G__13129;
continue;
}
}
} else
{}
}
break;
}
return e__11957__auto__;
});
lt.plugins.cljrefactor.usages.search_results = (function search_results(res){var e__11957__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),cljs.core.map.call(null,(function (p1__13063_SHARP_){return lt.plugins.cljrefactor.usages.result_item.call(null,p1__13063_SHARP_);
}),res)], null));var seq__13070_13130 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__13071_13131 = null;var count__13072_13132 = 0;var i__13073_13133 = 0;while(true){
if((i__13073_13133 < count__13072_13132))
{var vec__13074_13134 = cljs.core._nth.call(null,chunk__13071_13131,i__13073_13133);var ev__11958__auto___13135 = cljs.core.nth.call(null,vec__13074_13134,0,null);var func__11959__auto___13136 = cljs.core.nth.call(null,vec__13074_13134,1,null);lt.util.dom.on.call(null,e__11957__auto__,ev__11958__auto___13135,func__11959__auto___13136);
{
var G__13137 = seq__13070_13130;
var G__13138 = chunk__13071_13131;
var G__13139 = count__13072_13132;
var G__13140 = (i__13073_13133 + 1);
seq__13070_13130 = G__13137;
chunk__13071_13131 = G__13138;
count__13072_13132 = G__13139;
i__13073_13133 = G__13140;
continue;
}
} else
{var temp__4092__auto___13141 = cljs.core.seq.call(null,seq__13070_13130);if(temp__4092__auto___13141)
{var seq__13070_13142__$1 = temp__4092__auto___13141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13070_13142__$1))
{var c__11308__auto___13143 = cljs.core.chunk_first.call(null,seq__13070_13142__$1);{
var G__13144 = cljs.core.chunk_rest.call(null,seq__13070_13142__$1);
var G__13145 = c__11308__auto___13143;
var G__13146 = cljs.core.count.call(null,c__11308__auto___13143);
var G__13147 = 0;
seq__13070_13130 = G__13144;
chunk__13071_13131 = G__13145;
count__13072_13132 = G__13146;
i__13073_13133 = G__13147;
continue;
}
} else
{var vec__13075_13148 = cljs.core.first.call(null,seq__13070_13142__$1);var ev__11958__auto___13149 = cljs.core.nth.call(null,vec__13075_13148,0,null);var func__11959__auto___13150 = cljs.core.nth.call(null,vec__13075_13148,1,null);lt.util.dom.on.call(null,e__11957__auto__,ev__11958__auto___13149,func__11959__auto___13150);
{
var G__13151 = cljs.core.next.call(null,seq__13070_13142__$1);
var G__13152 = null;
var G__13153 = 0;
var G__13154 = 0;
seq__13070_13130 = G__13151;
chunk__13071_13131 = G__13152;
count__13072_13132 = G__13153;
i__13073_13133 = G__13154;
continue;
}
}
} else
{}
}
break;
}
return e__11957__auto__;
});
lt.plugins.cljrefactor.usages.show_results = (function show_results(this$,res){var container = lt.object.__GT_content.call(null,this$);var results_ul = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),container);return lt.util.dom.replace_with.call(null,results_ul,lt.plugins.cljrefactor.usages.search_results.call(null,res));
});
lt.plugins.cljrefactor.usages.usages__GT_view = (function usages__GT_view(usages){return (function (x){return cljs.core.map.call(null,(function (k){var items = cljs.core.get.call(null,x,k);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),k,new cljs.core.Keyword(null,"items","items",1114430258),items], null);
}),cljs.core.keys.call(null,x));
}).call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"file","file",1017047278),cljs.core.map.call(null,(function (p__13078){var map__13079 = p__13078;var map__13079__$1 = ((cljs.core.seq_QMARK_.call(null,map__13079))?cljs.core.apply.call(null,cljs.core.hash_map,map__13079):map__13079);var x = cljs.core.get.call(null,map__13079__$1,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loc","loc",1014011570),cljs.core.take.call(null,4,x),new cljs.core.Keyword(null,"symbol","symbol",4421347594),cljs.core.nth.call(null,x,4),new cljs.core.Keyword(null,"file","file",1017047278),cljs.core.nth.call(null,x,5),new cljs.core.Keyword(null,"stmt","stmt",1017445178),cljs.core.last.call(null,x)], null);
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243),usages))));
});
lt.plugins.cljrefactor.usages.find_symbol_op = (function find_symbol_op(ns,symbol){return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"),cljs.core.str(" (def tr (refactor-nrepl.client/connect))"),cljs.core.str(" (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000)"),cljs.core.str(" {:op \"refactor\" :refactor-fn \"find-symbol\" :ns '"),cljs.core.str(ns),cljs.core.str(" :name \""),cljs.core.str(symbol),cljs.core.str("\""),cljs.core.str("}))")].join('');
});
lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__res = (function __BEH__find_symbol__DOT__res(ed,res){var usages = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res)));lt.plugins.cljrefactor.usages.show_results.call(null,lt.plugins.cljrefactor.usages.refactor_usages,lt.plugins.cljrefactor.usages.usages__GT_view.call(null,usages));
return lt.objs.notifos.done_working.call(null,"Find usages completed");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol.res","lt.plugins.cljrefactor.usages/find-symbol.res",2620470851),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.find-symbol","editor.eval.clj.result.refactor.find-symbol",1593184613),null], null), null));
lt.plugins.cljrefactor.usages.search_for = (function search_for(this$){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(this$);if(cljs.core.truth_(temp__4092__auto__))
{var info = temp__4092__auto__;return [cljs.core.str(new cljs.core.Keyword(null,"namespace","namespace",2266122445).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(info))].join('');
} else
{return null;
}
})()], null)),"Find usages for: ");
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","refactor-usages","lt.plugins.cljrefactor.usages/refactor-usages",808406084),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.usages","refactor.usages",1885039760),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Find usages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",980356928),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.res","ul.res",4464738363)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.searcher","div.searcher",3267271812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),crate.binding.bound.call(null,this$,lt.plugins.cljrefactor.usages.search_for)], null)], null)], null);
}));
lt.plugins.cljrefactor.usages.refactor_usages = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","refactor-usages","lt.plugins.cljrefactor.usages/refactor-usages",808406084));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol","lt.plugins.cljrefactor.usages/find-symbol",1461043889),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Find symbol",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var token = (cljs.core.truth_(ed)?lt.plugins.clojure.find_symbol_at_cursor.call(null,ed):null);var ns = (cljs.core.truth_(ed)?new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))):null);if(cljs.core.truth_((function (){var and__10548__auto__ = token;if(cljs.core.truth_(and__10548__auto__))
{return ns;
} else
{return and__10548__auto__;
}
})()))
{lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages);
lt.object.update_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-for","search-for",4597237398)], null),((function (ed,token,ns){
return (function (_){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",4421347594),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"namespace","namespace",2266122445),ns], null);
});})(ed,token,ns))
);
lt.object.raise.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.usages.find_symbol_op.call(null,ns,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.find-symbol","refactor.find-symbol",3383223538),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor')) {
goog.provide('lt.plugins.cljrefactor');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.cljrefactor.artifact_version');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.auto_complete');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.artifact_version');
goog.require('lt.plugins.clojure');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.clojure');
lt.plugins.cljrefactor.project_path = (function project_path(ed){var temp__4090__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",3951159101),new cljs.core.Keyword(null,"default","default",2558708147)], null));if(cljs.core.truth_(temp__4090__auto__))
{var c = temp__4090__auto__;return new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
} else
{return new cljs.core.Keyword(null,"project-path","project-path",1907176907).cljs$core$IFn$_invoke$arity$1(lt.plugins.clojure.find_project.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));
}
});
lt.plugins.cljrefactor.get_project_file = (function get_project_file(ed){var temp__4092__auto__ = lt.plugins.cljrefactor.project_path.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;return lt.objs.files.join.call(null,path,"project.clj");
} else
{return null;
}
});
lt.plugins.cljrefactor.prj__GT_map = (function prj__GT_map(p){return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__13157_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[cljs.core.first.call(null,p1__13157_SHARP_)],[cljs.core.second.call(null,p1__13157_SHARP_)]);
}),cljs.core.partition.call(null,2,cljs.core.drop.call(null,3,p))));
});
lt.plugins.cljrefactor.parse_project_file = (function parse_project_file(file){return lt.plugins.cljrefactor.prj__GT_map.call(null,cljs.reader.read_string.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)),/\\/,"\\\\")));
});
lt.plugins.cljrefactor.src_dirs = (function src_dirs(prj){var or__10560__auto__ = new cljs.core.Keyword(null,"source-paths","source-paths",1249628206).cljs$core$IFn$_invoke$arity$1(prj);if(cljs.core.truth_(or__10560__auto__))
{return or__10560__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["src"], null);
}
});
lt.plugins.cljrefactor.nsify = (function nsify(sub_path){return (function (p1__13160_SHARP_){return [cljs.core.str("(ns "),cljs.core.str(p1__13160_SHARP_),cljs.core.str(")\n")].join('');
}).call(null,(function (p1__13159_SHARP_){return clojure.string.join.call(null,".",p1__13159_SHARP_);
}).call(null,(function (parts){return cljs.core.map.call(null,(function (p1__13158_SHARP_){return clojure.string.replace.call(null,p1__13158_SHARP_,/_/,"-");
}),parts);
}).call(null,clojure.string.split.call(null,lt.objs.files.without_ext.call(null,sub_path),cljs.core.re_pattern.call(null,lt.objs.files.separator)))));
});
lt.plugins.cljrefactor.find_sub_path = (function find_sub_path(prj_dir,path,src_dirs){return cljs.core.some.call(null,(function (p1__13161_SHARP_){if(cljs.core.truth_(path.contains(lt.objs.files.join.call(null,prj_dir,p1__13161_SHARP_))))
{return path.substring((1 + cljs.core.count.call(null,lt.objs.files.join.call(null,prj_dir,p1__13161_SHARP_))));
} else
{return null;
}
}),src_dirs);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor","introduce-ns","lt.plugins.cljrefactor/introduce-ns",2743008177),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Introduce ns",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,ed);var prj_file = lt.plugins.cljrefactor.get_project_file.call(null,ed);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var src_dirs = (cljs.core.truth_(prj_file)?lt.plugins.cljrefactor.src_dirs.call(null,lt.plugins.cljrefactor.parse_project_file.call(null,prj_file)):null);if(cljs.core.truth_(prj_file))
{var ns_stmt = lt.plugins.cljrefactor.nsify.call(null,lt.plugins.cljrefactor.find_sub_path.call(null,lt.plugins.cljrefactor.project_path.call(null,ed),path,src_dirs));lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),0,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
lt.objs.editor.insert_at_cursor.call(null,ed,ns_stmt);
return lt.objs.editor.move_cursor.call(null,ed,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086)], null),cljs.core.inc));
} else
{return null;
}
})], null));
lt.plugins.cljrefactor.__BEH__clj_refactor__DOT__maybe_project = (function __BEH__clj_refactor__DOT__maybe_project(ed){if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))),"project.clj")) && (cljs.core.not.call(null,lt.object.has_tag_QMARK_.call(null,ed,new cljs.core.Keyword(null,"editor.clj.project-file","editor.clj.project-file",4785715504)))))
{return lt.object.add_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.clj.project-file","editor.clj.project-file",4785715504)], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","clj-refactor.maybe-project","lt.plugins.cljrefactor/clj-refactor.maybe-project",4351178672),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__clj_refactor__DOT__maybe_project,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Add tag to indicate that the file is a lein project file");
lt.plugins.cljrefactor.artifact_version_list = (function artifact_version_list(artifact){return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"),cljs.core.str("(def tr (refactor-nrepl.client/connect))"),cljs.core.str("(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"artifact-versions\" :artifact \""),cljs.core.str(artifact),cljs.core.str("\"}))")].join('');
});
lt.plugins.cljrefactor.__BEH__trigger_artifact_version_hints = (function __BEH__trigger_artifact_version_hints(editor,artifact){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Retrieving clojars artifact versions")].join(''));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.artifact_version_list.call(null,artifact),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.artifact-versions","refactor.artifact-versions",4271851004),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","trigger-artifact-version-hints","lt.plugins.cljrefactor/trigger-artifact-version-hints",4599841235),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__trigger_artifact_version_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"artifact-version.hints.update!","artifact-version.hints.update!",714019447),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.cljrefactor.__BEH__finish_artifact_version_hints = (function __BEH__finish_artifact_version_hints(editor,res){var vs = clojure.string.split.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))))),/ /);var hints = cljs.core.map.call(null,((function (vs){
return (function (p1__13162_SHARP_){return {"completion": p1__13162_SHARP_};
});})(vs))
,vs);if((cljs.core.count.call(null,vs) > 1))
{return lt.plugins.cljrefactor.artifact_version.make.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ed","ed",1013907473),editor,new cljs.core.Keyword(null,"items","items",1114430258),vs,new cljs.core.Keyword(null,"pos","pos",1014015430),lt.objs.editor.__GT_cursor.call(null,editor)], null));
} else
{return lt.objs.editor.insert_at_cursor.call(null,editor,[cljs.core.str("\""),cljs.core.str(cljs.core.first.call(null,vs)),cljs.core.str("\"")].join(''));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","finish-artifact-version-hints","lt.plugins.cljrefactor/finish-artifact-version-hints",1219414414),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__finish_artifact_version_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.artifact-versions","editor.eval.clj.result.refactor.artifact-versions",923340847),null], null), null));
lt.plugins.cljrefactor.artifact_list = (function artifact_list(){return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"),cljs.core.str("(def tr (refactor-nrepl.client/connect))"),cljs.core.str("(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"artifact-list\"}))")].join('');
});
lt.plugins.cljrefactor.__BEH__trigger_artifact_hints = (function __BEH__trigger_artifact_hints(editor,res){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Retrieving clojars artifacts")].join(''));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.artifact_list.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.artifacts","refactor.artifacts",2606704295),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","trigger-artifact-hints","lt.plugins.cljrefactor/trigger-artifact-hints",1356312830),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__trigger_artifact_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"artifact.hints.update!","artifact.hints.update!",2088367020),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.cljrefactor.sel_cb = (function sel_cb(ed,fun,c){var artifact = cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,c),"completion");fun.call(null,[cljs.core.str(artifact),cljs.core.str(" ")].join(''));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"artifact-version.hints.update!","artifact-version.hints.update!",714019447),artifact);
});
lt.plugins.cljrefactor.create_artifact_hints = (function create_artifact_hints(ed,artifacts){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__13163_SHARP_){return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{"item": p1__13163_SHARP_, "completion": p1__13163_SHARP_, "text": p1__13163_SHARP_, "select": cljs.core.partial.call(null,lt.plugins.cljrefactor.sel_cb,ed)}], null));
}),artifacts));
});
lt.plugins.cljrefactor.__BEH__finish_artifact_hints = (function __BEH__finish_artifact_hints(editor,res){var artifacts = clojure.string.split.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))))),/ /);var hints = lt.plugins.cljrefactor.create_artifact_hints.call(null,editor,artifacts);lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor","hints","lt.plugins.cljrefactor/hints",4442672152),hints], null));
return lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","finish-artifact-hints","lt.plugins.cljrefactor/finish-artifact-hints",4466395321),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__finish_artifact_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.artifacts","editor.eval.clj.result.refactor.artifacts",4548973530),null], null), null));
lt.plugins.cljrefactor.__BEH__artifact_hints = (function __BEH__artifact_hints(ed,hints,token){if(cljs.core.not_EQ_.call(null,token,new cljs.core.Keyword("lt.plugins.cljrefactor","token","lt.plugins.cljrefactor/token",4439741547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))
{lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor","token","lt.plugins.cljrefactor/token",4439741547),token], null));
if(cljs.core.truth_(new cljs.core.Keyword("lt.plugins.cljrefactor","hints","lt.plugins.cljrefactor/hints",4442672152).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))
{} else
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"artifact.hints.update!","artifact.hints.update!",2088367020));
}
} else
{}
var temp__4090__auto__ = new cljs.core.Keyword("lt.plugins.cljrefactor","hints","lt.plugins.cljrefactor/hints",4442672152).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4090__auto__))
{var clj_hints = temp__4090__auto__;return clj_hints;
} else
{return hints;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","artifact-hints","lt.plugins.cljrefactor/artifact-hints",3669934419),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__artifact_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null));
lt.plugins.cljrefactor.trigger_ed_con = (function trigger_ed_con(ed){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),"(println \"ping\")",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"no-op","no-op",1118845151),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor","ping-repl","lt.plugins.cljrefactor/ping-repl",680439130),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Ensure editor connected",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.cljrefactor.trigger_ed_con.call(null,lt.objs.editor.pool.last_active.call(null));
})], null));
}

//# sourceMappingURL=clj-light-refactor_compiled.js.map