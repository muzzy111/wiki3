/*! AI Knowledge Workflow — MIT License
MIT License

Copyright (c) 2026 KellyNovaX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Third-party notices

## Zod

This plugin bundles Zod, https://github.com/colinhacks/zod.

MIT License

Copyright (c) 2025 Colin McDonnell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
var Zr=Object.defineProperty;var Ji=Object.getOwnPropertyDescriptor;var Xi=Object.getOwnPropertyNames;var eo=Object.prototype.hasOwnProperty;var os=(n,t)=>{for(var e in t)Zr(n,e,{get:t[e],enumerable:!0})},to=(n,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Xi(t))!eo.call(n,s)&&s!==e&&Zr(n,s,{get:()=>t[s],enumerable:!(r=Ji(t,s))||r.enumerable});return n};var ro=n=>to(Zr({},"__esModule",{value:!0}),n);var Du={};os(Du,{default:()=>Gr});module.exports=ro(Du);var u=require("obsidian");var _={};os(_,{BRAND:()=>jo,DIRTY:()=>De,EMPTY_PATH:()=>io,INVALID:()=>v,NEVER:()=>fl,OK:()=>M,ParseStatus:()=>F,Schema:()=>E,ZodAny:()=>_e,ZodArray:()=>fe,ZodBigInt:()=>Fe,ZodBoolean:()=>Oe,ZodBranded:()=>At,ZodCatch:()=>Ye,ZodDate:()=>Ne,ZodDefault:()=>Ue,ZodDiscriminatedUnion:()=>Jt,ZodEffects:()=>J,ZodEnum:()=>qe,ZodError:()=>q,ZodFirstPartyTypeKind:()=>T,ZodFunction:()=>er,ZodIntersection:()=>Ve,ZodIssueCode:()=>f,ZodLazy:()=>Ke,ZodLiteral:()=>Ge,ZodMap:()=>ot,ZodNaN:()=>ct,ZodNativeEnum:()=>ze,ZodNever:()=>ee,ZodNull:()=>Be,ZodNullable:()=>se,ZodNumber:()=>Re,ZodObject:()=>z,ZodOptional:()=>Z,ZodParsedType:()=>g,ZodPipeline:()=>jt,ZodPromise:()=>Pe,ZodReadonly:()=>He,ZodRecord:()=>Xt,ZodSchema:()=>E,ZodSet:()=>lt,ZodString:()=>xe,ZodSymbol:()=>at,ZodTransformer:()=>J,ZodTuple:()=>ne,ZodType:()=>E,ZodUndefined:()=>We,ZodUnion:()=>Me,ZodUnknown:()=>ue,ZodVoid:()=>it,addIssueToContext:()=>h,any:()=>No,array:()=>Vo,bigint:()=>Lo,boolean:()=>ws,coerce:()=>ul,custom:()=>hs,date:()=>Do,datetimeRegex:()=>fs,defaultErrorMap:()=>de,discriminatedUnion:()=>zo,effect:()=>sl,enum:()=>tl,function:()=>Jo,getErrorMap:()=>rt,getParsedType:()=>re,instanceof:()=>Io,intersection:()=>Uo,isAborted:()=>Zt,isAsync:()=>nt,isDirty:()=>Qt,isValid:()=>Te,late:()=>Co,lazy:()=>Xo,literal:()=>el,makeIssue:()=>St,map:()=>Zo,nan:()=>$o,nativeEnum:()=>rl,never:()=>Bo,null:()=>Oo,nullable:()=>il,number:()=>ks,object:()=>Ko,objectUtil:()=>Qr,oboolean:()=>pl,onumber:()=>dl,optional:()=>al,ostring:()=>cl,pipeline:()=>ll,preprocess:()=>ol,promise:()=>nl,quotelessJson:()=>no,record:()=>Ho,set:()=>Qo,setErrorMap:()=>ao,strictObject:()=>Go,string:()=>gs,symbol:()=>Ro,transformer:()=>sl,tuple:()=>Yo,undefined:()=>Fo,union:()=>qo,unknown:()=>Wo,util:()=>S,void:()=>Mo});var S;(function(n){n.assertEqual=s=>{};function t(s){}n.assertIs=t;function e(s){throw new Error}n.assertNever=e,n.arrayToEnum=s=>{let a={};for(let i of s)a[i]=i;return a},n.getValidEnumValues=s=>{let a=n.objectKeys(s).filter(o=>typeof s[s[o]]!="number"),i={};for(let o of a)i[o]=s[o];return n.objectValues(i)},n.objectValues=s=>n.objectKeys(s).map(function(a){return s[a]}),n.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{let a=[];for(let i in s)Object.prototype.hasOwnProperty.call(s,i)&&a.push(i);return a},n.find=(s,a)=>{for(let i of s)if(a(i))return i},n.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&Number.isFinite(s)&&Math.floor(s)===s;function r(s,a=" | "){return s.map(i=>typeof i=="string"?`'${i}'`:i).join(a)}n.joinValues=r,n.jsonStringifyReplacer=(s,a)=>typeof a=="bigint"?a.toString():a})(S||(S={}));var Qr;(function(n){n.mergeShapes=(t,e)=>({...t,...e})})(Qr||(Qr={}));var g=S.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),re=n=>{switch(typeof n){case"undefined":return g.undefined;case"string":return g.string;case"number":return Number.isNaN(n)?g.nan:g.number;case"boolean":return g.boolean;case"function":return g.function;case"bigint":return g.bigint;case"symbol":return g.symbol;case"object":return Array.isArray(n)?g.array:n===null?g.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?g.promise:typeof Map<"u"&&n instanceof Map?g.map:typeof Set<"u"&&n instanceof Set?g.set:typeof Date<"u"&&n instanceof Date?g.date:g.object;default:return g.unknown}};var f=S.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),no=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:"),q=class n extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};let e=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,e):this.__proto__=e,this.name="ZodError",this.issues=t}format(t){let e=t||function(a){return a.message},r={_errors:[]},s=a=>{for(let i of a.issues)if(i.code==="invalid_union")i.unionErrors.map(s);else if(i.code==="invalid_return_type")s(i.returnTypeError);else if(i.code==="invalid_arguments")s(i.argumentsError);else if(i.path.length===0)r._errors.push(e(i));else{let o=r,l=0;for(;l<i.path.length;){let c=i.path[l];l===i.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(e(i))):o[c]=o[c]||{_errors:[]},o=o[c],l++}}};return s(this),r}static assert(t){if(!(t instanceof n))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,S.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=e=>e.message){let e={},r=[];for(let s of this.issues)if(s.path.length>0){let a=s.path[0];e[a]=e[a]||[],e[a].push(t(s))}else r.push(t(s));return{formErrors:r,fieldErrors:e}}get formErrors(){return this.flatten()}};q.create=n=>new q(n);var so=(n,t)=>{let e;switch(n.code){case f.invalid_type:n.received===g.undefined?e="Required":e=`Expected ${n.expected}, received ${n.received}`;break;case f.invalid_literal:e=`Invalid literal value, expected ${JSON.stringify(n.expected,S.jsonStringifyReplacer)}`;break;case f.unrecognized_keys:e=`Unrecognized key(s) in object: ${S.joinValues(n.keys,", ")}`;break;case f.invalid_union:e="Invalid input";break;case f.invalid_union_discriminator:e=`Invalid discriminator value. Expected ${S.joinValues(n.options)}`;break;case f.invalid_enum_value:e=`Invalid enum value. Expected ${S.joinValues(n.options)}, received '${n.received}'`;break;case f.invalid_arguments:e="Invalid function arguments";break;case f.invalid_return_type:e="Invalid function return type";break;case f.invalid_date:e="Invalid date";break;case f.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(e=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(e=`${e} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?e=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?e=`Invalid input: must end with "${n.validation.endsWith}"`:S.assertNever(n.validation):n.validation!=="regex"?e=`Invalid ${n.validation}`:e="Invalid";break;case f.too_small:n.type==="array"?e=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?e=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?e=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="bigint"?e=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?e=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:e="Invalid input";break;case f.too_big:n.type==="array"?e=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?e=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?e=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?e=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?e=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:e="Invalid input";break;case f.custom:e="Invalid input";break;case f.invalid_intersection_types:e="Intersection results could not be merged";break;case f.not_multiple_of:e=`Number must be a multiple of ${n.multipleOf}`;break;case f.not_finite:e="Number must be finite";break;default:e=t.defaultError,S.assertNever(n)}return{message:e}},de=so;var ls=de;function ao(n){ls=n}function rt(){return ls}var St=n=>{let{data:t,path:e,errorMaps:r,issueData:s}=n,a=[...e,...s.path||[]],i={...s,path:a};if(s.message!==void 0)return{...s,path:a,message:s.message};let o="",l=r.filter(c=>!!c).slice().reverse();for(let c of l)o=c(i,{data:t,defaultError:o}).message;return{...s,path:a,message:o}},io=[];function h(n,t){let e=rt(),r=St({issueData:t,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,e,e===de?void 0:de].filter(s=>!!s)});n.common.issues.push(r)}var F=class n{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,e){let r=[];for(let s of e){if(s.status==="aborted")return v;s.status==="dirty"&&t.dirty(),r.push(s.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,e){let r=[];for(let s of e){let a=await s.key,i=await s.value;r.push({key:a,value:i})}return n.mergeObjectSync(t,r)}static mergeObjectSync(t,e){let r={};for(let s of e){let{key:a,value:i}=s;if(a.status==="aborted"||i.status==="aborted")return v;a.status==="dirty"&&t.dirty(),i.status==="dirty"&&t.dirty(),a.value!=="__proto__"&&(typeof i.value<"u"||s.alwaysSet)&&(r[a.value]=i.value)}return{status:t.value,value:r}}},v=Object.freeze({status:"aborted"}),De=n=>({status:"dirty",value:n}),M=n=>({status:"valid",value:n}),Zt=n=>n.status==="aborted",Qt=n=>n.status==="dirty",Te=n=>n.status==="valid",nt=n=>typeof Promise<"u"&&n instanceof Promise;var w;(function(n){n.errToObj=t=>typeof t=="string"?{message:t}:t||{},n.toString=t=>typeof t=="string"?t:t?.message})(w||(w={}));var Q=class{constructor(t,e,r,s){this._cachedPath=[],this.parent=t,this.data=e,this._path=r,this._key=s}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},cs=(n,t)=>{if(Te(t))return{success:!0,data:t.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let e=new q(n.common.issues);return this._error=e,this._error}}};function P(n){if(!n)return{};let{errorMap:t,invalid_type_error:e,required_error:r,description:s}=n;if(t&&(e||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:s}:{errorMap:(i,o)=>{let{message:l}=n;return i.code==="invalid_enum_value"?{message:l??o.defaultError}:typeof o.data>"u"?{message:l??r??o.defaultError}:i.code!=="invalid_type"?{message:o.defaultError}:{message:l??e??o.defaultError}},description:s}}var E=class{get description(){return this._def.description}_getType(t){return re(t.data)}_getOrReturnCtx(t,e){return e||{common:t.parent.common,data:t.data,parsedType:re(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new F,ctx:{common:t.parent.common,data:t.data,parsedType:re(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){let e=this._parse(t);if(nt(e))throw new Error("Synchronous parse encountered promise.");return e}_parseAsync(t){let e=this._parse(t);return Promise.resolve(e)}parse(t,e){let r=this.safeParse(t,e);if(r.success)return r.data;throw r.error}safeParse(t,e){let r={common:{issues:[],async:e?.async??!1,contextualErrorMap:e?.errorMap},path:e?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:re(t)},s=this._parseSync({data:t,path:r.path,parent:r});return cs(r,s)}"~validate"(t){let e={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:re(t)};if(!this["~standard"].async)try{let r=this._parseSync({data:t,path:[],parent:e});return Te(r)?{value:r.value}:{issues:e.common.issues}}catch(r){r?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),e.common={issues:[],async:!0}}return this._parseAsync({data:t,path:[],parent:e}).then(r=>Te(r)?{value:r.value}:{issues:e.common.issues})}async parseAsync(t,e){let r=await this.safeParseAsync(t,e);if(r.success)return r.data;throw r.error}async safeParseAsync(t,e){let r={common:{issues:[],contextualErrorMap:e?.errorMap,async:!0},path:e?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:re(t)},s=this._parse({data:t,path:r.path,parent:r}),a=await(nt(s)?s:Promise.resolve(s));return cs(r,a)}refine(t,e){let r=s=>typeof e=="string"||typeof e>"u"?{message:e}:typeof e=="function"?e(s):e;return this._refinement((s,a)=>{let i=t(s),o=()=>a.addIssue({code:f.custom,...r(s)});return typeof Promise<"u"&&i instanceof Promise?i.then(l=>l?!0:(o(),!1)):i?!0:(o(),!1)})}refinement(t,e){return this._refinement((r,s)=>t(r)?!0:(s.addIssue(typeof e=="function"?e(r,s):e),!1))}_refinement(t){return new J({schema:this,typeName:T.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:e=>this["~validate"](e)}}optional(){return Z.create(this,this._def)}nullable(){return se.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return fe.create(this)}promise(){return Pe.create(this,this._def)}or(t){return Me.create([this,t],this._def)}and(t){return Ve.create(this,t,this._def)}transform(t){return new J({...P(this._def),schema:this,typeName:T.ZodEffects,effect:{type:"transform",transform:t}})}default(t){let e=typeof t=="function"?t:()=>t;return new Ue({...P(this._def),innerType:this,defaultValue:e,typeName:T.ZodDefault})}brand(){return new At({typeName:T.ZodBranded,type:this,...P(this._def)})}catch(t){let e=typeof t=="function"?t:()=>t;return new Ye({...P(this._def),innerType:this,catchValue:e,typeName:T.ZodCatch})}describe(t){let e=this.constructor;return new e({...this._def,description:t})}pipe(t){return jt.create(this,t)}readonly(){return He.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},oo=/^c[^\s-]{8,}$/i,lo=/^[0-9a-z]+$/,co=/^[0-9A-HJKMNP-TV-Z]{26}$/i,po=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,uo=/^[a-z0-9_-]{21}$/i,fo=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,mo=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,ho=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,go="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Jr,ko=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,wo=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,vo=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,yo=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,To=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,xo=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,ps="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",_o=new RegExp(`^${ps}$`);function us(n){let t="[0-5]\\d";n.precision?t=`${t}\\.\\d{${n.precision}}`:n.precision==null&&(t=`${t}(\\.\\d+)?`);let e=n.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${e}`}function Po(n){return new RegExp(`^${us(n)}$`)}function fs(n){let t=`${ps}T${us(n)}`,e=[];return e.push(n.local?"Z?":"Z"),n.offset&&e.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${e.join("|")})`,new RegExp(`^${t}$`)}function Eo(n,t){return!!((t==="v4"||!t)&&ko.test(n)||(t==="v6"||!t)&&vo.test(n))}function bo(n,t){if(!fo.test(n))return!1;try{let[e]=n.split(".");if(!e)return!1;let r=e.replace(/-/g,"+").replace(/_/g,"/").padEnd(e.length+(4-e.length%4)%4,"="),s=JSON.parse(atob(r));return!(typeof s!="object"||s===null||"typ"in s&&s?.typ!=="JWT"||!s.alg||t&&s.alg!==t)}catch{return!1}}function So(n,t){return!!((t==="v4"||!t)&&wo.test(n)||(t==="v6"||!t)&&yo.test(n))}var xe=class n extends E{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==g.string){let a=this._getOrReturnCtx(t);return h(a,{code:f.invalid_type,expected:g.string,received:a.parsedType}),v}let r=new F,s;for(let a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(s=this._getOrReturnCtx(t,s),h(s,{code:f.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="max")t.data.length>a.value&&(s=this._getOrReturnCtx(t,s),h(s,{code:f.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="length"){let i=t.data.length>a.value,o=t.data.length<a.value;(i||o)&&(s=this._getOrReturnCtx(t,s),i?h(s,{code:f.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):o&&h(s,{code:f.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),r.dirty())}else if(a.kind==="email")ho.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"email",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="emoji")Jr||(Jr=new RegExp(go,"u")),Jr.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"emoji",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="uuid")po.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"uuid",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="nanoid")uo.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"nanoid",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid")oo.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"cuid",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid2")lo.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"cuid2",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="ulid")co.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"ulid",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{s=this._getOrReturnCtx(t,s),h(s,{validation:"url",code:f.invalid_string,message:a.message}),r.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"regex",code:f.invalid_string,message:a.message}),r.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),r.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:{startsWith:a.value},message:a.message}),r.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:{endsWith:a.value},message:a.message}),r.dirty()):a.kind==="datetime"?fs(a).test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:"datetime",message:a.message}),r.dirty()):a.kind==="date"?_o.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:"date",message:a.message}),r.dirty()):a.kind==="time"?Po(a).test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:"time",message:a.message}),r.dirty()):a.kind==="duration"?mo.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"duration",code:f.invalid_string,message:a.message}),r.dirty()):a.kind==="ip"?Eo(t.data,a.version)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"ip",code:f.invalid_string,message:a.message}),r.dirty()):a.kind==="jwt"?bo(t.data,a.alg)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"jwt",code:f.invalid_string,message:a.message}),r.dirty()):a.kind==="cidr"?So(t.data,a.version)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"cidr",code:f.invalid_string,message:a.message}),r.dirty()):a.kind==="base64"?To.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"base64",code:f.invalid_string,message:a.message}),r.dirty()):a.kind==="base64url"?xo.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"base64url",code:f.invalid_string,message:a.message}),r.dirty()):S.assertNever(a);return{status:r.value,value:t.data}}_regex(t,e,r){return this.refinement(s=>t.test(s),{validation:e,code:f.invalid_string,...w.errToObj(r)})}_addCheck(t){return new n({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...w.errToObj(t)})}url(t){return this._addCheck({kind:"url",...w.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...w.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...w.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...w.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...w.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...w.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...w.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...w.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...w.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...w.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...w.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...w.errToObj(t)})}datetime(t){return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:t?.offset??!1,local:t?.local??!1,...w.errToObj(t?.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof t?.precision>"u"?null:t?.precision,...w.errToObj(t?.message)})}duration(t){return this._addCheck({kind:"duration",...w.errToObj(t)})}regex(t,e){return this._addCheck({kind:"regex",regex:t,...w.errToObj(e)})}includes(t,e){return this._addCheck({kind:"includes",value:t,position:e?.position,...w.errToObj(e?.message)})}startsWith(t,e){return this._addCheck({kind:"startsWith",value:t,...w.errToObj(e)})}endsWith(t,e){return this._addCheck({kind:"endsWith",value:t,...w.errToObj(e)})}min(t,e){return this._addCheck({kind:"min",value:t,...w.errToObj(e)})}max(t,e){return this._addCheck({kind:"max",value:t,...w.errToObj(e)})}length(t,e){return this._addCheck({kind:"length",value:t,...w.errToObj(e)})}nonempty(t){return this.min(1,w.errToObj(t))}trim(){return new n({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new n({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new n({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(let e of this._def.checks)e.kind==="min"&&(t===null||e.value>t)&&(t=e.value);return t}get maxLength(){let t=null;for(let e of this._def.checks)e.kind==="max"&&(t===null||e.value<t)&&(t=e.value);return t}};xe.create=n=>new xe({checks:[],typeName:T.ZodString,coerce:n?.coerce??!1,...P(n)});function Ao(n,t){let e=(n.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,s=e>r?e:r,a=Number.parseInt(n.toFixed(s).replace(".","")),i=Number.parseInt(t.toFixed(s).replace(".",""));return a%i/10**s}var Re=class n extends E{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==g.number){let a=this._getOrReturnCtx(t);return h(a,{code:f.invalid_type,expected:g.number,received:a.parsedType}),v}let r,s=new F;for(let a of this._def.checks)a.kind==="int"?S.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),h(r,{code:f.invalid_type,expected:"integer",received:"float",message:a.message}),s.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="multipleOf"?Ao(t.data,a.value)!==0&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),h(r,{code:f.not_finite,message:a.message}),s.dirty()):S.assertNever(a);return{status:s.value,value:t.data}}gte(t,e){return this.setLimit("min",t,!0,w.toString(e))}gt(t,e){return this.setLimit("min",t,!1,w.toString(e))}lte(t,e){return this.setLimit("max",t,!0,w.toString(e))}lt(t,e){return this.setLimit("max",t,!1,w.toString(e))}setLimit(t,e,r,s){return new n({...this._def,checks:[...this._def.checks,{kind:t,value:e,inclusive:r,message:w.toString(s)}]})}_addCheck(t){return new n({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:w.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:w.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:w.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:w.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:w.toString(t)})}multipleOf(t,e){return this._addCheck({kind:"multipleOf",value:t,message:w.toString(e)})}finite(t){return this._addCheck({kind:"finite",message:w.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:w.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:w.toString(t)})}get minValue(){let t=null;for(let e of this._def.checks)e.kind==="min"&&(t===null||e.value>t)&&(t=e.value);return t}get maxValue(){let t=null;for(let e of this._def.checks)e.kind==="max"&&(t===null||e.value<t)&&(t=e.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&S.isInteger(t.value))}get isFinite(){let t=null,e=null;for(let r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(e===null||r.value>e)&&(e=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(e)&&Number.isFinite(t)}};Re.create=n=>new Re({checks:[],typeName:T.ZodNumber,coerce:n?.coerce||!1,...P(n)});var Fe=class n extends E{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==g.bigint)return this._getInvalidInput(t);let r,s=new F;for(let a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):S.assertNever(a);return{status:s.value,value:t.data}}_getInvalidInput(t){let e=this._getOrReturnCtx(t);return h(e,{code:f.invalid_type,expected:g.bigint,received:e.parsedType}),v}gte(t,e){return this.setLimit("min",t,!0,w.toString(e))}gt(t,e){return this.setLimit("min",t,!1,w.toString(e))}lte(t,e){return this.setLimit("max",t,!0,w.toString(e))}lt(t,e){return this.setLimit("max",t,!1,w.toString(e))}setLimit(t,e,r,s){return new n({...this._def,checks:[...this._def.checks,{kind:t,value:e,inclusive:r,message:w.toString(s)}]})}_addCheck(t){return new n({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:w.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:w.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:w.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:w.toString(t)})}multipleOf(t,e){return this._addCheck({kind:"multipleOf",value:t,message:w.toString(e)})}get minValue(){let t=null;for(let e of this._def.checks)e.kind==="min"&&(t===null||e.value>t)&&(t=e.value);return t}get maxValue(){let t=null;for(let e of this._def.checks)e.kind==="max"&&(t===null||e.value<t)&&(t=e.value);return t}};Fe.create=n=>new Fe({checks:[],typeName:T.ZodBigInt,coerce:n?.coerce??!1,...P(n)});var Oe=class extends E{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==g.boolean){let r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:g.boolean,received:r.parsedType}),v}return M(t.data)}};Oe.create=n=>new Oe({typeName:T.ZodBoolean,coerce:n?.coerce||!1,...P(n)});var Ne=class n extends E{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==g.date){let a=this._getOrReturnCtx(t);return h(a,{code:f.invalid_type,expected:g.date,received:a.parsedType}),v}if(Number.isNaN(t.data.getTime())){let a=this._getOrReturnCtx(t);return h(a,{code:f.invalid_date}),v}let r=new F,s;for(let a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(s=this._getOrReturnCtx(t,s),h(s,{code:f.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),r.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(s=this._getOrReturnCtx(t,s),h(s,{code:f.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),r.dirty()):S.assertNever(a);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new n({...this._def,checks:[...this._def.checks,t]})}min(t,e){return this._addCheck({kind:"min",value:t.getTime(),message:w.toString(e)})}max(t,e){return this._addCheck({kind:"max",value:t.getTime(),message:w.toString(e)})}get minDate(){let t=null;for(let e of this._def.checks)e.kind==="min"&&(t===null||e.value>t)&&(t=e.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(let e of this._def.checks)e.kind==="max"&&(t===null||e.value<t)&&(t=e.value);return t!=null?new Date(t):null}};Ne.create=n=>new Ne({checks:[],coerce:n?.coerce||!1,typeName:T.ZodDate,...P(n)});var at=class extends E{_parse(t){if(this._getType(t)!==g.symbol){let r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:g.symbol,received:r.parsedType}),v}return M(t.data)}};at.create=n=>new at({typeName:T.ZodSymbol,...P(n)});var We=class extends E{_parse(t){if(this._getType(t)!==g.undefined){let r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:g.undefined,received:r.parsedType}),v}return M(t.data)}};We.create=n=>new We({typeName:T.ZodUndefined,...P(n)});var Be=class extends E{_parse(t){if(this._getType(t)!==g.null){let r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:g.null,received:r.parsedType}),v}return M(t.data)}};Be.create=n=>new Be({typeName:T.ZodNull,...P(n)});var _e=class extends E{constructor(){super(...arguments),this._any=!0}_parse(t){return M(t.data)}};_e.create=n=>new _e({typeName:T.ZodAny,...P(n)});var ue=class extends E{constructor(){super(...arguments),this._unknown=!0}_parse(t){return M(t.data)}};ue.create=n=>new ue({typeName:T.ZodUnknown,...P(n)});var ee=class extends E{_parse(t){let e=this._getOrReturnCtx(t);return h(e,{code:f.invalid_type,expected:g.never,received:e.parsedType}),v}};ee.create=n=>new ee({typeName:T.ZodNever,...P(n)});var it=class extends E{_parse(t){if(this._getType(t)!==g.undefined){let r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:g.void,received:r.parsedType}),v}return M(t.data)}};it.create=n=>new it({typeName:T.ZodVoid,...P(n)});var fe=class n extends E{_parse(t){let{ctx:e,status:r}=this._processInputParams(t),s=this._def;if(e.parsedType!==g.array)return h(e,{code:f.invalid_type,expected:g.array,received:e.parsedType}),v;if(s.exactLength!==null){let i=e.data.length>s.exactLength.value,o=e.data.length<s.exactLength.value;(i||o)&&(h(e,{code:i?f.too_big:f.too_small,minimum:o?s.exactLength.value:void 0,maximum:i?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&e.data.length<s.minLength.value&&(h(e,{code:f.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&e.data.length>s.maxLength.value&&(h(e,{code:f.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),e.common.async)return Promise.all([...e.data].map((i,o)=>s.type._parseAsync(new Q(e,i,e.path,o)))).then(i=>F.mergeArray(r,i));let a=[...e.data].map((i,o)=>s.type._parseSync(new Q(e,i,e.path,o)));return F.mergeArray(r,a)}get element(){return this._def.type}min(t,e){return new n({...this._def,minLength:{value:t,message:w.toString(e)}})}max(t,e){return new n({...this._def,maxLength:{value:t,message:w.toString(e)}})}length(t,e){return new n({...this._def,exactLength:{value:t,message:w.toString(e)}})}nonempty(t){return this.min(1,t)}};fe.create=(n,t)=>new fe({type:n,minLength:null,maxLength:null,exactLength:null,typeName:T.ZodArray,...P(t)});function st(n){if(n instanceof z){let t={};for(let e in n.shape){let r=n.shape[e];t[e]=Z.create(st(r))}return new z({...n._def,shape:()=>t})}else return n instanceof fe?new fe({...n._def,type:st(n.element)}):n instanceof Z?Z.create(st(n.unwrap())):n instanceof se?se.create(st(n.unwrap())):n instanceof ne?ne.create(n.items.map(t=>st(t))):n}var z=class n extends E{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let t=this._def.shape(),e=S.objectKeys(t);return this._cached={shape:t,keys:e},this._cached}_parse(t){if(this._getType(t)!==g.object){let c=this._getOrReturnCtx(t);return h(c,{code:f.invalid_type,expected:g.object,received:c.parsedType}),v}let{status:r,ctx:s}=this._processInputParams(t),{shape:a,keys:i}=this._getCached(),o=[];if(!(this._def.catchall instanceof ee&&this._def.unknownKeys==="strip"))for(let c in s.data)i.includes(c)||o.push(c);let l=[];for(let c of i){let d=a[c],p=s.data[c];l.push({key:{status:"valid",value:c},value:d._parse(new Q(s,p,s.path,c)),alwaysSet:c in s.data})}if(this._def.catchall instanceof ee){let c=this._def.unknownKeys;if(c==="passthrough")for(let d of o)l.push({key:{status:"valid",value:d},value:{status:"valid",value:s.data[d]}});else if(c==="strict")o.length>0&&(h(s,{code:f.unrecognized_keys,keys:o}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let c=this._def.catchall;for(let d of o){let p=s.data[d];l.push({key:{status:"valid",value:d},value:c._parse(new Q(s,p,s.path,d)),alwaysSet:d in s.data})}}return s.common.async?Promise.resolve().then(async()=>{let c=[];for(let d of l){let p=await d.key,m=await d.value;c.push({key:p,value:m,alwaysSet:d.alwaysSet})}return c}).then(c=>F.mergeObjectSync(r,c)):F.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return w.errToObj,new n({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(e,r)=>{let s=this._def.errorMap?.(e,r).message??r.defaultError;return e.code==="unrecognized_keys"?{message:w.errToObj(t).message??s}:{message:s}}}:{}})}strip(){return new n({...this._def,unknownKeys:"strip"})}passthrough(){return new n({...this._def,unknownKeys:"passthrough"})}extend(t){return new n({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new n({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:T.ZodObject})}setKey(t,e){return this.augment({[t]:e})}catchall(t){return new n({...this._def,catchall:t})}pick(t){let e={};for(let r of S.objectKeys(t))t[r]&&this.shape[r]&&(e[r]=this.shape[r]);return new n({...this._def,shape:()=>e})}omit(t){let e={};for(let r of S.objectKeys(this.shape))t[r]||(e[r]=this.shape[r]);return new n({...this._def,shape:()=>e})}deepPartial(){return st(this)}partial(t){let e={};for(let r of S.objectKeys(this.shape)){let s=this.shape[r];t&&!t[r]?e[r]=s:e[r]=s.optional()}return new n({...this._def,shape:()=>e})}required(t){let e={};for(let r of S.objectKeys(this.shape))if(t&&!t[r])e[r]=this.shape[r];else{let a=this.shape[r];for(;a instanceof Z;)a=a._def.innerType;e[r]=a}return new n({...this._def,shape:()=>e})}keyof(){return ms(S.objectKeys(this.shape))}};z.create=(n,t)=>new z({shape:()=>n,unknownKeys:"strip",catchall:ee.create(),typeName:T.ZodObject,...P(t)});z.strictCreate=(n,t)=>new z({shape:()=>n,unknownKeys:"strict",catchall:ee.create(),typeName:T.ZodObject,...P(t)});z.lazycreate=(n,t)=>new z({shape:n,unknownKeys:"strip",catchall:ee.create(),typeName:T.ZodObject,...P(t)});var Me=class extends E{_parse(t){let{ctx:e}=this._processInputParams(t),r=this._def.options;function s(a){for(let o of a)if(o.result.status==="valid")return o.result;for(let o of a)if(o.result.status==="dirty")return e.common.issues.push(...o.ctx.common.issues),o.result;let i=a.map(o=>new q(o.ctx.common.issues));return h(e,{code:f.invalid_union,unionErrors:i}),v}if(e.common.async)return Promise.all(r.map(async a=>{let i={...e,common:{...e.common,issues:[]},parent:null};return{result:await a._parseAsync({data:e.data,path:e.path,parent:i}),ctx:i}})).then(s);{let a,i=[];for(let l of r){let c={...e,common:{...e.common,issues:[]},parent:null},d=l._parseSync({data:e.data,path:e.path,parent:c});if(d.status==="valid")return d;d.status==="dirty"&&!a&&(a={result:d,ctx:c}),c.common.issues.length&&i.push(c.common.issues)}if(a)return e.common.issues.push(...a.ctx.common.issues),a.result;let o=i.map(l=>new q(l));return h(e,{code:f.invalid_union,unionErrors:o}),v}}get options(){return this._def.options}};Me.create=(n,t)=>new Me({options:n,typeName:T.ZodUnion,...P(t)});var pe=n=>n instanceof Ke?pe(n.schema):n instanceof J?pe(n.innerType()):n instanceof Ge?[n.value]:n instanceof qe?n.options:n instanceof ze?S.objectValues(n.enum):n instanceof Ue?pe(n._def.innerType):n instanceof We?[void 0]:n instanceof Be?[null]:n instanceof Z?[void 0,...pe(n.unwrap())]:n instanceof se?[null,...pe(n.unwrap())]:n instanceof At||n instanceof He?pe(n.unwrap()):n instanceof Ye?pe(n._def.innerType):[],Jt=class n extends E{_parse(t){let{ctx:e}=this._processInputParams(t);if(e.parsedType!==g.object)return h(e,{code:f.invalid_type,expected:g.object,received:e.parsedType}),v;let r=this.discriminator,s=e.data[r],a=this.optionsMap.get(s);return a?e.common.async?a._parseAsync({data:e.data,path:e.path,parent:e}):a._parseSync({data:e.data,path:e.path,parent:e}):(h(e,{code:f.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),v)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,e,r){let s=new Map;for(let a of e){let i=pe(a.shape[t]);if(!i.length)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let o of i){if(s.has(o))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);s.set(o,a)}}return new n({typeName:T.ZodDiscriminatedUnion,discriminator:t,options:e,optionsMap:s,...P(r)})}};function Xr(n,t){let e=re(n),r=re(t);if(n===t)return{valid:!0,data:n};if(e===g.object&&r===g.object){let s=S.objectKeys(t),a=S.objectKeys(n).filter(o=>s.indexOf(o)!==-1),i={...n,...t};for(let o of a){let l=Xr(n[o],t[o]);if(!l.valid)return{valid:!1};i[o]=l.data}return{valid:!0,data:i}}else if(e===g.array&&r===g.array){if(n.length!==t.length)return{valid:!1};let s=[];for(let a=0;a<n.length;a++){let i=n[a],o=t[a],l=Xr(i,o);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return e===g.date&&r===g.date&&+n==+t?{valid:!0,data:n}:{valid:!1}}var Ve=class extends E{_parse(t){let{status:e,ctx:r}=this._processInputParams(t),s=(a,i)=>{if(Zt(a)||Zt(i))return v;let o=Xr(a.value,i.value);return o.valid?((Qt(a)||Qt(i))&&e.dirty(),{status:e.value,value:o.data}):(h(r,{code:f.invalid_intersection_types}),v)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([a,i])=>s(a,i)):s(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}};Ve.create=(n,t,e)=>new Ve({left:n,right:t,typeName:T.ZodIntersection,...P(e)});var ne=class n extends E{_parse(t){let{status:e,ctx:r}=this._processInputParams(t);if(r.parsedType!==g.array)return h(r,{code:f.invalid_type,expected:g.array,received:r.parsedType}),v;if(r.data.length<this._def.items.length)return h(r,{code:f.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),v;!this._def.rest&&r.data.length>this._def.items.length&&(h(r,{code:f.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),e.dirty());let a=[...r.data].map((i,o)=>{let l=this._def.items[o]||this._def.rest;return l?l._parse(new Q(r,i,r.path,o)):null}).filter(i=>!!i);return r.common.async?Promise.all(a).then(i=>F.mergeArray(e,i)):F.mergeArray(e,a)}get items(){return this._def.items}rest(t){return new n({...this._def,rest:t})}};ne.create=(n,t)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new ne({items:n,typeName:T.ZodTuple,rest:null,...P(t)})};var Xt=class n extends E{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){let{status:e,ctx:r}=this._processInputParams(t);if(r.parsedType!==g.object)return h(r,{code:f.invalid_type,expected:g.object,received:r.parsedType}),v;let s=[],a=this._def.keyType,i=this._def.valueType;for(let o in r.data)s.push({key:a._parse(new Q(r,o,r.path,o)),value:i._parse(new Q(r,r.data[o],r.path,o)),alwaysSet:o in r.data});return r.common.async?F.mergeObjectAsync(e,s):F.mergeObjectSync(e,s)}get element(){return this._def.valueType}static create(t,e,r){return e instanceof E?new n({keyType:t,valueType:e,typeName:T.ZodRecord,...P(r)}):new n({keyType:xe.create(),valueType:t,typeName:T.ZodRecord,...P(e)})}},ot=class extends E{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){let{status:e,ctx:r}=this._processInputParams(t);if(r.parsedType!==g.map)return h(r,{code:f.invalid_type,expected:g.map,received:r.parsedType}),v;let s=this._def.keyType,a=this._def.valueType,i=[...r.data.entries()].map(([o,l],c)=>({key:s._parse(new Q(r,o,r.path,[c,"key"])),value:a._parse(new Q(r,l,r.path,[c,"value"]))}));if(r.common.async){let o=new Map;return Promise.resolve().then(async()=>{for(let l of i){let c=await l.key,d=await l.value;if(c.status==="aborted"||d.status==="aborted")return v;(c.status==="dirty"||d.status==="dirty")&&e.dirty(),o.set(c.value,d.value)}return{status:e.value,value:o}})}else{let o=new Map;for(let l of i){let c=l.key,d=l.value;if(c.status==="aborted"||d.status==="aborted")return v;(c.status==="dirty"||d.status==="dirty")&&e.dirty(),o.set(c.value,d.value)}return{status:e.value,value:o}}}};ot.create=(n,t,e)=>new ot({valueType:t,keyType:n,typeName:T.ZodMap,...P(e)});var lt=class n extends E{_parse(t){let{status:e,ctx:r}=this._processInputParams(t);if(r.parsedType!==g.set)return h(r,{code:f.invalid_type,expected:g.set,received:r.parsedType}),v;let s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(h(r,{code:f.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),e.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(h(r,{code:f.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),e.dirty());let a=this._def.valueType;function i(l){let c=new Set;for(let d of l){if(d.status==="aborted")return v;d.status==="dirty"&&e.dirty(),c.add(d.value)}return{status:e.value,value:c}}let o=[...r.data.values()].map((l,c)=>a._parse(new Q(r,l,r.path,c)));return r.common.async?Promise.all(o).then(l=>i(l)):i(o)}min(t,e){return new n({...this._def,minSize:{value:t,message:w.toString(e)}})}max(t,e){return new n({...this._def,maxSize:{value:t,message:w.toString(e)}})}size(t,e){return this.min(t,e).max(t,e)}nonempty(t){return this.min(1,t)}};lt.create=(n,t)=>new lt({valueType:n,minSize:null,maxSize:null,typeName:T.ZodSet,...P(t)});var er=class n extends E{constructor(){super(...arguments),this.validate=this.implement}_parse(t){let{ctx:e}=this._processInputParams(t);if(e.parsedType!==g.function)return h(e,{code:f.invalid_type,expected:g.function,received:e.parsedType}),v;function r(o,l){return St({data:o,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,rt(),de].filter(c=>!!c),issueData:{code:f.invalid_arguments,argumentsError:l}})}function s(o,l){return St({data:o,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,rt(),de].filter(c=>!!c),issueData:{code:f.invalid_return_type,returnTypeError:l}})}let a={errorMap:e.common.contextualErrorMap},i=e.data;if(this._def.returns instanceof Pe){let o=this;return M(async function(...l){let c=new q([]),d=await o._def.args.parseAsync(l,a).catch(k=>{throw c.addIssue(r(l,k)),c}),p=await Reflect.apply(i,this,d);return await o._def.returns._def.type.parseAsync(p,a).catch(k=>{throw c.addIssue(s(p,k)),c})})}else{let o=this;return M(function(...l){let c=o._def.args.safeParse(l,a);if(!c.success)throw new q([r(l,c.error)]);let d=Reflect.apply(i,this,c.data),p=o._def.returns.safeParse(d,a);if(!p.success)throw new q([s(d,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new n({...this._def,args:ne.create(t).rest(ue.create())})}returns(t){return new n({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,e,r){return new n({args:t||ne.create([]).rest(ue.create()),returns:e||ue.create(),typeName:T.ZodFunction,...P(r)})}},Ke=class extends E{get schema(){return this._def.getter()}_parse(t){let{ctx:e}=this._processInputParams(t);return this._def.getter()._parse({data:e.data,path:e.path,parent:e})}};Ke.create=(n,t)=>new Ke({getter:n,typeName:T.ZodLazy,...P(t)});var Ge=class extends E{_parse(t){if(t.data!==this._def.value){let e=this._getOrReturnCtx(t);return h(e,{received:e.data,code:f.invalid_literal,expected:this._def.value}),v}return{status:"valid",value:t.data}}get value(){return this._def.value}};Ge.create=(n,t)=>new Ge({value:n,typeName:T.ZodLiteral,...P(t)});function ms(n,t){return new qe({values:n,typeName:T.ZodEnum,...P(t)})}var qe=class n extends E{_parse(t){if(typeof t.data!="string"){let e=this._getOrReturnCtx(t),r=this._def.values;return h(e,{expected:S.joinValues(r),received:e.parsedType,code:f.invalid_type}),v}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(t.data)){let e=this._getOrReturnCtx(t),r=this._def.values;return h(e,{received:e.data,code:f.invalid_enum_value,options:r}),v}return M(t.data)}get options(){return this._def.values}get enum(){let t={};for(let e of this._def.values)t[e]=e;return t}get Values(){let t={};for(let e of this._def.values)t[e]=e;return t}get Enum(){let t={};for(let e of this._def.values)t[e]=e;return t}extract(t,e=this._def){return n.create(t,{...this._def,...e})}exclude(t,e=this._def){return n.create(this.options.filter(r=>!t.includes(r)),{...this._def,...e})}};qe.create=ms;var ze=class extends E{_parse(t){let e=S.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==g.string&&r.parsedType!==g.number){let s=S.objectValues(e);return h(r,{expected:S.joinValues(s),received:r.parsedType,code:f.invalid_type}),v}if(this._cache||(this._cache=new Set(S.getValidEnumValues(this._def.values))),!this._cache.has(t.data)){let s=S.objectValues(e);return h(r,{received:r.data,code:f.invalid_enum_value,options:s}),v}return M(t.data)}get enum(){return this._def.values}};ze.create=(n,t)=>new ze({values:n,typeName:T.ZodNativeEnum,...P(t)});var Pe=class extends E{unwrap(){return this._def.type}_parse(t){let{ctx:e}=this._processInputParams(t);if(e.parsedType!==g.promise&&e.common.async===!1)return h(e,{code:f.invalid_type,expected:g.promise,received:e.parsedType}),v;let r=e.parsedType===g.promise?e.data:Promise.resolve(e.data);return M(r.then(s=>this._def.type.parseAsync(s,{path:e.path,errorMap:e.common.contextualErrorMap})))}};Pe.create=(n,t)=>new Pe({type:n,typeName:T.ZodPromise,...P(t)});var J=class extends E{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===T.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){let{status:e,ctx:r}=this._processInputParams(t),s=this._def.effect||null,a={addIssue:i=>{h(r,i),i.fatal?e.abort():e.dirty()},get path(){return r.path}};if(a.addIssue=a.addIssue.bind(a),s.type==="preprocess"){let i=s.transform(r.data,a);if(r.common.async)return Promise.resolve(i).then(async o=>{if(e.value==="aborted")return v;let l=await this._def.schema._parseAsync({data:o,path:r.path,parent:r});return l.status==="aborted"?v:l.status==="dirty"?De(l.value):e.value==="dirty"?De(l.value):l});{if(e.value==="aborted")return v;let o=this._def.schema._parseSync({data:i,path:r.path,parent:r});return o.status==="aborted"?v:o.status==="dirty"?De(o.value):e.value==="dirty"?De(o.value):o}}if(s.type==="refinement"){let i=o=>{let l=s.refinement(o,a);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(r.common.async===!1){let o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?v:(o.status==="dirty"&&e.dirty(),i(o.value),{status:e.value,value:o.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>o.status==="aborted"?v:(o.status==="dirty"&&e.dirty(),i(o.value).then(()=>({status:e.value,value:o.value}))))}if(s.type==="transform")if(r.common.async===!1){let i=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Te(i))return v;let o=s.transform(i.value,a);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:e.value,value:o}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(i=>Te(i)?Promise.resolve(s.transform(i.value,a)).then(o=>({status:e.value,value:o})):v);S.assertNever(s)}};J.create=(n,t,e)=>new J({schema:n,typeName:T.ZodEffects,effect:t,...P(e)});J.createWithPreprocess=(n,t,e)=>new J({schema:t,effect:{type:"preprocess",transform:n},typeName:T.ZodEffects,...P(e)});var Z=class extends E{_parse(t){return this._getType(t)===g.undefined?M(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}};Z.create=(n,t)=>new Z({innerType:n,typeName:T.ZodOptional,...P(t)});var se=class extends E{_parse(t){return this._getType(t)===g.null?M(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}};se.create=(n,t)=>new se({innerType:n,typeName:T.ZodNullable,...P(t)});var Ue=class extends E{_parse(t){let{ctx:e}=this._processInputParams(t),r=e.data;return e.parsedType===g.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:e.path,parent:e})}removeDefault(){return this._def.innerType}};Ue.create=(n,t)=>new Ue({innerType:n,typeName:T.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...P(t)});var Ye=class extends E{_parse(t){let{ctx:e}=this._processInputParams(t),r={...e,common:{...e.common,issues:[]}},s=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return nt(s)?s.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new q(r.common.issues)},input:r.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new q(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}};Ye.create=(n,t)=>new Ye({innerType:n,typeName:T.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...P(t)});var ct=class extends E{_parse(t){if(this._getType(t)!==g.nan){let r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:g.nan,received:r.parsedType}),v}return{status:"valid",value:t.data}}};ct.create=n=>new ct({typeName:T.ZodNaN,...P(n)});var jo=Symbol("zod_brand"),At=class extends E{_parse(t){let{ctx:e}=this._processInputParams(t),r=e.data;return this._def.type._parse({data:r,path:e.path,parent:e})}unwrap(){return this._def.type}},jt=class n extends E{_parse(t){let{status:e,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{let a=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?v:a.status==="dirty"?(e.dirty(),De(a.value)):this._def.out._parseAsync({data:a.value,path:r.path,parent:r})})();{let s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?v:s.status==="dirty"?(e.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(t,e){return new n({in:t,out:e,typeName:T.ZodPipeline})}},He=class extends E{_parse(t){let e=this._def.innerType._parse(t),r=s=>(Te(s)&&(s.value=Object.freeze(s.value)),s);return nt(e)?e.then(s=>r(s)):r(e)}unwrap(){return this._def.innerType}};He.create=(n,t)=>new He({innerType:n,typeName:T.ZodReadonly,...P(t)});function ds(n,t){let e=typeof n=="function"?n(t):typeof n=="string"?{message:n}:n;return typeof e=="string"?{message:e}:e}function hs(n,t={},e){return n?_e.create().superRefine((r,s)=>{let a=n(r);if(a instanceof Promise)return a.then(i=>{if(!i){let o=ds(t,r),l=o.fatal??e??!0;s.addIssue({code:"custom",...o,fatal:l})}});if(!a){let i=ds(t,r),o=i.fatal??e??!0;s.addIssue({code:"custom",...i,fatal:o})}}):_e.create()}var Co={object:z.lazycreate},T;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(T||(T={}));var Io=(n,t={message:`Input not instance of ${n.name}`})=>hs(e=>e instanceof n,t),gs=xe.create,ks=Re.create,$o=ct.create,Lo=Fe.create,ws=Oe.create,Do=Ne.create,Ro=at.create,Fo=We.create,Oo=Be.create,No=_e.create,Wo=ue.create,Bo=ee.create,Mo=it.create,Vo=fe.create,Ko=z.create,Go=z.strictCreate,qo=Me.create,zo=Jt.create,Uo=Ve.create,Yo=ne.create,Ho=Xt.create,Zo=ot.create,Qo=lt.create,Jo=er.create,Xo=Ke.create,el=Ge.create,tl=qe.create,rl=ze.create,nl=Pe.create,sl=J.create,al=Z.create,il=se.create,ol=J.createWithPreprocess,ll=jt.create,cl=()=>gs().optional(),dl=()=>ks().optional(),pl=()=>ws().optional(),ul={string:(n=>xe.create({...n,coerce:!0})),number:(n=>Re.create({...n,coerce:!0})),boolean:(n=>Oe.create({...n,coerce:!0})),bigint:(n=>Fe.create({...n,coerce:!0})),date:(n=>Ne.create({...n,coerce:!0}))};var fl=v;var ae=(r=>(r.Manual="manual",r.Codex="codex",r.CustomCli="custom-cli",r))(ae||{}),Ct=(r=>(r.Iterm="iterm",r.Warp="warp",r.Obsidian="obsidian",r))(Ct||{}),Ze=(e=>(e.Wps="wps",e.Feishu="feishu",e))(Ze||{}),tr=(e=>(e.Vertical="vertical",e.Horizontal="horizontal",e))(tr||{}),Ee=(r=>(r.Ready="ready",r.NeedUserInput="need_user_input",r.Blocked="blocked",r))(Ee||{}),be=(i=>(i.CreateTask="create_task",i.CreateGeneralTask="create_general_task",i.CreateWorkflow="create_workflow",i.ArchiveProjectInput="archive_project_input",i.AskUser="ask_user",i.Blocked="blocked",i))(be||{}),O=(r=>(r.Project="project",r.Workflow="workflow",r.General="general",r))(O||{}),Se=(r=>(r.Low="low",r.Medium="medium",r.High="high",r))(Se||{}),U=(i=>(i.Doing="doing",i.Todo="todo",i.PendingRelease="pending_release",i.Waiting="waiting",i.Backlog="backlog",i.Done="done",i))(U||{}),dt=(a=>(a.P0="P0",a.P1="P1",a.P2="P2",a.P3="P3",a.P4="P4",a))(dt||{});var me=(s=>(s.Feature="feature",s.Incident="incident",s.Datafix="datafix",s.DataExport="data-export",s))(me||{});var vs="ai-knowledge-workflow",rr="AI Knowledge Workflow",$t={manual:"Manual",codex:"Codex CLI","custom-cli":"Custom CLI"},ys={iterm:"iTerm",warp:"Warp",obsidian:"Obsidian Terminal"},Qe={wps:"WPS",feishu:"\u98DE\u4E66"},uf={vertical:"\u4E0A\u4E0B\u5206\u680F",horizontal:"\u5DE6\u53F3\u5206\u680F"},ff={ready:"Ready",need_user_input:"Need user input",blocked:"Blocked"},Ts={create_task:"Create task",create_general_task:"Create general task",create_workflow:"Create workflow",archive_project_input:"Archive project input",ask_user:"Ask user",blocked:"Blocked"},xs={project:"Project",workflow:"Workflow",general:"General"},mf={low:"Low",medium:"Medium",high:"High"},Ae={doing:"Doing",todo:"Todo",pending_release:"Pending Release",waiting:"Waiting",backlog:"Backlog",done:"Done"},ut={doing:"\u8FDB\u884C\u4E2D",todo:"\u5F85\u5904\u7406",pending_release:"\u5F85\u4E0A\u7EBF",waiting:"\u7B49\u5F85\u4E2D",backlog:"\u5F85\u6392\u671F",done:"\u5DF2\u5B8C\u6210"},ml={"In Progress":"doing",Next:"todo",\u4E0B\u4E00\u6B65:"todo",\u5F85\u5904\u7406:"todo",\u5F85\u4E0A\u7EBF:"pending_release"},hf={P0:"P0",P1:"P1",P2:"P2",P3:"P3",P4:"P4"},pt=["doing","todo","pending_release","waiting","backlog","done"],Lt=pt.filter(n=>n!=="done");function X(n,t="todo"){if(typeof n!="string")return t;if(Object.values(U).includes(n))return n;let e=n.trim(),r=ml[e];if(r)return r;let s=e.toLowerCase(),a=pt.find(o=>o.toString()===s),i=pt.find(o=>Ae[o].toLowerCase()===s);return a??i??t}function ft(n){return Ae[n]}var Dt=["P0","P1","P2","P3","P4"],_s={feature:"Feature",incident:"Incident",datafix:"Data fix","data-export":"Data export"},gf={info:"Info",warning:"Warning",error:"Error",blocker:"Blocker"},Ps="",nr="codex",Es="";var K=require("obsidian");var V={vaultRoot:Ps,provider:"manual",terminalApp:"obsidian",taskSourceApp:"wps",enableKcworkApp:!1,codexCliPath:nr,customCliPath:Es,defaultTaskStatus:"todo",autoValidate:!0,layoutDirection:"vertical"};function bs(n){let t=X(n,V.defaultTaskStatus);return t&&Lt.includes(t)?t:V.defaultTaskStatus}function Ss(n){return typeof n!="string"?V.terminalApp:As().includes(n)?n:V.terminalApp}function As(){return K.Platform.isMacOS?Object.values(Ct):["obsidian"]}function js(n){return typeof n!="string"?V.layoutDirection:Object.values(tr).includes(n)?n:V.layoutDirection}var sr=class extends K.PluginSettingTab{constructor(e,r){super(e,r);this.plugin=r}display(){let{containerEl:e}=this;e.empty(),new K.Setting(e).setName("Vault root").setDesc("Optional absolute vault root override. Leave empty to use the current Obsidian vault automatically.").addText(r=>r.setPlaceholder("Auto-detect current vault").setValue(this.plugin.settings.vaultRoot).onChange(async s=>{this.plugin.settings.vaultRoot=s.trim(),await this.plugin.saveSettings()})),new K.Setting(e).setName("AI agent").setDesc("Configured agent used by plan generation, skill execution, and terminal workspace actions.").addDropdown(r=>{for(let s of Object.values(ae))r.addOption(s,$t[s]);r.setValue(this.plugin.settings.provider).onChange(async s=>{this.plugin.settings.provider=s,await this.plugin.saveSettings()})}),new K.Setting(e).setName("\u4EFB\u52A1\u6765\u6E90\u5E94\u7528").setDesc("\u9009\u62E9 WPS \u6216\u98DE\u4E66\u3002\u6240\u6709\u4EFB\u52A1\u7684\u6765\u6E90\u6807\u7B7E\u548C\u6253\u5F00\u5165\u53E3\u7EDF\u4E00\u8DDF\u968F\u6B64\u8BBE\u7F6E\uFF0C\u5DF2\u6709\u6765\u6E90\u540D\u79F0\u4FDD\u6301\u4E0D\u53D8\u3002WPS \u6253\u5F00\u529F\u80FD\u4EC5\u652F\u6301 macOS\uFF1B\u98DE\u4E66\u9700\u8981\u5B89\u88C5\u684C\u9762\u5BA2\u6237\u7AEF\u3002").addDropdown(r=>{for(let s of Object.values(Ze))r.addOption(s,Qe[s]);r.setValue(this.plugin.settings.taskSourceApp).onChange(async s=>{this.plugin.settings.taskSourceApp=s,await this.plugin.saveSettings(),await this.plugin.refreshTaskSourceViews()})}),new K.Setting(e).setName("\u663E\u793A KCwork \u6253\u5F00\u5165\u53E3").setDesc("\u9ED8\u8BA4\u5173\u95ED\u3002\u5F00\u542F\u540E\u5728\u4EFB\u52A1\u548C\u9879\u76EE\u5361\u7247\u663E\u793A KCwork \u6309\u94AE\uFF1B\u4EC5\u652F\u6301 macOS\u3002\u70B9\u51FB\u540E\u590D\u5236\u5DE5\u4F5C\u76EE\u5F55\u5E76\u6253\u5F00 KCwork\uFF0C\u53EF\u5728\u9009\u76EE\u5F55\u7A97\u53E3\u4F7F\u7528\u201C\u524D\u5F80\u6587\u4EF6\u5939\u201D\u7C98\u8D34\u8DEF\u5F84\u3002").addToggle(r=>r.setValue(this.plugin.settings.enableKcworkApp).onChange(async s=>{this.plugin.settings.enableKcworkApp=s,await this.plugin.saveSettings(),await this.plugin.refreshKcworkViews()})),new K.Setting(e).setName("Terminal app").setDesc(K.Platform.isWin?"Automatic terminal launch is unavailable on Windows. Use Copy to Agent and run your CLI manually.":"Obsidian terminal requires the separate Terminal community plugin and a POSIX shell. iTerm and Warp launchers are available on macOS only.").addDropdown(r=>{for(let s of As())r.addOption(s,ys[s]);r.setValue(this.plugin.settings.terminalApp).onChange(async s=>{this.plugin.settings.terminalApp=s,await this.plugin.saveSettings()})}),new K.Setting(e).setName("Codex CLI path").setDesc("Command or absolute path used by the Codex provider.").addText(r=>r.setPlaceholder(nr).setValue(this.plugin.settings.codexCliPath).onChange(async s=>{this.plugin.settings.codexCliPath=s.trim()||nr,await this.plugin.saveSettings()})),new K.Setting(e).setName("Custom CLI command").setDesc("Complete non-interactive command that reads the prompt from standard input and writes its answer to standard output. Include all required arguments; no arguments are added automatically.").addText(r=>r.setPlaceholder("Enter a command that reads from standard input").setValue(this.plugin.settings.customCliPath).onChange(async s=>{this.plugin.settings.customCliPath=s.trim(),await this.plugin.saveSettings()})),new K.Setting(e).setName("Default task status").setDesc("Task board status used when a ready plan does not specify one.").addDropdown(r=>{for(let s of Lt)r.addOption(s,Ae[s]);r.setValue(this.plugin.settings.defaultTaskStatus).onChange(async s=>{this.plugin.settings.defaultTaskStatus=s,await this.plugin.saveSettings()})}),new K.Setting(e).setName("Auto validate").setDesc("Run vault validation after future execution modules finish writing changes.").addToggle(r=>r.setValue(this.plugin.settings.autoValidate).onChange(async s=>{this.plugin.settings.autoValidate=s,await this.plugin.saveSettings()}))}};var hl=_.object({field:_.string().trim().min(1,"questions[].field is required"),question:_.string().trim().min(1,"questions[].question is required"),options:_.array(_.string().trim().min(1,"questions[].options[] cannot be empty")).optional()}),gl=_.object({from:_.string().trim().min(1,"moves[].from is required"),to:_.string().trim().min(1,"moves[].to is required")}),kl=_.object({text:_.string().trim().min(1,"tasks[].text is required"),link:_.string().trim().min(1,"tasks[].link cannot be empty").optional()}),Cs=_.object({decision:_.nativeEnum(Ee),action:_.nativeEnum(be).optional(),task_scope:_.nativeEnum(O).optional(),project:_.string().trim().min(1,"project cannot be empty").nullable().optional(),related_projects:_.array(_.string().trim().min(1,"related_projects[] cannot be empty")).optional(),workflow_type:_.nativeEnum(me).nullable().optional(),workflow_slug:_.string().trim().min(1,"workflow_slug cannot be empty").nullable().optional(),task_status:_.preprocess(n=>X(n,void 0),_.nativeEnum(U).optional()),confidence:_.nativeEnum(Se),reason:_.string().trim().min(1,"reason cannot be empty").optional(),questions:_.array(hl),moves:_.array(gl).optional(),tasks:_.array(kl).optional()}).strict();var wl=/^(?:\/|[A-Za-z]:[\\/]|\\\\|[a-z][a-z0-9+.-]*:)/i;function Is(n){let t=Cs.safeParse(n);if(!t.success){let e=_l(t.error);return{valid:!1,errors:e,warnings:[],blockingReasons:e}}return vl(t.data)}function vl(n){let t=[],e=[],r=[];return yl(n,t,r),Tl(n,t,r),xl(n,t,r),n.confidence!=="high"&&r.push("Plan confidence must be high before execution."),n.reason||e.push("Plan reason is empty; user-facing review context may be unclear."),{valid:t.length===0&&r.length===0,errors:t,warnings:e,blockingReasons:r,plan:n}}function yl(n,t,e){n.questions.length>0&&e.push("Plan has unanswered questions."),n.decision==="ready"&&n.questions.length>0&&e.push("Ready plans cannot contain questions."),n.decision==="need_user_input"&&n.questions.length===0&&t.push("need_user_input plans must include at least one question."),n.decision==="blocked"&&!n.reason&&t.push("blocked plans must include a reason.")}function Tl(n,t,e){if(n.decision==="ready"&&!n.action&&t.push("ready plans must include an action."),n.decision==="ready"&&n.action==="ask_user"&&e.push("ask_user plans cannot be marked ready."),n.decision==="ready"&&n.action==="blocked"&&e.push("blocked action cannot be marked ready."),n.task_status==="done"&&["create_task","create_general_task","create_workflow"].includes(n.action)&&t.push("New tasks cannot be created directly in completed status."),(n.action==="create_task"||n.action==="archive_project_input")&&(n.project||t.push(`${n.action} plans must include project.`)),n.action==="create_task"){n.workflow_type||t.push("create_task plans must include workflow_type.");for(let r of n.tasks??[])r.link||t.push("create_task tasks must include link.")}if(n.action==="create_general_task"){n.task_scope&&n.task_scope!=="general"&&t.push("create_general_task plans must use task_scope general.");for(let r of n.tasks??[])r.link||t.push("create_general_task tasks must include a 10-tasks/items task file link.");(n.project||n.related_projects&&n.related_projects.length>0)&&t.push("create_general_task plans cannot include project or related_projects."),(n.workflow_type||n.workflow_slug)&&t.push("create_general_task plans cannot include workflow metadata."),n.moves&&n.moves.length>0&&t.push("create_general_task plans cannot move files.")}if(n.action==="create_workflow"){n.project||t.push("create_workflow plans must include project."),n.workflow_type||t.push("create_workflow plans must include workflow_type."),n.workflow_slug||(t.push("create_workflow plans must include workflow_slug."),e.push("Workflow creation requires workflow_slug."));for(let r of n.tasks??[])r.link||t.push("create_workflow tasks must include link.")}}function xl(n,t,e){n.moves?.forEach((r,s)=>{en(r.from,`moves[${s}].from`,t,e),en(r.to,`moves[${s}].to`,t,e)}),n.tasks?.forEach((r,s)=>{r.link&&en(r.link,`tasks[${s}].link`,t,e)})}function en(n,t,e,r){if(wl.test(n)){let a=`${t} must be a relative vault path.`;e.push(a),r.push(a)}if(n.split(/[\\/]+/).includes("..")){let a=`${t} cannot include parent directory segments.`;e.push(a),r.push(a)}}function _l(n){return n.issues.map(t=>`${t.path.length>0?t.path.join("."):"plan"}: ${t.message}`)}var Pl=/\b(?:tid:|id:[pwg]-)(\d+)\b/g,mt=class{constructor(t){this.app=t}get dataPath(){return`${this.app.vault.configDir}/plugins/ai-knowledge-workflow/data.json`}async reserveTaskIds(t,e){if(e<=0)return Math.max(await this.readLastTaskId(),Ls(t))+1;let r=await this.readPluginData(),s=Math.max($s(r),Ls(t))+1;return r.lastTaskId=s+e-1,await this.writePluginData(r),s}async reserveNextTaskId(t){return this.reserveTaskIds(t,1)}async readLastTaskId(){return $s(await this.readPluginData())}async readPluginData(){if(!await this.app.vault.adapter.exists(this.dataPath))return{};try{let t=JSON.parse(await this.app.vault.adapter.read(this.dataPath));return El(t)?t:{}}catch{return{}}}async writePluginData(t){await this.app.vault.adapter.write(this.dataPath,`${JSON.stringify(t,null,2)}
`)}};function El(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function $s(n){return Ds(n.lastTaskId)}function Ls(n){let t=0;for(let e of n.matchAll(Pl))t=Math.max(t,Ds(e[1]));return t}function Ds(n){let t=typeof n=="number"?n:typeof n=="string"?Number.parseInt(n,10):0;return Number.isInteger(t)&&t>0?t:0}var tn="10-tasks/board.md",nn=/^\s*(?:[-*]\s+\[[ xX-]\]|[-*]|\d+\.)\s+/,rn=/^(#{1,6})\s+(.+?)\s*$/;var ar=class{constructor(t){this.app=t}async readTaskBoard(){return this.app.vault.adapter.read(tn)}async findDuplicateTasks(t,e={}){let r=await this.readTaskBoard(),s=new Set(r.split(/\r?\n/).filter(o=>nn.test(o.trim())).map(Rs)),a=new Set,i=[];for(let o of t){let l=Rs(ir(o,e));(s.has(l)||a.has(l))&&i.push(o.text),a.add(l)}return i}async appendTasks(t,e,r={}){let s=await this.readTaskBoard(),a=await this.findDuplicateTasks(t,r);if(a.length>0)throw new Error(`Duplicate task entries blocked: ${a.join(", ")}`);let i=await this.renderTaskLines(s,t,r),o=jl(s,e,i);return await this.app.vault.adapter.write(tn,o),{path:tn,addedTasks:i}}async renderTaskLines(t,e,r){let s=r.taskScope,a=r.taskIds?0:await new mt(this.app).reserveTaskIds(t,e.length),i=r.createdAt??Al(new Date);return e.map((o,l)=>ir(o,{...r,createdAt:i,taskIds:[r.taskIds?.[l]??sn(s,a+l)]}))}};function ir(n,t={}){let{title:e,notes:r}=ht(n.text),s=t.taskScope?Sl(e,t.taskScope):e,a=[t.taskIds?.[0],t.createdAt?`created:${t.createdAt}`:""].filter(Boolean),i=a.length>0?`${s} ${a.join(" ")}`:s,o=n.link?`- [ ] ${i} ${bl(n.link)}`:`- [ ] ${i}`;return r.length===0?o:[o,"  > [!note] \u8BF4\u660E",...r.map(l=>`  > - ${l}`)].join(`
`)}function bl(n){let t=n.endsWith(".md")?n:`${n}.md`,e=(t.split("/").pop()?.replace(/\.md$/i,"")||"\u4EFB\u52A1\u5165\u53E3").replace(/[[\]]/g,""),r=t.split("/").map(s=>encodeURIComponent(s).replace(/[()]/g,a=>`%${a.charCodeAt(0).toString(16).toUpperCase()}`)).join("/");return`[${e}](../${r})`}function Sl(n,t){return`${n.replace(/#task\/(?:general|project|workflow)\b/g,"").replace(/\s+/g," ").trim()} #task/${t}`}function Rs(n){return n.replace(nn,"").replace(/\[([^\]]+)]\([^)]+\)/g,"$1").replace(/\[\[([^|\]#]+)(?:#[^|\]]*)?(?:\|([^\]]+))?]]/g,"$2$1").replace(/#task\/(?:general|project|workflow)\b/g,"").replace(/\bid:[pwg]-\d+\b/g,"").replace(/\btid:\d+\b/g,"").replace(/\bcreated:\d{4}-\d{2}-\d{2}(?:\s+\d{2}:\d{2}(?::\d{2})?)?\b/g,"").replace(/\s+/g," ").trim().toLowerCase()}function sn(n,t){return`id:${Os(n)}-${t}`}function Fs(n,t){return`${Os(n)}-${t}`}function Os(n){return n==="workflow"?"w":n==="general"?"g":"p"}function Al(n){let t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0");return`${t}-${e}-${r} ${s}:${a}`}function jl(n,t,e){let r=n.includes(`\r
`)?`\r
`:`
`,s=n.split(/\r?\n/),a=Cl(s,t);if(a===-1){let d=n.endsWith(`
`)||n.length===0?"":r;return`${n}${d}${r}## ${ft(t)}${r}${e.join(r)}${r}`}let i=Il(s,a),o=[...s],c=i>a+1&&o[i-1]!==""&&!nn.test(o[i-1])?["",...e]:e;return o.splice(i,0,...c),o.join(r)}function Cl(n,t){return n.findIndex(e=>{let r=e.match(rn);return r?X(r[2],null)===t:!1})}function Il(n,t){let e=n[t].match(rn),r=e?e[1].length:6;for(let s=t+1;s<n.length;s+=1){let a=n[s].match(rn);if(a&&a[1].length<=r)return s}return n.length}function ht(n){let t=n.split(/\r?\n/).map(a=>Ns(a)).filter(Boolean);if(t.length===0)return{title:"",notes:[]};let[e,...r]=t,s=$l(e);return s?{title:s.title,notes:[...s.notes,...r]}:{title:e,notes:r}}function $l(n){let t=n.split(/[；;]/).map(s=>Ns(s)).filter(Boolean);if(t.length<2)return null;let e=t[0],r=[];for(let s of t.slice(1))/^关联项目\s*[：:]/.test(s)||r.push(s.replace(/^说明\s*[：:]\s*/,""));return r.length>0?{title:e,notes:r}:null}function Ns(n){return n.trim().replace(/^>\s*(?:-\s*)?/,"").replace(/^\[!note]\s*说明\s*$/i,"").replace(/^[-*]\s+/,"").trim()}var or=require("obsidian");var Bs=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/,Ll=new Set(Object.values(O)),Dl=new Set(Object.values(dt));async function an(n,t){return await n.vault.adapter.exists(t)?gt(await n.vault.adapter.read(t)):null}async function on(n,t,e){if(!await n.vault.adapter.exists(t))throw new Error(`Task entry does not exist: ${t}`);let r=await n.vault.adapter.read(t);await n.vault.adapter.write(t,Rt(r,e))}function Rt(n,t){let e=n.match(Bs);if(!e)throw new Error("Task entry is missing frontmatter; repair it before updating the task.");let r=Ms(e[1]),s=X(r.status,null),a={...r,...t};t.status!==void 0&&(t.status!=="done"?delete a.completed_at:s!=="done"&&!a.completed_at&&(a.completed_at=new Date().toISOString()));for(let o of Object.keys(t))(a[o]===void 0||a[o]==="")&&delete a[o];let i=Rl(n.slice(e[0].length));return`---
${(0,or.stringifyYaml)(a).trimEnd()}
---
${i}`}function Rl(n){let t=null;return n.split(/(?<=\n)/).filter(e=>{let r=e.replace(/\r?\n$/,"").match(/^(?: {0,3}>[ \t]?)* {0,3}(`{3,}|~{3,})(.*)$/);return r?(t?r[1][0]===t[0]&&r[1].length>=t.length&&r[2].trim()===""&&(t=null):t=r[1],!0):t!==null||!/^-\s*状态[：:]\s*(?:doing|todo|pending_release|waiting|backlog|done|Doing|Todo|Pending Release|Waiting|Backlog|Done|进行中|待处理|待上线|等待中|待排期|已完成)[。.]?\s*$/.test(e)}).join("")}function gt(n){let t=n.match(Bs);if(!t)return null;try{return Fl(Ms(t[1]))}catch{return null}}function ln(n){return["---",...["id","type","status","project","title","created","completed_at","due","priority","source","entry_type","task_type"].filter(r=>n[r]!==void 0&&n[r]!=="").flatMap(r=>Wl(r,n[r])),"---",""].join(`
`)}function Ms(n){let t=(0,or.parseYaml)(n);if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Task frontmatter must be a YAML mapping.");return t}function Fl(n){let t=X(n.status,null),e=typeof n.type=="string"&&Ll.has(n.type)?n.type:void 0,r=typeof n.priority=="string"&&Dl.has(n.priority)?n.priority:void 0;return Nl({id:ie(n.id),type:e,status:t??void 0,project:Ol(n.project),title:ie(n.title),created:ie(n.created),completed_at:ie(n.completed_at),due:n.due instanceof Date?n.due.toISOString().slice(0,10):ie(n.due),priority:r,source:ie(n.source),entry_type:ie(n.entry_type),task_type:ie(n.task_type)})}function Ol(n){if(Array.isArray(n)){let t=n.map(e=>ie(e)).filter(e=>!!e);return t.length>0?t:void 0}return ie(n)}function ie(n){if(n instanceof Date)return n.toISOString();if(typeof n!="string")return;let t=n.trim();return t.length>0?t:void 0}function Nl(n){return Object.fromEntries(Object.entries(n).filter(([,t])=>t!==void 0&&t!==""))}function Ws(n){return JSON.stringify(n)}function Wl(n,t){return Array.isArray(t)?t.length>0?[`${n}:`,...t.map(e=>`  - ${Ws(e)}`)]:[]:[`${n}: ${Ws(String(t))}`]}function cn(n,t,e=!1){let r=n.trim().replace(/^<|>$/g,"");if(!r)return null;if(r=r.split("#",1)[0],!r)return t;try{r=decodeURIComponent(r)}catch{}if(!r||/^[a-z][a-z0-9+.-]*:/i.test(r)||r.startsWith("/")||/[<>{}]/.test(r))return null;r=r.replace(/\\([ ()])/g,"$1");let s=e&&!r.startsWith(".")?[]:t.split("/").slice(0,-1);for(let a of r.split("/"))if(!(!a||a==="."))if(a===".."){if(!s.length)return null;s.pop()}else s.push(a);return s.join("/")}function lr(n,t){let e=null,r=n.split(/\r?\n/).map(o=>{let l=o.match(/^(?: {0,3}>[ \t]?)* {0,3}(`{3,}|~{3,})(.*)$/);return l?(e?l[1][0]===e[0]&&l[1].length>=e.length&&l[2].trim()===""&&(e=null):e=l[1],""):e?"":o.replace(/(`+)([^`]|(?!\1)`)*\1/g,"")}),s=new Map;for(let o of r){let l=o.match(/^\s*\[([^\]]+)\]:\s*(<[^>]+>|\S+)/);l&&s.set(l[1].toLowerCase(),l[2])}let a=[],i=(o,l,c)=>{let d=cn(o,t,c);d&&a.push({rawTarget:o,target:d,line:l,wiki:c})};return r.forEach((o,l)=>{if(/^\s*\[[^\]]+\]:/.test(o))return;for(let d of o.matchAll(/\[\[([^|\]]+)(?:\|[^\]]*)?\]\]/g))i(d[1],l+1,!0);let c=o.replace(/\[\[[\s\S]*?\]\]/g,"");for(let d of c.matchAll(/\[([^\]]+)\](?:\((<[^>]+>|(?:\\.|[^()\s]|\([^()]*\))+)(?:\s+["'][^"']*["'])?\)|\[([^\]]*)\])/g)){let p=d[2]??s.get((d[3]||d[1]).toLowerCase());p&&i(p,l+1,!1)}}),a}async function cr(n,t,e){if(await n.vault.adapter.exists(t.target))return t.target;if(!/\.[^/]+$/.test(t.target)&&await n.vault.adapter.exists(`${t.target}.md`))return`${t.target}.md`;if(t.wiki){let r=n.metadataCache.getFirstLinkpathDest(t.rawTarget.split("#",1)[0],e);if(r)return r.path}return null}var Bl="30-projects",Ml=/^\|\s*源码项目\s*\|\s*`([^`]+)`\s*\|/m,Vl=/^\|\s*`([^`]+)`\s*\|\s*源码根目录\s*\|/m,oe=class{constructor(t){this.app=t}async listProjects(){let t=await this.app.vault.adapter.list(Bl);return(await Promise.all(t.folders.map(async r=>{let s=r.split("/").pop()??r,a=`${r}/links.md`,i=await this.readIfExists(a);return{name:s,path:r,linksPath:a,sourcePath:Kl(i)}}))).sort((r,s)=>r.name.localeCompare(s.name))}async readIfExists(t){return await this.app.vault.adapter.exists(t)?this.app.vault.adapter.read(t):""}};function Kl(n){let t=n.match(Ml)?.[1]?.trim(),e=n.match(Vl)?.[1]?.trim(),r=t&&t!=="\u5F85\u586B\u5199"?t:e&&e!=="\u5F85\u586B\u5199"?e:null;return r&&r.startsWith("/")?r.replace(/\/+$/,""):null}var A="10-tasks/board.md",D="10-tasks/done.md",Gl=["# Tasks Done","","\u5F52\u6863\u5DF2\u5B8C\u6210\u4E8B\u9879\uFF0C\u4FDD\u7559\u5FC5\u8981\u94FE\u63A5\uFF0C\u907F\u514D\u628A\u5904\u7406\u8FC7\u7A0B\u590D\u5236\u5230\u8FD9\u91CC\u3002",""].join(`
`),pr=/^(#{1,6})\s+(.+?)\s*$/,hr=/^(\s*[-*]\s+\[)([ xX])(\]\s+)(.+?)\s*$/,ql=/^\[(P[0-4])\]\s+(.+)$/,Vs=/\bdue:(\d{4}-\d{2}-\d{2})\b/,Ks=/\bcreated:(\d{4}-\d{2}-\d{2}(?:\s+\d{2}:\d{2}(?::\d{2})?)?)\b/,zl=/^-\s*创建时间[：:]\s*(.+?)\s*$/m,Gs=/\b(?:tid:(\d+)|id:([pwg]-\d+))\b/,qs=/#task\/(general|project|workflow)\b/,Ul=/(?:^|\s)#general\b/g,Xs=/[；;]\s*关联项目\s*[：:]\s*([^#\n]*?)(?=\s+due:|\s+wps:|\s+#task\/|\s+id:|\s+tid:|\s+created:|$)/,Yl=/(?:^|\s)wps:/g,ur=/(?:\[\[([^|\]#]+)(?:#[^|\]]*)?(?:\|([^\]]+))?\]\]|\[([^\]]*)]\(([^)#]+)(?:#[^)]+)?\))/g,Hl=/^[a-z][a-z0-9+.-]*:/i,ea=(r=>(r.Tasks="10-tasks",r.Workflows="20-workflows",r.Projects="30-projects",r))(ea||{});var N=class{constructor(t){this.app=t}async listTasks(){return this.hydrateTaskCreationTimes(dn(await this.readTaskBoard()))}async listDoneTasks(){if(!await this.app.vault.adapter.exists(D))return[];let t=await this.app.vault.adapter.read(D);return this.hydrateTaskCreationTimes(pn(t))}async moveTask(t){let e=t.task.sourcePath??A,r=await this.app.vault.adapter.read(e),s=r.includes(`\r
`)?`\r
`:`
`,a=r.split(/\r?\n/),i=le(a,t.task);if(i===-1)throw new Error("Selected task no longer exists in its task document.");if(e===D&&t.toStatus==="done"){await this.requireTaskEntry(t.task);return}let o=[...a];o.splice(i,t.task.rawLines.length);let l=Je(t.task,t.toStatus);if(t.toStatus==="done"){let m=await this.app.vault.adapter.exists(D),k=m?await this.app.vault.adapter.read(D):Gl;await this.writeTaskDocuments(t.task,{status:t.toStatus},[{path:A,original:r,next:o.join(s)},{path:D,original:m?k:null,next:Lc(k,l,new Date().getFullYear())}]);return}let c=e===D?await this.readTaskBoard():r,d=e===D?c.split(/\r?\n/):o,p=Dc(d,t.toStatus);if(p===-1){let m=d.length&&d[d.length-1]!==""?[""]:[];d.push(...m,`## ${ft(t.toStatus)}`,...l)}else d.splice(vt(d,p),0,...l);await this.writeTaskDocuments(t.task,{status:t.toStatus},[{path:A,original:c,next:d.join(s)},...e===D?[{path:D,original:r,next:o.join(s)}]:[]])}async updateTaskPriority(t){let e=await this.readTaskBoard(),r=e.includes(`\r
`)?`\r
`:`
`,s=e.split(/\r?\n/),a=le(s,t.task);if(a===-1)throw new Error("Selected task no longer exists in the task board.");let i=[...s];i.splice(a,t.task.rawLines.length,...Je(t.task,t.task.status,{priority:t.priority,forcePriority:!0})),await this.writeTaskDocuments(t.task,{priority:t.priority},[{path:A,original:e,next:i.join(r)}])}async updateTaskDueDate(t){let e=await this.readTaskBoard(),r=e.includes(`\r
`)?`\r
`:`
`,s=e.split(/\r?\n/),a=le(s,t.task);if(a===-1)throw new Error("Selected task no longer exists in the task board.");let i=[...s];i.splice(a,t.task.rawLines.length,...Je(t.task,t.task.status,{dueDate:t.dueDate,forceDueDate:!0})),await this.writeTaskDocuments(t.task,{due:t.dueDate??void 0},[{path:A,original:e,next:i.join(r)}])}async updateTaskTitle(t){let e=un(t.title);if(!e)throw new Error("Task title cannot be empty.");let r=await this.requireTaskEntry(t.task),s=r?Jl(r,t.task,e):null;if(s&&s.fromPath!==s.toPath&&await this.app.vault.adapter.exists(s.toPath))throw new Error(`Target task path already exists: ${s.toPath}`);let a=await this.readTaskBoard(),i=a.includes(`\r
`)?`\r
`:`
`,o=a.split(/\r?\n/),l=le(o,t.task);if(l===-1)throw new Error("Selected task no longer exists in the task board.");let c=[...o];if(c.splice(l,t.task.rawLines.length,...Je(t.task,t.task.status,{title:e})),s){let d=zs(s,t.task,e);for(let p=0;p<t.task.rawLines.length;p+=1)c[l+p]=na(c[l+p],d,A)}await this.app.vault.adapter.write(A,c.join(i)),await this.updateLinkedTaskTitle(r,e),s&&s.fromPath!==s.toPath&&(await this.app.vault.adapter.rename(s.fromPath,s.toPath),await this.updateVaultReferences(zs(s,t.task,e)))}async moveTaskManually(t){let e=await this.readTaskBoard(),r=e.includes(`\r
`)?`\r
`:`
`,s=e.split(/\r?\n/),a=le(s,t.task);if(a===-1)throw new Error("Selected task no longer exists in the task board.");let i=Rc(s,a,t.task.documentStatus??t.task.status,t.direction);if(i===-1)throw new Error(t.direction==="up"?"Task is already first in this status.":"Task is already last in this status.");let o=Fc(s,a,i);await this.app.vault.adapter.write(A,o.join(r))}async deleteTask(t){let e=await this.readTaskBoard(),r=e.includes(`\r
`)?`\r
`:`
`,s=e.split(/\r?\n/),a=le(s,t);if(a===-1)throw new Error("Selected task no longer exists in the task board.");let i=[...s];i.splice(a,t.rawLines.length),await this.app.vault.adapter.write(A,i.join(r));let o=kr(t);if(!o)return;let l=Zl(o);l&&await this.app.vault.adapter.exists(l)?await this.app.vault.adapter.rmdir(l,!0):await this.app.vault.adapter.exists(o)&&await this.app.vault.adapter.remove(o)}async updateTaskNotes(t){let e=await this.readTaskBoard(),r=e.includes(`\r
`)?`\r
`:`
`,s=e.split(/\r?\n/),a=le(s,t.task);if(a===-1)throw new Error("Selected task no longer exists in the task board.");let i=[...s];i.splice(a,t.task.rawLines.length,...Je(t.task,t.task.status,{notes:t.notes})),await this.app.vault.adapter.write(A,i.join(r))}async updateTaskWpsTargets(t){let e=await this.readTaskBoard(),r=e.includes(`\r
`)?`\r
`:`
`,s=e.split(/\r?\n/),a=le(s,t.task);if(a===-1)throw new Error("Selected task no longer exists in the task board.");let i=[...s];i.splice(a,t.task.rawLines.length,...Je(t.task,t.task.status,{wpsTargets:t.wpsTargets,forceWpsTargets:!0})),await this.app.vault.adapter.write(A,i.join(r))}async updateTaskProject(t){let{task:e,project:r}=t,s=await this.requireTaskEntry(e);if(!s)throw new Error("Task has no linked entry file.");let a=e.project;if(!a||a===r)return;if(!(await new oe(this.app).listProjects()).some(G=>G.name===r))throw new Error(`Project "${r}" does not exist.`);let o=s.match(/^(30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+)\/(AGENTS|index)\.md$/);if(!o)throw new Error("Cannot determine task folder path for move.");let l=`${o[2]}.md`,c=o[1].replace(`30-projects/${a}/inputs/`,`30-projects/${r}/inputs/`);if(await this.app.vault.adapter.exists(c))throw new Error(`Target folder already exists: ${c}`);await this.app.vault.adapter.rename(o[1],c);let d=`${c}/${l}`,p=await this.readTaskBoard(),m=p.includes(`\r
`)?`\r
`:`
`,k=p.split(/\r?\n/),x=le(k,e);if(x===-1)throw new Error("Selected task no longer exists in the task board.");let $=[...k];for(let G=0;G<e.rawLines.length;G+=1)$[x+G]=$[x+G].replace(`30-projects/${a}/`,`30-projects/${r}/`);await this.app.vault.adapter.write(A,$.join(m)),await on(this.app,d,{project:r});let R=await this.app.vault.adapter.read(d),j=`30-projects/${a}/`,B=`30-projects/${r}/`,C=R;R.includes(j)&&(C=R.split(j).join(B)),C!==R&&await this.app.vault.adapter.write(d,C)}async updateWorkflowProjects(t){let e=mn(t.projects);if(e.length===0)throw new Error("Workflow must keep at least one related project.");let r=await this.requireTaskEntry(t.task);if(!r||!/^20-workflows\/[^/]+\/AGENTS\.md$/.test(r))throw new Error("Task is not linked to a workflow AGENTS.md file.");let s=await new oe(this.app).listProjects(),a=new Set(s.map(k=>k.name));for(let k of e)if(!a.has(k))throw new Error(`Project "${k}" does not exist.`);let i=await this.app.vault.adapter.read(r),o=Ac(i,e);await this.app.vault.adapter.write(r,o);let l=await this.readTaskBoard(),c=l.includes(`\r
`)?`\r
`:`
`,d=l.split(/\r?\n/),p=le(d,t.task);if(p===-1)throw new Error("Selected task no longer exists in the task board.");let m=[...d];m.splice(p,t.task.rawLines.length,...Je(t.task,t.task.status,{projects:e,forceProjects:!0})),await this.app.vault.adapter.write(A,m.join(c))}async readTaskBoard(){return this.app.vault.adapter.read(A)}async requireTaskEntry(t){let e=await mr(this.app,t);if(!e)throw new Error(`Cannot locate task entry for ${t.taskId??t.text}: ${e??"missing entry link"}.`);let r=await an(this.app,e),s=t.rawLine.match(/\bid:([gpw]-\d+)\b/)?.[1]??t.taskId;if(!r?.status||!r.id||s&&r.id!==s)throw new Error(`Task entry metadata is missing or disagrees with the selected task: ${e}`);return e}async writeTaskDocuments(t,e,r){let s=await this.requireTaskEntry(t),a=await this.app.vault.adapter.read(s),i=Rt(a,e),o=[{path:s,original:a,next:i},...r],l=[];try{for(let c of o)l.push(c),await this.app.vault.adapter.write(c.path,c.next)}catch(c){let d=[];for(let p of l.reverse())try{p.original===null?await this.app.vault.adapter.exists(p.path)&&await this.app.vault.adapter.remove(p.path):await this.app.vault.adapter.write(p.path,p.original)}catch(m){d.push(m)}throw d.length?new AggregateError([c,...d],"Task update failed and some files could not be restored; run vault validation before retrying."):c}}async hydrateTaskCreationTimes(t){return Promise.all(t.map(async e=>this.hydrateTaskFileMetadata(e)))}async hydrateTaskFileMetadata(t){let e=await mr(this.app,t);if(!e)return t;let r=await an(this.app,e),s=t.createdAt??await this.readLegacyTaskCreatedAt(e);return r?{...t,status:r.status??t.status,checked:r.status?r.status==="done":t.checked,priority:r.priority??t.priority,dueDate:r.due??t.dueDate,createdAt:r.created??s,taskId:r.id??t.taskId,taskScope:r.type??t.taskScope,project:bc(r.project)??t.project,projects:Sc(r.project,t.projects)}:{...t,createdAt:s}}async readLegacyTaskCreatedAt(t){return await this.app.vault.adapter.exists(t)&&(await this.app.vault.adapter.read(t)).match(zl)?.[1]?.trim()||null}async updateLinkedTaskTitle(t,e){if(!t||!await this.app.vault.adapter.exists(t))return;await on(this.app,t,{title:e});let r=await this.app.vault.adapter.read(t),s=oc(r,e);s!==r&&await this.app.vault.adapter.write(t,s)}async updateVaultReferences(t){let e=await this.listReferenceFiles("");for(let r of e){if(r===A)continue;let s=await this.app.vault.adapter.read(r),a=lc(s,r,t);a!==s&&await this.app.vault.adapter.write(r,a)}}async listReferenceFiles(t){let e=await this.safeList(t),r=e.files.filter(mc);for(let s of e.folders.filter(a=>!hc(a)))r.push(...await this.listReferenceFiles(s));return r}async safeList(t){return this.app.vault.adapter.list(t)}};function Zl(n){return/^20-workflows\/[^/]+\/AGENTS\.md$/.test(n)||/^30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+\/(?:AGENTS|index)\.md$/.test(n)||n.endsWith("/index.md")?Xe(n):null}function Xe(n){let t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function dn(n){return ta(n,null,t=>X(t,null)??null).map(t=>({...t,sourcePath:A,documentStatus:t.status}))}function pn(n){return ta(n,"done",()=>"done").map(t=>({...t,sourcePath:D,documentStatus:t.status}))}function ta(n,t,e){let r=n.split(/\r?\n/),s=[],a=t,i=null;return r.forEach((o,l)=>{let c=o.match(pr),d=c?e(c[2]):null;if(c&&(t!==null||d!==null)){dr(s,i),i=null,a=d;return}if(a){if(hr.test(o)){dr(s,i),i={firstLineNumber:l+1,order:s.length,status:a,lines:[o]};return}if(i&&o.trim()!==""){i.lines.push(o);return}i&&o.trim()===""&&(dr(s,i),i=null)}}),dr(s,i),s}function ra(n,t){let e=[...n];return t==="manual"?e.sort((r,s)=>r.order-s.order):e.sort((r,s)=>{let a=Dt.indexOf(r.priority)-Dt.indexOf(s.priority);return a===0?r.order-s.order:a})}function gr(n){let t=n.match(pr);return t?X(t[2],null)??null:null}function dr(n,t){if(!t)return;let e=Ql(t);e&&n.push(e)}function Ql(n){let t=n.lines[0],e=t.match(hr);if(!e)return null;let r=n.lines.slice(1).join(`
`).trim(),s=[e[4].trim(),r].filter(Boolean).join(`
`);if(!s)return null;let a=s.match(ql),i=a?a[1]:"P3",o=a?a[2].trim():s,l=wc(o),c=Pc(l.text),d=l.taskScope??Ec(c);return l.text?{line:n.firstLineNumber,endLine:n.firstLineNumber+n.lines.length-1,order:n.order,status:n.status,checked:e[2].toLowerCase()==="x",priority:i,hasExplicitPriority:!!a,dueDate:l.dueDate,createdAt:l.createdAt,taskId:l.taskId,taskScope:d,project:null,projects:l.projects,text:l.text,rawBody:s,rawLine:t,rawLines:[...n.lines],links:c,wpsTargets:l.wpsTargets}:null}function fr(n){return/^30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+\/(?:AGENTS|index)\.md$/.test(n)||/^10-tasks\/items\/\d{4}\/\d{2}\/[^/]+\.md$/.test(n)||/^20-workflows\/[^/]+\/AGENTS\.md$/.test(n)}function kr(n){for(let t of n.links){let e=tc(t.target);if(fr(e))return e}return null}async function mr(n,t){let e=kr(t);if(e&&await n.vault.adapter.exists(e))return e;let r=t.sourcePath??A;for(let s of lr(t.rawLine,r)){let a=await cr(n,s,r)??s.target;for(let i of[a,`${a}.md`,`${a}/AGENTS.md`,`${a}/index.md`])if(fr(i)&&await n.vault.adapter.exists(i))return i}return null}function Jl(n,t,e){let r=t.taskId;if(!r)return null;let s=Xl(r,e),a=n.match(/^(30-projects\/[^/]+\/inputs\/\d{4}\/\d{2})\/[^/]+\/(AGENTS|index)\.md$/);if(a){let l=Xe(n),c=`${a[1]}/${s}`,d=`${a[2]}.md`;return{oldEntryPath:n,newEntryPath:`${c}/${d}`,fromPath:l,toPath:c,oldTaskSegment:kt(l),newTaskSegment:kt(c)}}let i=n.match(/^(20-workflows)\/[^/]+\/AGENTS\.md$/);if(i){let l=Xe(n),c=`${i[1]}/${s}`;return{oldEntryPath:n,newEntryPath:`${c}/AGENTS.md`,fromPath:l,toPath:c,oldTaskSegment:kt(l),newTaskSegment:kt(c)}}let o=n.match(/^(10-tasks\/items\/\d{4}\/\d{2})\/[^/]+\.md$/);if(o){let l=`${o[1]}/${s}.md`;return{oldEntryPath:n,newEntryPath:l,fromPath:n,toPath:l,oldTaskSegment:wt(kt(n)),newTaskSegment:wt(kt(l))}}return null}function Xl(n,t){return`${n}-${ec(t)}`}function ec(n){return n.trim().toLowerCase().replace(/['"]/g,"").replace(/[^a-z0-9\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,"").slice(0,64)||"task"}function tc(n){if(fr(n))return n;if(/^30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+$/.test(n))return`${n}/AGENTS.md`;let t=n.endsWith(".md")?n:`${n}.md`;return fr(t)?t:n}function rc(n,t,e={}){let r=t==="done"?"x":" ",s=e.priority??n.priority,a=e.forcePriority??!1,i=Object.prototype.hasOwnProperty.call(e,"dueDate")?e.dueDate??null:n.dueDate,o=e.forceDueDate??!1,l=e.title?ac(n.text,e.title):n.text,c=e.wpsTargets??n.wpsTargets,d=e.forceWpsTargets??!1,p=e.projects??n.projects,m=e.forceProjects??!1,k=!!e.title||n.hasExplicitPriority||a||o||d||m,x=n.hasExplicitPriority||a?`[${s}] `:"",$=i?` due:${i}`:"",R=xc(c),j=m&&p.length>0?`\uFF1B\u5173\u8054\u9879\u76EE\uFF1A${p.join("\u3001")}`:"",B=` #task/${n.taskScope}`,C=n.taskId?` ${sc(n.taskId)}`:"",G=n.createdAt?` created:${n.createdAt}`:"",qr=k?nc(l,x,$,R,j,B,C,G):n.rawBody;return`- [${r}] ${qr}`}function nc(n,t,e,r,s,a,i,o){let l=n.split(`
`),c=l[0]??"";return[`${t}${c}${s}${e}${r}${a}${i}${o}`,...l.slice(1)].join(`
`)}function sc(n){return/^\d+$/.test(n)?`tid:${n}`:`id:${n}`}function Je(n,t,e={}){let s=rc(n,t,e).split(`
`).filter(i=>!i.trimStart().startsWith(">")),a=e.notes!==void 0?e.notes:gc(n.rawLines);return[...s,...kc(a)]}function un(n){return n.replace(/\s+/g," ").trim()}function ac(n,t){let e=n.split(`
`),r=e[0]??"",s=ic(r);return[[t,...s].filter(Boolean).join(" "),...e.slice(1)].join(`
`)}function ic(n){let t=[];ur.lastIndex=0;for(let e of n.matchAll(ur))t.push(e[0]);return t}function oc(n,t){return n.replace(/^(#\s+).+$/m,(e,r)=>`${r}${t}`)}function zs(n,t,e){return{oldEntryPath:n.oldEntryPath,newEntryPath:n.newEntryPath,oldEntryPathNoExtension:wt(n.oldEntryPath),newEntryPathNoExtension:wt(n.newEntryPath),oldTaskPath:n.fromPath,newTaskPath:n.toPath,oldTaskPathNoExtension:wt(n.fromPath),newTaskPathNoExtension:wt(n.toPath),oldTaskSegment:n.oldTaskSegment,newTaskSegment:n.newTaskSegment,oldTitle:un(pc(t.text)),newTitle:e}}function lc(n,t,e){return t.endsWith(".md")?na(n,e,t):fn(n,e)}function na(n,t,e){return fn(n,t).replace(/\[\[([^\]|#]+)(#[^\]|]*)?(?:\|([^\]]*))?\]\]/g,(r,s,a="",i)=>{let o=Us(s,t,e),l=i===void 0?void 0:Ys(i,t);return l===void 0?`[[${o}${a}]]`:`[[${o}${a}|${l}]]`}).replace(/\[([^\]]*)]\(([^)#]+)(#[^)]*)?\)/g,(r,s,a,i="")=>{let o=Us(a,t,e);return`[${Ys(s,t)}](${o}${i})`})}function fn(n,t){return sa(t).reduce((e,[r,s])=>r&&r!==s?e.split(r).join(s):e,n)}function Us(n,t,e){let r=uc(n),s=cc(r,e),a=sa(t,!0).find(([o])=>s===o)?.[1];if(!a)return n;let i=aa(r)?dc(e,a):a;return n===r?i:fc(i)}function cc(n,t){if(!aa(n))return n.replace(/^\/+/,"");let e=Xe(t).split("/").filter(Boolean);for(let r of n.split("/"))!r||r==="."||(r===".."?e.pop():e.push(r));return e.join("/")}function dc(n,t){let e=Xe(n).split("/").filter(Boolean),r=t.split("/").filter(Boolean);for(;e.length>0&&r.length>0&&e[0]===r[0];)e.shift(),r.shift();return[...e.map(()=>".."),...r].join("/")}function Ys(n,t){let e=un(n);return e===t.oldTitle||e===t.oldTaskSegment||e===t.oldEntryPath||e===t.oldEntryPathNoExtension||e===t.oldTaskPath||e===t.oldTaskPathNoExtension?t.newTitle:fn(n,t)}function sa(n,t=!1){let e=[[n.oldEntryPath,n.newEntryPath],[n.oldEntryPathNoExtension,n.newEntryPathNoExtension],[n.oldTaskPath,n.newTaskPath],[n.oldTaskPathNoExtension,n.newTaskPathNoExtension]];return t&&e.push([n.oldTaskSegment,n.newTaskSegment]),e.sort((r,s)=>s[0].length-r[0].length)}function pc(n){return(n.split(`
`)[0]??n).replace(ur,"").trim()}function uc(n){try{return decodeURI(n)}catch{return n}}function fc(n){return encodeURI(n).replace(/%2F/g,"/")}function wt(n){return n.endsWith(".md")?n.slice(0,-3):n}function kt(n){return n.split("/").filter(Boolean).pop()??n}function mc(n){return n.endsWith(".md")||n.endsWith(".canvas")||n.endsWith(".json")}function hc(n){let t=n.split("/").pop()??n;return t.startsWith(".")||t==="node_modules"}function gc(n){let t=[],e=!1;for(let r of n){let s=r.trimStart();if(s.startsWith(">")){e=!0;let a=s.replace(/^>\s*/,"");a&&!a.startsWith("[!")&&t.push(a.replace(/^-\s*/,""))}else e&&s===""&&(e=!1)}return t}function kc(n){return n.length===0?[]:["  > [!note] \u8BF4\u660E",...n.map(t=>`  > - ${t}`)]}function wc(n){let t=yc(n);n=t.text;let e=n.match(Vs),r=n.match(Ks),s=n.match(Gs),a=n.match(qs),i=e?e[1]:null,o=r?r[1]:null,l=s?s[2]??s[1]:null,c=a?a[1]:null,d=t.targets,p=vc(n),m=n.replace(Xs,"").replace(Vs,"").replace(Ks,"").replace(Gs,"").replace(qs,"").replace(Ul,"").split(`
`).map(k=>k.replace(/[ \t]+/g," ").trimEnd()).join(`
`).trim();return{dueDate:i,createdAt:o,taskId:l,taskScope:c,wpsTargets:d,projects:p,text:m}}function vc(n){let t=n.match(Xs)?.[1]??"";return mn(t.split(/[、,，]/).map(e=>e.trim()))}function yc(n){let t=[],e=new RegExp(Yl),r=[],s=0,a;for(;a=e.exec(n);){let i=e.lastIndex,o=i,l="",c=null,d=Hs(n,i,"[","]"),p=d!==-1?Hs(n,d+1,"(",")"):-1;if(p!==-1)l=n.slice(i+1,d).replace(/\\([\\[\]])/g,"$1"),c=n.slice(d+2,p).replace(/\\([\\()])/g,"$1"),o=p+1;else{let m=n.slice(i).match(/^"((?:\\.|[^"\\\r\n])*)"/),k=m?null:n.slice(i).match(/^\S+/);l=m?m[1].replace(/\\(["\\])/g,"$1"):k?.[0]??"",o+=m?.[0].length??k?.[0].length??0}if(o===i||!l.trim()){e.lastIndex=o;continue}Tc(t,l,c),r.push(n.slice(s,a.index)," "),s=o,e.lastIndex=o}return r.push(n.slice(s)),{targets:t,text:r.join("")}}function Hs(n,t,e,r){if(n[t]!==e)return-1;let s=0;for(let a=t;a<n.length;a++){let i=n[a];if(i==="\r"||i===`
`)return-1;if(i==="\\"){if(n[a+1]==="\r"||n[a+1]===`
`)return-1;a++}else if(i===e)s++;else if(i===r&&--s===0)return a}return-1}function Tc(n,t,e){let r=t.trim(),s=e?.trim()||null;r&&(n.some(a=>a.label===r&&a.url===s)||n.push({label:r,url:s}))}function xc(n){return n.length===0?"":n.map(t=>` ${_c(t)}`).join("")}function _c(n){if(n.url){let e=n.label.replace(/[\\[\]]/g,"\\$&"),r=n.url.replace(/[\\()]/g,"\\$&");return`wps:[${e}](${r})`}let t=n.label.replace(/\\/g,"\\\\").replace(/"/g,'\\"');return/[\s"\\]/.test(n.label)?`wps:"${t}"`:`wps:${n.label}`}function Pc(n){let t=[];for(let e of n.matchAll(ur)){let r=e[1],s=e[2],a=e[3],i=e[4],o=cn(r??i??"",A,r!==void 0);o&&t.push({target:o,label:s??a??o})}return t}function Ec(n){return n.some(t=>t.target.startsWith("20-workflows/"))?"workflow":n.some(t=>t.target.startsWith("30-projects/"))?"project":"general"}function bc(n){return Array.isArray(n)?n[0]:n}function Sc(n,t){return Array.isArray(n)?mn(n):n?[n]:t}function mn(n){let t=[],e=new Set;for(let r of n){let s=r.trim();!s||e.has(s)||(e.add(s),t.push(s))}return t}function Ac(n,t){let e=Ic(n);return Cc(Qs(Qs(jc(n,t),"\u5173\u8054\u9879\u76EE",t.map(r=>`- [${r}](../../30-projects/${encodeURIComponent(r)}/index.md)`)),"\u5F00\u53D1\u5206\u652F",t.flatMap(r=>[`- \u9879\u76EE\uFF1A[${r}](../../30-projects/${encodeURIComponent(r)}/index.md)`,`  - \u76EE\u6807\u5F00\u53D1\u5206\u652F\uFF1A${e.get(r)??"\u5F85\u586B\u5199"}`])))}function jc(n,t){let e=n.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);if(!e)return n;let r=n.includes(`\r
`)?`\r
`:`
`,a=e[1].split(/\r?\n/),i=[];for(let o=0;o<a.length;o+=1){let l=a[o];if(/^project:\s*/.test(l)){for(i.push(...Zs(t));o+1<a.length&&/^\s+-\s+/.test(a[o+1]);)o+=1;continue}i.push(l)}return a.some(o=>/^project:\s*/.test(o))||i.push(...Zs(t)),["---",...i,"---",n.slice(e[0].length)].join(r)}function Zs(n){return n.length>0?["project:",...n.map(t=>`  - ${$c(t)}`)]:["project: []"]}function Qs(n,t,e){let r=n.includes(`\r
`)?`\r
`:`
`,s=n.split(/\r?\n/),a=s.findIndex(l=>l.trim()===`## ${t}`);if(a===-1)return n;let i=vt(s,a),o=[`## ${t}`,...e,""];return s.splice(a,i-a,...o),s.join(r)}function Cc(n){let t=n.includes(`\r
`)?`\r
`:`
`,e=n.split(/\r?\n/),r=e.findIndex(i=>i.trim()==="## \u76F8\u5173\u77E5\u8BC6");if(r===-1)return n;let s=vt(e,r),a=e.findIndex((i,o)=>o>r&&o<s&&/^-\s*项目入口[：:]/.test(i.trim()));return a===-1?e.splice(r+1,0,"- \u9879\u76EE\u5165\u53E3\uFF1A\u89C1\u5173\u8054\u9879\u76EE"):e[a]="- \u9879\u76EE\u5165\u53E3\uFF1A\u89C1\u5173\u8054\u9879\u76EE",e.join(t)}function Ic(n){let t=new Map,e=n.split(/\r?\n/),r=e.findIndex(i=>i.trim()==="## \u5F00\u53D1\u5206\u652F");if(r===-1)return t;let s=vt(e,r),a=null;for(let i of e.slice(r+1,s)){let o=i.match(/30-projects\/([^/\]]+)\/index/);if(o){a=o[1];continue}let l=i.match(/目标开发分支[：:]\s*(.+?)\s*$/);a&&l&&(t.set(a,l[1]),a=null)}return t}function $c(n){return JSON.stringify(n)}function Lc(n,t,e){let r=n.includes(`\r
`)?`\r
`:`
`,s=n.replace(/\s+$/,"").split(/\r?\n/),a=`## ${e}`,i=s.findIndex(c=>c.trim()===a);if(i===-1){let c=s.length>0&&s[s.length-1]!==""?[""]:[];return[...s,...c,a,"",...t,""].join(r)}let o=vt(s,i);for(;o>i+1&&s[o-1]==="";)o-=1;let l=o>i+1?[""]:[];return s.splice(o,0,...l,...t),[...s,""].join(r)}function le(n,t){let e=t.line-1;if(n[e]===t.rawLine)return e;if(t.sourcePath===D)return n.findIndex(s=>s===t.rawLine);let r=null;for(let s=0;s<n.length;s+=1){let a=gr(n[s]);if(a){r=a;continue}if(r===(t.documentStatus??t.status)&&n[s]===t.rawLine)return s}return-1}function Dc(n,t){return n.findIndex(e=>gr(e)===t)}function vt(n,t){let e=n[t].match(pr),r=e?e[1].length:6;for(let s=t+1;s<n.length;s+=1){let a=n[s].match(pr);if(a&&a[1].length<=r)return s}return n.length}function Rc(n,t,e,r){let s=Oc(n,t,e);if(s===-1)return-1;let a=vt(n,s),i=r==="up"?-1:1,o=r==="up"?s:a;for(let l=t+i;l!==o;l+=i)if(hr.test(n[l]))return l;return-1}function Fc(n,t,e){let r=[...n],s=Js(n,t),a=Js(n,e),i=n.slice(t,s),o=n.slice(e,a);return t<e?(r.splice(e,o.length,...i),r.splice(t,i.length,...o)):(r.splice(t,i.length,...o),r.splice(e,o.length,...i)),r}function Js(n,t){for(let e=t+1;e<n.length;e+=1)if(n[e].trim()===""||hr.test(n[e])||gr(n[e]))return e;return n.length}function Oc(n,t,e){for(let r=t-1;r>=0;r-=1){let s=gr(n[r]);if(s)return s===e?r:-1}return-1}function aa(n){return!n.startsWith("/")&&!Hl.test(n)&&!Object.values(ea).some(t=>n.startsWith(`${t}/`))}var ia="AGENTS.md",wr="10-tasks/board.md",Nc="30-projects",oa="20-workflows",Wc="10-tasks",Bc=/(?:\[\[([^|\]#]+)(?:#[^|\]]*)?(?:\|[^\]]*)?\]\]|\[[^\]]*]\(([^)#]+)(?:#[^)]+)?\))/g,la=/^\s*(?:[-*]\s+\[[ xX-]\]\s*|[-*]\s+|\d+\.\s+)/,Mc=new Set([".DS_Store"]),ca=(e=>(e.Templates="90-templates",e.GeneralTasks="10-tasks/items",e))(ca||{}),he=class{constructor(t){this.app=t}async scanVault(){let[t,e,r,s,a]=await Promise.all([this.exists(ia),this.exists(wr),this.scanTaskBoard(),this.scanProjects(),this.scanWorkflows()]),i=await this.scanRoutingFiles(s,a),o=await Promise.all([wr,D].map(async d=>({path:d,content:await this.readIfExists(d)}))),l=[];for(let d of[...i,...o])for(let p of lr(d.content,d.path))l.push({path:d.path,line:p.line,target:p.target,exists:await cr(this.app,p,d.path)!==null});let c=[];for(let d of o){let p=d.path===D?pn(d.content):dn(d.content);for(let m of p){let k=await mr(this.app,m)??kr(m);c.push({path:d.path,line:m.line,id:m.taskId,status:m.status,checked:m.checked,entryPath:k,entryContent:k&&await this.exists(k)?await this.readIfExists(k):null})}}return{rootAgentsExists:t,taskBoardExists:e,taskBoardEntries:r,projects:s,workflows:a,inboxItems:[],routingFiles:i,linkChecks:l,taskReferences:c}}async scanRoutingFiles(t,e){let r=new Set([ia,"index.md"]);for(let a of t){for(let i of["AGENTS.md","index.md","links.md"])r.add(`${a.path}/${i}`);for(let i of a.inputIndexFiles)r.add(i.path)}for(let a of e)r.add(`${a.path}/AGENTS.md`);for(let a of Object.values(ca))for(let i of await this.listFilesRecursive(a))i.endsWith(".md")&&r.add(i);let s=[];for(let a of r)await this.exists(a)&&s.push({path:a,content:await this.readIfExists(a)});return s}async scanTaskBoard(){return await this.exists(wr)?(await this.app.vault.adapter.read(wr)).split(/\r?\n/).map((e,r)=>this.toTaskBoardEntry(e,r+1)).filter(e=>e!==null):[]}toTaskBoardEntry(t,e){let r=t.trim(),s=Kc(r);return!la.test(r)||s.length===0?null:{line:e,text:r,normalizedText:s,workflowLinks:Vc(r)}}async scanProjects(){let t=await this.listImmediateFolders(Nc);return Promise.all(t.map(async e=>({path:e,hasAgents:await this.exists(`${e}/AGENTS.md`),hasIndex:await this.exists(`${e}/index.md`),hasLinks:await this.exists(`${e}/links.md`),linksContent:await this.readIfExists(`${e}/links.md`),inputFiles:await this.scanProjectInputFiles(e),inputIndexFiles:await this.scanProjectInputIndexFiles(e)})))}async scanProjectInputFiles(t){let e=`${t}/inputs`;return await this.exists(e)?this.listFilesRecursive(e):[]}async scanProjectInputIndexFiles(t){let r=(await this.scanProjectInputFiles(t)).filter(s=>s.endsWith("/AGENTS.md")||s.endsWith("/index.md"));return Promise.all(r.map(async s=>({path:s,content:await this.readIfExists(s)})))}async scanWorkflows(){let t=await this.listImmediateFolders(oa);return Promise.all(t.map(async e=>({path:e,hasAgents:await this.exists(`${e}/AGENTS.md`),hasTodo:await this.exists(`${e}/todo.md`),hasInputs:await this.exists(`${e}/inputs`),hasExports:await this.exists(`${e}/exports`),hasLocalRules:await this.exists(`${e}/rules`),agentsContent:await this.readIfExists(`${e}/AGENTS.md`),files:await this.listFilesRecursive(e)})))}async listImmediateFolders(t){return await this.exists(t)?(await this.app.vault.adapter.list(t)).folders.map(Ft).sort():[]}async listFilesRecursive(t){return(await this.listEntriesRecursive(t)).filter(r=>r.kind==="file").map(r=>r.path).sort()}async listEntriesRecursive(t){let e=[];return await this.collectEntries(t,e),e.sort((r,s)=>r.path.localeCompare(s.path))}async collectEntries(t,e){let r=await this.safeList(t);for(let s of r.files){let a=Ft(s);zc(a)||e.push({path:a,kind:"file"})}for(let s of r.folders){let a=Ft(s);e.push({path:a,kind:"folder"}),await this.collectEntries(a,e)}}async safeList(t){return await this.exists(t)?this.app.vault.adapter.list(t):{files:[],folders:[]}}async exists(t){return this.app.vault.adapter.exists(t)}async readIfExists(t){return await this.exists(t)?this.app.vault.adapter.read(t):""}};function Vc(n){let t=[];for(let e of n.matchAll(Bc)){let r=e[1]??e[2],s=Gc(r);s.startsWith(`${oa}/`)&&t.push(s)}return t}function Kc(n){return n.replace(la,"").replace(/\s+/g," ").trim().toLowerCase()}function Gc(n){let t=n.trim(),e=qc(t).replace(/^\/+/,"");if(!e.startsWith("../")&&!e.startsWith("./"))return Ft(e);let r=Wc.split("/");for(let s of e.split("/"))!s||s==="."||(s===".."?r.pop():r.push(s));return Ft(r.join("/"))}function qc(n){try{return decodeURIComponent(n)}catch{return n}}function Ft(n){return n.replace(/\\/g,"/").replace(/\/+$/,"")}function zc(n){let t=n.split("/").pop()??n;return Mc.has(t)}var Uc=/^30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+\/.+$/,Yc=/^30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+\/(?:AGENTS|index)\.md$/,Hc=/^30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+\/index\.md$/,Zc=/^30-projects\/([^/]+)\/inputs\/\d{4}\/\d{2}\/[^/]+\/(?:AGENTS|index)\.md$/,Qc=/30-projects\/([^/\]\s`|)]+)/g,Jc=3*1024,Xc=5*1024,ed=["\u5F53\u524D\u4EFB\u52A1","\u8DEF\u7531","\u95E8\u69DB"],td=["\u5F53\u524D\u4EFB\u52A1","\u8DEF\u7531","\u95E8\u69DB"],rd=/(数据库连接|日志信息|日志项目|Nacos|Redis|Kafka|Bruno|服务访问方式|服务地址|配置中心|Diamond|DB\b|mysql\s+-h|curl\s+-i)/i,nd=/(```bash|curl\s+|ssh\s+|mysql\s+|bru\s+run|kubectl\s+|排查步骤|联调|SOP|常用命令)/i,je=class{validateVault(t){return[...this.validateCoreEntries(t),...this.validateProjectEntries(t),...this.validateWorkflowEntries(t),...this.validateTaskBoard(t),...this.validateMaintenanceEntries(t)]}validateMaintenanceEntries(t){let e=[];for(let s of t.routingFiles??[])(s.path==="AGENTS.md"||/^30-projects\/[^/]+\/AGENTS\.md$/.test(s.path))&&e.push(...this.validateShortAgentsEntry(s.path,s.content));for(let s of t.linkChecks??[])s.exists||e.push({code:"broken_markdown_link",severity:"error",path:s.path,message:`Broken local link on line ${s.line}: ${s.target}`});let r=new Map;for(let s of t.taskReferences??[]){let a=`${s.path}:${s.line}`;if(s.id){let o=r.get(s.id);o?e.push({code:"duplicate_task",severity:"error",path:s.path,message:`Task ID ${s.id} appears in both ${o} and ${a}.`}):r.set(s.id,a)}if(s.entryContent===null){e.push({code:"missing_task_entry",severity:"error",path:s.path,message:`Task on line ${s.line} has no valid entry: ${s.entryPath??"missing task link"}.`});continue}let i=gt(s.entryContent);(!i?.id||i.id!==s.id||i.status!==s.status||s.checked!==(i.status==="done"))&&e.push({code:"task_metadata_mismatch",severity:"error",path:s.path,message:`Task on line ${s.line} disagrees with entry frontmatter (ID, status, or checkbox): ${s.entryPath}.`}),i?.completed_at&&i.status!=="done"&&e.push({code:"task_metadata_mismatch",severity:"warning",path:s.entryPath??s.path,message:"Active task still has completed_at; clear it when reopening the task."})}return e}validateCoreEntries(t){let e=[];return t.rootAgentsExists||e.push({code:"missing_root_agents",severity:"blocker",message:"Root AGENTS.md is missing.",path:"AGENTS.md"}),t.taskBoardExists||e.push({code:"missing_task_board",severity:"blocker",message:"Task board is missing.",path:"10-tasks/board.md"}),e}validateProjectEntries(t){let e=[];for(let r of t.projects){!r.hasAgents&&!r.hasIndex&&e.push({code:"missing_project_entry",severity:"error",message:"Project is missing both AGENTS.md and index.md entry files.",path:r.path}),r.hasLinks&&!et(r.linksContent,"\u76F8\u5173\u957F\u671F\u77E5\u8BC6")&&e.push({code:"missing_project_knowledge_section",severity:"warning",message:"Project links.md should include a \u76F8\u5173\u957F\u671F\u77E5\u8BC6 section for cross-project knowledge entry points.",path:`${r.path}/links.md`}),r.hasLinks&&!et(r.linksContent,"\u6E90\u7801\u4ED3\u5E93")&&e.push({code:"missing_project_source_section",severity:"warning",message:"Project links.md should include a \u6E90\u7801\u4ED3\u5E93 section for source path, branch, modules, and commands.",path:`${r.path}/links.md`}),r.hasLinks&&e.push(...this.validateProjectLinksHotEntry(`${r.path}/links.md`,r.linksContent));for(let s of r.inputFiles)Uc.test(s)||e.push({code:"invalid_project_input_path",severity:"error",message:"Project input file must live under inputs/YYYY/MM/<task-slug>/.",path:s});for(let s of r.inputIndexFiles)Yc.test(s.path)&&(e.push(...this.validateProjectTaskStructure(s.path,s.content)),e.push(...this.validateProjectTaskDevelopmentBranch(s.path,s.content)))}return e}validateProjectLinksHotEntry(t,e){let r=[];return new TextEncoder().encode(e).length>Xc&&r.push({code:"oversized_project_links",severity:"warning",message:"Project links.md is larger than 5KB; keep hot source/document links here and move environment details to env.md or runbook steps to runbook.md.",path:t}),rd.test(e)&&r.push({code:"project_links_cold_content",severity:"warning",message:"Project links.md appears to contain environment details; move DB/logs/Nacos/Redis/Kafka/Bruno/service endpoints to env.md.",path:t}),nd.test(e)&&r.push({code:"project_links_cold_content",severity:"warning",message:"Project links.md appears to contain commands or runbook steps; move curl/ssh/mysql/bru/kubectl/SOP content to runbook.md.",path:t}),r}validateProjectTaskStructure(t,e){let r=[];Hc.test(t)&&r.push({code:"legacy_project_task_entry",severity:"warning",message:"Project task uses legacy index.md entry; new project tasks should use AGENTS.md.",path:t}),e.includes("\u5173\u8054\u9879\u76EE")||r.push({code:"missing_project_task_structure",severity:"warning",message:"Project task AGENTS.md should include an \u5173\u8054\u9879\u76EE field.",path:t});let s=gt(e);if(!s)r.push({code:"missing_project_task_structure",severity:"warning",message:"Project task AGENTS.md should include frontmatter for id, type, status, title, and created metadata.",path:t});else for(let a of["id","type","status","title","created"])s[a]||r.push({code:"missing_project_task_structure",severity:"warning",message:`Project task AGENTS.md frontmatter should include ${a}.`,path:t});r.push(...this.validateProjectTaskProjectConsistency(t,e)),r.push(...this.validateShortAgentsEntry(t,e));for(let a of ed)et(e,a)||r.push({code:"missing_project_task_structure",severity:"warning",message:`Project task AGENTS.md should include a ${a} section.`,path:t});return r}validateProjectTaskProjectConsistency(t,e){let r=ad(t),s=gt(e),a=id(s?.project),i=od(e),o=[];if(!r)return o;s?.type&&s.type!=="project"&&o.push({code:"project_task_project_mismatch",severity:"warning",message:`Project task frontmatter type should be project, got ${s.type}.`,path:t}),a.length>0&&!a.includes(r)&&o.push({code:"project_task_project_mismatch",severity:"warning",message:`Project task path belongs to ${r}, but frontmatter project is ${a.join(", ")}.`,path:t});let l=i.filter(c=>c!==r);return l.length>0&&o.push({code:"project_task_project_mismatch",severity:"warning",message:`Project task path belongs to ${r}, but body links reference ${Array.from(new Set(l)).join(", ")}.`,path:t}),o}validateProjectTaskDevelopmentBranch(t,e){return da(e)?[]:[{code:"missing_project_task_development_branch",severity:"warning",message:"Project task AGENTS.md should include a filled \u76EE\u6807\u5206\u652F field.",path:t}]}validateWorkflowEntries(t){let e=[];for(let r of t.workflows){if(!r.hasAgents&&!r.hasTodo&&e.push({code:"missing_workflow_entry",severity:"error",message:"Workflow is missing both AGENTS.md and todo.md entry files.",path:r.path}),r.hasInputs||e.push({code:"missing_workflow_inputs",severity:"error",message:"Workflow inputs/ directory is missing.",path:`${r.path}/inputs`}),sd(r.files,r.path)&&!r.hasExports&&e.push({code:"missing_workflow_exports",severity:"error",message:"Data export workflow exports/ directory is missing.",path:`${r.path}/exports`}),r.hasAgents){let s=`${r.path}/AGENTS.md`;e.push(...this.validateShortAgentsEntry(s,r.agentsContent)),e.push(...this.validateWorkflowTaskMetadata(r.path,r.agentsContent)),e.push(...this.validateWorkflowKnowledgeScaffolding(r.path,r.agentsContent)),e.push(...this.validateWorkflowDevelopmentBranch(r.path,r.agentsContent))}r.hasLocalRules&&e.push({code:"local_workflow_rules",severity:"warning",message:"Workflow should not keep a local rules/ directory; link to vault root rules/*.md from AGENTS.md instead.",path:`${r.path}/rules`})}return e}validateWorkflowKnowledgeScaffolding(t,e){let r=[],s=`${t}/AGENTS.md`;e.includes("\u5173\u8054\u9879\u76EE")||r.push({code:"missing_workflow_projects_section",severity:"warning",message:"Workflow AGENTS.md should include an \u5173\u8054\u9879\u76EE field in its short entry.",path:s}),!e.includes("[[rules/")&&!e.includes("](../../rules/")&&r.push({code:"missing_workflow_knowledge_section",severity:"warning",message:"Workflow AGENTS.md should link to vault root rules/*.md instead of carrying local rules.",path:s});for(let a of td)et(e,a)||r.push({code:"missing_workflow_structure",severity:"warning",message:`Workflow AGENTS.md should include a ${a} section.`,path:s});return r}validateShortAgentsEntry(t,e){let r=[];return new TextEncoder().encode(e).length>Jc&&r.push({code:"oversized_agents_entry",severity:"warning",message:"AGENTS.md is larger than 3KB; split details into overview.md, execution.md, todo.md, risk.md, or project links.",path:t}),et(e,"\u6267\u884C\u7ED3\u679C")&&r.push({code:"agents_execution_section",severity:"warning",message:"AGENTS.md contains a \u6267\u884C\u7ED3\u679C section; move execution results to execution.md and keep AGENTS.md as a short routing entry.",path:t}),r}validateWorkflowTaskMetadata(t,e){let r=gt(e);if(!r)return[{code:"missing_workflow_structure",severity:"warning",message:"Workflow AGENTS.md should include frontmatter for id, type, status, title, and created metadata.",path:`${t}/AGENTS.md`}];let s=[];for(let a of["id","type","status","title","created"])r[a]||s.push({code:"missing_workflow_structure",severity:"warning",message:`Workflow AGENTS.md frontmatter should include ${a}.`,path:`${t}/AGENTS.md`});return s}validateWorkflowDevelopmentBranch(t,e){return(et(e,"\u5F00\u53D1\u5206\u652F")||et(e,"\u8DEF\u7531"))&&da(e)?[]:[{code:"missing_workflow_development_branch",severity:"warning",message:"Workflow AGENTS.md should include a filled \u76EE\u6807\u5206\u652F field in its short routing entry.",path:`${t}/AGENTS.md`}]}validateTaskBoard(t){let e=new Set(t.workflows.map(s=>s.path)),r=new Set(t.workflows.flatMap(s=>s.files));return[...t.linkChecks?[]:this.validateWorkflowLinks(t.taskBoardEntries,e,r),...this.validateDuplicateTasks(t.taskBoardEntries)]}validateWorkflowLinks(t,e,r){let s=[];for(let a of t)for(let i of a.workflowLinks)!e.has(i)&&!r.has(i)&&!r.has(`${i}.md`)&&s.push({code:"broken_workflow_link",severity:"error",message:`Task board workflow link is broken on line ${a.line}.`,path:i});return s}validateDuplicateTasks(t){let e=new Map,r=[];for(let s of t){let a=e.get(s.normalizedText);a?r.push({code:"duplicate_task",severity:"warning",message:`Duplicate task text on lines ${a.line} and ${s.line}.`,path:"10-tasks/board.md"}):e.set(s.normalizedText,s)}return r}};function sd(n,t){return n.includes(`${t}/query.sql`)}function et(n,t){return new RegExp(`^##\\s+${ld(t)}\\s*$`,"m").test(n)}function da(n){let t=/^-\s*目标(?:开发)?分支[：:]\s*(.+?)\s*$/;return n.split(/\r?\n/).some(e=>{let r=e.trim().match(t);if(r)return pa(r[1]);if(!e.includes("|"))return!1;let s=e.replace(/`/g,"").split("|").map(a=>a.trim()).filter(Boolean);return s.length<2||s.includes("\u9879\u76EE")||s.includes("\u76EE\u6807\u5F00\u53D1\u5206\u652F")?!1:pa(s[s.length-1])})}function pa(n){let t=n.trim();return t.length>0&&t!=="\u5F85\u586B\u5199"&&!/^-+$/.test(t)}function ad(n){return n.match(Zc)?.[1]??null}function id(n){return n?Array.isArray(n)?n:[n]:[]}function od(n){let t=[];for(let e of n.matchAll(Qc))t.push(e[1]);return Array.from(new Set(t))}function ld(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var cd="20-workflows";var vr=class{constructor(t){this.app=t}getWorkflowPath(t){return`${cd}/${t}`}getTemplatePath(t){switch(t){case"feature":return"90-templates/workflow-feature-template";case"incident":return"90-templates/workflow-incident-template";case"datafix":return"90-templates/workflow-datafix-template";case"data-export":return"90-templates/workflow-data-export-template"}}async createWorkflow(t,e){let r=this.getWorkflowPath(e),s=this.getTemplatePath(t);if(await this.app.vault.adapter.exists(r))throw new Error(`Workflow target already exists: ${r}`);await this.ensureFolder(r),await this.ensureFolder(`${r}/inputs`),t==="data-export"&&await this.ensureFolder(`${r}/exports`);let a=await this.copyTemplateFiles(s,r);return{workflowPath:r,copiedFiles:a}}async copyTemplateFiles(t,e){let r=[];return await this.copyFolder(t,t,e,r),r}async copyFolder(t,e,r,s){let a=await this.safeList(e);for(let i of a.folders){let o=ua(i,t);fa(o)||(await this.ensureFolder(`${r}/${o}`),await this.copyFolder(t,i,r,s))}for(let i of a.files){let o=ua(i,t);if(fa(o))continue;let l=`${r}/${o}`,c=await this.app.vault.adapter.read(i);await this.ensureFolder(dd(l)),await this.app.vault.adapter.write(l,c),s.push(l)}}async safeList(t){if(!await this.app.vault.adapter.exists(t))throw new Error(`Workflow template path is missing: ${t}`);return this.app.vault.adapter.list(t)}async ensureFolder(t){let e=t.split("/").filter(Boolean),r="";for(let s of e)r=r?`${r}/${s}`:s,await this.app.vault.adapter.exists(r)||await this.app.vault.adapter.mkdir(r)}};function ua(n,t){return n.slice(t.length).replace(/^\/+/,"")}function dd(n){let t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function fa(n){return n==="rules"||n.startsWith("rules/")}var tt="30-projects",Tr="20-workflows",Ce="10-tasks/board.md",wa=/^30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+\/(?:AGENTS|index)\.md$/,va=/^10-tasks\/items\/\d{4}\/\d{2}\/[^/]+\.md$/,pd=/^(?:\/|[A-Za-z]:[\\/]|\\\\|[a-z][a-z0-9+.-]*:)/i;var xr=class{constructor(t,e={}){this.app=t;this.options=e;this.taskBoard=new ar(t),this.workflowCreator=new vr(t),this.scanner=new he(t),this.validator=new je}async previewPlanExecution(t){let e=[],r=[],s=[],a=Is(t);return s.push(...a.warnings),a.valid||r.push(...[...a.errors,...a.blockingReasons].map(i=>({code:"invalid_plan_shape",message:i}))),this.addReadinessBlockers(t,r),t.action!=="create_task"&&t.action!=="create_general_task"&&t.action!=="create_workflow"&&r.push({code:"unsupported_action",message:"Executor only supports create_task, create_general_task, and create_workflow."}),(!t.tasks||t.tasks.length===0)&&r.push({code:"missing_task_entry",message:"Plan must include at least one task board entry."}),await this.addProjectBlockers(t,r),await this.addTaskBoardBlockers(r),await this.addPathBlockers(t,r),await this.addDuplicateTaskBlockers(t,r),this.addOperationPreview(t,e),{canExecute:r.length===0,operations:e,blockers:r,warnings:s}}async executePlan(t,e){let r=await this.previewPlanExecution(t);if(e!=="confirmed")return{executed:!1,preview:{...r,canExecute:!1,blockers:[...r.blockers,{code:"unconfirmed",message:"Execution requires explicit confirmation after reviewing the dry-run preview."}]},validationIssues:[]};if(!r.canExecute)return{executed:!1,preview:r,validationIssues:[]};let s=await this.taskBoard.readTaskBoard(),a=[],i=[],o=null,l=await this.getBlockingValidationIssueKeys(),c=yt(t),d=Sd(new Date),p=gn(t),m=await new mt(this.app).reserveTaskIds(s,c.length),k=c.map((j,B)=>Fs(p,m+B)),x=c.map((j,B)=>sn(p,m+B)),$=hd(t,c,k),R=yt($);try{if($.action==="create_workflow"){let C=await this.workflowCreator.createWorkflow($.workflow_type,$.workflow_slug);o=C.workflowPath,await this.populateWorkflowFiles($,C.workflowPath,{id:k[0]??"",createdAt:d})}await this.applyMoves($.moves??[],a),await this.createMissingTaskFiles($,R,k,d,i),await this.taskBoard.appendTasks(R,t.task_status,{taskScope:p,createdAt:d,taskIds:x});let j=await this.validateAfterExecution(),B=j.filter(C=>!l.has(ma(C)));return fd(B)?(await this.rollbackExecution(s,a,o,i),{executed:!1,preview:r,validationIssues:B,rolledBack:!0,error:"Vault validation failed after execution; applied changes were rolled back."}):{executed:!0,preview:{...r,operations:[...r.operations,{kind:"validate_vault",path:Ce,detail:"Run deterministic vault validation after execution."}]},validationIssues:j}}catch(j){return await this.rollbackExecution(s,a,o,i),{executed:!1,preview:r,validationIssues:[],rolledBack:!0,error:j instanceof Error?j.message:String(j)}}}addReadinessBlockers(t,e){t.decision!=="ready"&&e.push({code:"invalid_plan_shape",message:"Only ready plans can be executed."}),t.questions.length>0&&e.push({code:"invalid_plan_shape",message:"Plan has unanswered questions."}),t.confidence!=="high"&&e.push({code:"invalid_plan_shape",message:"Plan confidence must be high before execution."}),t.task_status||e.push({code:"invalid_plan_shape",message:"Plan must include task_status."}),t.action==="create_workflow"&&!t.workflow_slug&&e.push({code:"missing_workflow_slug",message:"Workflow creation requires workflow_slug."})}async addProjectBlockers(t,e){for(let r of yr(t)){let s=`${tt}/${r}`;await this.app.vault.adapter.exists(s)||e.push({code:"missing_project",message:`Project does not exist: ${s}`,path:s})}}async addTaskBoardBlockers(t){await this.app.vault.adapter.exists(Ce)||t.push({code:"missing_task_board",message:`Task board does not exist: ${Ce}`,path:Ce})}async addPathBlockers(t,e){for(let r of t.moves??[])this.addUnsafePathBlockers([r.from,r.to],e),e.push({code:"unsupported_action",message:"Plan file moves are no longer supported. Use task upload to copy files into inputs/.",path:r.to});for(let r of yt(t))r.link&&this.addUnsafePathBlockers([r.link],e);t.action==="create_task"&&await this.addCreateTaskLinkBlockers(t.tasks??[],e),t.action==="create_general_task"&&await this.addCreateGeneralTaskBlockers(t,e),t.action==="create_workflow"&&await this.addCreateWorkflowTargetBlockers(t,e)}addUnsafePathBlockers(t,e){for(let r of t)(pd.test(r)||r.split(/[\\/]+/).includes(".."))&&e.push({code:"unsafe_path",message:`Path must stay inside the vault and cannot include parent segments: ${r}`,path:r})}async addCreateTaskLinkBlockers(t,e){for(let r of t){if(!r.link){e.push({code:"missing_task_entry",message:"create_task task entries must include a project input AGENTS.md link."});continue}wa.test(r.link)||e.push({code:"unsafe_path",message:"create_task task links must point to inputs/YYYY/MM/<task-slug>/AGENTS.md.",path:r.link}),await this.app.vault.adapter.exists(r.link)&&e.push({code:"existing_target",message:`Task entry already exists: ${r.link}`,path:r.link})}}async addCreateGeneralTaskBlockers(t,e){(t.moves??[]).length>0&&e.push({code:"unsupported_action",message:"create_general_task only appends task board entries and cannot move files."});for(let r of t.tasks??[]){if(!r.link){e.push({code:"missing_task_entry",message:"create_general_task entries must include a task file link under 10-tasks/items/."});continue}va.test(r.link)||e.push({code:"unsupported_action",message:"create_general_task links must point to 10-tasks/items/YYYY/MM/<task>.md.",path:r.link}),await this.app.vault.adapter.exists(r.link)&&e.push({code:"existing_target",message:`General task file already exists: ${r.link}`,path:r.link})}}async addCreateWorkflowTargetBlockers(t,e){if(!t.workflow_slug||!t.workflow_type)return;if(!ud(t.workflow_slug)){e.push({code:"unsafe_path",message:"workflow_slug must be a single folder name.",path:t.workflow_slug});return}let r=this.workflowCreator.getWorkflowPath(t.workflow_slug);await this.app.vault.adapter.exists(r)&&e.push({code:"existing_target",message:`Workflow target already exists: ${r}`,path:r});for(let a of t.moves??[])a.to.startsWith(`${r}/inputs/`)||e.push({code:"unsafe_path",message:"create_workflow move targets must live under the workflow inputs/ directory.",path:a.to});for(let a of t.tasks??[]){if(!a.link){e.push({code:"missing_task_entry",message:"create_workflow task entries must include a workflow link."});continue}a.link!==r&&!a.link.startsWith(`${r}/`)&&e.push({code:"unsafe_path",message:"create_workflow task links must point to the workflow directory or a file inside it.",path:a.link})}let s=this.workflowCreator.getTemplatePath(t.workflow_type);await this.app.vault.adapter.exists(s)||e.push({code:"missing_source",message:`Workflow template is missing: ${s}`,path:s})}async addDuplicateTaskBlockers(t,e){let r=yt(t);if(r.length===0||!await this.app.vault.adapter.exists(Ce))return;let s=await this.taskBoard.findDuplicateTasks(r,{taskScope:gn(t)});for(let a of s)e.push({code:"duplicate_task",message:`Duplicate task blocked: ${a}`,path:Ce})}addOperationPreview(t,e){t.action==="create_workflow"&&t.workflow_slug&&t.workflow_type&&(e.push({kind:"create_directory",path:`${Tr}/${t.workflow_slug}`,detail:`Create workflow directory for ${t.workflow_type}.`}),e.push({kind:"copy_template",path:this.workflowCreator.getTemplatePath(t.workflow_type),detail:"Copy workflow template files."}));for(let r of t.moves??[])e.push({kind:"move_file",path:r.to,detail:`Move ${r.from} -> ${r.to}`});for(let r of ha(t))e.push({kind:"create_task_file",path:r.link,detail:`Create task file for ${r.text}.`});for(let r of yt(t))e.push({kind:"append_task",path:Ce,detail:ir(r,{taskScope:gn(t)})})}async applyMoves(t,e){for(let r of t)await this.ensureFolder(ge(r.to)),await this.app.vault.adapter.rename(r.from,r.to),e.push(r)}async createMissingTaskFiles(t,e,r,s,a){for(let i of ha(t)){let o=i.link;if(await this.app.vault.adapter.exists(o))continue;let l=e.findIndex(p=>p===i||p.link===i.link),c=ge(o);await this.ensureFolder(c),t.action==="create_task"&&a.push(...await this.copyProjectTaskTemplateFiles(c));let d=t.action==="create_general_task"?bd(t,i,this.options.vaultRoot,{id:r[l]??"",createdAt:s}):_d(t,i,this.options.vaultRoot,{id:r[l]??"",createdAt:s});if(await this.app.vault.adapter.write(o,d),a.push(o),t.action==="create_task"){let p=`${ge(o)}/overview.md`;await this.app.vault.adapter.exists(p)||(await this.app.vault.adapter.write(p,Pd(t,i)),a.push(p));let m=`${ge(o)}/execution.md`;await this.app.vault.adapter.exists(m)||(await this.app.vault.adapter.write(m,Ed()),a.push(m))}}}async copyProjectTaskTemplateFiles(t){let e=[];return await this.app.vault.adapter.exists("90-templates/project-task-template")&&await this.copyProjectTaskTemplateFolder("90-templates/project-task-template",t,e),e}async copyProjectTaskTemplateFolder(t,e,r){let s=await this.app.vault.adapter.list(t);for(let a of s.folders){let i=kn(a,"90-templates/project-task-template");ga(i)||(await this.ensureFolder(`${e}/${i}`),await this.copyProjectTaskTemplateFolder(a,e,r))}for(let a of s.files){let i=kn(a,"90-templates/project-task-template");if(ga(i)||i==="AGENTS.md".toString()||i==="index.md".toString()||i==="overview.md".toString())continue;let o=`${e}/${i}`;await this.app.vault.adapter.exists(o)||(await this.ensureFolder(ge(o)),await this.app.vault.adapter.write(o,await this.app.vault.adapter.read(a)),r.push(o))}}async populateWorkflowFiles(t,e,r){let s=yt(t)[0]??t.tasks?.[0],{title:a,notes:i}=ht(s?.text??t.workflow_slug??""),o=yr(t).map(c=>`- [${c}](../../${tt}/${c}/index.md)`),l=yr(t).map(c=>`- \u9879\u76EE\uFF1A[${c}](../../${tt}/${c}/index.md)
  - \u76EE\u6807\u5F00\u53D1\u5206\u652F\uFF1A\u5F85\u586B\u5199`);await this.writeWorkflowAgents(e,a,o,l,t,r),await this.writeWorkflowOverview(e,a,i,o),await this.writeWorkflowTodo(e,a)}async writeWorkflowAgents(t,e,r,s,a,i){let o=`${t}/AGENTS.md`,l=await this.app.vault.adapter.read(o),c=yr(a),d=c.map(m=>`  - [${m} AGENTS](../../${tt}/${m}/AGENTS.md)`),p=Td(l.replace('id: "{{TASK_ID}}"',`id: ${i.id}`).replace('project: "<project>"',xd(c)).replace(/^title:\s*["']?\{\{WORKFLOW_TITLE\}\}["']?\s*$/m,()=>`title: ${ya(e||a.workflow_slug||"Workflow")}`).replaceAll("{{WORKFLOW_TITLE}}",()=>e||a.workflow_slug||"Workflow").replace('created: "{{YYYY-MM-DD}}"',`created: "${i.createdAt}"`).replace("- \u76EE\u6807\uFF1A\u5F85\u586B\u5199",()=>`- \u76EE\u6807\uFF1A${e||"\u5F85\u8865\u5145"}`).replace("\u8BF4\u660E\u8FD9\u6B21\u9700\u6C42\u8981\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF0C\u4EE5\u53CA\u5B8C\u6210\u8FB9\u754C\u3002",()=>e||"\u5F85\u8865\u5145").replace("- `[[30-projects/<project>/index]]`",r.join(`
`)||"- \u5F85\u8865\u5145").replace("- \u5173\u8054\u9879\u76EE\uFF1A`[[30-projects/<project>/AGENTS]]`\u3001`[[30-projects/<project>/links]]`",hn(c)).replace("- \u5173\u8054\u9879\u76EE\uFF1A[AGENTS](../../30-projects/%3Cproject%3E/AGENTS.md)\u3001[links](../../30-projects/%3Cproject%3E/links.md)",hn(c)).replace("- \u5173\u8054\u9879\u76EE\uFF1A`[AGENTS](30-projects/%3Cproject%3E/AGENTS.md)`\u3001`[links](30-projects/%3Cproject%3E/links.md)`",hn(c)).replace("- \u9879\u76EE\uFF1A`[[30-projects/<project>/index]]`\n  - \u76EE\u6807\u5F00\u53D1\u5206\u652F\uFF1A\u5F85\u586B\u5199",s.join(`
`)||`- \u9879\u76EE\uFF1A\u5F85\u8865\u5145
  - \u76EE\u6807\u5F00\u53D1\u5206\u652F\uFF1A\u5F85\u586B\u5199`).replace(`- \u9879\u76EE\uFF1A[index](../../30-projects/%3Cproject%3E/index.md)
  - \u76EE\u6807\u5F00\u53D1\u5206\u652F\uFF1A\u5F85\u586B\u5199`,s.join(`
`)||`- \u9879\u76EE\uFF1A\u5F85\u8865\u5145
  - \u76EE\u6807\u5F00\u53D1\u5206\u652F\uFF1A\u5F85\u586B\u5199`).replace("- \u9879\u76EE\uFF1A[index](../../30-projects/%3Cproject%3E/index.md)",r.join(`
`)||"- \u5F85\u8865\u5145").replace("- \u9879\u76EE\u5165\u53E3\uFF1A`[[30-projects/<project>/AGENTS]]`",d.length>0?["- \u9879\u76EE\u5165\u53E3\uFF1A",...d].join(`
`):"- \u9879\u76EE\u5165\u53E3\uFF1A\u5F85\u8865\u5145").replace("- \u9879\u76EE\u5165\u53E3\uFF1A[AGENTS](../../30-projects/%3Cproject%3E/AGENTS.md)",d.length>0?["- \u9879\u76EE\u5165\u53E3\uFF1A",...d].join(`
`):"- \u9879\u76EE\u5165\u53E3\uFF1A\u5F85\u8865\u5145"),["\u5F53\u524D\u7ED3\u8BBA","\u5DF2\u786E\u8BA4\u4E8B\u5B9E","\u5F85\u786E\u8BA4\u95EE\u9898","\u6267\u884C\u7ED3\u679C","AI \u9605\u8BFB\u987A\u5E8F","\u6700\u5C0F\u5FC5\u8BFB\u8D44\u6599"]);await this.app.vault.adapter.write(o,Rt(p,{id:i.id,type:"workflow",status:a.task_status,title:e||a.workflow_slug||"Workflow",created:i.createdAt,project:c,entry_type:"workflow",task_type:a.workflow_type??void 0}))}async writeWorkflowOverview(t,e,r,s){let a=`${t}/overview.md`,i=[`# ${e||"Feature Overview"}`,"","## \u80CC\u666F","",r.length>0?r.map(o=>`- ${o}`).join(`
`):"- \u5F85\u8865\u5145","","## \u76EE\u6807","",`- ${e||"\u5F85\u8865\u5145"}`,"","## \u975E\u76EE\u6807","","- \u5F85\u8865\u5145","","## \u5F71\u54CD\u8303\u56F4","",s.length>0?s.join(`
`):"- \u5F85\u8865\u5145","","## \u5173\u8054\u8D44\u6599","- \u9879\u76EE\u5165\u53E3\uFF1A",...s.length>0?s:["- \u5F85\u8865\u5145"],"- \u9700\u6C42\u8D44\u6599\uFF1A","- \u63A5\u53E3\u6216\u539F\u578B\uFF1A","",...Ta(),"","## \u5F53\u524D\u7ED3\u8BBA","- \u5F85\u8865\u5145","","## \u5DF2\u786E\u8BA4\u4E8B\u5B9E","- \u5F85\u8865\u5145","","## \u5F85\u786E\u8BA4\u95EE\u9898","- \u5F85\u8865\u5145",""].join(`
`);await this.app.vault.adapter.write(a,i)}async writeWorkflowTodo(t,e){let r=`${t}/todo.md`,s=["# Workflow Todo","","## Doing","- [ ] ","","## Next",`- [ ] ${e||"\u68B3\u7406\u9700\u6C42\u8303\u56F4\u4E0E\u540E\u7EED\u5904\u7406"}`,"","## Waiting","- [ ] ","","## Done","- [x] ",""].join(`
`);await this.app.vault.adapter.write(r,s)}async rollbackExecution(t,e,r,s){await this.app.vault.adapter.write(Ce,t);for(let a of[...s].reverse())await this.app.vault.adapter.exists(a)&&await this.app.vault.adapter.remove(a);for(let a of[...e].reverse()){let i=await this.app.vault.adapter.exists(a.to),o=await this.app.vault.adapter.exists(a.from);i&&!o&&(await this.ensureFolder(ge(a.from)),await this.app.vault.adapter.rename(a.to,a.from))}r&&await this.app.vault.adapter.exists(r)&&await this.app.vault.adapter.rmdir(r,!0)}async ensureFolder(t){let e=t.split("/").filter(Boolean),r="";for(let s of e)r=r?`${r}/${s}`:s,await this.app.vault.adapter.exists(r)||await this.app.vault.adapter.mkdir(r)}async validateAfterExecution(){let t=await this.scanner.scanVault();return this.validator.validateVault(t).filter(e=>e.severity==="error"||e.severity==="blocker")}async getBlockingValidationIssueKeys(){let t=await this.validateAfterExecution();return new Set(t.map(ma))}};function ud(n){return n.trim().length>0&&!n.includes("/")&&!n.includes("\\")&&n!=="."&&n!==".."}function ge(n){let t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function fd(n){return n.some(t=>t.severity==="error"||t.severity==="blocker")}function ma(n){return[n.code,n.severity,n.path??"",n.message].join("\0")}function md(n,t,e){return n.length===0?n:n.map(r=>{for(let s=0;s<t.length;s+=1){let a=ge(t[s]?.link??""),i=ge(e[s]?.link??"");if(a&&i&&a!==i&&r.to.startsWith(`${a}/`))return{...r,to:`${i}/${r.to.slice(a.length+1)}`}}return r})}function hd(n,t,e){if(n.action==="create_workflow"&&n.workflow_slug){let a=e[0]??"",i=gd(n.workflow_slug,a),o=`${Tr}/${n.workflow_slug}`,l=`${Tr}/${i}`;return{...n,workflow_slug:i,moves:vd(n.moves??[],o,l),tasks:(n.tasks??[]).map(c=>({...c,link:wd(c.link,o,l)}))}}let r=t.map((a,i)=>({...a,link:ka(a.link,e[i])})),s=md(n.moves??[],t,r);return{...n,moves:s,tasks:(n.tasks??[]).map((a,i)=>{let o=t[i];return o&&o.link===a.link?{...a,link:ka(a.link,e[i])}:a})}}function gd(n,t){return!t||/^w-\d+-/.test(n)?n:`${t}-${kd(n)}`}function kd(n){return n.replace(/^\d{4}-\d{2}-\d{2}-/,"")||"workflow"}function wd(n,t,e){if(n)return n===t?`${e}/AGENTS.md`:n===`${t}/AGENTS.md`?`${e}/AGENTS.md`:n.startsWith(`${t}/`)?`${e}/${n.slice(t.length+1)}`:n}function vd(n,t,e){return n.map(r=>r.to.startsWith(`${t}/`)?{...r,to:`${e}/${r.to.slice(t.length+1)}`}:r)}function hn(n){return n.length===0?"- \u5173\u8054\u9879\u76EE\uFF1A\u5F85\u8865\u5145":`- \u5173\u8054\u9879\u76EE\uFF1A${n.flatMap(e=>[`[${e} AGENTS](../../${tt}/${e}/AGENTS.md)`,`[${e} links](../../${tt}/${e}/links.md)`]).join("\u3001")}`}function yd(n,t,e){let r=n.split(/\r?\n/),s=r.findIndex(i=>i.trim()===`## ${t}`);if(s===-1)return`${n.trimEnd()}

${e}
`;let a=r.length;for(let i=s+1;i<r.length;i+=1)if(/^##\s+/.test(r[i])){a=i;break}return[...r.slice(0,s),e,...r.slice(a)].join(`
`)}function Td(n,t){return t.reduce((e,r)=>yd(e,r,""),n)}function yt(n){if(n.action!=="create_workflow"||!n.workflow_slug)return n.tasks??[];let t=`${Tr}/${n.workflow_slug}`,e=`${t}/AGENTS.md`;return(n.tasks??[]).map(r=>({...r,link:r.link===t?e:r.link}))}function yr(n){let t=new Set;for(let e of n.related_projects??[])e.trim()&&t.add(e.trim());return n.project?.trim()&&t.add(n.project.trim()),[...t]}function xd(n){return n.length===0?"project: []":["project:",...n.map(t=>`  - ${ya(t)}`)].join(`
`)}function ya(n){return JSON.stringify(n)}function ha(n){if(n.action!=="create_task"&&n.action!=="create_general_task")return[];let t=new Set((n.moves??[]).map(e=>e.to));return(n.tasks??[]).filter(e=>!!e.link&&e.link.endsWith(".md")&&(wa.test(e.link)||va.test(e.link))&&!t.has(e.link))}function gn(n){return n.task_scope?n.task_scope:n.action==="create_general_task"?"general":n.action==="create_workflow"?"workflow":"project"}function _d(n,t,e,r){let{title:s}=ht(t.text),a=n.project?`[${n.project}](../../../../index.md)`:"",i=t.link??"",o=n.project?`${tt}/${n.project}`:"",l=n.project?`[${n.project} AGENTS](../../../../AGENTS.md)`:"",c=n.project?`[${n.project} links](../../../../links.md)`:"",d=xa(e),p=d&&i?`${d}/${i}`:"",m={id:r.id,type:"project",status:n.task_status,project:n.project??void 0,title:s,created:r.createdAt,priority:void 0,entry_type:"project_input",task_type:n.workflow_type??void 0},k=[ln(m).trimEnd(),"",`# ${s}`,"","## \u5F53\u524D\u4EFB\u52A1","","- \u7C7B\u578B\uFF1Aproject",a?`- \u5173\u8054\u9879\u76EE\uFF1A${a}`:"- \u5173\u8054\u9879\u76EE\uFF1A\u5F85\u8865\u5145","- \u6982\u89C8\u4E0E\u786E\u8BA4\uFF1A[overview](overview.md)","- \u6267\u884C\u8BB0\u5F55\uFF1A[execution](execution.md)","- \u53D1\u5E03\u51C6\u5907\uFF1A[release-prep](release-prep.md)","- \u89C4\u5219\uFF1A[task-routing](../../../../../../rules/task-routing.md)\u3001[writeback](../../../../../../rules/writeback.md)\u3001[workflow-policy](../../../../../../rules/workflow-policy.md)","","## \u8DEF\u7531","","- \u4E0A\u4E0B\u6587\u6839\uFF1A\u672C\u4EFB\u52A1\u76EE\u5F55\uFF0C\u975E\u6E90\u7801\u4ED3\u5E93\u3002","- \u6309\u9700\u8BFB\u53D6\uFF1A`overview.md` \u770B\u9700\u6C42\u548C\u786E\u8BA4\u9879\uFF1B\u9700\u8981\u9879\u76EE\u7A33\u5B9A\u77E5\u8BC6\u65F6\u8BFB\u5173\u8054\u9879\u76EE\u5165\u53E3\uFF1B\u9700\u8981\u5F00\u53D1\u65F6\u518D\u8BFB\u76F8\u5173\u6E90\u7801\u3002","- \u6E90\u7801\u4ED3\u5E93\uFF1A\u5F85\u4ECE\u5173\u8054\u9879\u76EE `links.md` \u8BFB\u53D6","- \u76EE\u6807\u6A21\u5757\uFF1A\u5F85\u586B\u5199","- \u9884\u8BA1\u4FEE\u6539\u8303\u56F4\uFF1A\u5F85\u586B\u5199","- \u76EE\u6807\u5206\u652F\uFF1A\u5F85\u586B\u5199"];return k.push(o?`- \u5173\u8054\u9879\u76EE\uFF1A${l}\u3001${c}`:"- \u5173\u8054\u9879\u76EE\uFF1A\u5F85\u786E\u8BA4",...p?[`- \u7EDD\u5BF9\u5165\u53E3\uFF1A\`${p}\``]:[],"","## \u95E8\u69DB","","- \u76EE\u6807\u5206\u652F\u4E3A\u7A7A\u6216 `\u5F85\u586B\u5199` \u65F6\uFF0C\u4E0D\u8981\u5F00\u59CB\u6539\u6E90\u7801\u3002","- `overview.md` \u82E5\u6709 `\u72B6\u6001\uFF1A\u5F85\u786E\u8BA4` \u9879\uFF0C\u5148\u8BF7\u7528\u6237\u786E\u8BA4\u3002",""),k.join(`
`)}function Pd(n,t){let{title:e,notes:r}=ht(t.text),s=n.project?[`- [${n.project}](../../../../index.md)`]:["- \u5F85\u8865\u5145"],a=ge(t.link??""),i=(n.moves??[]).filter(o=>!!a&&o.to.startsWith(`${a}/inputs/`)).map(o=>{let l=kn(o.to,`${a}/`);return`- [${l}](${l})`});return[`# ${e}`,"","## \u80CC\u666F","",r.length>0?r.map(o=>`- ${o}`).join(`
`):"- \u5F85\u8865\u5145","","## \u76EE\u6807","",`- ${e||"\u5F85\u8865\u5145"}`,"","## \u975E\u76EE\u6807","","- \u5F85\u8865\u5145","","## \u5F71\u54CD\u8303\u56F4","",...s,"","## \u8F93\u5165\u6750\u6599","",...i.length>0?i:["- \u5F85\u8865\u5145"],"",...Ta(),"","## \u5F53\u524D\u7ED3\u8BBA","","- \u5F85\u8865\u5145","","## \u5DF2\u786E\u8BA4\u4E8B\u5B9E","","- \u5F85\u8865\u5145","","## \u5F85\u786E\u8BA4\u95EE\u9898","","- \u5F85\u8865\u5145",""].join(`
`)}function Ta(){return["## \u6267\u884C\u524D\u786E\u8BA4","","### target_branch","- \u72B6\u6001\uFF1A\u5F85\u786E\u8BA4","- \u5185\u5BB9\uFF1A\u786E\u8BA4\u76EE\u6807\u5F00\u53D1\u5206\u652F","- AI \u5EFA\u8BAE\uFF1A\u5F85\u751F\u6210","- \u7528\u6237\u9009\u62E9\uFF1A\u5F85\u586B\u5199","- \u7ED3\u679C\uFF1A\u5F85\u586B\u5199","","### related_knowledge","- \u72B6\u6001\uFF1A\u5F85\u786E\u8BA4","- \u5185\u5BB9\uFF1A\u786E\u8BA4\u662F\u5426\u5173\u8054\u8DE8\u9879\u76EE\u77E5\u8BC6","- AI \u5EFA\u8BAE\uFF1A\u5F85\u751F\u6210","- \u7528\u6237\u9009\u62E9\uFF1A\u5F85\u586B\u5199","- \u7ED3\u679C\uFF1A\u5F85\u586B\u5199","","## \u786E\u8BA4\u8BB0\u5F55","","- \u5F85\u8865\u5145"]}function Ed(){return["# \u6267\u884C\u8BB0\u5F55","","## \u5F53\u524D\u7ED3\u679C","- \u4FEE\u6539\u6587\u4EF6\uFF1A","- \u9A8C\u8BC1\u65B9\u5F0F\uFF1A","- \u98CE\u9669\uFF1A","- \u540E\u7EED\u5F85\u529E\uFF1A",""].join(`
`)}function bd(n,t,e,r){let{title:s,notes:a}=ht(t.text),i=s.match(/\bdue:(\d{4}-\d{2}-\d{2})\b/)?.[1],o=s.replace(/\bdue:\d{4}-\d{2}-\d{2}\b/g,"").replace(/\s+/g," ").trim(),l=t.link??"",c=xa(e),d=c&&l?`${c}/${l}`:"",p={id:r.id,type:"general",status:n.task_status,title:o||s,created:r.createdAt,due:i,entry_type:"general_task"};return[ln(p).trimEnd(),"",`# ${o||s}`,"",`- \u521B\u5EFA\u65F6\u95F4\uFF1A${r.createdAt}`,"","## AI \u4E0A\u4E0B\u6587\u6839","","\u672C\u4EFB\u52A1\u6587\u4EF6\u662F\u901A\u7528\u5F85\u529E\u4E0A\u4E0B\u6587\u6839\uFF1B\u901A\u7528\u5F85\u529E\u4E0D\u9ED8\u8BA4\u8FDB\u5165\u6E90\u7801\u5F00\u53D1\u3002","","## \u6309\u9700\u8D44\u6599","",`- \u672C\u4EFB\u52A1\u5165\u53E3\uFF1A\`${d||l||"\u672C\u6587\u4EF6"}\`\u3002`,"- \u5982\u9700\u8F6C\u4E3A\u9879\u76EE\u4EFB\u52A1\u6216 workflow\uFF0C\u5148\u8BA9\u7528\u6237\u786E\u8BA4\u5F52\u5C5E\u548C\u76EE\u6807\u5F00\u53D1\u5206\u652F\u3002","","## \u4EFB\u52A1\u8BF4\u660E","",a.length>0?a.map(k=>`- ${k}`).join(`
`):o||s,"","## \u6267\u884C\u7ED3\u679C","","- \u5B8C\u6210\u60C5\u51B5\uFF1A","- \u540E\u7EED\u5F85\u529E\uFF1A",""].join(`
`)}function xa(n){return(n??"").trim().replace(/\/+$/,"")}function Sd(n){let t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0"),s=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0");return`${t}-${e}-${r} ${s}:${a}`}function kn(n,t){return n.slice(t.length).replace(/^\/+/,"")}function ga(n){return n==="rules"||n.startsWith("rules/")}function ka(n,t){if(!n||!t)return n??void 0;if(n.endsWith("/AGENTS.md")||n.endsWith("/index.md")){let e=n.endsWith("/AGENTS.md")?"AGENTS.md":"index.md",r=n.slice(0,-`/${e}`.length),s=r.lastIndexOf("/");return s===-1?n:`${r.slice(0,s+1)}${t}-${r.slice(s+1)}/${e}`}if(n.endsWith(".md")){let e=n.slice(0,-3),r=e.lastIndexOf("/");return r===-1?`${t}-${e}.md`:`${e.slice(0,r+1)}${t}-${e.slice(r+1)}.md`}return n}var _r=require("obsidian");var wn=class extends _r.Modal{constructor(e,r,s,a,i={}){super(e);this.plan=r;this.preview=s;this.resolveDecision=a;this.options=i;this.settled=!1}onOpen(){let{contentEl:e}=this;e.empty(),e.createEl("h2",{text:"Plan preview"}),e.createEl("p",{text:`Action: ${this.plan.action?Ts[this.plan.action]:"(none)"}`}),e.createEl("p",{text:`Reason: ${this.plan.reason??"(none)"}`}),this.renderOperations(e,this.preview.operations),this.renderList(e,"Warnings",this.preview.warnings),this.renderList(e,"Blocking reasons",this.preview.blockers.map(s=>s.message));let r=new _r.Setting(e);this.options.canGoBack&&r.addButton(s=>{s.setButtonText("Back").onClick(()=>{this.finish("back")})}),r.addButton(s=>{s.setButtonText("Cancel").onClick(()=>{this.finish("cancel")})}).addButton(s=>{s.setButtonText("Confirm execute").setCta().setDisabled(!this.preview.canExecute).onClick(()=>{this.finish("confirm")})})}onClose(){this.settled||(this.resolveDecision("cancel"),this.settled=!0),this.contentEl.empty()}renderOperations(e,r){if(e.createEl("h3",{text:"Dry-run operations"}),r.length===0){e.createEl("p",{text:"(None)"});return}let s=e.createEl("ul");for(let a of r)s.createEl("li",{text:`${a.kind}: ${a.detail}`})}renderList(e,r,s){if(e.createEl("h3",{text:r}),s.length===0){e.createEl("p",{text:"(None)"});return}let a=e.createEl("ul");for(let i of s)a.createEl("li",{text:i})}finish(e){this.settled||(this.settled=!0,this.resolveDecision(e),this.close())}};function _a(n,t,e,r={}){return new Promise(s=>{new wn(n,t,e,s,r).open()})}var I=require("obsidian");var Pa="30-projects",Er=30;function Ea(n,t){return new Promise(e=>{new vn(n,e,t).open()})}function ba(n,t){return new Promise(e=>{new yn(n,e,t).open()})}function Sa(n,t){return new Promise(e=>{new Tn(n,e,t).open()})}function Aa(n){let t=n.description.trim(),e=t?`${n.title}
${t}`:n.title;return{decision:"ready",action:"create_task",task_scope:"project",project:n.project,related_projects:[n.project],workflow_type:n.type,workflow_slug:null,task_status:n.status,confidence:"high",reason:"\u7528\u6237\u76F4\u63A5\u8F93\u5165\u9879\u76EE\u5C0F\u4EFB\u52A1\u3002",questions:[],moves:[],tasks:[{text:e,link:$d(n.project,n.title)}]}}function ja(n){return{decision:"ready",action:"create_general_task",task_scope:"general",project:null,related_projects:[],workflow_type:null,workflow_slug:null,task_status:n.status,confidence:"high",reason:"\u7528\u6237\u76F4\u63A5\u8F93\u5165\u901A\u7528\u5F85\u529E\uFF0C\u4E0D\u5173\u8054\u9879\u76EE\u6216 workflow\u3002",questions:[],moves:[],tasks:[{text:Id(n),link:Ld(n.title)}]}}function Ca(n){let t=n.projects[0]??null,e=n.description.trim(),r=e?`${n.title}
${e}`:n.title;return{decision:"ready",action:"create_workflow",task_scope:"workflow",project:t,related_projects:n.projects,workflow_type:n.type,workflow_slug:n.slug,task_status:n.status,confidence:"high",reason:"\u7528\u6237\u76F4\u63A5\u8F93\u5165\u590D\u6742\u4EFB\u52A1 workflow\u3002",questions:[],moves:[],tasks:[{text:r,link:`20-workflows/${n.slug}/AGENTS.md`}]}}function Pr(n){return n.trim().toLowerCase().replace(/['"]/g,"").replace(/[^a-z0-9\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,"").slice(0,48)||"workflow"}var vn=class extends I.Modal{constructor(e,r,s){super(e);this.resolveInput=r;this.title="";this.description="";this.project="";this.type="feature";this.status="todo";this.settled=!1;s&&(this.title=s.title,this.description=s.description,this.project=s.project,this.type=s.type,this.status=s.status)}onOpen(){this.contentEl.empty(),this.contentEl.createEl("h2",{text:"Create project task"});let e=Ia(this.app);(!this.project||!e.includes(this.project))&&(this.project=e[0]??""),new I.Setting(this.contentEl).setName("Task title").setDesc("\u4EFB\u52A1\u677F\u4E0A\u663E\u793A\u7684\u7B80\u77ED\u6807\u9898\u3002").addText(r=>{r.setValue(this.title),r.onChange(s=>this.title=s.trim())}),new I.Setting(this.contentEl).setName("Task type").addDropdown(r=>{Ra(r),r.setValue(this.type).onChange(s=>this.type=s)}),Ad(this.contentEl,{projects:e,selectedProject:this.project,onChange:r=>{this.project=r}}),new I.Setting(this.contentEl).setName("Description").setDesc("\u53EF\u9009\uFF0C\u5199\u5165\u4EFB\u52A1\u677F\u6587\u672C\uFF0C\u4F5C\u4E3A\u9879\u76EE\u4EFB\u52A1\u80CC\u666F\u6458\u8981\u3002").addTextArea(r=>{r.setValue(this.description),r.onChange(s=>this.description=s.trim())}),new I.Setting(this.contentEl).setName("Status").addDropdown(r=>{xn(r),r.setValue(this.status),r.onChange(s=>this.status=s)}),this.renderFooter(e.length===0)}onClose(){this.settled||(this.settled=!0,this.resolveInput(null)),this.contentEl.empty()}renderFooter(e){new I.Setting(this.contentEl).addButton(r=>r.setButtonText("Cancel").onClick(()=>this.finish(null))).addButton(r=>r.setButtonText("Preview").setCta().setDisabled(e).onClick(()=>{!this.title||!this.project||this.finish({title:this.title,description:this.description,project:this.project,type:this.type,status:this.status})}))}finish(e){this.settled||(this.settled=!0,this.resolveInput(e),this.close())}},yn=class extends I.Modal{constructor(e,r,s){super(e);this.resolveInput=r;this.title="";this.description="";this.status="todo";this.dueDate="";this.tags="";this.settled=!1;s&&(this.title=s.title,this.description=s.description,this.status=s.status,this.dueDate=s.dueDate,this.tags=s.tags)}onOpen(){this.contentEl.empty(),this.contentEl.createEl("h2",{text:"Add general task"}),new I.Setting(this.contentEl).setName("Task title").setDesc("\u63D0\u9192\u3001\u4F1A\u8BAE\u3001\u6C9F\u901A\u8DDF\u8FDB\u7B49\u4E0D\u7ED1\u5B9A\u9879\u76EE\u7684\u5F85\u529E\u3002").addText(e=>{e.setValue(this.title),e.onChange(r=>this.title=r.trim())}),new I.Setting(this.contentEl).setName("Description").setDesc("\u53EF\u9009\uFF0C\u4F5C\u4E3A\u4EFB\u52A1\u8BF4\u660E\u5199\u5165 note\u3002").addTextArea(e=>{e.setValue(this.description),e.onChange(r=>this.description=r.trim())}),new I.Setting(this.contentEl).setName("Due date").setDesc("\u53EF\u9009\uFF0C\u683C\u5F0F YYYY-MM-DD\u3002").addText(e=>{e.setPlaceholder("2026-05-27"),e.setValue(this.dueDate),e.onChange(r=>this.dueDate=r.trim())}),new I.Setting(this.contentEl).setName("Tags").setDesc("\u53EF\u9009\uFF0C\u7A7A\u683C\u5206\u9694\uFF0C\u4F8B\u5982 #meeting\u3002").addText(e=>{e.setValue(this.tags),e.onChange(r=>this.tags=r.trim())}),new I.Setting(this.contentEl).setName("Status").addDropdown(e=>{xn(e),e.setValue(this.status),e.onChange(r=>this.status=r)}),this.renderFooter()}onClose(){this.settled||(this.settled=!0,this.resolveInput(null)),this.contentEl.empty()}renderFooter(){new I.Setting(this.contentEl).addButton(e=>e.setButtonText("Cancel").onClick(()=>this.finish(null))).addButton(e=>e.setButtonText("Preview").setCta().onClick(()=>{!this.title||this.dueDate&&!/^\d{4}-\d{2}-\d{2}$/.test(this.dueDate)||this.finish({title:this.title,description:this.description,status:this.status,dueDate:this.dueDate,tags:this.tags})}))}finish(e){this.settled||(this.settled=!0,this.resolveInput(e),this.close())}},Tn=class extends I.Modal{constructor(e,r,s){super(e);this.resolveInput=r;this.title="";this.slug="";this.type="feature";this.selectedProjects=new Set;this.description="";this.status="todo";this.settled=!1;this.slugEdited=!1;s&&(this.title=s.title,this.slug=s.slug,this.type=s.type,this.selectedProjects=new Set(s.projects),this.description=s.description,this.status=s.status)}onOpen(){this.contentEl.empty(),this.contentEl.createEl("h2",{text:"Create workflow"});let e=Ia(this.app),r=null;new I.Setting(this.contentEl).setName("Workflow title").setDesc("\u590D\u6742\u4EFB\u52A1\u6807\u9898\u3002").addText(s=>s.setValue(this.title).onChange(a=>{this.title=a.trim(),this.slugEdited||(this.slug=Pr(this.title),r?.setValue(this.slug))})),new I.Setting(this.contentEl).setName("Workflow slug").setDesc("\u5C06\u521B\u5EFA 20-workflows/<slug>/\uFF0C\u53EF\u4FEE\u6539\u3002").addText(s=>{r=s,s.setPlaceholder(Pr("workflow")),s.setValue(this.slug),s.onChange(a=>{this.slug=a.trim(),this.slugEdited=this.slug!==""&&this.slug!==Pr(this.title)})}),new I.Setting(this.contentEl).setName("Workflow type").addDropdown(s=>{Ra(s),s.setValue(this.type).onChange(a=>this.type=a)}),jd(this.contentEl,{projects:e,selectedProjects:this.selectedProjects,onChange:(s,a)=>{a?this.selectedProjects.add(s):this.selectedProjects.delete(s)}}),new I.Setting(this.contentEl).setName("Description").setDesc("\u53EF\u9009\uFF0C\u5199\u5165\u4EFB\u52A1\u677F\u6587\u672C\uFF0C\u4F5C\u4E3A workflow \u80CC\u666F\u6458\u8981\u3002").addTextArea(s=>{s.setValue(this.description),s.onChange(a=>this.description=a.trim())}),new I.Setting(this.contentEl).setName("Status").addDropdown(s=>{xn(s),s.setValue(this.status),s.onChange(a=>this.status=a)}),this.renderFooter(e.length===0)}onClose(){this.settled||(this.settled=!0,this.resolveInput(null)),this.contentEl.empty()}renderFooter(e){new I.Setting(this.contentEl).addButton(r=>r.setButtonText("Cancel").onClick(()=>this.finish(null))).addButton(r=>r.setButtonText("Preview").setCta().setDisabled(e).onClick(()=>{let s=this.slug||Pr(this.title),a=Array.from(this.selectedProjects);!this.title||!s||a.length===0||this.finish({title:this.title,slug:s,type:this.type,projects:a,description:this.description,status:this.status})}))}finish(e){this.settled||(this.settled=!0,this.resolveInput(e),this.close())}};function Ia(n){let t=n.vault.getAbstractFileByPath(Pa);return t instanceof I.TFolder?t.children.filter(e=>e instanceof I.TFolder).map(e=>e.name).sort():[]}function Ad(n,t){let e=n.createDiv({cls:"ai-knowledge-project-picker"});e.createEl("h3",{text:"Project"}),e.createEl("p",{text:"\u4ECE 30-projects/ \u8BFB\u53D6\uFF0C\u4EFB\u52A1\u4F1A\u94FE\u63A5\u5230\u8FD9\u4E2A\u9879\u76EE\u5165\u53E3\u3002",cls:"ai-knowledge-muted"});let r=e.createEl("input",{cls:"ai-knowledge-project-search",type:"search",attr:{placeholder:"\u641C\u7D22\u9879\u76EE...","aria-label":"\u641C\u7D22\u9879\u76EE"}}),s=e.createDiv({cls:"ai-knowledge-project-selected",text:t.selectedProject?`\u5DF2\u9009\uFF1A${t.selectedProject}`:"\u672A\u9009\u62E9\u9879\u76EE"}),a=e.createDiv({cls:"ai-knowledge-project-results"}),i=()=>{let o=r.value,l=$a(t.projects,o);if(a.empty(),l.length===0){a.createEl("p",{text:"\u65E0\u5339\u914D\u9879\u76EE",cls:"ai-knowledge-muted"});return}for(let c of l.slice(0,Er)){let d=a.createEl("button",{text:c,cls:"ai-knowledge-project-option"});d.toggleClass("is-selected",c===t.selectedProject),d.addEventListener("click",()=>{t.selectedProject=c,t.onChange(c),s.setText(`\u5DF2\u9009\uFF1A${c}`),i()})}La(a,l.length)};r.addEventListener("input",i),i()}function jd(n,t){let e=n.createDiv({cls:"ai-knowledge-project-picker"});e.createEl("h3",{text:"Related projects"}),e.createEl("p",{text:"\u53EF\u591A\u9009\uFF1B\u7B2C\u4E00\u4E2A\u9009\u4E2D\u7684\u9879\u76EE\u4F5C\u4E3A\u5F53\u524D plan \u7684\u4E3B\u9879\u76EE\u3002",cls:"ai-knowledge-muted"});let r=e.createEl("input",{cls:"ai-knowledge-project-search",type:"search",attr:{placeholder:"\u641C\u7D22\u9879\u76EE...","aria-label":"\u641C\u7D22\u9879\u76EE"}}),s=e.createDiv({cls:"ai-knowledge-project-selected"}),a=e.createDiv({cls:"ai-knowledge-project-results"}),i=()=>{let l=Array.from(t.selectedProjects);s.setText(l.length>0?`\u5DF2\u9009 ${l.length} \u4E2A\uFF1A${l.join(", ")}`:"\u672A\u9009\u62E9\u9879\u76EE")},o=()=>{let l=r.value,c=$a(t.projects,l);if(a.empty(),c.length===0){a.createEl("p",{text:"\u65E0\u5339\u914D\u9879\u76EE",cls:"ai-knowledge-muted"});return}for(let d of c.slice(0,Er)){let p=a.createEl("label",{cls:"ai-knowledge-project-checkbox"}),m=p.createEl("input",{type:"checkbox"});m.checked=t.selectedProjects.has(d),p.createSpan({text:d}),m.addEventListener("change",()=>{t.onChange(d,m.checked),i()})}La(a,c.length)};r.addEventListener("input",o),i(),o()}function $a(n,t){let e=t.trim().toLowerCase().split(/\s+/).filter(Boolean);return e.length===0?n:n.filter(r=>{let s=r.toLowerCase();return e.every(a=>Cd(s,a))})}function Cd(n,t){let e=0;for(let r of t){if(e=n.indexOf(r,e),e===-1)return!1;e+=1}return!0}function La(n,t){t<=Er||n.createEl("p",{text:`\u663E\u793A\u524D ${Er} \u4E2A\uFF0C\u5171 ${t} \u4E2A\u5339\u914D\uFF1B\u7EE7\u7EED\u8F93\u5165\u53EF\u7F29\u5C0F\u8303\u56F4\u3002`,cls:"ai-knowledge-project-limit-hint"})}function Id(n){let t=[n.title.trim()],e=n.dueDate.trim(),r=n.tags.split(/\s+/).filter(a=>a&&a!=="#general").join(" ");e&&t.push(`due:${e}`),r&&t.push(r);let s=n.description.trim();return s?`${t.join(" ")}
${s}`:t.join(" ")}function $d(n,t,e=new Date){let r=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0");return`${Pa}/${n}/inputs/${r}/${s}/${Da(t)}/AGENTS.md`}function Ld(n,t=new Date){let e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0");return`10-tasks/items/${e}/${r}/${Da(n)}.md`}function Da(n){return n.trim().toLowerCase().replace(/['"]/g,"").replace(/[^a-z0-9\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,"").slice(0,64)||"task"}function xn(n){for(let t of Lt)n.addOption(t,`${ut[t]} / ${Ae[t]}`)}function Ra(n){for(let t of Object.values(me))n.addOption(t,_s[t])}var Fa=`---
name: ai-knowledge-project-onboarding
description: Generate or update an AI-friendly project knowledge entry under 30-projects from a source repository, using concise Obsidian-compatible project documentation and reusable templates.
---

# AI Knowledge Project Onboarding

Create a maintainable project knowledge entry without copying source code into the vault.

## Inputs

- An absolute source repository path.
- A vault output path under \`30-projects/<project>\`.

If either path cannot be discovered safely, ask once before writing.

## Output

Use the bundled templates to maintain these files:

- \`index.md\`
- \`AGENTS.md\`
- \`architecture.md\`
- \`modules.md\`
- \`links.md\`
- \`env.md\`
- \`runbook.md\`
- \`database.md\`

Keep \`links.md\` as a short hot entry. Put environment facts in \`env.md\`, executable procedures in \`runbook.md\`, and database structure in \`database.md\`.
Keep \`AGENTS.md\` within 3 KiB and \`links.md\` within 5 KiB. Read \`AGENTS.md\` and \`links.md\` by default; route to other files only as needed. Preserve actual file and directory paths in Markdown links instead of appending \`.md\` to every target. Record a branch as a dated observation or a repository default, never as an undated live checkout state.

## Workflow

1. Read the source repository metadata and existing documentation before scanning implementation directories.
2. Identify modules, entry points, data flows, external dependencies, build commands, and existing operational docs.
3. If the output already exists, update incrementally and preserve user-authored facts.
4. Use standard Markdown links inside the vault.
5. Run \`scripts/validate_knowledge.py <vault-root>/30-projects/<project> --project <project>\` after writing.

For a lightweight vault navigation check, run \`scripts/validate_knowledge.py <vault-root> --all-projects --navigation-only\`. This checks project index coverage, local entry links and byte limits without reading environment files or source code.

## Safety and portability

- Do not copy source trees, generated artifacts, logs, or dependency folders into the vault.
- Shared templates must contain placeholders, never real passwords, access tokens, internal hosts, jump hosts, or personal paths.
- Add sensitive local facts only when the user explicitly asks and the target repository policy permits it.
- Do not access remote servers, databases, or private services unless the user separately authorizes that operation.
`;var Oa=`interface:
  display_name: "AI Knowledge Project Onboarding"
  short_description: "Generate reusable project knowledge from source"
  default_prompt: "Use $ai-knowledge-project-onboarding to create or update project knowledge from a source repository."

`;var Na=`#!/usr/bin/env python3
"""Validate generated project knowledge files for Obsidian-friendly structure."""

from __future__ import annotations

import argparse
import os
import re
import sys
from enum import IntEnum
from pathlib import Path
from urllib.parse import unquote, urlsplit


CORE_FILES = [
    "index.md",
    "AGENTS.md",
    "architecture.md",
    "modules.md",
    "links.md",
    "env.md",
    "runbook.md",
    "database.md",
]

NAV_LINKS = ["index", "AGENTS", "architecture", "modules", "links", "env", "runbook", "database"]
MARKDOWN_NAV = " | ".join(f"[{name}]({name}.md)" for name in NAV_LINKS)
WIKI_NAV = " | ".join(f"[[{name}]]" for name in NAV_LINKS)

LINKS_COLD_PATTERNS = [
    r"##\\s*(\u73AF\u5883\u8BE6\u60C5|\u6570\u636E\u5E93\u8FDE\u63A5|\u65E5\u5FD7\u5165\u53E3|\u7F13\u5B58|\u6D88\u606F\u961F\u5217|\u914D\u7F6E\u4E2D\u5FC3)",
    r"\\b(mysql\\s+-h|curl\\s+|ssh\\s+|bru\\s+run|kubectl\\s+)",
    r"(Host|\u7528\u6237\u540D|\u5BC6\u7801|\u670D\u52A1\u5668\u5730\u5740|\u65E5\u5FD7\u6839\u76EE\u5F55|\u8BF7\u6C42 ID|Trace ID)",
]


class EntryByteLimit(IntEnum):
    AGENTS = 3 * 1024
    LINKS = 5 * 1024


def validate_navigation(root: Path) -> list[str]:
    """\u53EA\u68C0\u67E5\u9879\u76EE\u70ED\u5165\u53E3\uFF0C\u4E0D\u8BFB\u53D6\u6E90\u7801\u6216\u73AF\u5883\u6587\u4EF6\u3002"""
    errors: list[str] = []
    for name in ("AGENTS.md", "index.md", "links.md"):
        path = root / name
        if not path.is_file():
            errors.append(f"missing entry: {name}")
            continue
        content = read_text(path)
        limit = EntryByteLimit.AGENTS if name == "AGENTS.md" else EntryByteLimit.LINKS if name == "links.md" else None
        if limit is not None and len(content.encode("utf-8")) > limit:
            errors.append(f"{name} exceeds {int(limit)} bytes")
        errors.extend(validate_local_links(path, content))
    return errors


def validate_local_links(path: Path, content: str) -> list[str]:
    errors: list[str] = []
    fence: str | None = None
    for number, line in enumerate(content.splitlines(), 1):
        marker = re.match(r"^ {0,3}(\`{3,}|~{3,})(.*)$", line)
        if marker:
            current = marker.group(1)
            if fence is None:
                fence = current
            elif current[0] == fence[0] and len(current) >= len(fence) and not marker.group(2).strip():
                fence = None
            continue
        if fence is not None:
            continue
        line = re.sub(r"(\`+).*?\\1", "", line)
        if re.search(r"\\[\\[[^\\]]+\\]\\]", line):
            errors.append(f"{path.name}:{number}: use standard Markdown links")
        for match in re.finditer(r"\\[[^\\]]*\\]\\((<[^>]+>|[^)]+)\\)", line):
            raw = match.group(1).strip()
            raw = raw[1:-1] if raw.startswith("<") and raw.endswith(">") else re.sub(r'\\s+[\\"\\x27].*$', '', raw)
            if raw.startswith("#") or urlsplit(raw).scheme:
                continue
            target = unquote(raw.split("#", 1)[0].split("?", 1)[0])
            if not target or "{{" in target or "<" in target:
                continue
            if not (path.parent / target).exists():
                errors.append(f"{path.name}:{number}: missing link target: {target}")
    return errors


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def line_count(text: str) -> int:
    return 0 if not text else text.count("\\n") + (0 if text.endswith("\\n") else 1)


def validate_project(root: Path, project: str | None, max_lines: int) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []

    if not root.exists() or not root.is_dir():
        errors.append(f"knowledge directory does not exist: {root}")
        return errors, warnings

    errors.extend(validate_navigation(root))

    for filename in CORE_FILES:
        path = root / filename
        if not path.exists():
            errors.append(f"missing core file: {filename}")
            continue
        if not path.is_file():
            errors.append(f"core path is not a file: {filename}")
            continue
        text = read_text(path)
        lines = line_count(text)
        if lines > max_lines:
            errors.append(f"{filename} has {lines} lines, exceeds {max_lines}")
        if filename == "AGENTS.md" and not all(f"]({name}.md)" in text for name in ("index", "links")):
            errors.append("AGENTS.md missing index/links navigation")
        elif filename not in ("index.md", "AGENTS.md") and MARKDOWN_NAV not in text and WIKI_NAV not in text:
            errors.append(f"{filename} missing navigation line")

    index_path = root / "index.md"
    if index_path.exists() and index_path.is_file():
        index_text = read_text(index_path)
        if project and f"#project/{project}" not in index_text:
            errors.append(f"index.md missing #project/{project} tag")
        for name in NAV_LINKS[1:]:
            markdown_link = f"]({name}.md)"
            wiki_link = f"[[{name}]]"
            if markdown_link not in index_text and wiki_link not in index_text:
                errors.append(f"index.md missing link to {name}.md")

    links_path = root / "links.md"
    if links_path.exists() and links_path.is_file():
        links_text = read_text(links_path)
        if "## \u6E90\u7801\u4ED3\u5E93" not in links_text and "## \u6E90\u7801\u8DEF\u5F84" not in links_text and "## \u6E90\u7801\u76EE\u5F55" not in links_text:
            warnings.append("links.md missing source repository/path section")
        if "\u6E90\u7801\u9879\u76EE" not in links_text and "\u6E90\u7801\u6839\u76EE\u5F55" not in links_text:
            warnings.append("links.md missing source project path")
        if line_count(links_text) > 120 or len(links_text.encode("utf-8")) > 5 * 1024:
            warnings.append("links.md is large; keep it as a hot entry and move cold details to env.md/runbook.md")
        for pattern in LINKS_COLD_PATTERNS:
            if re.search(pattern, links_text):
                warnings.append("links.md appears to contain environment/command cold information; move it to env.md or runbook.md")
                break

    env_path = root / "env.md"
    if env_path.exists() and env_path.is_file():
        env_text = read_text(env_path)
        for heading in ("## \u73AF\u5883\u6982\u89C8", "## \u5916\u90E8\u4F9D\u8D56", "## \u65E5\u5FD7\u5165\u53E3", "## \u6570\u636E\u5E93\u8FDE\u63A5"):
            if heading not in env_text:
                warnings.append(f"env.md missing {heading}")

    runbook_path = root / "runbook.md"
    if runbook_path.exists() and runbook_path.is_file():
        runbook_text = read_text(runbook_path)
        for heading in ("## \u6784\u5EFA", "## \u8FD0\u884C", "## \u9A8C\u8BC1", "## \u6392\u67E5"):
            if heading not in runbook_text:
                warnings.append(f"runbook.md missing {heading}")

    agents_path = root / "AGENTS.md"
    if agents_path.exists() and agents_path.is_file():
        agents_text = read_text(agents_path)
        if "## AI \u8FDB\u5165\u9879\u76EE\u89C4\u5219" not in agents_text and "## AI \u9605\u8BFB\u5EFA\u8BAE" not in agents_text:
            warnings.append("AGENTS.md missing AI entry/read guidance section")

    database_path = root / "database.md"
    if database_path.exists() and database_path.is_file():
        database_text = read_text(database_path)
        for heading in ("## \u8868\u7ED3\u6784\u6765\u6E90", "## \u6838\u5FC3\u8868\u7D22\u5F15", "## \u5E38\u7528\u5BFC\u51FA\u573A\u666F"):
            if heading not in database_text:
                errors.append(f"database.md missing {heading}")

    for child in root.iterdir():
        if child.is_symlink() and not child.exists():
            errors.append(f"broken symlink: {child.name} -> {os.readlink(child)}")

    return errors, warnings


def validate_projects_index(projects_root: Path) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    index_path = projects_root / "index.md"

    if not index_path.exists():
        errors.append(f"missing projects index: {index_path}")
        return errors, warnings

    index_text = read_text(index_path)
    project_dirs = sorted(
        child.name
        for child in projects_root.iterdir()
        if child.is_dir() and (child / "index.md").exists()
    )
    linked_projects = set(re.findall(r"\\[\\[([^]/\\n|]+)/index(?:\\|[^\\]]+)?\\]\\]", index_text))
    linked_projects.update(
        match.rstrip("/").split("/")[-2]
        for match in re.findall(r"\\]\\(([^)]+/index\\.md)\\)", index_text)
        if len(match.rstrip("/").split("/")) >= 2
    )

    for project in project_dirs:
        if project not in linked_projects:
            errors.append(f"30-projects/index.md missing project entry: {project}")

    for project in sorted(linked_projects):
        if project not in project_dirs:
            errors.append(f"30-projects/index.md links missing project directory: {project}")

    if not project_dirs:
        warnings.append(f"no project directories found under {projects_root}")

    return errors, warnings


def validate_vault(root: Path, max_lines: int, navigation_only: bool = False) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    projects_root = root / "30-projects" if (root / "30-projects").is_dir() else root

    index_errors, index_warnings = validate_projects_index(projects_root)
    errors.extend(index_errors)
    warnings.extend(index_warnings)

    if root != projects_root:
        root_entry = root / "AGENTS.md"
        if root_entry.is_file() and root_entry.stat().st_size > EntryByteLimit.AGENTS:
            errors.append("AGENTS.md exceeds 3072 bytes")
    projects_index = projects_root / "index.md"
    if projects_index.is_file():
        errors.extend(validate_local_links(projects_index, read_text(projects_index)))

    for project_dir in sorted(child for child in projects_root.iterdir() if child.is_dir()):
        if not (project_dir / "index.md").exists():
            continue
        if navigation_only:
            project_errors, project_warnings = validate_navigation(project_dir), []
        else:
            project_errors, project_warnings = validate_project(project_dir, project_dir.name, max_lines)
        errors.extend(f"{project_dir.name}: {item}" for item in project_errors)
        warnings.extend(f"{project_dir.name}: {item}" for item in project_warnings)

    return errors, warnings


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate generated project knowledge.")
    parser.add_argument("knowledge_dir", help="Path to generated knowledge directory")
    parser.add_argument("--project", help="Expected project name for #project/<name> tag")
    parser.add_argument("--all-projects", action="store_true", help="Validate 30-projects index and every project directory")
    parser.add_argument("--navigation-only", action="store_true", help="Only check entry links, entry size and project index; do not read environment files")
    parser.add_argument("--max-lines", type=int, default=200, help="Maximum lines per core file")
    args = parser.parse_args()

    root = Path(args.knowledge_dir).expanduser().resolve()
    if args.all_projects:
        errors, warnings = validate_vault(root, args.max_lines, args.navigation_only)
    elif args.navigation_only:
        errors, warnings = validate_navigation(root), []
    else:
        errors, warnings = validate_project(root, args.project, args.max_lines)

    print_report(errors, warnings)
    return 1 if errors else 0


def print_report(errors: list[str], warnings: list[str]) -> None:
    if errors:
        print("ERRORS:")
        for item in errors:
            print(f"- {item}")
    if warnings:
        print("WARNINGS:")
        for item in warnings:
            print(f"- {item}")
    if not errors and not warnings:
        print("OK: knowledge directory passed validation")
    elif not errors:
        print("OK: validation passed with warnings")


if __name__ == "__main__":
    sys.exit(main())
`;var Wa=`# {{PROJECT_NAME}}

[index](index.md) | [AGENTS](AGENTS.md) | [architecture](architecture.md) | [modules](modules.md) | [links](links.md) | [env](env.md) | [runbook](runbook.md) | [database](database.md)

#project/{{PROJECT_NAME}} {{TAGS}}

{{ONE_LINE_SUMMARY}}

## AI \u8FDB\u5165\u9879\u76EE\u89C4\u5219

- \u672C\u76EE\u5F55\u53EA\u7EF4\u62A4\u7A33\u5B9A\u9879\u76EE\u77E5\u8BC6\uFF0C\u4E0D\u8BB0\u5F55\u4E00\u6B21\u6027\u4EFB\u52A1\u8FC7\u7A0B\u3002
- \u5F00\u53D1\u524D\u5148\u4ECE\u4EFB\u52A1\u6216 workflow \u5165\u53E3\u8FDB\u5165\uFF0C\u518D\u6309\u9700\u8BFB\u53D6\u672C\u76EE\u5F55\u8D44\u6599\u3002
- \u9ED8\u8BA4\u53EA\u8BFB\u672C\u6587\u4EF6\u548C [links](links.md)\uFF0C\u5176\u4F59\u8D44\u6599\u6309\u4EFB\u52A1\u9700\u8981\u8BFB\u53D6\u3002
- \u6E90\u7801\u4ED3\u5E93\u4E0D\u662F\u77E5\u8BC6\u5E93\u76EE\u5F55\uFF0C\u6E90\u7801\u4F4D\u7F6E\u89C1 [links](links.md)\uFF1B\u5B9E\u9645\u5F00\u53D1\u5206\u652F\u4EE5\u4EFB\u52A1\u5165\u53E3\u4E3A\u51C6\uFF0C\u6267\u884C\u524D\u6838\u5BF9\u6E90\u7801\u4ED3\u5E93\u3002
- \u73AF\u5883\u548C\u5916\u90E8\u4F9D\u8D56\u89C1 [env](env.md)\uFF0C\u64CD\u4F5C\u6B65\u9AA4\u89C1 [runbook](runbook.md)\uFF0C\u8868\u7ED3\u6784\u89C1 [database](database.md)\u3002
- \u76EE\u6807\u5206\u652F\u6216\u76EE\u6807\u73AF\u5883\u672A\u786E\u8BA4\u65F6\uFF0C\u53EA\u505A\u53EA\u8BFB\u5206\u6790\u3002

## \u6838\u5FC3\u529F\u80FD

- {{FEATURE}}

## \u6838\u5FC3\u6A21\u5757

| \u6A21\u5757 | \u804C\u8D23 | \u542F\u52A8\u5165\u53E3 | \u72EC\u7ACB\u90E8\u7F72 |
|---|---|---|---|
| {{MODULE}} | {{RESPONSIBILITY}} | {{MAIN_CLASS}} | {{YES_NO}} |

\u5B8C\u6574\u6280\u672F\u6808\u89C1 [architecture](architecture.md)\uFF0C\u8BE6\u7EC6\u6A21\u5757\u7ED3\u6784\u89C1 [modules](modules.md)\u3002\u672C\u5165\u53E3\u63A7\u5236\u5728 1\u20133KB\uFF0C\u6784\u5EFA\u548C\u542F\u52A8\u547D\u4EE4\u5199\u5165 [runbook](runbook.md)\u3002

## \u5173\u952E\u7EA6\u675F

- {{CONSTRAINT}}
`;var Ba=`# \u67B6\u6784\u8BF4\u660E

[index](index.md) | [AGENTS](AGENTS.md) | [architecture](architecture.md) | [modules](modules.md) | [links](links.md) | [env](env.md) | [runbook](runbook.md) | [database](database.md)

#project/{{PROJECT_NAME}} #architecture {{TAGS}}

## \u5206\u5C42\u7ED3\u6784

\`\`\`text
{{LAYERED_ARCHITECTURE}}
\`\`\`

## \u6A21\u5757\u5173\u7CFB

\`\`\`mermaid
flowchart LR
  {{MERMAID_MODULE_RELATION}}
\`\`\`

## \u6838\u5FC3\u6D41\u7A0B

\`\`\`mermaid
sequenceDiagram
  {{MERMAID_CORE_FLOW}}
\`\`\`

## \u670D\u52A1\u4F9D\u8D56

| \u4F9D\u8D56 | \u7528\u9014 | \u4E3B\u8981\u6A21\u5757 |
|---|---|---|
| {{DEPENDENCY}} | {{PURPOSE}} | {{MODULES}} |

## \u6570\u636E\u6D41\u63CF\u8FF0

{{DATA_FLOW_SUMMARY}}
`;var Ma=`# \u6570\u636E\u5E93\u8BF4\u660E

[index](index.md) | [AGENTS](AGENTS.md) | [architecture](architecture.md) | [modules](modules.md) | [links](links.md) | [env](env.md) | [runbook](runbook.md) | [database](database.md)

#project/{{PROJECT_NAME}} #database {{TAGS}}

## \u4F7F\u7528\u539F\u5219

- \u67E5\u8BE2\u548C\u5BFC\u51FA\u4F18\u5148\u4F7F\u7528\u53EA\u8BFB\u8FDE\u63A5\u3002
- \u5199\u64CD\u4F5C\u5148\u786E\u8BA4\u73AF\u5883\u3001\u5F71\u54CD\u8303\u56F4\u3001\u4E8B\u52A1\u548C\u56DE\u6EDA\u65B9\u6848\u3002
- \u8FDE\u63A5\u914D\u7F6E\u89C1 [env](env.md)\uFF0C\u6267\u884C\u6B65\u9AA4\u89C1 [runbook](runbook.md)\u3002

## \u8868\u7ED3\u6784\u6765\u6E90

| \u6765\u6E90 | \u5185\u5BB9 |
|---|---|
| \`{{SQL_PATH}}\` | {{SQL_DESC}} |

## \u6838\u5FC3\u8868\u7D22\u5F15

| \u8868 | \u4E1A\u52A1\u57DF | \u7528\u9014 | \u5E38\u7528\u5B57\u6BB5 |
|---|---|---|---|
| \`{{TABLE}}\` | {{DOMAIN}} | {{PURPOSE}} | \`{{FIELDS}}\` |

## \u8868\u5173\u7CFB

{{RELATION_SUMMARY}}

## \u5E38\u7528\u5BFC\u51FA\u573A\u666F

| \u573A\u666F | \u4E3B\u8868 | \u5173\u8054\u8868 | \u8FC7\u6EE4\u6761\u4EF6 |
|---|---|---|---|
| {{SCENARIO}} | \`{{MAIN_TABLE}}\` | \`{{RELATED_TABLE}}\` | {{FILTER}} |

`;var Va=`# \u73AF\u5883\u4E0E\u5916\u90E8\u4F9D\u8D56

[index](index.md) | [AGENTS](AGENTS.md) | [architecture](architecture.md) | [modules](modules.md) | [links](links.md) | [env](env.md) | [runbook](runbook.md) | [database](database.md)

#project/{{PROJECT_NAME}} #env {{TAGS}}

## \u73AF\u5883\u6982\u89C8

| \u73AF\u5883 | \u7528\u9014 | \u8BBF\u95EE\u65B9\u5F0F | \u72B6\u6001 |
|---|---|---|---|
| {{ENV_NAME}} | {{ENV_PURPOSE}} | {{ACCESS_METHOD}} | {{STATUS}} |

## \u5916\u90E8\u4F9D\u8D56

| \u4F9D\u8D56 | \u7528\u9014 | \u914D\u7F6E\u6765\u6E90 | \u5907\u6CE8 |
|---|---|---|---|
| {{DEPENDENCY}} | {{PURPOSE}} | {{CONFIG_SOURCE}} | {{NOTES}} |

## \u65E5\u5FD7\u5165\u53E3

| \u73AF\u5883 | \u670D\u52A1 | \u65E5\u5FD7\u4F4D\u7F6E\u6216\u67E5\u8BE2\u5165\u53E3 | \u5907\u6CE8 |
|---|---|---|---|
| {{ENV_NAME}} | {{SERVICE}} | {{LOG_ENTRY}} | {{NOTES}} |

## \u6570\u636E\u5E93\u8FDE\u63A5

| \u73AF\u5883 | \u6570\u636E\u5E93 | \u6743\u9650 | \u914D\u7F6E\u6765\u6E90 |
|---|---|---|---|
| {{ENV_NAME}} | {{DATABASE}} | {{PERMISSION}} | {{CONFIG_SOURCE}} |

\u5171\u4EAB\u6A21\u677F\u4E0D\u4FDD\u5B58\u771F\u5B9E\u5BC6\u7801\u3001Token \u6216\u5185\u90E8\u4E3B\u673A\uFF1B\u79C1\u6709 Vault \u662F\u5426\u8BB0\u5F55\u654F\u611F\u4FE1\u606F\u7531\u4ED3\u5E93\u89C4\u5219\u51B3\u5B9A\u3002

`;var Ka=`# {{PROJECT_NAME}}

#project/{{PROJECT_NAME}} {{TAGS}}

{{ONE_LINE_SUMMARY}}

## \u5FEB\u901F\u5165\u53E3

| \u5165\u53E3 | \u7528\u9014 |
|---|---|
| [AGENTS](AGENTS.md) | \u9879\u76EE\u5168\u8C8C\u3001\u7EA6\u675F\u548C AI \u9605\u8BFB\u89C4\u5219 |
| [architecture](architecture.md) | \u67B6\u6784\u3001\u6838\u5FC3\u6D41\u7A0B\u548C\u4F9D\u8D56\u5173\u7CFB |
| [modules](modules.md) | \u6A21\u5757\u804C\u8D23\u548C\u4EE3\u7801\u4F4D\u7F6E |
| [links](links.md) | \u6E90\u7801\u3001\u5206\u652F\u548C\u6587\u6863\u5165\u53E3 |
| [env](env.md) | \u73AF\u5883\u3001\u5916\u90E8\u4F9D\u8D56\u548C\u672C\u5730\u914D\u7F6E\u8BF4\u660E |
| [runbook](runbook.md) | \u6784\u5EFA\u3001\u8FD0\u884C\u3001\u9A8C\u8BC1\u548C\u6392\u67E5\u6B65\u9AA4 |
| [database](database.md) | \u8868\u7ED3\u6784\u3001\u5173\u7CFB\u548C\u5E38\u7528\u67E5\u8BE2\u573A\u666F |

## \u63A8\u8350\u9605\u8BFB\u8DEF\u5F84

| \u573A\u666F | \u9605\u8BFB\u987A\u5E8F |
|---|---|
| \u65B0\u63A5\u624B\u9879\u76EE | [AGENTS](AGENTS.md) \u2192 [architecture](architecture.md) \u2192 [modules](modules.md) |
| \u4FEE\u6539\u529F\u80FD | [modules](modules.md) \u2192 [links](links.md) \u2192 \u76F8\u5173\u6E90\u7801 |
| \u73AF\u5883\u6392\u67E5 | [env](env.md) \u2192 [runbook](runbook.md) |
| \u6570\u636E\u95EE\u9898 | [database](database.md) \u2192 [env](env.md) \u2192 [runbook](runbook.md) |

## \u5F00\u53D1\u5165\u53E3\u89C4\u5219

- \u9879\u76EE\u8D44\u6599\u53EA\u4F5C\u4E3A\u7A33\u5B9A\u4E0A\u4E0B\u6587\uFF1B\u5B9E\u9645\u5F00\u53D1\u4ECE\u4EFB\u52A1\u6216 workflow \u5165\u53E3\u8FDB\u5165\u3002
- \u5206\u652F\u3001\u73AF\u5883\u548C\u5F71\u54CD\u8303\u56F4\u672A\u786E\u8BA4\u524D\uFF0C\u4E0D\u6267\u884C\u5199\u64CD\u4F5C\u3002

`;var Ga=`# \u94FE\u63A5\u4E0E\u5165\u53E3

[index](index.md) | [AGENTS](AGENTS.md) | [architecture](architecture.md) | [modules](modules.md) | [links](links.md) | [env](env.md) | [runbook](runbook.md) | [database](database.md)

#project/{{PROJECT_NAME}} #links {{TAGS}}

## \u6E90\u7801\u4ED3\u5E93

| \u9879 | \u503C |
|---|---|
| \u6E90\u7801\u9879\u76EE | \`{{SOURCE_PATH}}\` |
| \u77E5\u8BC6\u5E93\u8F93\u51FA | \`{{OUTPUT_PATH}}\` |
| \u9ED8\u8BA4\u5F00\u53D1\u5206\u652F | \`{{DEFAULT_BRANCH}}\` |
| \u4E3B\u8981\u6A21\u5757 | {{MAIN_MODULES}} |
| \u542F\u52A8\u6A21\u5757 | {{START_MODULES}} |

## \u6587\u6863\u7D22\u5F15

| \u6587\u6863/\u76EE\u5F55 | \u4F55\u65F6\u9605\u8BFB |
|---|---|
| \`{{DOC_PATH}}\` | {{WHEN_TO_READ}} |

## \u6E90\u7801\u76EE\u5F55

| \u76EE\u5F55 | \u8BF4\u660E |
|---|---|
| \`{{SOURCE_DIR}}\` | {{SOURCE_DIR_DESC}} |

`;var qa=`# \u6A21\u5757\u8BF4\u660E

[index](index.md) | [AGENTS](AGENTS.md) | [architecture](architecture.md) | [modules](modules.md) | [links](links.md) | [env](env.md) | [runbook](runbook.md) | [database](database.md)

#project/{{PROJECT_NAME}} #modules {{TAGS}}

## {{MODULE_NAME}}

\u804C\u8D23\uFF1A{{RESPONSIBILITY}}

\u6838\u5FC3\u4EE3\u7801\u4F4D\u7F6E\uFF1A
- \`{{CODE_PATH}}\`

\u4F9D\u8D56\uFF1A{{DEPENDENCIES}}

\u90E8\u7F72/API\uFF1A{{DEPLOYMENT_AND_API}}

\u98CE\u9669\u70B9\uFF1A{{RISKS}}
`;var za=`# \u64CD\u4F5C\u624B\u518C

[index](index.md) | [AGENTS](AGENTS.md) | [architecture](architecture.md) | [modules](modules.md) | [links](links.md) | [env](env.md) | [runbook](runbook.md) | [database](database.md)

#project/{{PROJECT_NAME}} #runbook {{TAGS}}

## \u6784\u5EFA

\`\`\`bash
{{BUILD_COMMAND}}
\`\`\`

## \u8FD0\u884C

\`\`\`bash
{{START_COMMAND}}
\`\`\`

## \u9A8C\u8BC1

\`\`\`bash
{{VERIFY_COMMAND}}
\`\`\`

## \u6392\u67E5

1. \u786E\u8BA4\u76EE\u6807\u73AF\u5883\u3001\u65F6\u95F4\u8303\u56F4\u548C\u8BF7\u6C42\u6807\u8BC6\u3002
2. \u4ECE [env](env.md) \u83B7\u53D6\u65E5\u5FD7\u6216\u76D1\u63A7\u5165\u53E3\u3002
3. \u5148\u505A\u53EA\u8BFB\u68C0\u67E5\uFF0C\u8BB0\u5F55\u8BC1\u636E\u540E\u518D\u51B3\u5B9A\u662F\u5426\u4FEE\u6539\u3002

## \u56DE\u6EDA

- {{ROLLBACK_STEPS}}

`;var Ua=`---
name: ai-knowledge-task-management
description: Manage tasks in an AI Knowledge Vault, including creating, listing, finding, moving, completing, reopening, updating, and deleting tasks backed by 10-tasks/board.md and 10-tasks/done.md.
---

# AI Knowledge Task Management

Use the bundled script for deterministic task-board edits. The active board is a lightweight scheduling view; completed task blocks live in the archive.

## Storage model

- Active tasks: \`10-tasks/board.md\`.
- Completed tasks: \`10-tasks/done.md\`, grouped by completion year.
- General task details: \`10-tasks/items/YYYY/MM/\`.
- Project task details: \`30-projects/<project>/inputs/YYYY/MM/<task>/\`.
- Workflow details: \`20-workflows/<workflow>/\`.
- Task entry frontmatter is the single source of status; keep the board/archive view synchronized and do not repeat a manual status line in the entry body. Canonical pending-release status is \`pending_release\` (the CLI also accepts \`pending-release\`).
- Newly completed tasks record \`completed_at\` as ISO 8601 with a timezone offset. Reopening removes it; completing again records the new completion time. Missing historical completion dates remain unknown and must not be invented.

Do not put execution logs or long context in the board. Use the task entry or \`execution.md\`.

## Script

The script discovers the nearest vault containing \`10-tasks/board.md\`. Pass \`--vault\` only when discovery is ambiguous.
Resolve \`scripts/task_manager.py\` relative to this skill folder, and run it from the target vault or pass \`--vault <vault-root>\` before the subcommand.

\`\`\`bash
python3 scripts/task_manager.py list
python3 scripts/task_manager.py find "keyword"
python3 scripts/task_manager.py check
python3 scripts/task_manager.py create --type general --title "Follow up"
python3 scripts/task_manager.py move p-12 doing
python3 scripts/task_manager.py complete p-12
python3 scripts/task_manager.py move p-12 todo
python3 scripts/task_manager.py --dry-run delete p-12
\`\`\`

Use \`--dry-run\` before deletion or when the requested change has a broad impact. New tasks cannot start in \`done\`; complete them explicitly so the archive remains auditable.

\`check\` is read-only and checks links, IDs, required metadata, status consistency, and completion dates. Missing historical completion dates are warnings. Markdown links resolve relative to the board/archive file and decode URL escapes; legacy Wiki links resolve from the vault root. Move/update operations validate the entry before changing files, prepare every changed file first, and restore original contents if writing fails. A rollback failure is reported explicitly.

## Safety

- Ask before choosing a project when ownership is unclear.
- Do not delete linked task files unless the user explicitly requests it.
- Preserve existing notes and links when moving between active and completed storage.
- Never overwrite unrelated task blocks.
`;var Ya=`interface:
  display_name: "AI Knowledge Task Management"
  short_description: "Manage active and archived vault tasks safely"
  default_prompt: "Use $ai-knowledge-task-management to create, move, complete, reopen, or find tasks in this vault."

`;var Ha=`#!/usr/bin/env python3
"""Manage active and archived tasks in an AI Knowledge Vault."""

from __future__ import annotations

import argparse
import difflib
import os
import re
import sys
import tempfile
from dataclasses import dataclass
from datetime import datetime
from enum import Enum
from pathlib import Path
from urllib.parse import quote, unquote


class TaskStatus(Enum):
    DOING = ("doing", "Doing")
    TODO = ("todo", "Todo")
    PENDING_RELEASE = ("pending_release", "Pending Release")
    WAITING = ("waiting", "Waiting")
    BACKLOG = ("backlog", "Backlog")
    DONE = ("done", "Done")

    @property
    def value_text(self) -> str:
        return self.value[0]

    @property
    def section(self) -> str:
        return self.value[1]

    @classmethod
    def parse(cls, raw: str) -> "TaskStatus":
        normalized = raw.strip().lower().replace("_", "-")
        aliases = {"pending": "pending-release", "release": "pending-release"}
        normalized = aliases.get(normalized, normalized)
        for item in cls:
            if normalized in {item.value_text.replace("_", "-"), item.section.lower().replace(" ", "-")}:
                return item
        allowed = ", ".join(item.value_text for item in cls)
        raise SystemExit(f"Unknown status: {raw}. Allowed: {allowed}")


class TaskType(Enum):
    GENERAL = ("general", "g")
    PROJECT = ("project", "p")
    WORKFLOW = ("workflow", "w")

    @property
    def value_text(self) -> str:
        return self.value[0]

    @property
    def prefix(self) -> str:
        return self.value[1]

    @classmethod
    def parse(cls, raw: str) -> "TaskType":
        normalized = raw.strip().lower()
        for item in cls:
            if normalized == item.value_text:
                return item
        allowed = ", ".join(item.value_text for item in cls)
        raise SystemExit(f"Unknown type: {raw}. Allowed: {allowed}")


class TaskStorage(Enum):
    BOARD = "board"
    ARCHIVE = "archive"


class TaskLinkKind(Enum):
    MARKDOWN = "markdown"
    WIKI = "wiki"


@dataclass
class BoardTask:
    task_id: str
    status: TaskStatus
    title: str
    block: str
    checked: bool
    link: str | None
    storage: TaskStorage
    link_kind: TaskLinkKind = TaskLinkKind.MARKDOWN


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def write_text(path: Path, text: str, dry_run: bool) -> None:
    if dry_run:
        if path.exists():
            old = read_text(path)
        else:
            old = ""
        print_diff(path, old, text)
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def atomic_write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    mode = path.stat().st_mode & 0o777 if path.exists() else 0o644
    temporary_path: Path | None = None
    try:
        with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8", dir=path.parent, prefix=f".{path.name}.", delete=False) as temporary:
            temporary_path = Path(temporary.name)
            temporary.write(text)
            temporary.flush()
            os.fsync(temporary.fileno())
        temporary_path.chmod(mode)
        os.replace(temporary_path, path)
    finally:
        if temporary_path is not None:
            temporary_path.unlink(missing_ok=True)


def write_task_files(changes: dict[Path, str], dry_run: bool) -> None:
    originals = {path: read_text(path) if path.exists() else None for path in changes}
    changed = {path: content for path, content in changes.items() if content != originals[path]}
    if dry_run:
        for path, content in changed.items():
            print_diff(path, originals[path] or "", content)
        return
    attempted: list[Path] = []
    try:
        for path, content in changed.items():
            attempted.append(path)
            atomic_write_text(path, content)
    except OSError as error:
        rollback_errors: list[str] = []
        for path in reversed(attempted):
            try:
                original = originals[path]
                if original is None:
                    path.unlink(missing_ok=True)
                else:
                    atomic_write_text(path, original)
            except OSError as rollback_error:
                rollback_errors.append(f"{path}: {rollback_error}")
        detail = "Rollback incomplete: " + "; ".join(rollback_errors) if rollback_errors else "All changed files restored"
        raise SystemExit(f"Task update failed: {error}. {detail}") from error


def print_diff(path: Path, old: str, new: str) -> None:
    diff = difflib.unified_diff(
        old.splitlines(keepends=True),
        new.splitlines(keepends=True),
        fromfile=f"{path} (before)",
        tofile=f"{path} (after)",
    )
    print("".join(diff), end="")


def board_path(vault: Path) -> Path:
    return vault / "10-tasks" / "board.md"


def done_path(vault: Path) -> Path:
    return vault / "10-tasks" / "done.md"


def discover_vault() -> Path:
    starts = [Path.cwd(), Path(__file__).resolve().parent]
    seen: set[Path] = set()
    for start in starts:
        for candidate in [start, *start.parents]:
            resolved = candidate.resolve()
            if resolved in seen:
                continue
            seen.add(resolved)
            if board_path(resolved).exists():
                return resolved
    return Path.cwd().resolve()


def slugify(title: str) -> str:
    text = title.strip().lower()
    text = re.sub(r"[^\\w\\u4e00-\\u9fff]+", "-", text)
    text = re.sub(r"-{2,}", "-", text).strip("-")
    return text[:80] or "task"


def now_text() -> str:
    return datetime.now().strftime("%Y-%m-%d %H:%M")


def completion_time_text() -> str:
    return datetime.now().astimezone().isoformat(timespec="seconds")


def current_year_month() -> tuple[str, str]:
    now = datetime.now()
    return now.strftime("%Y"), now.strftime("%m")


def split_board_sections(text: str) -> tuple[str, dict[str, str], list[str]]:
    matches = list(re.finditer(r"^## (.+?)\\s*$", text, flags=re.MULTILINE))
    if not matches:
        raise SystemExit("No board sections found")
    prefix = text[: matches[0].start()]
    sections: dict[str, str] = {}
    order: list[str] = []
    for index, match in enumerate(matches):
        name = match.group(1).strip()
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        sections[name] = text[start:end]
        order.append(name)
    return prefix, sections, order


def join_board_sections(prefix: str, sections: dict[str, str], order: list[str]) -> str:
    output = [prefix.rstrip(), ""]
    for name in order:
        body = sections.get(name, "")
        output.append(f"## {name}")
        output.append(body.strip("\\n"))
    return "\\n".join(output).rstrip() + "\\n"


def replace_section(text: str, section: str, new_body: str) -> str:
    pattern = re.compile(rf"^## {re.escape(section)}\\s*$", flags=re.MULTILINE)
    match = pattern.search(text)
    if not match:
        raise SystemExit(f"Board section not found: {section}")
    next_match = re.search(r"^## .+?\\s*$", text[match.end() :], flags=re.MULTILINE)
    end = match.end() + next_match.start() if next_match else len(text)
    return text[: match.end()] + new_body + text[end:]


def remove_task_block(section_body: str, block: str) -> str:
    updated = section_body.replace(block, "", 1)
    return re.sub(r"\\n{4,}", "\\n\\n\\n", updated)


def append_task_block(section_body: str, block: str) -> str:
    if section_body.strip():
        if section_body.endswith("\\n\\n"):
            return section_body + block + "\\n"
        if section_body.endswith("\\n"):
            return section_body + "\\n" + block + "\\n"
        return section_body + "\\n\\n" + block + "\\n"
    separator = "" if section_body.endswith("\\n") else "\\n"
    return section_body + separator + block + "\\n"


def parse_board_tasks(text: str) -> list[BoardTask]:
    _, sections, _ = split_board_sections(text)
    tasks: list[BoardTask] = []
    for section_name, body in sections.items():
        try:
            status = next(item for item in TaskStatus if item.section == section_name)
        except StopIteration:
            continue
        tasks.extend(parse_task_blocks(body, status, TaskStorage.BOARD))
    return tasks


def parse_done_tasks(text: str) -> list[BoardTask]:
    return parse_task_blocks(text, TaskStatus.DONE, TaskStorage.ARCHIVE)


def parse_task_blocks(text: str, status: TaskStatus, storage: TaskStorage) -> list[BoardTask]:
    tasks: list[BoardTask] = []
    starts = list(re.finditer(r"(?m)^- \\[( |x|X)\\] .*$", text))
    for index, start_match in enumerate(starts):
        start = start_match.start()
        end = starts[index + 1].start() if index + 1 < len(starts) else len(text)
        if storage == TaskStorage.ARCHIVE:
            heading = re.search(r"(?m)^## .+?\\s*$", text[start_match.end():end])
            if heading:
                end = start_match.end() + heading.start()
        block = text[start:end].rstrip()
        first_line = start_match.group(0)
        id_match = re.search(r"\\bid:([gpw]-\\d+)\\b", block)
        if not id_match:
            continue
        wiki_link = re.search(r"\\[\\[([^\\]|]+)(?:\\|[^\\]]+)?\\]\\]", first_line)
        markdown_link = re.search(r"\\[[^\\]]+\\]\\(([^)]+)\\)", first_line)
        link = wiki_link.group(1) if wiki_link else markdown_link.group(1) if markdown_link else None
        title = re.sub(r"^- \\[[ xX]\\]\\s*", "", first_line).strip()
        title = re.sub(r"\\s*(?:\\[\\[.*|\\[[^\\]]+\\]\\([^)]*\\)).*$", "", title).strip()
        title = re.sub(r"\\s+#task/\\w+.*$", "", title).strip()
        tasks.append(
            BoardTask(
                task_id=id_match.group(1),
                status=status,
                title=title,
                block=block,
                checked=start_match.group(1).lower() == "x",
                link=link,
                storage=storage,
                link_kind=TaskLinkKind.WIKI if wiki_link else TaskLinkKind.MARKDOWN,
            )
        )
    return tasks


def read_all_tasks(vault: Path) -> list[BoardTask]:
    tasks = parse_board_tasks(read_text(board_path(vault)))
    archive = done_path(vault)
    if archive.exists():
        tasks.extend(parse_done_tasks(read_text(archive)))
    return tasks


def find_task(vault: Path, task_id: str) -> BoardTask:
    for task in read_all_tasks(vault):
        if task.task_id == task_id:
            return task
    raise SystemExit(f"Task not found: {task_id}")


def replace_frontmatter_value(content: str, key: str, value: str) -> str:
    if not content.startswith("---\\n"):
        return content
    end = content.find("\\n---", 4)
    if end == -1:
        return content
    frontmatter = content[:end]
    rest = content[end:]
    pattern = re.compile(rf"^{re.escape(key)}:[ \\t]*.*$", re.MULTILINE)
    line = f"{key}: {value}"
    if pattern.search(frontmatter):
        frontmatter = pattern.sub(line, frontmatter, count=1)
    else:
        frontmatter += "\\n" + line
    return frontmatter + rest


def frontmatter_fields(content: str) -> dict[str, str]:
    frontmatter = re.match(r"\\A---\\n(.*?)\\n---(?:\\n|$)", content, re.DOTALL)
    if not frontmatter:
        raise ValueError("Task entry requires frontmatter")
    return {
        field.group(1): field.group(2).strip().strip('"\\'')
        for line in frontmatter.group(1).splitlines()
        if (field := re.match(r"^([\\w-]+):[ \\t]*(.*)$", line))
    }


def remove_frontmatter_value(content: str, key: str) -> str:
    end = content.find("\\n---", 4)
    if not content.startswith("---\\n") or end == -1:
        raise ValueError("Task entry requires frontmatter")
    frontmatter = re.sub(rf"(?m)^{re.escape(key)}:[^\\n]*(?:\\n|$)", "", content[:end])
    return frontmatter.rstrip("\\n") + content[end:]


def resolve_task_entry(vault: Path, task: BoardTask) -> tuple[Path, str, dict[str, str]]:
    source = board_path(vault) if task.storage == TaskStorage.BOARD else done_path(vault)
    candidates = task_entry_candidates(vault, task.link or "", task.link_kind, source)
    path = next((candidate for candidate in candidates if candidate.is_file()), None)
    if path is None:
        raise SystemExit(f"Task {task.task_id}: entry link cannot be resolved: {task.link!r}; no files changed")
    content = read_text(path)
    try:
        fields = frontmatter_fields(content)
    except ValueError as error:
        raise SystemExit(f"Task {task.task_id}: {error}: {path}; no files changed") from error
    if fields.get("id") != task.task_id:
        raise SystemExit(f"Task {task.task_id}: entry id mismatch at {path}; no files changed")
    TaskStatus.parse(fields.get("status", ""))
    return path, content, fields


def prepare_entry_status(task: BoardTask, content: str, fields: dict[str, str], status: TaskStatus) -> str:
    updated = replace_frontmatter_value(content, "status", status.value_text)
    if status == TaskStatus.DONE:
        # \u5386\u53F2\u5DF2\u5B8C\u6210\u4EFB\u52A1\u7F3A\u5C11\u65E5\u671F\u65F6\u4FDD\u6301\u672A\u77E5\uFF0C\u907F\u514D\u91CD\u590D\u5B8C\u6210\u65F6\u4F2A\u9020\u5B8C\u6210\u65F6\u95F4\u3002
        if task.status != TaskStatus.DONE and TaskStatus.parse(fields["status"]) != TaskStatus.DONE:
            updated = replace_frontmatter_value(updated, "completed_at", f'"{completion_time_text()}"')
    else:
        updated = remove_frontmatter_value(updated, "completed_at")
    return updated


def task_entry_candidates(vault: Path, link: str, link_kind: TaskLinkKind = TaskLinkKind.MARKDOWN, source_path: Path | None = None) -> list[Path]:
    raw = link.strip().strip("<>").split("#", 1)[0]
    if re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*://", raw):
        return []
    if not raw:
        return []
    raw = unquote(raw)
    base = vault if link_kind == TaskLinkKind.WIKI else (source_path or board_path(vault)).parent
    target = (base / raw).resolve()
    if target.suffix == ".md":
        return [target]
    return [Path(f"{target}.md"), target / "index.md", target / "AGENTS.md"]


def move_task(vault: Path, task_id: str, status: TaskStatus, dry_run: bool) -> None:
    board = board_path(vault)
    archive = done_path(vault)
    board_text = read_text(board)
    archive_text = read_text(archive) if archive.exists() else "# Tasks Done\\n\\n\u5F52\u6863\u5DF2\u5B8C\u6210\u4E8B\u9879\uFF0C\u4FDD\u7559\u5FC5\u8981\u94FE\u63A5\u3002\\n"
    task = find_task(vault, task_id)
    entry_path, entry_content, fields = resolve_task_entry(vault, task)
    next_entry = prepare_entry_status(task, entry_content, fields, status)
    block = task.block
    block = re.sub(r"^- \\[[ xX]\\]", "- [x]" if status == TaskStatus.DONE else "- [ ]", block, count=1)
    changes: dict[Path, str] = {}

    if task.storage == TaskStorage.BOARD:
        _, sections, _ = split_board_sections(board_text)
        source_body = sections[task.status.section]
        next_board = replace_section(
            board_text,
            task.status.section,
            remove_task_block(source_body, task.block),
        )
        if status == TaskStatus.DONE:
            next_archive = append_done_archive(archive_text, block)
            changes[archive] = next_archive
        else:
            _, next_sections, _ = split_board_sections(next_board)
            target_body = append_task_block(next_sections.get(status.section, ""), block)
            next_board = replace_section(next_board, status.section, target_body)
        changes[board] = next_board
    else:
        if status == TaskStatus.DONE:
            next_archive = archive_text.replace(task.block, block, 1)
            changes[archive] = normalize_archive_spacing(next_archive)
        else:
            next_archive = normalize_archive_spacing(archive_text.replace(task.block, "", 1))
            _, sections, _ = split_board_sections(board_text)
            target_body = append_task_block(sections.get(status.section, ""), block)
            next_board = replace_section(board_text, status.section, target_body)
            changes[archive] = next_archive
            changes[board] = next_board

    if next_entry != entry_content:
        changes[entry_path] = next_entry
    write_task_files(changes, dry_run)


def append_done_archive(text: str, block: str) -> str:
    year_heading = f"## {datetime.now().year}"
    normalized = text.rstrip()
    heading_match = re.search(rf"(?m)^{re.escape(year_heading)}\\s*$", normalized)
    if not heading_match:
        return f"{normalized}\\n\\n{year_heading}\\n\\n{block}\\n"

    next_heading = re.search(r"(?m)^## .+?\\s*$", normalized[heading_match.end():])
    insert_at = heading_match.end() + next_heading.start() if next_heading else len(normalized)
    before = normalized[:insert_at].rstrip()
    after = normalized[insert_at:].lstrip()
    return f"{before}\\n\\n{block}\\n" + (f"\\n{after}\\n" if after else "")


def normalize_archive_spacing(text: str) -> str:
    without_empty_years = re.sub(
        r"(?ms)^## \\d{4}\\s*\\n(?=\\s*(?:## |\\Z))",
        "",
        text,
    )
    return re.sub(r"\\n{4,}", "\\n\\n\\n", without_empty_years).rstrip() + "\\n"


def scan_next_id(vault: Path, task_type: TaskType) -> str:
    pattern = re.compile(rf"\\b{task_type.prefix}-(\\d+)\\b")
    max_id = 0
    for path in [board_path(vault), done_path(vault), *vault.glob("10-tasks/items/**/*.md"), *vault.glob("20-workflows/**/AGENTS.md"), *vault.glob("30-projects/*/inputs/**/*.md")]:
        if not path.exists() or not path.is_file():
            continue
        for match in pattern.finditer(read_text(path)):
            max_id = max(max_id, int(match.group(1)))
    return f"{task_type.prefix}-{max_id + 1}"


def yaml_string(value: str) -> str:
    if re.fullmatch(r"[A-Za-z0-9_.:/ -]+", value):
        return value
    return '"' + value.replace('"', '\\\\"') + '"'


def note_block(notes: list[str]) -> str:
    if not notes:
        return ""
    lines = ["  > [!note] \u8BF4\u660E"]
    for note in notes:
        for line in note.splitlines():
            lines.append(f"  > - {line.strip()}" if line.strip() else "  > -")
    return "\\n" + "\\n".join(lines)


def make_board_line(task_id: str, task_type: TaskType, title: str, status: TaskStatus, link: str, due: str | None, source: str | None, created: str, notes: list[str]) -> str:
    checked = "x" if status == TaskStatus.DONE else " "
    parts = [f"- [{checked}] {title} [\u4EFB\u52A1\u5165\u53E3]({format_board_link(link)})"]
    if due:
        parts.append(f"due:{due}")
    if source:
        parts.append(source)
    parts.extend([f"#task/{task_type.value_text}", f"id:{task_id}", f"created:{created}"])
    return " ".join(parts) + note_block(notes)


def format_board_link(link: str) -> str:
    target = link if link.endswith(".md") else f"{link}.md"
    if target.startswith("10-tasks/"):
        target = target.removeprefix("10-tasks/")
    else:
        target = f"../{target}"
    return quote(target, safe="/")


def create_entry(vault: Path, task_id: str, task_type: TaskType, title: str, status: TaskStatus, projects: list[str], due: str | None, source: str | None, notes: list[str]) -> tuple[Path, str]:
    year, month = current_year_month()
    slug = slugify(title)
    created = now_text()
    if task_type == TaskType.GENERAL:
        rel = Path("10-tasks") / "items" / year / month / f"{task_id}-{slug}.md"
        link = str(rel.with_suffix(""))
        body = general_entry(task_id, title, status, created, due, source, notes)
    elif task_type == TaskType.PROJECT:
        if len(projects) != 1:
            raise SystemExit("Project task requires exactly one --project")
        rel = Path("30-projects") / projects[0] / "inputs" / year / month / f"{task_id}-{slug}" / "AGENTS.md"
        link = str(rel.with_suffix(""))
        body = project_entry(task_id, title, status, projects[0], created, due, notes, vault / rel, vault)
    else:
        rel = Path("20-workflows") / f"{task_id}-{slug}" / "AGENTS.md"
        link = str(rel.with_suffix(""))
        body = workflow_entry(task_id, title, status, projects, created, due, notes)
    return vault / rel, body


def create_support_files(entry_path: Path, task_type: TaskType, dry_run: bool) -> None:
    folder = entry_path.parent
    if task_type == TaskType.GENERAL:
        return
    files = {
        "overview.md": "# Overview\\n\\n## \u80CC\u666F\\n\\n- \u5F85\u8865\u5145\\n\\n## \u76EE\u6807\\n\\n- \u5F85\u8865\u5145\\n",
        "execution.md": "# Execution\\n\\n## \u6267\u884C\u8BB0\u5F55\\n\\n- \u5F85\u8865\u5145\\n",
    }
    if task_type == TaskType.PROJECT:
        files["release-prep.md"] = "# Release Preparation\\n\\n- [ ] \u76EE\u6807\u5206\u652F\u5DF2\u786E\u8BA4\\n- [ ] \u9A8C\u8BC1\u4E0E\u56DE\u6EDA\u65B9\u6848\u5DF2\u786E\u8BA4\\n"
    if task_type == TaskType.WORKFLOW:
        files["todo.md"] = "# Todo\\n\\n- [ ] \u5F85\u8865\u5145\\n"
        files["risk.md"] = "# Risks\\n\\n- \u5F85\u8865\u5145\\n"
        files["inputs/.gitkeep"] = ""
    for relative_path, content in files.items():
        path = folder / relative_path
        if not path.exists():
            write_text(path, content, dry_run)


def general_entry(task_id: str, title: str, status: TaskStatus, created: str, due: str | None, source: str | None, notes: list[str]) -> str:
    due_line = f"due: {due}\\n" if due else ""
    source_line = f"source: {yaml_string(source)}\\n" if source else ""
    task_notes = "\\n".join(f"- {line}" for note in notes for line in note.splitlines() if line.strip()) or "- \u5F85\u8865\u5145"
    return f"""---
id: {task_id}
type: general
status: {status.value_text}
title: {yaml_string(title)}
created: "{created}"
{due_line}{source_line}entry_type: general_task
---

# {title}

## AI \u4E0A\u4E0B\u6587\u6839

\u672C\u4EFB\u52A1\u6587\u4EF6\u662F\u901A\u7528\u5F85\u529E\u4E0A\u4E0B\u6587\u6839\uFF1B\u901A\u7528\u5F85\u529E\u4E0D\u9ED8\u8BA4\u8FDB\u5165\u6E90\u7801\u5F00\u53D1\u3002

## \u4EFB\u52A1\u8BF4\u660E

{task_notes}

## \u6267\u884C\u7ED3\u679C

- \u5B8C\u6210\u60C5\u51B5\uFF1A
- \u540E\u7EED\u5F85\u529E\uFF1A
"""


def project_entry(task_id: str, title: str, status: TaskStatus, project: str, created: str, due: str | None, notes: list[str], entry_path: Path, vault: Path) -> str:
    due_line = f"due: {due}\\n" if due else ""
    task_notes = "\\n".join(f"- {line}" for note in notes for line in note.splitlines() if line.strip()) or "- \u5F85\u8865\u5145"
    return f"""---
id: {task_id}
type: project
status: {status.value_text}
project: {project}
title: {yaml_string(title)}
created: "{created}"
{due_line}entry_type: project_input
---

# {title}

- \u5173\u8054\u9879\u76EE\uFF1A[\u9879\u76EE\u5165\u53E3](../../../../index.md)
- \u76EE\u6807\u5F00\u53D1\u5206\u652F\uFF1A\u5F85\u586B\u5199
- \u521B\u5EFA\u65F6\u95F4\uFF1A{created}

## AI \u4E0A\u4E0B\u6587\u6839

\u672C\u4EFB\u52A1\u76EE\u5F55\u662F AI \u5F00\u53D1\u4E0A\u4E0B\u6587\u6839\uFF1B\u6E90\u7801\u4ED3\u5E93\u4E0D\u662F\u672C\u76EE\u5F55\uFF0C\u5FC5\u987B\u4ECE\u201C\u6E90\u7801\u5B9A\u4F4D\u201D\u6216\u5173\u8054\u9879\u76EE \`links.md\` \u8FDB\u5165\u3002

## \u6E90\u7801\u5B9A\u4F4D

- \u6E90\u7801\u4ED3\u5E93\uFF1A\u5F85\u4ECE\u5173\u8054\u9879\u76EE \`links.md\` \u8BFB\u53D6
- \u76EE\u6807\u6A21\u5757\uFF1A\u5F85\u586B\u5199
- \u9884\u8BA1\u4FEE\u6539\u8303\u56F4\uFF1A\u5F85\u586B\u5199

## \u6700\u5C0F\u5FC5\u8BFB\u8D44\u6599

1. \u672C\u4EFB\u52A1\u5165\u53E3\uFF1A\`{entry_path}\`\u3002
2. \u5173\u8054\u9879\u76EE\u5165\u53E3\uFF1A\`{vault}/30-projects/{project}/AGENTS.md\`\u3002
3. \u5173\u8054\u9879\u76EE\u94FE\u63A5\uFF1A\`{vault}/30-projects/{project}/links.md\`\u3002
4. \u53EA\u8BFB\u53D6\u4E0E\u672C\u4EFB\u52A1\u76F4\u63A5\u76F8\u5173\u7684\u6E90\u7801\u6587\u4EF6\u3002

## \u7981\u6B62\u8BFB\u53D6

- \u4E0D\u9012\u5F52\u626B\u63CF\u6574\u4E2A vault\u3002
- \u4E0D\u8BFB\u53D6\u65E0\u5173 workflow\u3002
- \u4E0D\u8BFB\u53D6\u65E0\u5173\u9879\u76EE inputs\u3002
- \u4E0D\u8BFB\u53D6\u5F53\u524D\u4EFB\u52A1\u672A\u5F15\u7528\u7684\u4E2A\u4EBA\u7B14\u8BB0\u6216\u5176\u4ED6\u65E0\u5173\u8D44\u6599\u3002

## AI \u8FDB\u5165\u987A\u5E8F

1. \u8BFB\u53D6\u672C\u4EFB\u52A1\u5165\u53E3\u3002
2. \u5982\u9700\u5F00\u53D1\uFF0C\u8BFB\u53D6\u5173\u8054\u9879\u76EE\u5165\u53E3\u548C\u9879\u76EE\u94FE\u63A5\u3002
3. \u76EE\u6807\u5F00\u53D1\u5206\u652F\u4E3A \`\u5F85\u586B\u5199\` \u6216\u4E3A\u7A7A\u65F6\uFF0C\u5148\u8BA9\u7528\u6237\u8865\u5145\uFF0C\u4E0D\u8981\u81EA\u884C\u5F00\u53D1\u3002

## \u4EFB\u52A1\u8BF4\u660E

{task_notes}

## \u5DF2\u786E\u8BA4\u4E8B\u5B9E

- \u5F85\u8865\u5145

## \u5F85\u786E\u8BA4\u95EE\u9898

- \u5F85\u8865\u5145

## \u6267\u884C\u7ED3\u679C

- \u4FEE\u6539\u6587\u4EF6\uFF1A
- \u9A8C\u8BC1\u65B9\u5F0F\uFF1A
- \u98CE\u9669\uFF1A
- \u540E\u7EED\u5F85\u529E\uFF1A
"""


def workflow_entry(task_id: str, title: str, status: TaskStatus, projects: list[str], created: str, due: str | None, notes: list[str]) -> str:
    project_lines = "".join(f"  - {project}\\n" for project in projects)
    project_block = f"project:\\n{project_lines}" if projects else "project: []\\n"
    due_line = f"due: {due}\\n" if due else ""
    task_notes = "\\n".join(f"- {line}" for note in notes for line in note.splitlines() if line.strip()) or "- \u5F85\u8865\u5145"
    related = "\u3001".join(
        f"[{project} AGENTS](../../30-projects/{project}/AGENTS.md)\u3001[{project} links](../../30-projects/{project}/links.md)"
        for project in projects
    ) or "\u5F85\u8865\u5145"
    return f"""---
id: {task_id}
type: workflow
status: {status.value_text}
{project_block}title: {yaml_string(title)}
created: "{created}"
{due_line}entry_type: workflow
---

# {title}

## \u5F53\u524D\u4EFB\u52A1
- \u76EE\u6807\uFF1A{title}\u3002
- \u6267\u884C\u8BB0\u5F55\uFF1A[execution](execution.md)
- \u9700\u6C42\u4E0E\u786E\u8BA4\uFF1A[overview](overview.md)
- \u5F85\u529E\uFF1A[todo](todo.md)
- \u98CE\u9669\uFF1A[risk](risk.md)
- \u89C4\u5219\uFF1A[\u4EFB\u52A1\u8DEF\u7531](../../rules/task-routing.md)\u3001[workflow](../../rules/workflow-policy.md)\u3001[\u5199\u56DE](../../rules/writeback.md)\u3001[\u73AF\u5883\u5B89\u5168](../../rules/env-safety.md)

## \u8DEF\u7531
- \u4E0A\u4E0B\u6587\u6839\uFF1A\u672C\u76EE\u5F55\uFF0C\u975E\u6E90\u7801\u4ED3\u5E93\u3002
- \u6309\u9700\u8BFB\u53D6\uFF1A\`overview.md\` \u770B\u9700\u6C42\u548C\u786E\u8BA4\u9879\uFF1B\`todo.md\` \u770B\u5F85\u529E\uFF1B\`risk.md\` \u770B\u98CE\u9669\uFF1B\u9700\u8981\u9879\u76EE\u7A33\u5B9A\u77E5\u8BC6\u65F6\u8BFB\u5173\u8054\u9879\u76EE\u5165\u53E3\uFF1B\u9700\u8981\u5F00\u53D1\u65F6\u518D\u8BFB\u76F8\u5173\u6E90\u7801\u3002
- \u6E90\u7801\u4ED3\u5E93\uFF1A\u5F85\u4ECE\u5173\u8054\u9879\u76EE \`links.md\` \u8BFB\u53D6
- \u76EE\u6807\u5206\u652F\uFF1A\u5F85\u586B\u5199
- \u5173\u8054\u9879\u76EE\uFF1A{related}

## \u4EFB\u52A1\u8BF4\u660E

{task_notes}

## \u95E8\u69DB
- \u7EE7\u7EED\u5F00\u53D1\u524D\u786E\u8BA4\u6E90\u7801\u4ED3\u5E93\u5F53\u524D\u5206\u652F\u3002
- \u76EE\u6807\u5F00\u53D1\u5206\u652F\u4E3A \`\u5F85\u586B\u5199\` \u6216\u4E3A\u7A7A\u65F6\uFF0C\u5148\u8BA9\u7528\u6237\u8865\u5145\uFF0C\u4E0D\u8981\u81EA\u884C\u5F00\u53D1\u3002
"""


def create_task(args: argparse.Namespace) -> None:
    vault = args.vault
    task_type = TaskType.parse(args.type)
    status = TaskStatus.parse(args.status)
    if status == TaskStatus.DONE:
        raise SystemExit("New tasks cannot be created directly in done status")
    task_id = args.id or scan_next_id(vault, task_type)
    entry_path, entry_text = create_entry(vault, task_id, task_type, args.title, status, args.project, args.due, args.source, args.note)
    created_match = re.search(r'created: "?([^"\\n]+)"?', entry_text)
    created = created_match.group(1) if created_match else now_text()
    link = str(entry_path.relative_to(vault).with_suffix(""))
    line = make_board_line(task_id, task_type, args.title, status, link, args.due, args.source, created, args.note)
    path = board_path(vault)
    text = read_text(path)
    _, sections, _ = split_board_sections(text)
    body = sections.get(status.section, "")
    updated = replace_section(text, status.section, append_task_block(body, line))
    write_text(path, updated, args.dry_run)
    write_text(entry_path, entry_text, args.dry_run)
    create_support_files(entry_path, task_type, args.dry_run)
    print(f"{'Would create' if args.dry_run else 'Created'} {task_id}: {entry_path}")


def list_tasks(args: argparse.Namespace) -> None:
    status = TaskStatus.parse(args.status) if args.status else None
    for task in read_all_tasks(args.vault):
        if status and task.status != status:
            continue
        print(f"{task.task_id}\\t{task.status.value_text}\\t{task.title}\\t{task.link or ''}")


def find_tasks(args: argparse.Namespace) -> None:
    query = args.query.lower()
    for task in read_all_tasks(args.vault):
        haystack = f"{task.task_id} {task.title} {task.block}".lower()
        if query in haystack:
            print(f"{task.task_id}\\t{task.status.value_text}\\t{task.title}\\t{task.link or ''}")


def update_task(args: argparse.Namespace) -> None:
    task = find_task(args.vault, args.task_id)
    entry, entry_content, _ = resolve_task_entry(args.vault, task)
    next_entry = entry_content
    for key, value in (("title", args.title), ("due", args.due), ("created", args.created), ("source", args.source)):
        if value:
            next_entry = replace_frontmatter_value(next_entry, key, yaml_string(value))
    path = board_path(args.vault) if task.storage == TaskStorage.BOARD else done_path(args.vault)
    text = read_text(path)
    block = task.block
    if args.title:
        block = re.sub(rf"(- \\[[ xX]\\]\\s*){re.escape(task.title)}", rf"\\1{args.title}", block, count=1)
    for key, value in (("due", args.due), ("created", args.created), ("id", None)):
        if value:
            if re.search(rf"\\b{key}:[^\\s]+", block):
                block = re.sub(rf"\\b{key}:[^\\s]+", f"{key}:{value}", block, count=1)
            else:
                block = block.split("\\n", 1)[0] + f" {key}:{value}" + ("\\n" + block.split("\\n", 1)[1] if "\\n" in block else "")
    if args.source:
        first, *rest = block.splitlines()
        if "wps:" in first:
            first = re.sub(r"wps:[^\\s]+", args.source, first, count=1)
        else:
            first += f" {args.source}"
        block = "\\n".join([first, *rest])
    updated = text.replace(task.block, block)
    write_task_files({path: updated, entry: next_entry}, args.dry_run)


def outside_fenced_code(content: str) -> str:
    lines: list[str] = []
    fence: str | None = None
    for line in content.splitlines(keepends=True):
        marker = re.match(r"^ {0,3}(\`{3,}|~{3,})(.*)$", line)
        if marker:
            if fence is None:
                fence = marker.group(1)
                continue
            if marker.group(1)[0] == fence[0] and len(marker.group(1)) >= len(fence) and not marker.group(2).strip():
                fence = None
                continue
        if fence is None:
            lines.append(line)
    return "".join(lines)


def check_tasks(args: argparse.Namespace) -> None:
    """\u53EA\u8BFB\u6838\u67E5\u5165\u53E3\u3001\u72B6\u6001\u548C\u5B8C\u6210\u65E5\u671F\uFF1B\u5386\u53F2\u7F3A\u5931\u65E5\u671F\u53EA\u62A5\u544A\uFF0C\u4E0D\u63A8\u65AD\u3002"""
    tasks = read_all_tasks(args.vault)
    seen: set[str] = set()
    errors: list[str] = []
    warnings: list[str] = []
    undated_done: list[str] = []
    for task in tasks:
        if task.task_id in seen:
            errors.append(f"{task.task_id}: duplicate task id")
        seen.add(task.task_id)
        try:
            path, content, fields = resolve_task_entry(args.vault, task)
        except SystemExit as error:
            errors.append(str(error))
            continue
        for key in ("id", "type", "status", "title", "created"):
            if not fields.get(key):
                errors.append(f"{task.task_id}: missing {key} in {path}")
        entry_status = TaskStatus.parse(fields["status"])
        if entry_status != task.status:
            errors.append(f"{task.task_id}: entry status {entry_status.value_text} differs from board/archive {task.status.value_text}")
        if fields["status"] != entry_status.value_text:
            warnings.append(f"{task.task_id}: noncanonical status {fields['status']!r}; use {entry_status.value_text}")
        if task.checked != (task.status == TaskStatus.DONE):
            errors.append(f"{task.task_id}: checkbox disagrees with task section")
        completed_at = fields.get("completed_at")
        if completed_at:
            try:
                completed = datetime.fromisoformat(completed_at.replace("Z", "+00:00"))
                if completed.tzinfo is None:
                    warnings.append(f"{task.task_id}: completed_at has no timezone offset")
            except ValueError:
                errors.append(f"{task.task_id}: invalid completed_at {completed_at!r}")
            if entry_status != TaskStatus.DONE:
                errors.append(f"{task.task_id}: active task retains completed_at")
        elif entry_status == TaskStatus.DONE:
            undated_done.append(task.task_id)
        body = outside_fenced_code(content.split("\\n---", 1)[1])
        if re.search(r"(?mi)^- \u72B6\u6001\uFF1A[ \\t]*(?:todo|doing|waiting|pending[ _-]release|done|backlog)[\u3002.]?[ \\t]*$", body):
            warnings.append(f"{task.task_id}: redundant manual status in entry body")
        if task.link_kind == TaskLinkKind.WIKI:
            warnings.append(f"{task.task_id}: legacy Wiki link; use relative Markdown")
    for message in errors:
        print(f"ERROR {message}")
    for message in warnings:
        print(f"WARN {message}")
    if undated_done:
        print(f"WARN {len(undated_done)} completed tasks have no recorded completion date; preserve unknown historical dates ({', '.join(undated_done[:5])}, ...)")
    print(f"Checked {len(tasks)} tasks: {len(errors)} errors, {len(warnings)} maintenance warnings, {len(undated_done)} undated completed tasks")
    if errors:
        raise SystemExit(1)


def delete_task(args: argparse.Namespace) -> None:
    task = find_task(args.vault, args.task_id)
    path = board_path(args.vault) if task.storage == TaskStorage.BOARD else done_path(args.vault)
    text = read_text(path)
    if task.storage == TaskStorage.BOARD:
        _, sections, _ = split_board_sections(text)
        updated_body = remove_task_block(sections[task.status.section], task.block)
        updated = replace_section(text, task.status.section, updated_body)
    else:
        updated = normalize_archive_spacing(text.replace(task.block, "", 1))
    write_text(path, updated, args.dry_run)
    print(f"{'Would remove' if args.dry_run else 'Removed'} {args.task_id} from {task.storage.value}")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--vault", type=Path, default=discover_vault(), help="AI knowledge vault root")
    parser.add_argument("--dry-run", action="store_true", help="Print diffs without writing")
    subparsers = parser.add_subparsers(dest="command", required=True)

    create = subparsers.add_parser("create", help="Create a task and board entry")
    create.add_argument("--type", required=True, choices=[item.value_text for item in TaskType])
    create.add_argument("--title", required=True)
    create.add_argument("--status", default=TaskStatus.TODO.value_text)
    create.add_argument("--project", action="append", default=[])
    create.add_argument("--due")
    create.add_argument("--source")
    create.add_argument("--note", action="append", default=[])
    create.add_argument("--id")
    create.set_defaults(func=create_task)

    move = subparsers.add_parser("move", help="Move task to another status")
    move.add_argument("task_id")
    move.add_argument("status")
    move.set_defaults(func=lambda args: move_task(args.vault, args.task_id, TaskStatus.parse(args.status), args.dry_run))

    complete = subparsers.add_parser("complete", help="Move task to Done")
    complete.add_argument("task_id")
    complete.set_defaults(func=lambda args: move_task(args.vault, args.task_id, TaskStatus.DONE, args.dry_run))

    update = subparsers.add_parser("update", help="Update board metadata")
    update.add_argument("task_id")
    update.add_argument("--title")
    update.add_argument("--due")
    update.add_argument("--source")
    update.add_argument("--created")
    update.set_defaults(func=update_task)

    delete = subparsers.add_parser("delete", help="Remove task from board")
    delete.add_argument("task_id")
    delete.set_defaults(func=delete_task)

    list_cmd = subparsers.add_parser("list", help="List tasks")
    list_cmd.add_argument("--status")
    list_cmd.set_defaults(func=list_tasks)

    find = subparsers.add_parser("find", help="Find tasks by keyword")
    find.add_argument("query")
    find.set_defaults(func=find_tasks)

    check = subparsers.add_parser("check", help="Read-only task entry, status, link, and completion-date checks")
    check.set_defaults(func=check_tasks)

    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()
    args.vault = args.vault.expanduser().resolve()
    args.func(args)
    return 0


if __name__ == "__main__":
    sys.exit(main())
`;var Za=`---
name: ai-knowledge-weekly-summary
description: Prepare a weekly work summary from an AI Knowledge Vault, using active tasks, completed-task archives, task entries, weekly notes, and local Git evidence.
---

# AI Knowledge Weekly Summary

Summarize verified work for a requested period without treating every Git change as report-worthy work.

## Sources

1. \`10-tasks/board.md\` for active and pending-release work.
2. \`10-tasks/done.md\` for completed work archived during the period.
3. Linked task entry files and \`execution.md\` for what actually changed.
4. Existing files under \`60-\u5176\u4ED6/\u5468\u62A5/\`; preserve user-authored judgments.
5. Git history and symlink-target history as supporting evidence.

Use the linked task entry's \`completed_at\` as the primary completion date, interpreted in the user's time zone. Historical tasks without this field need dated execution or Git evidence; do not substitute \`created\`, file modification time, or the day of the summary. Keep uncertain completion dates explicit and exclude them from exact completed-task counts unless verified.

Use \`scripts/collect_weekly_changes.py [vault-root] --since YYYY-MM-DD --until YYYY-MM-DD\` to collect Git evidence. The script discovers the nearest vault when the path is omitted.
Resolve the script path relative to this skill folder. Follow the user's requested reporting period; without explicit dates, the script uses the current calendar week from Monday through today.

## Output

Write or update \`60-\u5176\u4ED6/\u5468\u62A5/YYYY-WW.md\` with concise sections for delivered work, fixes, data or operational work, follow-ups, and risks. Distinguish completed work from work still in progress.

Do not commit or push unless the user requests it.
`;var Qa=`interface:
  display_name: "AI Knowledge Weekly Summary"
  short_description: "Summarize weekly work from vault evidence"
  default_prompt: "Use $ai-knowledge-weekly-summary to prepare this week's evidence-backed work summary."

`;var Ja=`#!/usr/bin/env python3
"""Collect weekly git changes from a knowledge repo and symlink target repos."""

from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
from datetime import date, timedelta
from pathlib import Path
from typing import Any


def run_git(cwd: Path, args: list[str]) -> tuple[int, str, str]:
    proc = subprocess.run(
        ["git", *args],
        cwd=str(cwd),
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    return proc.returncode, proc.stdout.strip(), proc.stderr.strip()


def git_root(path: Path) -> Path | None:
    cwd = path if path.is_dir() else path.parent
    code, out, _ = run_git(cwd, ["rev-parse", "--show-toplevel"])
    return Path(out).resolve() if code == 0 and out else None


def rel_to_repo(repo: Path, path: Path) -> str:
    resolved = path.resolve()
    try:
        return str(resolved.relative_to(repo))
    except ValueError:
        return "."


def git_log(repo: Path, since: str, until: str | None, pathspec: str | None = None) -> str:
    args = ["log", "--date=short", "--pretty=format:%h %ad %an %s", "--name-status", f"--since={since}"]
    if until:
        args.append(f"--until={until}")
    if pathspec:
        args.extend(["--", pathspec])
    code, out, err = run_git(repo, args)
    if code != 0:
        return f"ERROR: {err}"
    return out


def git_status(repo: Path, pathspec: str | None = None) -> str:
    args = ["status", "--short"]
    if pathspec:
        args.extend(["--", pathspec])
    code, out, err = run_git(repo, args)
    if code != 0:
        return f"ERROR: {err}"
    return out


def find_symlinks(root: Path, project_filter: str | None) -> list[Path]:
    result: list[Path] = []
    for base, dirs, files in os.walk(root):
        base_path = Path(base)
        dirs[:] = [d for d in dirs if d not in {".git", ".obsidian", ".trash"}]
        for name in [*dirs, *files]:
            path = base_path / name
            if not path.is_symlink():
                continue
            rel = str(path.relative_to(root))
            target = os.readlink(path)
            if project_filter and project_filter not in rel and project_filter not in target:
                continue
            result.append(path)
    return sorted(result)


def collect(root: Path, since: str, until: str | None, project_filter: str | None) -> dict[str, Any]:
    root = root.resolve()
    data: dict[str, Any] = {
        "knowledge_root": str(root),
        "since": since,
        "until": until,
        "knowledge_repo": None,
        "symlink_repos": [],
        "weekly_files": [],
    }

    repo = git_root(root)
    if repo:
        data["knowledge_repo"] = {
            "repo": str(repo),
            "path": rel_to_repo(repo, root),
            "log": git_log(repo, since, until, rel_to_repo(repo, root)),
            "status": git_status(repo, rel_to_repo(repo, root)),
        }

    weekly_dir = root / "60-\u5176\u4ED6" / "\u5468\u62A5"
    if weekly_dir.exists():
        for path in sorted(weekly_dir.glob("*.md")):
            if not project_filter or project_filter in path.name or project_filter in path.read_text(encoding="utf-8", errors="ignore"):
                data["weekly_files"].append(str(path))

    seen: set[tuple[str, str]] = set()
    for link in find_symlinks(root, project_filter):
        target = link.resolve()
        target_repo = git_root(target)
        if not target_repo:
            data["symlink_repos"].append({
                "link": str(link),
                "target": str(target),
                "error": "target is not inside a git repository",
            })
            continue
        pathspec = rel_to_repo(target_repo, target)
        key = (str(target_repo), pathspec)
        if key in seen:
            continue
        seen.add(key)
        data["symlink_repos"].append({
            "link": str(link),
            "target": str(target),
            "repo": str(target_repo),
            "path": pathspec,
            "log": git_log(target_repo, since, until, pathspec),
            "status": git_status(target_repo, pathspec),
        })
    return data


def print_markdown(data: dict[str, Any]) -> None:
    print(f"# Weekly Change Evidence\\n")
    print(f"- knowledge_root: \`{data['knowledge_root']}\`")
    print(f"- since: \`{data['since']}\`")
    if data.get("until"):
        print(f"- until: \`{data['until']}\`")

    print("\\n## Knowledge Repo")
    repo = data.get("knowledge_repo")
    if not repo:
        print("- Not a git repository")
    else:
        print(f"- repo: \`{repo['repo']}\`")
        print(f"- path: \`{repo['path']}\`")
        print("\\n### Committed Changes\\n")
        print("\`\`\`text")
        print(repo.get("log") or "(none)")
        print("\`\`\`")
        print("\\n### Uncommitted Changes\\n")
        print("\`\`\`text")
        print(repo.get("status") or "(none)")
        print("\`\`\`")

    print("\\n## Symlink Target Repos")
    if not data["symlink_repos"]:
        print("- No symlink target repositories found")
    for item in data["symlink_repos"]:
        print(f"\\n### {item['link']}")
        print(f"- target: \`{item['target']}\`")
        if item.get("error"):
            print(f"- error: {item['error']}")
            continue
        print(f"- repo: \`{item['repo']}\`")
        print(f"- path: \`{item['path']}\`")
        print("\\nCommitted changes:")
        print("\`\`\`text")
        print(item.get("log") or "(none)")
        print("\`\`\`")
        print("\\nUncommitted changes:")
        print("\`\`\`text")
        print(item.get("status") or "(none)")
        print("\`\`\`")

    print("\\n## Weekly Files")
    if data["weekly_files"]:
        for path in data["weekly_files"]:
            print(f"- \`{path}\`")
    else:
        print("- (none)")


def default_week_range() -> tuple[str, str]:
    """Return Monday through today; explicit CLI dates override this default."""
    today = date.today()
    monday = today - timedelta(days=today.weekday())
    return monday.isoformat(), today.isoformat()


def discover_vault() -> Path:
    starts = [Path.cwd(), Path(__file__).resolve().parent]
    seen: set[Path] = set()
    for start in starts:
        for candidate in [start, *start.parents]:
            resolved = candidate.resolve()
            if resolved in seen:
                continue
            seen.add(resolved)
            if (resolved / "10-tasks" / "board.md").exists():
                return resolved
    return Path.cwd().resolve()


def main() -> int:
    parser = argparse.ArgumentParser(description="Collect weekly changes from an AI Knowledge Vault and symlink targets.")
    parser.add_argument("knowledge_root", nargs="?", type=Path, default=discover_vault())
    default_since, default_until = default_week_range()
    parser.add_argument("--since", default=default_since,
                        help=f"Start date (default: Monday {default_since})")
    parser.add_argument("--until", default=default_until,
                        help=f"End date (default: today {default_until})")
    parser.add_argument("--project", help="Only include symlinks or weekly files matching this project name")
    parser.add_argument("--json", action="store_true", help="Output JSON instead of Markdown")
    args = parser.parse_args()

    root = args.knowledge_root.expanduser()
    if not root.exists() or not root.is_dir():
        print(f"knowledge root does not exist: {root}", file=sys.stderr)
        return 1

    data = collect(root, args.since, args.until, args.project)
    if args.json:
        print(json.dumps(data, ensure_ascii=False, indent=2))
    else:
        print_markdown(data)
    return 0


if __name__ == "__main__":
    sys.exit(main())
`;var L=".agents/skills";var _n={[L+"/ai-knowledge-project-onboarding/SKILL.md"]:Fa,[L+"/ai-knowledge-project-onboarding/agents/openai.yaml"]:Oa,[L+"/ai-knowledge-project-onboarding/scripts/validate_knowledge.py"]:Na,[L+"/ai-knowledge-project-onboarding/templates/AGENTS.md"]:Wa,[L+"/ai-knowledge-project-onboarding/templates/architecture.md"]:Ba,[L+"/ai-knowledge-project-onboarding/templates/database.md"]:Ma,[L+"/ai-knowledge-project-onboarding/templates/env.md"]:Va,[L+"/ai-knowledge-project-onboarding/templates/index.md"]:Ka,[L+"/ai-knowledge-project-onboarding/templates/links.md"]:Ga,[L+"/ai-knowledge-project-onboarding/templates/modules.md"]:qa,[L+"/ai-knowledge-project-onboarding/templates/runbook.md"]:za,[L+"/ai-knowledge-task-management/SKILL.md"]:Ua,[L+"/ai-knowledge-task-management/agents/openai.yaml"]:Ya,[L+"/ai-knowledge-task-management/scripts/task_manager.py"]:Ha,[L+"/ai-knowledge-weekly-summary/SKILL.md"]:Za,[L+"/ai-knowledge-weekly-summary/agents/openai.yaml"]:Qa,[L+"/ai-knowledge-weekly-summary/scripts/collect_weekly_changes.py"]:Ja};var Qd=["rules","10-tasks/items","20-workflows","30-projects","60-\u5176\u4ED6/\u5468\u62A5","80-inbox","90-templates/project-task-template","90-templates/workflow-feature-template/inputs","90-templates/workflow-incident-template/inputs","90-templates/workflow-datafix-template/inputs","90-templates/workflow-data-export-template/inputs","90-templates/workflow-data-export-template/exports"],Jd=`# AI Knowledge Vault

## \u5B9A\u4F4D

- \u672C\u76EE\u5F55\u662F\u5DE5\u7A0B\u77E5\u8BC6\u4E0E\u4EFB\u52A1\u4E0A\u4E0B\u6587\u5165\u53E3\uFF0C\u4E0D\u662F\u6E90\u7801\u5DE5\u4F5C\u533A\u3002
- \u4EFB\u52A1\u677F\u53EA\u505A\u8F7B\u91CF\u8C03\u5EA6\uFF1B\u4EFB\u52A1\u7EC6\u8282\u5199\u5165\u5BF9\u5E94\u4EFB\u52A1\u5165\u53E3\u3002

## \u9ED8\u8BA4\u8DEF\u7531

1. \u5F85\u529E\u4ECE [\u4EFB\u52A1\u677F](10-tasks/board.md) \u8FDB\u5165\u3002
2. \u65E0\u9700\u5173\u8054\u9879\u76EE\u7684\u901A\u7528\u4EFB\u52A1\u8FDB\u5165 \`10-tasks/items/\`\uFF0C\u65B0\u77E5\u8BC6\u5E93\u65E0\u9700\u5148\u521B\u5EFA\u9879\u76EE\u3002
3. \u9879\u76EE\u4EFB\u52A1\u8FDB\u5165 \`30-projects/<project>/inputs/YYYY/MM/<task>/AGENTS.md\`\u3002
4. \u590D\u6742\u4EFB\u52A1\u8FDB\u5165 \`20-workflows/<workflow>/AGENTS.md\`\u3002
5. \u539F\u59CB\u8F93\u5165\u653E\u5165 \`80-inbox/\`\uFF0C\u6574\u7406\u540E\u518D\u5F52\u6863\u5230\u4EFB\u52A1\u6216\u9879\u76EE\u3002

## \u901A\u7528\u89C4\u5219

- [\u4EFB\u52A1\u8DEF\u7531](rules/task-routing.md)
- [\u73AF\u5883\u5B89\u5168](rules/env-safety.md)
- [\u5199\u56DE\u5F52\u6863](rules/writeback.md)
- [\u5DE5\u4F5C\u6D41\u89C4\u5219](rules/workflow-policy.md)
- [\u8F93\u5165\u5F52\u5C5E](rules/input-policy.md)
- [\u9879\u76EE\u77E5\u8BC6](rules/project-knowledge.md)
`,Xd=`---
id: "{{TASK_ID}}"
type: workflow
status: todo
project: "<project>"
title: "{{WORKFLOW_TITLE}}"
created: "{{YYYY-MM-DD}}"
entry_type: workflow
task_type: "{{WORKFLOW_TYPE}}"
---

# {{WORKFLOW_TITLE}}

## \u5F53\u524D\u4EFB\u52A1

- \u76EE\u6807\uFF1A\u5F85\u586B\u5199
- \u6267\u884C\u8BB0\u5F55\uFF1A[execution](execution.md)
- \u9700\u6C42\u80CC\u666F\uFF1A[overview](overview.md)
- \u5F85\u529E\uFF1A[todo](todo.md)\uFF1B\u98CE\u9669\uFF1A[risk](risk.md)\uFF1B\u53D1\u5E03\u51C6\u5907\uFF1A[release-prep](release-prep.md)
{{WORKFLOW_FILES}}

## \u8DEF\u7531

- \u5173\u8054\u9879\u76EE\uFF1A[AGENTS](../../30-projects/%3Cproject%3E/AGENTS.md)\u3001[links](../../30-projects/%3Cproject%3E/links.md)
- \u9879\u76EE\uFF1A[index](../../30-projects/%3Cproject%3E/index.md)
  - \u76EE\u6807\u5F00\u53D1\u5206\u652F\uFF1A\u5F85\u586B\u5199
- \u9879\u76EE\u5165\u53E3\uFF1A[AGENTS](../../30-projects/%3Cproject%3E/AGENTS.md)
- \u89C4\u5219\uFF1A[task-routing](../../rules/task-routing.md)\u3001[workflow-policy](../../rules/workflow-policy.md)\u3001[writeback](../../rules/writeback.md)\u3001[env-safety](../../rules/env-safety.md)

## \u4EFB\u52A1\u8BF4\u660E

\u8BF4\u660E\u8FD9\u6B21\u9700\u6C42\u8981\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF0C\u4EE5\u53CA\u5B8C\u6210\u8FB9\u754C\u3002

## \u95E8\u69DB

- \u5F00\u53D1\u524D\u8BFB\u53D6\u9879\u76EE\u5165\u53E3\u5E76\u786E\u8BA4\u6E90\u7801\u4ED3\u5E93\u548C\u76EE\u6807\u5206\u652F\u3002
- \u6D89\u53CA\u5916\u90E8\u5199\u64CD\u4F5C\u65F6\u5148\u8BF4\u660E\u5F71\u54CD\u5E76\u7B49\u5F85\u786E\u8BA4\u3002
`,Ot=`# Execution

## \u6267\u884C\u8BB0\u5F55

- \u5F85\u8865\u5145
`,br=`# Overview

## \u80CC\u666F

- \u5F85\u8865\u5145

## \u76EE\u6807

- \u5F85\u8865\u5145

## \u975E\u76EE\u6807

- \u5F85\u8865\u5145
`,Nt=`# Release Preparation

## \u53D1\u5E03\u524D\u68C0\u67E5

- [ ] \u76EE\u6807\u5206\u652F\u5DF2\u786E\u8BA4
- [ ] \u5F71\u54CD\u8303\u56F4\u5DF2\u786E\u8BA4
- [ ] \u56DE\u6EDA\u65B9\u6848\u5DF2\u786E\u8BA4
`;function Sr(n){let t={feature:"",incident:"- \u6392\u67E5\uFF1A[investigation](investigation.md)\uFF1B\u65F6\u95F4\u7EBF\uFF1A[timeline](timeline.md)",datafix:"- \u6570\u636E\u4FEE\u590D\uFF1A[execute.sql](execute.sql)\uFF1B\u9A8C\u8BC1\uFF1A[verify.sql](verify.sql)\uFF1B\u56DE\u6EDA\uFF1A[rollback.sql](rollback.sql)\uFF1B\u7ED3\u679C\uFF1A[result](result.md)","data-export":"- \u6570\u636E\u5BFC\u51FA\uFF1A[query.sql](query.sql)\uFF1B\u6838\u5BF9\uFF1A[verify](verify.md)\uFF1B\u7ED3\u679C\uFF1A[result](result.md)\uFF1B\u4EA7\u7269\uFF1A[exports](exports/)"};return Xd.replace("{{WORKFLOW_TYPE}}",n).replace("{{WORKFLOW_FILES}}",t[n])}var ep={"AGENTS.md":Jd,"rules/task-routing.md":"# \u4EFB\u52A1\u8DEF\u7531\n\n- \u4EFB\u52A1\u677F\u53EA\u4FDD\u7559\u8C03\u5EA6\u4FE1\u606F\uFF0C\u72B6\u6001\u7684\u552F\u4E00\u6765\u6E90\u662F\u4EFB\u52A1\u5165\u53E3 frontmatter \u7684 `status`\u3002\n- \u770B\u677F\u548C\u5F52\u6863\u7531\u63D2\u4EF6\u6216\u914D\u5957\u4EFB\u52A1\u811A\u672C\u540C\u6B65\uFF0C\u6B63\u6587\u4E0D\u91CD\u590D\u7EF4\u62A4\u72B6\u6001\u3002\n- \u72B6\u6001\u4F7F\u7528 `doing`\u3001`todo`\u3001`pending_release`\u3001`waiting`\u3001`backlog`\u3001`done`\u3002\n- \u901A\u7528\u4EFB\u52A1\u8FDB\u5165 `10-tasks/items/`\u3002\n- \u5355\u9879\u76EE\u4EFB\u52A1\u8FDB\u5165\u9879\u76EE `inputs/YYYY/MM/`\u3002\n- \u8DE8\u9879\u76EE\u3001\u957F\u5468\u671F\u6216\u9AD8\u98CE\u9669\u4EFB\u52A1\u8FDB\u5165 `20-workflows/`\u3002\n","rules/env-safety.md":`# \u73AF\u5883\u5B89\u5168

- \u73AF\u5883\u4E0D\u660E\u786E\u65F6\u5148\u786E\u8BA4\uFF0C\u4E0D\u9ED8\u8BA4\u4F7F\u7528\u751F\u4EA7\u73AF\u5883\u3002
- \u51ED\u636E\u4E0D\u5199\u5165\u5171\u4EAB\u6A21\u677F\uFF1B\u5982\u9700\u672C\u5730\u4FDD\u5B58\uFF0C\u7531\u4ED3\u5E93\u6240\u6709\u8005\u660E\u786E\u51B3\u5B9A\u3002
- \u5916\u90E8\u5199\u64CD\u4F5C\u3001\u6570\u636E\u4FEE\u6539\u548C\u53D1\u5E03\u52A8\u4F5C\u6267\u884C\u524D\u8BF4\u660E\u5F71\u54CD\u8303\u56F4\u3002
`,"rules/writeback.md":"# \u5199\u56DE\u4E0E\u5F52\u6863\n\n- \u6D3B\u52A8\u4EFB\u52A1\u5199\u5165 `10-tasks/board.md`\u3002\n- \u5B8C\u6210\u4EFB\u52A1\u5F52\u6863\u5230 `10-tasks/done.md`\uFF0C\u540C\u6B65\u5165\u53E3\u72B6\u6001\u4E3A `done`\u3002\n- \u65B0\u5B8C\u6210\u4EFB\u52A1\u5199\u5165\u5E26\u65F6\u533A\u7684 ISO 8601 `completed_at`\uFF1B\u91CD\u5F00\u65F6\u5220\u9664\uFF0C\u518D\u6B21\u5B8C\u6210\u65F6\u8BB0\u5F55\u65B0\u7684\u5B8C\u6210\u65F6\u95F4\u3002\u5386\u53F2\u7F3A\u5931\u65E5\u671F\u4FDD\u6301\u672A\u77E5\uFF0C\u4E0D\u63A8\u6D4B\u8865\u5199\u3002\n- \u6267\u884C\u8FC7\u7A0B\u5199\u5165\u4EFB\u52A1\u5165\u53E3\u6216 `execution.md`\uFF0C\u4E0D\u5199\u5165\u4EFB\u52A1\u677F\u3002\n","rules/workflow-policy.md":`# Workflow \u89C4\u5219

- \u590D\u6742\u3001\u8DE8\u9879\u76EE\u3001\u9700\u6301\u7EED\u8BB0\u5F55\u6216\u6709\u98CE\u9669\u63A7\u5236\u7684\u5DE5\u4F5C\u4F7F\u7528 workflow\u3002
- workflow \u81F3\u5C11\u5305\u542B AGENTS.md\u3001overview.md\u3001execution.md\u3001todo.md\u3001risk.md\u3001release-prep.md \u548C inputs/\u3002
- feature \u8BB0\u5F55\u9700\u6C42\u3001\u5F85\u529E\u548C\u98CE\u9669\uFF1Bincident \u8865\u5145 investigation.md \u4E0E timeline.md\u3002
- datafix \u4F7F\u7528 execute.sql\u3001verify.sql \u548C rollback.sql\uFF0C\u6267\u884C\u524D\u786E\u8BA4\u73AF\u5883\u3001\u5F71\u54CD\u8303\u56F4\u3001\u9A8C\u8BC1\u548C\u56DE\u6EDA\u65B9\u6848\u3002
- data-export \u4F7F\u7528\u53EA\u8BFB query.sql\u3001verify.md\u3001result.md \u548C exports/\uFF0C\u660E\u786E\u6570\u636E\u8303\u56F4\u5E76\u68C0\u67E5\u654F\u611F\u5B57\u6BB5\u3002
`,"rules/input-policy.md":`# \u8F93\u5165\u5F52\u5C5E

- \u672A\u6574\u7406\u6750\u6599\u5148\u653E\u5165 \`80-inbox/\`\u3002
- \u660E\u786E\u9879\u76EE\u5F52\u5C5E\u540E\u518D\u79FB\u52A8\u5230\u9879\u76EE\u4EFB\u52A1\u6216 workflow \u7684 inputs/\u3002
- \u4E0D\u786E\u5B9A\u5F52\u5C5E\u65F6\u4FDD\u7559\u539F\u4F4D\u7F6E\u5E76\u8BE2\u95EE\u7528\u6237\u3002
`,"rules/project-knowledge.md":`# \u9879\u76EE\u77E5\u8BC6

- \u9879\u76EE\u7A33\u5B9A\u77E5\u8BC6\u653E\u5728 \`30-projects/<project>/\`\u3002
- links.md \u4FDD\u6301\u8F7B\u91CF\uFF1B\u73AF\u5883\u4E8B\u5B9E\u5199\u5165 env.md\uFF1B\u64CD\u4F5C\u6B65\u9AA4\u5199\u5165 runbook.md\u3002
- \u6E90\u7801\u4FDD\u6301\u5728\u72EC\u7ACB\u6E90\u7801\u4ED3\u5E93\uFF0C\u53EA\u8BB0\u5F55\u8DEF\u5F84\u548C\u5165\u53E3\u3002
`,"10-tasks/board.md":`# Tasks

## Doing

## Todo

## Pending Release

## Waiting

## Backlog
`,"10-tasks/done.md":`# Tasks Done

\u5F52\u6863\u5DF2\u5B8C\u6210\u4E8B\u9879\uFF0C\u4FDD\u7559\u5FC5\u8981\u94FE\u63A5\u3002
`,"30-projects/index.md":`# Projects

\u9879\u76EE\u77E5\u8BC6\u5165\u53E3\u7D22\u5F15\u3002\u6BCF\u4E2A\u9879\u76EE\u4F7F\u7528\u72EC\u7ACB\u76EE\u5F55\u3002

\u5F53\u524D\u6CA1\u6709\u9879\u76EE\uFF0C\u53EF\u76F4\u63A5\u521B\u5EFA\u901A\u7528\u4EFB\u52A1\u3002\u9700\u8981\u9879\u76EE\u4EFB\u52A1\u6216\u5DE5\u4F5C\u6D41\u65F6\uFF0C\u5148\u5728\u6B64\u76EE\u5F55\u5EFA\u7ACB\u771F\u5B9E\u9879\u76EE\u7684 AGENTS.md\u3001index.md \u548C links.md\uFF0C\u6216\u8BA9\u652F\u6301\u672C\u5730\u6280\u80FD\u7684 AI \u52A9\u624B\u8BFB\u53D6[\u914D\u5957\u9879\u76EE\u77E5\u8BC6\u6280\u80FD](../.agents/skills/ai-knowledge-project-onboarding/SKILL.md)\u540E\u751F\u6210\u3002\u521D\u59CB\u5316\u4F1A\u8865\u9F50\u914D\u5957\u6280\u80FD\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u6267\u884C\u811A\u672C\u6216\u81EA\u52A8\u914D\u7F6E AI \u52A9\u624B\uFF1B\u5DF2\u6709\u6280\u80FD\u6587\u4EF6\u4FDD\u6301\u539F\u6837\u3002
`,"80-inbox/AGENTS.md":`# Inbox

- \u672C\u76EE\u5F55\u4FDD\u5B58\u5C1A\u672A\u5206\u7C7B\u7684\u539F\u59CB\u8F93\u5165\u3002
- \u6574\u7406\u524D\u4FDD\u7559\u539F\u5185\u5BB9\uFF1B\u786E\u8BA4\u5F52\u5C5E\u540E\u518D\u79FB\u52A8\u3002
- \u4E0D\u5728\u8FD9\u91CC\u957F\u671F\u7EF4\u62A4\u4EFB\u52A1\u72B6\u6001\u6216\u6267\u884C\u8BB0\u5F55\u3002
`,"90-templates/index.md":`# Templates

\u4F9B AI Knowledge Workflow \u521B\u5EFA\u9879\u76EE\u4EFB\u52A1\u548C workflow \u4F7F\u7528\u3002
`,"90-templates/project-task-template/execution.md":Ot,"90-templates/project-task-template/release-prep.md":Nt,"90-templates/workflow-feature-template/AGENTS.md":Sr("feature"),"90-templates/workflow-feature-template/overview.md":br,"90-templates/workflow-feature-template/execution.md":Ot,"90-templates/workflow-feature-template/todo.md":`# Todo

- [ ] \u5F85\u8865\u5145
`,"90-templates/workflow-feature-template/risk.md":`# Risks

- \u5F85\u8865\u5145
`,"90-templates/workflow-feature-template/release-prep.md":Nt,"90-templates/workflow-feature-template/inputs/.gitkeep":"","90-templates/workflow-incident-template/AGENTS.md":Sr("incident"),"90-templates/workflow-incident-template/overview.md":br,"90-templates/workflow-incident-template/execution.md":Ot,"90-templates/workflow-incident-template/investigation.md":`# Investigation

## \u73B0\u8C61

- \u5F85\u8865\u5145

## \u5047\u8BBE\u4E0E\u8BC1\u636E

- \u5F85\u8865\u5145
`,"90-templates/workflow-incident-template/timeline.md":`# Timeline

- \u5F85\u8865\u5145
`,"90-templates/workflow-incident-template/todo.md":`# Todo

- [ ] \u5F85\u8865\u5145
`,"90-templates/workflow-incident-template/risk.md":`# Risks

- \u5F85\u8865\u5145
`,"90-templates/workflow-incident-template/release-prep.md":Nt,"90-templates/workflow-incident-template/inputs/.gitkeep":"","90-templates/workflow-datafix-template/AGENTS.md":Sr("datafix"),"90-templates/workflow-datafix-template/overview.md":br,"90-templates/workflow-datafix-template/execution.md":Ot,"90-templates/workflow-datafix-template/result.md":`# Result

- \u5F85\u8865\u5145
`,"90-templates/workflow-datafix-template/release-prep.md":Nt,"90-templates/workflow-datafix-template/execute.sql":`-- Write the reviewed data-fix SQL here.
`,"90-templates/workflow-datafix-template/verify.sql":`-- Write read-only verification SQL here.
`,"90-templates/workflow-datafix-template/rollback.sql":`-- Write rollback SQL here.
`,"90-templates/workflow-datafix-template/todo.md":`# Todo

- [ ] \u5F85\u8865\u5145
`,"90-templates/workflow-datafix-template/risk.md":`# Risks

- \u5F85\u8865\u5145
`,"90-templates/workflow-datafix-template/inputs/.gitkeep":"","90-templates/workflow-data-export-template/AGENTS.md":Sr("data-export"),"90-templates/workflow-data-export-template/overview.md":br,"90-templates/workflow-data-export-template/execution.md":Ot,"90-templates/workflow-data-export-template/result.md":`# Result

- \u5BFC\u51FA\u6587\u4EF6\uFF1A\u5F85\u8865\u5145
- \u6570\u636E\u8303\u56F4\uFF1A\u5F85\u8865\u5145
`,"90-templates/workflow-data-export-template/verify.md":`# Verification

- [ ] \u884C\u6570\u5DF2\u6838\u5BF9
- [ ] \u654F\u611F\u5B57\u6BB5\u5DF2\u68C0\u67E5
`,"90-templates/workflow-data-export-template/query.sql":`-- Write read-only export SQL here.
`,"90-templates/workflow-data-export-template/todo.md":`# Todo

- [ ] \u5F85\u8865\u5145
`,"90-templates/workflow-data-export-template/risk.md":`# Risks

- \u5F85\u8865\u5145
`,"90-templates/workflow-data-export-template/release-prep.md":Nt,"90-templates/workflow-data-export-template/inputs/.gitkeep":"","90-templates/workflow-data-export-template/exports/.gitkeep":""},Ar=class{constructor(t){this.app=t}async preview(){let t=Xa(),e=[],r=[];for(let s of tp(t))await this.existsAs(s,"folder")||e.push(s);for(let s of Object.keys(t))await this.existsAs(s,"file")||r.push(s);return{missingFolders:e,missingFiles:r}}async initialize(){let t=await this.preview(),e=Xa(),r=[],s=[];for(let a of[...t.missingFolders].sort(ti))await this.ensureFolder(a,r);for(let a of t.missingFiles)await this.ensureFolder(Pn(a),r),!await this.existsAs(a,"file")&&(await this.app.vault.adapter.write(a,e[a]),s.push(a));return{createdFolders:r,createdFiles:s}}async ensureFolder(t,e){if(!t)return;let r="";for(let s of t.split("/").filter(Boolean))r=r?`${r}/${s}`:s,!await this.existsAs(r,"folder")&&(await this.app.vault.adapter.mkdir(r),e.push(r))}async existsAs(t,e){let r=await this.app.vault.adapter.stat(t);if(!r)return!1;if(r.type!==e.toString())throw new Error(`Cannot initialize ${t}: expected a ${e}, but a ${r.type} already exists.`);return!0}};function Xa(){ei(L);for(let n of Object.keys(_n))if(ei(n),!n.startsWith(`${L}/`))throw new Error(`Companion skill resource must be inside ${L}: ${n}`);return{...ep,..._n}}function tp(n){let t=new Set([...Qd,L]);for(let e of[...t,...Object.keys(n)]){let r=Pn(e);for(;r;)t.add(r),r=Pn(r)}return[...t].sort(ti)}function ei(n){if(n.includes("\\")||n.includes(":")||n.includes("\0")||n.split("/").some(t=>!t||t==="."||t===".."))throw new Error(`Initialization resource must use a relative vault path: ${n}`)}function ti(n,t){return n.split("/").length-t.split("/").length||n.localeCompare(t)}function Pn(n){let t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}var rp=["doing","todo","pending_release"],jr=class{constructor(t){this.app=t}async listCompletableTasks(){return(await new N(this.app).listTasks()).filter(e=>!e.checked&&rp.includes(e.status)).map(np)}createPreview(t){return{task:t,fromSection:t.section,toSection:"Done",originalLine:t.rawLine,completedLine:t.completedLine}}async completeTask(t){await new N(this.app).moveTask({task:t.boardTask,toStatus:"done"})}};function np(n){return{line:n.line,section:ft(n.status),text:n.text,rawLine:n.rawLine,completedLine:`- [x] ${n.hasExplicitPriority?`[${n.priority}] ${n.text}`:n.rawBody}`,boardTask:n}}var Tt=require("obsidian");function ri(n,t){return new Promise(e=>{new En(n,t,e).open()})}function ni(n,t){return new Promise(e=>{new bn(n,t,e).open()})}var En=class extends Tt.FuzzySuggestModal{constructor(e,r,s){super(e);this.tasks=r;this.resolveTask=s;this.setPlaceholder("Select a doing/todo/pending release task to complete")}getItems(){return this.tasks}getItemText(e){return`${e.section} \xB7 line ${e.line} \xB7 ${e.text}`}onChooseItem(e){this.resolveTask(e)}onClose(){this.resolveTask(null)}},bn=class extends Tt.Modal{constructor(e,r,s){super(e);this.preview=r;this.resolveDecision=s;this.settled=!1}onOpen(){this.contentEl.empty(),this.contentEl.createEl("h2",{text:"Complete task"}),this.contentEl.createEl("p",{text:`Archive from ${this.preview.fromSection} to 10-tasks/done.md.`}),this.renderLine("Current",this.preview.originalLine),this.renderLine("After",this.preview.completedLine),new Tt.Setting(this.contentEl).addButton(e=>e.setButtonText("Cancel").onClick(()=>this.finish("cancel"))).addButton(e=>e.setButtonText("Confirm complete").setCta().onClick(()=>this.finish("confirm")))}onClose(){this.settled||(this.settled=!0,this.resolveDecision("cancel")),this.contentEl.empty()}renderLine(e,r){this.contentEl.createEl("h3",{text:e}),this.contentEl.createEl("pre",{text:r,cls:"ai-knowledge-complete-task-line"})}finish(e){this.settled||(this.settled=!0,this.resolveDecision(e),this.close())}};var xt=require("obsidian");var Bt="ai-knowledge-validate-results",Wt=class extends xt.ItemView{constructor(e){super(e);this.issues=[]}getViewType(){return Bt}getDisplayText(){return`${rr}: Validate`}async onOpen(){this.render()}setIssues(e){this.issues=e,this.render()}render(){let e=this.contentEl;if(e.empty(),e.addClass("ai-knowledge-validate-view"),e.createEl("h2",{text:"Validate results"}),this.issues.length===0){e.createEl("p",{text:"No validation issues found.",cls:"ai-knowledge-muted"});return}let r=this.buildSummaryText();e.createEl("p",{text:r,cls:"ai-knowledge-muted"});let s=e.createDiv({cls:"ai-knowledge-issue-list"});for(let a of this.issues){let i=s.createDiv({cls:`ai-knowledge-issue ai-knowledge-severity-${a.severity}`});if(i.createDiv({text:`${a.severity.toUpperCase()} \xB7 ${a.code}`,cls:"ai-knowledge-issue-meta"}),i.createDiv({text:a.message,cls:"ai-knowledge-issue-message"}),a.path){let o=a.path;i.createEl("button",{text:o,cls:"ai-knowledge-link-button"}).addEventListener("click",()=>{this.openIssuePath(o)})}}}buildSummaryText(){let e=new Map;for(let r of this.issues)e.set(r.severity,(e.get(r.severity)??0)+1);return`${this.issues.length} issue(s): ${e.get("blocker")??0} blocker, ${e.get("error")??0} error, ${e.get("warning")??0} warning, ${e.get("info")??0} info.`}async openIssuePath(e){let r=this.app.vault.getAbstractFileByPath(e);if(r instanceof xt.TFile){await this.app.workspace.getLeaf(!1).openFile(r);return}new xt.Notice(`No file found for ${e}.`)}};var y=require("obsidian");var Cr=require("obsidian");function Ie(n,t,e,r="\u786E\u8BA4"){return new Promise(s=>{new Sn(n,t,e,r,s).open()})}var Sn=class extends Cr.Modal{constructor(e,r,s,a,i){super(e);this.title=r;this.message=s;this.confirmLabel=a;this.resolveDecision=i;this.settled=!1}onOpen(){this.contentEl.empty(),this.contentEl.createEl("h2",{text:this.title}),this.contentEl.createEl("p",{text:this.message,cls:"ai-knowledge-confirm-message"}),new Cr.Setting(this.contentEl).addButton(e=>e.setButtonText("\u53D6\u6D88").onClick(()=>this.finish("cancel"))).addButton(e=>e.setButtonText(this.confirmLabel).setWarning().onClick(()=>this.finish("confirm")))}onClose(){this.settled||(this.settled=!0,this.resolveDecision("cancel")),this.contentEl.empty()}finish(e){this.settled||(this.settled=!0,this.resolveDecision(e),this.close())}};var H=require("obsidian");var ii=require("child_process");var sp=require("child_process");function An(n,t){let e=n.trim();if(!e)throw new Error("CLI command is empty. Configure it in AI Knowledge Workflow settings.");return t==="codex"?`${e} exec --skip-git-repo-check --color never -`:e}function jn(n){return process.platform==="win32"?{executable:process.env.ComSpec||"cmd.exe",args:["/d","/s","/c",n]}:{executable:process.env.SHELL||"/bin/zsh",args:["-i","-c",n]}}var ke=class extends Error{constructor(e,r,s){super(r);this.code=e;this.details=s;this.name="SkillCliExecutionError"}};var si=12e4,ai=4e3;function oi(n,t,e,r,s){let a=n.trim();if(!a)throw new ke("cli_path_missing",`${e} command is empty. Configure it in AI Knowledge Workflow settings.`);return new Promise((i,o)=>{let l=jn(An(a,r)),c=(0,ii.spawn)(l.executable,l.args,{cwd:s,shell:!1,stdio:["pipe","pipe","pipe"],env:{...process.env,TERM:"dumb",PROMPT:"",PS1:""}}),d="",p="",m=!1,k=window.setTimeout(()=>{m||(m=!0,c.kill(),o(new ke("cli_timed_out",`${e} timed out after ${si/1e3} seconds.`)))},si);c.stdout.on("data",x=>{d+=x.toString("utf8")}),c.stderr.on("data",x=>{p+=x.toString("utf8")}),c.on("error",x=>{m||(m=!0,window.clearTimeout(k),o(new ke("cli_path_missing",`${e} could not be started: ${x.message}`,Cn(p))))}),c.on("close",x=>{if(!m){if(m=!0,window.clearTimeout(k),x!==0){o(new ke("cli_exit_failed",`${e} exited with code ${x??"unknown"}.`,Cn([p,d].filter(Boolean).join(`
`))));return}i({stdout:d,stderr:p,exitCode:x})}}),c.stdin.on("error",x=>{m||(m=!0,window.clearTimeout(k),c.kill(),o(new ke("cli_exit_failed",`${e} could not receive the prompt: ${x.message}`,Cn(p))))}),c.stdin.end(t)})}function Cn(n){let t=n.trim();return t.length>ai?`${t.slice(0,ai)}...`:t}function $e(n){switch(n.provider){case"codex":return n.codexCliPath.trim()?{provider:"codex",label:$t.codex,command:n.codexCliPath}:null;case"custom-cli":return n.customCliPath.trim()?{provider:"custom-cli",label:$t["custom-cli"],command:n.customCliPath}:null;default:return null}}function li(n){let t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${r}`}function ap(n){let t=new Date(n);return t.setDate(n.getDate()-(n.getDay()+6)%7),li(t)}function ip(n){return li(n)}function op(n){let t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()));t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));let e=t.getUTCFullYear(),r=new Date(Date.UTC(e,0,1)),s=Math.ceil(((t.getTime()-r.getTime())/864e5+1)/7);return`60-\u5176\u4ED6/\u5468\u62A5/${e}-W${String(s).padStart(2,"0")}.md`}var lp={generate_project_knowledge:{id:"generate_project_knowledge",label:"Generate Project Knowledge",skillTrigger:"$ai-knowledge-project-onboarding",confirmTitle:"Generate project knowledge",validateAfterSuccess:!0,parameters:[{field:"source_path",label:"Source project path",description:"Absolute source repository path. The plugin will not infer it.",placeholder:"/absolute/path/to/source-project"},{field:"output_project_path",label:"Output project path",description:"Vault project output path, for example 30-projects/<project>.",placeholder:"30-projects/<project>"}]},generate_weekly_summary:{id:"generate_weekly_summary",label:"Generate Weekly Summary",skillTrigger:"$ai-knowledge-weekly-summary",confirmTitle:"Generate weekly summary",validateAfterSuccess:!0,parameters:[{field:"period_start",label:"Period start",description:"Start date of the weekly summary period.",placeholder:"2026-05-18",defaultValue:ap},{field:"period_end",label:"Period end",description:"End date of the weekly summary period.",placeholder:"2026-05-22",defaultValue:ip},{field:"output_path",label:"Output path",description:"Requested output path or draft destination. Do not leave it implicit.",placeholder:"60-\u5176\u4ED6/\u5468\u62A5/YYYY-WW.md",defaultValue:op}]}},Ir=class{constructor(t,e){this.app=t;this.context=e}async run(t){if(!$e(this.context.settings)){new H.Notice("Configure AI agent in AI Knowledge Workflow settings before running skills.");return}let e=lp[t],r=await new In(this.app,e).openAndGetRequest();if(!r)return;if(!await new $n(this.app,e,r).openAndGetConfirmation()){new H.Notice("Skill execution cancelled.");return}await this.execute(e,r)}async execute(t,e){let r=$e(this.context.settings);if(!r){new H.Notice("Configure AI agent in AI Knowledge Workflow settings before running skills.");return}new H.Notice(`Running ${t.label} with configured AI agent...`);try{let s=this.app.vault.adapter,a=this.context.settings.vaultRoot.trim()||s.getBasePath?.();if(!a)throw new Error("Vault root path is unavailable. Configure Vault root before running skills.");let i=await oi(r.command,cp(t,e),r.label,r.provider,a);new $r(this.app,t,i.stdout,i.stderr,"validate",async()=>{await this.context.validateVault()}).open()}catch(s){let a=s instanceof Error?s.message:String(s),i=s instanceof ke?s.details:void 0;new $r(this.app,t,"",i??a,"retry",async()=>{await this.run(t.id)}).open(),new H.Notice(`${t.label} failed: ${a}`)}}},In=class extends H.Modal{constructor(e,r){super(e);this.definition=r;this.values=new Map;this.settled=!1}openAndGetRequest(){return new Promise(e=>{this.resolveRequest=e,this.open()})}onOpen(){let{contentEl:e}=this;e.empty(),e.createEl("h2",{text:this.definition.label});let r=new Date;for(let o of this.definition.parameters){let l=o.defaultValue?.(r);new H.Setting(e).setName(o.label).setDesc(o.description).addText(c=>{c.setPlaceholder(o.placeholder).onChange(d=>{this.values.set(o.field,d.trim())}),l&&(c.setValue(l),this.values.set(o.field,l))})}let s=e.createDiv({cls:"modal-button-container"}),a=s.createEl("button",{text:"Review"});a.addClass("mod-cta"),a.addEventListener("click",()=>{let o=this.definition.parameters.filter(l=>!this.values.get(l.field)?.trim());if(o.length>0){new H.Notice(`Missing required parameter: ${o[0].label}`);return}this.settled=!0,this.resolveRequest?.({values:Object.fromEntries(this.values.entries())}),this.close()}),s.createEl("button",{text:"Cancel"}).addEventListener("click",()=>{this.settled=!0,this.resolveRequest?.(null),this.close()})}onClose(){this.settled||this.resolveRequest?.(null),this.contentEl.empty()}},$n=class extends H.Modal{constructor(e,r,s){super(e);this.definition=r;this.request=s;this.settled=!1}openAndGetConfirmation(){return new Promise(e=>{this.resolveConfirmation=e,this.open()})}onOpen(){let{contentEl:e}=this;e.empty(),e.createEl("h2",{text:this.definition.confirmTitle}),e.createEl("p",{text:"Confirm these parameters before starting the external skill flow."});let r=e.createEl("ul");r.createEl("li",{text:`Skill: ${this.definition.skillTrigger}`});for(let o of this.definition.parameters)r.createEl("li",{text:`${o.label}: ${this.request.values[o.field]}`});e.createEl("p",{text:"The plugin will only show the skill result or run vault validate; it will not write files directly from this result.",cls:"ai-knowledge-muted"});let s=e.createDiv({cls:"modal-button-container"}),a=s.createEl("button",{text:"Execute"});a.addClass("mod-cta"),a.addEventListener("click",()=>{this.settled=!0,this.resolveConfirmation?.(!0),this.close()}),s.createEl("button",{text:"Cancel"}).addEventListener("click",()=>{this.settled=!0,this.resolveConfirmation?.(!1),this.close()})}onClose(){this.settled||this.resolveConfirmation?.(!1),this.contentEl.empty()}},$r=class extends H.Modal{constructor(e,r,s,a,i,o){super(e);this.definition=r;this.stdout=s;this.stderr=a;this.followUpType=i;this.followUp=o}onOpen(){let{contentEl:e}=this;e.empty(),e.createEl("h2",{text:`${this.definition.label} Result`});let r=[this.stdout,this.stderr?`stderr:
${this.stderr}`:""].filter(Boolean).join(`

`).trim();e.createEl("pre",{text:r||"No output returned.",cls:"ai-knowledge-skill-output"});let s=e.createDiv({cls:"modal-button-container"});if(this.followUpType==="validate"&&this.definition.validateAfterSuccess){let i=s.createEl("button",{text:"Run vault validate"});i.addClass("mod-cta"),i.addEventListener("click",()=>{this.followUp(),this.close()})}else this.followUpType==="retry"&&s.createEl("button",{text:"Retry"}).addEventListener("click",()=>{this.followUp(),this.close()});s.createEl("button",{text:"Close"}).addEventListener("click",()=>this.close())}onClose(){this.contentEl.empty()}};function cp(n,t){let e=n.parameters.map(r=>`- ${r.label}: ${t.values[r.field]}`).join(`
`);return[`Run the ${n.skillTrigger} skill workflow.`,"","Boundaries:","- Use the skill's own workflow, prompts, confirmations, and safety rules.","- Do not copy or reimplement the skill's internal logic in this plugin flow.","- If required parameters are still insufficient, ask the user instead of guessing.","- Do not infer project ownership, target environment, log date ranges, weekly periods, or output paths.","- Report results, errors, and next required user action in plain text.","- Do not bypass any existing confirmation flow to write directly into the vault.","","Confirmed parameters:",e,"","Start the skill workflow now."].join(`
`)}var Lr=class{constructor(t){this.app=t}async uploadFiles(t,e){let r=Array.from(e),s=dp(t);if(!s)throw new Error("Task has no linked entry file.");if(r.length===0)throw new Error("No files selected.");let a=r.map(i=>({file:i,targetPath:`${s}/${fp(i)}`}));for(let i of a)if(await this.app.vault.adapter.exists(i.targetPath))throw new Error(`Target already exists: ${i.targetPath}`);await this.ensureFolder(s);for(let i of a)await this.copyBrowserFile(i.file,i.targetPath);return{targetRoot:s,copiedFiles:a.length}}async ensureFolder(t){let e=t.split("/").filter(Boolean),r="";for(let s of e)r=r?`${r}/${s}`:s,await this.app.vault.adapter.exists(r)||await this.app.vault.adapter.mkdir(r)}async copyBrowserFile(t,e){await this.ensureFolder(hp(e)),await this.app.vault.adapter.writeBinary(e,await t.arrayBuffer())}};function dp(n){let t=pp(n);if(!t)return null;let e=t.match(/^(30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+)\/(?:AGENTS|index)\.md$/);if(n.taskScope==="project"&&e)return`${e[1]}/inputs`;let r=t.match(/^(20-workflows\/[^/]+)\/AGENTS\.md$/);if(n.taskScope==="workflow"&&r)return`${r[1]}/inputs`;let s=t.match(/^(10-tasks\/items\/\d{4}\/\d{2}\/[^/]+)\.md$/);return n.taskScope==="general"&&s?`${s[1]}/inputs`:null}function pp(n){for(let t of n.links){let e=up(t.target);if(Ln(e))return e}return null}function Ln(n){return/^30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+\/(?:AGENTS|index)\.md$/.test(n)||/^20-workflows\/[^/]+\/AGENTS\.md$/.test(n)||/^10-tasks\/items\/\d{4}\/\d{2}\/[^/]+\.md$/.test(n)}function up(n){if(Ln(n))return n;if(/^30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+$/.test(n))return`${n}/AGENTS.md`;if(/^20-workflows\/[^/]+$/.test(n))return`${n}/AGENTS.md`;let t=n.endsWith(".md")?n:`${n}.md`;return Ln(t)?t:n}function fp(n){let t=n.webkitRelativePath;return mp(t||n.name)}function mp(n){return n.split("/").map(t=>t.trim()).filter(t=>t&&t!=="."&&t!=="..").join("/")}function hp(n){let t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}var Vt="ai-knowledge-todo-board",hi=(i=>(i.Any="any",i.None="none",i.On="on",i.By="by",i.From="from",i.Between="between",i))(hi||{}),gi=(s=>(s.Any="any",s.General="general",s.Project="project",s.Workflow="workflow",s))(gi||{}),gp={any:"\u5168\u90E8\u65E5\u671F",none:"\u672A\u8BBE\u7F6E\u65E5\u671F",on:"\u5F53\u5929",by:"\u622A\u6B62\u5230",from:"\u4ECE\u65E5\u671F\u5F00\u59CB",between:"\u65E5\u671F\u8303\u56F4"},kp={any:"\u5168\u90E8\u7C7B\u578B",general:"\u901A\u7528",project:"\u9879\u76EE",workflow:"\u5DE5\u4F5C\u6D41"},ci={P0:"P0 \u7D27\u6025",P1:"P1 \u9AD8",P2:"P2 \u4E2D",P3:"P3 \u666E\u901A",P4:"P4 \u4F4E"},wp={general:"\u901A\u7528",project:"\u9879\u76EE",workflow:"\u5DE5\u4F5C\u6D41"},Dn=10,Mt=class extends y.ItemView{constructor(e,r){super(e);this.actions=r;this.sortMode="priority";this.taskScopeFilterMode="any";this.dueDateFilterMode="any";this.dueDateFilterStart="";this.dueDateFilterEnd="";this.isRefreshing=!1;this.searchDraft="";this.searchQuery="";this.projectSearchDraft="";this.projectSearchQuery="";this.columnPages=new Map}getViewType(){return Vt}getDisplayText(){return"AI \u77E5\u8BC6\u4EFB\u52A1\u677F"}async onOpen(){await this.refresh()}async refresh(){if(!this.isRefreshing){this.isRefreshing=!0,this.renderLoading();try{let e=new N(this.app),[r,s,a]=await Promise.all([e.listTasks(),e.listDoneTasks(),new he(this.app).scanVault()]),i=new je().validateVault(a);this.renderBoard([...r,...s],a,i)}catch(e){let r=e instanceof Error?e.message:String(e);new y.Notice(`\u4EFB\u52A1\u677F\u5237\u65B0\u5931\u8D25\uFF1A${r}`),this.renderError(r)}finally{this.isRefreshing=!1}}}renderLoading(){let e=this.contentEl;e.empty(),e.addClass("ai-knowledge-todo-board"),e.createEl("p",{text:"\u5237\u65B0\u4E2D...",cls:"ai-knowledge-muted"})}renderError(e){let r=this.contentEl;r.empty(),r.addClass("ai-knowledge-todo-board"),r.createEl("p",{text:e,cls:"ai-knowledge-error"})}renderBoard(e,r,s){let a=this.contentEl;a.empty(),a.addClass("ai-knowledge-todo-board"),a.addEventListener("click",()=>{a.findAll(".ai-knowledge-task-more-menu.is-open").forEach(p=>p.removeClass("is-open"))}),this.renderMainTabs(a);let o=a.createDiv({cls:"ai-knowledge-todo-header"}).createDiv({cls:"ai-knowledge-todo-title"}),l=o.createDiv({cls:"ai-knowledge-todo-title-bar"});l.createEl("h2",{text:"\u4EFB\u52A1\u677F"}),this.renderOpenAiAgentButton(l),this.renderMoreActionsButton(l),this.renderStatusStrip(o,e.length,r,s),this.renderWorkflowActions(a),this.renderBoardControls(a);let c=e.filter(p=>Sp(p,this.searchQuery)).filter(p=>Ap(p,this.projectSearchQuery)).filter(p=>Tp(p,this.taskScopeFilterMode)).filter(p=>vp(p,this.dueDateFilterMode,this.dueDateFilterStart,this.dueDateFilterEnd)),d=a.createDiv({cls:"ai-knowledge-kanban"});for(let p of pt)this.renderColumn(d,p,ra(c.filter(m=>m.status===p),this.sortMode))}renderMainTabs(e){let r=e.createDiv({cls:"ai-knowledge-main-tabs"}),s=r.createEl("button",{text:"Tasks"}),a=r.createEl("button",{text:"Projects"}),i=r.createEl("button",{text:"FAQ"});s.addClass("mod-cta"),a.addEventListener("click",()=>{this.actions.openProjects()}),i.addEventListener("click",()=>{this.actions.openFaq()})}renderWorkflowActions(e){let s=e.createDiv({cls:"ai-knowledge-todo-actions-panel"}).createDiv({cls:"ai-knowledge-action-group"});s.createEl("h3",{text:"\u5DE5\u4F5C\u6D41"});let a=s.createDiv({cls:"ai-knowledge-action-row"});this.addActionButton(a,"\u521B\u5EFA\u9879\u76EE\u4EFB\u52A1","\u521B\u5EFA\u9879\u76EE\u5C0F\u4EFB\u52A1\u3002",()=>this.actions.addTask()),this.addActionButton(a,"\u521B\u5EFA\u5DE5\u4F5C\u6D41","\u521B\u5EFA\u590D\u6742\u4EFB\u52A1 workflow\u3002",()=>this.actions.createWorkflow()),this.addActionButton(a,"\u6DFB\u52A0\u901A\u7528\u5F85\u529E","\u6DFB\u52A0\u63D0\u9192\u3001\u4F1A\u8BAE\u3001\u6C9F\u901A\u7B49\u975E\u9879\u76EE\u5F85\u529E\u3002",()=>this.actions.addGeneralTask()),this.addActionButton(a,"\u6821\u9A8C","\u53EA\u8BFB\u68C0\u67E5 vault \u7ED3\u6784\u3001\u4EFB\u52A1\u677F\u548C workflow \u94FE\u63A5\u3002",()=>this.actions.validateVault())}renderOpenAiAgentButton(e){let r=e.createEl("button",{cls:"ai-knowledge-open-agent-button",attr:{"aria-label":"Open AI agent in vault",title:"Open AI agent in vault"}});(0,y.setIcon)(r.createSpan({cls:"ai-knowledge-open-agent-icon"}),"terminal"),r.createSpan({text:"Open AI agent in vault"}),r.addEventListener("click",()=>{this.openAiAgentInVault()})}renderMoreActionsButton(e){let r=e.createEl("button",{cls:"ai-knowledge-more-actions-button",attr:{"aria-label":"\u66F4\u591A\u64CD\u4F5C",title:"\u66F4\u591A\u64CD\u4F5C"}});r.createSpan({text:"\u66F4\u591A\u64CD\u4F5C"}),(0,y.setIcon)(r.createSpan({cls:"ai-knowledge-more-actions-icon"}),"chevron-down"),r.addEventListener("click",s=>{let a=new y.Menu;a.addItem(i=>{i.setTitle("\u6253\u5F00\u5DF2\u5B8C\u6210\u8BB0\u5F55").setIcon("archive").onClick(()=>{this.actions.openDoneArchive()})}),a.addSeparator(),a.addItem(i=>{i.setTitle("\u751F\u6210\u9879\u76EE\u77E5\u8BC6\u5E93").setIcon("book-open").onClick(()=>{this.runSkillAction("generate_project_knowledge")})}),a.addItem(i=>{i.setTitle("\u751F\u6210\u5468\u62A5").setIcon("calendar-days").onClick(()=>{this.runSkillAction("generate_weekly_summary")})}),a.showAtMouseEvent(s)})}async openAiAgentInVault(){if(!this.actions.openAiAgentInVault){new y.Notice("Open AI agent in vault is unavailable.");return}await this.actions.openAiAgentInVault()}async runSkillAction(e){if(!this.actions.runSkillAction){await bp();return}await this.actions.runSkillAction(e),await this.refresh()}addActionButton(e,r,s,a){let i=e.createEl("button",{cls:"ai-knowledge-action-button"});i.createSpan({text:r,cls:"ai-knowledge-action-title"}),i.createSpan({text:s,cls:"ai-knowledge-action-desc"}),i.addEventListener("click",()=>{a().then(()=>this.refresh())})}renderStatusStrip(e,r,s,a){let i=e.createDiv({cls:"ai-knowledge-status-strip"});this.renderStatusItem(i,"\u4EFB\u52A1",r.toString()),this.renderStatusItem(i,"\u5DE5\u4F5C\u6D41",s.workflows.length.toString()),this.renderStatusItem(i,"\u6821\u9A8C",Ep(a))}renderStatusItem(e,r,s){let a=e.createSpan();a.createEl("strong",{text:s}),a.appendText(` ${r}`)}renderBoardControls(e){let r=e.createDiv({cls:"ai-knowledge-board-controls"});r.createEl("h3",{text:"\u4EFB\u52A1"});let s=r.createDiv({cls:"ai-knowledge-board-control-actions"});this.renderToolbar(s)}renderToolbar(e){let r=e.createDiv({cls:"ai-knowledge-task-search-wrap"}),s=r.createEl("input",{cls:"ai-knowledge-task-card-search",type:"search",attr:{placeholder:"\u641C\u7D22\u4EFB\u52A1","aria-label":"\u641C\u7D22\u4EFB\u52A1"}}),a=r.createEl("button",{cls:"ai-knowledge-search-clear",attr:{title:"\u6E05\u9664\u641C\u7D22","aria-label":"\u6E05\u9664\u641C\u7D22"}});(0,y.setIcon)(a,"x"),a.toggleClass("ai-knowledge-hidden",!this.searchDraft),s.value=this.searchDraft,s.addEventListener("input",()=>{this.searchDraft=s.value,a.toggleClass("ai-knowledge-hidden",!this.searchDraft),this.searchDraft.trim()===""&&this.searchQuery!==""&&(this.searchQuery="",this.refresh())}),s.addEventListener("keydown",C=>{C.key!=="Enter"||C.isComposing||(this.searchDraft=s.value,this.searchQuery=s.value,this.refresh())}),a.addEventListener("click",()=>{this.searchDraft="",this.searchQuery="",s.value="",a.addClass("ai-knowledge-hidden"),this.refresh()});let i=e.createDiv({cls:"ai-knowledge-task-search-wrap"}),o=i.createEl("input",{cls:"ai-knowledge-task-card-search ai-knowledge-project-name-search",type:"search",attr:{placeholder:"\u641C\u7D22\u9879\u76EE\u540D\u79F0","aria-label":"\u641C\u7D22\u9879\u76EE\u540D\u79F0"}}),l=i.createEl("button",{cls:"ai-knowledge-search-clear",attr:{title:"\u6E05\u9664\u9879\u76EE\u641C\u7D22","aria-label":"\u6E05\u9664\u9879\u76EE\u641C\u7D22"}});(0,y.setIcon)(l,"x"),l.toggleClass("ai-knowledge-hidden",!this.projectSearchDraft),o.value=this.projectSearchDraft,o.addEventListener("input",()=>{this.projectSearchDraft=o.value,l.toggleClass("ai-knowledge-hidden",!this.projectSearchDraft),this.projectSearchDraft.trim()===""&&this.projectSearchQuery!==""&&(this.projectSearchQuery="",this.refresh())}),o.addEventListener("keydown",C=>{C.key!=="Enter"||C.isComposing||(this.projectSearchDraft=o.value,this.projectSearchQuery=o.value,this.refresh())}),l.addEventListener("click",()=>{this.projectSearchDraft="",this.projectSearchQuery="",o.value="",l.addClass("ai-knowledge-hidden"),this.refresh()});let c=e.createDiv({cls:"ai-knowledge-sort-group"});c.createSpan({text:"\u6392\u5E8F:",cls:"ai-knowledge-sort-label"});let d=c.createEl("button",{text:"\u4F18\u5148\u7EA7"}),p=c.createEl("button",{text:"\u624B\u52A8"}),m=e.createDiv({cls:"ai-knowledge-type-filter-group"});m.createSpan({text:"\u7C7B\u578B:",cls:"ai-knowledge-sort-label"});let k=m.createEl("select",{cls:"ai-knowledge-type-filter-mode",attr:{"aria-label":"\u4EFB\u52A1\u7C7B\u578B\u7B5B\u9009",title:"\u4EFB\u52A1\u7C7B\u578B\u7B5B\u9009"}}),x=e.createDiv({cls:"ai-knowledge-date-filter-group"});x.createSpan({text:"\u65E5\u671F:",cls:"ai-knowledge-sort-label"});let $=x.createEl("select",{cls:"ai-knowledge-date-filter-mode",attr:{"aria-label":"\u65E5\u671F\u7B5B\u9009\u65B9\u5F0F",title:"\u65E5\u671F\u7B5B\u9009\u65B9\u5F0F"}}),R=x.createEl("input",{cls:"ai-knowledge-task-date-filter",type:"date",attr:{"aria-label":"\u5F00\u59CB\u65E5\u671F",title:"\u5F00\u59CB\u65E5\u671F"}}),j=x.createEl("input",{cls:"ai-knowledge-task-date-filter",type:"date",attr:{"aria-label":"\u7ED3\u675F\u65E5\u671F",title:"\u7ED3\u675F\u65E5\u671F"}}),B=e.createEl("button",{text:"\u5237\u65B0"});for(let C of Object.values(hi))$.createEl("option",{text:gp[C],value:C});for(let C of Object.values(gi))k.createEl("option",{text:kp[C],value:C});d.toggleClass("mod-cta",this.sortMode==="priority"),p.toggleClass("mod-cta",this.sortMode==="manual"),d.addEventListener("click",()=>{this.sortMode="priority",this.refresh()}),p.addEventListener("click",()=>{this.sortMode="manual",this.refresh()}),k.value=this.taskScopeFilterMode,k.addEventListener("change",()=>{this.taskScopeFilterMode=k.value,this.resetColumnPages(),this.refresh()}),$.value=this.dueDateFilterMode,R.value=this.dueDateFilterStart,j.value=this.dueDateFilterEnd,di(this.dueDateFilterMode,R,j),$.addEventListener("change",()=>{this.dueDateFilterMode=$.value,di(this.dueDateFilterMode,R,j),this.resetColumnPages(),this.refresh()}),R.addEventListener("change",()=>{this.dueDateFilterStart=R.value,this.resetColumnPages(),this.refresh()}),j.addEventListener("change",()=>{this.dueDateFilterEnd=j.value,this.resetColumnPages(),this.refresh()}),B.addEventListener("click",()=>{this.refresh()})}renderColumn(e,r,s){let a=Math.max(1,Math.ceil(s.length/Dn)),i=yp(this.columnPages.get(r)??1,a);this.columnPages.set(r,i);let o=(i-1)*Dn,l=s.slice(o,o+Dn),c=e.createDiv({cls:"ai-knowledge-kanban-column"}),d=c.createDiv({cls:"ai-knowledge-kanban-column-header"}),p=d.createDiv({cls:"ai-knowledge-kanban-column-heading"});p.createSpan({text:ut[r],cls:"ai-knowledge-kanban-column-title"}),p.createSpan({text:Ae[r],cls:"ai-knowledge-kanban-column-subtitle"}),d.createSpan({text:s.length.toString(),cls:"ai-knowledge-kanban-count"});let m=c.createDiv({cls:"ai-knowledge-kanban-cards"});if(s.length===0){m.createEl("p",{text:"\u65E0\u4EFB\u52A1",cls:"ai-knowledge-muted"});return}for(let k of l)this.renderTaskCard(m,k);this.renderColumnPagination(c,r,i,a,s.length)}resetColumnPages(){this.columnPages.clear()}renderColumnPagination(e,r,s,a,i){if(i===0)return;let o=e.createDiv({cls:"ai-knowledge-kanban-pagination"}),l=o.createEl("button",{text:"\u4E0A\u4E00\u9875",cls:"ai-knowledge-pagination-button"});o.createSpan({text:`\u7B2C ${s} / ${a} \u9875 \xB7 \u5171 ${i} \u4E2A`,cls:"ai-knowledge-pagination-summary"});let c=o.createEl("button",{text:"\u4E0B\u4E00\u9875",cls:"ai-knowledge-pagination-button"});l.disabled=s<=1,c.disabled=s>=a,l.addEventListener("click",()=>{this.columnPages.set(r,Math.max(1,s-1)),this.refresh()}),c.addEventListener("click",()=>{this.columnPages.set(r,Math.min(a,s+1)),this.refresh()})}renderTaskCard(e,r){let s=r.status==="done",a=e.createDiv({cls:`ai-knowledge-task-card ai-knowledge-priority-${r.priority.toLowerCase()}`}),i=pi(r),o=xp(r.rawLines),l=r.links[0]??null,c=a.createDiv({cls:"ai-knowledge-task-card-top"}),d=c.createDiv({cls:"ai-knowledge-task-identity"});d.createSpan({text:r.priority,cls:`ai-knowledge-priority-badge ai-knowledge-priority-badge-${r.priority.toLowerCase()}`,attr:{title:`\u4F18\u5148\u7EA7\uFF1A${ci[r.priority]}`}}),d.createSpan({text:wp[r.taskScope],cls:`ai-knowledge-task-type-badge ai-knowledge-task-type-${r.taskScope}`,attr:{title:`\u4EFB\u52A1\u7C7B\u578B\uFF1A${xs[r.taskScope]}`}});let p=c.createDiv({cls:"ai-knowledge-task-card-actions"});te(p,"app-window",`\u7528 Codex App \u6253\u5F00\uFF1A${i}`,"\u7528 Codex App \u6253\u5F00").addEventListener("click",()=>{this.openTaskInCodexApp(r)}),this.actions.isKcworkEnabled()&&te(p,"layout-panel-left",`\u7528 KCwork \u6253\u5F00\uFF1A${i}`,"\u7528 KCwork \u6253\u5F00").addEventListener("click",()=>{this.openTaskInKcwork(r)}),te(p,"terminal",`\u7528 Agent \u6253\u5F00\uFF1A${i}`,"\u7528 Agent \u6253\u5F00").addEventListener("click",()=>{this.openTaskInAgent(r)}),s||te(p,"trash-2",`\u5220\u9664\u4EFB\u52A1\uFF1A${i}`,"\u5220\u9664\u4EFB\u52A1","ai-knowledge-task-danger-icon").addEventListener("click",()=>{this.deleteTask(r)});let x=s?null:a.createEl("input",{cls:"ai-knowledge-task-hidden-date-input",type:"date",attr:{"aria-label":"\u4EFB\u52A1\u65E5\u671F"}});x&&(x.value=r.dueDate??"",x.addEventListener("change",()=>{this.updateTaskDueDate(r,x.value||null)}));let $=p.createDiv({cls:"ai-knowledge-task-more-wrapper"}),R=te($,"more-vertical","\u66F4\u591A\u64CD\u4F5C","\u66F4\u591A\u64CD\u4F5C"),j=$.createDiv({cls:"ai-knowledge-task-more-menu"});if(r.status!=="done"){let b=j.createDiv({cls:"ai-knowledge-task-more-item",attr:{"aria-label":`\u5B8C\u6210\u4EFB\u52A1\uFF1A${i}`,title:"\u5B8C\u6210\u4EFB\u52A1"}});(0,y.setIcon)(b.createSpan(),"check"),b.createSpan({text:" \u5B8C\u6210",cls:"ai-knowledge-task-more-item-text"}),b.addEventListener("click",Y=>{Y.stopPropagation(),j.removeClass("is-open"),this.moveTask(r,"done")})}let B=j.createDiv({cls:"ai-knowledge-task-more-item",attr:{"aria-label":`\u590D\u5236\u7ED9 Agent\uFF1A${i}`,title:"\u590D\u5236\u7ED9 Agent"}});(0,y.setIcon)(B.createSpan(),"copy"),B.createSpan({text:" \u590D\u5236\u7ED9 Agent",cls:"ai-knowledge-task-more-item-text"}),B.addEventListener("click",b=>{b.stopPropagation(),j.removeClass("is-open"),this.copyTaskToAgent(r)}),R.addEventListener("click",b=>{b.stopPropagation(),j.toggleClass("is-open",!j.hasClass("is-open"))}),!s&&this.sortMode==="manual"&&(te(p,"arrow-up",`\u4E0A\u79FB\u4EFB\u52A1\uFF1A${i}`,"\u4E0A\u79FB").addEventListener("click",()=>{this.moveTaskManually(r,"up")}),te(p,"arrow-down",`\u4E0B\u79FB\u4EFB\u52A1\uFF1A${i}`,"\u4E0B\u79FB").addEventListener("click",()=>{this.moveTaskManually(r,"down")}));let C=a.createDiv({cls:"ai-knowledge-task-title-row"});C.createDiv({text:i,cls:"ai-knowledge-task-card-title"}),s||te(C,"pencil",`\u7F16\u8F91\u4EFB\u52A1\u540D\u79F0\uFF1A${i}`,"\u7F16\u8F91\u4EFB\u52A1\u540D\u79F0","ai-knowledge-task-title-edit").addEventListener("click",Y=>{Y.stopPropagation(),this.startTitleEditing(a,r,i)});let G=a.createDiv({cls:"ai-knowledge-task-summary"}),qr=G.createEl("button",{text:r.dueDate?`\u622A\u6B62 ${Pp(r.dueDate)}`:"\u672A\u8BBE\u7F6E\u65E5\u671F",cls:"ai-knowledge-task-summary-chip ai-knowledge-task-date-chip",attr:{title:r.dueDate?`\u4FEE\u6539\u65E5\u671F\uFF1A${r.dueDate}`:"\u8BBE\u7F6E\u65E5\u671F","aria-label":"\u8BBE\u7F6E\u4EFB\u52A1\u65E5\u671F"}});x&&qr.addEventListener("click",b=>{b.stopPropagation(),x.showPicker?.(),x.focus(),x.click()});let zr=G.createSpan({text:"\u8BF4\u660E",cls:"ai-knowledge-task-note-tag"+(o.length===0?" ai-knowledge-task-tag-empty":""),attr:{title:"\u5355\u51FB\u67E5\u770B / \u53CC\u51FB\u7F16\u8F91"}}),Et=Qe[this.actions.getTaskSourceApp()],Ur=G.createSpan({text:r.wpsTargets.length>0?`${Et}:${r.wpsTargets.map(b=>b.label.length>10?b.label.slice(0,10)+"\u2026":b.label).join(",")}`:Et,cls:"ai-knowledge-task-wps-tag"+(r.wpsTargets.length===0?" ai-knowledge-task-tag-empty":""),attr:{title:r.wpsTargets.length>0?"\u5355\u51FB\u67E5\u770B / \u7F16\u8F91":"\u5355\u51FB\u7F16\u8F91"}});(r.taskScope==="workflow"||r.taskScope==="project")&&jp(G,r.projects.length>0?r.projects:r.project?[r.project]:[]);let as=G.createDiv({cls:"ai-knowledge-task-summary-tools"});l&&te(as,"external-link",`\u6253\u5F00 ${_p(l.label||l.target)}`,"\u5B9A\u4F4D\u5230\u6587\u4EF6","ai-knowledge-task-meta-icon").addEventListener("click",()=>{this.app.workspace.openLinkText(l.target,A)}),te(as,"text-cursor-input",`\u5B9A\u4F4D\u5230\u4EFB\u52A1\u7B2C ${r.line} \u884C`,"\u5B9A\u4F4D\u5230\u4EFB\u52A1\u884C","ai-knowledge-task-meta-icon").addEventListener("click",()=>{this.openTaskLine(r)});let is=a.createDiv({cls:"ai-knowledge-task-note-block"});for(let b of o)is.createDiv({text:b,cls:"ai-knowledge-task-note-line"});zr.addEventListener("click",b=>{b.stopPropagation(),o.length>0&&(is.classList.toggle("ai-knowledge-task-note-expanded"),zr.classList.toggle("ai-knowledge-task-note-active"))}),s||zr.addEventListener("dblclick",b=>{b.stopPropagation(),b.preventDefault(),this.startNoteEditing(a,r,o)});let Yr=a.createDiv({cls:"ai-knowledge-task-wps-block"});if(r.wpsTargets.length>0){let b=Yr.createDiv({cls:"ai-knowledge-task-wps-detail"});b.createSpan({text:r.wpsTargets.map(Y=>Y.label).join("\uFF0C")}),this.actions.canOpenTaskSource()&&te(b,"message-circle",`\u6253\u5F00 ${Et}\uFF1A${r.wpsTargets[0].label}`,`${Et}\uFF1A${r.wpsTargets[0].label}`,"ai-knowledge-task-meta-icon").addEventListener("click",()=>{this.openTaskSource(r.wpsTargets[0])})}s||Yr.createEl("button",{text:`\u7F16\u8F91 ${Et}`,cls:"ai-knowledge-task-inline-button"}).addEventListener("click",Y=>{Y.stopPropagation(),this.startSourceEditing(a,r)}),Ur.addEventListener("click",b=>{b.stopPropagation(),r.wpsTargets.length>0?(Yr.classList.toggle("ai-knowledge-task-wps-expanded"),Ur.classList.toggle("ai-knowledge-task-wps-active")):s||this.startSourceEditing(a,r)}),s||Ur.addEventListener("dblclick",b=>{b.stopPropagation(),b.preventDefault(),this.startSourceEditing(a,r)});let bt=a.createEl("button",{cls:"ai-knowledge-task-detail-toggle",attr:{"aria-expanded":"false",title:"\u5C55\u5F00\u4EFB\u52A1\u8BE6\u60C5"}});(0,y.setIcon)(bt.createSpan({cls:"ai-knowledge-task-detail-icon"}),"chevron-down"),bt.createSpan({text:"\u8BE6\u60C5"});let Ht=a.createDiv({cls:"ai-knowledge-task-detail-panel"});if(!s){let b=Ht.createDiv({cls:"ai-knowledge-task-detail-controls"});this.renderTaskControls(b,r)}let Hr=Ht.createDiv({cls:"ai-knowledge-task-detail-meta"});r.taskId&&Hr.createSpan({text:`ID:${r.taskId}`,cls:"ai-knowledge-task-id-tag"}),r.createdAt&&Hr.createSpan({text:`\u521B\u5EFA:${r.createdAt}`,cls:"ai-knowledge-task-created-tag"}),r.dueDate&&Hr.createSpan({text:`\u622A\u6B62:${r.dueDate}`,cls:"ai-knowledge-task-due-tag"}),bt.addEventListener("click",b=>{b.stopPropagation();let Y=Ht.hasClass("is-open");Ht.toggleClass("is-open",!Y),bt.setAttr("aria-expanded",String(!Y)),bt.toggleClass("is-open",!Y)})}renderTaskControls(e,r){let s=e.createEl("select",{cls:"ai-knowledge-task-select",attr:{"aria-label":"\u4EFB\u52A1\u4F18\u5148\u7EA7"}}),a=e.createEl("select",{cls:"ai-knowledge-task-select",attr:{"aria-label":"\u4EFB\u52A1\u72B6\u6001"}});for(let o of Dt)s.createEl("option",{text:ci[o],value:o});s.value=r.priority,s.addEventListener("change",()=>{this.updateTaskPriority(r,s.value)});for(let o of pt)a.createEl("option",{text:ut[o],value:o});if(a.value=r.status,a.addEventListener("change",()=>{this.moveTask(r,a.value)}),r.project&&r.taskScope==="project"){let o=e.createEl("select",{cls:"ai-knowledge-task-select ai-knowledge-task-project-select",attr:{"aria-label":"\u5173\u8054\u9879\u76EE"}});this.populateProjectSelect(o,r),o.addEventListener("change",()=>{this.confirmAndUpdateProject(r,o.value)})}r.taskScope==="workflow"&&e.createEl("button",{text:"\u5173\u8054\u9879\u76EE",cls:"ai-knowledge-task-inline-button"}).addEventListener("click",()=>{this.openWorkflowProjectsModal(r)}),e.createEl("button",{text:"\u4E0A\u4F20\u5230 inputs",cls:"ai-knowledge-task-inline-button"}).addEventListener("click",()=>{this.openTaskUploadModal(r)})}async moveTask(e,r){try{await new N(this.app).moveTask({task:e,toStatus:r}),new y.Notice(`\u4EFB\u52A1\u5DF2\u79FB\u52A8\u5230 ${ut[r]}\u3002`),await this.refresh(),await this.actions.validateVault()}catch(s){let a=s instanceof Error?s.message:String(s);new y.Notice(`\u79FB\u52A8\u4EFB\u52A1\u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: move task failed",s)}}async updateTaskPriority(e,r){try{await new N(this.app).updateTaskPriority({task:e,priority:r}),new y.Notice(`\u4EFB\u52A1\u4F18\u5148\u7EA7\u5DF2\u8BBE\u4E3A ${r}\u3002`),await this.refresh(),await this.actions.validateVault()}catch(s){let a=s instanceof Error?s.message:String(s);new y.Notice(`\u66F4\u65B0\u4F18\u5148\u7EA7\u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: update task priority failed",s)}}async updateTaskDueDate(e,r){try{await new N(this.app).updateTaskDueDate({task:e,dueDate:r}),new y.Notice(r?`\u4EFB\u52A1\u65E5\u671F\u5DF2\u8BBE\u4E3A ${r}\u3002`:"\u4EFB\u52A1\u65E5\u671F\u5DF2\u6E05\u7A7A\u3002"),await this.refresh(),await this.actions.validateVault()}catch(s){let a=s instanceof Error?s.message:String(s);new y.Notice(`\u66F4\u65B0\u4EFB\u52A1\u65E5\u671F\u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: update task due date failed",s)}}startTitleEditing(e,r,s){if(e.querySelector(".ai-knowledge-task-title-editor"))return;let i=e.querySelector(".ai-knowledge-task-title-row");i?.addClass("ai-knowledge-hidden");let o=e.createDiv({cls:"ai-knowledge-task-title-editor"}),l=o.createEl("input",{cls:"ai-knowledge-task-title-input",attr:{type:"text","aria-label":"\u7F16\u8F91\u4EFB\u52A1\u540D\u79F0",placeholder:"\u4EFB\u52A1\u540D\u79F0"}});l.value=s,l.focus(),l.select();let c=o.createDiv({cls:"ai-knowledge-task-note-actions"}),d=c.createEl("button",{text:"\u4FDD\u5B58",cls:"mod-cta"}),p=c.createEl("button",{text:"\u53D6\u6D88"}),m=()=>{let k=l.value.trim();this.updateTaskTitle(r,k)};d.addEventListener("click",m),l.addEventListener("keydown",k=>{k.key==="Enter"&&(k.preventDefault(),m()),k.key==="Escape"&&(o.remove(),i?.removeClass("ai-knowledge-hidden"))}),p.addEventListener("click",()=>{o.remove(),i?.removeClass("ai-knowledge-hidden")})}async updateTaskTitle(e,r){try{await new N(this.app).updateTaskTitle({task:e,title:r}),new y.Notice("\u4EFB\u52A1\u540D\u79F0\u5DF2\u66F4\u65B0\u3002"),await this.refresh(),await this.actions.validateVault()}catch(s){let a=s instanceof Error?s.message:String(s);new y.Notice(`\u66F4\u65B0\u4EFB\u52A1\u540D\u79F0\u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: update task title failed",s)}}startNoteEditing(e,r,s){if(e.querySelector(".ai-knowledge-task-note-editor"))return;let i=e.querySelector(".ai-knowledge-task-note-block");i?.addClass("ai-knowledge-hidden");let o=e.createDiv({cls:"ai-knowledge-task-note-editor"}),l=o.createEl("textarea",{cls:"ai-knowledge-task-note-textarea",attr:{"aria-label":"\u7F16\u8F91\u8BF4\u660E",rows:"4",placeholder:"\u6BCF\u884C\u4E00\u6761\u8BF4\u660E\u2026"}});l.value=s.join(`
`);let c=o.createDiv({cls:"ai-knowledge-task-note-actions"}),d=c.createEl("button",{text:"\u4FDD\u5B58",cls:"mod-cta"}),p=c.createEl("button",{text:"\u53D6\u6D88"});d.addEventListener("click",()=>{let m=l.value.split(`
`).filter(k=>k.trim());this.updateTaskNotes(r,m)}),p.addEventListener("click",()=>{o.remove(),i?.removeClass("ai-knowledge-hidden")})}async updateTaskNotes(e,r){try{await new N(this.app).updateTaskNotes({task:e,notes:r}),new y.Notice(r.length>0?"\u8BF4\u660E\u5DF2\u66F4\u65B0\u3002":"\u8BF4\u660E\u5DF2\u6E05\u7A7A\u3002"),await this.refresh(),await this.actions.validateVault()}catch(s){let a=s instanceof Error?s.message:String(s);new y.Notice(`\u66F4\u65B0\u8BF4\u660E\u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: update task notes failed",s)}}startSourceEditing(e,r){if(e.querySelector(".ai-knowledge-task-wps-editor"))return;let a=e.querySelector(".ai-knowledge-task-wps-block");a?.addClass("ai-knowledge-hidden");let i=Qe[this.actions.getTaskSourceApp()],o=e.createDiv({cls:"ai-knowledge-task-wps-editor"}),l=o.createEl("input",{cls:"ai-knowledge-task-wps-input",attr:{type:"text","aria-label":`\u7F16\u8F91 ${i} \u540D\u79F0`,placeholder:`${i} \u540D\u79F0`}});l.value=r.wpsTargets[0]?.label??"";let c=o.createDiv({cls:"ai-knowledge-task-note-actions"}),d=c.createEl("button",{text:"\u4FDD\u5B58",cls:"mod-cta"}),p=c.createEl("button",{text:"\u53D6\u6D88"});d.addEventListener("click",()=>{let m=l.value.trim(),k=r.wpsTargets[0],x=r.wpsTargets.slice(1),$=m?[{label:m,url:m===k?.label?k.url:null},...x]:x;this.updateTaskWpsTargets(r,$)}),p.addEventListener("click",()=>{o.remove(),a?.removeClass("ai-knowledge-hidden")})}async updateTaskWpsTargets(e,r){try{await new N(this.app).updateTaskWpsTargets({task:e,wpsTargets:r}),new y.Notice("\u4EFB\u52A1\u6765\u6E90\u5DF2\u66F4\u65B0\u3002"),await this.refresh(),await this.actions.validateVault()}catch(s){let a=s instanceof Error?s.message:String(s);new y.Notice(`\u66F4\u65B0\u4EFB\u52A1\u6765\u6E90\u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: update task source failed",s)}}async moveTaskManually(e,r){try{await new N(this.app).moveTaskManually({task:e,direction:r}),new y.Notice(r==="up"?"\u4EFB\u52A1\u5DF2\u4E0A\u79FB\u3002":"\u4EFB\u52A1\u5DF2\u4E0B\u79FB\u3002"),await this.refresh(),await this.actions.validateVault()}catch(s){let a=s instanceof Error?s.message:String(s);new y.Notice(`\u624B\u52A8\u6392\u5E8F\u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: manual task move failed",s)}}async openTaskLine(e){let r=e.status==="done"?D:A,s=this.app.vault.getAbstractFileByPath(r);if(!(s instanceof y.TFile)){new y.Notice(`\u672A\u627E\u5230\u4EFB\u52A1\u6587\u4EF6\uFF1A${r}`);return}await this.app.workspace.getLeaf(!1).openFile(s,{active:!0,eState:{line:Math.max(0,e.line-1)}})}async deleteTask(e){if(await Ie(this.app,"\u5220\u9664\u4EFB\u52A1",`\u786E\u8BA4\u5220\u9664\u4EFB\u52A1"${pi(e)}"\uFF1F\u6B64\u64CD\u4F5C\u5C06\u4ECE\u4EFB\u52A1\u677F\u4E2D\u79FB\u9664\u8BE5\u4EFB\u52A1\u3002`,"\u5220\u9664")==="confirm")try{await new N(this.app).deleteTask(e),new y.Notice("\u4EFB\u52A1\u5DF2\u5220\u9664\u3002"),await this.refresh(),await this.actions.validateVault()}catch(s){let a=s instanceof Error?s.message:String(s);new y.Notice(`\u5220\u9664\u4EFB\u52A1\u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: delete task failed",s)}}async copyTaskToAgent(e){if(!this.actions.copyTaskToAgent){new y.Notice("Copy task to agent is unavailable.");return}await this.actions.copyTaskToAgent(e)}async openTaskInAgent(e){if(!this.actions.openTaskInAgent){new y.Notice("Open task in agent is unavailable.");return}await this.actions.openTaskInAgent(e)}async openTaskInCodexApp(e){if(!this.actions.openTaskInCodexApp){new y.Notice("Open task in Codex app is unavailable.");return}await this.actions.openTaskInCodexApp(e)}async openTaskInKcwork(e){if(!this.actions.openTaskInKcwork){new y.Notice("Open task in KCwork is unavailable.");return}await this.actions.openTaskInKcwork(e)}async openTaskSource(e){if(!this.actions.canOpenTaskSource()){new y.Notice("\u5F53\u524D\u5E73\u53F0\u4E0D\u652F\u6301\u6253\u5F00\u6240\u9009\u6765\u6E90\u5E94\u7528\u3002");return}await this.actions.openTaskSource(e)}async populateProjectSelect(e,r){let s=await new oe(this.app).listProjects();e.empty();for(let a of s){let i=e.createEl("option",{text:a.name,value:a.name});a.name===r.project&&(i.selected=!0)}}async confirmAndUpdateProject(e,r){if(!r||r===e.project)return;if(await Ie(this.app,"\u5207\u6362\u5173\u8054\u9879\u76EE",`\u5C06\u4EFB\u52A1\u4ECE"${e.project}"\u79FB\u52A8\u5230"${r}"\uFF1F\u6B64\u64CD\u4F5C\u4F1A\u642C\u8FC1\u4EFB\u52A1\u6587\u4EF6\u5939\u5E76\u66F4\u65B0\u6240\u6709\u5173\u8054\u94FE\u63A5\u3002`,"\u786E\u8BA4\u5207\u6362")!=="confirm"){await this.refresh();return}try{await new N(this.app).updateTaskProject({task:e,project:r}),new y.Notice(`\u4EFB\u52A1\u5DF2\u5207\u6362\u5230\u9879\u76EE"${r}"\u3002`),await this.refresh(),await this.actions.validateVault()}catch(a){let i=a instanceof Error?a.message:String(a);new y.Notice(`\u5207\u6362\u9879\u76EE\u5931\u8D25\uFF1A${i}`),console.error("AI Knowledge: update task project failed",a)}}async openWorkflowProjectsModal(e){let r=await new oe(this.app).listProjects(),s=e.projects.length>0?e.projects:e.project?[e.project]:[];new Fn(this.app,r.map(a=>a.name),s,a=>{this.confirmAndUpdateWorkflowProjects(e,a)}).open()}async confirmAndUpdateWorkflowProjects(e,r){let s=ui(r);if(s.length===0){new y.Notice("Workflow \u81F3\u5C11\u9700\u8981\u4FDD\u7559\u4E00\u4E2A\u5173\u8054\u9879\u76EE\u3002");return}if(!(ui(e.projects.length>0?e.projects:e.project?[e.project]:[]).join("\0")===s.join("\0")||await Ie(this.app,"\u4FEE\u6539 workflow \u5173\u8054\u9879\u76EE",`\u5C06 workflow \u5173\u8054\u9879\u76EE\u6539\u4E3A\uFF1A${s.join("\u3001")}\uFF1F\u6B64\u64CD\u4F5C\u4F1A\u66F4\u65B0 workflow \u5165\u53E3\u548C\u4EFB\u52A1\u677F\u6587\u672C\uFF0C\u4E0D\u4F1A\u79FB\u52A8 workflow \u76EE\u5F55\u3002`,"\u786E\u8BA4\u4FEE\u6539")!=="confirm"))try{await new N(this.app).updateWorkflowProjects({task:e,projects:s}),new y.Notice("Workflow \u5173\u8054\u9879\u76EE\u5DF2\u66F4\u65B0\u3002"),await this.refresh(),await this.actions.validateVault()}catch(o){let l=o instanceof Error?o.message:String(o);new y.Notice(`\u4FEE\u6539 workflow \u5173\u8054\u9879\u76EE\u5931\u8D25\uFF1A${l}`),console.error("AI Knowledge: update workflow projects failed",o)}}openTaskUploadModal(e){new Rn(this.app,async r=>{try{let s=await new Lr(this.app).uploadFiles(e,r);new y.Notice(`\u5DF2\u590D\u5236 ${s.copiedFiles} \u4E2A\u6587\u4EF6\u5230 ${s.targetRoot}\u3002`),await this.refresh(),await this.actions.validateVault()}catch(s){let a=s instanceof Error?s.message:String(s);new y.Notice(`\u4E0A\u4F20\u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: upload task attachment failed",s)}}).open()}};function vp(n,t,e,r){let s=n.dueDate;switch(t){case"any":return!0;case"none":return!s;case"on":return e?s===e:!0;case"by":return e?s!==null&&s<=e:!0;case"from":return e?s!==null&&s>=e:!0;case"between":return s?e&&r?s>=e&&s<=r:e?s>=e:r?s<=r:!0:!1}}function yp(n,t){return Number.isFinite(n)?Math.min(Math.max(1,Math.floor(n)),t):1}function di(n,t,e){let r=n==="on"||n==="by"||n==="from"||n==="between",s=n==="between";t.toggleClass("ai-knowledge-hidden",!r),e.toggleClass("ai-knowledge-hidden",!s)}function Tp(n,t){switch(t){case"any":return!0;case"general":return n.taskScope==="general";case"project":return n.taskScope==="project";case"workflow":return n.taskScope==="workflow"}}function te(n,t,e,r,s=""){let a=n.createEl("button",{cls:s?`ai-knowledge-task-link-icon ${s}`:"ai-knowledge-task-link-icon",attr:{"aria-label":e,title:r}});return(0,y.setIcon)(a,t),a}function xp(n){let t=[],e=!1;for(let r of n){let s=r.trimStart();if(s.startsWith(">")){e=!0;let a=s.replace(/^>\s*/,"");a&&!a.startsWith("[!")&&t.push(a.replace(/^-\s*/,""))}else e&&s===""&&(e=!1)}return t}function pi(n){return(n.text.split(`
`)[0]??n.text).replace(/\[\[[^\]]+]]/g,"").replace(/\[[^\]]*]\([^)]+\)/g,"").replace(/\s*(输入|workflow|Workflow|链接|link)?\s*[：:]\s*$/g,"").replace(/\s+/g," ").trim()}function _p(n){let t=n.replace(/\\/g,"/").replace(/\/+$/,"");return(t.split("/").pop()??t).replace(/\.md$/i,"")}function Pp(n){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(n);return t?`${t[2]}-${t[3]}`:n}function Ep(n){let t=n.filter(e=>e.severity==="blocker"||e.severity==="error").length;return t>0?`${t} blocking`:`${n.length} issues`}function bp(){return new y.Notice("Skill actions are not wired."),Promise.resolve()}function Sp(n,t){let e=t.trim().toLowerCase();return e?n.text.toLowerCase().includes(e)||(n.taskId??"").toLowerCase().includes(e)||(n.dueDate??"").includes(e):!0}function Ap(n,t){let e=t.trim().toLowerCase();return e?[n.project??"",...n.projects].some(r=>r.toLowerCase().includes(e)):!0}function jp(n,t){let e=n.createSpan({cls:"ai-knowledge-task-meta-tag"+(t.length===0?" ai-knowledge-task-tag-empty":""),attr:{title:t.length>0?`\u5173\u8054\u9879\u76EE\uFF1A${t.join("\u3001")}`:"\u672A\u5173\u8054\u9879\u76EE"}});e.createSpan({text:"\u9879\u76EE",cls:"ai-knowledge-task-meta-label"}),e.createSpan({text:t.length>0?t[0]:"\u672A\u5173\u8054",cls:"ai-knowledge-task-meta-value"}),t.length>1&&e.createSpan({text:`+${t.length-1}`,cls:"ai-knowledge-task-meta-count"})}function ui(n){let t=[],e=new Set;for(let r of n){let s=r.trim();!s||e.has(s)||(e.add(s),t.push(s))}return t}var Rn=class extends y.Modal{constructor(e,r){super(e);this.onUpload=r}onOpen(){let{contentEl:e}=this;e.empty(),e.addClass("ai-knowledge-wps-modal"),e.createEl("h2",{text:"\u4E0A\u4F20\u5230\u4EFB\u52A1 inputs"}),e.createEl("p",{text:"\u9009\u62E9\u672C\u673A\u6587\u4EF6\u6216\u6587\u4EF6\u5939\uFF0C\u63D2\u4EF6\u4F1A\u590D\u5236\u5230\u5F53\u524D\u4EFB\u52A1\u7684 inputs/ \u76EE\u5F55\u3002"});let r=fi(e,!1),s=fi(e,!0),a=e.createDiv({cls:"ai-knowledge-wps-modal-footer"}),i=a.createEl("button",{text:"\u9009\u62E9\u6587\u4EF6",cls:"mod-cta"}),o=a.createEl("button",{text:"\u9009\u62E9\u6587\u4EF6\u5939"}),l=a.createEl("button",{text:"\u53D6\u6D88"}),c=d=>{!d||d.length===0||(this.close(),this.onUpload(d))};i.addEventListener("click",()=>r.click()),o.addEventListener("click",()=>s.click()),r.addEventListener("change",()=>c(r.files)),s.addEventListener("change",()=>c(s.files)),l.addEventListener("click",()=>{this.close()})}};function fi(n,t){let e=n.createEl("input",{attr:{type:"file",multiple:"true"}});return e.addClass("ai-knowledge-hidden"),t&&(e.setAttribute("webkitdirectory",""),e.setAttribute("directory","")),e}var Fn=class extends y.Modal{constructor(e,r,s,a){super(e);this.projects=r;this.onSave=a;this.selectedProjects=new Set(s)}onOpen(){let{contentEl:e}=this;e.empty(),e.addClass("ai-knowledge-wps-modal"),e.createEl("h2",{text:"\u7F16\u8F91 workflow \u5173\u8054\u9879\u76EE"});let r=e.createEl("input",{cls:"ai-knowledge-project-search",attr:{type:"search",placeholder:"\u641C\u7D22\u9879\u76EE","aria-label":"\u641C\u7D22\u9879\u76EE"}}),s=e.createDiv({cls:"ai-knowledge-project-selected"}),a=e.createDiv({cls:"ai-knowledge-project-results"}),i=()=>{s.setText(`\u5DF2\u9009\uFF1A${Array.from(this.selectedProjects).join("\u3001")||"\u65E0"}`),a.empty();let d=r.value.trim().toLowerCase(),p=this.projects.filter(m=>m.toLowerCase().includes(d));for(let m of p.slice(0,80)){let k=a.createEl("label",{cls:"ai-knowledge-project-checkbox"}),x=k.createEl("input",{type:"checkbox"});x.checked=this.selectedProjects.has(m),k.createSpan({text:m}),x.addEventListener("change",()=>{x.checked?this.selectedProjects.add(m):this.selectedProjects.delete(m),i()})}};r.addEventListener("input",i),i();let o=e.createDiv({cls:"ai-knowledge-wps-modal-footer"}),l=o.createEl("button",{text:"\u4FDD\u5B58",cls:"mod-cta"}),c=o.createEl("button",{text:"\u53D6\u6D88"});l.addEventListener("click",()=>{this.onSave(Array.from(this.selectedProjects)),this.close()}),c.addEventListener("click",()=>{this.close()})}};var W=require("obsidian");var Dr=require("obsidian"),Ti=(e=>(e.Default="40-knowledge-base/faq.md",e.Legacy="40-knowledge-base/business-domains/card-system-faq.md",e))(Ti||{}),On="30-projects",Cp=/^##\s+(.+?)\s*$/,Ip=/^回答[：:]\s*(.*)$/,$p=/^更新时间[：:]\s*(.*)$/;var we=class{constructor(t){this.app=t}async listProjects(){return await this.app.vault.adapter.exists(On)?(await this.app.vault.adapter.list(On)).folders.map(e=>e.split("/").pop()).filter(e=>!!e).sort((e,r)=>e.localeCompare(r)):[]}async listFaqEntries(){let t=await this.listFaqPaths(),e=[];for(let r of t){let s=await this.app.vault.adapter.read(r);e.push(...Lp(r,s))}return e.sort(Mp)}async appendFaq(t){let e=yi(t);await this.ensureFaqFile(e,t);let r=await this.app.vault.adapter.read(e),s=r.includes(`\r
`)?`\r
`:`
`,a=Dp(r,vi(t,s),s);return await this.app.vault.adapter.write(e,a),e}async updateFaq(t,e){if((e.category==="card-system"&&Nn(t.path)?t.path:yi(e))!==t.path)throw new Error("Changing FAQ location is not supported.");let s=await this.app.vault.adapter.read(t.path),a=s.includes(`\r
`)?`\r
`:`
`,i=s.split(/\r?\n/),o=Rp(i,t,vi(e,a));return await this.app.vault.adapter.write(t.path,o.join(a)),t.path}async deleteFaq(t){let e=await this.app.vault.adapter.read(t.path),r=e.includes(`\r
`)?`\r
`:`
`,s=e.split(/\r?\n/),a=Fp(s,t);await this.app.vault.adapter.write(t.path,a.join(r).replace(/\s+$/g,"")+r)}async openFaq(t){let e=this.app.vault.getAbstractFileByPath(t.path);if(!(e instanceof Dr.TFile))throw new Error(`FAQ file not found: ${t.path}`);await this.app.workspace.getLeaf(!1).openFile(e,{active:!0,eState:{line:Math.max(0,t.line-1)}})}async listFaqPaths(){let e=this.app.vault.getMarkdownFiles().map(r=>r.path).filter(Op);for(let r of Object.values(Ti))await this.app.vault.adapter.exists(r)&&!e.includes(r)&&e.push(r);return e.sort((r,s)=>r.localeCompare(s))}async ensureFaqFile(t,e){if(await this.app.vault.adapter.exists(t))return;await Bp(this.app,t);let r=e.category==="card-system"?"\u901A\u7528 FAQ":`${e.project??"\u9879\u76EE"} FAQ`;await this.app.vault.create(t,`# ${r}

`)}};function Lp(n,t){let e=t.split(/\r?\n/),r=[],s=null;return e.forEach((a,i)=>{let o=a.match(Cp);if(o){ki(r,n,s),s={question:o[1].trim(),startLine:i+1,lines:[]};return}s&&s.lines.push(a)}),ki(r,n,s),r}function ki(n,t,e){if(!e)return;let r=wi(e.lines,Ip)||"\u672A\u586B\u5199\u56DE\u7B54",s=wi(e.lines,$p)||null;n.push({category:Np(t),path:t,project:Wp(t),question:e.question,answer:r,updatedAt:s,line:e.startLine,endLine:e.startLine+e.lines.length})}function wi(n,t){for(let e of n){let r=e.trim().match(t);if(r)return r[1].trim()}return""}function vi(n,t){let e=new Date().toISOString().slice(0,10);return[`## ${n.question.trim()}`,"",`\u56DE\u7B54\uFF1A${n.answer.trim()}`,"",`\u66F4\u65B0\u65F6\u95F4\uFF1A${e}`,""].join(t)}function Dp(n,t,e){return`${n.replace(/\s+$/g,"")}${e}${e}${t}`}function Rp(n,t,e){let r=t.line-1,s=t.endLine,a=e.replace(/\s+$/g,"").split(/\r?\n/),i=[...n];return i.splice(r,s-r,...a),i}function Fp(n,t){let e=t.line-1,r=t.endLine;for(;r<n.length&&n[r].trim()==="";)r+=1;let s=[...n];return s.splice(e,r-e),s}function yi(n){if(n.category==="card-system")return"40-knowledge-base/faq.md";if(!n.project)throw new Error("Project FAQ requires a project.");return(0,Dr.normalizePath)(`${On}/${n.project}/faq.md`)}function Op(n){return Nn(n)?!0:/^30-projects\/[^/]+\/faq\.md$/.test(n)}function Np(n){return Nn(n)?"card-system":"project"}function Nn(n){return n==="40-knowledge-base/faq.md".toString()||n==="40-knowledge-base/business-domains/card-system-faq.md".toString()}function Wp(n){let t=n.match(/^30-projects\/([^/]+)\/faq\.md$/);return t?t[1]:null}async function Bp(n,t){let e=t.split("/");e.pop();let r="";for(let s of e)r=r?`${r}/${s}`:s,await n.vault.adapter.exists(r)||await n.vault.createFolder(r)}function Mp(n,t){let e=n.updatedAt??"",r=t.updatedAt??"";return e!==r?r.localeCompare(e):n.question.localeCompare(t.question)}var ve=require("obsidian");var Wn=30;function Mn(n,t,e,r=[],s){return new Promise(a=>{new Bn(n,t,e,r,s,a).open()})}var Bn=class extends ve.Modal{constructor(e,r,s,a,i,o){super(e);this.category=r;this.project=s;this.projects=a;this.initialDraft=i;this.resolveResult=o;this.settled=!1;this.selectedProject="";this.question=i?.question??"",this.answer=i?.answer??"",this.selectedProject=s??i?.project??a[0]??""}onOpen(){this.contentEl.empty(),this.contentEl.addClass("ai-knowledge-faq-modal"),this.contentEl.createEl("h2",{text:`${this.initialDraft?"\u7F16\u8F91":"\u65B0\u589E"}${this.category==="card-system"?"\u901A\u7528":"\u9879\u76EE"} FAQ`}),this.category==="project"&&(this.project?this.contentEl.createEl("p",{text:`\u9879\u76EE\uFF1A${this.project}`,cls:"ai-knowledge-muted"}):Kp(this.contentEl,{projects:this.projects,selectedProject:this.selectedProject,onChange:r=>{this.selectedProject=r}})),new ve.Setting(this.contentEl).setName("\u95EE\u9898").addTextArea(r=>{r.inputEl.rows=2,r.setPlaceholder("\u8F93\u5165\u95EE\u9898"),r.setValue(this.question),r.onChange(s=>{this.question=s})}),new ve.Setting(this.contentEl).setName("\u56DE\u7B54").addTextArea(r=>{r.inputEl.rows=7,r.setPlaceholder("\u8F93\u5165\u56DE\u7B54"),r.setValue(this.answer),r.onChange(s=>{this.answer=s})}),new ve.Setting(this.contentEl).addButton(r=>r.setButtonText("\u53D6\u6D88").onClick(()=>this.finish({kind:"cancelled"}))).addButton(r=>r.setButtonText(this.initialDraft?"\u66F4\u65B0 FAQ":"\u4FDD\u5B58 FAQ").setCta().onClick(()=>{let s=this.question.trim(),a=this.answer.trim(),i=this.category==="project"?this.selectedProject.trim():void 0;if(!s||!a){new ve.Notice("\u95EE\u9898\u548C\u56DE\u7B54\u5FC5\u586B\u3002");return}if(this.category==="project"&&!i){new ve.Notice("\u8BF7\u9009\u62E9\u9879\u76EE\u3002");return}this.finish({kind:"submitted",draft:{category:this.category,project:i,question:s,answer:a}})})).settingEl.addClass("ai-knowledge-faq-modal-actions")}onClose(){this.settled||(this.settled=!0,this.resolveResult({kind:"cancelled"})),this.contentEl.empty()}finish(e){this.settled||(this.settled=!0,this.resolveResult(e),this.close())}};function Kp(n,t){let e=n.createDiv({cls:"ai-knowledge-project-picker"});e.createEl("h3",{text:"Project"}),e.createEl("p",{text:"\u4ECE 30-projects/ \u8BFB\u53D6\uFF0CFAQ \u4F1A\u5199\u5165\u6240\u9009\u9879\u76EE\u7684 faq.md\u3002",cls:"ai-knowledge-muted"});let r=e.createEl("input",{cls:"ai-knowledge-project-search",type:"search",attr:{placeholder:"\u641C\u7D22\u9879\u76EE...","aria-label":"\u641C\u7D22\u9879\u76EE"}}),s=e.createDiv({cls:"ai-knowledge-project-selected",text:t.selectedProject?`\u5DF2\u9009\uFF1A${t.selectedProject}`:"\u672A\u9009\u62E9\u9879\u76EE"}),a=e.createDiv({cls:"ai-knowledge-project-results"}),i=()=>{let o=Gp(t.projects,r.value);if(a.empty(),o.length===0){t.selectedProject="",t.onChange(""),s.setText("\u672A\u9009\u62E9\u9879\u76EE"),a.createEl("p",{text:"\u65E0\u5339\u914D\u9879\u76EE",cls:"ai-knowledge-muted"});return}o.includes(t.selectedProject)||(t.selectedProject=o[0],t.onChange(t.selectedProject),s.setText(`\u5DF2\u9009\uFF1A${t.selectedProject}`));for(let l of o.slice(0,Wn)){let c=a.createEl("button",{text:l,cls:"ai-knowledge-project-option"});c.toggleClass("is-selected",l===t.selectedProject),c.addEventListener("click",()=>{t.selectedProject=l,t.onChange(l),s.setText(`\u5DF2\u9009\uFF1A${l}`),i()})}zp(a,o.length)};r.addEventListener("input",i),i()}function Gp(n,t){let e=t.trim().toLowerCase().split(/\s+/).filter(Boolean);return e.length===0?n:n.filter(r=>{let s=r.toLowerCase();return e.every(a=>qp(s,a))})}function qp(n,t){let e=0;for(let r of t){if(e=n.indexOf(r,e),e===-1)return!1;e+=1}return!0}function zp(n,t){t<=Wn||n.createEl("p",{text:`\u663E\u793A\u524D ${Wn} \u4E2A\uFF0C\u5171 ${t} \u4E2A\u5339\u914D\uFF1B\u7EE7\u7EED\u8F93\u5165\u53EF\u7F29\u5C0F\u8303\u56F4\u3002`,cls:"ai-knowledge-project-limit-hint"})}var Fr="ai-knowledge-faq",xi=(r=>(r.All="all",r.Project="project",r.General="card-system",r))(xi||{}),Up={all:"\u5168\u90E8",project:"\u9879\u76EE FAQ","card-system":"\u901A\u7528 FAQ"},Rr=class extends W.ItemView{constructor(e,r){super(e);this.actions=r;this.filterMode="all";this.searchText="";this.isRefreshing=!1}getViewType(){return Fr}getDisplayText(){return"AI \u77E5\u8BC6 FAQ"}async onOpen(){await this.refresh()}async refresh(){if(!this.isRefreshing){this.isRefreshing=!0,this.renderLoading();try{let e=await new we(this.app).listFaqEntries();this.renderFaq(e)}catch(e){let r=e instanceof Error?e.message:String(e);new W.Notice(`FAQ \u5237\u65B0\u5931\u8D25\uFF1A${r}`),this.renderError(r)}finally{this.isRefreshing=!1}}}renderLoading(){let e=this.contentEl;e.empty(),e.addClass("ai-knowledge-faq-view"),e.createEl("p",{text:"\u5237\u65B0\u4E2D...",cls:"ai-knowledge-muted"})}renderError(e){let r=this.contentEl;r.empty(),r.addClass("ai-knowledge-faq-view"),r.createEl("p",{text:e,cls:"ai-knowledge-error"})}renderFaq(e){let r=this.contentEl;r.empty(),r.addClass("ai-knowledge-faq-view"),this.renderMainTabs(r);let s=r.createDiv({cls:"ai-knowledge-faq-header"}),a=s.createDiv({cls:"ai-knowledge-faq-title"});a.createEl("h2",{text:"FAQ"}),a.createEl("p",{text:"\u9879\u76EE FAQ \u4E0E\u901A\u7528 FAQ \u72EC\u7ACB\u7BA1\u7406\uFF0C\u4E0D\u5199\u5165\u4EFB\u52A1\u677F\u3002",cls:"ai-knowledge-muted"});let i=s.createDiv({cls:"ai-knowledge-faq-actions"});this.addHeaderButton(i,"\u65B0\u589E\u901A\u7528 FAQ","badge-plus",()=>this.addGeneralFaq()),this.addHeaderButton(i,"\u65B0\u589E\u9879\u76EE FAQ","folder-plus",()=>this.addProjectFaq()),this.addHeaderButton(i,"\u5237\u65B0","refresh-cw",()=>this.refresh()),this.renderControls(r);let o=e.filter(l=>Yp(l,this.filterMode)).filter(l=>Hp(l,this.searchText));this.renderMetrics(r,e,o.length),this.renderEntryList(r,o)}renderMainTabs(e){let r=e.createDiv({cls:"ai-knowledge-main-tabs"}),s=r.createEl("button",{text:"Tasks"}),a=r.createEl("button",{text:"Projects"}),i=r.createEl("button",{text:"FAQ"});s.addEventListener("click",()=>{this.actions.openTasks()}),a.addEventListener("click",()=>{this.actions.openProjects()}),i.addClass("mod-cta")}renderControls(e){let r=e.createDiv({cls:"ai-knowledge-faq-controls"}),s=r.createDiv({cls:"ai-knowledge-type-filter-group"});s.createSpan({text:"\u5206\u7C7B:",cls:"ai-knowledge-sort-label"});let a=s.createEl("select",{cls:"ai-knowledge-faq-filter-mode",attr:{"aria-label":"FAQ \u5206\u7C7B\u7B5B\u9009",title:"FAQ \u5206\u7C7B\u7B5B\u9009"}});for(let o of Object.values(xi))a.createEl("option",{text:Up[o],value:o});a.value=this.filterMode,a.addEventListener("change",()=>{this.filterMode=a.value,this.refresh()});let i=r.createEl("input",{cls:"ai-knowledge-faq-search",type:"search",attr:{placeholder:"\u641C\u7D22\u95EE\u9898\u3001\u56DE\u7B54\u3001\u9879\u76EE","aria-label":"\u641C\u7D22 FAQ"}});i.value=this.searchText,i.addEventListener("input",()=>{this.searchText=i.value,this.refresh()})}renderMetrics(e,r,s){let a=e.createDiv({cls:"ai-knowledge-faq-metrics"});this.renderMetric(a,"\u5F53\u524D\u663E\u793A",s.toString()),this.renderMetric(a,"\u5168\u90E8 FAQ",r.length.toString()),this.renderMetric(a,"\u901A\u7528 FAQ",r.filter(i=>i.category==="card-system").length.toString()),this.renderMetric(a,"\u9879\u76EE FAQ",r.filter(i=>i.category==="project").length.toString())}renderMetric(e,r,s){let a=e.createDiv({cls:"ai-knowledge-metric"});a.createDiv({text:s,cls:"ai-knowledge-metric-value"}),a.createDiv({text:r,cls:"ai-knowledge-metric-label"})}renderEntryList(e,r){let s=e.createDiv({cls:"ai-knowledge-faq-list"});if(r.length===0){s.createEl("p",{text:"\u6682\u65E0 FAQ\u3002",cls:"ai-knowledge-muted"});return}for(let a of r)this.renderEntryCard(s,a)}renderEntryCard(e,r){let s=e.createDiv({cls:"ai-knowledge-faq-card"}),a=s.createDiv({cls:"ai-knowledge-faq-card-top"});a.createDiv({cls:"ai-knowledge-faq-badges"}).createSpan({text:r.category==="card-system"?"\u901A\u7528":"\u9879\u76EE",cls:`ai-knowledge-faq-badge ai-knowledge-faq-${r.category}`});let o=a.createDiv({cls:"ai-knowledge-faq-icon-actions"}),l=o.createEl("button",{cls:"ai-knowledge-task-link-icon",attr:{"aria-label":`\u6253\u5F00 FAQ\uFF1A${r.question}`,title:"\u6253\u5F00 FAQ"}});(0,W.setIcon)(l,"external-link"),l.addEventListener("click",()=>{this.openEntry(r)});let c=o.createEl("button",{cls:"ai-knowledge-task-link-icon",attr:{"aria-label":`\u7F16\u8F91 FAQ\uFF1A${r.question}`,title:"\u7F16\u8F91 FAQ"}});(0,W.setIcon)(c,"pencil"),c.addEventListener("click",()=>{this.editEntry(r)});let d=o.createEl("button",{cls:"ai-knowledge-task-link-icon",attr:{"aria-label":`\u5220\u9664 FAQ\uFF1A${r.question}`,title:"\u5220\u9664 FAQ"}});(0,W.setIcon)(d,"trash-2"),d.addEventListener("click",()=>{this.deleteEntry(r)}),s.createEl("h3",{text:r.question,cls:"ai-knowledge-faq-question"}),s.createEl("p",{text:r.answer,cls:"ai-knowledge-faq-answer"});let p=s.createDiv({cls:"ai-knowledge-faq-meta"});p.createSpan({text:r.project??"\u901A\u7528"}),p.createSpan({text:r.updatedAt?`\u66F4\u65B0\uFF1A${r.updatedAt}`:"\u672A\u8BB0\u5F55\u66F4\u65B0\u65F6\u95F4"}),p.createSpan({text:r.path})}addHeaderButton(e,r,s,a){let i=e.createEl("button",{cls:"ai-knowledge-faq-action-button",attr:{title:r}});(0,W.setIcon)(i.createSpan(),s),i.createSpan({text:r}),i.addEventListener("click",()=>{a()})}async addProjectFaq(){let r=await new we(this.app).listProjects();if(r.length===0){new W.Notice("\u672A\u627E\u5230\u9879\u76EE\u76EE\u5F55\u3002");return}await this.addFaq("project",void 0,r)}async addGeneralFaq(){await this.addFaq("card-system")}async addFaq(e,r,s=[]){let a=await Mn(this.app,e,r,s);if(a.kind==="submitted")try{let i=await new we(this.app).appendFaq(a.draft);new W.Notice(`FAQ \u5DF2\u4FDD\u5B58\uFF1A${i}`),await this.refresh()}catch(i){let o=i instanceof Error?i.message:String(i);new W.Notice(`\u4FDD\u5B58 FAQ \u5931\u8D25\uFF1A${o}`),console.error("AI Knowledge: save FAQ failed",i)}}async editEntry(e){let r=await Mn(this.app,e.category,e.project??void 0,[],{category:e.category,project:e.project??void 0,question:e.question,answer:e.answer});if(r.kind==="submitted")try{let s=await new we(this.app).updateFaq(e,r.draft);new W.Notice(`FAQ \u5DF2\u66F4\u65B0\uFF1A${s}`),await this.refresh()}catch(s){let a=s instanceof Error?s.message:String(s);new W.Notice(`\u66F4\u65B0 FAQ \u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: update FAQ failed",s)}}async deleteEntry(e){if(await Ie(this.app,"\u5220\u9664 FAQ",`\u786E\u8BA4\u5220\u9664\u201C${e.question}\u201D\uFF1F\u6B64\u64CD\u4F5C\u4F1A\u4ECE ${e.path} \u4E2D\u79FB\u9664\u8BE5\u6761 FAQ\u3002`,"\u5220\u9664")==="confirm")try{await new we(this.app).deleteFaq(e),new W.Notice("FAQ \u5DF2\u5220\u9664\u3002"),await this.refresh()}catch(s){let a=s instanceof Error?s.message:String(s);new W.Notice(`\u5220\u9664 FAQ \u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: delete FAQ failed",s)}}async openEntry(e){try{await new we(this.app).openFaq(e)}catch(r){let s=r instanceof Error?r.message:String(r);new W.Notice(`\u6253\u5F00 FAQ \u5931\u8D25\uFF1A${s}`),console.error("AI Knowledge: open FAQ failed",r)}}};function Yp(n,t){switch(t){case"all":return!0;case"project":return n.category==="project";case"card-system":return n.category==="card-system"}}function Hp(n,t){let e=t.trim().toLowerCase();return e?[n.question,n.answer,n.project??"",n.path].some(r=>r.toLowerCase().includes(e)):!0}var ce=require("obsidian");var Gt="ai-knowledge-projects",Kt=class extends ce.ItemView{constructor(e,r){super(e);this.actions=r;this.searchDraft="";this.searchQuery="";this.isRefreshing=!1}getViewType(){return Gt}getDisplayText(){return"AI \u77E5\u8BC6\u9879\u76EE"}async onOpen(){await this.refresh()}async refresh(){if(!this.isRefreshing){this.isRefreshing=!0,this.renderLoading();try{let e=await new oe(this.app).listProjects();this.renderProjects(e)}catch(e){let r=e instanceof Error?e.message:String(e);new ce.Notice(`\u9879\u76EE\u5237\u65B0\u5931\u8D25\uFF1A${r}`),this.renderError(r)}finally{this.isRefreshing=!1}}}renderLoading(){let e=this.contentEl;e.empty(),e.addClass("ai-knowledge-project-view"),e.createEl("p",{text:"\u5237\u65B0\u4E2D...",cls:"ai-knowledge-muted"})}renderError(e){let r=this.contentEl;r.empty(),r.addClass("ai-knowledge-project-view"),r.createEl("p",{text:e,cls:"ai-knowledge-error"})}renderProjects(e,r={}){let s=this.contentEl;s.empty(),s.addClass("ai-knowledge-project-view"),this.renderMainTabs(s);let a=s.createDiv({cls:"ai-knowledge-project-header"}),i=a.createDiv({cls:"ai-knowledge-project-title"});i.createEl("h2",{text:"Projects"}),i.createSpan({text:e.length.toString(),cls:"ai-knowledge-kanban-count"}),a.createEl("p",{text:"\u4ECE\u9879\u76EE links.md \u8BFB\u53D6\u6E90\u7801\u76EE\u5F55\u3002",cls:"ai-knowledge-muted"});let o=s.createDiv({cls:"ai-knowledge-project-controls"}),l=o.createDiv({cls:"ai-knowledge-project-search-wrap"}),c=l.createEl("input",{cls:"ai-knowledge-project-card-search",type:"search",attr:{placeholder:"\u641C\u7D22\u9879\u76EE\u540D\u6216\u8DEF\u5F84","aria-label":"\u641C\u7D22\u9879\u76EE"}}),d=l.createEl("button",{cls:"ai-knowledge-search-clear",attr:{title:"\u6E05\u9664\u641C\u7D22","aria-label":"\u6E05\u9664\u641C\u7D22"}});(0,ce.setIcon)(d,"x"),d.toggleClass("ai-knowledge-hidden",!this.searchDraft);let p=o.createEl("button",{cls:"ai-knowledge-project-refresh",attr:{title:"\u5237\u65B0\u9879\u76EE"}});(0,ce.setIcon)(p.createSpan(),"refresh-cw"),p.createSpan({text:"\u5237\u65B0"}),p.addEventListener("click",()=>{this.refresh()}),c.value=this.searchDraft,c.addEventListener("input",()=>{this.searchDraft=c.value,d.toggleClass("ai-knowledge-hidden",!this.searchDraft),this.searchDraft.trim()===""&&this.searchQuery!==""&&(this.searchQuery="",this.renderProjects(e,{focusSearch:!0}))}),c.addEventListener("keydown",x=>{x.key!=="Enter"||x.isComposing||(this.searchDraft=c.value,this.searchQuery=c.value,this.renderProjects(e,{focusSearch:!0}))}),d.addEventListener("click",()=>{this.searchDraft="",this.searchQuery="",c.value="",d.addClass("ai-knowledge-hidden"),this.renderProjects(e,{focusSearch:!0})}),r.focusSearch&&window.setTimeout(()=>{c.focus(),c.setSelectionRange(c.value.length,c.value.length)},0);let m=e.filter(x=>Zp(x,this.searchQuery)),k=s.createDiv({cls:"ai-knowledge-project-card-list"});if(m.length===0){k.createEl("p",{text:"\u6682\u65E0\u5339\u914D\u9879\u76EE\u3002",cls:"ai-knowledge-muted"});return}for(let x of m)this.renderProjectCard(k,x)}renderMainTabs(e){let r=e.createDiv({cls:"ai-knowledge-main-tabs"}),s=r.createEl("button",{text:"Tasks"}),a=r.createEl("button",{text:"Projects"}),i=r.createEl("button",{text:"FAQ"});s.addEventListener("click",()=>{this.actions.openTasks()}),a.addClass("mod-cta"),i.addEventListener("click",()=>{this.actions.openFaq()})}renderProjectCard(e,r){let s=e.createDiv({cls:"ai-knowledge-task-card ai-knowledge-priority-p4 ai-knowledge-project-card"}),a=s.createDiv({cls:"ai-knowledge-task-card-top"});a.createDiv({cls:"ai-knowledge-task-card-badges"}).createSpan({text:"\u9879\u76EE",cls:"ai-knowledge-task-type-badge ai-knowledge-task-type-project"});let o=a.createDiv({cls:"ai-knowledge-task-icon-actions"}),l=o.createEl("button",{cls:"ai-knowledge-task-link-icon",attr:{"aria-label":`\u6253\u5F00 Index\uFF1A${r.name}`,title:`\u6253\u5F00 ${r.path}/index.md`}});(0,ce.setIcon)(l,"book-open"),l.addEventListener("click",()=>{this.app.workspace.openLinkText(`${r.path}/index.md`,"").catch(d=>{let p=d instanceof Error?d.message:String(d);new ce.Notice(`\u6253\u5F00\u9879\u76EE\u5931\u8D25\uFF1A${p}`)})}),this.renderActionButton(o,"Codex","app-window",r,()=>this.actions.openProjectInCodex(r)),this.actions.isKcworkEnabled()&&this.renderActionButton(o,"KCwork","layout-panel-left",r,()=>this.actions.openProjectInKcwork(r)),this.renderActionButton(o,"Custom CLI","terminal",r,()=>this.actions.openProjectInCustomCli(r)),s.createDiv({text:r.name,cls:"ai-knowledge-task-card-title"});let c=s.createDiv({cls:"ai-knowledge-task-card-meta"});c.createSpan({text:r.path,cls:"ai-knowledge-task-meta-tag"}),c.createSpan({text:r.sourcePath??"\u672A\u8BB0\u5F55\u6E90\u7801\u8DEF\u5F84",cls:r.sourcePath?"ai-knowledge-task-meta-tag":"ai-knowledge-project-source-missing"})}renderActionButton(e,r,s,a,i){let o=e.createEl("button",{cls:"ai-knowledge-task-link-icon",attr:{"aria-label":`${r}: ${a.name}`,title:`${r}: ${a.path}`}});(0,ce.setIcon)(o,s),o.addEventListener("click",()=>{i()})}};function Zp(n,t){let e=t.trim().toLowerCase();return e?[n.name,n.path,n.linksPath,n.sourcePath??""].some(r=>r.toLowerCase().includes(e)):!0}var ye=require("obsidian"),Pi=require("child_process"),Br=require("fs"),Ei=require("os"),zn=require("path");var Le=class{constructor(t){this.app=t}async openVaultInTerminal(t,e,r,s){Or(e);let a=this.getVaultRoot(r),i=Vn(a,t);if(e==="obsidian")await this.openInObsidianTerminal(a,i,!0,void 0,void 0,s);else{let o=Kn(t),l=Gn({terminalApp:e,absoluteWorkspacePath:a,shellCommand:i,aiCommand:o,submitCommand:!0});await qn(l)}return{workspacePath:".",absoluteWorkspacePath:a,command:i}}async openAbsolutePathInTerminal(t,e,r,s,a){Or(r);let i=t.replace(/\/+$/,""),o=Vn(i,e);if(r==="obsidian")await this.openInObsidianTerminal(i,o,!0,void 0,s,a);else{let l=Kn(e),c=Gn({terminalApp:r,absoluteWorkspacePath:i,shellCommand:o,aiCommand:l,submitCommand:!0});await qn(c)}return{workspacePath:i,absoluteWorkspacePath:i,command:o}}async openInTerminal(t){Or(t.terminalApp);let e=t.workspacePathOverride??Qp(t.file),r=this.getVaultRoot(t.vaultRootOverride),s=e?`${r}/${e}`:r,a=t.includeFileReference&&t.file instanceof ye.TFile?t.fileReferenceOverride??t.file.path:void 0,i=t.submitCommand??!0,o=Vn(s,t.command,a,i);if(t.terminalApp==="obsidian")await this.openInObsidianTerminal(s,o,i,i?void 0:a,t.title,t.sourceEntryPath??(t.file instanceof ye.TFile?t.file.path:void 0));else{let l=i||t.terminalApp==="warp",c=Kn(t.command,l?a:void 0),d=Gn({terminalApp:t.terminalApp,absoluteWorkspacePath:s,shellCommand:o,aiCommand:c,submitCommand:i,fileReference:a});await qn(d)}return{workspacePath:e||".",absoluteWorkspacePath:s,command:o}}async openInObsidianTerminal(t,e,r,s,a,i){if(!this.app.plugins.plugins.terminal)throw new Error("Install and enable the Terminal community plugin to open an integrated terminal, or use Copy to Agent and run your CLI manually. macOS users can also select iTerm or Warp in this plugin's settings.");this.activateExistingTerminalTargetLeaf();let l=this.app.workspace.getLeavesOfType("terminal:terminal");this.app.commands.executeCommandById("terminal:open-terminal.integrated.root");let c=await this.waitForNewTerminalLeaf(l.length);if(!c)throw new Error("Timed out waiting for Obsidian Terminal to open.");let d=c.view;if(a||i){d.state={...d.state,...a?{userTitle:a}:{},...i?{aiKnowledgeEntryPath:i}:{}};let k=c.tabHeaderInnerEl;k&&a&&(k.textContent=a)}await this.waitForTerminalEmulator(d);let p=d.emulator.terminal;r?p.paste(e+`
`):(p.paste(e+`
`),s&&(await sleep(500),p.paste(`@${s} `)))}activateExistingTerminalTargetLeaf(){let t=this.app.workspace.getLeavesOfType("terminal:terminal")[0];t&&this.app.workspace.setActiveLeaf(t,{focus:!0})}async waitForNewTerminalLeaf(t){for(let e=0;e<20;e++){await sleep(100);let r=this.app.workspace.getLeavesOfType("terminal:terminal");if(r.length>t)return r[r.length-1]}return null}async waitForTerminalEmulator(t){for(let e=0;e<30;e++){if(t.emulator?.terminal)return;await sleep(100)}throw new Error("Timed out waiting for terminal emulator to initialize.")}getVaultRoot(t){let e=t?.trim();if(e)return e.replace(/\/+$/,"");let s=this.app.vault.adapter.getBasePath?.();if(!s)throw new Error("Vault root path is unavailable. Configure Vault root in plugin settings.");return s.replace(/\/+$/,"")}};function Qp(n){let e=(n instanceof ye.TFile?su(n.path):n.path).split("/").filter(Boolean);return Jp(e)?e.slice(0,6).join("/"):e[0]==="20-workflows".toString()&&e[1]?`20-workflows/${e[1]}`:e[0]==="30-projects".toString()&&e[1]?`30-projects/${e[1]}`:""}function Jp(n){return n[0]==="30-projects".toString()&&!!n[1]&&n[2]==="inputs".toString()&&!!n[3]&&!!n[4]&&!!n[5]}function Vn(n,t,e,r=!0){let s=t.trim();if(!s)throw new Error("AI workspace command is empty. Configure the CLI path in plugin settings.");let a=e?` ${Nr(`@${e}`)}`:"",i=`${s}${a}`;return r?`cd ${Nr(n)} && ${i}`:`cd ${Nr(n)} && ${s}`}function Kn(n,t){let e=n.trim();if(!e)throw new Error("AI workspace command is empty. Configure the CLI path in plugin settings.");let r=t?` ${Nr(`@${t}`)}`:"";return`${e}${r}`}function Or(n){if(!ye.Platform.isDesktopApp)throw new Error("AI terminal workspaces require Obsidian desktop.");if(n!=="obsidian"&&!ye.Platform.isMacOS)throw new Error("iTerm and Warp launchers are available only on macOS. Select Obsidian terminal in settings or use Copy to Agent.");if(ye.Platform.isWin)throw new Error("Automatic terminal launch is not supported on Windows. Use Copy to Agent and run your CLI manually.")}function Gn(n){return Or(n.terminalApp),n.terminalApp==="warp"?eu(n.absoluteWorkspacePath,n.aiCommand,n.submitCommand,n.fileReference):Xp(n.shellCommand,n.submitCommand,n.fileReference)}function Xp(n,t,e){return['tell application "iTerm"',"activate","create window with default profile","tell current session of current window",...t||!e?[`write text ${Wr(n)}`]:[`write text ${Wr(n)}`,"delay 1",`write text ${Wr(`@${e} `)} newline NO`],"end tell","end tell"].join(`
`)}function eu(n,t,e,r){let s=tu(n,t);return[`open location ${Wr(nu(s))}`].join(`
`)}function tu(n,t){let e=(0,zn.join)((0,Ei.homedir)(),".warp","launch_configurations"),r=(0,zn.join)(e,"ai-knowledge-workflow.yaml");return(0,Br.mkdirSync)(e,{recursive:!0}),(0,Br.writeFileSync)(r,ru(n,t),"utf8"),r}function ru(n,t){return["---","name: AI Knowledge Workflow","windows:","  - tabs:","      - title: AI Agent","        layout:",`          cwd: ${_i(n)}`,"          commands:",`            - exec: ${_i(t)}`,""].join(`
`)}function nu(n){return`warp://launch/${encodeURI(n)}`}function _i(n){return JSON.stringify(n)}function qn(n){return ye.Platform.isMacOS?new Promise((t,e)=>{let r=(0,Pi.spawn)("osascript",["-e",n],{shell:!1,stdio:["ignore","pipe","pipe"]}),s="";r.stderr.on("data",a=>{s+=a.toString("utf8")}),r.on("error",a=>{e(a)}),r.on("close",a=>{if(a===0){t();return}e(new Error(s.trim()||`osascript exited with code ${a??"unknown"}.`))})}):Promise.reject(new Error("AppleScript automation requires macOS."))}function su(n){let t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Nr(n){return`'${n.replace(/'/g,"'\\''")}'`}function Wr(n){return`"${n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}var bi=require("obsidian"),Si=require("electron");function Ai(){if(!bi.Platform.isDesktopApp)throw new Error("External applications are available only in Obsidian desktop.");return Si.shell}async function ji(n){let t=await Ai().openPath(n);if(t)throw new Error(t)}async function qt(n){await Ai().openExternal(n)}var Ci=require("fs");async function Ii(n){Yn(n.absoluteWorkspacePath),await Un({absoluteWorkspacePath:n.absoluteWorkspacePath,prompt:`@${n.fileReference} `})}async function $i(n){Yn(n.absoluteWorkspacePath),await Un({absoluteWorkspacePath:n.absoluteWorkspacePath,prompt:n.prompt})}async function Li(n){Yn(n.absoluteWorkspacePath),await Un({absoluteWorkspacePath:n.absoluteWorkspacePath})}function Un(n){return qt(au(n))}function Yn(n){if(!(0,Ci.existsSync)(n))throw new Error(`Codex App workspace folder does not exist: ${n}`)}function au(n){let t=new URLSearchParams;return t.set("path",n.absoluteWorkspacePath),n.prompt&&t.set("prompt",n.prompt),`codex://new?${t.toString()}`}var Di=require("obsidian"),Ri=require("child_process"),Fi=require("fs");async function Hn(n){if(!Di.Platform.isMacOS)throw new Error("KCwork opening is available only on macOS.");try{if(!(0,Fi.statSync)(n.absoluteWorkspacePath).isDirectory())throw new Error("Workspace path is not a folder.")}catch(t){let e=t instanceof Error?t.message:String(t);throw new Error(`KCwork workspace is unavailable: ${e}`)}await navigator.clipboard.writeText(n.absoluteWorkspacePath),await new Promise((t,e)=>{let r=(0,Ri.spawn)("open",["-a","KCwork"],{shell:!1,stdio:["ignore","ignore","pipe"]}),s="";r.stderr.on("data",a=>{s+=a.toString("utf8")}),r.on("error",e),r.on("close",a=>{a===0?t():e(new Error(s.trim()||`KCwork launch exited with code ${a??"unknown"}.`))})})}var Oi=require("path");var Mr=class{constructor(t){this.app=t}async openFile(t){let r=this.app.vault.adapter.getBasePath?.();if(!r)throw new Error("Vault root path is unavailable.");let s=(0,Oi.join)(r,t.path);return await ji(s),s}};var Qn=require("obsidian");var Zn=require("child_process"),Bi=require("obsidian"),iu="xiezuo",ou="/Applications/xiezuo.app",lu=["WPS\u534F\u4F5C","xiezuo"],cu=[[180,70],[160,70],[125,58],[105,58],[145,58],[180,58],[125,92],[180,92]];async function Mi(n){if(!Bi.Platform.isMacOS)throw new Error("WPS collaboration integration is available only on macOS.");return n.url?(await Ni(["-a",iu,n.url]),{copiedSearchText:!1,filledSearchText:!1}):(await navigator.clipboard.writeText(n.label),await Ni([ou]),{copiedSearchText:!0,filledSearchText:await du(pu(n.label)).then(()=>!0).catch(e=>(console.warn("AI Knowledge: WPS search fill automation failed",e),!1))})}function Ni(n){return new Promise((t,e)=>{let r=(0,Zn.spawn)("open",n,{shell:!1,stdio:["ignore","pipe","pipe"]}),s="";r.stderr.on("data",a=>{s+=a.toString("utf8")}),r.on("error",a=>{e(a)}),r.on("close",a=>{if(a===0){t();return}e(new Error(s.trim()||`open exited with code ${a??"unknown"}.`))})})}function du(n){return new Promise((t,e)=>{let r=(0,Zn.spawn)("osascript",["-e",n],{shell:!1,stdio:["ignore","pipe","pipe"]}),s="";r.stderr.on("data",a=>{s+=a.toString("utf8")}),r.on("error",a=>{e(a)}),r.on("close",a=>{if(a===0){t();return}e(new Error(s.trim()||`osascript exited with code ${a??"unknown"}.`))})})}function pu(n){let t=lu.map(r=>Wi(r)).join(", "),e=cu.map(([r,s])=>`{${r}, ${s}}`).join(", ");return`
set processNames to {${t}}
set searchFieldClickOffsets to {${e}}
set searchText to ${Wi(n)}
set the clipboard to searchText
tell application "System Events"
  repeat with processName in processNames
    if exists process (processName as text) then
      tell process (processName as text)
        set frontmost to true
        repeat 30 times
          if (count of windows) > 0 then exit repeat
          delay 0.2
        end repeat
        if (count of windows) is 0 then error "WPS window was not ready."

        set windowPosition to position of window 1
        set searchField to my findWpsSearchField(window 1)
        if searchField is not missing value then
          my pasteIntoWpsSearchField(searchField)
          return
        end if

        -- WPS has no stable accessibility identifier for the search box, so retry likely top-bar positions.
        repeat with clickOffset in searchFieldClickOffsets
          click at {(item 1 of windowPosition) + (item 1 of clickOffset), (item 2 of windowPosition) + (item 2 of clickOffset)}
          delay 0.2
          try
            set focusedElement to value of attribute "AXFocusedUIElement"
            set focusedRole to role of focusedElement
            if focusedRole is "AXTextField" then
              set focusedPosition to position of focusedElement
              set focusedSize to size of focusedElement
              set focusedMidY to (item 2 of focusedPosition) + ((item 2 of focusedSize) / 2)
              if focusedMidY < ((item 2 of windowPosition) + ((item 2 of windowSize) / 2)) then
                keystroke "a" using command down
                delay 0.05
                keystroke "v" using command down
                return
              end if
            end if
          end try
        end repeat
        error "WPS search field was not focused."
      end tell
      return
    end if
  end repeat
end tell

on pasteIntoWpsSearchField(searchField)
  tell application "System Events"
    tell searchField
      set fieldPosition to position
      set fieldSize to size
    end tell
    click at {(item 1 of fieldPosition) + ((item 1 of fieldSize) / 2), (item 2 of fieldPosition) + ((item 2 of fieldSize) / 2)}
    delay 0.1
    keystroke "a" using command down
    delay 0.05
    keystroke "v" using command down
  end tell
end pasteIntoWpsSearchField

on findWpsSearchField(rootElement)
  tell application "System Events"
    try
      set elementRole to role of rootElement
      if elementRole is "AXTextField" then
        return rootElement
      end if
    end try

    try
      repeat with childElement in UI elements of rootElement
        set matchedElement to my findWpsSearchField(childElement)
        if matchedElement is not missing value then return matchedElement
      end repeat
    end try
  end tell

  return missing value
end findWpsSearchField
`.trim()}function Wi(n){return`"${n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}function Jn(n){return Qn.Platform.isDesktopApp&&(n==="feishu"||Qn.Platform.isMacOS)}async function Vi(n,t){if(!Jn(n))throw new Error("\u5F53\u524D\u5E73\u53F0\u4E0D\u652F\u6301\u6253\u5F00\u6B64\u6765\u6E90\u5E94\u7528\u3002");let e=t.url&&uu(t.url,n)?t.url:null;if(n==="wps"){let a=await Mi({...t,url:e});return a.filledSearchText?"filled-search-text":a.copiedSearchText?"copied-search-text":"direct"}if(e)return await qt(e),"direct";let r=t.label.trim();if(!r)throw new Error("\u8BF7\u5148\u586B\u5199\u6765\u6E90\u540D\u79F0\u3002");let s=await navigator.clipboard.writeText(r).then(()=>!0,()=>!1);return await qt(`feishu://applink.feishu.cn/client/search/open?query=${encodeURIComponent(r)}`),s?"search-with-copied-text":"search"}function uu(n,t){let e;try{e=new URL(n)}catch{return!1}let r=e.protocol==="feishu:"||e.protocol==="lark:"||["feishu.cn","larksuite.com"].some(s=>e.hostname===s||e.hostname.endsWith(`.${s}`));return t==="feishu"?r&&["https:","http:","feishu:","lark:"].includes(e.protocol):!r&&["https:","http:","wps:","kdocs:","xiezuo:"].includes(e.protocol)}var zt=require("obsidian");var Xn=class extends zt.Modal{constructor(e,r){super(e);this.resolveResult=r;this.fileName="";this.resolved=!1}onOpen(){let{contentEl:e}=this;e.empty(),e.createEl("h2",{text:"\u65B0\u5EFA txt \u7B14\u8BB0"}),new zt.Setting(e).setName("\u6587\u4EF6\u540D\u79F0").setDesc("\u8F93\u5165\u6587\u4EF6\u540D\uFF1B\u4E0D\u9700\u8981\u540E\u7F00\u65F6\u4F1A\u81EA\u52A8\u8865\u5168 .txt\u3002").addText(r=>{r.setPlaceholder("note.txt").setValue(this.fileName).onChange(s=>{this.fileName=s}),window.setTimeout(()=>r.inputEl.focus(),0)}),new zt.Setting(e).addButton(r=>r.setButtonText("\u53D6\u6D88").onClick(()=>{this.finish("cancelled")})).addButton(r=>r.setButtonText("\u521B\u5EFA").setCta().onClick(()=>{this.finish("submitted")}))}onClose(){this.finish("cancelled",!1)}finish(e,r=!0){if(this.resolved)return;this.resolved=!0;let s=e==="submitted"?this.fileName:"";this.resolveResult({kind:e,fileName:s}),r&&this.close()}};function Ki(n){return new Promise(t=>{new Xn(n,t).open()})}var _t=require("obsidian"),qi=require("path"),Gi=".txt",Vr=class{constructor(t){this.app=t}async createAndOpen(t){let e=fu(t.fileName),r=mu(t.target),s=(0,_t.normalizePath)(r?`${r}/${e}`:e);if(await this.app.vault.adapter.exists(s))throw new Error(`File already exists: ${s}`);let a=this.resolveAbsolutePath(s),i=await this.app.vault.create(s,""),o;try{await this.app.workspace.getLeaf(!1).openFile(i)}catch(l){o=l instanceof Error?l.message:String(l)}return{vaultPath:s,absolutePath:a,openError:o}}resolveAbsolutePath(t){let r=this.app.vault.adapter.getBasePath?.();if(!r)throw new Error("Vault root path is unavailable.");return(0,qi.join)(r,t)}};function fu(n){let t=n.trim();if(!t)throw new Error("File name is required.");if(t.includes("/")||t.includes("\\"))throw new Error("File name cannot contain path separators.");if(t==="."||t==="..")throw new Error("File name is invalid.");return t.toLowerCase().endsWith(Gi)?t:`${t}${Gi}`}function mu(n){return n instanceof _t.TFolder?n.path:n instanceof _t.TFile?hu(n.path):""}function hu(n){let t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function zi(n,t){let e=gu(n);return Hi({vaultRoot:t,taskEntry:e,taskScope:n.taskScope,taskText:n.text})}function Ui(n,t){return Hi({vaultRoot:t,taskEntry:n.path,taskScope:wu(n.path)})}function Yi(n){let t=ts(n.inboxPath,n.vaultRoot),e=(n.fileList??[]).map(r=>`- ${r}`).join(`
`)||"- \u5355\u6587\u4EF6\u6574\u7406\uFF0C\u65E0\u6587\u4EF6\u6E05\u5355";return[n.mode==="folder"?"\u8BF7\u6279\u91CF\u6574\u7406\u8FD9\u4E2A inbox \u6587\u4EF6\u5939\uFF1A":"\u8BF7\u6574\u7406\u8FD9\u4E2A inbox \u6750\u6599\uFF1A","",`vault \u6839\u76EE\u5F55\uFF1A${n.vaultRoot||"\u5F53\u524D vault"}`,`${n.mode==="folder"?"inbox \u6587\u4EF6\u5939":"inbox \u6587\u4EF6"}\uFF1A${t}`,"","\u6587\u4EF6\u6E05\u5355\uFF1A",e,"","\u6267\u884C\u89C4\u5219\uFF1A","1. \u5148\u8BFB\u53D6 vault \u6839\u76EE\u5F55 `AGENTS.md`\uFF1B\u5982\u679C\u5B58\u5728 `80-inbox/AGENTS.md`\uFF0C\u518D\u8BFB\u53D6\u5B83\u3002","2. \u53EA\u8BFB\u53D6\u672C inbox \u6750\u6599\u3001\u5FC5\u8981\u7D22\u5F15\u548C\u4E0E\u6574\u7406\u76F4\u63A5\u76F8\u5173\u7684\u6587\u4EF6\uFF0C\u4E0D\u9012\u5F52\u626B\u63CF\u6574\u4E2A vault\u3002","3. \u6279\u91CF\u6574\u7406\u65F6\u5148\u6839\u636E\u6587\u4EF6\u540D\u3001\u76EE\u5F55\u7ED3\u6784\u548C\u5C11\u91CF\u6458\u8981\u751F\u6210\u6574\u7406\u8BA1\u5212\uFF1B\u4E0D\u8981\u4E00\u5F00\u59CB\u5168\u6587\u8BFB\u53D6\u6240\u6709\u6587\u4EF6\u3002","4. \u5224\u65AD\u6750\u6599\u5F52\u7C7B\uFF1A\u4E00\u6B21\u6027\u9879\u76EE\u4EFB\u52A1\u3001\u590D\u6742 workflow\u3001\u8DE8\u9879\u76EE\u957F\u671F\u77E5\u8BC6\u3001\u8FD0\u7EF4 SOP\u3001\u6216\u9700\u8981\u7528\u6237\u786E\u8BA4\u3002","5. \u4E00\u6B21\u6027\u9879\u76EE\u4EFB\u52A1\u5199\u5165 `30-projects/<project>/inputs/YYYY/MM/p-<id>-<slug>/`\uFF1B\u590D\u6742\u4EFB\u52A1\u5199\u5165 `20-workflows/w-<id>-<slug>/`\u3002","6. \u8DE8\u9879\u76EE\u957F\u671F\u77E5\u8BC6\u5199\u5165 `40-knowledge-base/`\uFF0C\u5FC5\u987B\u4F7F\u7528\u89C4\u8303 frontmatter\uFF0C\u5E76\u540C\u6B65\u66F4\u65B0 `40-knowledge-base/index.md`\u3002","7. \u8FD0\u7EF4\u3001\u73AF\u5883\u3001\u6392\u969C SOP \u5199\u5165 `40-knowledge-base/`\uFF0C\u5E76\u4FDD\u7559\u6765\u6E90\u94FE\u63A5\u3002","8. \u4E0D\u786E\u5B9A\u9879\u76EE\u5F52\u5C5E\u3001\u662F\u5426\u957F\u671F\u77E5\u8BC6\u3001\u662F\u5426\u521B\u5EFA workflow\u3001\u6807\u9898\u6216\u5206\u7C7B\u65F6\uFF0C\u5148\u95EE\u7528\u6237\u3002","9. \u5B8C\u6210\u540E\u8BF4\u660E\u521B\u5EFA\u3001\u79FB\u52A8\u3001\u4FEE\u6539\u4E86\u54EA\u4E9B\u6587\u4EF6\uFF0C\u5E76\u5199\u660E\u672A\u5904\u7406\u9879\u548C\u540E\u7EED\u5F85\u529E\u3002","","\u8DE8\u9879\u76EE\u77E5\u8BC6\u63A8\u8350\u89C4\u5219\uFF1A","1. \u63A8\u8350\u76F8\u5173\u77E5\u8BC6\u65F6\u4F18\u5148\u8BFB\u53D6 `40-knowledge-base/index.md`\u3002","2. \u53EA\u57FA\u4E8E\u6807\u9898\u3001summary\u3001tags\u3001aliases\u3001projects \u505A\u5019\u9009\u7B5B\u9009\uFF1B\u7528\u6237\u786E\u8BA4\u524D\u4E0D\u8981\u9ED8\u8BA4\u8BFB\u53D6\u5168\u6587\u3002","3. \u6700\u591A\u63A8\u8350 5 \u6761\u5019\u9009\uFF0C\u6BCF\u6761\u7ED9\u51FA\u7406\u7531\u548C\u7F6E\u4FE1\u5EA6\u3002","4. \u672A\u627E\u5230\u660E\u786E\u5019\u9009\u65F6\u76F4\u63A5\u8BF4\u660E\uFF0C\u4E0D\u8981\u5F3A\u884C\u5173\u8054\u3002","","\u8F93\u51FA\u8981\u6C42\uFF1A\u5148\u7ED9\u6574\u7406\u8BA1\u5212\u548C\u5F85\u786E\u8BA4\u95EE\u9898\uFF1B\u7528\u6237\u786E\u8BA4\u540E\u518D\u843D\u76D8\u3002"].join(`
`)}function Hi(n){let t=ts(n.taskEntry,n.vaultRoot),e=ts(yu(n.taskEntry,n.taskScope),n.vaultRoot),r=Tu(n.taskEntry),s=r?`${r}/links.md`:"\u6309\u4EFB\u52A1\u5165\u53E3\u6216 workflow \u8BB0\u5F55\u8BFB\u53D6";return[vu(n.taskScope),"",`vault \u6839\u76EE\u5F55\uFF1A${n.vaultRoot||"\u5F53\u524D vault"}`,`\u4EFB\u52A1\u5165\u53E3\uFF1A${t}`,`\u4E0A\u4E0B\u6587\u6839\uFF1A${e}`,`\u4EFB\u52A1\u7C7B\u578B\uFF1A${n.taskScope}`,`\u4EFB\u52A1\u6807\u9898\uFF1A${n.taskText??"\u89C1\u4EFB\u52A1\u5165\u53E3"}`,`\u5173\u8054\u9879\u76EE\uFF1A${r??"\u89C1\u4EFB\u52A1\u5165\u53E3"}`,"\u76EE\u6807\u5206\u652F\uFF1A\u89C1\u4EFB\u52A1\u5165\u53E3\u4E2D\u7684 `\u76EE\u6807\u5206\u652F`\uFF0C\u4E3A `\u5F85\u586B\u5199` \u6216\u4E3A\u7A7A\u65F6\u5148\u8BA9\u7528\u6237\u8865\u5145",`\u6E90\u7801\u5165\u53E3\uFF1A${s}`,"","\u6309\u9700\u8BFB\u53D6\u89C4\u5219\uFF1A","1. \u53EA\u8BFB\u53D6 vault \u6839\u76EE\u5F55 `AGENTS.md`\u3002","2. \u8BFB\u53D6\u4E0A\u9762\u7684\u4EFB\u52A1\u5165\u53E3\uFF0C\u5E76\u4EE5\u201C\u4E0A\u4E0B\u6587\u6839\u201D\u4E3A\u5F53\u524D\u4EFB\u52A1\u4E0A\u4E0B\u6587\u3002","3. \u9700\u8981\u786E\u8BA4\u9700\u6C42\u3001\u8303\u56F4\u6216\u6267\u884C\u524D\u786E\u8BA4\u9879\u65F6\uFF0C\u624D\u8BFB\u53D6\u4EFB\u52A1\u5165\u53E3\u6307\u5411\u7684 `overview.md`\u3002","4. \u82E5\u5DF2\u8BFB\u53D6\u7684 `overview.md` \u5B58\u5728 `\u72B6\u6001\uFF1A\u5F85\u786E\u8BA4` \u7684\u786E\u8BA4\u9879\uFF0C\u5148\u57FA\u4E8E\u5F53\u524D\u4EFB\u52A1\u4E0A\u4E0B\u6587\u7ED9\u51FA AI \u5EFA\u8BAE\uFF0C\u518D\u8BF7\u7528\u6237\u786E\u8BA4\u6216\u9009\u62E9\uFF1B\u7528\u6237\u786E\u8BA4\u540E\u5199\u56DE\u5BF9\u5E94\u786E\u8BA4\u9879\u3002\u5DF2\u786E\u8BA4\u6216\u65E0\u9700\u786E\u8BA4\u7684\u786E\u8BA4\u9879\u4E0D\u8981\u91CD\u590D\u8BE2\u95EE\u3002","5. \u5BF9 `related_knowledge` \u786E\u8BA4\u9879\uFF0C\u4F18\u5148\u8BFB\u53D6 `40-knowledge-base/index.md`\uFF0C\u53EA\u57FA\u4E8E\u6807\u9898\u3001summary\u3001tags\u3001aliases\u3001projects \u63A8\u8350\u6700\u591A 5 \u6761\u5019\u9009\uFF1B\u7528\u6237\u786E\u8BA4\u524D\u4E0D\u8981\u9ED8\u8BA4\u8BFB\u53D6\u77E5\u8BC6\u5168\u6587\u3002","6. \u9700\u8981\u9879\u76EE\u7A33\u5B9A\u77E5\u8BC6\u65F6\u8BFB\u53D6\u9879\u76EE `AGENTS.md`\uFF1B\u9700\u8981\u6E90\u7801\u8DEF\u5F84\u6216\u6587\u6863\u5165\u53E3\u65F6\u8BFB\u53D6\u9879\u76EE `links.md`\u3002","7. \u53EA\u8BFB\u53D6\u4E0E\u4EFB\u52A1\u76F4\u63A5\u76F8\u5173\u7684\u6E90\u7801\u3001\u65E5\u5FD7\u3001\u6570\u636E\u5E93\u6216\u5916\u90E8\u6587\u6863\u3002","","\u7EA6\u675F\uFF1A\u4E0D\u8981\u9012\u5F52\u626B\u63CF\u6574\u4E2A vault\uFF1B\u4E0D\u8981\u8BFB\u53D6\u65E0\u5173 workflow\u3001\u65E0\u5173\u9879\u76EE inputs \u6216\u65E0\u5173\u6E90\u7801\u76EE\u5F55\uFF1B\u4EFB\u52A1\u5B8C\u6210\u540E\u628A\u6267\u884C\u7ED3\u679C\u3001\u4FEE\u6539\u6587\u4EF6\u3001\u9A8C\u8BC1\u65B9\u5F0F\u3001\u98CE\u9669\u548C\u540E\u7EED\u5F85\u529E\u5199\u5165\u5F53\u524D\u4EFB\u52A1\u6216 workflow \u7684 `execution.md`\uFF0C\u4E0D\u8981\u8FFD\u52A0\u5230 `AGENTS.md`\u3002"].join(`
`)}function gu(n){return(n.links.find(e=>ku(e.target))??n.links[0])?.target??`${A}:${n.line}`}function ku(n){return n.startsWith("30-projects/")||n.startsWith("20-workflows/")||n===A}function wu(n){return n.startsWith("20-workflows/")?"workflow":n.startsWith("30-projects/")?"project":"general"}function vu(n){return n==="workflow"?"\u6309\u8FD9\u4E2A workflow \u5165\u53E3\u7EE7\u7EED\u5904\u7406\uFF1A":n==="project"?"\u6309\u8FD9\u4E2A\u9879\u76EE\u4EFB\u52A1\u5165\u53E3\u7EE7\u7EED\u5904\u7406\uFF1A":"\u6309\u8FD9\u4E2A\u901A\u7528\u5F85\u529E\u4F4D\u7F6E\u7EE7\u7EED\u5904\u7406\uFF1A"}function yu(n,t){let e=n.split(/:(.+)/)[0];return t==="workflow"?e.match(/^(20-workflows\/[^/]+)/)?.[1]??es(e):t==="project"&&(e.endsWith("/AGENTS.md")||e.endsWith("/index.md"))?es(e):es(e)||A}function Tu(n){return n.match(/^(30-projects\/[^/]+)/)?.[1]??null}function es(n){let t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function ts(n,t){if(xu(n)||!t.trim())return n;let[e,r]=n.split(/:(.+)/);return`${t.replace(/\/+$/,"")}/${e}${r?`:${r}`:""}`}function xu(n){return/^(?:\/|[A-Za-z]:[\\/]|\\\\|[a-z][a-z0-9+.-]*:)/i.test(n)}var Ut="80-inbox/";var _u=_.object({id:_.literal(vs),name:_.literal(rr)}),Pu=_.object({vaultRoot:_.string().catch(V.vaultRoot).transform(n=>n.trim()||V.vaultRoot),provider:_.nativeEnum(ae).catch(V.provider),taskSourceApp:_.nativeEnum(Ze).catch(V.taskSourceApp),enableKcworkApp:_.boolean().catch(V.enableKcworkApp),terminalApp:_.unknown().transform(Ss),codexCliPath:_.string().catch(V.codexCliPath),customCliPath:_.string().catch(V.customCliPath),defaultTaskStatus:_.unknown().transform(bs),autoValidate:_.boolean().catch(V.autoValidate),layoutDirection:_.unknown().transform(js)}).catch(()=>({...V}));var Gr=class extends u.Plugin{constructor(){super(...arguments);this.aiWorkspaceLaunchInProgress=!1}async onload(){_u.parse(this.manifest),await this.loadSettings(),this.addSettingTab(new sr(this.app,this)),this.registerExtensions(["txt"],"markdown"),this.registerView(Bt,e=>new Wt(e)),this.registerView(Vt,e=>new Mt(e,this.buildTodoBoardActions())),this.registerView(Fr,e=>new Rr(e,this.buildFaqViewActions())),this.registerView(Gt,e=>new Kt(e,this.buildProjectViewActions())),this.addRibbonIcon("list-checks","AI Knowledge todo board",()=>{this.activateTodoBoard()}),this.addRibbonIcon("folder-tree","AI Knowledge projects",()=>{this.activateProjects()}),this.addRibbonIcon("badge-help","AI Knowledge FAQ",()=>{this.activateFaq()}),this.addCommand({id:"open-ai-knowledge-todo-board",name:"AI Knowledge: Open todo board",callback:()=>{this.activateTodoBoard()}}),this.addCommand({id:"open-ai-knowledge-done-archive",name:"AI Knowledge: Open completed tasks",callback:()=>{this.openDoneArchive()}}),this.addCommand({id:"open-ai-knowledge-faq",name:"AI Knowledge: Open FAQ",callback:()=>{this.activateFaq()}}),this.addCommand({id:"open-ai-knowledge-projects",name:"AI Knowledge: Open projects",callback:()=>{this.activateProjects()}}),this.addCommand({id:"validate-vault",name:"AI Knowledge: Validate vault",callback:async()=>{await this.validateVault()}}),this.addCommand({id:"initialize-vault",name:"AI Knowledge: Initialize vault structure",callback:async()=>{await this.initializeVaultStructure()}}),this.addCommand({id:"create-workflow",name:"AI Knowledge: Create workflow",callback:async()=>{await this.addDirectWorkflow()}}),this.addCommand({id:"add-task",name:"AI Knowledge: Create project task",callback:async()=>{await this.addDirectTask()}}),this.addCommand({id:"add-general-task",name:"AI Knowledge: Add general task",callback:async()=>{await this.addDirectGeneralTask()}}),this.addCommand({id:"complete-task",name:"AI Knowledge: Complete task",callback:async()=>{await this.completeTask()}}),this.addCommand({id:"copy-active-file-to-agent",name:"AI Knowledge: Copy active file to agent",callback:async()=>{await this.copyActiveFileToAgent()}}),this.addCommand({id:"validate-active-task-for-development",name:"AI Knowledge: Validate active task for development",callback:async()=>{await this.validateActiveTaskForDevelopment()}}),this.addCommand({id:"repair-task-context-structure",name:"AI Knowledge: Repair task context structure",callback:async()=>{await this.repairTaskContextStructure()}}),this.addCommand({id:"move-task",name:"AI Knowledge: Move task",callback:async()=>{await this.activateTodoBoard()}}),this.addCommand({id:"organize-inbox-folder-with-agent",name:"AI Knowledge: Organize inbox folder with agent",callback:async()=>{await this.organizeInboxFolderWithAgent()}}),this.addCommand({id:"organize-inbox-folder-with-codex-app",name:"AI Knowledge: Organize inbox folder with Codex app",callback:async()=>{await this.organizeInboxFolderWithCodexApp()}}),this.addCommand({id:"copy-inbox-folder-organize-prompt",name:"AI Knowledge: Copy inbox folder organize prompt",callback:async()=>{await this.copyInboxFolderOrganizePrompt()}}),this.addCommand({id:"open-settings",name:"AI Knowledge: Open settings",callback:()=>{this.openSettings()}}),this.registerEvent(this.app.workspace.on("file-menu",(e,r)=>{this.addFileMenuItems(e,r)})),this.registerFileExplorerDoubleClick()}registerFileExplorerDoubleClick(){if(!u.Platform.isDesktopApp)return;let e=new WeakSet,r=!0;this.register(()=>{r=!1});let s=()=>{if(r)for(let a of this.app.workspace.getLeavesOfType("file-explorer")){let i=a.view.containerEl;e.has(i)||(e.add(i),this.registerDomEvent(i,"dblclick",o=>{let l=o.targetNode;if(o.button!==0||!l?.instanceOf(HTMLElement)||l.closest("input, textarea, [contenteditable]"))return;let d=l.closest(".nav-file-title[data-path]")?.dataset.path,p=d?this.app.vault.getAbstractFileByPath(d):null;p instanceof u.TFile&&(o.preventDefault(),o.stopPropagation(),this.openFileWithDefaultApp(p))},{capture:!0}))}};this.app.workspace.onLayoutReady(s),this.registerEvent(this.app.workspace.on("layout-change",s))}async openFileWithDefaultApp(e){try{await new Mr(this.app).openFile(e)}catch(r){let s=r instanceof Error?r.message:String(r);new u.Notice(`Failed to open file with default app: ${s}`)}}async loadSettings(){let e=await this.loadData();this.settings=Pu.parse(e)}async saveSettings(){let e=await this.loadData(),r=_.record(_.unknown()).catch({}).parse(e);await this.saveData({...r,...this.settings})}async initializeVaultStructure(){try{let e=new Ar(this.app),r=await e.preview(),s=[...r.missingFolders,...r.missingFiles];if(s.length===0){new u.Notice("\u77E5\u8BC6\u5E93\u7ED3\u6784\u548C\u914D\u5957\u6280\u80FD\u6587\u4EF6\u5747\u5DF2\u9F50\u5168\uFF0C\u5DF2\u6709\u6587\u4EF6\u4FDD\u6301\u539F\u6837\u3002");return}let a=r.missingFiles.filter(p=>p.startsWith(".agents/skills/")),i=s.slice(0,12),o=s.length-i.length,l=[`\u5C06\u5728\u5F53\u524D\u77E5\u8BC6\u5E93\u8865\u9F50 ${r.missingFolders.length} \u4E2A\u76EE\u5F55\u548C ${r.missingFiles.length} \u4E2A\u6587\u4EF6\u3002`,"\u5DF2\u6709\u6587\u4EF6\u4E0D\u4F1A\u8986\u76D6\u3002\u65E7\u77E5\u8BC6\u5E93\u4E5F\u53EF\u4EE5\u518D\u6B21\u521D\u59CB\u5316\uFF0C\u8865\u9F50\u7F3A\u5931\u7684\u7ED3\u6784\u548C\u6280\u80FD\u6587\u4EF6\u3002","",`\u914D\u5957\u6280\u80FD\u4FDD\u5B58\u5728 .agents/skills/\uFF0C\u672C\u6B21\u9700\u8865\u9F50 ${a.length} \u4E2A\u6280\u80FD\u6587\u4EF6\uFF1A`,"\u2022 \u4EFB\u52A1\u7BA1\u7406\uFF08ai-knowledge-task-management\uFF09\uFF1A\u521B\u5EFA\u3001\u66F4\u65B0\u548C\u5B8C\u6210\u4EFB\u52A1\u3002","\u2022 \u9879\u76EE\u8D44\u6599\uFF08ai-knowledge-project-onboarding\uFF09\uFF1A\u4ECE\u6E90\u7801\u751F\u6210\u9879\u76EE\u77E5\u8BC6\u8D44\u6599\u3002","\u2022 \u5468\u62A5\uFF08ai-knowledge-weekly-summary\uFF09\uFF1A\u6C47\u603B\u4EFB\u52A1\u548C\u4EE3\u7801\u6539\u52A8\u3002","","\u914D\u5957\u6587\u4EF6\u5305\u542B Python \u811A\u672C\uFF0C\u4F9B AI \u52A9\u624B\u6309\u6280\u80FD\u8BF4\u660E\u8BFB\u53D6\u548C\u6267\u884C\u3002\u521D\u59CB\u5316\u53EA\u8865\u9F50\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u6267\u884C\u8FD9\u4E9B\u811A\u672C\u3002\u540E\u7EED\u4F7F\u7528\u9700\u6709\u53EF\u7528\u7684 AI \u52A9\u624B\u548C Python \u73AF\u5883\u3002","","\u672C\u6B21\u8865\u9F50\u5185\u5BB9\uFF1A",...i.map(p=>`\u2022 ${p}`),...o>0?[`\u2022 \u53E6\u6709 ${o} \u9879`]:[]].join(`
`);if(await Ie(this.app,"\u521D\u59CB\u5316\u77E5\u8BC6\u5E93\u548C\u914D\u5957\u6280\u80FD",l,"\u8865\u9F50\u7F3A\u5931\u6587\u4EF6")!=="confirm"){new u.Notice("\u5DF2\u53D6\u6D88\u521D\u59CB\u5316\uFF0C\u672A\u5199\u5165\u6587\u4EF6\u3002");return}let d=await e.initialize();try{await this.validateVault()}catch(p){let m=p instanceof Error?p.message:String(p);new u.Notice(`\u6587\u4EF6\u5DF2\u8865\u9F50\uFF0C\u4F46\u81EA\u52A8\u6821\u9A8C\u672A\u5B8C\u6210\uFF1A${m}\u3002\u8BF7\u91CD\u65B0\u8FD0\u884C\u77E5\u8BC6\u5E93\u6821\u9A8C\u3002`,1e4);return}new u.Notice(`\u521D\u59CB\u5316\u5B8C\u6210\uFF1A\u521B\u5EFA\u4E86 ${d.createdFolders.length} \u4E2A\u76EE\u5F55\u548C ${d.createdFiles.length} \u4E2A\u6587\u4EF6\u3002\u5DF2\u6709\u6587\u4EF6\u4FDD\u6301\u539F\u6837\uFF0C\u914D\u5957\u811A\u672C\u672A\u6267\u884C\u3002`)}catch(e){let r=e instanceof Error?e.message:String(e);new u.Notice(`\u521D\u59CB\u5316\u672A\u5B8C\u6210\uFF1A${r}\u3002\u53EF\u4EE5\u91CD\u65B0\u8FD0\u884C\u521D\u59CB\u5316\uFF0C\u7EE7\u7EED\u8865\u9F50\u7F3A\u5931\u6587\u4EF6\uFF1B\u5DF2\u6709\u6587\u4EF6\u4E0D\u4F1A\u8986\u76D6\u3002`,1e4)}}async validateVault(){let e=new he(this.app),r=new je,s=await e.scanVault(),a=r.validateVault(s);if(await this.showValidateResults(a),a.length===0){new u.Notice("AI Knowledge vault validation passed: no issues found.");return}let i=Kr(a,"blocker"),o=Kr(a,"error"),l=Kr(a,"warning"),c=Kr(a,"info");new u.Notice(`AI Knowledge vault validation found ${a.length} issue(s): ${i} blocker, ${o} error, ${l} warning, ${c} info.`)}async addDirectTask(){let e;for(;;){let r=await Ea(this.app,e);if(!r||(e=r,await this.previewAndExecuteDirectPlan(Aa(r),!0)!=="back"))return}}async addDirectGeneralTask(){let e;for(;;){let r=await ba(this.app,e);if(!r||(e=r,await this.previewAndExecuteDirectPlan(ja(r),!0)!=="back"))return}}async addDirectWorkflow(){let e;for(;;){let r=await Sa(this.app,e);if(!r||(e=r,await this.previewAndExecuteDirectPlan(Ca(r),!0)!=="back"))return}}async previewAndExecuteDirectPlan(e,r=!1){let s=new xr(this.app,{vaultRoot:this.settings.vaultRoot}),a=await s.previewPlanExecution(e),i=await _a(this.app,e,a,{canGoBack:r});if(i==="back")return i;if(i!=="confirm")return new u.Notice("Plan execution cancelled."),i;if(!a.canExecute)return new u.Notice("Plan has blocking dry-run issues and was not executed."),i;let o=await s.executePlan(e,"confirmed");return o.executed?(new u.Notice(`Plan executed. Validation issues: ${o.validationIssues.length}.`),i):(new u.Notice(o.error??"Plan execution blocked."),i)}buildTodoBoardActions(){return{openTasks:async()=>this.activateTodoBoard(),openProjects:async()=>this.activateProjects(),openFaq:async()=>this.activateFaq(),validateVault:async()=>this.validateVault(),createWorkflow:async()=>this.addDirectWorkflow(),addTask:async()=>this.addDirectTask(),addGeneralTask:async()=>this.addDirectGeneralTask(),completeTask:async()=>this.completeTask(),openDoneArchive:async()=>this.openDoneArchive(),copyTaskToAgent:async e=>this.copyTaskToAgent(e),openTaskInAgent:async e=>this.openTaskInAgent(e),openTaskInCodexApp:async e=>this.openTaskInCodexApp(e),openTaskInKcwork:async e=>this.openTaskInKcwork(e),isKcworkEnabled:()=>this.settings.enableKcworkApp&&u.Platform.isMacOS,getTaskSourceApp:()=>this.settings.taskSourceApp,canOpenTaskSource:()=>Jn(this.settings.taskSourceApp),openTaskSource:async e=>this.openTaskSource(e),runSkillAction:async e=>this.runSkillAction(e),openAiAgentInVault:async()=>this.openAiAgentInVault(),openSettings:()=>this.openSettings()}}buildFaqViewActions(){return{openTasks:async()=>this.activateTodoBoard(),openProjects:async()=>this.activateProjects(),openFaq:async()=>this.activateFaq()}}buildProjectViewActions(){return{openTasks:async()=>this.activateTodoBoard(),openProjects:async()=>this.activateProjects(),openFaq:async()=>this.activateFaq(),openProjectInCodex:async e=>this.openProjectInCodex(e),openProjectInKcwork:async e=>this.openProjectInKcwork(e),isKcworkEnabled:()=>this.settings.enableKcworkApp&&u.Platform.isMacOS,openProjectInCustomCli:async e=>this.openProjectInCustomCli(e)}}async completeTask(){let e=new jr(this.app),r=await e.listCompletableTasks();if(r.length===0){new u.Notice("No incomplete doing/todo/pending release tasks found.");return}let s=await ri(this.app,r);if(!s)return;let a=e.createPreview(s);if(await ni(this.app,a)!=="confirm"){new u.Notice("Task completion cancelled.");return}try{await e.completeTask(s),new u.Notice("Task archived to completed tasks."),await this.validateVault()}catch(o){let l=o instanceof Error?o.message:String(o);new u.Notice(`Complete Task failed: ${l}`),console.error("AI Knowledge: Complete Task failed",o)}}async runSkillAction(e){await new Ir(this.app,{settings:this.settings,validateVault:async()=>this.validateVault()}).run(e)}async openAiAgentInVault(){if(this.aiWorkspaceLaunchInProgress){new u.Notice("AI workspace is already opening.");return}this.aiWorkspaceLaunchInProgress=!0;let e=$e(this.settings);if(!e){new u.Notice("Configure AI agent in AI Knowledge Workflow settings before opening a terminal."),this.aiWorkspaceLaunchInProgress=!1;return}try{await new Le(this.app).openVaultInTerminal(e.command,this.settings.terminalApp,this.settings.vaultRoot,A),new u.Notice("Opened AI agent in vault.")}catch(r){let s=r instanceof Error?r.message:String(r);new u.Notice(`Failed to open AI workspace: ${s}`),console.error("AI Knowledge: Open AI Agent in Vault failed",r)}finally{window.setTimeout(()=>{this.aiWorkspaceLaunchInProgress=!1},1500)}}async copyTaskToAgent(e){await Yt(zi(e,this.settings.vaultRoot)),new u.Notice("Copied task prompt for AI agent.")}async openTaskInAgent(e){if(this.aiWorkspaceLaunchInProgress){new u.Notice("AI workspace is already opening.");return}let r=$e(this.settings);if(!r){new u.Notice("Configure AI agent in AI Knowledge Workflow settings before opening a terminal.");return}let s=this.resolveTaskAgentTarget(e),a=this.app.vault.getAbstractFileByPath(s.filePath);if(!(a instanceof u.TFile)){new u.Notice(`Task entry file is missing: ${s.filePath}`);return}this.aiWorkspaceLaunchInProgress=!0;try{let i=await new Le(this.app).openInTerminal({file:a,command:r.command,terminalApp:this.settings.terminalApp,includeFileReference:!0,submitCommand:!1,vaultRootOverride:this.settings.vaultRoot,workspacePathOverride:s.workspacePath,fileReferenceOverride:s.fileReference,sourceEntryPath:s.filePath,title:e.text.split(`
`)[0]?.replace(/\[\[.*?\]\]/g,"").replace(/\[.*?\]\(.*?\)/g,"").trim()});await this.openFileInBoardLeaf(a),this.focusLatestTerminalLeaf(),new u.Notice(`Opened AI agent for task: ${i.workspacePath}`)}catch(i){let o=i instanceof Error?i.message:String(i);new u.Notice(`Failed to open AI task workspace: ${o}`),console.error("AI Knowledge: Open Task in Agent failed",i)}finally{window.setTimeout(()=>{this.aiWorkspaceLaunchInProgress=!1},1500)}}async openTaskInCodexApp(e){if(this.aiWorkspaceLaunchInProgress){new u.Notice("AI workspace is already opening.");return}let r=this.resolveTaskAgentTarget(e);if(!(this.app.vault.getAbstractFileByPath(r.filePath)instanceof u.TFile)){new u.Notice(`Task entry file is missing: ${r.filePath}`);return}let a=this.getConfiguredVaultRoot(),i=r.workspacePath?`${a}/${r.workspacePath}`:a;this.aiWorkspaceLaunchInProgress=!0;try{await Ii({absoluteWorkspacePath:i,fileReference:r.fileReference}),new u.Notice(`Opened new Codex chat for task: ${r.workspacePath||"."}`)}catch(o){let l=o instanceof Error?o.message:String(o);new u.Notice(`Failed to open Codex App: ${l}`),console.error("AI Knowledge: Open Task in Codex App failed",o)}finally{window.setTimeout(()=>{this.aiWorkspaceLaunchInProgress=!1},1500)}}async openTaskInKcwork(e){if(this.aiWorkspaceLaunchInProgress){new u.Notice("AI workspace is already opening.");return}let r=this.resolveTaskAgentTarget(e);if(!(this.app.vault.getAbstractFileByPath(r.filePath)instanceof u.TFile)){new u.Notice(`Task entry file is missing: ${r.filePath}`);return}let s=this.getConfiguredVaultRoot();this.aiWorkspaceLaunchInProgress=!0;try{await Hn({absoluteWorkspacePath:r.workspacePath?`${s}/${r.workspacePath}`:s})}catch(a){let i=a instanceof Error?a.message:String(a);new u.Notice(`\u6253\u5F00 KCwork \u5931\u8D25\uFF1A${i}`),console.error("AI Knowledge: Open Task in KCwork failed",a)}finally{window.setTimeout(()=>{this.aiWorkspaceLaunchInProgress=!1},1500)}}async openProjectInCodex(e){try{await Li({absoluteWorkspacePath:this.resolveProjectWorkspacePath(e.path)}),new u.Notice(`Opened Codex App for project: ${e.name}`)}catch(r){let s=r instanceof Error?r.message:String(r);new u.Notice(`Failed to open Codex App: ${s}`),console.error("AI Knowledge: Open Project in Codex App failed",r)}}async openProjectInKcwork(e){let r=this.resolveProjectMainFilePath(e.path);if(!(this.app.vault.getAbstractFileByPath(r)instanceof u.TFile)){new u.Notice(`Project entry file is missing: ${r}`);return}try{await Hn({absoluteWorkspacePath:this.resolveProjectWorkspacePath(e.path)})}catch(s){let a=s instanceof Error?s.message:String(s);new u.Notice(`\u6253\u5F00 KCwork \u5931\u8D25\uFF1A${a}`),console.error("AI Knowledge: Open Project in KCwork failed",s)}}async openProjectInCustomCli(e){if(!this.settings.customCliPath.trim()){new u.Notice("Configure custom CLI command in AI Knowledge Workflow settings before opening a project terminal.");return}try{await new Le(this.app).openAbsolutePathInTerminal(this.resolveProjectWorkspacePath(e.path),this.settings.customCliPath,this.settings.terminalApp,e.name,this.resolveProjectMainFilePath(e.path)),new u.Notice(`Opened Custom CLI for project: ${e.name}`)}catch(r){let s=r instanceof Error?r.message:String(r);new u.Notice(`Failed to open Custom CLI: ${s}`),console.error("AI Knowledge: Open Project in Custom CLI failed",r)}}resolveProjectWorkspacePath(e){return`${this.getConfiguredVaultRoot()}/${e}`}resolveProjectMainFilePath(e){let r=`${e}/AGENTS.md`,s=`${e}/index.md`;return this.app.vault.getAbstractFileByPath(r)instanceof u.TFile?r:s}async openTaskSource(e){let r=this.settings.taskSourceApp,s=Qe[r];try{let a=await Vi(r,e),i={direct:`\u5DF2\u8BF7\u6C42\u6253\u5F00 ${s}\uFF1A${e.label}`,search:`\u5DF2\u8BF7\u6C42\u5728 ${s} \u4E2D\u641C\u7D22\uFF1A${e.label}`,"search-with-copied-text":`\u5DF2\u8BF7\u6C42\u5728 ${s} \u4E2D\u641C\u7D22\uFF1A${e.label}\u3002\u641C\u7D22\u8BCD\u5DF2\u590D\u5236\uFF0C\u53EF\u5728\u672A\u81EA\u52A8\u586B\u5165\u65F6\u7C98\u8D34\u3002`,"filled-search-text":`\u5DF2\u6253\u5F00 ${s}\uFF0C\u5E76\u586B\u5165\u641C\u7D22\u8BCD\uFF1A${e.label}`,"copied-search-text":`\u5DF2\u6253\u5F00 ${s}\uFF0C\u5E76\u590D\u5236\u641C\u7D22\u8BCD\uFF1A${e.label}`};new u.Notice(i[a])}catch(a){let i=a instanceof Error?a.message:String(a);new u.Notice(`\u6253\u5F00 ${s} \u5931\u8D25\uFF1A${i}`),console.error("AI Knowledge: Open task source failed",a)}}async refreshTaskSourceViews(){for(let e of this.app.workspace.getLeavesOfType(Vt))e.view instanceof Mt&&await e.view.refresh()}async refreshKcworkViews(){await this.refreshTaskSourceViews();for(let e of this.app.workspace.getLeavesOfType(Gt))e.view instanceof Kt&&await e.view.refresh()}async copyActiveFileToAgent(){let e=this.app.workspace.getActiveFile();if(!e){new u.Notice("No active file to copy.");return}await this.copyFileToAgent(e)}async validateActiveTaskForDevelopment(){let e=this.app.workspace.getActiveFile();if(!e){new u.Notice("No active task file to validate.");return}let r=await this.app.vault.adapter.read(e.path),s=Cu(e.path,r);if(s.length===0){new u.Notice("Active task is ready for source development.");return}await Yt(s.map(a=>`- ${a}`).join(`
`)),new u.Notice(`Active task is not ready for source development: ${s.length} issue(s). Details copied.`)}resolveTaskAgentTarget(e){if(e.taskScope==="workflow"){let r=e.links.find(a=>a.target.startsWith("20-workflows/"))?.target,s=Eu(r);return{filePath:s,workspacePath:Pt(s),fileReference:Zi(s)}}if(e.taskScope==="project"){let r=e.links.find(a=>a.target.startsWith("30-projects/"))?.target,s=bu(r);return{filePath:s,workspacePath:Pt(s),fileReference:Zi(s)}}return{filePath:A,workspacePath:"",fileReference:`${A}:${e.line}`}}async openFileInBoardLeaf(e){await this.openFileInDocumentLeaf(e)}async openDoneArchive(){let e=this.app.vault.getAbstractFileByPath(D);if(!(e instanceof u.TFile)){new u.Notice(`Completed task archive is missing: ${D}`);return}await this.openFileInDocumentLeaf(e)}async openFileInDocumentLeaf(e,r){let s=this.app.workspace.getLeaf("tab");await s.openFile(e,r),(0,u.requireApiVersion)("1.7.2")?await this.app.workspace.revealLeaf(s):this.app.workspace.setActiveLeaf(s,{focus:!0})}getConfiguredVaultRoot(){let e=this.settings.vaultRoot.trim();if(e)return e.replace(/\/+$/,"");let s=this.app.vault.adapter.getBasePath?.();if(!s)throw new Error("Vault root path is unavailable. Configure Vault root in plugin settings.");return s.replace(/\/+$/,"")}async activateTodoBoard(){await this.activatePluginView(Vt)}async activateProjects(){await this.activatePluginView(Gt)}async activateFaq(){await this.activatePluginView(Fr)}async activatePluginView(e){let r=this.app.workspace.getLeavesOfType(e)[0],s=r??this.app.workspace.getLeaf("tab");r||await s.setViewState({type:e,active:!0}),(0,u.requireApiVersion)("1.7.2")?await this.app.workspace.revealLeaf(s):this.app.workspace.setActiveLeaf(s,{focus:!0})}async showValidateResults(e){let r=this.app.workspace.getLeavesOfType(Bt),s;if(r.length>0)s=r[0];else{let i=this.app.workspace.getRightLeaf(!1);if(!i){new u.Notice("Unable to open validation result view.");return}s=i,await s.setViewState({type:Bt,active:!0})}let a=s.view;a instanceof Wt&&a.setIssues(e)}addFileMenuItems(e,r){this.addTextNoteMenuItems(e,r),this.addInboxOrganizeMenuItems(e,r),this.addAiWorkspaceMenuItems(e,r),this.addCopyToAgentMenuItems(e,r),r instanceof u.TFile&&e.addItem(s=>s.setTitle("Open with system default app").setIcon("external-link").onClick(()=>this.openFileWithDefaultApp(r)))}addInboxOrganizeMenuItems(e,r){$u(r)&&(e.addSeparator(),e.addItem(s=>{s.setTitle(r instanceof u.TFolder?"Organize This Inbox Folder with Agent":"Organize This Inbox with Agent").setIcon("terminal").onClick(()=>{this.organizeInboxTargetWithAgent(r)})}),e.addItem(s=>{s.setTitle(r instanceof u.TFolder?"Organize This Inbox Folder with Codex App":"Organize This Inbox with Codex App").setIcon("app-window").onClick(()=>{this.organizeInboxTargetWithCodexApp(r)})}),e.addItem(s=>{s.setTitle(r instanceof u.TFolder?"Copy Inbox Folder Organize Prompt":"Copy Inbox Organize Prompt").setIcon("copy").onClick(()=>{this.copyInboxOrganizePrompt(r)})}))}addCopyToAgentMenuItems(e,r){r instanceof u.TFile&&(e.addSeparator(),e.addItem(s=>{s.setTitle("Copy this task to agent").setIcon("copy").onClick(()=>{this.copyFileToAgent(r)})}))}focusLatestTerminalLeaf(){let e=this.app.workspace.getLeavesOfType("terminal:terminal"),r=e[e.length-1];if(!r)return;this.app.workspace.setActiveLeaf(r,{focus:!0}),r.view.emulator?.terminal?.focus()}async copyFileToAgent(e){await Yt(Ui(e,this.settings.vaultRoot)),new u.Notice("Copied file prompt for AI agent.")}async repairTaskContextStructure(){try{let e=await new he(this.app).scanVault(),r=0,s=0,a=0,i=0;for(let o of e.projects){if(o.hasLinks){let l=`${o.path}/links.md`,c=Su(o.linksContent);c!==o.linksContent&&(await this.app.vault.adapter.write(l,c),r+=1)}for(let l of o.inputIndexFiles){let c=Au(l.content);c!==l.content&&(await this.app.vault.adapter.write(l.path,c),s+=1),await this.ensureExecutionFile(Pt(l.path))&&(i+=1)}}for(let o of e.workflows){if(!o.hasAgents)continue;let l=`${o.path}/AGENTS.md`,c=ju(o.agentsContent);c!==o.agentsContent&&(await this.app.vault.adapter.write(l,c),a+=1),await this.ensureExecutionFile(o.path)&&(i+=1)}new u.Notice(`Repaired context structure: ${r} project links, ${s} project task(s), ${a} workflow(s), ${i} execution file(s).`),await this.validateVault()}catch(e){let r=e instanceof Error?e.message:String(e);new u.Notice(`Repair task context structure failed: ${r}`),console.error("AI Knowledge: Repair Task Context Structure failed",e)}}async ensureExecutionFile(e){let r=`${e}/execution.md`;return await this.app.vault.adapter.exists(r)?!1:(await this.app.vault.adapter.write(r,Iu()),!0)}addTextNoteMenuItems(e,r){e.addSeparator(),e.addItem(s=>{s.setTitle("\u65B0\u5EFA txt \u7B14\u8BB0").setIcon("file-plus").onClick(()=>{this.createTextNote(r)})})}addAiWorkspaceMenuItems(e,r){e.addSeparator(),e.addItem(s=>{s.setTitle("Open AI agent here in terminal").setIcon("terminal").onClick(()=>{this.openAiWorkspace(r)})}),r instanceof u.TFile&&e.addItem(s=>{s.setTitle("Open AI agent here with @ this file").setIcon("file-terminal").onClick(()=>{this.openAiWorkspace(r,!0)})})}async openAiWorkspace(e,r=!1){if(this.aiWorkspaceLaunchInProgress){new u.Notice("AI workspace is already opening.");return}this.aiWorkspaceLaunchInProgress=!0;let s=$e(this.settings);if(!s){new u.Notice("Configure AI agent in AI Knowledge Workflow settings before opening a terminal."),this.aiWorkspaceLaunchInProgress=!1;return}try{let a=await new Le(this.app).openInTerminal({file:e,command:s.command,terminalApp:this.settings.terminalApp,includeFileReference:r,submitCommand:!r,vaultRootOverride:this.settings.vaultRoot});new u.Notice(`Opened AI agent workspace: ${a.workspacePath}`)}catch(a){let i=a instanceof Error?a.message:String(a);new u.Notice(`Failed to open AI workspace: ${i}`),console.error("AI Knowledge: Open AI Workspace failed",a)}finally{window.setTimeout(()=>{this.aiWorkspaceLaunchInProgress=!1},1500)}}async organizeInboxFolderWithAgent(){let e=await this.selectInboxFolder();e&&await this.organizeInboxTargetWithAgent(e)}async organizeInboxFolderWithCodexApp(){let e=await this.selectInboxFolder();e&&await this.organizeInboxTargetWithCodexApp(e)}async copyInboxFolderOrganizePrompt(){let e=await this.selectInboxFolder();e&&await this.copyInboxOrganizePrompt(e)}async organizeInboxTargetWithAgent(e){if(this.aiWorkspaceLaunchInProgress){new u.Notice("AI workspace is already opening.");return}let r=$e(this.settings);if(!r){new u.Notice("Configure AI agent in AI Knowledge Workflow settings before opening a terminal.");return}let s=this.buildInboxOrganizePromptForTarget(e);await Yt(s),this.aiWorkspaceLaunchInProgress=!0;try{let a=await new Le(this.app).openInTerminal({file:e,command:r.command,terminalApp:this.settings.terminalApp,includeFileReference:!1,submitCommand:!1,vaultRootOverride:this.settings.vaultRoot,workspacePathOverride:e instanceof u.TFolder?e.path:Pt(e.path),sourceEntryPath:e.path,title:`Organize ${e.name}`});new u.Notice(`Opened AI agent for inbox organize. Prompt copied: ${a.workspacePath}`)}catch(a){let i=a instanceof Error?a.message:String(a);new u.Notice(`Failed to open AI agent: ${i}`),console.error("AI Knowledge: Organize Inbox with Agent failed",a)}finally{window.setTimeout(()=>{this.aiWorkspaceLaunchInProgress=!1},1500)}}async organizeInboxTargetWithCodexApp(e){if(this.aiWorkspaceLaunchInProgress){new u.Notice("AI workspace is already opening.");return}let r=this.buildInboxOrganizePromptForTarget(e),s=this.getConfiguredVaultRoot(),a=e instanceof u.TFolder?e.path:Pt(e.path),i=a?`${s}/${a}`:s;this.aiWorkspaceLaunchInProgress=!0;try{await $i({absoluteWorkspacePath:i,prompt:r}),new u.Notice(`Opened Codex App for inbox organize: ${a||"."}`)}catch(o){let l=o instanceof Error?o.message:String(o);new u.Notice(`Failed to open Codex App: ${l}`),console.error("AI Knowledge: Organize Inbox with Codex App failed",o)}finally{window.setTimeout(()=>{this.aiWorkspaceLaunchInProgress=!1},1500)}}async copyInboxOrganizePrompt(e){await Yt(this.buildInboxOrganizePromptForTarget(e)),new u.Notice("Copied inbox organize prompt.")}buildInboxOrganizePromptForTarget(e){let r=e instanceof u.TFolder;return Yi({vaultRoot:this.settings.vaultRoot,inboxPath:e.path,mode:r?"folder":"file",fileList:r?this.listInboxFolderFiles(e):void 0})}listInboxFolderFiles(e){let r=e.path.endsWith("/")?e.path:`${e.path}/`;return this.app.vault.getFiles().filter(s=>s.path.startsWith(r)).map(s=>s.path).sort((s,a)=>s.localeCompare(a))}selectInboxFolder(){let e=this.getInboxFolders();return e.length===0?(new u.Notice("No inbox folders found."),Promise.resolve(null)):new Promise(r=>{new ns(this.app,e,r).open()})}getInboxFolders(){let e=new Map,r=this.app.vault.getAbstractFileByPath(Ut.replace(/\/$/,""));r instanceof u.TFolder&&e.set(r.path,r);for(let s of this.app.vault.getFiles()){if(!s.path.startsWith(Ut))continue;let a=Pt(s.path),i=this.app.vault.getAbstractFileByPath(a);i instanceof u.TFolder&&e.set(i.path,i)}return[...e.values()].sort((s,a)=>s.path.localeCompare(a.path))}async createTextNote(e){let r=await Ki(this.app);if(r.kind==="submitted")try{let s=await new Vr(this.app).createAndOpen({target:e,fileName:r.fileName});new u.Notice(s.openError?`Created txt note: ${s.vaultPath}. Could not open it: ${s.openError}`:`Created txt note: ${s.vaultPath}`)}catch(s){let a=s instanceof Error?s.message:String(s);new u.Notice(`Failed to create txt note: ${a}`),console.error("AI Knowledge: Create txt note failed",s)}}openSettings(){let e=this.app.setting;if(!e){new u.Notice("Obsidian settings API is unavailable.");return}e.open(),e.openTabById(this.manifest.id)}};function Eu(n){if(!n)return A;let t=n.replace(/\.md$/,"");return/^20-workflows\/[^/]+$/.test(t)?`${t}/AGENTS.md`:`${t}.md`}function bu(n){if(!n)return A;let t=n.replace(/\.md$/,"");return/^30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+$/.test(t)?`${t}/AGENTS.md`:`${t}.md`}function Pt(n){let t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Zi(n){let t=n.lastIndexOf("/");return t===-1?n:n.slice(t+1)}function Su(n){return ss(n,[{heading:"\u6E90\u7801\u4ED3\u5E93",body:["| \u9879 | \u503C |","|---|---|","| \u6E90\u7801\u9879\u76EE | `\u5F85\u586B\u5199` |","| \u9ED8\u8BA4\u5F00\u53D1\u5206\u652F | `\u5F85\u586B\u5199` |","| \u4E3B\u8981\u6A21\u5757 | \u5F85\u586B\u5199 |","| \u542F\u52A8\u6A21\u5757 | \u5F85\u586B\u5199 |","| \u5E38\u7528\u6784\u5EFA\u547D\u4EE4 | `\u5F85\u586B\u5199` |","| \u5E38\u7528\u9A8C\u8BC1\u547D\u4EE4 | `\u5F85\u586B\u5199` |","","\u4EFB\u52A1\u5F00\u53D1\u65F6\u4EE5\u4EFB\u52A1\u76EE\u5F55\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u6839\uFF0C\u518D\u6309\u672C\u8282\u6E90\u7801\u9879\u76EE\u8DEF\u5F84\u8FDB\u5165\u771F\u5B9E\u6E90\u7801\u4ED3\u5E93\u3002"].join(`
`)}])}function Au(n){return ss(n,[{heading:"AI \u4E0A\u4E0B\u6587\u6839",body:"\u672C\u4EFB\u52A1\u76EE\u5F55\u662F AI \u5F00\u53D1\u4E0A\u4E0B\u6587\u6839\uFF1B\u6E90\u7801\u4ED3\u5E93\u4E0D\u662F\u672C\u76EE\u5F55\uFF0C\u5FC5\u987B\u4ECE\u201C\u6E90\u7801\u5B9A\u4F4D\u201D\u6216\u5173\u8054\u9879\u76EE `links.md` \u8FDB\u5165\u3002"},{heading:"\u6E90\u7801\u5B9A\u4F4D",body:["- \u6E90\u7801\u4ED3\u5E93\uFF1A\u5F85\u4ECE\u5173\u8054\u9879\u76EE `links.md` \u8BFB\u53D6","- \u76EE\u6807\u6A21\u5757\uFF1A\u5F85\u586B\u5199","- \u9884\u8BA1\u4FEE\u6539\u8303\u56F4\uFF1A\u5F85\u586B\u5199"].join(`
`)},{heading:"\u6309\u9700\u8D44\u6599",body:["- \u672C\u4EFB\u52A1\u5165\u53E3\u3002","- \u9700\u8981\u9879\u76EE\u7A33\u5B9A\u77E5\u8BC6\u65F6\u8BFB\u53D6\u5173\u8054\u9879\u76EE `AGENTS.md`\u3002","- \u9700\u8981\u6E90\u7801\u8DEF\u5F84\u6216\u6587\u6863\u5165\u53E3\u65F6\u8BFB\u53D6\u5173\u8054\u9879\u76EE `links.md`\u3002","- \u53EA\u8BFB\u53D6\u4E0E\u672C\u4EFB\u52A1\u76F4\u63A5\u76F8\u5173\u7684\u6E90\u7801\u6587\u4EF6\u3002"].join(`
`)},{heading:"\u7981\u6B62\u8BFB\u53D6",body:["- \u4E0D\u9012\u5F52\u626B\u63CF\u6574\u4E2A vault\u3002","- \u4E0D\u8BFB\u53D6\u65E0\u5173 workflow\u3002","- \u4E0D\u8BFB\u53D6\u65E0\u5173\u9879\u76EE inputs\u3002","- \u4E0D\u8BFB\u53D6 `70-vault-optimization/`\uFF0C\u9664\u975E\u4EFB\u52A1\u76EE\u6807\u5C31\u662F\u4F18\u5316 vault\u3001\u63D2\u4EF6\u6216\u81EA\u52A8\u5316\u6D41\u7A0B\u3002"].join(`
`)}])}function ju(n){return ss(n,[{heading:"AI \u4E0A\u4E0B\u6587\u6839",body:"\u672C workflow \u76EE\u5F55\u662F AI \u5F00\u53D1\u4E0A\u4E0B\u6587\u6839\uFF1B\u6E90\u7801\u4ED3\u5E93\u4E0D\u662F\u672C\u76EE\u5F55\uFF0C\u5FC5\u987B\u4ECE\u5173\u8054\u9879\u76EE `links.md` \u6216\u672C workflow \u660E\u786E\u8BB0\u5F55\u7684\u6E90\u7801\u7EDD\u5BF9\u8DEF\u5F84\u8FDB\u5165\u3002"},{heading:"\u6E90\u7801\u5B9A\u4F4D",body:["- \u6E90\u7801\u4ED3\u5E93\uFF1A\u5F85\u4ECE\u5173\u8054\u9879\u76EE `links.md` \u8BFB\u53D6","- \u76EE\u6807\u6A21\u5757\uFF1A\u5F85\u586B\u5199","- \u9884\u8BA1\u4FEE\u6539\u8303\u56F4\uFF1A\u5F85\u586B\u5199"].join(`
`)},{heading:"\u6309\u9700\u8D44\u6599",body:["- \u672C workflow \u7684 `AGENTS.md` \u548C\u4EFB\u52A1\u8BF4\u660E\u6587\u4EF6\u3002","- \u9700\u8981\u9879\u76EE\u7A33\u5B9A\u77E5\u8BC6\u65F6\u8BFB\u53D6\u5173\u8054\u9879\u76EE `AGENTS.md`\u3002","- \u9700\u8981\u6E90\u7801\u8DEF\u5F84\u6216\u6587\u6863\u5165\u53E3\u65F6\u8BFB\u53D6\u5173\u8054\u9879\u76EE `links.md`\u3002","- \u53EA\u8BFB\u53D6\u4E0E\u672C\u4EFB\u52A1\u76F4\u63A5\u76F8\u5173\u7684\u8F93\u5165\u6750\u6599\u548C\u6E90\u7801\u6587\u4EF6\u3002"].join(`
`)},{heading:"\u7981\u6B62\u8BFB\u53D6",body:["- \u4E0D\u9012\u5F52\u626B\u63CF\u6574\u4E2A vault\u3002","- \u4E0D\u8BFB\u53D6\u65E0\u5173 workflow\u3002","- \u4E0D\u8BFB\u53D6\u65E0\u5173\u9879\u76EE inputs\u3002","- \u4E0D\u8BFB\u53D6 `70-vault-optimization/`\uFF0C\u9664\u975E\u4EFB\u52A1\u76EE\u6807\u5C31\u662F\u4F18\u5316 vault\u3001\u63D2\u4EF6\u6216\u81EA\u52A8\u5316\u6D41\u7A0B\u3002"].join(`
`)}])}function ss(n,t){let e=t.filter(s=>!rs(n,s.heading)).map(s=>`## ${s.heading}

${s.body}`);return e.length===0?n:`${n.trimEnd()}

${e.join(`

`)}
`}function rs(n,t){let e=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`^#{1,6}\\s+${e}\\s*$`,"m").test(n)}function Cu(n,t){let e=[],r=/^30-projects\/[^/]+\/inputs\/\d{4}\/\d{2}\/[^/]+\/(?:AGENTS|index)\.md$/.test(n),s=/^20-workflows\/[^/]+\/AGENTS\.md$/.test(n);if(!r&&!s)return["\u5F53\u524D\u6587\u4EF6\u4E0D\u662F\u9879\u76EE\u4EFB\u52A1 AGENTS.md \u6216 workflow AGENTS.md\u3002"];t.includes("\u5173\u8054\u9879\u76EE")||e.push("\u7F3A\u5C11\u5173\u8054\u9879\u76EE\u3002"),Lu(t)||e.push("\u76EE\u6807\u5206\u652F\u4E3A\u7A7A\u6216\u4ECD\u4E3A `\u5F85\u586B\u5199`\u3002");for(let a of["\u5F53\u524D\u4EFB\u52A1","\u8DEF\u7531","\u95E8\u69DB"])rs(t,a)||e.push(`\u7F3A\u5C11 ${a} section\u3002`);return rs(t,"\u6267\u884C\u7ED3\u679C")&&e.push("AGENTS.md \u5305\u542B\u6267\u884C\u7ED3\u679C section\uFF0C\u5E94\u8FC1\u79FB\u5230 execution.md\u3002"),t.length>3*1024&&e.push("AGENTS.md \u8D85\u8FC7 3KB\uFF0C\u5EFA\u8BAE\u62C6\u5206\u5230 overview.md\u3001execution.md\u3001todo.md \u6216 risk.md\u3002"),e}function Iu(){return["# \u6267\u884C\u8BB0\u5F55","","## \u5F53\u524D\u7ED3\u679C","- \u4FEE\u6539\u6587\u4EF6\uFF1A","- \u9A8C\u8BC1\u65B9\u5F0F\uFF1A","- \u98CE\u9669\uFF1A","- \u540E\u7EED\u5F85\u529E\uFF1A",""].join(`
`)}var ns=class extends u.FuzzySuggestModal{constructor(e,r,s){super(e);this.folders=r;this.resolveFolder=s;this.setPlaceholder("Select an inbox folder to organize")}getItems(){return this.folders}getItemText(e){return e.path}onChooseItem(e){this.resolveFolder(e)}onClose(){super.onClose(),this.resolveFolder(null)}};function $u(n){return n.path===Ut.replace(/\/$/,"")||n.path.startsWith(Ut)}function Lu(n){let t=/^-\s*目标(?:开发)?分支[：:]\s*(.+?)\s*$/;return n.split(/\r?\n/).some(e=>{let r=e.trim().match(t);if(r)return Qi(r[1]);if(!e.includes("|"))return!1;let s=e.replace(/`/g,"").split("|").map(a=>a.trim()).filter(Boolean);return s.length<2||s.includes("\u9879\u76EE")||s.includes("\u76EE\u6807\u5F00\u53D1\u5206\u652F")?!1:Qi(s[s.length-1])})}function Qi(n){let t=n.trim();return t.length>0&&t!=="\u5F85\u586B\u5199"&&!/^-+$/.test(t)}function Kr(n,t){return n.filter(e=>e.severity===t).length}async function Yt(n){await navigator.clipboard.writeText(n)}

/* nosourcemap */