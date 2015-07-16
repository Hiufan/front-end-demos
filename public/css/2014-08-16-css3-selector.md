# css3 selector
> example at code chapter-2

### 基本选择器
- *
- E
- #id
- .class
- selector1, selectorN

### 层次选择器
- E F
- E>F 匹配E后面的一个F元素
- E+F 匹配E相邻的一个F元素
- E~F 匹配E后面的所有F元素

### 伪类选择器

#### 动态伪类选择器
- E:link
- E:visited
- E:active
- E:hover
- E:focus

#### 目标伪类选择器
- E:target 选择匹配E的所有元素，且匹配元素被相关URI指向

#### 语言伪类选择器
- E:target 匹配指定了lang属性，而且其职为language

#### UI元素状态伪类选择器
- E:checked 选中
- E:enabled 启用
- E:disabled 不可用

#### 结构伪类选择器
- E:first-child
- E:last-child
- E:root
- E F:nth-child(n)
- E F:nth-last-child(n)
- E:nth-of-type(n)
- E:nth-last-of-type(n)
- E:first-of-type
- E:last-of-type
- E:only-child 选择父元素只包含一个子元素
- E:only-of-type 选择父元素内只包含一个同类型子元素
- E:empty 选择没有子元素的元素，而且该元素不包含任何文本节点

#### 否定伪类选择器
- E:not(F) 匹配所有元素F外的E元素

### 伪元素
- ::first-letter
- ::first-line
- ::before
- ::after
- ::selection 只接受 background-color 和 color

### 属性选择器
- E[attr]
- E[attr=val]
- E[attr|=val]
- E[attr~=val]
- E[attr*=val]
- E[attr^=val] 匹配有attr并且value以val开头的元素
- E[attr$=val] 匹配有attr并且value以val结尾的元素


