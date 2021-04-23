## Functions

<dl>
<dt><a href="#add">add(augend, addend)</a> ⇒ <code>string</code></dt>
<dd><p>加法</p></dd>
<dt><a href="#divide">divide(dividend, divisor)</a> ⇒ <code>string</code></dt>
<dd><p>除法</p></dd>
<dt><a href="#fixed">fixed(handle, fixedNum)</a> ⇒ <code>string</code></dt>
<dd><p>数字字符串 四舍五入</p></dd>
<dt><a href="#gt">gt(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>字符串数字 大于</p></dd>
<dt><a href="#gte">gte(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>字符串数字 大于等于</p></dd>
<dt><a href="#lt">lt(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>小于</p></dd>
<dt><a href="#lte">lte(vala, valb)</a> ⇒ <code>boolean</code></dt>
<dd><p>小于等于</p></dd>
<dt><a href="#multiply">multiply(multiplier, multiplicand)</a> ⇒ <code>string</code></dt>
<dd><p>乘法</p></dd>
<dt><a href="#parseJSON">parseJSON(json, defaultValue?)</a> ⇒ <code>any</code></dt>
<dd><p>安全解析JSON</p></dd>
<dt><a href="#parseSearch">parseSearch(searchStr)</a> ⇒ <code>StringObject</code></dt>
<dd><p>解析 search</p></dd>
</dl>

<a name="add"></a>

## add(augend, addend) ⇒ <code>string</code>
<p>加法</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| augend | <code>string</code> | <p>被加数</p> |
| addend | <code>string</code> | <p>加数</p> |

**Example**  
```js
add('1.1','1.8')// => '2.9'
```
<a name="divide"></a>

## divide(dividend, divisor) ⇒ <code>string</code>
<p>除法</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| dividend | <code>string</code> | <p>被除数</p> |
| divisor | <code>string</code> | <p>除数</p> |

**Example**  
```js
divide('1.21','1.1')// => '1.1'
```
<a name="fixed"></a>

## fixed(handle, fixedNum) ⇒ <code>string</code>
<p>数字字符串 四舍五入</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>string</code> | <p>待处理值</p> |
| fixedNum | <code>number</code> | <p>保留位数</p> |

**Example**  
```js
fixed('3.456',2)// => '3.46'
```
**Example**  
```js
fixed('3.456',5)// => '3.45600'
```
<a name="gt"></a>

## gt(vala, valb) ⇒ <code>boolean</code>
<p>字符串数字 大于</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

**Example**  
```js
gt('1.2','1.1')// => true
```
**Example**  
```js
gt('1.2','1.3')// => false
```
<a name="gte"></a>

## gte(vala, valb) ⇒ <code>boolean</code>
<p>字符串数字 大于等于</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

**Example**  
```js
gte('1.2','1.2')// => true
```
**Example**  
```js
gte('1.2','1.3')// => false
```
<a name="lt"></a>

## lt(vala, valb) ⇒ <code>boolean</code>
<p>小于</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

**Example**  
```js
lt('1.1','1.0')// => false
```
**Example**  
```js
lt('1.1','1.1')// => false
```
**Example**  
```js
lt('1.1','1.2')// => true
```
<a name="lte"></a>

## lte(vala, valb) ⇒ <code>boolean</code>
<p>小于等于</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| vala | <code>string</code> | 
| valb | <code>string</code> | 

**Example**  
```js
lte('1.1','1.0')// => false
```
**Example**  
```js
lte('1.1','1.1')// => true
```
**Example**  
```js
lte('1.1','1.2')// => true
```
<a name="multiply"></a>

## multiply(multiplier, multiplicand) ⇒ <code>string</code>
<p>乘法</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| multiplier | <code>string</code> | <p>被乘数</p> |
| multiplicand | <code>string</code> | <p>乘数</p> |

**Example**  
```js
multiply('1.1','1.1')// => '1.21'
```
<a name="parseJSON"></a>

## parseJSON(json, defaultValue?) ⇒ <code>any</code>
<p>安全解析JSON</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>string</code> | <p>待解析JSON字符串</p> |
| defaultValue? | <code>any</code> | <p>解析失败的默认值 可不传</p> |

<a name="parseSearch"></a>

## parseSearch(searchStr) ⇒ <code>StringObject</code>
<p>解析 search</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| searchStr | <code>string</code> | 

**Example**  
```js
parseSearch()// => {}
```
**Example**  
```js
parseSearch('')// => {}
```
**Example**  
```js
parseSearch('?name=kangkang&age=12')// => {name: "kangkang", age: "12"}
```
